angular.module('demoApp').controller('TodoItemController', function (Todo, $routeParams) {
    'use strict';

    this.item = Todo.get({id: $routeParams.index});
});