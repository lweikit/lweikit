_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[31],{"+QeF":function(e,t,i){e.exports={"section-four":"SectionFour_section-four__2L0cr",underline:"SectionFour_underline__1spQh","bg-left":"SectionFour_bg-left__3GOzD","bg-right":"SectionFour_bg-right__5sKKq",hidden:"SectionFour_hidden__3pkGQ","seq1-bg":"SectionFour_seq1-bg__D_juv","fade-in":"SectionFour_fade-in__10dal","blend-in":"SectionFour_blend-in__3ACIQ","seq2-h":"SectionFour_seq2-h__11IVq","seq3-p":"SectionFour_seq3-p__2qzxB","seq4-video":"SectionFour_seq4-video__3c-Sg","quote-open":"SectionFour_quote-open__19rYw","quote-description":"SectionFour_quote-description__PmOjC","quote-line":"SectionFour_quote-line__e8FHS","quote-by":"SectionFour_quote-by__3-HM_",bg:"SectionFour_bg__3Jzfb"}},AbdV:function(e,t,i){e.exports={svg:"LumadaSolutions_svg__25Ts7",bold:"LumadaSolutions_bold__1u65n"}},F7Im:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return u}));var a=i("q1tI"),n=i.n(a),s=i("ok1R"),o=i("rhny"),r=i("AbdV"),c=i.n(r),l=n.a.createElement;function u(){return l(s.a,null,l(o.a,{xs:{size:12},lg:{size:4}},l("object",{className:c.a.svg,type:"image/svg+xml",data:"svg/increase-productivity.svg"}),l("h4",{className:c.a.bold},"Increase Manufacturing Productivity"),l("p",null,"Analyse data collected from manufacturing sites to optimise factory operations.")),l(o.a,{xs:{size:12},lg:{size:4}},l("object",{className:c.a.svg,type:"image/svg+xml",data:"svg/optimise-logistics.svg"}),l("h4",{className:c.a.bold},"Optimise Logistics with Data Analytics"),l("p",null,"Analyse traffic congestion, storage and delivery locations to enable smart routing to save miles and deliver faster.")),l(o.a,{xs:{size:12},lg:{size:4}},l("object",{className:c.a.svg,type:"image/svg+xml",data:"svg/predictive-maintenance.svg"}),l("h4",{className:c.a.bold},"Predictive Maintenance and Remote Assist"),l("p",null,"Deploy predictive maintenance, real-time remote assistance and remote training for first-line workers, using HoloLens 2.")))}},Gytx:function(e,t){e.exports=function(e,t,i,a){var n=i?i.call(a,e,t):void 0;if(void 0!==n)return!!n;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var s=Object.keys(e),o=Object.keys(t);if(s.length!==o.length)return!1;for(var r=Object.prototype.hasOwnProperty.bind(t),c=0;c<s.length;c++){var l=s[c];if(!r(l))return!1;var u=e[l],d=t[l];if(!1===(n=i?i.call(a,u,d,l):void 0)||void 0===n&&u!==d)return!1}return!0}},YVcj:function(e,t,i){"use strict";t.__esModule=!0,t.default=void 0;var a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,i):{};a.get||a.set?Object.defineProperty(t,i,a):t[i]=e[i]}return t.default=e,t}(i("q1tI")),n=r(i("17x9")),s=r(i("hKI/")),o=r(i("Gytx"));function r(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}var l=function(e){var t,i;function n(t){var i;return(i=e.call(this,t)||this).isVisible=function(e,t,a){var n=e.top,s=e.left,o=e.bottom,r=e.right,c=e.width,l=e.height,u=i.props,d=u.offset,f=u.partialVisibility;if(n+r+o+s===0)return!1;var h=0-d,p=0-d,m=t+d,v=a+d;return f?n+l>=h&&s+c>=p&&o-l<=v&&r-c<=m:n>=h&&s>=p&&o<=v&&r<=m},i.isComponentVisible=function(){setTimeout((function(){if(i.nodeRef&&i.nodeRef.getBoundingClientRect){var e=document.documentElement,t=i.props.once,a=i.nodeRef.getBoundingClientRect(),n=window.innerWidth||e.clientWidth,s=window.innerHeight||e.clientHeight,o=i.isVisible(a,n,s);o&&t&&i.removeListener(),i.setState({isVisible:o})}}),0)},i.setNodeRef=function(e){return i.nodeRef=e},i.ownProps=Object.keys(n.propTypes),i.state={isVisible:!1},i.throttleCb=(0,s.default)(i.isComponentVisible,i.props.throttleInterval),t.nodeRef&&i.setNodeRef(t.nodeRef),i}i=e,(t=n).prototype=Object.create(i.prototype),t.prototype.constructor=t,t.__proto__=i;var r=n.prototype;return r.componentDidMount=function(){this.attachListener(),this.isComponentVisible()},r.componentDidUpdate=function(e){(0,o.default)(this.getChildProps(this.props),this.getChildProps(e))||this.isComponentVisible()},r.componentWillUnmount=function(){this.removeListener()},r.attachListener=function(){window.addEventListener("scroll",this.throttleCb),window.addEventListener("resize",this.throttleCb)},r.removeListener=function(){window.removeEventListener("scroll",this.throttleCb),window.removeEventListener("resize",this.throttleCb)},r.getChildProps=function(e){var t=this;void 0===e&&(e=this.props);var i={};return Object.keys(e).forEach((function(a){-1===t.ownProps.indexOf(a)&&(i[a]=e[a])})),i},r.getChildren=function(){var e=this;return"function"===typeof this.props.children?this.props.children(c({},this.getChildProps(),{isVisible:this.state.isVisible})):a.default.Children.map(this.props.children,(function(t){return a.default.cloneElement(t,c({},e.getChildProps(),{isVisible:e.state.isVisible}))}))},r.render=function(){var e=this.props,t=e.className,i=e.style,n=e.nodeRef,s=e.tag,o=c({},t&&{className:t},i&&{style:i});return a.default.createElement(s,c({ref:!n&&this.setNodeRef},o),this.getChildren())},n}(a.PureComponent);t.default=l,l.propTypes={once:n.default.bool,throttleInterval:function(e,t,i){var a=e[t];return!Number.isInteger(a)||a<0?new Error("The "+t+" prop you provided to "+i+" is not a valid integer >= 0."):null},children:n.default.oneOfType([n.default.func,n.default.element,n.default.arrayOf(n.default.element)]),style:n.default.object,className:n.default.string,offset:n.default.number,partialVisibility:n.default.bool,nodeRef:n.default.object,tag:n.default.string},l.defaultProps={once:!1,throttleInterval:150,offset:0,partialVisibility:!1,tag:"div"}},ehN7:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sections/SectionFour",function(){return i("qrlJ")}])},ok1R:function(e,t,i){"use strict";var a=i("wx14"),n=i("zLVn"),s=i("q1tI"),o=i.n(s),r=i("17x9"),c=i.n(r),l=i("TSYQ"),u=i.n(l),d=i("33Jr"),f=c.a.oneOfType([c.a.number,c.a.string]),h={tag:d.h,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:f,sm:f,md:f,lg:f,xl:f},p={tag:"div",widths:["xs","sm","md","lg","xl"]},m=function(e){var t=e.className,i=e.cssModule,s=e.noGutters,r=e.tag,c=e.form,l=e.widths,f=Object(n.a)(e,["className","cssModule","noGutters","tag","form","widths"]),h=[];l.forEach((function(t,i){var a=e[t];if(delete f[t],a){var n=!i;h.push(n?"row-cols-"+a:"row-cols-"+t+"-"+a)}}));var p=Object(d.e)(u()(t,s?"no-gutters":null,c?"form-row":"row",h),i);return o.a.createElement(r,Object(a.a)({},f,{className:p}))};m.propTypes=h,m.defaultProps=p,t.a=m},qrlJ:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return d}));var a=i("q1tI"),n=i.n(a),s=i("xyb1"),o=i.n(s),r=i("F7Im"),c=i("+QeF"),l=i.n(c),u=n.a.createElement;function d(){return u("div",{id:"section-four",className:"section ".concat(l.a["section-four"])},u(o.a,{once:!0},(function(e){var t=e.isVisible,i="".concat(l.a.hidden," ").concat(t&&l.a["seq1-bg"]," ").concat(l.a["bg-left"]),a="".concat(l.a.hidden," ").concat(t&&l.a["seq1-bg"]," ").concat(l.a["bg-right"]),n="".concat(l.a.hidden," ").concat(t&&l.a["seq2-h"]),s="".concat(l.a.hidden," ").concat(t&&l.a["seq3-p"]),o="".concat(l.a.hidden," ").concat(t&&l.a["seq4-video"]," video-container");return u("div",null,u("img",{src:"img/s4-bgl.svg",className:i}),u("img",{src:"img/s4-bgr.svg",className:a}),u("div",{className:n},u("h2",null,"Building smart factories with"),u("div",{className:l.a.underline}),u("h1",null,"HITACHI'S LUMADA")),u("div",{className:s},u("div",{className:"space-div"}),u("p",null,"With a firm belief in the ASEAN's manufacturing future, Hitachi has taken the first step to set up Lumada Centre, in Thailand in 2018. Serving as a digital services hub, Lumada aims to equip Southeast Asian companies with IoT capabilities, big data analytics as they move up the Industry 4.0 ladder."),u("div",{className:"space-div"})),u("div",{className:o}))})),u("div",{className:"space-div"}),u("div",null,u("img",{src:"img/lumada.svg",width:"200",height:"100"})),u("p",null,"Lumada is an IoT platform that allows you and Hitachi to co-create customized digital solutions to suit your business needs. It offers access to Hitachi's advanced technologies through the analysis of your data, which is then used to add value to your business operations through the implementation of big data analytics and artificial intelligence."),u("p",null,"Having worked closely with manufacturers, Hitachi understands that talking about smart factories and data analytics can sound intimidating at first. However, many manufacturers become more receptive after learning how new technologies help to lower costs, raise productivity and ultimately, increase their profits."),u("div",{className:"space-div"}),u("div",{className:l.a["quote-open"]},"\u201c"),u("div",{className:l.a["quote-description"]},"\u201cModern AI and machine learning allow manufacturers to work with real-time data from individual components for targeted maintenance. Manufacturers can avoid unnecessary maintenance and pre-empt problems associated with unplanned downtime.\u201d"),u("div",{className:l.a["quote-line"]}),u("div",{className:l.a["quote-by"]},"HITACHI EXECUTIVE"),u("div",{className:"space-div"}),u("p",null,"Besides enabling smart factories, Hitachi also aims to elevate the logistics sector by incorporating smart technologies across the entire logistics and delivery network."),u("div",{className:"space-div"}),u("div",{className:"space-div"}),u("h3",null,"In 2019, Hitachi rolled out a sharing service for commercial vehicles in Thailand."),u("p",null,"With this service, business owners can benefit from the efficient use of out-of-service vehicles across their fleet and perform joint deliveries for cargoes with close-proximity end destinations."),u("img",{src:"img/s4-bg.jpg",className:"bg ".concat(l.a.bg)}),u("div",{className:"video-container"}),u("div",{className:"space-div"}),u("div",{className:"space-div"}),u("h3",null,"Not one to stand still, Hitachi is evolving Lumada's capabilities further through research partnerships."),u("p",null,"Through research partnerships with tech giants such as Toyota and Microsoft, Hitachi is able to offer solutions to manufacturers in three areas."),u(r.default,null))}},rhny:function(e,t,i){"use strict";var a=i("wx14"),n=i("zLVn"),s=i("q1tI"),o=i.n(s),r=i("17x9"),c=i.n(r),l=i("TSYQ"),u=i.n(l),d=i("33Jr"),f=c.a.oneOfType([c.a.number,c.a.string]),h=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:f,offset:f})]),p={tag:d.h,xs:h,sm:h,md:h,lg:h,xl:h,className:c.a.string,cssModule:c.a.object,widths:c.a.array},m={tag:"div",widths:["xs","sm","md","lg","xl"]},v=function(e,t,i){return!0===i||""===i?e?"col":"col-"+t:"auto"===i?e?"col-auto":"col-"+t+"-auto":e?"col-"+i:"col-"+t+"-"+i},g=function(e){var t=e.className,i=e.cssModule,s=e.widths,r=e.tag,c=Object(n.a)(e,["className","cssModule","widths","tag"]),l=[];s.forEach((function(t,a){var n=e[t];if(delete c[t],n||""===n){var s=!a;if(Object(d.d)(n)){var o,r=s?"-":"-"+t+"-",f=v(s,t,n.size);l.push(Object(d.e)(u()(((o={})[f]=n.size||""===n.size,o["order"+r+n.order]=n.order||0===n.order,o["offset"+r+n.offset]=n.offset||0===n.offset,o)),i))}else{var h=v(s,t,n);l.push(h)}}})),l.length||l.push("col");var f=Object(d.e)(u()(t,l),i);return o.a.createElement(r,Object(a.a)({},c,{className:f}))};g.propTypes=p,g.defaultProps=m,t.a=g},xyb1:function(e,t,i){"use strict";var a;t.__esModule=!0,t.default=void 0;var n=((a=i("YVcj"))&&a.__esModule?a:{default:a}).default;t.default=n}},[["ehN7",0,1,2]]]);