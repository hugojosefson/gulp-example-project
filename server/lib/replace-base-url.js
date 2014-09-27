'use strict';
/* jshint node: true */

var URL = require('url');

/**
 * Replaces the beginning of url with newBaseUrl.
 *
 * @param url Existing url
 * @param newBaseUrl New start for the url
 * @returns the new url
 */
function replaceBaseUrl(url, newBaseUrl) {
    var result = URL.parse(url);
    var newBase = URL.parse(newBaseUrl);

    delete result.host; // so it doesn't override hostname + port
    result.protocol = newBase.protocol;
    result.hostname = newBase.hostname;
    result.port = newBase.port;

    return URL.format(result);
}

module.exports = replaceBaseUrl;