webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/components/IndustryChallenges.tsx":
/*!*************************************************!*\
  !*** ./pages/components/IndustryChallenges.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return IndustryChallenges; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-slider */ \"./node_modules/rc-slider/es/index.js\");\n/* harmony import */ var _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/IndustryChallenges.module.scss */ \"./pages/components/styles/IndustryChallenges.module.scss\");\n/* harmony import */ var _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/weikit/Desktop/code/hitachi/pages/components/IndustryChallenges.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction IndustryChallenges() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      activeIndex = _useState[0],\n      setActiveIndex = _useState[1];\n\n  var marks = {\n    0: 'Data Living in Silos',\n    1: 'Lack of Skilled Managers',\n    2: 'Cybersecurity Threats'\n  };\n  var oneClass = \"\".concat(activeIndex == 0 ? _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['fade-in'] : _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['fade-out']);\n  var twoClass = \"\".concat(activeIndex == 1 ? _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['fade-in'] : _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['fade-out']);\n  var threeClass = \"\".concat(activeIndex == 2 ? _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['fade-in'] : _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['fade-out']);\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, activeIndex == 0 && __jsx(\"object\", {\n    className: _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['description'],\n    type: \"image/svg+xml\",\n    data: \"svg/data-living-in-silos.svg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 11\n    }\n  }), activeIndex == 1 && __jsx(\"object\", {\n    className: _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['description'],\n    type: \"image/svg+xml\",\n    data: \"svg/lack-of-skilled-managers.svg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }), activeIndex == 2 && __jsx(\"object\", {\n    className: _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['description'],\n    type: \"image/svg+xml\",\n    data: \"svg/cybersecurity-threats.svg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 11\n    }\n  }), __jsx(rc_slider__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    min: 0,\n    max: 2,\n    marks: marks,\n    included: false,\n    value: activeIndex,\n    onChange: setActiveIndex,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }), activeIndex == 0 ? __jsx(\"div\", {\n    className: _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['description'],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, \"According to a IDC study, manufacturing data is rarely housed in a common data lake or system, but typiccaly in siloed systems.\"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }\n  }, \"Operators and engineers must manually piece together information from these siloed systems in a tedious and time-consuming process - which naturally hampers innovation and discourages collaboration in a company.\")) : activeIndex == 1 ? __jsx(\"div\", {\n    className: _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['description'],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }\n  }, \"A McKinsey study has revealed that ASEAN companies suffer from a lack of managers who understand new technologies and innovation to properly implement a transformational strategy, and an insufficient grasp of how all these new solutions can best optimise work processes.\")) : __jsx(\"div\", {\n    className: _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['description'],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 13\n    }\n  }, \"Risks to manufacturers have existed as long as production has been mechanised. Industry 4.0 however, heralds the greatest leaps in cyber risk to date, as highlighted in a Deloitte paper.\"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 13\n    }\n  }, \"Advanced malware, armed with zero-day exploits, that automously targets vulnerable devices and spreads with little human intervention is likely to overpower an already challenged IT/OT security staff. This disturbing trend highlights the need for IoT devices manufacturers to product security-hardened devices.\")));\n}\n\n_s(IndustryChallenges, \"rd+5N/MkYjuYD0I+B+MlySxQysU=\");\n\n_c = IndustryChallenges;\n\nvar _c;\n\n$RefreshReg$(_c, \"IndustryChallenges\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9JbmR1c3RyeUNoYWxsZW5nZXMudHN4P2E2NGYiXSwibmFtZXMiOlsiSW5kdXN0cnlDaGFsbGVuZ2VzIiwidXNlU3RhdGUiLCJhY3RpdmVJbmRleCIsInNldEFjdGl2ZUluZGV4IiwibWFya3MiLCJvbmVDbGFzcyIsInN0eWxlcyIsInR3b0NsYXNzIiwidGhyZWVDbGFzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUdBO0FBRWUsU0FBU0Esa0JBQVQsR0FBOEI7QUFBQTs7QUFBQSxrQkFDTEMsc0RBQVEsQ0FBQyxDQUFELENBREg7QUFBQSxNQUNwQ0MsV0FEb0M7QUFBQSxNQUN2QkMsY0FEdUI7O0FBRTNDLE1BQU1DLEtBQUssR0FBRztBQUNaLE9BQUcsc0JBRFM7QUFFWixPQUFHLDBCQUZTO0FBR1osT0FBRztBQUhTLEdBQWQ7QUFLQSxNQUFNQyxRQUFRLGFBQVFILFdBQVcsSUFBSSxDQUFmLEdBQW1CSSw2RUFBTSxDQUFDLFNBQUQsQ0FBekIsR0FBdUNBLDZFQUFNLENBQUMsVUFBRCxDQUFyRCxDQUFkO0FBQ0EsTUFBTUMsUUFBUSxhQUFRTCxXQUFXLElBQUksQ0FBZixHQUFtQkksNkVBQU0sQ0FBQyxTQUFELENBQXpCLEdBQXVDQSw2RUFBTSxDQUFDLFVBQUQsQ0FBckQsQ0FBZDtBQUNBLE1BQU1FLFVBQVUsYUFBTU4sV0FBVyxJQUFJLENBQWYsR0FBbUJJLDZFQUFNLENBQUMsU0FBRCxDQUF6QixHQUF1Q0EsNkVBQU0sQ0FBQyxVQUFELENBQW5ELENBQWhCO0FBQ0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUlKLFdBQVcsSUFBSSxDQUFmLElBQ0U7QUFBUSxhQUFTLEVBQUVJLDZFQUFNLENBQUMsYUFBRCxDQUF6QjtBQUEwQyxRQUFJLEVBQUMsZUFBL0M7QUFBK0QsUUFBSSxFQUFDLDhCQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSE4sRUFPSUosV0FBVyxJQUFJLENBQWYsSUFDRTtBQUFRLGFBQVMsRUFBRUksNkVBQU0sQ0FBQyxhQUFELENBQXpCO0FBQTBDLFFBQUksRUFBQyxlQUEvQztBQUErRCxRQUFJLEVBQUMsa0NBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSTixFQVdJSixXQUFXLElBQUksQ0FBZixJQUNFO0FBQVEsYUFBUyxFQUFFSSw2RUFBTSxDQUFDLGFBQUQsQ0FBekI7QUFBMEMsUUFBSSxFQUFDLGVBQS9DO0FBQStELFFBQUksRUFBQywrQkFBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpOLEVBZUUsTUFBQyxpREFBRDtBQUFRLE9BQUcsRUFBRSxDQUFiO0FBQWdCLE9BQUcsRUFBRSxDQUFyQjtBQUF3QixTQUFLLEVBQUVGLEtBQS9CO0FBQXNDLFlBQVEsRUFBRSxLQUFoRDtBQUF1RCxTQUFLLEVBQUVGLFdBQTlEO0FBQTJFLFlBQVEsRUFBRUMsY0FBckY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWZGLEVBaUJJRCxXQUFXLElBQUksQ0FBZixHQUNFO0FBQUssYUFBUyxFQUFFSSw2RUFBTSxDQUFDLGFBQUQsQ0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUlBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJOQUpGLENBREYsR0FTSUosV0FBVyxJQUFJLENBQWYsR0FDRjtBQUFLLGFBQVMsRUFBRUksNkVBQU0sQ0FBQyxhQUFELENBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNSQURGLENBREUsR0FPRjtBQUFLLGFBQVMsRUFBRUEsNkVBQU0sQ0FBQyxhQUFELENBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtNQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4VEFKRixDQWpDTixDQURGO0FBOENEOztHQXhEdUJOLGtCOztLQUFBQSxrQiIsImZpbGUiOiIuL3BhZ2VzL2NvbXBvbmVudHMvSW5kdXN0cnlDaGFsbGVuZ2VzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gJ3JlYWN0c3RyYXAnXG5pbXBvcnQgU2xpZGVyIGZyb20gJ3JjLXNsaWRlcidcbmltcG9ydCB7IENTU1RyYW5zaXRpb24sIFRyYW5zaXRpb25Hcm91cCB9IGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvSW5kdXN0cnlDaGFsbGVuZ2VzLm1vZHVsZS5zY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmR1c3RyeUNoYWxsZW5nZXMoKSB7XG4gIGNvbnN0IFthY3RpdmVJbmRleCwgc2V0QWN0aXZlSW5kZXhdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgbWFya3MgPSB7XG4gICAgMDogJ0RhdGEgTGl2aW5nIGluIFNpbG9zJyxcbiAgICAxOiAnTGFjayBvZiBTa2lsbGVkIE1hbmFnZXJzJyxcbiAgICAyOiAnQ3liZXJzZWN1cml0eSBUaHJlYXRzJ1xuICB9XG4gIGNvbnN0IG9uZUNsYXNzICAgPSBgJHthY3RpdmVJbmRleCA9PSAwID8gc3R5bGVzWydmYWRlLWluJ10gOiBzdHlsZXNbJ2ZhZGUtb3V0J119YFxuICBjb25zdCB0d29DbGFzcyAgID0gYCR7YWN0aXZlSW5kZXggPT0gMSA/IHN0eWxlc1snZmFkZS1pbiddIDogc3R5bGVzWydmYWRlLW91dCddfWBcbiAgY29uc3QgdGhyZWVDbGFzcyA9IGAke2FjdGl2ZUluZGV4ID09IDIgPyBzdHlsZXNbJ2ZhZGUtaW4nXSA6IHN0eWxlc1snZmFkZS1vdXQnXX1gXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtcbiAgICAgICAgYWN0aXZlSW5kZXggPT0gMCAmJiAoXG4gICAgICAgICAgPG9iamVjdCBjbGFzc05hbWU9e3N0eWxlc1snZGVzY3JpcHRpb24nXX0gdHlwZT1cImltYWdlL3N2Zyt4bWxcIiBkYXRhPVwic3ZnL2RhdGEtbGl2aW5nLWluLXNpbG9zLnN2Z1wiIC8+XG4gICAgICAgIClcbiAgICAgIH0gXG4gICAgICB7ICBcbiAgICAgICAgYWN0aXZlSW5kZXggPT0gMSAmJiAoXG4gICAgICAgICAgPG9iamVjdCBjbGFzc05hbWU9e3N0eWxlc1snZGVzY3JpcHRpb24nXX0gdHlwZT1cImltYWdlL3N2Zyt4bWxcIiBkYXRhPVwic3ZnL2xhY2stb2Ytc2tpbGxlZC1tYW5hZ2Vycy5zdmdcIiAvPlxuICAgICAgICApXG4gICAgICB9IFxuICAgICAgeyBhY3RpdmVJbmRleCA9PSAyICYmIChcbiAgICAgICAgICA8b2JqZWN0IGNsYXNzTmFtZT17c3R5bGVzWydkZXNjcmlwdGlvbiddfSB0eXBlPVwiaW1hZ2Uvc3ZnK3htbFwiIGRhdGE9XCJzdmcvY3liZXJzZWN1cml0eS10aHJlYXRzLnN2Z1wiIC8+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIDxTbGlkZXIgbWluPXswfSBtYXg9ezJ9IG1hcmtzPXttYXJrc30gaW5jbHVkZWQ9e2ZhbHNlfSB2YWx1ZT17YWN0aXZlSW5kZXh9IG9uQ2hhbmdlPXtzZXRBY3RpdmVJbmRleH0vPlxuICAgICAge1xuICAgICAgICBhY3RpdmVJbmRleCA9PSAwID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2Rlc2NyaXB0aW9uJ119PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEFjY29yZGluZyB0byBhIElEQyBzdHVkeSwgbWFudWZhY3R1cmluZyBkYXRhIGlzIHJhcmVseSBob3VzZWQgaW4gYSBjb21tb24gZGF0YSBsYWtlIG9yIHN5c3RlbSwgYnV0IHR5cGljY2FseSBpbiBzaWxvZWQgc3lzdGVtcy5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBPcGVyYXRvcnMgYW5kIGVuZ2luZWVycyBtdXN0IG1hbnVhbGx5IHBpZWNlIHRvZ2V0aGVyIGluZm9ybWF0aW9uIGZyb20gdGhlc2Ugc2lsb2VkIHN5c3RlbXMgaW4gYSB0ZWRpb3VzIGFuZCB0aW1lLWNvbnN1bWluZyBwcm9jZXNzIC0gd2hpY2ggbmF0dXJhbGx5IGhhbXBlcnMgaW5ub3ZhdGlvbiBhbmQgZGlzY291cmFnZXMgY29sbGFib3JhdGlvbiBpbiBhIGNvbXBhbnkuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBhY3RpdmVJbmRleCA9PSAxID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2Rlc2NyaXB0aW9uJ119PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEEgTWNLaW5zZXkgc3R1ZHkgaGFzIHJldmVhbGVkIHRoYXQgQVNFQU4gY29tcGFuaWVzIHN1ZmZlciBmcm9tIGEgbGFjayBvZiBtYW5hZ2VycyB3aG8gdW5kZXJzdGFuZCBuZXcgdGVjaG5vbG9naWVzIGFuZCBpbm5vdmF0aW9uIHRvIHByb3Blcmx5IGltcGxlbWVudCBhIHRyYW5zZm9ybWF0aW9uYWwgc3RyYXRlZ3ksIGFuZCBhbiBpbnN1ZmZpY2llbnQgZ3Jhc3Agb2YgaG93IGFsbCB0aGVzZSBuZXcgc29sdXRpb25zIGNhbiBiZXN0IG9wdGltaXNlIHdvcmsgcHJvY2Vzc2VzLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2Rlc2NyaXB0aW9uJ119PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFJpc2tzIHRvIG1hbnVmYWN0dXJlcnMgaGF2ZSBleGlzdGVkIGFzIGxvbmcgYXMgcHJvZHVjdGlvbiBoYXMgYmVlbiBtZWNoYW5pc2VkLiBJbmR1c3RyeSA0LjAgaG93ZXZlciwgaGVyYWxkcyB0aGUgZ3JlYXRlc3QgbGVhcHMgaW4gY3liZXIgcmlzayB0byBkYXRlLCBhcyBoaWdobGlnaHRlZCBpbiBhIERlbG9pdHRlIHBhcGVyLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEFkdmFuY2VkIG1hbHdhcmUsIGFybWVkIHdpdGggemVyby1kYXkgZXhwbG9pdHMsIHRoYXQgYXV0b21vdXNseSB0YXJnZXRzIHZ1bG5lcmFibGUgZGV2aWNlcyBhbmQgc3ByZWFkcyB3aXRoIGxpdHRsZSBodW1hbiBpbnRlcnZlbnRpb24gaXMgbGlrZWx5IHRvIG92ZXJwb3dlciBhbiBhbHJlYWR5IGNoYWxsZW5nZWQgSVQvT1Qgc2VjdXJpdHkgc3RhZmYuIFRoaXMgZGlzdHVyYmluZyB0cmVuZCBoaWdobGlnaHRzIHRoZSBuZWVkIGZvciBJb1QgZGV2aWNlcyBtYW51ZmFjdHVyZXJzIHRvIHByb2R1Y3Qgc2VjdXJpdHktaGFyZGVuZWQgZGV2aWNlcy5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIDwvZGl2PlxuICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/IndustryChallenges.tsx\n");

/***/ })

})