/* jshint node: true */
'use strict';

var _ = require('lodash');
var CRUDCollection = require('percolator').CRUDCollection;
var createGetStorageFunction = require('./create-get-storage-function');

function createCRUDCollectionWithStorage(storageId, CRUDCollectionOptions, onStorageCreated) {
    var getStorage = createGetStorageFunction(storageId, onStorageCreated);
    return new CRUDCollection(_.extend(
        {},
        createDefaultCRUDCollectionOptions(getStorage),
        CRUDCollectionOptions
    ));
}

function createDefaultCRUDCollectionOptions(getStorage) {
    return {
        create: function (req, res, obj, cb) {
            obj.created = new Date();
            var newKey = parseInt(_.max(_.keys(getStorage(req))), 10) + 1;
            getStorage(req)[newKey] = obj;
            cb();
        },

        update: function (req, res, id, obj, cb) {
            getStorage(req)[id] = obj;
            cb();
        },

        destroy: function (req, res, id, cb) {
            delete getStorage(req)[id];
            cb();
        },

        list: function (req, res, cb) {
            cb(null, getStorage(req));
        },

        fetch: function (req, res, cb) {
            var id = req.uri.child();
            var row = getStorage(req)[id];
            if (!!row) {
                cb(null, row);
            } else {
                cb(true);
            }
        }
    };
}

module.exports = createCRUDCollectionWithStorage;