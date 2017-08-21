/* jshint node: true */
'use strict';

var gulp = require('gulp');
var del = require('del');

var paths = require('../paths');

/**
 * Cleans out all downloaded bower files.
 */
gulp.task('clean-bower', function () {
    return del([
        paths.clean.bower
    ]);
});
