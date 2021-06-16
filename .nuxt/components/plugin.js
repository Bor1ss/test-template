import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  PayLater: () => import('../..\\components\\notifications\\PayLater.vue' /* webpackChunkName: "components/pay-later" */).then(c => wrapFunctional(c.default || c)),
  PricingCardInfo: () => import('../..\\components\\notifications\\PricingCardInfo.vue' /* webpackChunkName: "components/pricing-card-info" */).then(c => wrapFunctional(c.default || c)),
  UpgradeSupport: () => import('../..\\components\\notifications\\UpgradeSupport.vue' /* webpackChunkName: "components/upgrade-support" */).then(c => wrapFunctional(c.default || c)),
  Button: () => import('../..\\components\\Button.vue' /* webpackChunkName: "components/button" */).then(c => wrapFunctional(c.default || c)),
  Dialog: () => import('../..\\components\\Dialog.vue' /* webpackChunkName: "components/dialog" */).then(c => wrapFunctional(c.default || c)),
  Footer: () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  LanguageInput: () => import('../..\\components\\LanguageInput.vue' /* webpackChunkName: "components/language-input" */).then(c => wrapFunctional(c.default || c)),
  Layout: () => import('../..\\components\\Layout.vue' /* webpackChunkName: "components/layout" */).then(c => wrapFunctional(c.default || c)),
  Link: () => import('../..\\components\\Link.vue' /* webpackChunkName: "components/link" */).then(c => wrapFunctional(c.default || c)),
  LoadingBar: () => import('../..\\components\\LoadingBar.vue' /* webpackChunkName: "components/loading-bar" */).then(c => wrapFunctional(c.default || c)),
  NavBar: () => import('../..\\components\\NavBar.vue' /* webpackChunkName: "components/nav-bar" */).then(c => wrapFunctional(c.default || c)),
  Notification: () => import('../..\\components\\Notification.vue' /* webpackChunkName: "components/notification" */).then(c => wrapFunctional(c.default || c)),
  PaymentSection: () => import('../..\\components\\PaymentSection.vue' /* webpackChunkName: "components/payment-section" */).then(c => wrapFunctional(c.default || c)),
  PricingCard: () => import('../..\\components\\PricingCard.vue' /* webpackChunkName: "components/pricing-card" */).then(c => wrapFunctional(c.default || c)),
  Selector: () => import('../..\\components\\Selector.vue' /* webpackChunkName: "components/selector" */).then(c => wrapFunctional(c.default || c)),
  Stepper: () => import('../..\\components\\Stepper.vue' /* webpackChunkName: "components/stepper" */).then(c => wrapFunctional(c.default || c)),
  SvgRender: () => import('../..\\components\\SvgRender.vue' /* webpackChunkName: "components/svg-render" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
