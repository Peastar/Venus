'use strict';

const webpack = require('webpack'),
    path = require('path'),
    // glob = require('glob'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    {CleanWebpackPlugin} = require('clean-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
    ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin'),
    TerserPlugin = require('terser-webpack-plugin');

const env = process.env.NODE_ENV;
const isDevelopment = env === 'development';
const source = path.join(__dirname, './source');

module.exports = {
    mode: env,

    devtool:
        env === 'production'
            ? false
            : isDevelopment && 'inline-source-map',

    context: source,

    entry: {
        main: ['webpack-hot-middleware/client', source + '/scripts/index'],
    },
    output: {
        path: path.join(__dirname, './destination'),
        publicPath: '/',
        filename: 'scripts/[name].js',
        // hotUpdateChunkFilename: 'hot/hot-update.js',
        hotUpdateMainFilename: 'hot/[hash].hot-update.json',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: source,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react',
                            ],
                            plugins: ['@babel/plugin-transform-runtime'],
                            cacheDirectory: true,
                        },
                    },
                ],
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                    },
                ],
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
            },
            {
                test: /\.s?p?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[local]--[hash:base64:5]',
                            },
                            sourceMap: true,
                            importLoaders: 2,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.(png|jpe?g|gif|ico)$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]',
                    publicPath: '../',
                },
            },
            {
                test: /\.(ttf|eot|svg|woff2?)$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[ext]/[name].[ext]',
                    publicPath: '../',
                },
            },
            {
                test: /\.(mp4|ogv|webm)$/,
                loader: 'file-loader',
                options: {
                    name: 'media/[name].[ext]',
                    publicPath: '../',
                },
            },
            {
                test: /\.pdf$/,
                loader: 'file-loader',
                options: {
                    name: 'pdf/[name].[ext]',
                    publicPath: '../',
                },
            },
        ],
    },
    plugins: [
        isDevelopment && new webpack.HotModuleReplacementPlugin(),
        isDevelopment &&
        new ReactRefreshPlugin({
            overlay: {
                sockIntegration: 'whm',
            },
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(env),
            },
        }),
        env === 'production' && new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'styles/[name].css',
            chunkFilename: 'styles/[id].css',
        }),
        new HtmlWebpackPlugin({
            favicon: source + '/images/favicon.ico',
            template: source + '/html/index.html', // template file
            filename: 'index.html',
        }),
    ].filter(Boolean),
    resolve: {
        extensions: [
            '.js',
            '.json',
            '.jsx',
            '.scss',
            '.css',
            '.pcss',
            '.ts',
            '.tsx',
        ],
        modules: ['node_modules'],
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
};
