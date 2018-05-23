/**
 * Created by lichunwei on 2016/8/22.
 */
function HtmlWebpackPluginExtend(options) {
    this.options = options;
}

HtmlWebpackPluginExtend.prototype.apply = function(compiler) {
   var paths = this.options.paths;
      

    if (compiler.hooks) {
    // webpack 4 support
    compiler.hooks.compilation.tap('HtmlWebpackPluginExtend', (compilation) => {
        compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tapAsync('HtmlWebpackPluginExtend',(htmlPluginData, callback) => {
            for (var i = paths.length - 1; i >= 0; i--) {
                htmlPluginData.assets.js.unshift(paths[i]);
            }
            callback(null, htmlPluginData)
          }
        )
      })  } else {
    // Hook into the html-webpack-plugin processing
    compiler.plugin('compilation', function(compilation, options) {
        compilation.plugin('html-webpack-plugin-before-html-processing', function(htmlPluginData, callback) {
            for (var i = paths.length - 1; i >= 0; i--) {
                htmlPluginData.assets.js.unshift(paths[i]);
            }
            callback(null, htmlPluginData);
        });
    });
  }

};


module.exports = HtmlWebpackPluginExtend;
