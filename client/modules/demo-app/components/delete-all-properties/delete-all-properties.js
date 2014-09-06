angular.module('demoApp').value('deleteAllProperties', function (obj) {
    'use strict';

    Object.keys(obj).forEach(function (key) {
        delete obj[key];
    });
});