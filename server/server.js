#!/usr/bin/env node
/* jshint node: true */
'use strict';

var path = require('path');
var Percolator = require('percolator').Percolator;
var toSpaces = require('./lib/to-spaces');

var staticDir = path.resolve(__dirname, 'client');
var resourceDir = path.resolve(__dirname, 'percolator-resources');
var app = {
    protocol: 'http',
    resourcePath: '/api',
    staticDir: staticDir,
    port: process.env.PORT || 3000
};

var server = new Percolator(app);
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
            }
        });
    }
});


