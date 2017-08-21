/* jshint node: true */
'use strict';

var gulp = require('gulp');
var runSequence = require('gulp-sequence');

/**
 * Builds everything in the /dist directory.
 */
gulp.task('dist', function (cb) {
    runSequence('clean-build', ['server', 'client'], cb);
});
