angular.module('demoApp').controller('TodoItemController', function (todosResource, $routeParams) {
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

    this.isGreaterThan = function (a, b) {
        return a > b;
    };

});