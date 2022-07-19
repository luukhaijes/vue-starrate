(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vueStarRating"] = factory(require("vue"));
	else
		root["vueStarRating"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), (__WEBPACK_EXTERNAL_MODULE__203__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 203:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__203__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ entry_lib)
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ const setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(203);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader/index.js??clonedRuleSet-83.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/icons/IconStar.vue?vue&type=script&lang=ts&setup=true


const _hoisted_1 = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32"
};
const _hoisted_2 = ["id"];
const _hoisted_3 = ["offset"];
const _hoisted_4 = /*#__PURE__*/ (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("stop", {
    "stop-color": "#d2d5da",
    offset: "0%",
    id: "F1gst2"
}, null, -1);
const _hoisted_5 = ["fill"];

/* harmony default export */ const IconStarvue_type_script_lang_ts_setup_true = (/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({
    __name: 'IconStar',
    props: {
        offsetPercentage: {
            required: false,
            default: 0
        }
    },
    setup(__props) {
        const id = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(() => 'F1g-' + parseFloat((Math.random() * 100).toString()).toFixed(0));
        return (_ctx, _cache) => {
            return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("svg", _hoisted_1, [
                (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("defs", null, [
                    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("linearGradient", {
                        y2: "0%",
                        x2: "100%",
                        y1: "0%",
                        x1: "0%",
                        id: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(id)
                    }, [
                        (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("stop", {
                            "stop-color": "#f9d949",
                            offset: __props.offsetPercentage + '%',
                            id: "F1gst1"
                        }, null, 8, _hoisted_3),
                        _hoisted_4
                    ], 8, _hoisted_2)
                ]),
                (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("path", {
                    fill: 'url(#' + (0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(id) + ')',
                    d: "M 30.335938 12.546875 L 20.164063 11.472656 L 16 2.132813 L 11.835938 11.472656 L 1.664063 12.546875 L 9.261719 19.394531 L 7.140625 29.398438 L 16 24.289063 L 24.859375 29.398438 L 22.738281 19.394531 Z"
                }, null, 8, _hoisted_5)
            ]));
        };
    }
}));

;// CONCATENATED MODULE: ./src/icons/IconStar.vue?vue&type=script&lang=ts&setup=true
 
;// CONCATENATED MODULE: ./src/icons/IconStar.vue



const __exports__ = IconStarvue_type_script_lang_ts_setup_true;

/* harmony default export */ const IconStar = (__exports__);
;// CONCATENATED MODULE: ./src/constants.ts
const DEFAULT_STAR_AMOUNT = 5;

;// CONCATENATED MODULE: ./src/composables/useGetStarSet.ts


const useGetStarSet = (starSet) => {
    const starsSet = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)([]);
    const generate = (score) => {
        const scoreHalved = starSet === 5 ? score : score / 2;
        const fillCount = Math.floor(scoreHalved);
        let remainder = 0;
        if (scoreHalved % 1 !== 0) {
            remainder = Number(parseFloat((scoreHalved % 1).toString()).toFixed(2));
        }
        const remainderPercentage = remainder * 100;
        const stars = [];
        for (let i = 0; i < fillCount; i++) {
            stars.push(100);
        }
        stars.push(remainderPercentage);
        [...Array(DEFAULT_STAR_AMOUNT).keys()].forEach((index) => {
            starsSet.value[index] = stars[index];
        });
    };
    return {
        generate,
        starsSet
    };
};

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader/index.js??clonedRuleSet-83.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/StarRating.vue?vue&type=script&lang=ts&setup=true






/* harmony default export */ const StarRatingvue_type_script_lang_ts_setup_true = (/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({
    __name: 'StarRating',
    props: {
        modelValue: {
            type: Number,
            default: 0
        },
        score: {
            type: Number,
            default: 0
        },
        starSet: {
            type: Number,
            default: 5
        }
    },
    emits: ["valueChange", "update:modelValue"],
    setup(__props, { emit: emits }) {
        const props = __props;
        const scoreValue = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(0);
        const { starsSet, generate } = useGetStarSet(props.starSet);
        const handleStarClick = (index) => {
            if (props.starSet === 5) {
                const score = index + 1;
                emits("valueChange", score);
                emits("update:modelValue", score);
                scoreValue.value = score;
            }
        };
        const hovering = (el, hovering) => {
            let starAttr = el.target.dataset.star;
            if (starAttr && hovering) {
                const starNr = +starAttr;
                requestAnimationFrame(() => {
                    [...Array(DEFAULT_STAR_AMOUNT).keys()].forEach((star, index) => {
                        starsSet.value[index] = index <= starNr ? 100 : 0;
                    });
                });
            }
            else {
                generate(scoreValue.value);
            }
        };
        (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)([() => props.score, () => props.modelValue], (value) => {
            generate(value[1]);
        });
        (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(() => {
            scoreValue.value = props.score || props.modelValue;
            generate(scoreValue.value);
        });
        return (_ctx, _cache) => {
            return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
                "data-test": "star-container",
                class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(["rating__container", { 'rating__container--readonly': props.starSet === 10 }])
            }, [
                ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(starsSet), (star, i) => {
                    return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
                        key: i,
                        class: "rating__star"
                    }, [
                        (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(IconStar, {
                            "data-test": "star",
                            "data-star": i,
                            "offset-percentage": star,
                            onMouseenter: _cache[0] || (_cache[0] = ($event) => (hovering($event, true))),
                            onMouseleave: _cache[1] || (_cache[1] = ($event) => (hovering($event, false))),
                            onClick: ($event) => (handleStarClick(i))
                        }, null, 8, ["data-star", "offset-percentage", "onClick"])
                    ]));
                }), 128))
            ], 2));
        };
    }
}));

;// CONCATENATED MODULE: ./src/StarRating.vue?vue&type=script&lang=ts&setup=true
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-55.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-55.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-55.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/StarRating.vue?vue&type=style&index=0&id=3c128b5c&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/StarRating.vue?vue&type=style&index=0&id=3c128b5c&lang=css

;// CONCATENATED MODULE: ./src/StarRating.vue



;

const StarRating_exports_ = StarRatingvue_type_script_lang_ts_setup_true;

/* harmony default export */ const StarRating = (StarRating_exports_);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ const entry_lib = (StarRating);


})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=vueStarRating.umd.js.map