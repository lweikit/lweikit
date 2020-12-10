webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/components/IndustryChallenges.tsx":
/*!*************************************************!*\
  !*** ./pages/components/IndustryChallenges.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return IndustryChallenges; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-slider */ \"./node_modules/rc-slider/es/index.js\");\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-transition-group */ \"./node_modules/react-transition-group/esm/index.js\");\n/* harmony import */ var _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/IndustryChallenges.module.scss */ \"./pages/components/styles/IndustryChallenges.module.scss\");\n/* harmony import */ var _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/weikit/Desktop/code/hitachi/pages/components/IndustryChallenges.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction IndustryChallenges() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      activeIndex = _useState[0],\n      setActiveIndex = _useState[1];\n\n  var marks = {\n    0: 'Data Living in Silos',\n    1: 'Lack of Skilled Managers',\n    2: 'Cybersecurity Threats'\n  };\n  var oneClass = \"\".concat(_styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['data'], \" \").concat(activeIndex == 0 && _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['selected']);\n  var twoClass = \"\".concat(_styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['data'], \" \").concat(activeIndex == 1 && _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['selected']);\n  var threeClass = \"\".concat(_styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['data'], \" \").concat(activeIndex == 2 && _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['selected']);\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__[\"TransitionGroup\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__[\"CSSTransition\"], {\n    key: activeIndex,\n    timeout: 500,\n    classNames: \"item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, activeIndex == 0 ? __jsx(\"object\", {\n    type: \"image/svg+xml\",\n    data: \"svg/data-living-in-silos.svg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 15\n    }\n  }) : activeIndex == 1 ? __jsx(\"object\", {\n    type: \"image/svg+xml\",\n    data: \"svg/lack-of-skilled-managers.svg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 15\n    }\n  }) : __jsx(\"object\", {\n    type: \"image/svg+xml\",\n    data: \"svg/cybersecurity-threats.svg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 15\n    }\n  }))), __jsx(rc_slider__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    min: 0,\n    max: 2,\n    marks: marks,\n    included: false,\n    value: activeIndex,\n    onChange: setActiveIndex,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }), activeIndex == 0 ? __jsx(\"div\", {\n    className: oneClass,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }\n  }, \"According to a IDC study, manufacturing data is rarely housed in a common data lake or system, but typiccaly in siloed systems.\"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }\n  }, \"Operators and engineers must manually piece together information from these siloed systems in a tedious and time-consuming process - which naturally hampers innovation and discourages collaboration in a company.\")) : activeIndex == 1 ? __jsx(\"div\", {\n    className: twoClass,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }\n  }, \"A McKinsey study has revealed that ASEAN companies suffer from a lack of managers who understand new technologies and innovation to properly implement a transformational strategy, and an insufficient grasp of how all these new solutions can best optimise work processes.\")) : __jsx(\"div\", {\n    className: threeClass,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 13\n    }\n  }, \"Risks to manufacturers have existed as long as production has been mechanised. Industry 4.0 however, heralds the greatest leaps in cyber risk to date, as highlighted in a Deloitte paper.\"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 13\n    }\n  }, \"Advanced malware, armed with zero-day exploits, that automously targets vulnerable devices and spreads with little human intervention is likely to overpower an already challenged IT/OT security staff. This disturbing trend highlights the need for IoT devices manufacturers to product security-hardened devices.\")));\n}\n\n_s(IndustryChallenges, \"rd+5N/MkYjuYD0I+B+MlySxQysU=\");\n\n_c = IndustryChallenges;\n\nvar _c;\n\n$RefreshReg$(_c, \"IndustryChallenges\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9JbmR1c3RyeUNoYWxsZW5nZXMudHN4P2E2NGYiXSwibmFtZXMiOlsiSW5kdXN0cnlDaGFsbGVuZ2VzIiwidXNlU3RhdGUiLCJhY3RpdmVJbmRleCIsInNldEFjdGl2ZUluZGV4IiwibWFya3MiLCJvbmVDbGFzcyIsInN0eWxlcyIsInR3b0NsYXNzIiwidGhyZWVDbGFzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVBO0FBRWUsU0FBU0Esa0JBQVQsR0FBOEI7QUFBQTs7QUFBQSxrQkFDTEMsc0RBQVEsQ0FBQyxDQUFELENBREg7QUFBQSxNQUNwQ0MsV0FEb0M7QUFBQSxNQUN2QkMsY0FEdUI7O0FBRTNDLE1BQU1DLEtBQUssR0FBRztBQUNaLE9BQUcsc0JBRFM7QUFFWixPQUFHLDBCQUZTO0FBR1osT0FBRztBQUhTLEdBQWQ7QUFLQSxNQUFNQyxRQUFRLGFBQU1DLDZFQUFNLENBQUMsTUFBRCxDQUFaLGNBQXdCSixXQUFXLElBQUksQ0FBZixJQUFvQkksNkVBQU0sQ0FBQyxVQUFELENBQWxELENBQWQ7QUFDQSxNQUFNQyxRQUFRLGFBQU1ELDZFQUFNLENBQUMsTUFBRCxDQUFaLGNBQXdCSixXQUFXLElBQUksQ0FBZixJQUFvQkksNkVBQU0sQ0FBQyxVQUFELENBQWxELENBQWQ7QUFDQSxNQUFNRSxVQUFVLGFBQU1GLDZFQUFNLENBQUMsTUFBRCxDQUFaLGNBQXdCSixXQUFXLElBQUksQ0FBZixJQUFvQkksNkVBQU0sQ0FBQyxVQUFELENBQWxELENBQWhCO0FBQ0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRUFBRDtBQUNFLE9BQUcsRUFBRUosV0FEUDtBQUVFLFdBQU8sRUFBRSxHQUZYO0FBR0UsY0FBVSxFQUFDLE1BSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1JQSxXQUFXLElBQUksQ0FBZixHQUNFO0FBQVEsUUFBSSxFQUFDLGVBQWI7QUFBNkIsUUFBSSxFQUFDLDhCQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsR0FFSUEsV0FBVyxJQUFJLENBQWYsR0FDRjtBQUFRLFFBQUksRUFBQyxlQUFiO0FBQTZCLFFBQUksRUFBQyxrQ0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURFLEdBR0Y7QUFBUSxRQUFJLEVBQUMsZUFBYjtBQUE2QixRQUFJLEVBQUMsK0JBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYTixDQURGLENBREYsRUFrQkUsTUFBQyxpREFBRDtBQUFRLE9BQUcsRUFBRSxDQUFiO0FBQWdCLE9BQUcsRUFBRSxDQUFyQjtBQUF3QixTQUFLLEVBQUVFLEtBQS9CO0FBQXNDLFlBQVEsRUFBRSxLQUFoRDtBQUF1RCxTQUFLLEVBQUVGLFdBQTlEO0FBQTJFLFlBQVEsRUFBRUMsY0FBckY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWxCRixFQW9CSUQsV0FBVyxJQUFJLENBQWYsR0FDRTtBQUFLLGFBQVMsRUFBRUcsUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUlBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJOQUpGLENBREYsR0FTSUgsV0FBVyxJQUFJLENBQWYsR0FDRjtBQUFLLGFBQVMsRUFBRUssUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc1JBREYsQ0FERSxHQU9GO0FBQUssYUFBUyxFQUFFQyxVQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrTUFERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOFRBSkYsQ0FwQ04sQ0FERjtBQWlERDs7R0EzRHVCUixrQjs7S0FBQUEsa0IiLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL0luZHVzdHJ5Q2hhbGxlbmdlcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tICdyZWFjdHN0cmFwJ1xuaW1wb3J0IFNsaWRlciBmcm9tICdyYy1zbGlkZXInXG5pbXBvcnQgeyBDU1NUcmFuc2l0aW9uLCBUcmFuc2l0aW9uR3JvdXAgfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL0luZHVzdHJ5Q2hhbGxlbmdlcy5tb2R1bGUuc2NzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kdXN0cnlDaGFsbGVuZ2VzKCkge1xuICBjb25zdCBbYWN0aXZlSW5kZXgsIHNldEFjdGl2ZUluZGV4XSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IG1hcmtzID0ge1xuICAgIDA6ICdEYXRhIExpdmluZyBpbiBTaWxvcycsXG4gICAgMTogJ0xhY2sgb2YgU2tpbGxlZCBNYW5hZ2VycycsXG4gICAgMjogJ0N5YmVyc2VjdXJpdHkgVGhyZWF0cydcbiAgfVxuICBjb25zdCBvbmVDbGFzcyA9IGAke3N0eWxlc1snZGF0YSddfSAke2FjdGl2ZUluZGV4ID09IDAgJiYgc3R5bGVzWydzZWxlY3RlZCddfWBcbiAgY29uc3QgdHdvQ2xhc3MgPSBgJHtzdHlsZXNbJ2RhdGEnXX0gJHthY3RpdmVJbmRleCA9PSAxICYmIHN0eWxlc1snc2VsZWN0ZWQnXX1gXG4gIGNvbnN0IHRocmVlQ2xhc3MgPSBgJHtzdHlsZXNbJ2RhdGEnXX0gJHthY3RpdmVJbmRleCA9PSAyICYmIHN0eWxlc1snc2VsZWN0ZWQnXX1gXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxUcmFuc2l0aW9uR3JvdXA+XG4gICAgICAgIDxDU1NUcmFuc2l0aW9uXG4gICAgICAgICAga2V5PXthY3RpdmVJbmRleH1cbiAgICAgICAgICB0aW1lb3V0PXs1MDB9XG4gICAgICAgICAgY2xhc3NOYW1lcz1cIml0ZW1cIlxuICAgICAgICA+XG4gICAgICAgICAge1xuICAgICAgICAgICAgYWN0aXZlSW5kZXggPT0gMCA/IChcbiAgICAgICAgICAgICAgPG9iamVjdCB0eXBlPVwiaW1hZ2Uvc3ZnK3htbFwiIGRhdGE9XCJzdmcvZGF0YS1saXZpbmctaW4tc2lsb3Muc3ZnXCIgLz5cbiAgICAgICAgICAgICkgOiBhY3RpdmVJbmRleCA9PSAxID8gKFxuICAgICAgICAgICAgICA8b2JqZWN0IHR5cGU9XCJpbWFnZS9zdmcreG1sXCIgZGF0YT1cInN2Zy9sYWNrLW9mLXNraWxsZWQtbWFuYWdlcnMuc3ZnXCIgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxvYmplY3QgdHlwZT1cImltYWdlL3N2Zyt4bWxcIiBkYXRhPVwic3ZnL2N5YmVyc2VjdXJpdHktdGhyZWF0cy5zdmdcIiAvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgPC9DU1NUcmFuc2l0aW9uPlxuICAgICAgPC9UcmFuc2l0aW9uR3JvdXA+XG4gICAgICA8U2xpZGVyIG1pbj17MH0gbWF4PXsyfSBtYXJrcz17bWFya3N9IGluY2x1ZGVkPXtmYWxzZX0gdmFsdWU9e2FjdGl2ZUluZGV4fSBvbkNoYW5nZT17c2V0QWN0aXZlSW5kZXh9Lz5cbiAgICAgIHtcbiAgICAgICAgYWN0aXZlSW5kZXggPT0gMCA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17b25lQ2xhc3N9PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEFjY29yZGluZyB0byBhIElEQyBzdHVkeSwgbWFudWZhY3R1cmluZyBkYXRhIGlzIHJhcmVseSBob3VzZWQgaW4gYSBjb21tb24gZGF0YSBsYWtlIG9yIHN5c3RlbSwgYnV0IHR5cGljY2FseSBpbiBzaWxvZWQgc3lzdGVtcy5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBPcGVyYXRvcnMgYW5kIGVuZ2luZWVycyBtdXN0IG1hbnVhbGx5IHBpZWNlIHRvZ2V0aGVyIGluZm9ybWF0aW9uIGZyb20gdGhlc2Ugc2lsb2VkIHN5c3RlbXMgaW4gYSB0ZWRpb3VzIGFuZCB0aW1lLWNvbnN1bWluZyBwcm9jZXNzIC0gd2hpY2ggbmF0dXJhbGx5IGhhbXBlcnMgaW5ub3ZhdGlvbiBhbmQgZGlzY291cmFnZXMgY29sbGFib3JhdGlvbiBpbiBhIGNvbXBhbnkuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBhY3RpdmVJbmRleCA9PSAxID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0d29DbGFzc30+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgQSBNY0tpbnNleSBzdHVkeSBoYXMgcmV2ZWFsZWQgdGhhdCBBU0VBTiBjb21wYW5pZXMgc3VmZmVyIGZyb20gYSBsYWNrIG9mIG1hbmFnZXJzIHdobyB1bmRlcnN0YW5kIG5ldyB0ZWNobm9sb2dpZXMgYW5kIGlubm92YXRpb24gdG8gcHJvcGVybHkgaW1wbGVtZW50IGEgdHJhbnNmb3JtYXRpb25hbCBzdHJhdGVneSwgYW5kIGFuIGluc3VmZmljaWVudCBncmFzcCBvZiBob3cgYWxsIHRoZXNlIG5ldyBzb2x1dGlvbnMgY2FuIGJlc3Qgb3B0aW1pc2Ugd29yayBwcm9jZXNzZXMuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RocmVlQ2xhc3N9PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFJpc2tzIHRvIG1hbnVmYWN0dXJlcnMgaGF2ZSBleGlzdGVkIGFzIGxvbmcgYXMgcHJvZHVjdGlvbiBoYXMgYmVlbiBtZWNoYW5pc2VkLiBJbmR1c3RyeSA0LjAgaG93ZXZlciwgaGVyYWxkcyB0aGUgZ3JlYXRlc3QgbGVhcHMgaW4gY3liZXIgcmlzayB0byBkYXRlLCBhcyBoaWdobGlnaHRlZCBpbiBhIERlbG9pdHRlIHBhcGVyLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEFkdmFuY2VkIG1hbHdhcmUsIGFybWVkIHdpdGggemVyby1kYXkgZXhwbG9pdHMsIHRoYXQgYXV0b21vdXNseSB0YXJnZXRzIHZ1bG5lcmFibGUgZGV2aWNlcyBhbmQgc3ByZWFkcyB3aXRoIGxpdHRsZSBodW1hbiBpbnRlcnZlbnRpb24gaXMgbGlrZWx5IHRvIG92ZXJwb3dlciBhbiBhbHJlYWR5IGNoYWxsZW5nZWQgSVQvT1Qgc2VjdXJpdHkgc3RhZmYuIFRoaXMgZGlzdHVyYmluZyB0cmVuZCBoaWdobGlnaHRzIHRoZSBuZWVkIGZvciBJb1QgZGV2aWNlcyBtYW51ZmFjdHVyZXJzIHRvIHByb2R1Y3Qgc2VjdXJpdHktaGFyZGVuZWQgZGV2aWNlcy5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIDwvZGl2PlxuICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/IndustryChallenges.tsx\n");

/***/ })

})