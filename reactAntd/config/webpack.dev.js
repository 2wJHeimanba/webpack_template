const path = require("path"),
      { merge } = require("webpack-merge"),
      webpackConfigBase = require("./webpack.base"),
      ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');



module.exports = merge(webpackConfigBase(false),{
    mode:"development",
    devtool: 'inline-source-map',
    devServer:{
        open:true,
        port:9000,
        static:"../dist",
        hot: true,
        // liveReload:true,
    },
    plugins:[
        new ReactRefreshWebpackPlugin(),
    ]
})