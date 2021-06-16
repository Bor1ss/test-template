exports.ids = [14];
exports.modules = {

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/steps/index.vue?vue&type=template&id=68991706&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/steps/index.vue?vue&type=template&id=68991706&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/steps/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var stepsvue_type_script_lang_js_ = ({
  // async asyncData({ store, params, payload }) {
  //   await store.dispatch('steps/getSteps')
  // },
  data: () => ({
    step: null,
    show: false
  }),
  methods: {
    touchAll() {
      const value = this.$vuetify.theme.themes[this.theme];
      this.$vuetify.theme.themes[this.theme] = {};
      this.$vuetify.theme.themes[this.theme] = value;
    },

    swap() {
      this.$vuetify.theme.isDark = !this.$vuetify.theme.isDark; // necessary to reset colors after changing the theme, perhaps a Vuetify.js bug

      this.touchAll(1);
    }

  },
  computed: {
    theme() {
      return this.$vuetify.theme.isDark ? 'dark' : 'light';
    },

    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale);
    },

    currentStep() {
      return this.$store.state.steps.currentStep;
    },

    steps() {
      return this.$store.state.steps.steps;
    },

    isLoading() {
      return this.$store.state.steps.isLoading;
    }

  } // watch: {
  //   '$route.query': '$fetch',
  // },

});
// CONCATENATED MODULE: ./pages/steps/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_stepsvue_type_script_lang_js_ = (stepsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./pages/steps/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_stepsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "703e32c5"
  
)

/* harmony default export */ var steps = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map