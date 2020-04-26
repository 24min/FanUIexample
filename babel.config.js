/*
 * @Author: 24min
 * @Date: 2020-04-26 10:03:14
 * @LastEditors: 24min
 * @LastEditTime: 2020-04-26 10:41:27
 * @Description: file content
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [['component', {
    "libraryName": "@24min/fanui",
    "camel2Dash":false,
    "styleLibrary": {
      "name": 'style',
      "base": false
    }
  }]]
}

// module.exports = {
//   presets: [
//     '@vue/cli-plugin-babel/preset'
//   ]
// }
