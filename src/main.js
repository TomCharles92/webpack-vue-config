import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 只有以 VUE_APP_ 开头的变量会被 webpack.DefinePlugin 静态嵌入到客户端侧的包中
// 除了 VUE_APP_* 变量之外，在你的应用代码中始终可用的还有两个特殊的变量：
// 1. NODE_ENV: "development" | "production" | "test"
// 2. BASE_URL = vue.config.js => publicPath

// eslint-disable-next-line 
console.log('当前环境变量process.env.NODE_ENV：' + process.env.NODE_ENV)
// .env.development 的优先级别 .env 高
console.log(`.env中的环境变量VUE_APP_SECRET：` + process.env.VUE_APP_SECRET)

console.log('VUE_APP_TITLE: ' + process.env.VUE_APP_TITLE)

new Vue({
  render: h => h(App),
}).$mount('#app')
