var VueRouter= require('vue-router')

let router = new VueRouter({
  history: true
})

router.map({
  '/':        { component: require('./pages/home.vue') },
  '/image':   { component: require('./pages/img.vue') },
  '*':        { component: require('./pages/404.vue') }
})

export default router
