import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLocalStorage from 'vue-ls';

let options = {
  namespace: 'BreakingBad __'
};

Vue.use(VueLocalStorage, options);

Vue.config.productionTip = false

new Vue({
  el:'#app',
  router,
  template:'<App/>',
  components: { App },
  render: h => h(App),
}).$mount('#app')
