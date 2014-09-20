/* jshint node: true */
'use strict';

function createGetStorageFunction(storageId, onStorageCreated) {
    return function getStorage(req) {
        var mainStorage = getInMemoryStorage(req);
        createStorageIfNotCreated(mainStorage, storageId, onStorageCreated);
        return mainStorage[storageId];
    };
}

function getInMemoryStorage(req) {
    if (typeof req.app.inMemoryStorage === 'undefined') {
        req.app.inMemoryStorage = {};
    }
    return req.app.inMemoryStorage;
}

function createStorageIfNotCreated(mainStorage, storageId, onStorageCreated) {
    if (typeof mainStorage[storageId] === 'undefined') {
        mainStorage[storageId] = {};
        if (typeof onStorageCreated === 'function') {
            onStorageCreated(mainStorage[storageId]);
        }
    }
}

module.exports = createGetStorageFunction;