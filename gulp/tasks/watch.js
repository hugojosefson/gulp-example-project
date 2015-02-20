/* jshint node: true */
'use strict';

var gulp = require('gulp');
var server = require('gulp-develop-server');
var browserSync = require('browser-sync');

var paths = require('../paths');

gulp.task('server:start', ['dist'], function (cb) {
    server.listen({
        cwd: 'dist/',
        path: 'server.js',
        env: {
            NODE_ENV: 'development',
            PORT: 3001
        },
        successMessage: (/^Serving /)
    }, cb);
});

gulp.task('server:restart', ['server'], function (cb) {
    server.restart(cb);
});

gulp.task('server:restart:browsersync', ['server:restart'], function (cb) {
    browserSync.reload();
    cb();
});

gulp.task('browser-sync', ['server:start'], function () {
    browserSync({
        open: false,
        proxy: 'localhost:3001',
        port: process.env.PORT || 3000
    });
});

/**
 * Watches for file changes, rebuilds.
 */
gulp.task('watch', ['server:start', 'browser-sync'], function () {
    gulp.watch(paths.src.client.js, ['client-js-bundle', browserSync.reload]);
    gulp.watch(paths.src.client.css, ['client-css-bundle', browserSync.reload]);
    gulp.watch(paths.src.client.static, ['client-static', browserSync.reload]);
    gulp.watch(paths.src['bower-json'], ['bower', browserSync.reload]);
    gulp.watch(paths.src.server, ['server:restart:browsersync']);
});
