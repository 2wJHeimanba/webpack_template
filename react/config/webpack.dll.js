
const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry:{
        React:["react"],
        ReactDOM:["react-dom"]
    },
    output:{
        filename:'[name].dll.js',
        path:path.join(__dirname,"dll"),
        library:'[name]'
    },
    plugins:[
        new webpack.DllPlugin({
            name:'[name]',
            path:path.join(__dirname,"dll/manifest.json"),
        })
    ]
}