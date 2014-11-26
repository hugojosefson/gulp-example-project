'use strict';

var add = require('./add');

describe('add', function () {
    it('adds two numeric arguments', function () {
        expect(add(1, 2)).to.equal(3);
    });
});