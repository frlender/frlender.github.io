var path = require("path");
var Builder = require('systemjs-builder');

// optional constructor options
// sets the baseURL and loads the configuration file
var builder = new Builder('./');
builder.config(
	{
        bundles:{
          'node_modules/angular2/bundles/angular2.dev.js':['angular2/core','angular2/platform/browser'],
          'node_modules/angular2/bundles/router.dev.js':['angular2/router']
        } ,
        packages: {
          app: {
            format: 'register',
            defaultExtension: 'js'
          }
        }
      }
);

builder
.bundle('app/main.js', 'dist/main-min.js',{ minify: true, sourceMaps: true })
.then(function() {
  console.log('Build complete');
})
.catch(function(err) {
  console.log('Build error');
  console.log(err);
});
