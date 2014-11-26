/* jshint node: true */
'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var isProduction = require('is-production');

var paths = require('../paths');

/**
 * Builds js bundle.
 */
gulp.task('client-js-bundle', function () {
    return browserify(paths.src.client.indexJs)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulpif(isProduction, uglify()))
        .pipe(gulp.dest('./dist/client'));
});