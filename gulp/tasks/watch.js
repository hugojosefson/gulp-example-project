/* jshint node: true */
'use strict';

var gulp = require('gulp');
var server = require('gulp-develop-server');
var browserSync = require('browser-sync');

var paths = require('../paths');

var port = Number(process.env.PORT) || 3000;
var internalPort = process.env.INTERNAL_PORT || (port + 1);

gulp.task('server:start', ['dist'], function (cb) {
    server.listen({
        cwd: 'dist/',
        path: 'server.js',
        env: {
            NODE_ENV: 'development',
            PORT: internalPort,
            BEHIND_PROXY_URL: 'http://localhost' + (port === 80 ? '' : ':' + port) + '/'
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
        proxy: 'localhost:' + internalPort,
        port: port
    });
});

/**
 * Watches for file changes, rebuilds.
 */
gulp.task('watch', ['server:start', 'browser-sync'], function () {
    gulp.watch(paths.src.client.modules, ['client-js-bundle', browserSync.reload]);
    gulp.watch(paths.src.client.moduleTemplates, ['client-js-bundle', browserSync.reload]);
    gulp.watch(paths.src.client.moduleStyles, ['client-css-bundle', browserSync.reload]);
    gulp.watch(paths.src.client.moduleNonJs, ['angular-module-non-js', browserSync.reload]);
    gulp.watch(paths.src.client.nonAngularModulesExceptBowerComponents, ['client-non-angular-modules', browserSync.reload]);
    gulp.watch(paths.src['bower-json'], ['client-non-angular-modules', browserSync.reload]);
    gulp.watch(paths.src.server, ['server:restart:browsersync']);
});
