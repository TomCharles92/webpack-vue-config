import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// eslint-disable-next-line 
console.log('当前环境变量process.env.NODE_ENV：' + process.env.NODE_ENV)
// .env.development 的优先级别 .env 高
console.log(`.env中的环境变量VUE_APP_SECRET：` + process.env.VUE_APP_SECRET)

console.log('VUE_APP_TITLE: ' + process.env.VUE_APP_TITLE)

new Vue({
  render: h => h(App),
}).$mount('#app')
