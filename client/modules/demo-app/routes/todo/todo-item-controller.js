angular.module('demoApp').controller('TodoItemController', function (todosResource, $routeParams, $location) {
    'use strict';

    var self = this;
    var url = decodeURIComponent($routeParams.url);

    todosResource.$watch('items', function (items) {
        if (items) {
            var itemInArray = items.filter(function (item) {
                return item && item.url === url;
            });
            self.item = itemInArray && itemInArray[0];
        } else {
            self.item = null;
        }
    });

    this.delete = function (item) {
        item.delete().then(function () {
            $location.path('/todo');
        });
    };

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