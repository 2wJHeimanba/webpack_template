
const path = require("path"),
      webpack = require("webpack");

module.exports = {
    mode:"production",
    entry:{
        vue:["vue"]
    },
    output:{
        filename:"[name].dll.js",
        path:path.resolve(__dirname,"dll"),
        library:"[name]"
    },
    plugins:[
        new webpack.DllPlugin({
            name:"[name]",
            path:path.resolve(__dirname,"dll/manifest.json")
        })
    ]
}