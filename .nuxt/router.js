import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _09f73b5d = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _2ac243cb = () => interopDefault(import('../pages/contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _76c2907b = () => interopDefault(import('../pages/course.vue' /* webpackChunkName: "pages/course" */))
const _838b446a = () => interopDefault(import('../pages/course-aida-1.vue' /* webpackChunkName: "pages/course-aida-1" */))
const _836f1568 = () => interopDefault(import('../pages/course-aida-2.vue' /* webpackChunkName: "pages/course-aida-2" */))
const _8352e666 = () => interopDefault(import('../pages/course-aida-3.vue' /* webpackChunkName: "pages/course-aida-3" */))
const _636678de = () => interopDefault(import('../pages/equipment.vue' /* webpackChunkName: "pages/equipment" */))
const _c05162c8 = () => interopDefault(import('../pages/equipment-freediving.vue' /* webpackChunkName: "pages/equipment-freediving" */))
const _ee7ed366 = () => interopDefault(import('../pages/equipment-snorkeling.vue' /* webpackChunkName: "pages/equipment-snorkeling" */))
const _29af1622 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _09f73b5d,
    name: "about"
  }, {
    path: "/contact-us",
    component: _2ac243cb,
    name: "contact-us"
  }, {
    path: "/course",
    component: _76c2907b,
    name: "course"
  }, {
    path: "/course-aida-1",
    component: _838b446a,
    name: "course-aida-1"
  }, {
    path: "/course-aida-2",
    component: _836f1568,
    name: "course-aida-2"
  }, {
    path: "/course-aida-3",
    component: _8352e666,
    name: "course-aida-3"
  }, {
    path: "/equipment",
    component: _636678de,
    name: "equipment"
  }, {
    path: "/equipment-freediving",
    component: _c05162c8,
    name: "equipment-freediving"
  }, {
    path: "/equipment-snorkeling",
    component: _ee7ed366,
    name: "equipment-snorkeling"
  }, {
    path: "/",
    component: _29af1622,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
