angular.module('demoApp').filter('encodeURIComponent', function () {
    'use strict';

    return window.encodeURIComponent;
});