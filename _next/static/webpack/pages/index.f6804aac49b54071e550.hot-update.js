webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/components/styles/ChallengesCircle.module.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./pages/components/styles/ChallengesCircle.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/* COLORS */\\n/*\\nPOSITIONING\\nBOX MODEL\\nTYPOGRAPHY\\nVISUAL\\n*/\\n@media screen and (min-width: 992px) {\\n  .ChallengesCircle_svg__1TGwn {\\n    width: 75%;\\n  }\\n}\\n@media screen and (max-width: 992px) {\\n  .ChallengesCircle_svg__1TGwn {\\n    width: 100%;\\n  }\\n}\\n\\n.ChallengesCircle_isolate__33g1Y {\\n  isolation: isolate;\\n}\\n\\n.ChallengesCircle_shadows__3Wrsf {\\n  opacity: 0.3;\\n  mix-blend-mode: multiply;\\n}\\n\\n.ChallengesCircle_circle__2Uoyb {\\n  fill: none;\\n  stroke-miterlimit: 10;\\n  stroke-width: 3px;\\n  stroke: url(#challenges-circle-gradient);\\n  stroke-dasharray: 1335;\\n  -webkit-animation: ChallengesCircle_draw-circle__144mm 3s linear forwards;\\n          animation: ChallengesCircle_draw-circle__144mm 3s linear forwards;\\n}\\n\\n.ChallengesCircle_h__3PD9r {\\n  fill: #1e3998;\\n  text-anchor: middle;\\n  font-size: 1.5rem;\\n}\\n\\n.ChallengesCircle_p__1DGi5 {\\n  fill: #1e3998;\\n  text-anchor: middle;\\n  font-size: 0.75rem;\\n}\\n\\n.ChallengesCircle_button__2q1DT {\\n  -webkit-transition: all 0.5s ease-out;\\n  transition: all 0.5s ease-out;\\n  fill: rgba(255, 255, 255, 0.2);\\n}\\n.ChallengesCircle_button__2q1DT.ChallengesCircle_selected__3wzI8 {\\n  fill: rgba(86, 222, 222, 0.75);\\n}\\n\\n.ChallengesCircle_description__1dMh_ {\\n  opacity: 0;\\n  -webkit-animation: ChallengesCircle_fade-in__1wH3w 1s ease-out forwards;\\n          animation: ChallengesCircle_fade-in__1wH3w 1s ease-out forwards;\\n}\\n\\n@-webkit-keyframes ChallengesCircle_draw-circle__144mm {\\n  from {\\n    stroke-dashoffset: 1335;\\n  }\\n  to {\\n    stroke-dashoffset: 2670;\\n  }\\n}\\n\\n@keyframes ChallengesCircle_draw-circle__144mm {\\n  from {\\n    stroke-dashoffset: 1335;\\n  }\\n  to {\\n    stroke-dashoffset: 2670;\\n  }\\n}\\n@-webkit-keyframes ChallengesCircle_fade-in__1wH3w {\\n  to {\\n    opacity: 1;\\n  }\\n}\\n@keyframes ChallengesCircle_fade-in__1wH3w {\\n  to {\\n    opacity: 1;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://../../../styles/utils.scss\",\"webpack://ChallengesCircle.module.scss\"],\"names\":[],\"mappings\":\"AAYA,WAAA;AAWA;;;;;CAAA;AAtBE;ECGF;IACoB,UAAA;EAKlB;AACF;ADJE;ECHF;IAEmB,WAAA;EASjB;AACF;;AARA;EAAU,kBAAA;AAYV;;AAXA;EAAU,YAAA;EAAY,wBAAA;AAgBtB;;AAfA;EACE,UAAA;EACA,qBAAA;EACA,iBAAA;EACA,wCAAA;EACA,sBAAA;EACA,yEAAA;UAAA,iEAAA;AAkBF;;AAfA;EAjBqB,aDcP;ECd2B,mBAAA;EAAqB,iBAiB5C;AAqBlB;;AApBA;EAlBqB,aDcP;ECd2B,mBAAA;EAAqB,kBAkB5C;AA0BlB;;AAzBA;EACE,qCAAA;EAAA,6BAAA;EACA,8BAAA;AA4BF;AA3BE;EACE,8BAAA;AA6BJ;;AA1BA;EAAc,UAAA;EAAW,uEAAA;UAAA,+DAAA;AA+BzB;;AA9BA;EACE;IAAM,uBAAA;EAkCN;EAjCA;IAAI,uBAAA;EAoCJ;AACF;;AAvCA;EACE;IAAM,uBAAA;EAkCN;EAjCA;IAAI,uBAAA;EAoCJ;AACF;AAnCA;EACE;IAAI,UAAA;EAsCJ;AACF;AAxCA;EACE;IAAI,UAAA;EAsCJ;AACF\",\"sourcesContent\":[\"@mixin desktop {\\n  @media screen and (min-width: 992px) {\\n    @content;\\n  }\\n}\\n\\n@mixin mobile {\\n  @media screen and (max-width: 992px) {\\n    @content;\\n  }\\n}\\n\\n/* COLORS */\\n$scroll_bar: 15px;\\n$c_light_blue: rgb(125,214,246);\\n$c_medium_blue: rgb(27, 167, 236);\\n$c_dark_blue: rgb(30, 57, 152);\\n$c_teal: rgb(88, 222, 222);\\n$c_grey: rgb(215, 216, 214);\\n$c_purple: rgb(121, 126, 246);\\n$c_white: rgb(242, 242, 242);\\n$c_black: rgb(0, 0, 0);\\n\\n/*\\nPOSITIONING\\nBOX MODEL\\nTYPOGRAPHY\\nVISUAL\\n*/\",\"@import \\\"../../../styles/utils.scss\\\";\\n\\n@mixin text ($size) {fill: $c_dark_blue; text-anchor: middle; font-size: $size;}\\n\\n.svg {\\n  @include desktop {width: 75%;}\\n  @include mobile {width: 100%;}\\n}\\n.isolate {isolation:isolate;}\\n.shadows {opacity:0.3;mix-blend-mode:multiply;}\\n.circle {\\n  fill:none;\\n  stroke-miterlimit:10;\\n  stroke-width:3px;\\n  stroke:url(#challenges-circle-gradient);\\n  stroke-dasharray: 1335;\\n  animation: draw-circle 3s linear forwards;\\n}\\n\\n.h {@include text(1.5rem);}\\n.p {@include text(.75rem);}\\n.button {\\n  transition: all 0.5s ease-out;\\n  fill: rgba(255, 255, 255, 0.2);\\n  &.selected {\\n    fill: rgba(86, 222, 222, 0.75)\\n  }\\n}\\n.description {opacity: 0;animation: fade-in 1s ease-out forwards;}\\n@keyframes draw-circle {\\n  from {stroke-dashoffset: 1335;}\\n  to {stroke-dashoffset: 2670;}\\n}\\n@keyframes fade-in {\\n  to {opacity: 1;}\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"svg\": \"ChallengesCircle_svg__1TGwn\",\n\t\"isolate\": \"ChallengesCircle_isolate__33g1Y\",\n\t\"shadows\": \"ChallengesCircle_shadows__3Wrsf\",\n\t\"circle\": \"ChallengesCircle_circle__2Uoyb\",\n\t\"draw-circle\": \"ChallengesCircle_draw-circle__144mm\",\n\t\"h\": \"ChallengesCircle_h__3PD9r\",\n\t\"p\": \"ChallengesCircle_p__1DGi5\",\n\t\"button\": \"ChallengesCircle_button__2q1DT\",\n\t\"selected\": \"ChallengesCircle_selected__3wzI8\",\n\t\"description\": \"ChallengesCircle_description__1dMh_\",\n\t\"fade-in\": \"ChallengesCircle_fade-in__1wH3w\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9zdHlsZXMvQ2hhbGxlbmdlc0NpcmNsZS5tb2R1bGUuc2Nzcz80YmM4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMkdBQXNEO0FBQ2hHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUywyR0FBMkcsa0NBQWtDLGlCQUFpQixLQUFLLEdBQUcsd0NBQXdDLGtDQUFrQyxrQkFBa0IsS0FBSyxHQUFHLHNDQUFzQyx1QkFBdUIsR0FBRyxzQ0FBc0MsaUJBQWlCLDZCQUE2QixHQUFHLHFDQUFxQyxlQUFlLDBCQUEwQixzQkFBc0IsNkNBQTZDLDJCQUEyQiw4RUFBOEUsOEVBQThFLEdBQUcsZ0NBQWdDLGtCQUFrQix3QkFBd0Isc0JBQXNCLEdBQUcsZ0NBQWdDLGtCQUFrQix3QkFBd0IsdUJBQXVCLEdBQUcscUNBQXFDLDBDQUEwQyxrQ0FBa0MsbUNBQW1DLEdBQUcsb0VBQW9FLG1DQUFtQyxHQUFHLDBDQUEwQyxlQUFlLDRFQUE0RSw0RUFBNEUsR0FBRyw0REFBNEQsVUFBVSw4QkFBOEIsS0FBSyxRQUFRLDhCQUE4QixLQUFLLEdBQUcsb0RBQW9ELFVBQVUsOEJBQThCLEtBQUssUUFBUSw4QkFBOEIsS0FBSyxHQUFHLHNEQUFzRCxRQUFRLGlCQUFpQixLQUFLLEdBQUcsOENBQThDLFFBQVEsaUJBQWlCLEtBQUssR0FBRyxPQUFPLHlJQUF5SSxTQUFTLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLEtBQUssS0FBSyxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxRQUFRLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLEtBQUssWUFBWSxZQUFZLGNBQWMsUUFBUSxNQUFNLFlBQVksWUFBWSxjQUFjLFFBQVEsTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsUUFBUSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLHlDQUF5QywwQ0FBMEMsZUFBZSxLQUFLLEdBQUcsbUJBQW1CLDBDQUEwQyxlQUFlLEtBQUssR0FBRyxvQ0FBb0Msa0NBQWtDLG9DQUFvQyxpQ0FBaUMsNkJBQTZCLDhCQUE4QixnQ0FBZ0MsK0JBQStCLHlCQUF5QixnR0FBZ0cseUJBQXlCLG1CQUFtQixxQkFBcUIsbUJBQW1CLFVBQVUsc0JBQXNCLFlBQVkscUJBQXFCLGFBQWEsR0FBRyxZQUFZLG1CQUFtQixZQUFZLFlBQVkseUJBQXlCLFdBQVcsY0FBYyx5QkFBeUIscUJBQXFCLDRDQUE0QywyQkFBMkIsOENBQThDLEdBQUcsUUFBUSx1QkFBdUIsTUFBTSx1QkFBdUIsV0FBVyxrQ0FBa0MsbUNBQW1DLGdCQUFnQix5Q0FBeUMsR0FBRyxnQkFBZ0IsV0FBVyx5Q0FBeUMsMEJBQTBCLFVBQVUseUJBQXlCLFFBQVEseUJBQXlCLEdBQUcsc0JBQXNCLFFBQVEsWUFBWSxHQUFHLG1CQUFtQjtBQUM5Z0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vcGFnZXMvY29tcG9uZW50cy9zdHlsZXMvQ2hhbGxlbmdlc0NpcmNsZS5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIENPTE9SUyAqL1xcbi8qXFxuUE9TSVRJT05JTkdcXG5CT1ggTU9ERUxcXG5UWVBPR1JBUEhZXFxuVklTVUFMXFxuKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgLkNoYWxsZW5nZXNDaXJjbGVfc3ZnX18xVEd3biB7XFxuICAgIHdpZHRoOiA3NSU7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XFxuICAuQ2hhbGxlbmdlc0NpcmNsZV9zdmdfXzFUR3duIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcblxcbi5DaGFsbGVuZ2VzQ2lyY2xlX2lzb2xhdGVfXzMzZzFZIHtcXG4gIGlzb2xhdGlvbjogaXNvbGF0ZTtcXG59XFxuXFxuLkNoYWxsZW5nZXNDaXJjbGVfc2hhZG93c19fM1dyc2Yge1xcbiAgb3BhY2l0eTogMC4zO1xcbiAgbWl4LWJsZW5kLW1vZGU6IG11bHRpcGx5O1xcbn1cXG5cXG4uQ2hhbGxlbmdlc0NpcmNsZV9jaXJjbGVfXzJVb3liIHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2UtbWl0ZXJsaW1pdDogMTA7XFxuICBzdHJva2Utd2lkdGg6IDNweDtcXG4gIHN0cm9rZTogdXJsKCNjaGFsbGVuZ2VzLWNpcmNsZS1ncmFkaWVudCk7XFxuICBzdHJva2UtZGFzaGFycmF5OiAxMzM1O1xcbiAgLXdlYmtpdC1hbmltYXRpb246IENoYWxsZW5nZXNDaXJjbGVfZHJhdy1jaXJjbGVfXzE0NG1tIDNzIGxpbmVhciBmb3J3YXJkcztcXG4gICAgICAgICAgYW5pbWF0aW9uOiBDaGFsbGVuZ2VzQ2lyY2xlX2RyYXctY2lyY2xlX18xNDRtbSAzcyBsaW5lYXIgZm9yd2FyZHM7XFxufVxcblxcbi5DaGFsbGVuZ2VzQ2lyY2xlX2hfXzNQRDlyIHtcXG4gIGZpbGw6ICMxZTM5OTg7XFxuICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5DaGFsbGVuZ2VzQ2lyY2xlX3BfXzFER2k1IHtcXG4gIGZpbGw6ICMxZTM5OTg7XFxuICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbn1cXG5cXG4uQ2hhbGxlbmdlc0NpcmNsZV9idXR0b25fXzJxMURUIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQ7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dDtcXG4gIGZpbGw6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG59XFxuLkNoYWxsZW5nZXNDaXJjbGVfYnV0dG9uX18ycTFEVC5DaGFsbGVuZ2VzQ2lyY2xlX3NlbGVjdGVkX18zd3pJOCB7XFxuICBmaWxsOiByZ2JhKDg2LCAyMjIsIDIyMiwgMC43NSk7XFxufVxcblxcbi5DaGFsbGVuZ2VzQ2lyY2xlX2Rlc2NyaXB0aW9uX18xZE1oXyB7XFxuICBvcGFjaXR5OiAwO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IENoYWxsZW5nZXNDaXJjbGVfZmFkZS1pbl9fMXdIM3cgMXMgZWFzZS1vdXQgZm9yd2FyZHM7XFxuICAgICAgICAgIGFuaW1hdGlvbjogQ2hhbGxlbmdlc0NpcmNsZV9mYWRlLWluX18xd0gzdyAxcyBlYXNlLW91dCBmb3J3YXJkcztcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIENoYWxsZW5nZXNDaXJjbGVfZHJhdy1jaXJjbGVfXzE0NG1tIHtcXG4gIGZyb20ge1xcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMTMzNTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDI2NzA7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgQ2hhbGxlbmdlc0NpcmNsZV9kcmF3LWNpcmNsZV9fMTQ0bW0ge1xcbiAgZnJvbSB7XFxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxMzM1O1xcbiAgfVxcbiAgdG8ge1xcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMjY3MDtcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIENoYWxsZW5nZXNDaXJjbGVfZmFkZS1pbl9fMXdIM3cge1xcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIENoYWxsZW5nZXNDaXJjbGVfZmFkZS1pbl9fMXdIM3cge1xcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi4vLi4vLi4vc3R5bGVzL3V0aWxzLnNjc3NcIixcIndlYnBhY2s6Ly9DaGFsbGVuZ2VzQ2lyY2xlLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQVlBLFdBQUE7QUFXQTs7Ozs7Q0FBQTtBQXRCRTtFQ0dGO0lBQ29CLFVBQUE7RUFLbEI7QUFDRjtBREpFO0VDSEY7SUFFbUIsV0FBQTtFQVNqQjtBQUNGOztBQVJBO0VBQVUsa0JBQUE7QUFZVjs7QUFYQTtFQUFVLFlBQUE7RUFBWSx3QkFBQTtBQWdCdEI7O0FBZkE7RUFDRSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSx5RUFBQTtVQUFBLGlFQUFBO0FBa0JGOztBQWZBO0VBakJxQixhRGNQO0VDZDJCLG1CQUFBO0VBQXFCLGlCQWlCNUM7QUFxQmxCOztBQXBCQTtFQWxCcUIsYURjUDtFQ2QyQixtQkFBQTtFQUFxQixrQkFrQjVDO0FBMEJsQjs7QUF6QkE7RUFDRSxxQ0FBQTtFQUFBLDZCQUFBO0VBQ0EsOEJBQUE7QUE0QkY7QUEzQkU7RUFDRSw4QkFBQTtBQTZCSjs7QUExQkE7RUFBYyxVQUFBO0VBQVcsdUVBQUE7VUFBQSwrREFBQTtBQStCekI7O0FBOUJBO0VBQ0U7SUFBTSx1QkFBQTtFQWtDTjtFQWpDQTtJQUFJLHVCQUFBO0VBb0NKO0FBQ0Y7O0FBdkNBO0VBQ0U7SUFBTSx1QkFBQTtFQWtDTjtFQWpDQTtJQUFJLHVCQUFBO0VBb0NKO0FBQ0Y7QUFuQ0E7RUFDRTtJQUFJLFVBQUE7RUFzQ0o7QUFDRjtBQXhDQTtFQUNFO0lBQUksVUFBQTtFQXNDSjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtaXhpbiBkZXNrdG9wIHtcXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gbW9iaWxlIHtcXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG4vKiBDT0xPUlMgKi9cXG4kc2Nyb2xsX2JhcjogMTVweDtcXG4kY19saWdodF9ibHVlOiByZ2IoMTI1LDIxNCwyNDYpO1xcbiRjX21lZGl1bV9ibHVlOiByZ2IoMjcsIDE2NywgMjM2KTtcXG4kY19kYXJrX2JsdWU6IHJnYigzMCwgNTcsIDE1Mik7XFxuJGNfdGVhbDogcmdiKDg4LCAyMjIsIDIyMik7XFxuJGNfZ3JleTogcmdiKDIxNSwgMjE2LCAyMTQpO1xcbiRjX3B1cnBsZTogcmdiKDEyMSwgMTI2LCAyNDYpO1xcbiRjX3doaXRlOiByZ2IoMjQyLCAyNDIsIDI0Mik7XFxuJGNfYmxhY2s6IHJnYigwLCAwLCAwKTtcXG5cXG4vKlxcblBPU0lUSU9OSU5HXFxuQk9YIE1PREVMXFxuVFlQT0dSQVBIWVxcblZJU1VBTFxcbiovXCIsXCJAaW1wb3J0IFxcXCIuLi8uLi8uLi9zdHlsZXMvdXRpbHMuc2Nzc1xcXCI7XFxuXFxuQG1peGluIHRleHQgKCRzaXplKSB7ZmlsbDogJGNfZGFya19ibHVlOyB0ZXh0LWFuY2hvcjogbWlkZGxlOyBmb250LXNpemU6ICRzaXplO31cXG5cXG4uc3ZnIHtcXG4gIEBpbmNsdWRlIGRlc2t0b3Age3dpZHRoOiA3NSU7fVxcbiAgQGluY2x1ZGUgbW9iaWxlIHt3aWR0aDogMTAwJTt9XFxufVxcbi5pc29sYXRlIHtpc29sYXRpb246aXNvbGF0ZTt9XFxuLnNoYWRvd3Mge29wYWNpdHk6MC4zO21peC1ibGVuZC1tb2RlOm11bHRpcGx5O31cXG4uY2lyY2xlIHtcXG4gIGZpbGw6bm9uZTtcXG4gIHN0cm9rZS1taXRlcmxpbWl0OjEwO1xcbiAgc3Ryb2tlLXdpZHRoOjNweDtcXG4gIHN0cm9rZTp1cmwoI2NoYWxsZW5nZXMtY2lyY2xlLWdyYWRpZW50KTtcXG4gIHN0cm9rZS1kYXNoYXJyYXk6IDEzMzU7XFxuICBhbmltYXRpb246IGRyYXctY2lyY2xlIDNzIGxpbmVhciBmb3J3YXJkcztcXG59XFxuXFxuLmgge0BpbmNsdWRlIHRleHQoMS41cmVtKTt9XFxuLnAge0BpbmNsdWRlIHRleHQoLjc1cmVtKTt9XFxuLmJ1dHRvbiB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dDtcXG4gIGZpbGw6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gICYuc2VsZWN0ZWQge1xcbiAgICBmaWxsOiByZ2JhKDg2LCAyMjIsIDIyMiwgMC43NSlcXG4gIH1cXG59XFxuLmRlc2NyaXB0aW9uIHtvcGFjaXR5OiAwO2FuaW1hdGlvbjogZmFkZS1pbiAxcyBlYXNlLW91dCBmb3J3YXJkczt9XFxuQGtleWZyYW1lcyBkcmF3LWNpcmNsZSB7XFxuICBmcm9tIHtzdHJva2UtZGFzaG9mZnNldDogMTMzNTt9XFxuICB0byB7c3Ryb2tlLWRhc2hvZmZzZXQ6IDI2NzA7fVxcbn1cXG5Aa2V5ZnJhbWVzIGZhZGUtaW4ge1xcbiAgdG8ge29wYWNpdHk6IDE7fVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJzdmdcIjogXCJDaGFsbGVuZ2VzQ2lyY2xlX3N2Z19fMVRHd25cIixcblx0XCJpc29sYXRlXCI6IFwiQ2hhbGxlbmdlc0NpcmNsZV9pc29sYXRlX18zM2cxWVwiLFxuXHRcInNoYWRvd3NcIjogXCJDaGFsbGVuZ2VzQ2lyY2xlX3NoYWRvd3NfXzNXcnNmXCIsXG5cdFwiY2lyY2xlXCI6IFwiQ2hhbGxlbmdlc0NpcmNsZV9jaXJjbGVfXzJVb3liXCIsXG5cdFwiZHJhdy1jaXJjbGVcIjogXCJDaGFsbGVuZ2VzQ2lyY2xlX2RyYXctY2lyY2xlX18xNDRtbVwiLFxuXHRcImhcIjogXCJDaGFsbGVuZ2VzQ2lyY2xlX2hfXzNQRDlyXCIsXG5cdFwicFwiOiBcIkNoYWxsZW5nZXNDaXJjbGVfcF9fMURHaTVcIixcblx0XCJidXR0b25cIjogXCJDaGFsbGVuZ2VzQ2lyY2xlX2J1dHRvbl9fMnExRFRcIixcblx0XCJzZWxlY3RlZFwiOiBcIkNoYWxsZW5nZXNDaXJjbGVfc2VsZWN0ZWRfXzN3ekk4XCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJDaGFsbGVuZ2VzQ2lyY2xlX2Rlc2NyaXB0aW9uX18xZE1oX1wiLFxuXHRcImZhZGUtaW5cIjogXCJDaGFsbGVuZ2VzQ2lyY2xlX2ZhZGUtaW5fXzF3SDN3XCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/components/styles/ChallengesCircle.module.scss\n");

/***/ })

})