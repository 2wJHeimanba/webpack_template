const presets = [
  ["@babel/preset-env",{
    "useBuiltIns":"usage",
    "corejs":"3.21.1"
  }]
]

const plugins = []

module.exports = {
  plugins,
  presets
}
