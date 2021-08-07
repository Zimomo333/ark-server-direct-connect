import Vue from 'vue'
import { Button } from 'ant-design-vue'
import App from './App'

Vue.component(Button.name, Button)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  template: '<App/>'
}).$mount('#app')
