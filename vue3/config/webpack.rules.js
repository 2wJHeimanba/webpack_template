
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = function(prodMode){
  return [
    {
      test:/\.css$/i,
      use:[
        !prodMode ? "style-loader" : {
          loader:MiniCssExtractPlugin.loader,
          options:{ publicPath:"./" }
        },
        "css-loader"
      ]
    },{
      test:/\.js$/i,
      exclude:/node_modules/,
      use:{
        loader:'babel-loader'
      }
    },{
      test:/\.(png|jpe?g|svg|gif)$/i,
      type:"asset",
      generator:{
        filename:"images/[contenthash][ext]"
      },
      parser:{
        dataUrlCondition:{
          maxSize:1 * 1024 * 1024
        }
      }
    },{
      test: /\.(eot|svg|ttf|woff|)$/,
      type: "asset/resource",
      generator:{
        filename:"fonts/[contenthash].[name][ext]"
      }
    },{
      test:/\.vue$/i,
      use:[ "vue-loader" ]
    },{
      test:/\.ts$/i,
      use:[
        {
          loader:"ts-loader",
          options:{
            appendTsSuffixTo: [/.vue$/],
          }
        }
      ]
    }
  ]
}
