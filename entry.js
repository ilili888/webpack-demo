require("./css/main.less")

import Vue from 'vue'
import VueRouter from 'vue-router'
import jquery from 'jquery'

Vue.use(VueRouter)

let router = require('./routes').default
router.start(require('./pages/layout.vue'), 'app')


// let router = new VueRouter()
// router.map({
//   '/': { component: require('./pages/home.vue') }
// })
// router.start(require('./pages/layout.vue'), 'app')
