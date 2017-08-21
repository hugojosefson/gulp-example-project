/* jshint node: true */
'use strict';

var gulp = require('gulp');
var del = require('del');

var paths = require('../paths');

/**
 * Cleans out all built files.
 */
gulp.task('clean-build', function () {
    return del([
        paths.clean.build
    ]);
});
