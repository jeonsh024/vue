import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'
// import createListView from '../views/CreateListView'
import bus from '@/utils/bus'
import store from '@/store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/news'
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView,
    beforeEnter: (to, from, next) => {
      bus.$emit('start:spinner')
      store
        .dispatch('FETCH_LIST', to.name)
        .then(() => {
          console.log('fetched')
          // bus.$emit('end:spinner')
          next()
        })
        .catch((error) => {
          console.log(error)
        })
      // console.log('to', to)
      // console.log('from', from)
      // console.log(next)
      // if (to.auth) {
      //   next()
      // } else {
      //   router.replace('/login')
      // }
    }
    // component: createListView('NewsView')
  },
  {
    path: '/ask',
    name: 'ask',
    component: AskView,
    beforeEnter: (to, from, next) => {
      bus.$emit('start:spinner')
      store
        .dispatch('FETCH_LIST', to.name)
        .then(() => {
          console.log('fetched')
          // bus.$emit('end:spinner')
          next()
        })
        .catch((error) => {
          console.log(error)
        })
    }
    // component: createListView('AskView')
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: JobsView,
    beforeEnter: (to, from, next) => {
      bus.$emit('start:spinner')
      store
        .dispatch('FETCH_LIST', to.name)
        .then(() => {
          console.log('fetched')
          // bus.$emit('end:spinner')
          next()
        })
        .catch((error) => {
          console.log(error)
        })
    }
    // component: createListView('JobsView')
  },
  {
    path: '/item/:id',
    name: 'item',
    component: () =>
      import(/* webpackChunkName: "item" */ '../views/ItemView.vue')
  },
  {
    path: '/user/:id',
    name: 'user',
    component: () =>
      import(/* webpackChunkName: "user" */ '../views/UserView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
