const path = require('path');

const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../client/config/webpack.dev');
const compiler = webpack(config);

const app = express();
const port = process.env.PORT;
console.log(port);
app.use(
    webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
    })
);

app.use(
    webpackHotMiddleware(compiler, {
        log: false,
        path: '/__webpack_hmr',
        heartbeat: 10 * 1000,
    })
);

app.get('*', (req, res) => {
    const filename = path.join(compiler.outputPath, 'index.html');
    compiler.outputFileSystem.readFile(filename, (err, result) => {
        res.set('content-type', 'text/html');
        res.send(result);
        res.end();
    });
});

app.listen(port, () => console.log(`Server is listening on port: ${port}`));
