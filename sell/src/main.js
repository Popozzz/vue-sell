// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import 'common/stylus/index.styl'

Vue.config.productionTip = false
Vue.use(VueResource) // 全局注册
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 全局可用路由通过this.$router访问
  components: { App },
  template: '<App/>'
})
router.push('/goods?id=123456') // 2.0 router.go弃用，用router.push代替
