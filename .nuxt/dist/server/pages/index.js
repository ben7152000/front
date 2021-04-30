exports.ids = [10];
exports.modules = {

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OffCanvasMobileMenu.vue?vue&type=template&id=780551ef&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"popup-mobile-menu popup-mobile-visiable",attrs:{"id":"offcanvas-menu"}},[_vm._ssrNode("<div class=\"mobile-menu-overlay\"></div> "),_vm._ssrNode("<div class=\"inner custom-scrollbar\">","</div>",[_vm._ssrNode("<div class=\"mobile-header\"><div class=\"logo\"><a href=\"/\"><img src=\"/images/logo/logo.png\" alt=\"site logo\"></a></div> <button class=\"mobile-close-btn\"></button></div> "),_vm._ssrNode("<div class=\"menu-content\">","</div>",[_c('MobileNavigation')],1)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/OffCanvasMobileMenu.vue?vue&type=template&id=780551ef&

// EXTERNAL MODULE: ./components/MobileNavigation.vue + 4 modules
var MobileNavigation = __webpack_require__(103);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OffCanvasMobileMenu.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var OffCanvasMobileMenuvue_type_script_lang_js_ = ({head(){return{title:"Off-Canvas-Mobile-Menu"};},components:{MobileNavigation: MobileNavigation["default"]},methods:{mobiletoggleClass(addRemoveClass,className){const el=document.querySelector("#offcanvas-menu");if(addRemoveClass==="addClass"){el.classList.add(className);}else{el.classList.remove(className);}}}});
// CONCATENATED MODULE: ./components/OffCanvasMobileMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_OffCanvasMobileMenuvue_type_script_lang_js_ = (OffCanvasMobileMenuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/OffCanvasMobileMenu.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_OffCanvasMobileMenuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "cbe2a296"
  
)

/* harmony default export */ var OffCanvasMobileMenu = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MobileNavigation: __webpack_require__(103).default})


/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TheFooter.vue?vue&type=template&id=5b7afb0e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"footer-section",style:({ backgroundColor: '#030e22' })},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row section-padding pt-0 mtn-30\">","</div>",[_vm._ssrNode("<div class=\"col-md-4 col-sm-6 col-12 mt-30\">","</div>",[_vm._ssrNode("<div class=\"footer-widget\">","</div>",[_vm._ssrNode("<div class=\"footer-logo\"><a href=\"/\"><img src=\"/images/logo.png\" alt=\"Logo\" style=\"width:120px; height: 70px\"></a></div> "),_c('SocialMedia')],2)]),_vm._ssrNode(" "),_vm._l((_vm.items),function(item,index){return _c('FooterNavigation',{key:index,attrs:{"items":item.item,"title":item.title}})}),_vm._ssrNode(" <div class=\"col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mt-30\"><div class=\"footer-widget\"><h4 class=\"footer-widget-title\">裝備租借</h4> <div class=\"footer-widget-content\"><ul><li><a href=\"/equipment-snorkeling\">浮潛裝備</a></li> <li><a href=\"/equipment-freediving\">自潛裝備</a></li></ul></div></div></div>")],2),_vm._ssrNode(" "),_c('Copyright')],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TheFooter.vue?vue&type=template&id=5b7afb0e&

// EXTERNAL MODULE: ./components/SocialMedia.vue + 4 modules
var SocialMedia = __webpack_require__(104);

// EXTERNAL MODULE: ./components/FooterNavigation.vue + 4 modules
var FooterNavigation = __webpack_require__(105);

// EXTERNAL MODULE: ./components/Copyright.vue + 4 modules
var Copyright = __webpack_require__(106);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TheFooter.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TheFootervue_type_script_lang_js_ = ({head(){return{title:"The-Footer"};},components:{SocialMedia: SocialMedia["default"],FooterNavigation: FooterNavigation["default"],Copyright: Copyright["default"]},data(){return{items:[{title:"課程介紹",item:[{title:"AIDA 1 課程",to:"/course-aida-1"},{title:"AIDA 2 課程",to:"/course-aida-2"},{title:"AIDA 3 課程",to:"/course-aida-3"}]}]};}});
// CONCATENATED MODULE: ./components/TheFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TheFootervue_type_script_lang_js_ = (TheFootervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/TheFooter.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TheFootervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d53c778e"
  
)

/* harmony default export */ var TheFooter = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SocialMedia: __webpack_require__(104).default,FooterNavigation: __webpack_require__(105).default,Copyright: __webpack_require__(106).default})


/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navigation.vue?vue&type=template&id=3dd642cb&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"site-main-menu"},[_vm._ssrNode("<ul><li><a href=\"/about\">關於我們</a></li> <li class=\"has-children\"><a href=\"/course\">課程介紹</a> <ul class=\"sub-menu\"><li><a href=\"/course-aida-1\">AIDA 1 課程</a></li> <li><a href=\"/course-aida-2\">AIDA 2 課程</a></li> <li><a href=\"/course-aida-3\">AIDA 3 課程</a></li></ul></li> <li class=\"has-children\"><a href=\"/equipment\">裝備租借</a> <ul class=\"sub-menu\"><li><a href=\"/equipment-snorkeling\">浮潛裝備</a></li> <li><a href=\"/equipment-freediving\">自潛裝備</a></li></ul></li> <li><a href=\"/contact-us\">聯絡我們</a></li></ul>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Navigation.vue?vue&type=template&id=3dd642cb&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navigation.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Navigationvue_type_script_lang_js_ = ({head(){return{title:"Navigation"};}});
// CONCATENATED MODULE: ./components/Navigation.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Navigationvue_type_script_lang_js_ = (Navigationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Navigation.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Navigationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "37f53b17"
  
)

/* harmony default export */ var Navigation = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MobileNavigation.vue?vue&type=template&id=57de5182&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mobile-navigation"},[_vm._ssrNode("<nav id=\"offcanvas-navigation\" class=\"offcanvas-navigation\"><ul><li><a href=\"/about\">關於我們</a></li> <li class=\"menu-item-has-children\"><a href=\"/course\">課程介紹</a> <ul class=\"sub-menu\"><li><a href=\"/course-aida-1\">AIDA 1 課程</a></li> <li><a href=\"/course-aida-2\">AIDA 2 課程</a></li> <li><a href=\"/course-aida-3\">AIDA 3 課程</a></li></ul></li> <li class=\"menu-item-has-children\"><a href=\"/equipment\">裝備租借</a> <ul class=\"sub-menu\"><li><a href=\"/equipment-snorkeling\">浮潛裝備</a></li> <li><a href=\"/equipment-freediving\">自潛裝備</a></li></ul></li> <li><a href=\"/contact-us\">聯絡我們</a></li></ul></nav>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/MobileNavigation.vue?vue&type=template&id=57de5182&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MobileNavigation.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var MobileNavigationvue_type_script_lang_js_ = ({head(){return{title:"Mobile-Navigation"};},mounted(){const offCanvasNav=document.querySelector("#offcanvas-navigation");const offCanvasNavSubMenu=offCanvasNav.querySelectorAll(".sub-menu");const anchorLinks=offCanvasNav.querySelectorAll("a");for(let i=0;i<offCanvasNavSubMenu.length;i++){offCanvasNavSubMenu[i].insertAdjacentHTML("beforebegin","<span class='menu-expand'><i></i></span>");}const menuExpand=offCanvasNav.querySelectorAll(".menu-expand");const numMenuExpand=menuExpand.length;for(let i=0;i<numMenuExpand;i++){menuExpand[i].addEventListener("click",e=>{sideMenuExpand(e);});}for(let i=0;i<anchorLinks.length;i++){anchorLinks[i].addEventListener("click",()=>{closeMobileMenu();});}const sideMenuExpand=e=>{e.currentTarget.parentElement.classList.toggle("active");};const closeMobileMenu=()=>{const offcanvasMobileMenu=document.querySelector("#offcanvas-mobile-menu");offcanvasMobileMenu.classList.remove("active");};}});
// CONCATENATED MODULE: ./components/MobileNavigation.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MobileNavigationvue_type_script_lang_js_ = (MobileNavigationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/MobileNavigation.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(109)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MobileNavigationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "04809819"
  
)

/* harmony default export */ var MobileNavigation = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SocialMedia.vue?vue&type=template&id=0862c5c0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"footer-widget-content"},[_vm._ssrNode("<div class=\"content\"><p><a href=\"javascript:;\">"+_vm._ssrEscape(_vm._s(_vm.phone))+"</a></p> <p><a"+(_vm._ssrAttr("href",("mailto:" + _vm.email)))+" target=\"_blank\">"+_vm._ssrEscape(_vm._s(_vm.email))+"</a></p></div> <div class=\"footer-social-inline\"><a"+(_vm._ssrAttr("href",_vm.line))+" target=\"_blank\"><i class=\"fab fa-line\"></i></a> <a"+(_vm._ssrAttr("href",_vm.facebook))+" target=\"_blank\"><i class=\"fab fa-facebook-square\"></i></a> <a"+(_vm._ssrAttr("href",_vm.instagram))+" target=\"_blank\"><i class=\"fab fa-instagram\"></i></a></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/SocialMedia.vue?vue&type=template&id=0862c5c0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SocialMedia.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SocialMediavue_type_script_lang_js_ = ({head(){return{title:"Social-Media"};},data(){return{email:"ben7152000@gmail.com",phone:"0955-857-339",facebook:"https://www.facebook.com/dragon49/?ref=page_internal",line:"https://line.me/R/ti/p/%40843eetrw",instagram:"https://www.instagram.com/longdongjia1_7/?hl=en"};}});
// CONCATENATED MODULE: ./components/SocialMedia.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SocialMediavue_type_script_lang_js_ = (SocialMediavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/SocialMedia.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SocialMediavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "a303eef8"
  
)

/* harmony default export */ var SocialMedia = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FooterNavigation.vue?vue&type=template&id=6b1a9bb6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mt-30"},[_vm._ssrNode("<div class=\"footer-widget\"><h4 class=\"footer-widget-title\">"+_vm._ssrEscape(_vm._s(_vm.title))+"</h4> <div class=\"footer-widget-content\"><ul>"+(_vm._ssrList((_vm.items),function(item,index){return ("<li><a"+(_vm._ssrAttr("href",item.to))+">"+_vm._ssrEscape(_vm._s(item.title))+"</a></li>")}))+"</ul></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/FooterNavigation.vue?vue&type=template&id=6b1a9bb6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FooterNavigation.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FooterNavigationvue_type_script_lang_js_ = ({head(){return{title:"Footer-Navigation"};},props:["title","items"]});
// CONCATENATED MODULE: ./components/FooterNavigation.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FooterNavigationvue_type_script_lang_js_ = (FooterNavigationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/FooterNavigation.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FooterNavigationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "f21fd55c"
  
)

/* harmony default export */ var FooterNavigation = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Copyright.vue?vue&type=template&id=5c91dcdd&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_vm._ssrNode("<div class=\"col\"><p class=\"copyright\">\n            Copyright © 2021 Made With By Longdongcape\n        </p></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Copyright.vue?vue&type=template&id=5c91dcdd&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Copyright.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Copyrightvue_type_script_lang_js_ = ({head(){return{title:"Copyright"};}});
// CONCATENATED MODULE: ./components/Copyright.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Copyrightvue_type_script_lang_js_ = (Copyrightvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Copyright.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Copyrightvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "afe1edd8"
  
)

/* harmony default export */ var Copyright = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SectionTitle.vue?vue&type=template&id=1a12cf5a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section-title text-center",class:_vm.addClassName,attrs:{"data-aos":"fade-up"}},[_vm._ssrNode("<h2 class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.title))+"</h2> <p class=\"sub-title\">"+_vm._ssrEscape(_vm._s(_vm.subTitle))+"</p>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/SectionTitle.vue?vue&type=template&id=1a12cf5a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SectionTitle.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SectionTitlevue_type_script_lang_js_ = ({head(){return{title:"Section-Title"};},props:["title","subTitle","addClassName"]});
// CONCATENATED MODULE: ./components/SectionTitle.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SectionTitlevue_type_script_lang_js_ = (SectionTitlevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/SectionTitle.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SectionTitlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3b209594"
  
)

/* harmony default export */ var SectionTitle = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".offcanvas-navigation ul{padding-left:0}.offcanvas-navigation ul li{border-bottom:1px solid hsla(0,0%,100%,.15)}.offcanvas-navigation ul li.menu-item-has-children .sub-menu{height:0;opacity:0;transition:.3s;visibility:hidden}.offcanvas-navigation ul li.menu-item-has-children.active>.sub-menu{height:100%;opacity:1;visibility:visible;padding-left:0}.offcanvas-navigation ul li a{color:#fff;font-size:16px;font-weight:500;padding:10px 0;display:block}.offcanvas-navigation ul li a:hover{color:#1292ee}.offcanvas-navigation ul.sub-menu{margin-left:15px;transition:.4s}.offcanvas-navigation ul.sub-menu li{list-style:none;border:none}.offcanvas-navigation ul.sub-menu li a{color:#fff;font-weight:400}.offcanvas-navigation ul.sub-menu li a:hover{color:#1292ee}.offcanvas-navigation ul.sub-menu li .sub-menu li a{font-size:13px;padding:5px 0}.offcanvas-navigation ul li.menu-item-has-children{position:relative;display:block}.offcanvas-navigation ul li.menu-item-has-children a{display:inline-block}.offcanvas-navigation ul li.menu-item-has-children.active>.menu-expand{background-color:hsla(0,0%,100%,.2)}.offcanvas-navigation ul li.menu-item-has-children.active>.menu-expand i:before{transform:rotate(0)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand{top:5px;right:0;width:35px;height:35px;cursor:pointer;line-height:35px;position:absolute;text-align:center;background-color:hsla(0,0%,100%,.1)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand:hover{background-color:hsla(0,0%,100%,.2)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand i{display:block;border-bottom:1px solid #fff;position:relative;width:10px;text-align:center;top:50%;left:50%;transform:translate(-50%,-50%)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand i:before{width:100%;content:\"\";border-bottom:1px solid #fff;display:block;position:absolute;top:0;transform:rotate(90deg);transition:.4s}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ShapeWithAnimation.vue?vue&type=template&id=a4ad9198&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"shape scene",class:_vm.addClassName},[_vm._ssrNode("<span"+(_vm._ssrAttr("data-depth",_vm.dataDepth))+"><img"+(_vm._ssrAttr("src",_vm.imgSrc))+" alt=\"shape image\"></span>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ShapeWithAnimation.vue?vue&type=template&id=a4ad9198&

// EXTERNAL MODULE: external "parallax-js"
var external_parallax_js_ = __webpack_require__(97);
var external_parallax_js_default = /*#__PURE__*/__webpack_require__.n(external_parallax_js_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ShapeWithAnimation.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var ShapeWithAnimationvue_type_script_lang_js_ = ({head(){return{title:"Shape-With-Animation"};},props:["addClassName","imgSrc","dataDepth"],mounted(){var scene=document.querySelectorAll(".scene");if(scene){scene.forEach((el,i)=>{new external_parallax_js_default.a(el);});}}});
// CONCATENATED MODULE: ./components/ShapeWithAnimation.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ShapeWithAnimationvue_type_script_lang_js_ = (ShapeWithAnimationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/ShapeWithAnimation.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ShapeWithAnimationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "759bf0c0"
  
)

/* harmony default export */ var ShapeWithAnimation = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FeatureCard.vue?vue&type=template&id=875e9296&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col mt-30",attrs:{"data-aos":"fade-up"}},[_vm._ssrNode("<div"+(_vm._ssrClass("icon-box text-center",_vm.addClassName))+"><div class=\"icon\"><img"+(_vm._ssrAttr("src",_vm.image))+(_vm._ssrAttr("alt",_vm.title))+" style=\"width: 250px; height: 250px\"></div> <div class=\"content\"><h3 class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.title))+"</h3> <div class=\"desc\"><p>"+_vm._ssrEscape(_vm._s(_vm.text))+"</p></div> <a"+(_vm._ssrAttr("href",_vm.url))+" class=\"link\">詳細介紹</a></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/FeatureCard.vue?vue&type=template&id=875e9296&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FeatureCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FeatureCardvue_type_script_lang_js_ = ({head(){return{title:"Feature-Card"};},props:["addClassName","title","text","image","url"]});
// CONCATENATED MODULE: ./components/FeatureCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FeatureCardvue_type_script_lang_js_ = (FeatureCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/FeatureCard.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FeatureCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "ab8fd89a"
  
)

/* harmony default export */ var FeatureCard = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CallToAction.vue?vue&type=template&id=01a60b06&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section-padding-t90-b100"},[_vm._ssrNode("<div class=\"container shape-animate\">","</div>",[_c('SectionTitle',{attrs:{"title":"與我們聯繫","sub-title":"想要報名課程、租借裝備、購買裝備、詢問下水相關問題，都能與我們聯絡","add-class-name":"mb-30"}}),_vm._ssrNode(" "),_c('CallToActionCard'),_vm._ssrNode(" "),_c('ShapeWithAnimation',{attrs:{"add-class-name":"shape-1","data-depth":"4","img-src":"/images/shape-animation/video-shape-1.png"}})],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/CallToAction.vue?vue&type=template&id=01a60b06&

// EXTERNAL MODULE: ./components/SectionTitle.vue + 4 modules
var SectionTitle = __webpack_require__(108);

// EXTERNAL MODULE: ./components/CallToActionCard.vue + 4 modules
var CallToActionCard = __webpack_require__(124);

// EXTERNAL MODULE: ./components/ShapeWithAnimation.vue + 4 modules
var ShapeWithAnimation = __webpack_require__(111);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CallToAction.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CallToActionvue_type_script_lang_js_ = ({head(){return{title:"Call-to-Action"};},components:{SectionTitle: SectionTitle["default"],CallToActionCard: CallToActionCard["default"],ShapeWithAnimation: ShapeWithAnimation["default"]}});
// CONCATENATED MODULE: ./components/CallToAction.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CallToActionvue_type_script_lang_js_ = (CallToActionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/CallToAction.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CallToActionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3284ddd2"
  
)

/* harmony default export */ var CallToAction = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SectionTitle: __webpack_require__(108).default,CallToActionCard: __webpack_require__(124).default,ShapeWithAnimation: __webpack_require__(111).default})


/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FeatureCourse.vue?vue&type=template&id=f8c19742&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section-padding-t90-b100"},[_vm._ssrNode("<div class=\"container\">","</div>",[_c('SectionTitle',{attrs:{"title":"自 由 潛 水 AIDA 課 程","sub-title":"擁有專業教練、齊全裝備、最佳據點位置","add-class-name":"mb-60"}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30\">","</div>",_vm._l((_vm.features),function(feature,index){return _c('FeatureCard',{key:index,attrs:{"title":feature.title,"text":feature.text,"image":feature.image,"url":feature.url,"price":feature.price,"day":feature.day}})}),1)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/FeatureCourse.vue?vue&type=template&id=f8c19742&

// EXTERNAL MODULE: ./components/SectionTitle.vue + 4 modules
var SectionTitle = __webpack_require__(108);

// EXTERNAL MODULE: ./components/FeatureCard.vue + 4 modules
var FeatureCard = __webpack_require__(114);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FeatureCourse.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FeatureCoursevue_type_script_lang_js_ = ({head(){return{title:"Feature-Course"};},props:["addClassName"],components:{SectionTitle: SectionTitle["default"],FeatureCard: FeatureCard["default"]},data(){return{features:[{title:"AIDA 1 課程",text:"為你揭開大海的神秘面紗，讓你體驗從未體驗過的海底世界。本課程將使你有信心而且安全舒適的探索水下世界。課程中將帶你瞭解與感受自由潛水與眾不同的魅力。",image:"/images/aida-1.jpg",url:"/course-aida-1",price:"5500 TWD",day:"1 天"},{title:"AIDA 2 課程",text:"課程將針對自由潛水初學者正式進入開放海域所設計的基礎課程建立安全潛水的基本知識與能力。所有自由潛水的進步方式，練習技巧，基礎海況分析...等，都將在課堂中一一傳授與講解。",image:"/images/aida-2.png",url:"/course-aida-2",price:"13500 TWD",day:"3 天"},{title:"AIDA 3 課程",text:"強化下潛技巧與潛水認知進階的課程將合理運用所學到的每一個技巧，建立安全快速的進步方式與習慣，使平壓技巧與身體姿勢更佳順暢，最後身理與心理都能適應，達到每一次的下潛都能輕鬆與享受",image:"/images/aida-3.jpg",url:"/course-aida-3",price:"17000 TWD",day:"4 天"}]};}});
// CONCATENATED MODULE: ./components/FeatureCourse.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FeatureCoursevue_type_script_lang_js_ = (FeatureCoursevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/FeatureCourse.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FeatureCoursevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "adacb704"
  
)

/* harmony default export */ var FeatureCourse = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SectionTitle: __webpack_require__(108).default,FeatureCard: __webpack_require__(114).default})


/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CallToActionCard.vue?vue&type=template&id=16c9fdc4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30"},[_vm._ssrNode((_vm._ssrList((_vm.socialData),function(item,index){return ("<div data-aos=\"fade-up\" class=\"col mt-30\"><div class=\"contact-info\"><div class=\"icon\"><img"+(_vm._ssrAttr("src",item.src))+" alt=\"Icon\" class=\"svgInject\" style=\"width:64px; height: 64px\"></div> <div class=\"info\"><h4 class=\"title\">"+_vm._ssrEscape(_vm._s(item.title))+"</h4> <span class=\"info-text\">"+_vm._ssrEscape(_vm._s(item.info))+"</span></div></div></div>")})))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/CallToActionCard.vue?vue&type=template&id=16c9fdc4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CallToActionCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CallToActionCardvue_type_script_lang_js_ = ({head(){return{title:"Call-To-Action-Card"};},data(){return{socialData:[{title:"地圖資訊",info:"新北市貢寮區龍洞街1-5號",src:"/images/svg/linea/linea-basic-map.svg"},{title:"聯絡電話",info:"0955-857-339",src:"/images/svg/linea/linea-basic-message-txt.svg"},{title:"信箱Email",info:"ben7152000@gmail.com",src:"/images/svg/linea/linea-basic-mail-open-text.svg"}]};}});
// CONCATENATED MODULE: ./components/CallToActionCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CallToActionCardvue_type_script_lang_js_ = (CallToActionCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/CallToActionCard.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CallToActionCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "a044effc"
  
)

/* harmony default export */ var CallToActionCard = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeroSlider.vue?vue&type=template&id=09f8e53c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"intro-slider"},[_c('swiper',{attrs:{"options":_vm.swiperOptions}},_vm._l((_vm.sliderData),function(banner,index){return _c('swiper-slide',{key:index,staticClass:"swiper-slide"},[_c('div',{staticClass:"intro-section overlay bg-cover",style:({ backgroundImage: ("url(" + (banner.bgImgSrc) + ")") })},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row row-cols-lg-1 row-cols-1"},[_c('div',{staticClass:"col align-self-center"},[_c('div',{staticClass:"intro-content mt-xl-8 mt-lg-8 mt-md-8 mt-sm-8 mt-xs-8"},[_c('h2',{staticClass:"title"},[_vm._v(_vm._s(banner.heading))]),_vm._v(" "),_c('a',{staticClass:"btn btn-primary btn-hover-secondary",attrs:{"href":"/course"}},[_vm._v("立即報名")]),_vm._v(" "),_c('a',{staticClass:"btn btn-outline-white btn-hover-primary",attrs:{"href":"/equipment"}},[_vm._v("立即租借")])])])])])])])}),1),_vm._ssrNode(" <div class=\"home-slider-prev swiper-button-prev main-slider-nav\"><i class=\"fal fa-angle-left\"></i></div> <div class=\"home-slider-next swiper-button-next main-slider-nav\"><i class=\"fal fa-angle-right\"></i></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/HeroSlider.vue?vue&type=template&id=09f8e53c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeroSlider.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var HeroSlidervue_type_script_lang_js_ = ({head(){return{title:"Hero-Slider"};},data(){return{swiperOptions:{speed:1000,loop:true,autoplay:false,spaceBetween:30,navigation:{nextEl:".home-slider-next",prevEl:".home-slider-prev"}},sliderData:[{id:1,heading:"專 業 自 由 潛 水 課 程 & 裝 備 出 租",bgImgSrc:"/images/banner-1.jpeg"},{id:2,heading:"專 業 自 由 潛 水 課 程 & 裝 備 出 租",bgImgSrc:"/images/banner-2.jpg"}]};}});
// CONCATENATED MODULE: ./components/HeroSlider.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HeroSlidervue_type_script_lang_js_ = (HeroSlidervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/HeroSlider.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HeroSlidervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "82d81204"
  
)

/* harmony default export */ var HeroSlider = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AboutOne.vue?vue&type=template&id=a439bb96&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section-padding-t90 section-padding-bottom-200"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div data-aos=\"fade-up\" class=\"section-title text-center\"><h2 class=\"title\">龍 洞 岬 自 潛 、 浮 潛 中 心</h2></div> "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div data-aos=\"fade-up\" class=\"col-xl-7 col-lg-6\">","</div>",[_vm._ssrNode("<div class=\"about-image-area\">","</div>",[_vm._ssrNode("<div class=\"about-image js-tilt\"><img src=\"/images/about-1.jpg\" alt=\"images\" style=\"width: 370px; height: 370px\"></div> <div class=\"about-image js-tilt\"><img src=\"/images/about-2.jpg\" alt=\"images\" style=\"width: 370px; height: 400px\"></div> "),_c('ShapeWithAnimation',{attrs:{"addClassName":"shape-1","dataDepth":"1","imgSrc":"/images/shape-animation/about-shape-1.png"}})],2)]),_vm._ssrNode(" <div data-aos=\"fade-up\" class=\"col-xl-5 col-lg-6\"><div class=\"about-content-area about-one\"><div class=\"section-title-two\"><span class=\"sub-title\">每個人都能挑戰自己</span> <h3 class=\"title\">\n                            ✦ 本中心服務項目 ✦\n                        </h3></div> <ul><li>浮潛裝備出租,販售</li> <li>自由潛水裝備出租,販售</li> <li>自由潛水AIDA課程</li></ul> <a href=\"/about\" class=\"btn btn-primary btn-hover-secondary mt-4\">關於我們</a></div></div>")],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/AboutOne.vue?vue&type=template&id=a439bb96&

// EXTERNAL MODULE: ./components/ShapeWithAnimation.vue + 4 modules
var ShapeWithAnimation = __webpack_require__(111);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AboutOne.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var AboutOnevue_type_script_lang_js_ = ({head(){return{title:"About-One"};},components:{ShapeWithAnimation: ShapeWithAnimation["default"]}});
// CONCATENATED MODULE: ./components/AboutOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AboutOnevue_type_script_lang_js_ = (AboutOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/AboutOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AboutOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "f7595e48"
  
)

/* harmony default export */ var AboutOne = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ShapeWithAnimation: __webpack_require__(111).default})


/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=178ea868&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-container"},[_c('TheHeader'),_vm._ssrNode(" "),_c('OffCanvasMobileMenu'),_vm._ssrNode(" "),_c('HeroSlider'),_vm._ssrNode(" "),_c('AboutOne'),_vm._ssrNode(" "),_c('FeatureCourse',{style:({ backgroundColor: '#f8faff' })}),_vm._ssrNode(" "),_c('CallToAction'),_vm._ssrNode(" "),_c('TheFooter')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=178ea868&

// EXTERNAL MODULE: ./components/TheHeader.vue + 4 modules
var TheHeader = __webpack_require__(99);

// EXTERNAL MODULE: ./components/OffCanvasMobileMenu.vue + 4 modules
var OffCanvasMobileMenu = __webpack_require__(100);

// EXTERNAL MODULE: ./components/HeroSlider.vue + 4 modules
var HeroSlider = __webpack_require__(131);

// EXTERNAL MODULE: ./components/AboutOne.vue + 4 modules
var AboutOne = __webpack_require__(132);

// EXTERNAL MODULE: ./components/FeatureCourse.vue + 4 modules
var FeatureCourse = __webpack_require__(122);

// EXTERNAL MODULE: ./components/CallToAction.vue + 4 modules
var CallToAction = __webpack_require__(121);

// EXTERNAL MODULE: ./components/TheFooter.vue + 4 modules
var TheFooter = __webpack_require__(101);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({head(){return{title:"Home Page"};},components:{TheHeader: TheHeader["default"],OffCanvasMobileMenu: OffCanvasMobileMenu["default"],HeroSlider: HeroSlider["default"],AboutOne: AboutOne["default"],FeatureCourse: FeatureCourse["default"],CallToAction: CallToAction["default"],TheFooter: TheFooter["default"]}});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "bd2156de"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TheHeader: __webpack_require__(99).default,OffCanvasMobileMenu: __webpack_require__(100).default,HeroSlider: __webpack_require__(131).default,AboutOne: __webpack_require__(132).default,FeatureCourse: __webpack_require__(122).default,CallToAction: __webpack_require__(121).default,TheFooter: __webpack_require__(101).default})


/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(110);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("30fa31d0", content, true, context)
};

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TheHeader.vue?vue&type=template&id=6640c92c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"header-section header-transparent",class:{ 'is-sticky': _vm.isSticky }},[_vm._ssrNode("<div class=\"header-inner\">","</div>",[_vm._ssrNode("<div class=\"container position-relative\">","</div>",[_vm._ssrNode("<div class=\"row justify-content-between align-items-center\">","</div>",[_vm._ssrNode("<div class=\"col-xl-2 col-auto order-0\"><div class=\"header-logo\"><a href=\"/\"><img src=\"/images/logo.png\" alt=\"Agency Logo\" class=\"dark-logo\" style=\"width: 140px; height: 100px\"> <img src=\"/images/logo.png\" alt=\"Agency Logo\" class=\"light-logo\" style=\"width: 140px; height: 100px\"></a></div></div> "),_vm._ssrNode("<div class=\"col-auto col-xl d-flex align-items-center justify-content-xl-end justify-content-end order-2 order-xl-1\">","</div>",[_vm._ssrNode("<div class=\"menu-column-area d-none d-xl-block position-static\">","</div>",[_c('Navigation')],1),_vm._ssrNode(" <div class=\"header-mobile-menu-toggle d-xl-none ml-sm-2\"><button class=\"toggle\"><i class=\"icon-top\"></i> <i class=\"icon-middle\"></i> <i class=\"icon-bottom\"></i></button></div>")],2)],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TheHeader.vue?vue&type=template&id=6640c92c&

// EXTERNAL MODULE: ./components/Navigation.vue + 4 modules
var Navigation = __webpack_require__(102);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TheHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TheHeadervue_type_script_lang_js_ = ({head(){return{title:"The-Header"};},components:{Navigation: Navigation["default"]},data(){return{isSticky:false};},mounted(){window.addEventListener("scroll",()=>{let scrollPos=window.scrollY;if(scrollPos>=200){this.isSticky=true;}else{this.isSticky=false;}});},methods:{mobiletoggleClass(addRemoveClass,className){const el=document.querySelector("#offcanvas-menu");if(addRemoveClass==="addClass"){el.classList.add(className);}else{el.classList.remove(className);}}}});
// CONCATENATED MODULE: ./components/TheHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TheHeadervue_type_script_lang_js_ = (TheHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/TheHeader.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TheHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "92d7afaa"
  
)

/* harmony default export */ var TheHeader = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navigation: __webpack_require__(102).default})


/***/ })

};;
//# sourceMappingURL=index.js.map