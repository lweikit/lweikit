webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/sections/one.tsx":
/*!********************************!*\
  !*** ./pages/sections/one.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SectionOne; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal/Fade */ \"./node_modules/react-reveal/Fade.js\");\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/weikit/Desktop/code/hitachi/pages/sections/one.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction SectionOne() {\n  _s();\n\n  var _this = this;\n\n  var manufacturingSizeByCountry = [{\n    country: 'BRUNEI DARUSSALAM',\n    percentage: '62.9%'\n  }, {\n    country: 'INDONESIA',\n    percentage: '39.8%'\n  }, {\n    country: 'MALAYSIA',\n    percentage: '37.5%'\n  }, {\n    country: 'LAO PDR',\n    percentage: '35.7%'\n  }, {\n    country: 'VIETNAM',\n    percentage: '35.6%'\n  }, {\n    country: 'THAILAND',\n    percentage: '35.4%'\n  }, {\n    country: 'PHILIPPINES',\n    percentage: '34.1%'\n  }, {\n    country: 'MYANMAR',\n    percentage: '32.1%'\n  }, {\n    country: 'CAMBODIA',\n    percentage: '32.1%'\n  }, {\n    country: 'SINGAPORE',\n    percentage: '25.1%'\n  }];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      activeIndex = _useState[0],\n      setActiveIndex = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      animating = _useState2[0],\n      setAnimating = _useState2[1];\n\n  var next = function next() {\n    if (animating) return;\n    var nextIndex = activeIndex === manufacturingSizeByCountry.length - 1 ? 0 : activeIndex + 1;\n    setActiveIndex(nextIndex);\n  };\n\n  var previous = function previous() {\n    if (animating) return;\n    var nextIndex = activeIndex === 0 ? manufacturingSizeByCountry.length - 1 : activeIndex - 1;\n    setActiveIndex(nextIndex);\n  };\n\n  var goToIndex = function goToIndex(newIndex) {\n    if (animating) return;\n    setActiveIndex(newIndex);\n  };\n\n  var slides = manufacturingSizeByCountry.map(function (dataPoint, index) {\n    var leftIndex = index === 0 ? manufacturingSizeByCountry.length - 1 : index - 1;\n    var rightIndex = index == manufacturingSizeByCountry.length - 1 ? 0 : index + 1;\n    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"CarouselItem\"], {\n      onExiting: function onExiting() {\n        return setAnimating(true);\n      },\n      onExited: function onExited() {\n        return setAnimating(false);\n      },\n      key: dataPoint.country,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 7\n      }\n    }, __jsx(\"div\", {\n      className: \"data-point\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 9\n      }\n    }, __jsx(\"div\", {\n      className: \"side-data-point\",\n      onClick: function onClick() {\n        return goToIndex(leftIndex);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 11\n      }\n    }, __jsx(\"h4\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 13\n      }\n    }, manufacturingSizeByCountry[leftIndex].country), __jsx(\"h1\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 13\n      }\n    }, manufacturingSizeByCountry[leftIndex].percentage)), __jsx(\"div\", {\n      className: \"main-data-point\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 11\n      }\n    }, __jsx(\"h4\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 13\n      }\n    }, dataPoint.country), __jsx(\"h1\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 13\n      }\n    }, dataPoint.percentage)), __jsx(\"div\", {\n      className: \"side-data-point\",\n      onClick: function onClick() {\n        return goToIndex(rightIndex);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 11\n      }\n    }, __jsx(\"h4\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 13\n      }\n    }, manufacturingSizeByCountry[rightIndex].country), __jsx(\"h1\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 13\n      }\n    }, manufacturingSizeByCountry[rightIndex].percentage))));\n  });\n  return __jsx(\"div\", {\n    id: \"section-one\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"section-one-part-one\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 7\n    }\n  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    bottom: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 9\n    }\n  }, __jsx(\"h4\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 11\n    }\n  }, \"ACCELERATED CHANGE IN ASEAN'S\"), __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 11\n    }\n  }, \"MANUFACTURING\"), __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 11\n    }\n  }, \"SECTOR\"))), __jsx(\"div\", {\n    className: \"section-one-part-two\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 7\n    }\n  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    bottom: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 9\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 11\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    sm: {\n      size: 6,\n      offset: 3\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 13\n    }\n  }, __jsx(\"h4\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 15\n    }\n  }, \"IN 2019, ASEAN COUNTRIES WERE JUST STARTING TO EMBRACE\"), __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 15\n    }\n  }, \"INDUSTRY 4.0\"), __jsx(\"svg\", {\n    viewBox: \"0 0 100 35\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 15\n    }\n  }, __jsx(\"defs\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 15\n    }\n  }, __jsx(\"linearGradient\", {\n    id: \"linear-gradient\",\n    gradientUnits: \"userSpaceOnUse\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 15\n    }\n  }, __jsx(\"stop\", {\n    offset: \"0\",\n    \"stop-color\": \"#1ba7ec\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 17\n    }\n  }), __jsx(\"stop\", {\n    offset: \"0.18\",\n    \"stop-color\": \"#24a3ed\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 17\n    }\n  }), __jsx(\"stop\", {\n    offset: \"0.47\",\n    \"stop-color\": \"#3e98f0\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 17\n    }\n  }), __jsx(\"stop\", {\n    offset: \"0.85\",\n    \"stop-color\": \"#6786f4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 17\n    }\n  }), __jsx(\"stop\", {\n    offset: \"0.99\",\n    \"stop-color\": \"#797ef6\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 17\n    }\n  }))), __jsx(\"g\", {\n    className: \"cls-1-circle\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 15\n    }\n  }, __jsx(\"g\", {\n    id: \"Layer_2\",\n    \"data-name\": \"Layer 2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 17\n    }\n  }, __jsx(\"g\", {\n    id: \"Layer_1-2\",\n    \"data-name\": \"Layer 1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 19\n    }\n  }, __jsx(\"circle\", {\n    transform: \"rotate(90 0 0)\",\n    className: \"cls-3-circle\",\n    cx: \"21%\",\n    cy: \"-40%\",\n    r: \"15%\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 21\n    }\n  })))), __jsx(\"g\", {\n    className: \"cls-1-line\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 15\n    }\n  }, __jsx(\"g\", {\n    id: \"Layer_2\",\n    \"data-name\": \"Layer 2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 17\n    }\n  }, __jsx(\"g\", {\n    id: \"Layer_1-2\",\n    \"data-name\": \"Layer 1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 19\n    }\n  }, __jsx(\"line\", {\n    className: \"cls-3-line\",\n    x1: \"15%\",\n    y1: \"92%\",\n    x2: \"100%\",\n    y2: \"92%\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 21\n    }\n  })))), __jsx(\"text\", {\n    x: \"9%\",\n    y: \"60%\",\n    className: \"text-one\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 15\n    }\n  }, \"21%\"), __jsx(\"text\", {\n    x: \"8%\",\n    y: \"70%\",\n    className: \"text-two\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 15\n    }\n  }, \"TO THE REGION'S\"), __jsx(\"text\", {\n    x: \"10%\",\n    y: \"77%\",\n    className: \"text-two\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 15\n    }\n  }, \"GDP IN 2018\"), __jsx(\"text\", {\n    x: \"30%\",\n    y: \"50%\",\n    className: \"text-three\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 15\n    }\n  }, \"Home to the sixth largest global economy in 2019 at around US$3 trillion, \"), __jsx(\"text\", {\n    x: \"30%\",\n    y: \"57%\",\n    className: \"text-three\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 15\n    }\n  }, \"ASEAN is projected to grow at an average of 4.9 percent per annum for the next. \"), __jsx(\"text\", {\n    x: \"30%\",\n    y: \"64%\",\n    className: \"text-three\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 15\n    }\n  }, \"decade. As a core growth driver, manufacturing contributes about US$670 \"), __jsx(\"text\", {\n    x: \"30%\",\n    y: \"71%\",\n    className: \"text-three\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 15\n    }\n  }, \" billions or 21 percent to the regions GDP in 2018.\")))))), __jsx(\"div\", {\n    className: \"section-one-part-three\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 7\n    }\n  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    bottom: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 9\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 152,\n      columnNumber: 11\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    sm: {\n      size: 6,\n      offset: 3\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 153,\n      columnNumber: 13\n    }\n  }, __jsx(\"h4\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 154,\n      columnNumber: 15\n    }\n  }, \"THE SIZE OF\"), __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 155,\n      columnNumber: 15\n    }\n  }, \"MANUFACTURING\"), __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 156,\n      columnNumber: 15\n    }\n  }, \"SECTOR\"), __jsx(\"h4\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 157,\n      columnNumber: 15\n    }\n  }, \"COMPARED TO TOTAL GDP OF THE COUNTRY IN 2018\"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Carousel\"], {\n    activeIndex: activeIndex,\n    next: next,\n    previous: previous,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 159,\n      columnNumber: 15\n    }\n  }, slides, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"CarouselControl\"], {\n    direction: \"prev\",\n    directionText: \"Previous\",\n    onClickHandler: previous,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 165,\n      columnNumber: 17\n    }\n  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"CarouselControl\"], {\n    direction: \"next\",\n    directionText: \"Next\",\n    onClickHandler: next,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 166,\n      columnNumber: 17\n    }\n  })), __jsx(\"img\", {\n    src: \"/img/s1-p3-4.png\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 169,\n      columnNumber: 15\n    }\n  }), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 170,\n      columnNumber: 15\n    }\n  }, \"SOUTHEAST ASIA\"), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 174,\n      columnNumber: 15\n    }\n  }), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 176,\n      columnNumber: 15\n    }\n  }, \"In spite of its size, ASEAN's manufacturing sector only ranks fourth in the world, behind China, Unisted States and Germany. In terms of average productivity, all ASEAN member states, with the exception of Singapore, score significantly lower than United States and Germany.\"))))));\n}\n\n_s(SectionOne, \"FYd3Lqf74+dQScd+D3/2SfzV0cE=\");\n\n_c = SectionOne;\n\nvar _c;\n\n$RefreshReg$(_c, \"SectionOne\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VjdGlvbnMvb25lLnRzeD9jZDRjIl0sIm5hbWVzIjpbIlNlY3Rpb25PbmUiLCJtYW51ZmFjdHVyaW5nU2l6ZUJ5Q291bnRyeSIsImNvdW50cnkiLCJwZXJjZW50YWdlIiwidXNlU3RhdGUiLCJhY3RpdmVJbmRleCIsInNldEFjdGl2ZUluZGV4IiwiYW5pbWF0aW5nIiwic2V0QW5pbWF0aW5nIiwibmV4dCIsIm5leHRJbmRleCIsImxlbmd0aCIsInByZXZpb3VzIiwiZ29Ub0luZGV4IiwibmV3SW5kZXgiLCJzbGlkZXMiLCJtYXAiLCJkYXRhUG9pbnQiLCJpbmRleCIsImxlZnRJbmRleCIsInJpZ2h0SW5kZXgiLCJzaXplIiwib2Zmc2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxVQUFULEdBQXNCO0FBQUE7O0FBQUE7O0FBQ25DLE1BQU1DLDBCQUEwQixHQUFHLENBQ2pDO0FBQ0VDLFdBQU8sRUFBRSxtQkFEWDtBQUVFQyxjQUFVLEVBQUU7QUFGZCxHQURpQyxFQUtqQztBQUNFRCxXQUFPLEVBQUUsV0FEWDtBQUVFQyxjQUFVLEVBQUU7QUFGZCxHQUxpQyxFQVNqQztBQUNFRCxXQUFPLEVBQUUsVUFEWDtBQUVFQyxjQUFVLEVBQUU7QUFGZCxHQVRpQyxFQWFqQztBQUNFRCxXQUFPLEVBQUUsU0FEWDtBQUVFQyxjQUFVLEVBQUU7QUFGZCxHQWJpQyxFQWlCakM7QUFDRUQsV0FBTyxFQUFFLFNBRFg7QUFFRUMsY0FBVSxFQUFFO0FBRmQsR0FqQmlDLEVBcUJqQztBQUNFRCxXQUFPLEVBQUUsVUFEWDtBQUVFQyxjQUFVLEVBQUU7QUFGZCxHQXJCaUMsRUF5QmpDO0FBQ0VELFdBQU8sRUFBRSxhQURYO0FBRUVDLGNBQVUsRUFBRTtBQUZkLEdBekJpQyxFQTZCakM7QUFDRUQsV0FBTyxFQUFFLFNBRFg7QUFFRUMsY0FBVSxFQUFFO0FBRmQsR0E3QmlDLEVBaUNqQztB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QWMsS0FBQyxFQUFDLEtBQWhCO0FBQXNCLGFBQVMsRUFBQyxVQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTFCQSxFQTJCQTtBQUFNLEtBQUMsRUFBQyxLQUFSO0FBQWMsS0FBQyxFQUFDLEtBQWhCO0FBQXNCLGFBQVMsRUFBQyxZQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtGQTNCQSxFQTRCQTtBQUFNLEtBQUMsRUFBQyxLQUFSO0FBQWMsS0FBQyxFQUFDLEtBQWhCO0FBQXNCLGFBQVMsRUFBQyxZQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdGQTVCQSxFQTZCQTtBQUFNLEtBQUMsRUFBQyxLQUFSO0FBQWMsS0FBQyxFQUFDLEtBQWhCO0FBQXNCLGFBQVMsRUFBQyxZQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdGQTdCQSxFQThCQTtBQUFNLEtBQUMsRUFBQyxLQUFSO0FBQWMsS0FBQyxFQUFDLEtBQWhCO0FBQXNCLGFBQVMsRUFBQyxZQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJEQTlCQSxDQUpGLENBREYsQ0FERixDQURGLENBVEYsRUFxREU7QUFBSyxhQUFTLEVBQUMsd0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFBTSxVQUFNLE1BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOENBQUQ7QUFBSyxNQUFFLEVBQUU7QUFBRUQsVUFBSSxFQUFFLENBQVI7QUFBV0MsWUFBTSxFQUFFO0FBQW5CLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvREFKRixFQU1FLE1BQUMsbURBQUQ7QUFDRSxlQUFXLEVBQUVqQixXQURmO0FBRUUsUUFBSSxFQUFFSSxJQUZSO0FBR0UsWUFBUSxFQUFFRyxRQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLR0csTUFMSCxFQU1FLE1BQUMsMERBQUQ7QUFBaUIsYUFBUyxFQUFDLE1BQTNCO0FBQWtDLGlCQUFhLEVBQUMsVUFBaEQ7QUFBMkQsa0JBQWMsRUFBRUgsUUFBM0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLEVBT0UsTUFBQywwREFBRDtBQUFpQixhQUFTLEVBQUMsTUFBM0I7QUFBa0MsaUJBQWEsRUFBQyxNQUFoRDtBQUF1RCxrQkFBYyxFQUFFSCxJQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsQ0FORixFQWdCRTtBQUFLLE9BQUcsRUFBQyxrQkFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEJGLEVBaUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBakJGLEVBcUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFyQkYsRUF1QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwUkF2QkYsQ0FERixDQURGLENBREYsQ0FyREYsQ0FERjtBQXlGRDs7R0FwTHVCVCxVOztLQUFBQSxVIiwiZmlsZSI6Ii4vcGFnZXMvc2VjdGlvbnMvb25lLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBSb3csIENvbCwgQ2Fyb3VzZWwsIENhcm91c2VsSXRlbSwgQ2Fyb3VzZWxDb250cm9sIH0gZnJvbSAncmVhY3RzdHJhcCdcbmltcG9ydCBGYWRlIGZyb20gJ3JlYWN0LXJldmVhbC9GYWRlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWN0aW9uT25lKCkge1xuICBjb25zdCBtYW51ZmFjdHVyaW5nU2l6ZUJ5Q291bnRyeSA9IFtcbiAgICB7XG4gICAgICBjb3VudHJ5OiAnQlJVTkVJIERBUlVTU0FMQU0nLFxuICAgICAgcGVyY2VudGFnZTogJzYyLjklJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvdW50cnk6ICdJTkRPTkVTSUEnLFxuICAgICAgcGVyY2VudGFnZTogJzM5LjglJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvdW50cnk6ICdNQUxBWVNJQScsXG4gICAgICBwZXJjZW50YWdlOiAnMzcuNSUnLFxuICAgIH0sXG4gICAge1xuICAgICAgY291bnRyeTogJ0xBTyBQRFInLFxuICAgICAgcGVyY2VudGFnZTogJzM1LjclJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvdW50cnk6ICdWSUVUTkFNJyxcbiAgICAgIHBlcmNlbnRhZ2U6ICczNS42JScsXG4gICAgfSxcbiAgICB7XG4gICAgICBjb3VudHJ5OiAnVEhBSUxBTkQnLFxuICAgICAgcGVyY2VudGFnZTogJzM1LjQlJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvdW50cnk6ICdQSElMSVBQSU5FUycsXG4gICAgICBwZXJjZW50YWdlOiAnMzQuMSUnLFxuICAgIH0sXG4gICAge1xuICAgICAgY291bnRyeTogJ01ZQU5NQVInLFxuICAgICAgcGVyY2VudGFnZTogJzMyLjElJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvdW50cnk6ICdDQU1CT0RJQScsXG4gICAgICBwZXJjZW50YWdlOiAnMzIuMSUnLFxuICAgIH0sXG4gICAge1xuICAgICAgY291bnRyeTogJ1NJTkdBUE9SRScsXG4gICAgICBwZXJjZW50YWdlOiAnMjUuMSUnLFxuICAgIH1cbiAgXVxuXG4gIGNvbnN0IFthY3RpdmVJbmRleCwgc2V0QWN0aXZlSW5kZXhdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW2FuaW1hdGluZywgc2V0QW5pbWF0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IG5leHQgPSAoKSA9PiB7XG4gICAgaWYgKGFuaW1hdGluZykgcmV0dXJuXG4gICAgY29uc3QgbmV4dEluZGV4ID0gYWN0aXZlSW5kZXggPT09IG1hbnVmYWN0dXJpbmdTaXplQnlDb3VudHJ5Lmxlbmd0aCAtIDEgPyAwIDogYWN0aXZlSW5kZXggKyAxXG4gICAgc2V0QWN0aXZlSW5kZXgobmV4dEluZGV4KVxuICB9XG5cbiAgY29uc3QgcHJldmlvdXMgPSAoKSA9PiB7XG4gICAgaWYgKGFuaW1hdGluZykgcmV0dXJuXG4gICAgY29uc3QgbmV4dEluZGV4ID0gYWN0aXZlSW5kZXggPT09IDAgPyBtYW51ZmFjdHVyaW5nU2l6ZUJ5Q291bnRyeS5sZW5ndGggLSAxIDogYWN0aXZlSW5kZXggLSAxXG4gICAgc2V0QWN0aXZlSW5kZXgobmV4dEluZGV4KVxuICB9XG5cbiAgY29uc3QgZ29Ub0luZGV4ID0gKG5ld0luZGV4KSA9PiB7XG4gICAgaWYgKGFuaW1hdGluZykgcmV0dXJuXG4gICAgc2V0QWN0aXZlSW5kZXgobmV3SW5kZXgpXG4gIH0gIFxuXG4gIGNvbnN0IHNsaWRlcyA9IG1hbnVmYWN0dXJpbmdTaXplQnlDb3VudHJ5Lm1hcCgoZGF0YVBvaW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGxlZnRJbmRleCA9IGluZGV4ID09PSAwID8gbWFudWZhY3R1cmluZ1NpemVCeUNvdW50cnkubGVuZ3RoIC0gMSA6IGluZGV4IC0gMVxuICAgIGNvbnN0IHJpZ2h0SW5kZXggPSBpbmRleCA9PSBtYW51ZmFjdHVyaW5nU2l6ZUJ5Q291bnRyeS5sZW5ndGggLSAxID8gMCA6IGluZGV4ICsgMVxuICAgIHJldHVybiAoXG4gICAgICA8Q2Fyb3VzZWxJdGVtXG4gICAgICAgIG9uRXhpdGluZz17KCkgPT4gc2V0QW5pbWF0aW5nKHRydWUpfVxuICAgICAgICBvbkV4aXRlZD17KCkgPT4gc2V0QW5pbWF0aW5nKGZhbHNlKX1cbiAgICAgICAga2V5PXtkYXRhUG9pbnQuY291bnRyeX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRhLXBvaW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlLWRhdGEtcG9pbnRcIiBvbkNsaWNrPXsoKSA9PiBnb1RvSW5kZXgobGVmdEluZGV4KX0+XG4gICAgICAgICAgICA8aDQ+e21hbnVmYWN0dXJpbmdTaXplQnlDb3VudHJ5W2xlZnRJbmRleF0uY291bnRyeX08L2g0PlxuICAgICAgICAgICAgPGgxPnttYW51ZmFjdHVyaW5nU2l6ZUJ5Q291bnRyeVtsZWZ0SW5kZXhdLnBlcmNlbnRhZ2V9PC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tZGF0YS1wb2ludFwiPlxuICAgICAgICAgICAgPGg0PntkYXRhUG9pbnQuY291bnRyeX08L2g0PlxuICAgICAgICAgICAgPGgxPntkYXRhUG9pbnQucGVyY2VudGFnZX08L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZS1kYXRhLXBvaW50XCIgb25DbGljaz17KCkgPT4gZ29Ub0luZGV4KHJpZ2h0SW5kZXgpfT5cbiAgICAgICAgICAgIDxoND57bWFudWZhY3R1cmluZ1NpemVCeUNvdW50cnlbcmlnaHRJbmRleF0uY291bnRyeX08L2g0PlxuICAgICAgICAgICAgPGgxPnttYW51ZmFjdHVyaW5nU2l6ZUJ5Q291bnRyeVtyaWdodEluZGV4XS5wZXJjZW50YWdlfTwvaDE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9DYXJvdXNlbEl0ZW0+XG4gICAgKVxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cInNlY3Rpb24tb25lXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tb25lLXBhcnQtb25lXCI+XG4gICAgICAgIDxGYWRlIGJvdHRvbT5cbiAgICAgICAgICA8aDQ+QUNDRUxFUkFURUQgQ0hBTkdFIElOIEFTRUFOJ1M8L2g0PlxuICAgICAgICAgIDxoMj5NQU5VRkFDVFVSSU5HPC9oMj5cbiAgICAgICAgICA8aDE+U0VDVE9SPC9oMT5cbiAgICAgICAgPC9GYWRlPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1vbmUtcGFydC10d29cIj5cbiAgICAgICAgPEZhZGUgYm90dG9tPlxuICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICA8Q29sIHNtPXt7IHNpemU6IDYsIG9mZnNldDogMyB9fT5cbiAgICAgICAgICAgICAgPGg0PklOIDIwMTksIEFTRUFOIENPVU5UUklFUyBXRVJFIEpVU1QgU1RBUlRJTkcgVE8gRU1CUkFDRTwvaDQ+XG4gICAgICAgICAgICAgIDxoMT5JTkRVU1RSWSA0LjA8L2gxPlxuXG4gICAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAxMDAgMzVcIj5cbiAgICAgICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD1cImxpbmVhci1ncmFkaWVudFwiIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiPlxuICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjBcIiBzdG9wLWNvbG9yPVwiIzFiYTdlY1wiLz5cbiAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwLjE4XCIgc3RvcC1jb2xvcj1cIiMyNGEzZWRcIi8+XG4gICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMC40N1wiIHN0b3AtY29sb3I9XCIjM2U5OGYwXCIvPlxuICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAuODVcIiBzdG9wLWNvbG9yPVwiIzY3ODZmNFwiLz5cbiAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwLjk5XCIgc3RvcC1jb2xvcj1cIiM3OTdlZjZcIi8+XG4gICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgICAgIDwvZGVmcz5cbiAgICAgICAgICAgICAgPGcgY2xhc3NOYW1lPVwiY2xzLTEtY2lyY2xlXCI+XG4gICAgICAgICAgICAgICAgPGcgaWQ9XCJMYXllcl8yXCIgZGF0YS1uYW1lPVwiTGF5ZXIgMlwiPlxuICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJMYXllcl8xLTJcIiBkYXRhLW5hbWU9XCJMYXllciAxXCI+XG4gICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgdHJhbnNmb3JtPVwicm90YXRlKDkwIDAgMClcIiBjbGFzc05hbWU9XCJjbHMtMy1jaXJjbGVcIiBjeD1cIjIxJVwiIGN5PVwiLTQwJVwiIHI9XCIxNSVcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICA8ZyBjbGFzc05hbWU9XCJjbHMtMS1saW5lXCI+XG4gICAgICAgICAgICAgICAgPGcgaWQ9XCJMYXllcl8yXCIgZGF0YS1uYW1lPVwiTGF5ZXIgMlwiPlxuICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJMYXllcl8xLTJcIiBkYXRhLW5hbWU9XCJMYXllciAxXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaW5lIGNsYXNzTmFtZT1cImNscy0zLWxpbmVcIiB4MT1cIjE1JVwiIHkxPVwiOTIlXCIgeDI9XCIxMDAlXCIgeTI9XCI5MiVcIi8+XG4gICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgIDx0ZXh0IHg9XCI5JVwiIHk9XCI2MCVcIiBjbGFzc05hbWU9XCJ0ZXh0LW9uZVwiPjIxJTwvdGV4dD5cbiAgICAgICAgICAgICAgPHRleHQgeD1cIjglXCIgeT1cIjcwJVwiIGNsYXNzTmFtZT1cInRleHQtdHdvXCI+VE8gVEhFIFJFR0lPTidTPC90ZXh0PlxuICAgICAgICAgICAgICA8dGV4dCB4PVwiMTAlXCIgeT1cIjc3JVwiIGNsYXNzTmFtZT1cInRleHQtdHdvXCI+R0RQIElOIDIwMTg8L3RleHQ+XG4gICAgICAgICAgICAgIDx0ZXh0IHg9XCIzMCVcIiB5PVwiNTAlXCIgY2xhc3NOYW1lPVwidGV4dC10aHJlZVwiPkhvbWUgdG8gdGhlIHNpeHRoIGxhcmdlc3QgZ2xvYmFsIGVjb25vbXkgaW4gMjAxOSBhdCBhcm91bmQgVVMkMyB0cmlsbGlvbiwgPC90ZXh0PlxuICAgICAgICAgICAgICA8dGV4dCB4PVwiMzAlXCIgeT1cIjU3JVwiIGNsYXNzTmFtZT1cInRleHQtdGhyZWVcIj5BU0VBTiBpcyBwcm9qZWN0ZWQgdG8gZ3JvdyBhdCBhbiBhdmVyYWdlIG9mIDQuOSBwZXJjZW50IHBlciBhbm51bSBmb3IgdGhlIG5leHQuIDwvdGV4dD5cbiAgICAgICAgICAgICAgPHRleHQgeD1cIjMwJVwiIHk9XCI2NCVcIiBjbGFzc05hbWU9XCJ0ZXh0LXRocmVlXCI+ZGVjYWRlLiBBcyBhIGNvcmUgZ3Jvd3RoIGRyaXZlciwgbWFudWZhY3R1cmluZyBjb250cmlidXRlcyBhYm91dCBVUyQ2NzAgPC90ZXh0PlxuICAgICAgICAgICAgICA8dGV4dCB4PVwiMzAlXCIgeT1cIjcxJVwiIGNsYXNzTmFtZT1cInRleHQtdGhyZWVcIj4gYmlsbGlvbnMgb3IgMjEgcGVyY2VudCB0byB0aGUgcmVnaW9ucyBHRFAgaW4gMjAxOC48L3RleHQ+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvRmFkZT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tb25lLXBhcnQtdGhyZWVcIj5cbiAgICAgICAgPEZhZGUgYm90dG9tPlxuICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICA8Q29sIHNtPXt7IHNpemU6IDYsIG9mZnNldDogMyB9fT5cbiAgICAgICAgICAgICAgPGg0PlRIRSBTSVpFIE9GPC9oND5cbiAgICAgICAgICAgICAgPGgyPk1BTlVGQUNUVVJJTkc8L2gyPlxuICAgICAgICAgICAgICA8aDE+U0VDVE9SPC9oMT5cbiAgICAgICAgICAgICAgPGg0PkNPTVBBUkVEIFRPIFRPVEFMIEdEUCBPRiBUSEUgQ09VTlRSWSBJTiAyMDE4PC9oND5cblxuICAgICAgICAgICAgICA8Q2Fyb3VzZWxcbiAgICAgICAgICAgICAgICBhY3RpdmVJbmRleD17YWN0aXZlSW5kZXh9XG4gICAgICAgICAgICAgICAgbmV4dD17bmV4dH1cbiAgICAgICAgICAgICAgICBwcmV2aW91cz17cHJldmlvdXN9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7c2xpZGVzfVxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbENvbnRyb2wgZGlyZWN0aW9uPVwicHJldlwiIGRpcmVjdGlvblRleHQ9XCJQcmV2aW91c1wiIG9uQ2xpY2tIYW5kbGVyPXtwcmV2aW91c30gLz5cbiAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxDb250cm9sIGRpcmVjdGlvbj1cIm5leHRcIiBkaXJlY3Rpb25UZXh0PVwiTmV4dFwiIG9uQ2xpY2tIYW5kbGVyPXtuZXh0fSAvPlxuICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxuXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9zMS1wMy00LnBuZ1wiIC8+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgU09VVEhFQVNUIEFTSUFcbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGJyLz5cblxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBJbiBzcGl0ZSBvZiBpdHMgc2l6ZSwgQVNFQU4ncyBtYW51ZmFjdHVyaW5nIHNlY3RvciBvbmx5IHJhbmtzIGZvdXJ0aCBpbiB0aGUgd29ybGQsIGJlaGluZCBDaGluYSwgVW5pc3RlZCBTdGF0ZXMgYW5kIEdlcm1hbnkuIEluIHRlcm1zIG9mIGF2ZXJhZ2UgcHJvZHVjdGl2aXR5LCBhbGwgQVNFQU4gbWVtYmVyIHN0YXRlcywgd2l0aCB0aGUgZXhjZXB0aW9uIG9mIFNpbmdhcG9yZSwgc2NvcmUgc2lnbmlmaWNhbnRseSBsb3dlciB0aGFuIFVuaXRlZCBTdGF0ZXMgYW5kIEdlcm1hbnkuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L0ZhZGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/sections/one.tsx\n");

/***/ })

})