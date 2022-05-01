
const path = require("path"),
      fs = require("fs"),
      HtmlWebpackPlugin = require("html-webpack-plugin"),
      MiniCssExtractPlugin = require("mini-css-extract-plugin");

const pagesDir = path.resolve(__dirname,"../src/pages"),
      dirs = fs.readdirSync(pagesDir),
      isDevelopment = process.env.NODE_ENV !== "production";

let entry = {},
    htmlPlugins = [];

for(let i = 0;i < dirs.length;i++){
    let _dir = dirs[i]
    let _filename = _dir.match(/.*(?=\.\w*$)/);
    if(!_filename) break;
    entry[_filename[0]] = pagesDir+"/"+_dir;

    htmlPlugins.push(
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,"../index.html"),
            filename:_filename[0]+".html",
            chunks:[_filename[0]],
            minify:{
                collapseWhitespace:false,
                removeComments:true
            },
            title:_filename[0]
        })
    )
}
console.log(entry,htmlPlugins)

/**
 * 
 * @param { 项目状态:false->开发,true->生产 } modeStatus 
 * @returns 
 */

module.exports = function(modeStatus=false){
    return {
        entry,
        target:"web",
        module:{
            rules:[
                {
                    test: /\.[jt]sx?$/,
                    exclude: /node_modules/,
                    use:[
                        {
                            loader:"babel-loader",
                            options:{
                                presets:[
                                    [ "@babel/preset-env" ],
                                    [ "@babel/preset-react" ],
                                    [ "@babel/preset-typescript" ]
                                ],
                                plugins:[isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean)
                            }
                        }
                    ],
                },
                {
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
                },
                {
                    test:/\.less$/i,
                    use:[
                        MiniCssExtractPlugin.loader,
                        {
                            loader:"css-loader",
                            options:{
                                importLoaders:1,
                            }
                        },
                        "postcss-loader",
                        {
                            loader:"less-loader",
                            options:{
                                lessOptions:{
                                    modifyVars:{//修改ant-design主题颜色
                                        '@primary-color': '#467500',
                                        '@link-color': '#467500',
                                    },
                                    javascriptEnabled:true
                                },
                            }
                        }
                    ]
                }
            ]
        },
        resolve:{
            extensions:[".tsx",".ts",".js"]
        },
        plugins:[
            ...htmlPlugins,
            new MiniCssExtractPlugin({
                filename:"css/[name].css",
                chunkFilename:"css/[id].css"
            })
        ]
    }
}