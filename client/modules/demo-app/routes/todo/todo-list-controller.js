angular.module('demoApp').controller('TodoListController', function (todosResource) {
    'use strict';

    this.todosResource = todosResource;
});