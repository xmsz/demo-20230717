// build.plugin.js
const { UnifiedWebpackPluginV5 } = require('weapp-tailwindcss/webpack');
module.exports = ({ context, onGetWebpackConfig }) => {
  onGetWebpackConfig((config) => {
    config.plugin('UnifiedWebpackPluginV5').use(UnifiedWebpackPluginV5, [
      {
        appType: 'rax',
      },
    ]);
  });
};
