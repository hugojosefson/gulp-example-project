'use strict';

var add = require('./add');

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('secondParagraph').innerText = 'JS is active because 2 + 3 = ' + add(2, 3) + '.';
});