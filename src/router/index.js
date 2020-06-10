import Vue from 'vue'
import VueRouter from 'vue-router'
import BreakingBad from '@/views/BreakingBad'
import BreakingRandom from '@/views/BreakingRandom'
import CharacterSearch from '@/views/CharacterSearch'


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
  },
  {
    path: '/CharacterSearch',
    name: 'CharacterSearch',
    component: CharacterSearch
  }

]

const router = new VueRouter({
  routes
})

export default router