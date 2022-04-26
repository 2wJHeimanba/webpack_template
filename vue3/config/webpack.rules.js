
module.exports = function(prodMode){
  return [
    {
      test:/\.js$/i,
      exclude:/node_modules/,
      use:{
        loader:'babel-loader'
      }
    }
  ]
}
