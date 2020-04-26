/*
 * @Author: 24min
 * @Date: 2020-04-26 10:03:14
 * @LastEditors: 24min
 * @LastEditTime: 2020-04-26 10:41:09
 * @Description: file content
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { FanButton } from "@24min/fanui"
Vue.config.productionTip = false
Vue.use(FanButton)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
