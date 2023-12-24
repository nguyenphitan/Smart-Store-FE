import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './router'
import VueApexCharts from 'vue-apexcharts'
import Paginate from 'vuejs-paginate'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueApexCharts)
Vue.component('apex-chart', VueApexCharts)
Vue.component('t-paginate', Paginate)

const router = new VueRouter({
  routes: Routes
})

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')