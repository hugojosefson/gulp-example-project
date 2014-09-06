angular.module('demoApp').factory('createResource', function ($rootScope, $http, $parse) {
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
        },
        follow: function follow(rel) {
            return createResource({
                parent: this,
                followsRel: rel
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

        if (resource.parent && resource.followsRel) {
            resource.parent.$watch('response._links.' + resource.followsRel + '.href', function (newUrl) {
                resource.url = newUrl;
            });
        }

        resource.$watch('response._items', function (items) {
            if (items) {
                resource.items = Object.keys(items).map(function createItemResource(id) {
                    var item = items[id];
                    var url = $parse('_links.self.href')(item);
                    return url && createResource({
                        url: url,
                        parent: resource
                    });
                });
            } else {
                resource.items = null;
            }
        });

        return resource;
    }

    return createResource;
});