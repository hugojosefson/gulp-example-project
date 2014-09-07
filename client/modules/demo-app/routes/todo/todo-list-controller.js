angular.module('demoApp').controller('TodoListController', function (todosResource, deleteAllProperties) {
    'use strict';

    var self = this;
    this.todosResource = todosResource;
    this.newItem = {};

    this.create = function (listResource, item) {
        listResource.create(item).then(function () {
            self.clear(item);
        });
    };

    this.clear = deleteAllProperties;

});