angular.module('demoApp').filter('toArray', function () {
    'use strict';

    return function (input) {
        var result = [];
        for (var key in input) {
            var item = input[key];
            item.key = key;
            result.push(item);
        }
        return result;
    };
});