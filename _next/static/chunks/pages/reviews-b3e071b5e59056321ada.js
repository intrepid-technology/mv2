(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5929],{23398:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var a=((n=r(67294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=a},76393:function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var n,a=(n=r(67294))&&n.__esModule?n:{default:n},o=r(23398);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,a=void 0!==n&&n,o=e.hasQuery,i=void 0!==o&&o;return r||a&&i}},92775:function(e,t,r){"use strict";var n=r(61682);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.__esModule=!0,t.defaultHead=l,t.default=void 0;var o,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r(67294)),u=(o=r(73244))&&o.__esModule?o:{default:o},s=r(23398),c=r(41165),f=r(76393);function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var m=["name","httpEquiv","charSet","itemProp"];function v(e,t){return e.reduce((function(e,t){var r=i.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(p,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(a){var o=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var u=a.key.slice(a.key.indexOf("$")+1);e.has(u)?o=!1:e.add(u)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var s=0,c=m.length;s<c;s++){var f=m[s];if(a.props.hasOwnProperty(f))if("charSet"===f)r.has(f)?o=!1:r.add(f);else{var d=a.props[f],l=n[f]||new Set;"name"===f&&i||!l.has(d)?(l.add(d),n[f]=l):o=!1}}}return o}}()).reverse().map((function(e,r){var o=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var u=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return u["data-href"]=u.href,u.href=void 0,u["data-optimized-fonts"]=!0,i.default.cloneElement(e,u)}return i.default.cloneElement(e,{key:o})}))}var h=function(e){var t=e.children,r=(0,i.useContext)(s.AmpStateContext),n=(0,i.useContext)(c.HeadManagerContext);return i.default.createElement(u.default,{reduceComponentsToState:v,headManager:n,inAmpMode:(0,f.isInAmpMode)(r)},t)};t.default=h},73244:function(e,t,r){"use strict";var n=r(83115),a=r(2553),o=r(62012),i=(r(50450),r(9807)),u=r(27690),s=r(99828);function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=s(e);if(t){var a=s(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return u(this,r)}}t.__esModule=!0,t.default=void 0;var f=r(67294),d=function(e){i(r,e);var t=c(r);function r(e){var o;return a(this,r),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(n(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(f.Component);t.default=d},73754:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var n=r(85893),a=r(67294),o=r(19459),i=r(59999),u=r(9008),s=r(56437),c=(r(92974),r(67912)),f=r(94634),d=new Array,l=new Array;var p={root:["root","freeBox","text"],freeBox:["freeBox","text"],text:["text"]};function m(e){var t=function(t){var r=(0,s.xf)(t,{name:e,descendantNames:(0,i.Z)(p[e]),internalArgPropNames:l,internalVariantPropNames:d});return function(e){e.variants,e.args;var t=e.overrides,r=e.forNode;return(0,s.eh)(a.Fragment,null,(0,s.eh)(u.default,null,(0,s.eh)("meta",{name:"twitter:card",content:"summary"})),(0,s.eh)("style",null,"\n        body {\n          margin: 0;\n        }\n      "),(0,s.eh)("div",{className:c.plasmic_page_wrapper},(0,s.eh)("div",{"data-plasmic-name":"root","data-plasmic-override":t.root,"data-plasmic-root":!0,"data-plasmic-for-node":r,className:(0,s.AK)(c.all,c.root_reset,f.root)},(0,s.eh)("div",{"data-plasmic-name":"freeBox","data-plasmic-override":t.freeBox,className:(0,s.AK)(c.all,f.freeBox)},(0,s.eh)("div",{"data-plasmic-name":"text","data-plasmic-override":t.text,className:(0,s.AK)(c.all,c.__wab_text,f.text)},"Reviews Coming Soon!")))))}({variants:r.variants,args:r.args,overrides:r.overrides,forNode:e})};return t.displayName="root"===e?"PlasmicReviews":"PlasmicReviews.".concat(e),t}var v=Object.assign(m("root"),{freeBox:m("freeBox"),text:m("text"),internalVariantProps:d,internalArgProps:l});var h=function(){return(0,n.jsx)(o.VY.Provider,{value:void 0,children:(0,n.jsx)(v,{})})}},5120:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reviews",function(){return r(73754)}])},94634:function(e){e.exports={root:"PlasmicReviews_root__aPjxl",freeBox:"PlasmicReviews_freeBox__1aFfg",text:"PlasmicReviews_text__2HOD4"}},9008:function(e,t,r){e.exports=r(92775)},38164:function(e,t,r){var n=r(54360);e.exports=function(e){if(Array.isArray(e))return n(e)}},61682:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},27381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},95725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},83115:function(e,t,r){var n=r(38164),a=r(27381),o=r(73585),i=r(95725);e.exports=function(e){return n(e)||a(e)||o(e)||i()}}},function(e){e.O(0,[9774,2888,179],(function(){return t=5120,e(e.s=t);var t}));var t=e.O();_N_E=t}]);