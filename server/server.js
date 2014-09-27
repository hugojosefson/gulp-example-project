#!/usr/bin/env node
/* jshint node: true */
'use strict';

var url = require('url');
var path = require('path');
var Percolator = require('percolator').Percolator;
var toSpaces = require('./lib/to-spaces');
var behindAProxy = require('./lib/behind-a-proxy-middleware');

var staticDir = path.resolve(__dirname, 'client');
var resourceDir = path.resolve(__dirname, 'percolator-resources');
var app = {
    protocol: 'http',
    resourcePath: '/api',
    staticDir: staticDir,
    port: process.env.PORT || 3000
};

var server = new Percolator(app);

if (process.env.BEHIND_PROXY_URL) {
    server.before(behindAProxy(process.env.BEHIND_PROXY_URL));
}

server.after(function (req/*, res, handler*/) {
    console.log(' <-- ', req.method, ' ', req.url);
});

server.routeDirectory(resourceDir, app.resourcePath, function (err) {
    console.log('routed resources in ' + resourceDir);

    if (err) {
        console.error('Routing error');
        console.error(err);
    } else {
        server.on('response', function (data) {
            console.log('response');
            console.log(data);
        });
        server.on('errorResponse', function (data) {
            console.error('error response');
            console.error(data.req.method, data.req.url, data.type, data.message, data.detail);
        });
        server.listen(function (err) {
            if (err) {
                console.error(err);
                throw err;
            } else {
                console.log('Serving http://localhost:' + server.port + '/' + toSpaces(app.resourcePath) + ' from ' + staticDir + '/');
                console.log('Serving http://localhost:' + server.port + app.resourcePath + '/ from ' + resourceDir + '/');
                if (process.env.BEHIND_PROXY_URL) {
                    console.log('Behind proxy at ' + process.env.BEHIND_PROXY_URL);
                }
            }
        });
    }
});


