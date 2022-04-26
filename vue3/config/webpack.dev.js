

const path = require("path"),
      { merge } = require("webpack-merge"),
      webpackConfigBase = require("./webpack.base");

let webpackConfigDev = {
  mode:"development",
  devtool:"eval-cheap-module-source-map",
  module:{},
  plugins:[],
  devServer:{
    port:3000,
    open:true
  }
}

module.exports = merge(webpackConfigBase(false),webpackConfigDev)
