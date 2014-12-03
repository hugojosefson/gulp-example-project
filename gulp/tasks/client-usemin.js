/* jshint node: true */
'use strict';

var gulp = require('gulp');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var rev = require('gulp-rev');
var isProduction = require('is-production')();

var paths = require('../paths');

function createUseminConfig(isProduction) {
    if (isProduction) {
        return {
            html: [minifyHtml({empty: true})],
            css: [minifyCss(), 'concat', rev()],
            js: [uglify(), rev()],
            outputRelativePath: 'assets'
        };
    } else {
        return {
            outputRelativePath: 'assets'
        };
    }
}

/**
 * Collects scripts, css from index.html, and updates index.html references to them.
 */
gulp.task('client-usemin', function () {

    var config = createUseminConfig(isProduction);

    return gulp.src(paths.src.client.html)
        .pipe(usemin(config))
        .pipe(gulp.dest('./dist/client'));
});