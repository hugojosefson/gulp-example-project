angular.module('demoApp').controller('TodoListController', function (todosResource, deleteAllProperties) {
    'use strict';

    var self = this;
    this.todosResource = todosResource;

    this.create = function (listResource, item) {
        listResource.create(item).then(function () {
            self.newItem = null;
        });
    };

    this.clear = deleteAllProperties;

    this.isGreaterThan = function (a, b) {
        return a > b;
    };

    var knownPropertiesOrder = {
        'title': 1,
        'done': 999
    };
    this.sortKnownProperties = function (property) {
        return knownPropertiesOrder[property.key] || 500;
    };

});