import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  AboutOne: () => import('../../components/AboutOne.vue' /* webpackChunkName: "components/about-one" */).then(c => wrapFunctional(c.default || c)),
  AboutTwo: () => import('../../components/AboutTwo.vue' /* webpackChunkName: "components/about-two" */).then(c => wrapFunctional(c.default || c)),
  Breadcrumb: () => import('../../components/Breadcrumb.vue' /* webpackChunkName: "components/breadcrumb" */).then(c => wrapFunctional(c.default || c)),
  CallToAction: () => import('../../components/CallToAction.vue' /* webpackChunkName: "components/call-to-action" */).then(c => wrapFunctional(c.default || c)),
  CallToActionCard: () => import('../../components/CallToActionCard.vue' /* webpackChunkName: "components/call-to-action-card" */).then(c => wrapFunctional(c.default || c)),
  ContactForm: () => import('../../components/ContactForm.vue' /* webpackChunkName: "components/contact-form" */).then(c => wrapFunctional(c.default || c)),
  Copyright: () => import('../../components/Copyright.vue' /* webpackChunkName: "components/copyright" */).then(c => wrapFunctional(c.default || c)),
  DivingApply: () => import('../../components/DivingApply.vue' /* webpackChunkName: "components/diving-apply" */).then(c => wrapFunctional(c.default || c)),
  DivingDetail: () => import('../../components/DivingDetail.vue' /* webpackChunkName: "components/diving-detail" */).then(c => wrapFunctional(c.default || c)),
  DivingDetailCard: () => import('../../components/DivingDetailCard.vue' /* webpackChunkName: "components/diving-detail-card" */).then(c => wrapFunctional(c.default || c)),
  DivingGallery: () => import('../../components/DivingGallery.vue' /* webpackChunkName: "components/diving-gallery" */).then(c => wrapFunctional(c.default || c)),
  EquipmentDetail: () => import('../../components/EquipmentDetail.vue' /* webpackChunkName: "components/equipment-detail" */).then(c => wrapFunctional(c.default || c)),
  EquipmentDetailCard: () => import('../../components/EquipmentDetailCard.vue' /* webpackChunkName: "components/equipment-detail-card" */).then(c => wrapFunctional(c.default || c)),
  FeatureCard: () => import('../../components/FeatureCard.vue' /* webpackChunkName: "components/feature-card" */).then(c => wrapFunctional(c.default || c)),
  FeatureCourse: () => import('../../components/FeatureCourse.vue' /* webpackChunkName: "components/feature-course" */).then(c => wrapFunctional(c.default || c)),
  FeatureEquipment: () => import('../../components/FeatureEquipment.vue' /* webpackChunkName: "components/feature-equipment" */).then(c => wrapFunctional(c.default || c)),
  FooterNavigation: () => import('../../components/FooterNavigation.vue' /* webpackChunkName: "components/footer-navigation" */).then(c => wrapFunctional(c.default || c)),
  GoogleMap: () => import('../../components/GoogleMap.vue' /* webpackChunkName: "components/google-map" */).then(c => wrapFunctional(c.default || c)),
  HeroSlider: () => import('../../components/HeroSlider.vue' /* webpackChunkName: "components/hero-slider" */).then(c => wrapFunctional(c.default || c)),
  Loading: () => import('../../components/Loading.vue' /* webpackChunkName: "components/loading" */).then(c => wrapFunctional(c.default || c)),
  MobileNavigation: () => import('../../components/MobileNavigation.vue' /* webpackChunkName: "components/mobile-navigation" */).then(c => wrapFunctional(c.default || c)),
  Navigation: () => import('../../components/Navigation.vue' /* webpackChunkName: "components/navigation" */).then(c => wrapFunctional(c.default || c)),
  OffCanvasMobileMenu: () => import('../../components/OffCanvasMobileMenu.vue' /* webpackChunkName: "components/off-canvas-mobile-menu" */).then(c => wrapFunctional(c.default || c)),
  SectionTitle: () => import('../../components/SectionTitle.vue' /* webpackChunkName: "components/section-title" */).then(c => wrapFunctional(c.default || c)),
  ShapeWithAnimation: () => import('../../components/ShapeWithAnimation.vue' /* webpackChunkName: "components/shape-with-animation" */).then(c => wrapFunctional(c.default || c)),
  SocialMedia: () => import('../../components/SocialMedia.vue' /* webpackChunkName: "components/social-media" */).then(c => wrapFunctional(c.default || c)),
  TheFooter: () => import('../../components/TheFooter.vue' /* webpackChunkName: "components/the-footer" */).then(c => wrapFunctional(c.default || c)),
  TheHeader: () => import('../../components/TheHeader.vue' /* webpackChunkName: "components/the-header" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
