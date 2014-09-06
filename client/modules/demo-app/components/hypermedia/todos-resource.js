angular.module('demoApp').factory('todosResource', function (entryPointResource) {
    'use strict';

    return entryPointResource.follow('todos');
});