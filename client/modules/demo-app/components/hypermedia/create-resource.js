angular.module('demoApp').factory('createResource', function ($rootScope, $http) {
    'use strict';

    var defaultResource = {
        fetch: function fetch() {
            var self = this;

            return $http.get(this.url)
                .success(function (response) {
                    self.error = null;
                    self.response = response;
                })
                .error(function (error) {
                    self.error = error;
                    self.response = null;
                });
        }
    };

    function createResource(options) {
        var resource = $rootScope.$new();
        angular.extend(resource, defaultResource, options);

        resource.$watch('url', function (newUrl) {
            if (newUrl) {
                resource.fetch();
            } else {
                resource.error = null;
                resource.response = null;
            }
        });

        return resource;
    }

    return createResource;
});