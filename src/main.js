import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI, {Message} from "element-ui";
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$message = Message

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
