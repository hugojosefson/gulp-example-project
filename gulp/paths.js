/* jshint node: true */
'use strict';

var serverTests = 'server/**/*-test.js';

module.exports = {
    src: {
        'package-json': 'package.json',
        server: [
            'server/**',
            '!' + serverTests
        ],
        client: {
            indexJs: './client/index.js',
            css: './client/**/*.css',
            static: [
                './client/**',
                '!./client/**/*.js',
                '!./client/**/*.css'
            ]
        }
    },
    test: {
        server: serverTests,
        client: {
            karmaConf: __dirname + '/../karma.conf.js'
        }
    },
    dest: {
        'package-json': 'dist/',
        server: 'dist/',
        client: {
            root: 'dist/client'
        }
    },
    clean: {
        build: 'dist/**'
    },
    watch: {
        server: [
            './dist/**',
            '!./dist/package.json',
            '!./dist/node_modules',
            '!./dist/node_modules/**',
            '!./dist/client',
            '!./dist/client/**'
        ]
    }
};
