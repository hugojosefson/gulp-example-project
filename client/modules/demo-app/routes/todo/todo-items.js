angular.module('demoApp').factory('Todo', function ($resource) {
    'use strict';

    var Todo = $resource('/api/todos/:id', {id: '@id'});
    return Todo;
});