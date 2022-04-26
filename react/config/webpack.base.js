const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackBar = require("webpackbar");
const webpack = require("webpack");
const AddAssetHtmlPlugin = require("add-asset-html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devStatus = process.env.NODE_ENV !== "production";

module.exports = {
    entry:{
        index:path.resolve(__dirname,"../src/pages/index.js"),
        position:path.resolve(__dirname,"../src/pages/position.js")
    },
    output:{
        filename:"js/[name].[hash:4].js",
        path:path.resolve(__dirname,"../dist"),
        assetModuleFilename: 'images/[hash][ext][query]',//定义资源路径
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,"../src/html/index.html"),
            filename:"index.html",
            chunks:["index"]
        }),
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,"../src/html/position.html"),
            filename:"position.html",
            chunks:["position"]
        }),

        new MiniCssExtractPlugin({//打包css
            filename: "css/[name].css",
            chunkFilename: "css/[id].css"
        }),
        new webpack.DllReferencePlugin({//不打包第三方包
            manifest:path.resolve(__dirname,"./dll/manifest.json"),
        }),
        new AddAssetHtmlPlugin(//添加第三方包链接到页面上
            [
                {
                    filepath:path.resolve(__dirname,"./dll/React.dll.js"),
                    outputPath:"library",
                    publicPath:"./library/"
                },{
                    filepath:path.resolve(__dirname,"./dll/ReactDOM.dll.js"),
                    outputPath:"library",
                    publicPath:"./library/"
                }
            ]
        ),
        new WebpackBar(),
    ],
    module:{
        rules:[
            {
                test:/\.(js|jsx|ts|tsx)$/,
                exclude:/node_modules/,
                loader:"babel-loader"
            },{
                test:/\.(css)$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    {
                        loader:"css-loader",
                        options:{
                            importLoaders:1,
                        }
                    },
                    {
                        loader:"postcss-loader"
                    }
                ]
            },{
                test: /\.(png|jpg|gif|svg)$/i,
                type: 'asset',
                generator:{//定义资源路径，权限大
                    filename:"images/[contenthash][ext]"
                },
                parser:{
                    dataUrlCondition:{
                        maxSize: 1 * 1024 * 1024 //要是资源大小大于这个数，就打包到文件夹，小于的话就转base64
                    }
                }
            }
        ]
    },
    resolve:{
        extensions: ['.ts', '.tsx', '.js']
    }
}