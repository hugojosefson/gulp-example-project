/* jshint node: true */
'use strict';

/**
 * Converts inputString to a string of spaces, of equal length.
 * @param inputString
 * @returns {string} spaces matching the length of inputString
 */
module.exports = function toSpaces(inputString) {
    return (new Array(inputString.length + 1)).join(' ');
};