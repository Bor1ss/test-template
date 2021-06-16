exports.ids = [12];
exports.modules = {

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/loading.vue?vue&type=template&id=11817d1a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<h1>Having fun with loaders</h1>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/loading.vue?vue&type=template&id=11817d1a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/loading.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var loadingvue_type_script_lang_js_ = ({
  /*
   ** programmatically start the loader so we force the page to take x2seconds to load
   */
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 2000);
    });
  }

});
// CONCATENATED MODULE: ./pages/loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loadingvue_type_script_lang_js_ = (loadingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./pages/loading.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loadingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6b5eceb8"
  
)

/* harmony default export */ var loading = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=loading.js.map