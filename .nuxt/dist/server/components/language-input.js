exports.ids = [1];
exports.modules = {

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LanguageInput.vue?vue&type=template&id=49aafd45&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"lang-dropdown"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.$i18n.locale),expression:"$i18n.locale"}],on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.$i18n, "locale", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.$i18n.locales),function(lang){return _c('option',{key:lang.code,domProps:{"value":lang.code}},[_vm._v(_vm._s(lang.name))])}),0)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/LanguageInput.vue?vue&type=template&id=49aafd45&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LanguageInput.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var LanguageInputvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/LanguageInput.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LanguageInputvue_type_script_lang_js_ = (LanguageInputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/LanguageInput.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_LanguageInputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "82a3f4c8"
  
)

/* harmony default export */ var LanguageInput = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=language-input.js.map