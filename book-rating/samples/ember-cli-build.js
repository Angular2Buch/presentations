//ember-cli-build.js
var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function(defaults) {
  var app = new Angular2App(defaults, {
    vendorNpmFiles: ['bootstrap/dist/**']
  });
  return app.toTree();
}
