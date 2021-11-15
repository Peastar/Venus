'use strict';

const webpack = require('webpack'),
    path = require('path'),
    // glob = require('glob'),
    ESLintPlugin = require('eslint-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

const env = process.env.NODE_ENV;
const source = path.join(__dirname, '../source');

module.exports = {
    context: source,
    // entry: [source + '/scripts/index.js'],
    // output: {
    //     path: paths.build,
    //     filename: 'scripts/[name].bundle.js',
    //     publicPath: '',
    // },
    output: {
        path: path.join(__dirname, '../destination'),
        publicPath: '/',
        filename: 'scripts/[name].js',
        // hotUpdateChunkFilename: 'hot/hot-update.js',
        hotUpdateMainFilename: 'hot/[hash].hot-update.json',
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(env),
            },
        }),
        new MiniCssExtractPlugin({
            filename: 'styles/[name].css',
            chunkFilename: 'styles/[id].css',
        }),
        new HtmlWebpackPlugin({
            favicon: source + '/images/favicon.ico',
            template: source + '/html/index.html',
            filename: 'index.html',
        }),
        new ESLintPlugin()
    ],
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
                test: /\.(png|jpe?g|gif|ico|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]',
                    publicPath: '../',
                },
            },
            {
                test: /\.(ttf|eot|woff2?)$/,
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
};
