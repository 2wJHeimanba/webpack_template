

const { merge } = require("webpack-merge");
const base = require("./webpack.base");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;//打包代码大小分析
const CssMinizerWebpackPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(base,{
    mode:"production",
    plugins:[
        new CleanWebpackPlugin(),
        new CssMinizerWebpackPlugin()
        // new BundleAnalyzerPlugin()
    ]
})