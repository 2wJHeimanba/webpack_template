const path = require("path"),
      { merge } = require("webpack-merge"),
      webpackConfigBase = require("./webpack.base"),
      miniCssExtractPlugin = require("mini-css-extract-plugin"),
      webpack = require("webpack"),
      AddAssetHtmlPlugin = require("add-asset-html-webpack-plugin");
      WebpackBar = require("webpackbar");


const webpackConfigProd = {
    mode:"production",
    output:{
        path:path.resolve(__dirname,"../dist"),
        filename:"js/[name]_[contenthash:8].js",
        // publicPath:"./",
        clean:true
    },
    plugins:[
        new miniCssExtractPlugin({
            filename:"css/[name]_[contenthash].css",
            chunkFilename:"css/[name]_[contenthash].css",
        }),
        // new webpack.DllReferencePlugin({
        //     manifest:path.resolve(__dirname,"./dll/manifest.json")
        // }),
        // new AddAssetHtmlPlugin({
        //     filepath:path.resolve(__dirname,"./dll/vue.dll.js"),
        //     outputPath:"modules",
        //     publicPath:"./modules"
        // }),
        new WebpackBar()
    ],
    optimization:{
        splitChunks:{
            cacheGroups:{//缓存组，将第三方库独立打包
                vendor:{
                    test:/[\\/]node_modules[\\/]/,
                    name:"vendors",
                    chunks:"all"
                }
            }
        }
    }
}

module.exports = merge(webpackConfigBase(true),webpackConfigProd)