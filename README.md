# gulp-example-project -> browserify

Example implementation of a project structure with all JavaScript in CommonJS modules, using
[Browserify](http://browserify.org/) and [gulp.js](http://gulpjs.com/) for the build.

## Commands

### Recommended

```
npm start           Build and run the built app.
npm test            Run unit and e2e tests.

npm run dist        Build the app into the dist/ directory.

npm run clean-all   Clean out downloaded dependencies and build files.
                    Get a fresh start.
```

### More / Internal

```
npm run deps        Download dependencies. This is run automatically by all build commands.

npm run clean-deps  Clean out downloaded dependencies.
npm run clean-build Clean out built files.
```

## Directory structure

### Source code and configuration

```
/                               Project root. Global settings and dependency declarations.
/server/                        Server source code.
/gulp/                          Gulp build for this project.

/client/                        Client source code.
/client/index.html              Where the client starts.
```

### Build artifacts and other .gitignore'd stuff

```
/dist/                      Build artifact. This can be deployed on a server.
/dist/server.js             Server.
/dist/package.json          Dependency declaration for the server.
/dist/client/               Client webapp.

/node_modules/              npm packages for the gulp build.
```
