/* jshint node: true */
'use strict';

var gulp = require('gulp');
var karma = require('karma').server;

var paths = require('../paths');

gulp.task('test-client-unit', ['client-usemin'], function (done) {
    karma.start({
        configFile: paths.test.client.karmaConf,
        singleRun: true
    }, done);
});