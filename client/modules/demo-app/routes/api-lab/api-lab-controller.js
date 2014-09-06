angular.module('demoApp').controller('ApiLabController', function (entryPointResource, todosResource) {
    'use strict';

    this.entryPointResource = entryPointResource;
    this.todosResource = todosResource;
});