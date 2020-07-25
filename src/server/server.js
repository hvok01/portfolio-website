import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Helmet } from 'react-helmet';
import serverRoutes from '../serverRoutes';

dotenv.config();

const { ENV, PORT } =process.env;

const app = express();

if(ENV == 'development'){
    console.log("desarrollo");
    const webpackConfig = require('../../webpack.config');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const compiler = webpack(webpackConfig);
    const serverConfig = { port: PORT, hot: true };

    app.use(webpackDevMiddleware(compiler,serverConfig));
    app.use(webpackHotMiddleware(compiler));
    app.use('/favicon.ico', express.static(__dirname + '../favicon.png'));
} else {
    console.log("produccion");
    app.use(express.static(`${__dirname}/public`));
    /* app.use(helmetMiddeware());
    app.use(helmetMiddeware.permittedCrossDomainPolicies());
    app.disable('x-powered-by'); */
}

const setResponse = (html) => {
    const helmet = Helmet.renderStatic();
    return (
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="shortcut icon" href="favicon.ico">
            <link rel="stylesheet" href="app.css" type="text/css">
            ${helmet.title.toString()}
        </head>
        <body>
            <div id='app'>${html}</div>
            <script src="app.js" type="text/javascript"></script>
        </body>
        </html>`
    )
}

const renderApp = (req, res) => {
    const html = renderToString(
        <StaticRouter location={req.url} context={{}}>
            {renderRoutes(serverRoutes)}
        </StaticRouter>, 
    );
    res.send(setResponse(html));
};

app.get('*', renderApp);

app.listen(PORT, (err) => {
    if(err) console.log(err);
    else console.log(`servidor corriendo en puerto ${PORT}`);
});


