/* jshint node: true */
'use strict';

var gulp = require('gulp');

/**
 * Builds the client.
 */
gulp.task('client', [
    'client-usemin',
    'client-static'
]);
