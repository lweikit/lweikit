webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/components/styles/ChallengesCircle.module.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./pages/components/styles/ChallengesCircle.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/* COLORS */\\n/*\\nPOSITIONING\\nBOX MODEL\\nTYPOGRAPHY\\nVISUAL\\n*/\\n@media screen and (min-width: 992px) {\\n  .ChallengesCircle_svg__1TGwn {\\n    width: 75%;\\n  }\\n}\\n@media screen and (max-width: 992px) {\\n  .ChallengesCircle_svg__1TGwn {\\n    width: 100%;\\n  }\\n}\\n\\n.ChallengesCircle_isolate__33g1Y {\\n  isolation: isolate;\\n}\\n\\n.ChallengesCircle_shadows__3Wrsf {\\n  opacity: 0.3;\\n  mix-blend-mode: multiply;\\n}\\n\\n.ChallengesCircle_circle__2Uoyb {\\n  fill: none;\\n  stroke-miterlimit: 10;\\n  stroke-width: 3px;\\n  stroke: url(#challenges-circle-gradient);\\n  stroke-dasharray: 1335;\\n  -webkit-animation: ChallengesCircle_draw-circle__144mm 3s linear forwards;\\n          animation: ChallengesCircle_draw-circle__144mm 3s linear forwards;\\n}\\n\\n.ChallengesCircle_h__3PD9r {\\n  fill: #1e3998;\\n  text-anchor: middle;\\n  font-size: 1.5rem;\\n}\\n\\n.ChallengesCircle_p__1DGi5 {\\n  fill: #1e3998;\\n  text-anchor: middle;\\n  font-size: 0.75rem;\\n}\\n\\n.ChallengesCircle_button__2q1DT {\\n  -webkit-transition: all 0.5s ease-out;\\n  transition: all 0.5s ease-out;\\n  fill: rgba(255, 255, 255, 0.2);\\n}\\n.ChallengesCircle_button__2q1DT.ChallengesCircle_selected__3wzI8 {\\n  fill: rgba(86, 222, 222, 0.75);\\n}\\n\\n.ChallengesCircle_description__1dMh_ {\\n  opacity: 0;\\n  -webkit-animation: ChallengesCircle_fade-in__1wH3w 1s ease-out forwards;\\n          animation: ChallengesCircle_fade-in__1wH3w 1s ease-out forwards;\\n}\\n\\n@-webkit-keyframes ChallengesCircle_draw-circle__144mm {\\n  from {\\n    stroke-dashoffset: 1335;\\n  }\\n  to {\\n    stroke-dashoffset: 2670;\\n  }\\n}\\n\\n@keyframes ChallengesCircle_draw-circle__144mm {\\n  from {\\n    stroke-dashoffset: 1335;\\n  }\\n  to {\\n    stroke-dashoffset: 2670;\\n  }\\n}\\n@-webkit-keyframes ChallengesCircle_fade-in__1wH3w {\\n  to {\\n    opacity: 1;\\n  }\\n}\\n@keyframes ChallengesCircle_fade-in__1wH3w {\\n  to {\\n    opacity: 1;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://../../../styles/utils.scss\",\"webpack://ChallengesCircle.module.scss\"],\"names\":[],\"mappings\":\"AAYA,WAAA;AAWA;;;;;CAAA;AAtBE;ECGF;IACoB,UAAA;EAKlB;AACF;ADJE;ECHF;IAEmB,WAAA;EASjB;AACF;;AARA;EAAU,kBAAA;AAYV;;AAXA;EAAU,YAAA;EAAY,wBAAA;AAgBtB;;AAfA;EACE,UAAA;EACA,qBAAA;EACA,iBAAA;EACA,wCAAA;EACA,sBAAA;EACA,yEAAA;UAAA,iEAAA;AAkBF;;AAfA;EAjBqB,aDcP;ECd2B,mBAAA;EAAqB,iBAiB5C;AAqBlB;;AApBA;EAlBqB,aDcP;ECd2B,mBAAA;EAAqB,kBAkB5C;AA0BlB;;AAzBA;EACE,qCAAA;EAAA,6BAAA;EACA,8BAAA;AA4BF;AA3BE;EACE,8BAAA;AA6BJ;;AA1BA;EACE,UAAA;EACA,uEAAA;UAAA,+DAAA;AA6BF;;AA3BA;EACE;IAAM,uBAAA;EA+BN;EA9BA;IAAI,uBAAA;EAiCJ;AACF;;AApCA;EACE;IAAM,uBAAA;EA+BN;EA9BA;IAAI,uBAAA;EAiCJ;AACF;AAhCA;EACE;IAAI,UAAA;EAmCJ;AACF;AArCA;EACE;IAAI,UAAA;EAmCJ;AACF\",\"sourcesContent\":[\"@mixin desktop {\\n  @media screen and (min-width: 992px) {\\n    @content;\\n  }\\n}\\n\\n@mixin mobile {\\n  @media screen and (max-width: 992px) {\\n    @content;\\n  }\\n}\\n\\n/* COLORS */\\n$scroll_bar: 15px;\\n$c_light_blue: rgb(125,214,246);\\n$c_medium_blue: rgb(27, 167, 236);\\n$c_dark_blue: rgb(30, 57, 152);\\n$c_teal: rgb(88, 222, 222);\\n$c_grey: rgb(215, 216, 214);\\n$c_purple: rgb(121, 126, 246);\\n$c_white: rgb(242, 242, 242);\\n$c_black: rgb(0, 0, 0);\\n\\n/*\\nPOSITIONING\\nBOX MODEL\\nTYPOGRAPHY\\nVISUAL\\n*/\",\"@import \\\"../../../styles/utils.scss\\\";\\n\\n@mixin text ($size) {fill: $c_dark_blue; text-anchor: middle; font-size: $size;}\\n\\n.svg {\\n  @include desktop {width: 75%;}\\n  @include mobile {width: 100%;}\\n}\\n.isolate {isolation:isolate;}\\n.shadows {opacity:0.3;mix-blend-mode:multiply;}\\n.circle {\\n  fill:none;\\n  stroke-miterlimit:10;\\n  stroke-width:3px;\\n  stroke:url(#challenges-circle-gradient);\\n  stroke-dasharray: 1335;\\n  animation: draw-circle 3s linear forwards;\\n}\\n\\n.h {@include text(1.5rem);}\\n.p {@include text(.75rem);}\\n.button {\\n  transition: all 0.5s ease-out;\\n  fill: rgba(255, 255, 255, 0.2);\\n  &.selected {\\n    fill: rgba(86, 222, 222, 0.75)\\n  }\\n}\\n.description {\\n  opacity: 0;\\n  animation: fade-in 1s ease-out forwards;\\n}\\n@keyframes draw-circle {\\n  from {stroke-dashoffset: 1335;}\\n  to {stroke-dashoffset: 2670;}\\n}\\n@keyframes fade-in {\\n  to {opacity: 1;}\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"svg\": \"ChallengesCircle_svg__1TGwn\",\n\t\"isolate\": \"ChallengesCircle_isolate__33g1Y\",\n\t\"shadows\": \"ChallengesCircle_shadows__3Wrsf\",\n\t\"circle\": \"ChallengesCircle_circle__2Uoyb\",\n\t\"draw-circle\": \"ChallengesCircle_draw-circle__144mm\",\n\t\"h\": \"ChallengesCircle_h__3PD9r\",\n\t\"p\": \"ChallengesCircle_p__1DGi5\",\n\t\"button\": \"ChallengesCircle_button__2q1DT\",\n\t\"selected\": \"ChallengesCircle_selected__3wzI8\",\n\t\"description\": \"ChallengesCircle_description__1dMh_\",\n\t\"fade-in\": \"ChallengesCircle_fade-in__1wH3w\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9zdHlsZXMvQ2hhbGxlbmdlc0NpcmNsZS5tb2R1bGUuc2Nzcz80YmM4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMkdBQXNEO0FBQ2hHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUywyR0FBMkcsa0NBQWtDLGlCQUFpQixLQUFLLEdBQUcsd0NBQXdDLGtDQUFrQyxrQkFBa0IsS0FBSyxHQUFHLHNDQUFzQyx1QkFBdUIsR0FBRyxzQ0FBc0MsaUJBQWlCLDZCQUE2QixHQUFHLHFDQUFxQyxlQUFlLDBCQUEwQixzQkFBc0IsNkNBQTZDLDJCQUEyQiw4RUFBOEUsOEVBQThFLEdBQUcsZ0NBQWdDLGtCQUFrQix3QkFBd0Isc0JBQXNCLEdBQUcsZ0NBQWdDLGtCQUFrQix3QkFBd0IsdUJBQXVCLEdBQUcscUNBQXFDLDBDQUEwQyxrQ0FBa0MsbUNBQW1DLEdBQUcsb0VBQW9FLG1DQUFtQyxHQUFHLDBDQUEwQyxlQUFlLDRFQUE0RSw0RUFBNEUsR0FBRyw0REFBNEQsVUFBVSw4QkFBOEIsS0FBSyxRQUFRLDhCQUE4QixLQUFLLEdBQUcsb0RBQW9ELFVBQVUsOEJBQThCLEtBQUssUUFBUSw4QkFBOEIsS0FBSyxHQUFHLHNEQUFzRCxRQUFRLGlCQUFpQixLQUFLLEdBQUcsOENBQThDLFFBQVEsaUJBQWlCLEtBQUssR0FBRyxPQUFPLHlJQUF5SSxTQUFTLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLEtBQUssS0FBSyxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxRQUFRLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLEtBQUssWUFBWSxZQUFZLGNBQWMsUUFBUSxNQUFNLFlBQVksWUFBWSxjQUFjLFFBQVEsTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLHlDQUF5QywwQ0FBMEMsZUFBZSxLQUFLLEdBQUcsbUJBQW1CLDBDQUEwQyxlQUFlLEtBQUssR0FBRyxvQ0FBb0Msa0NBQWtDLG9DQUFvQyxpQ0FBaUMsNkJBQTZCLDhCQUE4QixnQ0FBZ0MsK0JBQStCLHlCQUF5QixnR0FBZ0cseUJBQXlCLG1CQUFtQixxQkFBcUIsbUJBQW1CLFVBQVUsc0JBQXNCLFlBQVkscUJBQXFCLGFBQWEsR0FBRyxZQUFZLG1CQUFtQixZQUFZLFlBQVkseUJBQXlCLFdBQVcsY0FBYyx5QkFBeUIscUJBQXFCLDRDQUE0QywyQkFBMkIsOENBQThDLEdBQUcsUUFBUSx1QkFBdUIsTUFBTSx1QkFBdUIsV0FBVyxrQ0FBa0MsbUNBQW1DLGdCQUFnQix5Q0FBeUMsR0FBRyxnQkFBZ0IsZUFBZSw0Q0FBNEMsR0FBRywwQkFBMEIsVUFBVSx5QkFBeUIsUUFBUSx5QkFBeUIsR0FBRyxzQkFBc0IsUUFBUSxZQUFZLEdBQUcsbUJBQW1CO0FBQ3ZoSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9wYWdlcy9jb21wb25lbnRzL3N0eWxlcy9DaGFsbGVuZ2VzQ2lyY2xlLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogQ09MT1JTICovXFxuLypcXG5QT1NJVElPTklOR1xcbkJPWCBNT0RFTFxcblRZUE9HUkFQSFlcXG5WSVNVQUxcXG4qL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAuQ2hhbGxlbmdlc0NpcmNsZV9zdmdfXzFUR3duIHtcXG4gICAgd2lkdGg6IDc1JTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcXG4gIC5DaGFsbGVuZ2VzQ2lyY2xlX3N2Z19fMVRHd24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXFxuLkNoYWxsZW5nZXNDaXJjbGVfaXNvbGF0ZV9fMzNnMVkge1xcbiAgaXNvbGF0aW9uOiBpc29sYXRlO1xcbn1cXG5cXG4uQ2hhbGxlbmdlc0NpcmNsZV9zaGFkb3dzX18zV3JzZiB7XFxuICBvcGFjaXR5OiAwLjM7XFxuICBtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7XFxufVxcblxcbi5DaGFsbGVuZ2VzQ2lyY2xlX2NpcmNsZV9fMlVveWIge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZS1taXRlcmxpbWl0OiAxMDtcXG4gIHN0cm9rZS13aWR0aDogM3B4O1xcbiAgc3Ryb2tlOiB1cmwoI2NoYWxsZW5nZXMtY2lyY2xlLWdyYWRpZW50KTtcXG4gIHN0cm9rZS1kYXNoYXJyYXk6IDEzMzU7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogQ2hhbGxlbmdlc0NpcmNsZV9kcmF3LWNpcmNsZV9fMTQ0bW0gM3MgbGluZWFyIGZvcndhcmRzO1xcbiAgICAgICAgICBhbmltYXRpb246IENoYWxsZW5nZXNDaXJjbGVfZHJhdy1jaXJjbGVfXzE0NG1tIDNzIGxpbmVhciBmb3J3YXJkcztcXG59XFxuXFxuLkNoYWxsZW5nZXNDaXJjbGVfaF9fM1BEOXIge1xcbiAgZmlsbDogIzFlMzk5ODtcXG4gIHRleHQtYW5jaG9yOiBtaWRkbGU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLkNoYWxsZW5nZXNDaXJjbGVfcF9fMURHaTUge1xcbiAgZmlsbDogIzFlMzk5ODtcXG4gIHRleHQtYW5jaG9yOiBtaWRkbGU7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxufVxcblxcbi5DaGFsbGVuZ2VzQ2lyY2xlX2J1dHRvbl9fMnExRFQge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0O1xcbiAgZmlsbDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbn1cXG4uQ2hhbGxlbmdlc0NpcmNsZV9idXR0b25fXzJxMURULkNoYWxsZW5nZXNDaXJjbGVfc2VsZWN0ZWRfXzN3ekk4IHtcXG4gIGZpbGw6IHJnYmEoODYsIDIyMiwgMjIyLCAwLjc1KTtcXG59XFxuXFxuLkNoYWxsZW5nZXNDaXJjbGVfZGVzY3JpcHRpb25fXzFkTWhfIHtcXG4gIG9wYWNpdHk6IDA7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogQ2hhbGxlbmdlc0NpcmNsZV9mYWRlLWluX18xd0gzdyAxcyBlYXNlLW91dCBmb3J3YXJkcztcXG4gICAgICAgICAgYW5pbWF0aW9uOiBDaGFsbGVuZ2VzQ2lyY2xlX2ZhZGUtaW5fXzF3SDN3IDFzIGVhc2Utb3V0IGZvcndhcmRzO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgQ2hhbGxlbmdlc0NpcmNsZV9kcmF3LWNpcmNsZV9fMTQ0bW0ge1xcbiAgZnJvbSB7XFxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxMzM1O1xcbiAgfVxcbiAgdG8ge1xcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMjY3MDtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBDaGFsbGVuZ2VzQ2lyY2xlX2RyYXctY2lyY2xlX18xNDRtbSB7XFxuICBmcm9tIHtcXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDEzMzU7XFxuICB9XFxuICB0byB7XFxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAyNjcwO1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgQ2hhbGxlbmdlc0NpcmNsZV9mYWRlLWluX18xd0gzdyB7XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgQ2hhbGxlbmdlc0NpcmNsZV9mYWRlLWluX18xd0gzdyB7XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uLi8uLi8uLi9zdHlsZXMvdXRpbHMuc2Nzc1wiLFwid2VicGFjazovL0NoYWxsZW5nZXNDaXJjbGUubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBWUEsV0FBQTtBQVdBOzs7OztDQUFBO0FBdEJFO0VDR0Y7SUFDb0IsVUFBQTtFQUtsQjtBQUNGO0FESkU7RUNIRjtJQUVtQixXQUFBO0VBU2pCO0FBQ0Y7O0FBUkE7RUFBVSxrQkFBQTtBQVlWOztBQVhBO0VBQVUsWUFBQTtFQUFZLHdCQUFBO0FBZ0J0Qjs7QUFmQTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxzQkFBQTtFQUNBLHlFQUFBO1VBQUEsaUVBQUE7QUFrQkY7O0FBZkE7RUFqQnFCLGFEY1A7RUNkMkIsbUJBQUE7RUFBcUIsaUJBaUI1QztBQXFCbEI7O0FBcEJBO0VBbEJxQixhRGNQO0VDZDJCLG1CQUFBO0VBQXFCLGtCQWtCNUM7QUEwQmxCOztBQXpCQTtFQUNFLHFDQUFBO0VBQUEsNkJBQUE7RUFDQSw4QkFBQTtBQTRCRjtBQTNCRTtFQUNFLDhCQUFBO0FBNkJKOztBQTFCQTtFQUNFLFVBQUE7RUFDQSx1RUFBQTtVQUFBLCtEQUFBO0FBNkJGOztBQTNCQTtFQUNFO0lBQU0sdUJBQUE7RUErQk47RUE5QkE7SUFBSSx1QkFBQTtFQWlDSjtBQUNGOztBQXBDQTtFQUNFO0lBQU0sdUJBQUE7RUErQk47RUE5QkE7SUFBSSx1QkFBQTtFQWlDSjtBQUNGO0FBaENBO0VBQ0U7SUFBSSxVQUFBO0VBbUNKO0FBQ0Y7QUFyQ0E7RUFDRTtJQUFJLFVBQUE7RUFtQ0o7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWl4aW4gZGVza3RvcCB7XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuQG1peGluIG1vYmlsZSB7XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuLyogQ09MT1JTICovXFxuJHNjcm9sbF9iYXI6IDE1cHg7XFxuJGNfbGlnaHRfYmx1ZTogcmdiKDEyNSwyMTQsMjQ2KTtcXG4kY19tZWRpdW1fYmx1ZTogcmdiKDI3LCAxNjcsIDIzNik7XFxuJGNfZGFya19ibHVlOiByZ2IoMzAsIDU3LCAxNTIpO1xcbiRjX3RlYWw6IHJnYig4OCwgMjIyLCAyMjIpO1xcbiRjX2dyZXk6IHJnYigyMTUsIDIxNiwgMjE0KTtcXG4kY19wdXJwbGU6IHJnYigxMjEsIDEyNiwgMjQ2KTtcXG4kY193aGl0ZTogcmdiKDI0MiwgMjQyLCAyNDIpO1xcbiRjX2JsYWNrOiByZ2IoMCwgMCwgMCk7XFxuXFxuLypcXG5QT1NJVElPTklOR1xcbkJPWCBNT0RFTFxcblRZUE9HUkFQSFlcXG5WSVNVQUxcXG4qL1wiLFwiQGltcG9ydCBcXFwiLi4vLi4vLi4vc3R5bGVzL3V0aWxzLnNjc3NcXFwiO1xcblxcbkBtaXhpbiB0ZXh0ICgkc2l6ZSkge2ZpbGw6ICRjX2RhcmtfYmx1ZTsgdGV4dC1hbmNob3I6IG1pZGRsZTsgZm9udC1zaXplOiAkc2l6ZTt9XFxuXFxuLnN2ZyB7XFxuICBAaW5jbHVkZSBkZXNrdG9wIHt3aWR0aDogNzUlO31cXG4gIEBpbmNsdWRlIG1vYmlsZSB7d2lkdGg6IDEwMCU7fVxcbn1cXG4uaXNvbGF0ZSB7aXNvbGF0aW9uOmlzb2xhdGU7fVxcbi5zaGFkb3dzIHtvcGFjaXR5OjAuMzttaXgtYmxlbmQtbW9kZTptdWx0aXBseTt9XFxuLmNpcmNsZSB7XFxuICBmaWxsOm5vbmU7XFxuICBzdHJva2UtbWl0ZXJsaW1pdDoxMDtcXG4gIHN0cm9rZS13aWR0aDozcHg7XFxuICBzdHJva2U6dXJsKCNjaGFsbGVuZ2VzLWNpcmNsZS1ncmFkaWVudCk7XFxuICBzdHJva2UtZGFzaGFycmF5OiAxMzM1O1xcbiAgYW5pbWF0aW9uOiBkcmF3LWNpcmNsZSAzcyBsaW5lYXIgZm9yd2FyZHM7XFxufVxcblxcbi5oIHtAaW5jbHVkZSB0ZXh0KDEuNXJlbSk7fVxcbi5wIHtAaW5jbHVkZSB0ZXh0KC43NXJlbSk7fVxcbi5idXR0b24ge1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQ7XFxuICBmaWxsOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuICAmLnNlbGVjdGVkIHtcXG4gICAgZmlsbDogcmdiYSg4NiwgMjIyLCAyMjIsIDAuNzUpXFxuICB9XFxufVxcbi5kZXNjcmlwdGlvbiB7XFxuICBvcGFjaXR5OiAwO1xcbiAgYW5pbWF0aW9uOiBmYWRlLWluIDFzIGVhc2Utb3V0IGZvcndhcmRzO1xcbn1cXG5Aa2V5ZnJhbWVzIGRyYXctY2lyY2xlIHtcXG4gIGZyb20ge3N0cm9rZS1kYXNob2Zmc2V0OiAxMzM1O31cXG4gIHRvIHtzdHJva2UtZGFzaG9mZnNldDogMjY3MDt9XFxufVxcbkBrZXlmcmFtZXMgZmFkZS1pbiB7XFxuICB0byB7b3BhY2l0eTogMTt9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInN2Z1wiOiBcIkNoYWxsZW5nZXNDaXJjbGVfc3ZnX18xVEd3blwiLFxuXHRcImlzb2xhdGVcIjogXCJDaGFsbGVuZ2VzQ2lyY2xlX2lzb2xhdGVfXzMzZzFZXCIsXG5cdFwic2hhZG93c1wiOiBcIkNoYWxsZW5nZXNDaXJjbGVfc2hhZG93c19fM1dyc2ZcIixcblx0XCJjaXJjbGVcIjogXCJDaGFsbGVuZ2VzQ2lyY2xlX2NpcmNsZV9fMlVveWJcIixcblx0XCJkcmF3LWNpcmNsZVwiOiBcIkNoYWxsZW5nZXNDaXJjbGVfZHJhdy1jaXJjbGVfXzE0NG1tXCIsXG5cdFwiaFwiOiBcIkNoYWxsZW5nZXNDaXJjbGVfaF9fM1BEOXJcIixcblx0XCJwXCI6IFwiQ2hhbGxlbmdlc0NpcmNsZV9wX18xREdpNVwiLFxuXHRcImJ1dHRvblwiOiBcIkNoYWxsZW5nZXNDaXJjbGVfYnV0dG9uX18ycTFEVFwiLFxuXHRcInNlbGVjdGVkXCI6IFwiQ2hhbGxlbmdlc0NpcmNsZV9zZWxlY3RlZF9fM3d6SThcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkNoYWxsZW5nZXNDaXJjbGVfZGVzY3JpcHRpb25fXzFkTWhfXCIsXG5cdFwiZmFkZS1pblwiOiBcIkNoYWxsZW5nZXNDaXJjbGVfZmFkZS1pbl9fMXdIM3dcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/components/styles/ChallengesCircle.module.scss\n");

/***/ })

})