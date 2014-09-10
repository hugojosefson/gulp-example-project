angular.module('demoApp').controller('TodoListController', function (Todo) {
    'use strict';

    this.items = Todo.get();
});