webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/components/IndustryChallenges.tsx":
/*!*************************************************!*\
  !*** ./pages/components/IndustryChallenges.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return IndustryChallenges; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-slider */ \"./node_modules/rc-slider/es/index.js\");\n/* harmony import */ var _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/IndustryChallenges.module.scss */ \"./pages/components/styles/IndustryChallenges.module.scss\");\n/* harmony import */ var _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/weikit/Desktop/code/hitachi/pages/components/IndustryChallenges.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction IndustryChallenges() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      activeIndex = _useState[0],\n      setActiveIndex = _useState[1];\n\n  var marks = {\n    0: 'Data Living in Silos',\n    1: 'Lack of Skilled Managers',\n    2: 'Cybersecurity Threats'\n  };\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }\n  }, activeIndex == 0 && __jsx(\"object\", {\n    className: _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['description'],\n    type: \"image/svg+xml\",\n    data: \"svg/data-living-in-silos.svg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 29\n    }\n  }), activeIndex == 1 && __jsx(\"object\", {\n    className: _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['description'],\n    type: \"image/svg+xml\",\n    data: \"svg/lack-of-skilled-managers.svg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 29\n    }\n  }), activeIndex == 2 && __jsx(\"object\", {\n    className: _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['description'],\n    type: \"image/svg+xml\",\n    data: \"svg/cybersecurity-threats.svg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 29\n    }\n  }), __jsx(rc_slider__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    min: 0,\n    max: 2,\n    marks: marks,\n    included: false,\n    value: activeIndex,\n    onChange: setActiveIndex,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }), activeIndex == 0 && __jsx(\"div\", {\n    className: _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['description'],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }\n  }, \"According to a IDC study, manufacturing data is rarely housed in a common data lake or system, but typiccaly in siloed systems.\"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }\n  }, \"Operators and engineers must manually piece together information from these siloed systems in a tedious and time-consuming process - which naturally hampers innovation and discourages collaboration in a company.\")), activeIndex == 1 && __jsx(\"div\", {\n    className: _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['description'],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }\n  }, \"A McKinsey study has revealed that ASEAN companies suffer from a lack of managers who understand new technologies and innovation to properly implement a transformational strategy, and an insufficient grasp of how all these new solutions can best optimise work processes.\")), activeIndex == 2 && __jsx(\"div\", {\n    className: _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['description'],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }\n  }, \"Risks to manufacturers have existed as long as production has been mechanised. Industry 4.0 however, heralds the greatest leaps in cyber risk to date, as highlighted in a Deloitte paper.\"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 13\n    }\n  }, \"Advanced malware, armed with zero-day exploits, that automously targets vulnerable devices and spreads with little human intervention is likely to overpower an already challenged IT/OT security staff. This disturbing trend highlights the need for IoT devices manufacturers to product security-hardened devices.\")));\n}\n\n_s(IndustryChallenges, \"rd+5N/MkYjuYD0I+B+MlySxQysU=\");\n\n_c = IndustryChallenges;\n\nvar _c;\n\n$RefreshReg$(_c, \"IndustryChallenges\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9JbmR1c3RyeUNoYWxsZW5nZXMudHN4P2E2NGYiXSwibmFtZXMiOlsiSW5kdXN0cnlDaGFsbGVuZ2VzIiwidXNlU3RhdGUiLCJhY3RpdmVJbmRleCIsInNldEFjdGl2ZUluZGV4IiwibWFya3MiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFHQTtBQUVlLFNBQVNBLGtCQUFULEdBQThCO0FBQUE7O0FBQUEsa0JBQ0xDLHNEQUFRLENBQUMsQ0FBRCxDQURIO0FBQUEsTUFDcENDLFdBRG9DO0FBQUEsTUFDdkJDLGNBRHVCOztBQUUzQyxNQUFNQyxLQUFLLEdBQUc7QUFDWixPQUFHLHNCQURTO0FBRVosT0FBRywwQkFGUztBQUdaLE9BQUc7QUFIUyxHQUFkO0FBS0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUlGLFdBQVcsSUFBSSxDQUFmLElBQW9CO0FBQVEsYUFBUyxFQUFFRyw2RUFBTSxDQUFDLGFBQUQsQ0FBekI7QUFBMEMsUUFBSSxFQUFDLGVBQS9DO0FBQStELFFBQUksRUFBQyw4QkFBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZ4QixFQUtJSCxXQUFXLElBQUksQ0FBZixJQUFvQjtBQUFRLGFBQVMsRUFBRUcsNkVBQU0sQ0FBQyxhQUFELENBQXpCO0FBQTBDLFFBQUksRUFBQyxlQUEvQztBQUErRCxRQUFJLEVBQUMsa0NBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMeEIsRUFRSUgsV0FBVyxJQUFJLENBQWYsSUFBb0I7QUFBUSxhQUFTLEVBQUVHLDZFQUFNLENBQUMsYUFBRCxDQUF6QjtBQUEwQyxRQUFJLEVBQUMsZUFBL0M7QUFBK0QsUUFBSSxFQUFDLCtCQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUnhCLEVBVUUsTUFBQyxpREFBRDtBQUFRLE9BQUcsRUFBRSxDQUFiO0FBQWdCLE9BQUcsRUFBRSxDQUFyQjtBQUF3QixTQUFLLEVBQUVELEtBQS9CO0FBQXNDLFlBQVEsRUFBRSxLQUFoRDtBQUF1RCxTQUFLLEVBQUVGLFdBQTlEO0FBQTJFLFlBQVEsRUFBRUMsY0FBckY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLEVBWUlELFdBQVcsSUFBSSxDQUFmLElBQ0U7QUFBSyxhQUFTLEVBQUVHLDZFQUFNLENBQUMsYUFBRCxDQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1SUFERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMk5BSkYsQ0FiTixFQXdCSUgsV0FBVyxJQUFJLENBQWYsSUFDRTtBQUFLLGFBQVMsRUFBRUcsNkVBQU0sQ0FBQyxhQUFELENBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNSQURGLENBekJOLEVBaUNJSCxXQUFXLElBQUksQ0FBZixJQUNFO0FBQUssYUFBUyxFQUFFRyw2RUFBTSxDQUFDLGFBQUQsQ0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa01BREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhUQUpGLENBbENOLENBREY7QUErQ0Q7O0dBdER1Qkwsa0I7O0tBQUFBLGtCIiwiZmlsZSI6Ii4vcGFnZXMvY29tcG9uZW50cy9JbmR1c3RyeUNoYWxsZW5nZXMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSAncmVhY3RzdHJhcCdcbmltcG9ydCBTbGlkZXIgZnJvbSAncmMtc2xpZGVyJ1xuaW1wb3J0IHsgQ1NTVHJhbnNpdGlvbiwgVHJhbnNpdGlvbkdyb3VwIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9JbmR1c3RyeUNoYWxsZW5nZXMubW9kdWxlLnNjc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZHVzdHJ5Q2hhbGxlbmdlcygpIHtcbiAgY29uc3QgW2FjdGl2ZUluZGV4LCBzZXRBY3RpdmVJbmRleF0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBtYXJrcyA9IHtcbiAgICAwOiAnRGF0YSBMaXZpbmcgaW4gU2lsb3MnLFxuICAgIDE6ICdMYWNrIG9mIFNraWxsZWQgTWFuYWdlcnMnLFxuICAgIDI6ICdDeWJlcnNlY3VyaXR5IFRocmVhdHMnXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge1xuICAgICAgICBhY3RpdmVJbmRleCA9PSAwICYmIDxvYmplY3QgY2xhc3NOYW1lPXtzdHlsZXNbJ2Rlc2NyaXB0aW9uJ119IHR5cGU9XCJpbWFnZS9zdmcreG1sXCIgZGF0YT1cInN2Zy9kYXRhLWxpdmluZy1pbi1zaWxvcy5zdmdcIiAvPlxuICAgICAgfSBcbiAgICAgIHsgIFxuICAgICAgICBhY3RpdmVJbmRleCA9PSAxICYmIDxvYmplY3QgY2xhc3NOYW1lPXtzdHlsZXNbJ2Rlc2NyaXB0aW9uJ119IHR5cGU9XCJpbWFnZS9zdmcreG1sXCIgZGF0YT1cInN2Zy9sYWNrLW9mLXNraWxsZWQtbWFuYWdlcnMuc3ZnXCIgLz5cbiAgICAgIH0gXG4gICAgICB7IFxuICAgICAgICBhY3RpdmVJbmRleCA9PSAyICYmIDxvYmplY3QgY2xhc3NOYW1lPXtzdHlsZXNbJ2Rlc2NyaXB0aW9uJ119IHR5cGU9XCJpbWFnZS9zdmcreG1sXCIgZGF0YT1cInN2Zy9jeWJlcnNlY3VyaXR5LXRocmVhdHMuc3ZnXCIgLz5cbiAgICAgIH1cbiAgICAgIDxTbGlkZXIgbWluPXswfSBtYXg9ezJ9IG1hcmtzPXttYXJrc30gaW5jbHVkZWQ9e2ZhbHNlfSB2YWx1ZT17YWN0aXZlSW5kZXh9IG9uQ2hhbmdlPXtzZXRBY3RpdmVJbmRleH0vPlxuICAgICAge1xuICAgICAgICBhY3RpdmVJbmRleCA9PSAwICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydkZXNjcmlwdGlvbiddfT5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBBY2NvcmRpbmcgdG8gYSBJREMgc3R1ZHksIG1hbnVmYWN0dXJpbmcgZGF0YSBpcyByYXJlbHkgaG91c2VkIGluIGEgY29tbW9uIGRhdGEgbGFrZSBvciBzeXN0ZW0sIGJ1dCB0eXBpY2NhbHkgaW4gc2lsb2VkIHN5c3RlbXMuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgT3BlcmF0b3JzIGFuZCBlbmdpbmVlcnMgbXVzdCBtYW51YWxseSBwaWVjZSB0b2dldGhlciBpbmZvcm1hdGlvbiBmcm9tIHRoZXNlIHNpbG9lZCBzeXN0ZW1zIGluIGEgdGVkaW91cyBhbmQgdGltZS1jb25zdW1pbmcgcHJvY2VzcyAtIHdoaWNoIG5hdHVyYWxseSBoYW1wZXJzIGlubm92YXRpb24gYW5kIGRpc2NvdXJhZ2VzIGNvbGxhYm9yYXRpb24gaW4gYSBjb21wYW55LlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIFxuICAgICAgfVxuICAgICAge1xuICAgICAgICBhY3RpdmVJbmRleCA9PSAxICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydkZXNjcmlwdGlvbiddfT5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBBIE1jS2luc2V5IHN0dWR5IGhhcyByZXZlYWxlZCB0aGF0IEFTRUFOIGNvbXBhbmllcyBzdWZmZXIgZnJvbSBhIGxhY2sgb2YgbWFuYWdlcnMgd2hvIHVuZGVyc3RhbmQgbmV3IHRlY2hub2xvZ2llcyBhbmQgaW5ub3ZhdGlvbiB0byBwcm9wZXJseSBpbXBsZW1lbnQgYSB0cmFuc2Zvcm1hdGlvbmFsIHN0cmF0ZWd5LCBhbmQgYW4gaW5zdWZmaWNpZW50IGdyYXNwIG9mIGhvdyBhbGwgdGhlc2UgbmV3IHNvbHV0aW9ucyBjYW4gYmVzdCBvcHRpbWlzZSB3b3JrIHByb2Nlc3Nlcy5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgeyBcbiAgICAgICAgYWN0aXZlSW5kZXggPT0gMiAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snZGVzY3JpcHRpb24nXX0+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgUmlza3MgdG8gbWFudWZhY3R1cmVycyBoYXZlIGV4aXN0ZWQgYXMgbG9uZyBhcyBwcm9kdWN0aW9uIGhhcyBiZWVuIG1lY2hhbmlzZWQuIEluZHVzdHJ5IDQuMCBob3dldmVyLCBoZXJhbGRzIHRoZSBncmVhdGVzdCBsZWFwcyBpbiBjeWJlciByaXNrIHRvIGRhdGUsIGFzIGhpZ2hsaWdodGVkIGluIGEgRGVsb2l0dGUgcGFwZXIuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgQWR2YW5jZWQgbWFsd2FyZSwgYXJtZWQgd2l0aCB6ZXJvLWRheSBleHBsb2l0cywgdGhhdCBhdXRvbW91c2x5IHRhcmdldHMgdnVsbmVyYWJsZSBkZXZpY2VzIGFuZCBzcHJlYWRzIHdpdGggbGl0dGxlIGh1bWFuIGludGVydmVudGlvbiBpcyBsaWtlbHkgdG8gb3ZlcnBvd2VyIGFuIGFscmVhZHkgY2hhbGxlbmdlZCBJVC9PVCBzZWN1cml0eSBzdGFmZi4gVGhpcyBkaXN0dXJiaW5nIHRyZW5kIGhpZ2hsaWdodHMgdGhlIG5lZWQgZm9yIElvVCBkZXZpY2VzIG1hbnVmYWN0dXJlcnMgdG8gcHJvZHVjdCBzZWN1cml0eS1oYXJkZW5lZCBkZXZpY2VzLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9XG4gICAgPC9kaXY+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/IndustryChallenges.tsx\n");

/***/ })

})