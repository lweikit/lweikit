webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/components/IndustryChallenges.tsx":
/*!*************************************************!*\
  !*** ./pages/components/IndustryChallenges.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return IndustryChallenges; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-slider */ \"./node_modules/rc-slider/es/index.js\");\n/* harmony import */ var _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/IndustryChallenges.module.scss */ \"./pages/components/styles/IndustryChallenges.module.scss\");\n/* harmony import */ var _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/weikit/Desktop/code/hitachi/pages/components/IndustryChallenges.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction IndustryChallenges() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      activeIndex = _useState[0],\n      setActiveIndex = _useState[1];\n\n  var labelStyle = {\n    fontSize: '1rem',\n    color: '#1CA7EC'\n  };\n  var marks = {\n    0: {\n      style: labelStyle,\n      label: 'Data Living in Silos'\n    },\n    1: 'Lack of Skilled Managers',\n    2: 'Cybersecurity Threats'\n  };\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, activeIndex == 0 && __jsx(\"object\", {\n    className: _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['svg'],\n    type: \"image/svg+xml\",\n    data: \"svg/data-living-in-silos.svg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 29\n    }\n  }), activeIndex == 1 && __jsx(\"object\", {\n    className: _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['svg'],\n    type: \"image/svg+xml\",\n    data: \"svg/lack-of-skilled-managers.svg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 29\n    }\n  }), activeIndex == 2 && __jsx(\"object\", {\n    className: _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['svg'],\n    type: \"image/svg+xml\",\n    data: \"svg/cybersecurity-threats.svg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 29\n    }\n  }), __jsx(rc_slider__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    min: 0,\n    max: 2,\n    marks: marks,\n    included: false,\n    value: activeIndex,\n    onChange: setActiveIndex,\n    railStyle: {\n      backgroundColor: '#1CA7EC'\n    },\n    dotStyle: {},\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }), activeIndex == 0 && __jsx(\"div\", {\n    className: _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['description'],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }\n  }, \"According to a IDC study, manufacturing data is rarely housed in a common data lake or system, but typiccaly in siloed systems.\"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }\n  }, \"Operators and engineers must manually piece together information from these siloed systems in a tedious and time-consuming process - which naturally hampers innovation and discourages collaboration in a company.\")), activeIndex == 1 && __jsx(\"div\", {\n    className: _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['description'],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 13\n    }\n  }, \"A McKinsey study has revealed that ASEAN companies suffer from a lack of managers who understand new technologies and innovation to properly implement a transformational strategy, and an insufficient grasp of how all these new solutions can best optimise work processes.\")), activeIndex == 2 && __jsx(\"div\", {\n    className: _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['description'],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 13\n    }\n  }, \"Risks to manufacturers have existed as long as production has been mechanised. Industry 4.0 however, heralds the greatest leaps in cyber risk to date, as highlighted in a Deloitte paper.\"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }\n  }, \"Advanced malware, armed with zero-day exploits, that automously targets vulnerable devices and spreads with little human intervention is likely to overpower an already challenged IT/OT security staff. This disturbing trend highlights the need for IoT devices manufacturers to product security-hardened devices.\")));\n}\n\n_s(IndustryChallenges, \"rd+5N/MkYjuYD0I+B+MlySxQysU=\");\n\n_c = IndustryChallenges;\n\nvar _c;\n\n$RefreshReg$(_c, \"IndustryChallenges\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9JbmR1c3RyeUNoYWxsZW5nZXMudHN4P2E2NGYiXSwibmFtZXMiOlsiSW5kdXN0cnlDaGFsbGVuZ2VzIiwidXNlU3RhdGUiLCJhY3RpdmVJbmRleCIsInNldEFjdGl2ZUluZGV4IiwibGFiZWxTdHlsZSIsImZvbnRTaXplIiwiY29sb3IiLCJtYXJrcyIsInN0eWxlIiwibGFiZWwiLCJzdHlsZXMiLCJiYWNrZ3JvdW5kQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVlLFNBQVNBLGtCQUFULEdBQThCO0FBQUE7O0FBQUEsa0JBQ0xDLHNEQUFRLENBQUMsQ0FBRCxDQURIO0FBQUEsTUFDcENDLFdBRG9DO0FBQUEsTUFDdkJDLGNBRHVCOztBQUUzQyxNQUFNQyxVQUFVLEdBQUc7QUFBRUMsWUFBUSxFQUFFLE1BQVo7QUFBb0JDLFNBQUssRUFBRTtBQUEzQixHQUFuQjtBQUNBLE1BQU1DLEtBQUssR0FBRztBQUNaLE9BQUc7QUFDREMsV0FBSyxFQUFFSixVQUROO0FBRURLLFdBQUssRUFBRTtBQUZOLEtBRFM7QUFLWixPQUFHLDBCQUxTO0FBTVosT0FBRztBQU5TLEdBQWQ7QUFRQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSVAsV0FBVyxJQUFJLENBQWYsSUFBb0I7QUFBUSxhQUFTLEVBQUVRLDZFQUFNLENBQUMsS0FBRCxDQUF6QjtBQUFrQyxRQUFJLEVBQUMsZUFBdkM7QUFBdUQsUUFBSSxFQUFDLDhCQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRnhCLEVBS0lSLFdBQVcsSUFBSSxDQUFmLElBQW9CO0FBQVEsYUFBUyxFQUFFUSw2RUFBTSxDQUFDLEtBQUQsQ0FBekI7QUFBa0MsUUFBSSxFQUFDLGVBQXZDO0FBQXVELFFBQUksRUFBQyxrQ0FBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUx4QixFQVFJUixXQUFXLElBQUksQ0FBZixJQUFvQjtBQUFRLGFBQVMsRUFBRVEsNkVBQU0sQ0FBQyxLQUFELENBQXpCO0FBQWtDLFFBQUksRUFBQyxlQUF2QztBQUF1RCxRQUFJLEVBQUMsK0JBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSeEIsRUFVRSxNQUFDLGlEQUFEO0FBQ0UsT0FBRyxFQUFFLENBRFA7QUFFRSxPQUFHLEVBQUUsQ0FGUDtBQUdFLFNBQUssRUFBRUgsS0FIVDtBQUlFLFlBQVEsRUFBRSxLQUpaO0FBS0UsU0FBSyxFQUFFTCxXQUxUO0FBTUUsWUFBUSxFQUFFQyxjQU5aO0FBT0UsYUFBUyxFQUFFO0FBQUNRLHFCQUFlLEVBQUU7QUFBbEIsS0FQYjtBQVFFLFlBQVEsRUFBRSxFQVJaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixFQXFCSVQsV0FBVyxJQUFJLENBQWYsSUFDRTtBQUFLLGFBQVMsRUFBRVEsNkVBQU0sQ0FBQyxhQUFELENBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVJQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyTkFKRixDQXRCTixFQWlDSVIsV0FBVyxJQUFJLENBQWYsSUFDRTtBQUFLLGFBQVMsRUFBRVEsNkVBQU0sQ0FBQyxhQUFELENBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNSQURGLENBbENOLEVBMENJUixXQUFXLElBQUksQ0FBZixJQUNFO0FBQUssYUFBUyxFQUFFUSw2RUFBTSxDQUFDLGFBQUQsQ0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa01BREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhUQUpGLENBM0NOLENBREY7QUF3REQ7O0dBbkV1QlYsa0I7O0tBQUFBLGtCIiwiZmlsZSI6Ii4vcGFnZXMvY29tcG9uZW50cy9JbmR1c3RyeUNoYWxsZW5nZXMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBTbGlkZXIgZnJvbSAncmMtc2xpZGVyJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL0luZHVzdHJ5Q2hhbGxlbmdlcy5tb2R1bGUuc2NzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kdXN0cnlDaGFsbGVuZ2VzKCkge1xuICBjb25zdCBbYWN0aXZlSW5kZXgsIHNldEFjdGl2ZUluZGV4XSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IGxhYmVsU3R5bGUgPSB7IGZvbnRTaXplOiAnMXJlbScsIGNvbG9yOiAnIzFDQTdFQycgfVxuICBjb25zdCBtYXJrcyA9IHtcbiAgICAwOiB7XG4gICAgICBzdHlsZTogbGFiZWxTdHlsZSxcbiAgICAgIGxhYmVsOiAnRGF0YSBMaXZpbmcgaW4gU2lsb3MnLFxuICAgIH0sXG4gICAgMTogJ0xhY2sgb2YgU2tpbGxlZCBNYW5hZ2VycycsXG4gICAgMjogJ0N5YmVyc2VjdXJpdHkgVGhyZWF0cydcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7XG4gICAgICAgIGFjdGl2ZUluZGV4ID09IDAgJiYgPG9iamVjdCBjbGFzc05hbWU9e3N0eWxlc1snc3ZnJ119IHR5cGU9XCJpbWFnZS9zdmcreG1sXCIgZGF0YT1cInN2Zy9kYXRhLWxpdmluZy1pbi1zaWxvcy5zdmdcIi8+XG4gICAgICB9IFxuICAgICAgeyAgXG4gICAgICAgIGFjdGl2ZUluZGV4ID09IDEgJiYgPG9iamVjdCBjbGFzc05hbWU9e3N0eWxlc1snc3ZnJ119IHR5cGU9XCJpbWFnZS9zdmcreG1sXCIgZGF0YT1cInN2Zy9sYWNrLW9mLXNraWxsZWQtbWFuYWdlcnMuc3ZnXCIvPlxuICAgICAgfSBcbiAgICAgIHsgXG4gICAgICAgIGFjdGl2ZUluZGV4ID09IDIgJiYgPG9iamVjdCBjbGFzc05hbWU9e3N0eWxlc1snc3ZnJ119IHR5cGU9XCJpbWFnZS9zdmcreG1sXCIgZGF0YT1cInN2Zy9jeWJlcnNlY3VyaXR5LXRocmVhdHMuc3ZnXCIvPlxuICAgICAgfVxuICAgICAgPFNsaWRlciBcbiAgICAgICAgbWluPXswfSBcbiAgICAgICAgbWF4PXsyfSBcbiAgICAgICAgbWFya3M9e21hcmtzfSBcbiAgICAgICAgaW5jbHVkZWQ9e2ZhbHNlfSBcbiAgICAgICAgdmFsdWU9e2FjdGl2ZUluZGV4fSBcbiAgICAgICAgb25DaGFuZ2U9e3NldEFjdGl2ZUluZGV4fVxuICAgICAgICByYWlsU3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjMUNBN0VDJ319XG4gICAgICAgIGRvdFN0eWxlPXt7fX1cbiAgICAgIC8+XG4gICAgICB7XG4gICAgICAgIGFjdGl2ZUluZGV4ID09IDAgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2Rlc2NyaXB0aW9uJ119PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEFjY29yZGluZyB0byBhIElEQyBzdHVkeSwgbWFudWZhY3R1cmluZyBkYXRhIGlzIHJhcmVseSBob3VzZWQgaW4gYSBjb21tb24gZGF0YSBsYWtlIG9yIHN5c3RlbSwgYnV0IHR5cGljY2FseSBpbiBzaWxvZWQgc3lzdGVtcy5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBPcGVyYXRvcnMgYW5kIGVuZ2luZWVycyBtdXN0IG1hbnVhbGx5IHBpZWNlIHRvZ2V0aGVyIGluZm9ybWF0aW9uIGZyb20gdGhlc2Ugc2lsb2VkIHN5c3RlbXMgaW4gYSB0ZWRpb3VzIGFuZCB0aW1lLWNvbnN1bWluZyBwcm9jZXNzIC0gd2hpY2ggbmF0dXJhbGx5IGhhbXBlcnMgaW5ub3ZhdGlvbiBhbmQgZGlzY291cmFnZXMgY29sbGFib3JhdGlvbiBpbiBhIGNvbXBhbnkuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIGFjdGl2ZUluZGV4ID09IDEgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2Rlc2NyaXB0aW9uJ119PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEEgTWNLaW5zZXkgc3R1ZHkgaGFzIHJldmVhbGVkIHRoYXQgQVNFQU4gY29tcGFuaWVzIHN1ZmZlciBmcm9tIGEgbGFjayBvZiBtYW5hZ2VycyB3aG8gdW5kZXJzdGFuZCBuZXcgdGVjaG5vbG9naWVzIGFuZCBpbm5vdmF0aW9uIHRvIHByb3Blcmx5IGltcGxlbWVudCBhIHRyYW5zZm9ybWF0aW9uYWwgc3RyYXRlZ3ksIGFuZCBhbiBpbnN1ZmZpY2llbnQgZ3Jhc3Agb2YgaG93IGFsbCB0aGVzZSBuZXcgc29sdXRpb25zIGNhbiBiZXN0IG9wdGltaXNlIHdvcmsgcHJvY2Vzc2VzLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9XG4gICAgICB7IFxuICAgICAgICBhY3RpdmVJbmRleCA9PSAyICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydkZXNjcmlwdGlvbiddfT5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBSaXNrcyB0byBtYW51ZmFjdHVyZXJzIGhhdmUgZXhpc3RlZCBhcyBsb25nIGFzIHByb2R1Y3Rpb24gaGFzIGJlZW4gbWVjaGFuaXNlZC4gSW5kdXN0cnkgNC4wIGhvd2V2ZXIsIGhlcmFsZHMgdGhlIGdyZWF0ZXN0IGxlYXBzIGluIGN5YmVyIHJpc2sgdG8gZGF0ZSwgYXMgaGlnaGxpZ2h0ZWQgaW4gYSBEZWxvaXR0ZSBwYXBlci5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBBZHZhbmNlZCBtYWx3YXJlLCBhcm1lZCB3aXRoIHplcm8tZGF5IGV4cGxvaXRzLCB0aGF0IGF1dG9tb3VzbHkgdGFyZ2V0cyB2dWxuZXJhYmxlIGRldmljZXMgYW5kIHNwcmVhZHMgd2l0aCBsaXR0bGUgaHVtYW4gaW50ZXJ2ZW50aW9uIGlzIGxpa2VseSB0byBvdmVycG93ZXIgYW4gYWxyZWFkeSBjaGFsbGVuZ2VkIElUL09UIHNlY3VyaXR5IHN0YWZmLiBUaGlzIGRpc3R1cmJpbmcgdHJlbmQgaGlnaGxpZ2h0cyB0aGUgbmVlZCBmb3IgSW9UIGRldmljZXMgbWFudWZhY3R1cmVycyB0byBwcm9kdWN0IHNlY3VyaXR5LWhhcmRlbmVkIGRldmljZXMuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/IndustryChallenges.tsx\n");

/***/ })

})