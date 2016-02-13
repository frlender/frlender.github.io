var path = require("path");
var Builder = require('systemjs-builder');

// optional constructor options
// sets the baseURL and loads the configuration file
var builder = new Builder('./');
builder.config({
packages: {
  app: {
    format: 'register',
    defaultExtension: 'js'
  }
}
});

builder
.bundle('app/main.js', 'dist/main-min.js',{ minify: true, sourceMaps: true })
.then(function() {
  console.log('Build complete');
})
.catch(function(err) {
  console.log('Build error');
  console.log(err);
});
