const path = require("path"),
      { merge } = require("webpack-merge"),
      webpackConfigBase = require("./webpack.base");



module.exports = merge(webpackConfigBase(false),{
    mode:"development",
    devServer:{
        open:true,
        port:9000
    }
})