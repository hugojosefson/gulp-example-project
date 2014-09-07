angular.module('demoApp').directive('jsonSchemaFormFields', function () {
    'use strict';

    var defaultOrder = 500;
    var knownPropertiesOrder = {
        'title': 1,
        'done': 999
    };

    function sortKnownProperties(property) {
        return knownPropertiesOrder[property.key] || defaultOrder;
    }

    function isGreaterThan(a, b) {
        return a > b;
    }

    return {
        scope: {
            schema: '=',
            item: '='
        },
        templateUrl: 'modules/demo-app/components/json-schema-form-fields/json-schema-form-fields.html',
        link: function (scope) {
            scope.isGreaterThan = isGreaterThan;
            scope.sortKnownProperties = sortKnownProperties;
        }
    };
});