(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[4211],{21914:(e,t,n)=>{"use strict";n.d(t,{XL:()=>o,km:()=>u,Ih:()=>i,Xw:()=>c,Pn:()=>a,DZ:()=>s,e8:()=>f,E0:()=>p,F9:()=>l,X_:()=>y,pb:()=>E,qb:()=>d,Re:()=>O,ih:()=>_,xy:()=>I,jL:()=>m,oz:()=>T,ph:()=>b,lF:()=>P,gG:()=>h,cb:()=>v,GI:()=>R,B1:()=>N,fv:()=>g,gc:()=>F,zX:()=>A,ZF:()=>D,Zb:()=>G,DW:()=>w,Xp:()=>M,Fm:()=>j,sV:()=>S,Mn:()=>Y,LU:()=>C,XP:()=>U,WU:()=>L,JB:()=>q,g:()=>H,ws:()=>x,HP:()=>Z,aN:()=>k,Pg:()=>K,u0:()=>X,TM:()=>z,PM:()=>B,lK:()=>Q,sv:()=>V,MO:()=>J,oO:()=>$,Mc:()=>ee,Zw:()=>te,RA:()=>ne,am:()=>re,ZM:()=>oe,wm:()=>ue,Y$:()=>ie,Qu:()=>ce,kT:()=>ae});var r=n(47310),o="LOAD_FEATURE_INFO",u="ERROR_FEATURE_INFO",i="EXCEPTIONS_FEATURE_INFO",c="CHANGE_MAPINFO_STATE",a="NEW_MAPINFO_REQUEST",s="PURGE_MAPINFO_RESULTS",f="CHANGE_MAPINFO_FORMAT",p="SHOW_MAPINFO_MARKER",l="HIDE_MAPINFO_MARKER",y="SHOW_REVERSE_GEOCODE",E="HIDE_REVERSE_GEOCODE",d="GET_VECTOR_INFO",O="NO_QUERYABLE_LAYERS",_="CLEAR_WARNING",I="FEATURE_INFO_CLICK",m="IDENTIFY:UPDATE_FEATURE_INFO_CLICK_POINT",T="IDENTIFY:TOGGLE_HIGHLIGHT_FEATURE",b="TOGGLE_MAPINFO_STATE",P="UPDATE_CENTER_TO_MARKER",h="IDENTIFY:CHANGE_PAGE",v="IDENTIFY:CLOSE_IDENTIFY",R="IDENTIFY:CHANGE_FORMAT",N="IDENTIFY:TOGGLE_SHOW_COORD_EDITOR",g="IDENTIFY:EDIT_LAYER_FEATURES",F="IDENTIFY:CURRENT_EDIT_FEATURE_QUERY",A="IDENTIFY:SET_MAP_TRIGGER",D="IDENTIFY:TOGGLE_EMPTY_MESSAGE_GFI",G="IDENTIFY:SET_SHOW_IN_MAP_POPUP",w="IDENTIFY:IDENTIFY_IS_MOUNTED",M="IDENTIFY:INIT_PLUGIN";function j(e,t,n,r,u){return{type:o,data:t,reqId:e,requestParams:n,layerMetadata:r,layer:u}}function S(e,t,n,r){return{type:u,error:t,reqId:e,requestParams:n,layerMetadata:r}}function Y(e,t,n,r){return{type:i,reqId:e,exceptions:t,requestParams:n,layerMetadata:r}}function C(){return{type:O}}function U(){return{type:_}}function L(e,t){return{type:a,reqId:e,request:t}}function q(e,t,n,r){return{type:d,layer:e,request:t,metadata:n,queryableLayers:r}}function H(){return{type:s}}function x(e){return{type:f,infoFormat:e}}function Z(){return{type:p}}function k(){return{type:l}}function W(e){return{type:y,reverseGeocodeData:e.data}}function K(e){return function(t){r.Z.reverseGeocode(e).then((function(e){t(W(e))})).catch((function(e){t(W(e))}))}}function X(){return{type:E}}function z(){return{type:b}}function B(e){return{type:P,status:e}}function Q(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return{type:I,point:e,layer:t,filterNameList:n,overrideParams:r,itemId:o}}function V(e){return{type:m,point:e}}function J(e){return{type:T,enabled:e}}function $(e){return{type:h,index:e}}var ee=function(){return{type:v}},te=function(e){return{type:R,format:e}},ne=function(e){return{type:N,showCoordinateEditor:e}},re=function(e){return{type:g,layer:e}},oe=function(e){return{type:F,query:e}},ue=function(e){return{type:A,trigger:e}},ie=function(e){return{type:G,value:e}},ce=function(e){return{type:w,isMounted:e}},ae=function(e){return{type:M,cfg:e}}},47310:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(75875),o=n.n(r),u=n(72500),i=n.n(u),c=n(27418),a=n.n(c),s={format:"json",bounded:0,polygon_geojson:1,priority:5};const f={geocode:function(e,t){var n=a()({q:e},s,t||{}),r=i().format({protocol:"https",host:"nominatim.openstreetmap.org",query:n});return o().get(r)},reverseGeocode:function(e,t){var n=a()({lat:e.lat,lon:e.lng},t||{},s),r=i().format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:n});return o().get(r)}}},15402:(e,t,n)=>{"use strict";n.d(t,{Z:()=>O});var r=n(45697),o=n.n(r),u=n(24852),i=n.n(u);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}function p(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=n(68195).FormattedHTMLMessage,d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(c,e);var t,n,r,o,u=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=l(r);if(o){var n=l(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function c(){return a(this,c),u.apply(this,arguments)}return t=c,(n=[{key:"render",value:function(){return this.context.intl?i().createElement(E,{id:this.props.msgId,values:this.props.msgParams}):i().createElement("span",null,this.props.msgId||"")}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(i().Component);y(d,"propTypes",{msgId:o().string.isRequired,msgParams:o().object}),y(d,"contextTypes",{intl:o().object});const O=d},21751:(e,t,n)=>{"use strict";n.r(t),n.d(t,{IDENTIFY_POPUP:()=>P,default:()=>h});var r=n(24852),o=n.n(r),u=n(73014),i=n(11196),c=n(67076),a=n(71703),s=n(22222),f=n(7877),p=n(21914),l=n(42872),y=n(1469),E=n.n(y),d=n(52353),O=n.n(d),_=n(79870),I=n(827),m=(0,c.compose)((0,a.connect)((0,s.P1)(f.Qf,(function(e){return{index:e}})),{setIndex:p.oO}),(0,c.defaultProps)({index:0,responses:[]})),T=(0,s.P1)([f.q7,f.o9,f.OK,f.us,f.x0,I.hp,f.vR],(function(e,t,n,r,o,u,i){return{responses:e,validResponses:t,requests:n,format:r,showEmptyMessageGFI:o,missingResponses:(n||[]).length-(e||[]).length,renderValidOnly:u,loaded:i}}));const b=(0,c.compose)((0,a.connect)(T),(0,c.defaultProps)({responses:[],container:function(e){var t=e.index,n=e.children;return o().createElement(o().Fragment,null,E()(n)&&n[t]||n)},header:_.Z}),m,i.Yy,i.mI,(0,u.Z)((function(e){var t=e.loaded;return O()(t)})))(l.Z);var P="identify";const h={identify:b}},32425:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(45697),o=n.n(r),u=n(24852),i=n.n(u);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=function(e){return e>100?"full":e>40?"medium":"small"},p=function(e){var t=e.size,n=e.style,r=void 0===n?{}:n,o=e.className,u=e.hidden;return i().createElement("div",{className:o,style:a({width:t,height:t,overflow:"hidden"},r)},!u&&i().createElement("div",{className:"mapstore-".concat(f(t),"-size-loader")}))};p.propTypes={size:o().number,className:o().string,style:o().object};const l=p},10240:(e,t,n)=>{var r=n(29750),o=n(80531),u=n(40554),i=n(79833);e.exports=function(e,t,n){return e=i(e),n=null==n?0:r(u(n),0,e.length),t=o(t),e.slice(n,n+t.length)==t}}}]);