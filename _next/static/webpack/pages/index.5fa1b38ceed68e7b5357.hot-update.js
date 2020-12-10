webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/components/IndustryChallenges.tsx":
/*!*************************************************!*\
  !*** ./pages/components/IndustryChallenges.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return IndustryChallenges; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-slider */ \"./node_modules/rc-slider/es/index.js\");\n/* harmony import */ var _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/IndustryChallenges.module.scss */ \"./pages/components/styles/IndustryChallenges.module.scss\");\n/* harmony import */ var _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/weikit/Desktop/code/hitachi/pages/components/IndustryChallenges.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction IndustryChallenges() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      activeIndex = _useState[0],\n      setActiveIndex = _useState[1];\n\n  var wrapperStyle = {\n    width: '50vw',\n    margin: 'auto'\n  };\n  var labelStyle = {\n    fontSize: '1rem',\n    color: '#1BA7EC'\n  };\n  var marks = {\n    0: {\n      style: labelStyle,\n      label: 'Data Living in Silos'\n    },\n    1: {\n      style: labelStyle,\n      label: 'Lack of Skilled Managers'\n    },\n    2: {\n      style: labelStyle,\n      label: 'Cybersecurity Threats'\n    }\n  };\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  }, activeIndex == 0 && __jsx(\"object\", {\n    className: _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['svg'],\n    type: \"image/svg+xml\",\n    data: \"svg/data-living-in-silos.svg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 29\n    }\n  }), activeIndex == 1 && __jsx(\"object\", {\n    className: _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['svg'],\n    type: \"image/svg+xml\",\n    data: \"svg/lack-of-skilled-managers.svg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 29\n    }\n  }), activeIndex == 2 && __jsx(\"object\", {\n    className: _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['svg'],\n    type: \"image/svg+xml\",\n    data: \"svg/cybersecurity-threats.svg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 29\n    }\n  }), __jsx(\"div\", {\n    style: wrapperStyle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, __jsx(rc_slider__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    min: 0,\n    max: 2,\n    marks: marks,\n    included: false,\n    value: activeIndex,\n    onChange: setActiveIndex,\n    railStyle: {\n      backgroundColor: '#1CA7EC'\n    },\n    dotStyle: {\n      borderColor: '#1CA7EC',\n      backgroundColor: '#1CA7EC'\n    },\n    handleStyle: {\n      borderColor: '#1E3998',\n      backgroundColor: '#1E3998'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  })), activeIndex == 0 && __jsx(\"div\", {\n    className: _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['description'],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }\n  }, \"According to a IDC study, manufacturing data is rarely housed in a common data lake or system, but typiccaly in siloed systems.\"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 13\n    }\n  }, \"Operators and engineers must manually piece together information from these siloed systems in a tedious and time-consuming process - which naturally hampers innovation and discourages collaboration in a company.\")), activeIndex == 1 && __jsx(\"div\", {\n    className: _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['description'],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 13\n    }\n  }, \"A McKinsey study has revealed that ASEAN companies suffer from a lack of managers who understand new technologies and innovation to properly implement a transformational strategy, and an insufficient grasp of how all these new solutions can best optimise work processes.\")), activeIndex == 2 && __jsx(\"div\", {\n    className: _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['description'],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 13\n    }\n  }, \"Risks to manufacturers have existed as long as production has been mechanised. Industry 4.0 however, heralds the greatest leaps in cyber risk to date, as highlighted in a Deloitte paper.\"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 13\n    }\n  }, \"Advanced malware, armed with zero-day exploits, that automously targets vulnerable devices and spreads with little human intervention is likely to overpower an already challenged IT/OT security staff. This disturbing trend highlights the need for IoT devices manufacturers to product security-hardened devices.\")));\n}\n\n_s(IndustryChallenges, \"rd+5N/MkYjuYD0I+B+MlySxQysU=\");\n\n_c = IndustryChallenges;\n\nvar _c;\n\n$RefreshReg$(_c, \"IndustryChallenges\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9JbmR1c3RyeUNoYWxsZW5nZXMudHN4P2E2NGYiXSwibmFtZXMiOlsiSW5kdXN0cnlDaGFsbGVuZ2VzIiwidXNlU3RhdGUiLCJhY3RpdmVJbmRleCIsInNldEFjdGl2ZUluZGV4Iiwid3JhcHBlclN0eWxlIiwid2lkdGgiLCJtYXJnaW4iLCJsYWJlbFN0eWxlIiwiZm9udFNpemUiLCJjb2xvciIsIm1hcmtzIiwic3R5bGUiLCJsYWJlbCIsInN0eWxlcyIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFZSxTQUFTQSxrQkFBVCxHQUE4QjtBQUFBOztBQUFBLGtCQUNMQyxzREFBUSxDQUFDLENBQUQsQ0FESDtBQUFBLE1BQ3BDQyxXQURvQztBQUFBLE1BQ3ZCQyxjQUR1Qjs7QUFFM0MsTUFBTUMsWUFBWSxHQUFHO0FBQUVDLFNBQUssRUFBRSxNQUFUO0FBQWlCQyxVQUFNLEVBQUU7QUFBekIsR0FBckI7QUFDQSxNQUFNQyxVQUFVLEdBQUc7QUFBRUMsWUFBUSxFQUFFLE1BQVo7QUFBb0JDLFNBQUssRUFBRTtBQUEzQixHQUFuQjtBQUNBLE1BQU1DLEtBQUssR0FBRztBQUNaLE9BQUc7QUFDREMsV0FBSyxFQUFFSixVQUROO0FBRURLLFdBQUssRUFBRTtBQUZOLEtBRFM7QUFLWixPQUFHO0FBQ0RELFdBQUssRUFBRUosVUFETjtBQUVESyxXQUFLLEVBQUU7QUFGTixLQUxTO0FBU1osT0FBRztBQUNERCxXQUFLLEVBQUVKLFVBRE47QUFFREssV0FBSyxFQUFFO0FBRk47QUFUUyxHQUFkO0FBY0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUlWLFdBQVcsSUFBSSxDQUFmLElBQW9CO0FBQVEsYUFBUyxFQUFFVyw2RUFBTSxDQUFDLEtBQUQsQ0FBekI7QUFBa0MsUUFBSSxFQUFDLGVBQXZDO0FBQXVELFFBQUksRUFBQyw4QkFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZ4QixFQUtJWCxXQUFXLElBQUksQ0FBZixJQUFvQjtBQUFRLGFBQVMsRUFBRVcsNkVBQU0sQ0FBQyxLQUFELENBQXpCO0FBQWtDLFFBQUksRUFBQyxlQUF2QztBQUF1RCxRQUFJLEVBQUMsa0NBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMeEIsRUFRSVgsV0FBVyxJQUFJLENBQWYsSUFBb0I7QUFBUSxhQUFTLEVBQUVXLDZFQUFNLENBQUMsS0FBRCxDQUF6QjtBQUFrQyxRQUFJLEVBQUMsZUFBdkM7QUFBdUQsUUFBSSxFQUFDLCtCQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUnhCLEVBVUU7QUFBSyxTQUFLLEVBQUVULFlBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsaURBQUQ7QUFDRSxPQUFHLEVBQUUsQ0FEUDtBQUVFLE9BQUcsRUFBRSxDQUZQO0FBR0UsU0FBSyxFQUFFTSxLQUhUO0FBSUUsWUFBUSxFQUFFLEtBSlo7QUFLRSxTQUFLLEVBQUVSLFdBTFQ7QUFNRSxZQUFRLEVBQUVDLGNBTlo7QUFPRSxhQUFTLEVBQUU7QUFBQ1cscUJBQWUsRUFBRTtBQUFsQixLQVBiO0FBUUUsWUFBUSxFQUFFO0FBQUNDLGlCQUFXLEVBQUUsU0FBZDtBQUF5QkQscUJBQWUsRUFBRTtBQUExQyxLQVJaO0FBU0UsZUFBVyxFQUFFO0FBQUNDLGlCQUFXLEVBQUUsU0FBZDtBQUF5QkQscUJBQWUsRUFBRTtBQUExQyxLQVRmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVZGLEVBd0JJWixXQUFXLElBQUksQ0FBZixJQUNFO0FBQUssYUFBUyxFQUFFVyw2RUFBTSxDQUFDLGFBQUQsQ0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUlBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJOQUpGLENBekJOLEVBb0NJWCxXQUFXLElBQUksQ0FBZixJQUNFO0FBQUssYUFBUyxFQUFFVyw2RUFBTSxDQUFDLGFBQUQsQ0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc1JBREYsQ0FyQ04sRUE2Q0lYLFdBQVcsSUFBSSxDQUFmLElBQ0U7QUFBSyxhQUFTLEVBQUVXLDZFQUFNLENBQUMsYUFBRCxDQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrTUFERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOFRBSkYsQ0E5Q04sQ0FERjtBQTJERDs7R0E3RXVCYixrQjs7S0FBQUEsa0IiLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL0luZHVzdHJ5Q2hhbGxlbmdlcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFNsaWRlciBmcm9tICdyYy1zbGlkZXInXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvSW5kdXN0cnlDaGFsbGVuZ2VzLm1vZHVsZS5zY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmR1c3RyeUNoYWxsZW5nZXMoKSB7XG4gIGNvbnN0IFthY3RpdmVJbmRleCwgc2V0QWN0aXZlSW5kZXhdID0gdXNlU3RhdGUoMClcbiAgY29uc3Qgd3JhcHBlclN0eWxlID0geyB3aWR0aDogJzUwdncnLCBtYXJnaW46ICdhdXRvJyB9XG4gIGNvbnN0IGxhYmVsU3R5bGUgPSB7IGZvbnRTaXplOiAnMXJlbScsIGNvbG9yOiAnIzFCQTdFQycgfVxuICBjb25zdCBtYXJrcyA9IHtcbiAgICAwOiB7XG4gICAgICBzdHlsZTogbGFiZWxTdHlsZSxcbiAgICAgIGxhYmVsOiAnRGF0YSBMaXZpbmcgaW4gU2lsb3MnLFxuICAgIH0sXG4gICAgMTogeyBcbiAgICAgIHN0eWxlOiBsYWJlbFN0eWxlLFxuICAgICAgbGFiZWw6ICdMYWNrIG9mIFNraWxsZWQgTWFuYWdlcnMnLFxuICAgIH0sXG4gICAgMjoge1xuICAgICAgc3R5bGU6IGxhYmVsU3R5bGUsXG4gICAgICBsYWJlbDogJ0N5YmVyc2VjdXJpdHkgVGhyZWF0cydcbiAgICB9XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge1xuICAgICAgICBhY3RpdmVJbmRleCA9PSAwICYmIDxvYmplY3QgY2xhc3NOYW1lPXtzdHlsZXNbJ3N2ZyddfSB0eXBlPVwiaW1hZ2Uvc3ZnK3htbFwiIGRhdGE9XCJzdmcvZGF0YS1saXZpbmctaW4tc2lsb3Muc3ZnXCIvPlxuICAgICAgfSBcbiAgICAgIHsgIFxuICAgICAgICBhY3RpdmVJbmRleCA9PSAxICYmIDxvYmplY3QgY2xhc3NOYW1lPXtzdHlsZXNbJ3N2ZyddfSB0eXBlPVwiaW1hZ2Uvc3ZnK3htbFwiIGRhdGE9XCJzdmcvbGFjay1vZi1za2lsbGVkLW1hbmFnZXJzLnN2Z1wiLz5cbiAgICAgIH0gXG4gICAgICB7IFxuICAgICAgICBhY3RpdmVJbmRleCA9PSAyICYmIDxvYmplY3QgY2xhc3NOYW1lPXtzdHlsZXNbJ3N2ZyddfSB0eXBlPVwiaW1hZ2Uvc3ZnK3htbFwiIGRhdGE9XCJzdmcvY3liZXJzZWN1cml0eS10aHJlYXRzLnN2Z1wiLz5cbiAgICAgIH1cbiAgICAgIDxkaXYgc3R5bGU9e3dyYXBwZXJTdHlsZX0+XG4gICAgICAgIDxTbGlkZXIgXG4gICAgICAgICAgbWluPXswfSBcbiAgICAgICAgICBtYXg9ezJ9IFxuICAgICAgICAgIG1hcmtzPXttYXJrc30gXG4gICAgICAgICAgaW5jbHVkZWQ9e2ZhbHNlfSBcbiAgICAgICAgICB2YWx1ZT17YWN0aXZlSW5kZXh9IFxuICAgICAgICAgIG9uQ2hhbmdlPXtzZXRBY3RpdmVJbmRleH1cbiAgICAgICAgICByYWlsU3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjMUNBN0VDJ319XG4gICAgICAgICAgZG90U3R5bGU9e3tib3JkZXJDb2xvcjogJyMxQ0E3RUMnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjMUNBN0VDJ319XG4gICAgICAgICAgaGFuZGxlU3R5bGU9e3tib3JkZXJDb2xvcjogJyMxRTM5OTgnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjMUUzOTk4J319XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtcbiAgICAgICAgYWN0aXZlSW5kZXggPT0gMCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snZGVzY3JpcHRpb24nXX0+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgQWNjb3JkaW5nIHRvIGEgSURDIHN0dWR5LCBtYW51ZmFjdHVyaW5nIGRhdGEgaXMgcmFyZWx5IGhvdXNlZCBpbiBhIGNvbW1vbiBkYXRhIGxha2Ugb3Igc3lzdGVtLCBidXQgdHlwaWNjYWx5IGluIHNpbG9lZCBzeXN0ZW1zLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIE9wZXJhdG9ycyBhbmQgZW5naW5lZXJzIG11c3QgbWFudWFsbHkgcGllY2UgdG9nZXRoZXIgaW5mb3JtYXRpb24gZnJvbSB0aGVzZSBzaWxvZWQgc3lzdGVtcyBpbiBhIHRlZGlvdXMgYW5kIHRpbWUtY29uc3VtaW5nIHByb2Nlc3MgLSB3aGljaCBuYXR1cmFsbHkgaGFtcGVycyBpbm5vdmF0aW9uIGFuZCBkaXNjb3VyYWdlcyBjb2xsYWJvcmF0aW9uIGluIGEgY29tcGFueS5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSBcbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgYWN0aXZlSW5kZXggPT0gMSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snZGVzY3JpcHRpb24nXX0+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgQSBNY0tpbnNleSBzdHVkeSBoYXMgcmV2ZWFsZWQgdGhhdCBBU0VBTiBjb21wYW5pZXMgc3VmZmVyIGZyb20gYSBsYWNrIG9mIG1hbmFnZXJzIHdobyB1bmRlcnN0YW5kIG5ldyB0ZWNobm9sb2dpZXMgYW5kIGlubm92YXRpb24gdG8gcHJvcGVybHkgaW1wbGVtZW50IGEgdHJhbnNmb3JtYXRpb25hbCBzdHJhdGVneSwgYW5kIGFuIGluc3VmZmljaWVudCBncmFzcCBvZiBob3cgYWxsIHRoZXNlIG5ldyBzb2x1dGlvbnMgY2FuIGJlc3Qgb3B0aW1pc2Ugd29yayBwcm9jZXNzZXMuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHsgXG4gICAgICAgIGFjdGl2ZUluZGV4ID09IDIgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2Rlc2NyaXB0aW9uJ119PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFJpc2tzIHRvIG1hbnVmYWN0dXJlcnMgaGF2ZSBleGlzdGVkIGFzIGxvbmcgYXMgcHJvZHVjdGlvbiBoYXMgYmVlbiBtZWNoYW5pc2VkLiBJbmR1c3RyeSA0LjAgaG93ZXZlciwgaGVyYWxkcyB0aGUgZ3JlYXRlc3QgbGVhcHMgaW4gY3liZXIgcmlzayB0byBkYXRlLCBhcyBoaWdobGlnaHRlZCBpbiBhIERlbG9pdHRlIHBhcGVyLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEFkdmFuY2VkIG1hbHdhcmUsIGFybWVkIHdpdGggemVyby1kYXkgZXhwbG9pdHMsIHRoYXQgYXV0b21vdXNseSB0YXJnZXRzIHZ1bG5lcmFibGUgZGV2aWNlcyBhbmQgc3ByZWFkcyB3aXRoIGxpdHRsZSBodW1hbiBpbnRlcnZlbnRpb24gaXMgbGlrZWx5IHRvIG92ZXJwb3dlciBhbiBhbHJlYWR5IGNoYWxsZW5nZWQgSVQvT1Qgc2VjdXJpdHkgc3RhZmYuIFRoaXMgZGlzdHVyYmluZyB0cmVuZCBoaWdobGlnaHRzIHRoZSBuZWVkIGZvciBJb1QgZGV2aWNlcyBtYW51ZmFjdHVyZXJzIHRvIHByb2R1Y3Qgc2VjdXJpdHktaGFyZGVuZWQgZGV2aWNlcy5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIDwvZGl2PlxuICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/IndustryChallenges.tsx\n");

/***/ })

})