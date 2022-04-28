

const path = require("path"),
      webpack = require("webpack"),
      envMode = process.env.envMode,
      prefixRE = /^VUE_APP_/,//正则匹配以VUE_APP_开头的变量
      rules = require("./webpack.rules"),
      HtmlWebpackPlugin = require("html-webpack-plugin"),
      fs = require("fs"),
      { VueLoaderPlugin } = require("vue-loader/dist/index");

require("dotenv").config({path:`.env.${envMode}`});
let env = {};

for(const key in process.env){
  if(key == "NODE_ENV" || key == "BASE_URL" || prefixRE.test(key)){
    env[key] = JSON.stringify(process.env[key])
  }
}

const jsDir = path.resolve(__dirname,"../src/js"),
      dirs = fs.readdirSync(jsDir);//获取js文件夹下文件名称

let entry = {},//入口文件
    htmlPlugins = [];//html模板

for(let i = 0;i < dirs.length;i++){
  const dir = dirs[i];
  let _filename = dir.match(/.*(?=\.\w*$)/);
  if(!_filename) break;
  entry[_filename[0]] = {
    import:jsDir + "\\" + dir
  };

  htmlPlugins.push(
    new HtmlWebpackPlugin({
      template:path.resolve(__dirname,"../src/html/" + _filename[0] + ".html"),
      filename:_filename[0] + ".html",
      chunks:[_filename[0]],
      minify:{
        collapseWhitespace:false,
        removeComments:true
      }
    })
  );
};

module.exports = function(prodMode){
  return {
    mode:"development",
    entry,
    module:{
      rules:rules(prodMode)
    },
    plugins:[
      ...htmlPlugins,
      new webpack.DefinePlugin({
        "process.env":{...env},
        __VUE_PROD_DEVTOOLS__: false,
        __VUE_OPTIONS_API__: false,
      }),
      new VueLoaderPlugin()
    ],
    resolve:{
      alias:{
        "@":path.resolve(__dirname,"../src")
      },
      extensions:[".vue",".ts",".js"]
    }
  }
}
