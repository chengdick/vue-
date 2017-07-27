import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import VueResource from 'vue-resource'
import C from '@/components/c'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import "@/fiter.js"
Vue.use(Router)
Vue.use(VueResource)

Vue.use(VueAwesomeSwiper)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/c/:id',
      name: 'c',
      component: C
    }
  ]
})
