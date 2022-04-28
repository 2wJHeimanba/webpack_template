
const path = require("path"),
      fs = require("fs"),
      HtmlWebpackPlugin = require("html-webpack-plugin"),
      MiniCssExtractPlugin = require("mini-css-extract-plugin");







/**
 * 
 * @param { 项目状态:false->开发,true->生产 } modeStatus 
 * @returns 
 */

module.exports = function(modeStatus=false){
    return {
        entry:{
            index:path.resolve(__dirname,"../src/js/index.js")
        },
        output:{
            path:path.resolve(__dirname,"dist"),
            filename:"js/[name].js"
        },
        module:{
            rules:[
                {
                    test: /\.(tsx|ts|js)$/,
                    use:"babel-loader",
                    exclude: /node_modules/,
                },{
                    test:/\.css$/i,
                    use:[
                        MiniCssExtractPlugin.loader,
                        {
                            loader:"css-loader",
                            options:{
                                importLoaders:1,
                            }
                        },
                        "postcss-loader"
                    ]
                }
            ]
        },
        resolve:{
            extensions:[".tsx",".ts",".js"]
        },
        plugins:[
            new HtmlWebpackPlugin({
                template:path.resolve(__dirname,"../index.html"),
                filename:"[name].html"
            }),
            new MiniCssExtractPlugin({
                filename:"css/[name]_[contenthash:8].css",
                chunkFilename:"css/[id].css"
            })
        ]
    }
}