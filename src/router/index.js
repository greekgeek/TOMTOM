import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import userView from '@/components/userView'

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'user-view',
      component: userView
    }
  ]
})
