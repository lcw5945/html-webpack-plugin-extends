/**
 * Created by lichunwei on 2016/8/22.
 */
function HtmlWebpackPluginExtend(options) {
    this.options = options;
}

HtmlWebpackPluginExtend.prototype.apply = function(compiler) {
   var paths = this.options.paths;
      compiler.hooks.compilation.tap('HtmlWebpackPluginExtend', (compilation) => {
        console.log('The compiler is starting a new compilation...');

        compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tapAsync(
          'HtmlWebpackPluginExtend',
          (data, cb) => {
            for (var i = paths.length - 1; i >= 0; i--) {
                htmlPluginData.assets.js.unshift(paths[i]);
            }
            cb(null, htmlPluginData)
          }
        )
      })

};
};

module.exports = HtmlWebpackPluginExtend;
