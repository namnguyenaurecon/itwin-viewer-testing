const {
  CopyBentleyStaticResourcesPlugin,
  IModeljsLibraryExportsPlugin,
} = require("@bentley/webpack-tools-core");

module.exports = {
  webpack: {
    plugins: {
      add: [
        new IModeljsLibraryExportsPlugin(),
        new CopyBentleyStaticResourcesPlugin(["public"], true),
      ],
    },
    configure: (webpackConfig, { env, paths }) => {
      return webpackConfig;
    },
  },
  devServer: (devServerConfig, { env, paths, proxy, allowedHost }) => {
    devServerConfig.contentBase = [paths.appPublic, paths.appBuild];
    return devServerConfig;
  },
};
