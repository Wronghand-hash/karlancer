import Vue from 'vue'
import App from './App.vue'
import VueCryptojs from "vue-cryptojs";

Vue.use(VueCryptojs);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
