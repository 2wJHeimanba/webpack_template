

const path = require("path"),
      webpack = require("webpack"),
      envMode = process.env.envMode,
      prefixRE = /^VUE_APP_/,//正则匹配以VUE_APP_开头的变量
      rules = require("./webpack.rules"),
      HtmlWebpackPlugin = require("html-webpack-plugin"),
      fs = require("fs");


require("dotenv").config({path:`.env.${envMode}`});
let env = {};

for(const key in process.env){
  if(key == "NODE_ENV" || key == "BASE_URL" || prefixRE.test(key)){
    env[key] = JSON.stringify(process.env[key])
  }
}

const htmlDir = path.resolve(__dirname,"../src/pages"),
      dirs = fs.readdirSync(htmlDir);

let entry = {},
    htmlPlugins = [];

for(let i = 0;i < dirs.length;i++){
  const dir = dirs[i];
  entry[dir] = htmlDir + "/" + dir + "/index.ts"
}


module.exports = function(prodMode){
  return {
    mode:"development",
    entry:{
      index:path.resolve(__dirname,"../src/js/index.js")
    },
    module:{
      rules:rules(prodMode)
    },
    plugins:[
      new webpack.DefinePlugin({
        "process.env":{...env}
      }),
      new HtmlWebpackPlugin({
        template:path.resolve(__dirname,"../src/html/index.html"),
        filename:"index.html",
        minify:{
          html5:true,
          collapseWhitespace:true,
          minifyCSS:true,
          minifyJS:true,
          removeComments:true,
          preserveLineBreaks:false,
        }
      })
    ]
  }
}
