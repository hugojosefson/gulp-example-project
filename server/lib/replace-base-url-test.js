'use strict';
/* jshint node: true */
/* global describe it */

var expect = require('chai').expect;

var replaceBaseUrl = require('./replace-base-url');

describe('replace url', function () {
    function expectReplacement(input, newBaseUrl, expected) {
        it(input + ' + ' + newBaseUrl + ' -> ' + expected + '', function () {
            var actual = replaceBaseUrl(input, newBaseUrl);
            expect(actual).equals(expected);
        });
    }

    expectReplacement('http://localhost:3001/api/', 'http://localhost:3000', 'http://localhost:3000/api/');
    expectReplacement('http://localhost:3001/api', 'http://localhost:3000', 'http://localhost:3000/api');
    expectReplacement('http://localhost:3001/api/todos', 'http://localhost:3000', 'http://localhost:3000/api/todos');
    expectReplacement('http://localhost:3001', 'http://localhost:3000', 'http://localhost:3000/');
    expectReplacement('http://localhost', 'http://localhost:3000', 'http://localhost:3000/');
    expectReplacement('http://localhost:3001/api/todos', 'https://www.domain.tld', 'https://www.domain.tld/api/todos');
});
