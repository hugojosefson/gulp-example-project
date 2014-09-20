/* jshint node: true */
'use strict';

var apiRootResourceHandler = {
    GET: function (req, res) {
        res.object({})
            .link('todos', req.uri.child('todos'))
            .send();
    }
};

module.exports.handler = apiRootResourceHandler;
