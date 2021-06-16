import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _9095d03a = () => interopDefault(import('..\\pages\\404.vue' /* webpackChunkName: "pages/404" */))
const _14014c67 = () => interopDefault(import('..\\pages\\loading.vue' /* webpackChunkName: "pages/loading" */))
const _0c6af2b0 = () => interopDefault(import('..\\pages\\steps\\index.vue' /* webpackChunkName: "pages/steps/index" */))
const _bb143dd0 = () => interopDefault(import('..\\pages\\steps\\_id.vue' /* webpackChunkName: "pages/steps/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: './nuxt-intl/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/404",
    component: _9095d03a,
    name: "404___en"
  }, {
    path: "/loading",
    component: _14014c67,
    name: "loading___en"
  }, {
    path: "/steps",
    component: _0c6af2b0,
    name: "steps___en"
  }, {
    path: "/de/404",
    component: _9095d03a,
    name: "404___de"
  }, {
    path: "/de/loading",
    component: _14014c67,
    name: "loading___de"
  }, {
    path: "/de/steps",
    component: _0c6af2b0,
    name: "steps___de"
  }, {
    path: "/es/404",
    component: _9095d03a,
    name: "404___es"
  }, {
    path: "/es/loading",
    component: _14014c67,
    name: "loading___es"
  }, {
    path: "/es/steps",
    component: _0c6af2b0,
    name: "steps___es"
  }, {
    path: "/fr/404",
    component: _9095d03a,
    name: "404___fr"
  }, {
    path: "/fr/loading",
    component: _14014c67,
    name: "loading___fr"
  }, {
    path: "/fr/steps",
    component: _0c6af2b0,
    name: "steps___fr"
  }, {
    path: "/it/404",
    component: _9095d03a,
    name: "404___it"
  }, {
    path: "/it/loading",
    component: _14014c67,
    name: "loading___it"
  }, {
    path: "/it/steps",
    component: _0c6af2b0,
    name: "steps___it"
  }, {
    path: "/de/steps/:id",
    component: _bb143dd0,
    name: "steps-id___de"
  }, {
    path: "/es/steps/:id",
    component: _bb143dd0,
    name: "steps-id___es"
  }, {
    path: "/fr/steps/:id",
    component: _bb143dd0,
    name: "steps-id___fr"
  }, {
    path: "/it/steps/:id",
    component: _bb143dd0,
    name: "steps-id___it"
  }, {
    path: "/steps/:id",
    component: _bb143dd0,
    name: "steps-id___en"
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
