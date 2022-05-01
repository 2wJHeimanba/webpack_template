const path = require("path"),
      webpack = require("webpack");


module.exports = {
    mode:"production",
    entry:{
        React:["react"],
        ReactDOM:["react-dom"],
        axios:["axios"]
    },
    output:{
        filename:"[name].js",
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