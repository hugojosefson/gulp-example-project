angular.module('demoApp').config(function ($routeProvider) {
    'use strict';

    $routeProvider
        .when('/', {
            templateUrl: 'modules/demo-app/routes/root/root.html'
        })
        .when('/greeting', {
            templateUrl: 'modules/demo-app/routes/greeting/greeting.html'
        })
        .when('/todo', {
            templateUrl: 'modules/demo-app/routes/todo/list.html'
        })
        .when('/todo/:url', {
            templateUrl: 'modules/demo-app/routes/todo/details.html'
        })
        .when('/api-lab', {
            templateUrl: 'modules/demo-app/routes/api-lab/api-lab.html'
        })
        .otherwise({
            template: '<h1>404 SPA route not found</h1>'
        });
});