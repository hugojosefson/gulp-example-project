'use strict';
/* jshint node: true */

var URL = require('url');

var replaceBaseUrl = require('./replace-base-url');

/**
 * Middleware to use at the start of the chain, if the app is behind a proxy.
 *
 * Makes the app believe the user requested the public version of the url.
 * This should make hypermedia services output the correct urls in links. For
 * example Percolator works correctly when this middleware is used.
 *
 * @param publicBaseUrl the public url which the proxy listens to, e.g.
 * https://www.domain.tld/
 */
function middlewareFactory(publicBaseUrl) {
    var base = URL.parse(publicBaseUrl);

    return function (req, res, handler, cb) {
        req.uri.url = replaceBaseUrl(req.uri.url, publicBaseUrl);
        req.headers.host = base.host;
        cb();
    };
}

module.exports = middlewareFactory;