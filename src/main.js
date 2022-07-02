import Vue from 'vue'
import App from './App.vue'

import './assets/scss/main.scss'

// Вы можете устанавливать дополнительные Vue-плагины
// используя глобальную переменную 'Vue'
// Vue.use(VueProgress, {
//   defaultShape: 'circle'
// })

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
