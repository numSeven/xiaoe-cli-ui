import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'view-design/dist/styles/iview.css';

Vue.config.productionTip = false

import { Button, Table,Card,Icon,Notice,TabPane} from 'view-design';

Vue.component('Button', Button);
Vue.component('Table', Table);
Vue.component('Card', Card);
Vue.component('Icon', Icon);
Vue.component('TabPane', TabPane);
Vue.prototype.$Notice = Notice

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
