(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[8710],{81593:(t,e,r)=>{"use strict";r.d(e,{Z:()=>f});var n=r(67294),o=r(45338);function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t){return function(t){if(Array.isArray(t))return d(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||u(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i=[],a=!0,c=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(t){c=!0,o=t}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}}(t,e)||u(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){if(t){if("string"==typeof t)return d(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(t,e):void 0}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}const f=function(t){var e=t.direction,r=void 0===e?"horizontal":e,i=t.deltaScroll,u=t.width,d=t.height,f=t.transition,p=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],m=(0,n.useState)(0),v=l(m,2),y=v[0],g=v[1],h=(0,n.useState)(0),b=l(h,2),w=b[0],S=b[1],O=(0,n.useRef)({x:0,y:0}),C=(0,n.useState)(!1),E=l(C,2),P=E[0],j=E[1],I=(0,n.useState)("start"),k=l(I,2),x=k[0],T=k[1],D=(0,n.useState)(),N=l(D,2),A=N[0],R=N[1],M=(0,n.useRef)(),z=(0,n.useRef)({});function Z(t,e){R("move:start");var n=M.current,o=n.parentNode,i=n.getBoundingClientRect(),a=o.getBoundingClientRect();if("horizontal"===r){var c=t+i.width;t<0&&c>a.width?(g(t),O.current.x=t,T("center")):t>=0?(g(0),O.current.x=0,T("start")):c<=a.width&&(g(a.width-i.width),O.current.x=a.width-i.width,T("end"))}if("vertical"===r){var s=e+i.height;e<0&&s>a.height?(S(e),O.current.y=e,T("center")):e>=0?(S(0),O.current.y=0,T("start")):s<=a.height&&(S(a.height-i.height),O.current.y=a.height-i.height,T("end"))}setTimeout((function(){R("move:end")}),f)}function U(t){Z(y+t,w+t)}function B(){var t=M.current,e=t.parentNode,n=t.getBoundingClientRect(),o=e.getBoundingClientRect();return!("horizontal"===r&&o.width>=n.width||"vertical"===r&&o.height>=n.height)}(0,n.useEffect)((function(){function t(t){t.preventDefault();var e=B();return j(B()),e?Z(O.current.x-(t.deltaY>0?i:-i),O.current.y-(t.deltaY>0?i:-i)):null}var e=B();j(e);var r=M.current.parentNode;return e&&Z(O.current.x,O.current.y),e&&r&&r.addEventListener&&r.addEventListener("wheel",t),function(){e&&r&&r.removeEventListener&&r.removeEventListener("wheel",t)}}),[u,d].concat(s(p)));var _=(0,o.QS)({onSwiping:function(t){t.event.stopPropagation();var e=B();return j(B()),e?Z(y-t.deltaX*t.velocity,w-t.deltaY*t.velocity):null},trackTouch:!0,trackMouse:!0});function L(t,e){z.current=a(a({},z.current),{},c({},t,e))}function H(t){var e=z.current[t];if(e){var n=M.current,o=(n&&n.parentNode).getBoundingClientRect(),i=e.getBoundingClientRect();if("horizontal"===r){var a=o.width,c=o.left,s=i.width,l=i.left,u=c+a,d=l+s;return c<=l&&u>=l||c<=d&&u>=d}}return!1}function q(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.margin,o=void 0===n?0:n,i=z.current[t];if(i){var a=M.current,c=a&&a.parentNode,s=c.getBoundingClientRect(),l=i.getBoundingClientRect();if("horizontal"===r){var u=s.width,d=s.left,f=l.width,p=l.left,m=d+u,v=p+f,y=d<=p&&m>=v;if(!y){var g=a.getBoundingClientRect(),h=g.left;Z(-(p-h)+o,void 0)}}}}var F=P&&("end"===x||"center"===x),$=P&&("start"===x||"center"===x);return{status:A,canSwipe:P,isStartControlActive:F,isEndControlActive:$,positionLabel:x,coordinates:{x:y,y:w},containerPropsHandlers:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.style,r=void 0===e?{}:e;return a(a({},_),{},{style:a({position:"relative",overflow:"hidden",width:"100%",height:"100%"},r)})},contentPropsHandlers:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.style,n=void 0===e?{}:e;return{ref:M,style:a(a(a(a({position:"absolute",display:"flex"},f&&{transition:"transform ".concat(f,"ms ease 0s")}),{},{flexDirection:"horizontal"===r?"row":"column"},P&&"horizontal"===r&&{transform:"translateX(".concat(y,"px)")}),P&&"vertical"===r&&{transform:"translateY(".concat(w,"px)")}),n)}},itemPropsHandlers:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.id,r=t.onClick;return a({key:e,ref:function(t){return t&&L(e,t)}},r?{onClick:r,tabindex:H(e)?0:-1,onKeyDown:function(t){"Enter"===t.key&&r()}}:{tabindex:-1})},updateCoordinates:Z,moveItemInViewById:q,moveToDeltaSize:U}}},26538:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>K});var n=r(67294),o=r.n(n),i=r(33664),a=r(22222),c=r(22843),s=r(92579),l=r(66113),u=r(24684),d=r(66190),f=r(80717),p=r(57588),m=r(23279),v=r.n(m),y=r(81593),g=r(80628),h=r(82467);function b(){return b=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},b.apply(this,arguments)}var w=function(t){var e=t.tabindex,r=t.text,n=t.selected,i=t.style;return o().createElement(h.Z,{tabindex:e,className:"".concat(n?"active":"btn-tray"," btn-xs btn-default"),style:i},r)};const S=(0,g.Z)((function(t){var e=t.currentPage,r=t.items,i=t.scrollTo,a=void 0===i?function(){}:i,c=t.width,s=t.height,l=t.deltaSwipeSize,u=void 0===l?200:l,d=t.transition,f=void 0===d?300:d,m=t.updateTimeDebounceTime,g=void 0===m?500:m,S=t.getItemStyle,O=void 0===S?function(){return{}}:S,C=(0,y.Z)({direction:"horizontal",width:c,height:s,transition:f,deltaScroll:u}),E=C.isStartControlActive,P=C.isEndControlActive,j=C.containerPropsHandlers,I=C.contentPropsHandlers,k=C.itemPropsHandlers,x=C.moveToDeltaSize,T=C.moveItemInViewById,D=e&&e.columns&&e.sectionId&&e.columns[e.sectionId]||e&&e.sectionId,N=(0,n.useRef)(null);return(0,n.useEffect)((function(){return N.current=v()((function(t){T(t,{margin:32})}),g),function(){N.current&&(N.current.cancel(),N.current=null)}}),[]),(0,n.useEffect)((function(){N.current&&(N.current.cancel(),N.current(D))}),[D]),o().createElement("div",b({},j(),{className:"ms-horizontal-menu"}),o().createElement("div",I(),r.map((function(t){var r=t.title,n=t.id,i=k({id:n,onClick:function(){e&&e.sectionId!==n&&a(n)}});return o().createElement("div",b({},i,{className:"ms-menu-item"}),o().createElement(w,{tabindex:"-1",id:n,text:r||"title",selected:n===D,style:O(n===D)}))}))),E&&o().createElement(h.Z,{className:"square-button-md no-border",style:{position:"absolute"},onClick:function(){return x(u)}},o().createElement(p.Glyphicon,{glyph:"chevron-left"})),P&&o().createElement(h.Z,{className:"square-button-md no-border",style:{position:"absolute",right:0},onClick:function(){return x(-u)}},o().createElement(p.Glyphicon,{glyph:"chevron-right"})))}));var O=r(45697),C=r.n(O),E=r(50966),P=r(5346),j=r(94745);function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}var k=["tooltipPosition"];function x(){return x=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},x.apply(this,arguments)}function T(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function D(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function N(t,e){return N=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},N(t,e)}function A(t,e){if(e&&("object"===I(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return R(t)}function R(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function M(t){return M=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},M(t)}function z(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var Z=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&N(t,e)}(c,t);var e,r,n,i,a=(n=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=M(n);if(i){var r=M(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return A(this,t)});function c(){var t;T(this,c);for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return z(R(t=a.call.apply(a,[this].concat(r))),"checkUnsavedChanges",(function(){t.props.renderUnsavedMapChangesDialog?t.props.onCheckMapChanges(t.goHome):(t.props.onCloseUnsavedDialog(),t.goHome())})),z(R(t),"goHome",(function(){t.context.router.history.push("/")})),t}return e=c,(r=[{key:"render",value:function(){var t=this.props,e=t.tooltipPosition,r=function(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}(t,k),n=o().createElement(p.Tooltip,{id:"toolbar-home-button"},o().createElement(P.Z,{msgId:"gohome"}));return o().createElement(o().Fragment,null,o().createElement(E.Z,{overlay:n,placement:e},o().createElement(h.Z,x({id:"home-button",className:"square-button",bsStyle:"primary",onClick:this.checkUnsavedChanges,tooltip:n},r),this.props.icon)),o().createElement(j.Z,{ref:"unsavedMapModal",show:this.props.displayUnsavedDialog||!1,onClose:this.props.onCloseUnsavedDialog,title:o().createElement(P.Z,{msgId:"resources.maps.unsavedMapConfirmTitle"}),buttons:[{bsStyle:"primary",text:o().createElement(P.Z,{msgId:"resources.maps.unsavedMapConfirmButtonText"}),onClick:this.goHome},{text:o().createElement(P.Z,{msgId:"resources.maps.unsavedMapCancelButtonText"}),onClick:this.props.onCloseUnsavedDialog}],fitContent:!0},o().createElement("div",{className:"ms-detail-body"},o().createElement(P.Z,{msgId:"resources.maps.unsavedMapConfirmMessage"}))))}}])&&D(e.prototype,r),c}(o().Component);z(Z,"propTypes",{icon:C().node,onCheckMapChanges:C().func,onCloseUnsavedDialog:C().func,displayUnsavedDialog:C().bool,renderUnsavedMapChangesDialog:C().bool,tooltipPosition:C().string}),z(Z,"contextTypes",{router:C().object,messages:C().object}),z(Z,"defaultProps",{icon:o().createElement(p.Glyphicon,{glyph:"home"}),onCheckMapChanges:function(){},onCloseUnsavedDialog:function(){},renderUnsavedMapChangesDialog:!0,tooltipPosition:"left"});const U=Z;var B=r(11847),_=r(13218),L=r.n(_);function H(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function q(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?H(Object(r),!0).forEach((function(e){F(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function F(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const $=function(t){var e,r=t.settings,n=t.scrollTo,i=void 0===n?function(){}:n,a=t.navigableItems,c=void 0===a?[]:a,s=t.currentPage,l=void 0===s?{}:s,u=t.totalItems,d=void 0===u?1:u,p=t.currentPosition,m=void 0===p?0:p,v=t.router,y=t.buttons,g=void 0===y?[]:y,h=null==r||null===(e=r.theme)||void 0===e?void 0:e.general,b=L()(h)&&h||{},w=b.fontFamily,O=b.borderColor,C=b.color,E=b.backgroundColor,P=r||{},j=P.isTitleEnabled,I=P.isLogoEnabled,k=P.isNavbarEnabled,x=g.length>0,T=v&&v.pathname&&v.search&&"true"===(0,B.vl)(v.search).showHome&&v.pathname.includes("/geostory/shared"),D=k&&(null==c?void 0:c.length)>0,N=j||I||D||x||T;return o().createElement("div",{className:"ms-geostory-navigation-bar",style:q(q({color:C,backgroundColor:E},O&&{borderBottom:"1px solid ".concat(O)}),{},{fontFamily:w})},o().createElement("div",{className:"progress-bar",key:"progress-bar",style:{backgroundColor:O}},o().createElement("div",{className:"progress-percent",style:{width:"".concat((m+1)/d*100,"%"),backgroundColor:C}})),N&&o().createElement("div",{className:"ms-geostory-navigation-tools"},o().createElement("div",{className:"ms-geostory-navigation-toolbar"},o().createElement(f.Z,{buttons:g}),T&&o().createElement(U,{bsStyle:"default",className:"square-button-md no-border",tooltipPosition:"right",renderUnsavedMapChangesDialog:!1})),o().createElement("div",{className:"ms-geostory-navigation-elements"},D?o().createElement("div",{className:"ms-geostory-navigation-navigable-items"},o().createElement(S,{items:c,currentPage:l,scrollTo:i,getItemStyle:function(t){return t?{color:E,backgroundColor:C}:{outlineColor:C,borderColor:C}}})):null,o().createElement("div",{className:"ms-geostory-navigation-metadata"},j&&o().createElement("div",{className:"ms-geostory-navigation-title",style:{fontSize:r.storyTitleFontSize||"14px"}},r.storyTitle),I&&o().createElement("div",{className:"ms-geostory-navigation-logo"},o().createElement("img",{src:r.thumbnail&&(r.thumbnail.data||r.thumbnail.url)||"",height:32}))))))},K=(0,c.rx)("GeoStoryNavigation",{component:(0,i.connect)((0,a.zB)({mode:l.eK,settings:l.TQ,currentPage:l.PR,currentPosition:l.u5,totalItems:l.CK,navigableItems:(0,l.w)({includeAlways:!1}),pathname:u.F,search:u.y}))((function(t){var e=t.mode,r=void 0===e?s.nl.VIEW:e,n=t.currentPage,i=t.currentPosition,a=t.totalItems,c=t.settings,l=t.navigableItems,u=void 0===l?[]:l,d=t.pathname,f=t.search,p=t.items,m=(void 0===p?[]:p).filter((function(t){return t.tool})).map((function(t){return{Element:t.tool}}));return r===s.nl.VIEW?o().createElement("div",{key:"geostory-navigation",className:"ms-geostory-navigation",style:{width:"100%",position:"relative"}},o().createElement($,{settings:c,currentPage:n,currentPosition:i,totalItems:a,scrollTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{behavior:"smooth"};(0,s.M1)(t,e)},navigableItems:u,router:{pathname:d,search:f},buttons:m})):null})),reducers:{geostory:d.Z}})},66190:(t,e,r)=>{"use strict";r.d(e,{Z:()=>N});var n=r(27361),o=r.n(n),i=r(47037),a=r.n(i),c=r(81763),s=r.n(c),l=r(30998),u=r.n(l),d=r(13311),f=r.n(d),p=r(68630),m=r.n(p),v=r(1469),y=r.n(v),g=r(84596),h=r.n(g),b=r(19155),w=r.n(b),S=r(61868),O=r(92579),C=r(34990);function E(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function P(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?E(Object(r),!0).forEach((function(e){j(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function j(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function I(t){return function(t){if(Array.isArray(t))return k(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return k(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?k(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var x=function(t,e){var r=t.length,n=0;return e||0===e||(n=r),a()(e)?n=u()(t,{id:e})+1:s()(e)&&(n=Math.min(e,t.length)),n},T=function t(e,r,n){var o=n.contents,i=n.background,a=n.id,c=n.resourceId,s=[],l=r+'{"id": "'.concat(a,'"}]');return c===e?[l]:(i&&i.resourceId===e&&s.push(l+".background"),o?o.reduce((function(r,n){return[].concat(I(r),I(t(e,l+".contents[",n)))}),s):s)},D={mode:"view",isCollapsed:!1,focusedContent:{},currentPage:{},settings:{},oldSettings:{},updateUrlOnScroll:!1};const N=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case C.D7:var r=e.id,n=e.path,i=e.position,c=e.element,s=(0,O.Ll)("currentStory.".concat(n),t),l=o()(t,s,[]),u=x(l,i),d=l.slice();return d.splice(u,0,P({id:r},c)),(0,S.t8)(s,d,t);case C.mN:var p=e.id,v=e.mediaType,g=e.data;return(0,S.t8)("currentStory.resources",w()([{id:p,type:v,data:g}].concat(I(t.currentStory&&t.currentStory.resources||[])),"id"),t);case C.vb:return(0,S.t8)("mode",e.mode,t);case C.QK:var b=e.id,E=e.mediaType,k=e.data,N=(0,S.cc)("currentStory.resources",{id:b,type:E,data:k},{id:b},t);return E===O.Tr.MAP&&t.currentStory.sections.filter((function(t){return t.type!==O.ID.CAROUSEL})).reduce((function(t,e){return[].concat(I(t),I(T(b,"sections[",e)))}),[]).map((function(e){var r=(0,O.Ll)("currentStory.".concat(e,".map"),t);N=(0,S.t8)(r,void 0,N)})),N;case C.Ro:var A=e.id,R=e.mediaType,M=(0,S.z6)("currentStory.resources",{id:A},t);return t.currentStory.sections.reduce((function(t,e){return[].concat(I(t),I(T(A,"sections[",e)))}),[]).map((function(e){var r=(0,O.Ll)("currentStory.".concat(e,".resourceId"),t);if(M=(0,S.zN)(r,M),R===O.Tr.MAP){var n=(0,O.Ll)("currentStory.".concat(e,".map"),t);M=(0,S.zN)(n,M)}})),M;case C.lX:return(0,S.t8)("loading"===e.name?"loading":"loadFlags.".concat(e.name),e.value,(0,S.t8)("loading",e.value,t));case C.Dq:var z=e.path,Z=(0,O.Ll)("currentStory.".concat(z),t),U=I(Z),B=U.pop(),_=o()(t,U);return y()(_)?(a()(B)&&(B=parseInt(B,10)),(0,S.t8)(U,[].concat(I(_.slice(0,B)),I(_.slice(B+1))),t)):(0,S.zN)(Z,t);case C.ij:var L,H,q,F,$,K=t.defaultSettings||{},Y=e.story.settings||K,Q=(null===(L=Y)||void 0===L||null===(H=L.theme)||void 0===H?void 0:H.fontFamilies)||[],G=null===(q=t.currentStory)||void 0===q||null===(F=q.settings)||void 0===F||null===($=F.theme)||void 0===$?void 0:$.fontFamilies;return G&&G.length>0&&(Y=(0,S.t8)("theme.fontFamilies",w()([].concat(I(G),I(Q)),"family"),Y)),(0,S.t8)("currentStory",P(P({},e.story),{},{settings:Y}),t);case C.i2:return(0,S.t8)("selectedCard",t.selectedCard===e.card?"":e.card,t);case C.IY:var V=e.control,W=e.value;return(0,S.t8)("controls.".concat(V),W,t);case C.Zf:var X=e.resource,J=t.currentStory&&t.currentStory.settings||{};return(0,S.qC)((0,S.t8)("resource",X),(0,S.t8)("currentStory.settings.storyTitle",J.storyTitle||X.name))(t);case C.si:case C.KT:return(0,S.zN)("errors.save",t);case C.SW:return(0,S.t8)("errors.save",h()(e.error),t);case C.Mk:return(0,S.t8)("isCollapsed",!t.isCollapsed,t);case C.NZ:var tt=o()(t,"currentStory.settings.".concat(e.option));return(0,S.t8)("currentStory.settings.".concat(e.option),!tt,t);case C.c:var et=!t.isSettingsEnabled,rt=t.currentStory&&t.currentStory.settings||{};return(0,S.qC)((0,S.t8)("isSettingsEnabled",et),(0,S.t8)("oldSettings",et?rt:{}),(0,S.t8)("currentStory.settings",et?P({},rt):e.withSave?rt:t.oldSettings))(t);case C.wb:var nt=e.path,ot=e.mode,it=e.element,at=(0,O.Ll)("currentStory.".concat(nt),t),ct=o()(t,at);return m()(ct)&&m()(it)&&"merge"===ot&&(it=P(P({},ct),it)),y()(ct)&&y()(it)&&"merge"===ot&&(it=[].concat(I(ct),I(it))),(0,S.t8)(at,it,t);case C.km:return(0,S.t8)("currentStory.settings.".concat(e.prop),e.value,t);case C.un:if(e.columnId){var st=f()(t.currentStory.sections,(function(t){return f()(t.contents,{id:e.columnId})}));return st&&f()(st.contents,{id:e.columnId})?(0,S.t8)("currentPage",P(P({},t.currentPage),{},{columns:P(P({},t.currentPage.columns),{},j({},st.id,e.columnId))}),t):t}return(0,S.t8)("currentPage",P(P({},t.currentPage),{},{sectionId:e.sectionId}),t);case C.Cx:var lt=e.status,ut=e.target,dt=e.selector,ft=void 0===dt?"":dt,pt=e.hideContent,mt=void 0!==pt&&pt,vt=e.path,yt=lt?{target:ut,selector:ft,hideContent:mt,path:vt}:void 0;return(0,S.t8)("focusedContent",yt,t);case C.jr:return(0,S.t8)("pendingChanges",e.value,t);case C.ZY:return(0,S.t8)("updateUrlOnScroll",e.value,t);case C.EQ:return(0,S.t8)("mediaEditorSettings",e.mediaEditorSettings,t);case C.W$:if(e.sectionId){var gt=f()(t.currentStory.sections,(function(t){return f()(t.contents,{id:e.showContentId})}));return gt&&f()(gt.contents,{id:e.showContentId})?(0,S.t8)("currentStory",P(P({},t.currentStory),{},{sections:(0,O.eI)(t.currentStory.sections,e)}),t):t}return t;case C.mk:return(0,S.t8)("drawOptions",e.drawOptions,t);default:return t}}},11847:(t,e,r)=>{"use strict";r.d(e,{ij:()=>y,w0:()=>g,vl:()=>h,K2:()=>b,Nw:()=>w});var n=r(8575),o=r(1469),i=r.n(o),a=r(47037),c=r.n(a),s=r(18446),l=r.n(s),u=r(89734),d=r.n(u),f=r(13311),p=r.n(f),m=r(64210);function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var y=function(t){if(!t)return{};var e=!(0===t.indexOf("http")),r=e?[]:t.match(/([^:]*:)\/\/([^:]*:?[^@]*@)?([^:\/\?]*):?([^\/\?]*)/);if(e){var n=window.location;r[1]=n.protocol,r[3]=n.hostname,r[4]=n.port,r[5]=t}r[4]=""!==r[4]&&r[4]?r[4]:"https:"===r[1]?"443":"80",r[5]=r[5]?r[5]:t.slice(r[0].length);var o,i,a=(i=6,function(t){if(Array.isArray(t))return t}(o=r)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i=[],a=!0,c=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(t){c=!0,o=t}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}}(o,i)||function(t,e){if(t){if("string"==typeof t)return v(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(t,e):void 0}}(o,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=a[1],s=a[3],l=a[4],u=a[5],d=0===u.indexOf("/")?u.split("/")[1]:"";return{protocol:c,domain:s,port:l,rootPath:u,applicationRootPath:d}},g=function(t,e){var r=i()(t)?t[0]:t,o=i()(e)?e[0]:e;if(r===o)return!0;if(!r||!o)return!1;if(!c()(r)||!c()(o))return!1;var a=n.parse(r),s=n.parse(o),u=y(r),f=y(o),p=u.protocol===f.protocol,m=u.domain===f.domain,v=u.port===f.port,g=a.pathname===s.pathname,h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(t===e)return!0;if(!t&&!e)return!0;var r=t?t.split("&").filter((function(t){return!!t})):[],n=e?e.split("&").filter((function(t){return!!t})):[];return l()(d()(r),d()(n))}(a.query,s.query);return p&&v&&m&&g&&h},h=function(t){return m.Qc(t)},b=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:/^(http(s{0,1}):\/\/)+?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,r=new RegExp(e);return r.test(t)},w=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/^(http(s{0,1}):\/\/)+?[\w.\-{}]+(?:\.[\w\.-]+)+[\w\-\._~\/\;\.\%\:\&\=\?{}]+$/,n=new RegExp(r),o=n.test(t);if(!o)return!1;if(o&&!e)return!0;if(o&&e){var i=/\{(.*?)\}/.test(t);return 0===e.filter((function(t){return p()(i,t)})).length}return!1}}}]);