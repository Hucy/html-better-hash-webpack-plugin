// HtmlBetterHash.js
var loaderUtils = require("loader-utils");
var path=require('path')
function Plugin(options) {
  // Configure your plugin with options...
}

Plugin.prototype.apply = function(compiler) {
  // ...
  compiler.plugin('compilation', function(compilation) {

    compilation.plugin('html-webpack-plugin-before-html-processing', function(htmlPluginData, callback) {
      var chunks=htmlPluginData.assets.chunks
      htmlPluginData.assets.js=[]
      htmlPluginData.assets.css=[]
      for (var chunkItem in chunks){
        htmlPluginData.assets.js.push(chunks[chunkItem].entry+'?vhash='+chunks[chunkItem].hash)
        if(chunks[chunkItem].css.length){
          chunks[chunkItem].css.forEach(function(cssItem){
          var filename=htmlPluginData.assets.publicPath?path.posix.relative(htmlPluginData.assets.publicPath,cssItem):path.posix.normalize(cssItem);
          var source = compilation.assets[filename].source();
          htmlPluginData.assets.css.push(cssItem+'?vhash='+loaderUtils.getHashDigest(source))
          })
          
        }
      }
      
      callback(null, htmlPluginData);
    });
  });

};

module.exports = Plugin;
