webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/components/styles/IndustryChallenges.module.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./pages/components/styles/IndustryChallenges.module.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/* COLORS */\\n/*\\nPOSITIONING\\nBOX MODEL\\nTYPOGRAPHY\\nVISUAL\\n*/\\n.IndustryChallenges_svg__1twSA {\\n  margin: 3rem auto;\\n  -webkit-animation: IndustryChallenges_fade-in__2TKze 1s ease-out forwards;\\n     -moz-animation: IndustryChallenges_fade-in__2TKze 1s ease-out forwards;\\n          animation: IndustryChallenges_fade-in__2TKze 1s ease-out forwards;\\n}\\n@media screen and (min-width: 992px) {\\n  .IndustryChallenges_svg__1twSA {\\n    height: 20rem;\\n  }\\n}\\n@media screen and (max-width: 992px) {\\n  .IndustryChallenges_svg__1twSA {\\n    height: 8em;\\n  }\\n}\\n\\n.IndustryChallenges_description__fWYJ- {\\n  height: 150px;\\n  margin: 5rem auto;\\n  -webkit-animation: IndustryChallenges_fade-in__2TKze 1s ease-out forwards;\\n     -moz-animation: IndustryChallenges_fade-in__2TKze 1s ease-out forwards;\\n          animation: IndustryChallenges_fade-in__2TKze 1s ease-out forwards;\\n}\\n\\n.IndustryChallenges_slider__24BdR {\\n  display: -webkit-flex;\\n  display: -moz-box;\\n  display: flex;\\n  -webkit-justify-content: center;\\n     -moz-box-pack: center;\\n          justify-content: center;\\n  white-space: pre;\\n}\\n\\n@-webkit-keyframes IndustryChallenges_fade-in__2TKze {\\n  from {\\n    opacity: 0;\\n    visibility: hidden;\\n  }\\n  to {\\n    opacity: 1;\\n    visibility: visible;\\n  }\\n}\\n\\n@-moz-keyframes IndustryChallenges_fade-in__2TKze {\\n  from {\\n    opacity: 0;\\n    visibility: hidden;\\n  }\\n  to {\\n    opacity: 1;\\n    visibility: visible;\\n  }\\n}\\n\\n@keyframes IndustryChallenges_fade-in__2TKze {\\n  from {\\n    opacity: 0;\\n    visibility: hidden;\\n  }\\n  to {\\n    opacity: 1;\\n    visibility: visible;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://../../../styles/utils.scss\",\"webpack://IndustryChallenges.module.scss\"],\"names\":[],\"mappings\":\"AAWA,WAAA;AAYA;;;;;CAAA;ACrBA;EAGE,iBAAA;EACA,yEAAA;KAAA,sEAAA;UAAA,iEAAA;AAIF;ADTE;ECCF;IACqB,aAAA;EAWnB;AACF;ADTE;ECJF;IAEoB,WAAA;EAelB;AACF;;AAZA;EACE,aAAA;EACA,iBAAA;EACA,yEAAA;KAAA,sEAAA;UAAA,iEAAA;AAeF;;AAbA;EACE,qBAAA;EAAA,iBAAA;EAAA,aAAA;EACA,+BAAA;KAAA,qBAAA;UAAA,uBAAA;EACA,gBAAA;AAgBF;;AAdA;EACE;IAAO,UAAA;IAAY,kBAAA;EAmBnB;EAlBA;IAAK,UAAA;IAAY,mBAAA;EAsBjB;AACF;;AAzBA;EACE;IAAO,UAAA;IAAY,kBAAA;EAmBnB;EAlBA;IAAK,UAAA;IAAY,mBAAA;EAsBjB;AACF;;AAzBA;EACE;IAAO,UAAA;IAAY,kBAAA;EAmBnB;EAlBA;IAAK,UAAA;IAAY,mBAAA;EAsBjB;AACF\",\"sourcesContent\":[\"@mixin desktop {\\n  @media screen and (min-width: 992px) {\\n    @content;\\n  }\\n}\\n@mixin mobile {\\n  @media screen and (max-width: 992px) {\\n    @content;\\n  }\\n}\\n\\n/* COLORS */\\n$scroll_bar: 15px;\\n$c_light_blue: rgb(125, 214, 246);\\n$c_medium_blue: rgb(27, 167, 236);\\n$c_dark_blue: rgb(30, 57, 152);\\n$c_teal: rgb(88, 222, 222);\\n$c_grey: rgb(215, 216, 214);\\n$c_purple: rgb(121, 126, 246);\\n$c_light_purple: rgba(121, 126, 246, 0.5);\\n$c_white: rgb(242, 242, 242);\\n$c_black: rgb(0, 0, 0);\\n\\n/*\\nPOSITIONING\\nBOX MODEL\\nTYPOGRAPHY\\nVISUAL\\n*/\",\"@import \\\"../../../styles/utils.scss\\\";\\n\\n.svg {\\n  @include desktop { height: 20rem; }\\n  @include mobile { height: 8em; }\\n  margin: 3rem auto;\\n  animation: fade-in 1s ease-out forwards;\\n}\\n.description {\\n  height: 150px;\\n  margin: 5rem auto;\\n  animation: fade-in 1s ease-out forwards;\\n}\\n.slider {\\n  display: flex;\\n  justify-content: center;\\n  white-space: pre;\\n}\\n@keyframes fade-in {\\n  from { opacity: 0; visibility: hidden; }\\n  to { opacity: 1; visibility: visible; }\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"svg\": \"IndustryChallenges_svg__1twSA\",\n\t\"fade-in\": \"IndustryChallenges_fade-in__2TKze\",\n\t\"description\": \"IndustryChallenges_description__fWYJ-\",\n\t\"slider\": \"IndustryChallenges_slider__24BdR\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9zdHlsZXMvSW5kdXN0cnlDaGFsbGVuZ2VzLm1vZHVsZS5zY3NzPzkzMzkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDaEc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLHFHQUFxRyxzQkFBc0IsOEVBQThFLDhFQUE4RSw4RUFBOEUsR0FBRyx3Q0FBd0Msb0NBQW9DLG9CQUFvQixLQUFLLEdBQUcsd0NBQXdDLG9DQUFvQyxrQkFBa0IsS0FBSyxHQUFHLDRDQUE0QyxrQkFBa0Isc0JBQXNCLDhFQUE4RSw4RUFBOEUsOEVBQThFLEdBQUcsdUNBQXVDLDBCQUEwQixzQkFBc0Isa0JBQWtCLG9DQUFvQyw2QkFBNkIsb0NBQW9DLHFCQUFxQixHQUFHLDBEQUEwRCxVQUFVLGlCQUFpQix5QkFBeUIsS0FBSyxRQUFRLGlCQUFpQiwwQkFBMEIsS0FBSyxHQUFHLHVEQUF1RCxVQUFVLGlCQUFpQix5QkFBeUIsS0FBSyxRQUFRLGlCQUFpQiwwQkFBMEIsS0FBSyxHQUFHLGtEQUFrRCxVQUFVLGlCQUFpQix5QkFBeUIsS0FBSyxRQUFRLGlCQUFpQiwwQkFBMEIsS0FBSyxHQUFHLE9BQU8sMklBQTJJLFNBQVMsS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssS0FBSyxLQUFLLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sS0FBSyxLQUFLLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLHlDQUF5QywwQ0FBMEMsZUFBZSxLQUFLLEdBQUcsaUJBQWlCLDBDQUEwQyxlQUFlLEtBQUssR0FBRyxvQ0FBb0Msb0NBQW9DLG9DQUFvQyxpQ0FBaUMsNkJBQTZCLDhCQUE4QixnQ0FBZ0MsNENBQTRDLCtCQUErQix5QkFBeUIsZ0dBQWdHLFVBQVUsc0JBQXNCLGVBQWUsRUFBRSxxQkFBcUIsYUFBYSxFQUFFLHNCQUFzQiw0Q0FBNEMsR0FBRyxnQkFBZ0Isa0JBQWtCLHNCQUFzQiw0Q0FBNEMsR0FBRyxXQUFXLGtCQUFrQiw0QkFBNEIscUJBQXFCLEdBQUcsc0JBQXNCLFVBQVUsWUFBWSxvQkFBb0IsRUFBRSxRQUFRLFlBQVkscUJBQXFCLEVBQUUsR0FBRyxtQkFBbUI7QUFDdjFHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9wYWdlcy9jb21wb25lbnRzL3N0eWxlcy9JbmR1c3RyeUNoYWxsZW5nZXMubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBDT0xPUlMgKi9cXG4vKlxcblBPU0lUSU9OSU5HXFxuQk9YIE1PREVMXFxuVFlQT0dSQVBIWVxcblZJU1VBTFxcbiovXFxuLkluZHVzdHJ5Q2hhbGxlbmdlc19zdmdfXzF0d1NBIHtcXG4gIG1hcmdpbjogM3JlbSBhdXRvO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IEluZHVzdHJ5Q2hhbGxlbmdlc19mYWRlLWluX18yVEt6ZSAxcyBlYXNlLW91dCBmb3J3YXJkcztcXG4gICAgIC1tb3otYW5pbWF0aW9uOiBJbmR1c3RyeUNoYWxsZW5nZXNfZmFkZS1pbl9fMlRLemUgMXMgZWFzZS1vdXQgZm9yd2FyZHM7XFxuICAgICAgICAgIGFuaW1hdGlvbjogSW5kdXN0cnlDaGFsbGVuZ2VzX2ZhZGUtaW5fXzJUS3plIDFzIGVhc2Utb3V0IGZvcndhcmRzO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgLkluZHVzdHJ5Q2hhbGxlbmdlc19zdmdfXzF0d1NBIHtcXG4gICAgaGVpZ2h0OiAyMHJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcXG4gIC5JbmR1c3RyeUNoYWxsZW5nZXNfc3ZnX18xdHdTQSB7XFxuICAgIGhlaWdodDogOGVtO1xcbiAgfVxcbn1cXG5cXG4uSW5kdXN0cnlDaGFsbGVuZ2VzX2Rlc2NyaXB0aW9uX19mV1lKLSB7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgbWFyZ2luOiA1cmVtIGF1dG87XFxuICAtd2Via2l0LWFuaW1hdGlvbjogSW5kdXN0cnlDaGFsbGVuZ2VzX2ZhZGUtaW5fXzJUS3plIDFzIGVhc2Utb3V0IGZvcndhcmRzO1xcbiAgICAgLW1vei1hbmltYXRpb246IEluZHVzdHJ5Q2hhbGxlbmdlc19mYWRlLWluX18yVEt6ZSAxcyBlYXNlLW91dCBmb3J3YXJkcztcXG4gICAgICAgICAgYW5pbWF0aW9uOiBJbmR1c3RyeUNoYWxsZW5nZXNfZmFkZS1pbl9fMlRLemUgMXMgZWFzZS1vdXQgZm9yd2FyZHM7XFxufVxcblxcbi5JbmR1c3RyeUNoYWxsZW5nZXNfc2xpZGVyX18yNEJkUiB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgLW1vei1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdoaXRlLXNwYWNlOiBwcmU7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBJbmR1c3RyeUNoYWxsZW5nZXNfZmFkZS1pbl9fMlRLemUge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIH1cXG59XFxuXFxuQC1tb3ota2V5ZnJhbWVzIEluZHVzdHJ5Q2hhbGxlbmdlc19mYWRlLWluX18yVEt6ZSB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIEluZHVzdHJ5Q2hhbGxlbmdlc19mYWRlLWluX18yVEt6ZSB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi4vLi4vLi4vc3R5bGVzL3V0aWxzLnNjc3NcIixcIndlYnBhY2s6Ly9JbmR1c3RyeUNoYWxsZW5nZXMubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBV0EsV0FBQTtBQVlBOzs7OztDQUFBO0FDckJBO0VBR0UsaUJBQUE7RUFDQSx5RUFBQTtLQUFBLHNFQUFBO1VBQUEsaUVBQUE7QUFJRjtBRFRFO0VDQ0Y7SUFDcUIsYUFBQTtFQVduQjtBQUNGO0FEVEU7RUNKRjtJQUVvQixXQUFBO0VBZWxCO0FBQ0Y7O0FBWkE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx5RUFBQTtLQUFBLHNFQUFBO1VBQUEsaUVBQUE7QUFlRjs7QUFiQTtFQUNFLHFCQUFBO0VBQUEsaUJBQUE7RUFBQSxhQUFBO0VBQ0EsK0JBQUE7S0FBQSxxQkFBQTtVQUFBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFnQkY7O0FBZEE7RUFDRTtJQUFPLFVBQUE7SUFBWSxrQkFBQTtFQW1CbkI7RUFsQkE7SUFBSyxVQUFBO0lBQVksbUJBQUE7RUFzQmpCO0FBQ0Y7O0FBekJBO0VBQ0U7SUFBTyxVQUFBO0lBQVksa0JBQUE7RUFtQm5CO0VBbEJBO0lBQUssVUFBQTtJQUFZLG1CQUFBO0VBc0JqQjtBQUNGOztBQXpCQTtFQUNFO0lBQU8sVUFBQTtJQUFZLGtCQUFBO0VBbUJuQjtFQWxCQTtJQUFLLFVBQUE7SUFBWSxtQkFBQTtFQXNCakI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWl4aW4gZGVza3RvcCB7XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuQG1peGluIG1vYmlsZSB7XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuLyogQ09MT1JTICovXFxuJHNjcm9sbF9iYXI6IDE1cHg7XFxuJGNfbGlnaHRfYmx1ZTogcmdiKDEyNSwgMjE0LCAyNDYpO1xcbiRjX21lZGl1bV9ibHVlOiByZ2IoMjcsIDE2NywgMjM2KTtcXG4kY19kYXJrX2JsdWU6IHJnYigzMCwgNTcsIDE1Mik7XFxuJGNfdGVhbDogcmdiKDg4LCAyMjIsIDIyMik7XFxuJGNfZ3JleTogcmdiKDIxNSwgMjE2LCAyMTQpO1xcbiRjX3B1cnBsZTogcmdiKDEyMSwgMTI2LCAyNDYpO1xcbiRjX2xpZ2h0X3B1cnBsZTogcmdiYSgxMjEsIDEyNiwgMjQ2LCAwLjUpO1xcbiRjX3doaXRlOiByZ2IoMjQyLCAyNDIsIDI0Mik7XFxuJGNfYmxhY2s6IHJnYigwLCAwLCAwKTtcXG5cXG4vKlxcblBPU0lUSU9OSU5HXFxuQk9YIE1PREVMXFxuVFlQT0dSQVBIWVxcblZJU1VBTFxcbiovXCIsXCJAaW1wb3J0IFxcXCIuLi8uLi8uLi9zdHlsZXMvdXRpbHMuc2Nzc1xcXCI7XFxuXFxuLnN2ZyB7XFxuICBAaW5jbHVkZSBkZXNrdG9wIHsgaGVpZ2h0OiAyMHJlbTsgfVxcbiAgQGluY2x1ZGUgbW9iaWxlIHsgaGVpZ2h0OiA4ZW07IH1cXG4gIG1hcmdpbjogM3JlbSBhdXRvO1xcbiAgYW5pbWF0aW9uOiBmYWRlLWluIDFzIGVhc2Utb3V0IGZvcndhcmRzO1xcbn1cXG4uZGVzY3JpcHRpb24ge1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIG1hcmdpbjogNXJlbSBhdXRvO1xcbiAgYW5pbWF0aW9uOiBmYWRlLWluIDFzIGVhc2Utb3V0IGZvcndhcmRzO1xcbn1cXG4uc2xpZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdoaXRlLXNwYWNlOiBwcmU7XFxufVxcbkBrZXlmcmFtZXMgZmFkZS1pbiB7XFxuICBmcm9tIHsgb3BhY2l0eTogMDsgdmlzaWJpbGl0eTogaGlkZGVuOyB9XFxuICB0byB7IG9wYWNpdHk6IDE7IHZpc2liaWxpdHk6IHZpc2libGU7IH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwic3ZnXCI6IFwiSW5kdXN0cnlDaGFsbGVuZ2VzX3N2Z19fMXR3U0FcIixcblx0XCJmYWRlLWluXCI6IFwiSW5kdXN0cnlDaGFsbGVuZ2VzX2ZhZGUtaW5fXzJUS3plXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJJbmR1c3RyeUNoYWxsZW5nZXNfZGVzY3JpcHRpb25fX2ZXWUotXCIsXG5cdFwic2xpZGVyXCI6IFwiSW5kdXN0cnlDaGFsbGVuZ2VzX3NsaWRlcl9fMjRCZFJcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/components/styles/IndustryChallenges.module.scss\n");

/***/ })

})