angular.module('demoApp').factory('entryPointResource', function (createResource) {
    'use strict';

    return createResource({url: '/api'});
});