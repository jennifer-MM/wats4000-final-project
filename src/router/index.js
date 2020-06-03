import Vue from 'vue'
import VueRouter from 'vue-router'
import BreakingBad from '@/views/BreakingBad'
import BreakingRandom from '@/views/BreakingRandom'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'BreakingBad',
    component: BreakingBad
  },
  {
    path: '/BreakingRandom',
    name: 'BreakingRandom',
    component: BreakingRandom
  }

]

const router = new VueRouter({
  routes
})

export default router