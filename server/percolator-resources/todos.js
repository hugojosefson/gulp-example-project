/* jshint node: true */
'use strict';

var _ = require('lodash');
var createCRUDCollectionWithStorage = require('../lib/create-crud-collection-with-storage');

var todoCrudCollection = createCRUDCollectionWithStorage(
    'todo',
    {
        schema: {
            description: 'Todo item',
            type: 'object',
            properties: {
                title: {
                    title: 'Title',
                    type: 'string',
                    required: true,
                    maxLength: 256
                },
                description: {
                    title: 'Description',
                    type: 'string',
                    maxLength: 65536
                },
                done: {
                    title: 'Done',
                    type: 'boolean'
                }
            }
        }
    },
    function onStorageCreated(storage) {
        _.extend(storage, {
            1: {title: 'Buy milk'},
            2: {title: 'Finish this app', description: 'Get all of the stuff in there.'}
        });
    }
);

module.exports = todoCrudCollection;
