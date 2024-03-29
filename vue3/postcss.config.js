module.exports = ({ file }) => {
  
    const designWidth =  /tv-/.test(file.toLowerCase()) ? 19.2 : 37.5;  // 区分APP与TV设计稿
    return { 
      plugins: {
        autoprefixer: {
          Browserslist: ["Android >= 4.0", "iOS >= 7", "chrome > 31"],
        },
  
        "postcss-pxtorem": {
          rootValue: designWidth, //19.2, // 数字|函数）表示根元素字体大小或根据input参数返回根元素字体大小
          propList: ["*"], // 使用通配符*启用所有属性
          mediaQuery: true, // 允许在媒体查询中转换px
          selectorBlackList: [".norem"], // 过滤掉.norem-开头的class，不进行rem转换
        },
      },
    };
};
  