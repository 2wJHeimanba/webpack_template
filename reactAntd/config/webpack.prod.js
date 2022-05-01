
const path = require("path"),
      { merge } = require("webpack-merge"),
      WebpackConfigBase = require("./webpack.base"),
      Webpackbar = require("webpackbar"),
      CssMinimzerWebpackPlugin = require("css-minimizer-webpack-plugin"),
      TerserPlugin = require("terser-webpack-plugin"),
      webpack = require("webpack"),
      AddAssetHtmlPlugin = require("add-asset-html-webpack-plugin");

module.exports = merge(WebpackConfigBase(true),{
    mode:"production",
    output:{
        path:path.resolve(__dirname,"../dist"),
        filename:"js/[name].js",
        clean:true
    },
    plugins:[
        new webpack.DllReferencePlugin({
            manifest:path.resolve(__dirname,"./dll/manifest.json")
        }),
        new AddAssetHtmlPlugin([
            {
                filepath:path.resolve(__dirname,"./dll/React.js"),
                outputPath:"modules",
                publicPath:"./modules"
            },{
                filepath:path.resolve(__dirname,"./dll/ReactDOM.js"),
                outputPath:"modules",
                publicPath:"./modules"
            }
        ]),
        new Webpackbar()
    ],
    optimization:{
        splitChunks:{
            cacheGroups:{//缓存组，将第三方库独立打包
                defaultVendors:{
                    test:/[\\/]node_modules[\\/]/,
                    name:"vendors",
                    chunks:"all"
                }
            }
        },
        minimize:true,
        minimizer:[
            new TerserPlugin({
                extractComments:true,
                parallel:true,
                terserOptions:{
                    compress:true,
                    mangle:true,
                    toplevel:false,
                    keep_classnames:false
                }
            }),
            new CssMinimzerWebpackPlugin(),//压缩css
        ]
    }
})