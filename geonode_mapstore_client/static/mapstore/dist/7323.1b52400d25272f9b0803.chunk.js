(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[7323],{81808:(e,r,t)=>{"use strict";t.d(r,{eD:()=>n,AM:()=>o,ok:()=>u,Gg:()=>i,nT:()=>a,TL:()=>c,KS:()=>s,EB:()=>f,DZ:()=>l,Aw:()=>p,V_:()=>y,H0:()=>E,jW:()=>d,JZ:()=>g,fQ:()=>O,HK:()=>_,YO:()=>m,I6:()=>A});var n="MAP:LOAD_NEW_MAP",o="MAP_LOAD_MAP_CONFIG",u="MAP_CONFIG_LOADED",i="MAP_CONFIG_LOAD_ERROR",a="MAP_LOAD_INFO",c="MAP_INFO_LOAD_START",s="MAP_INFO_LOADED",f="MAP_INFO_LOAD_ERROR",l="MAP:MAP_SAVE_ERROR",p="MAP:MAP_SAVED",y="MAP:RESET_MAP_SAVE_ERROR";function E(e,r,t){return{type:u,config:e,legacy:!!r,mapId:r,zoomToExtent:t}}function d(e,r){return{type:i,error:e,mapId:r}}function g(e,r,t,n,u){return{type:o,configName:e,mapId:r,config:t,mapInfo:n,overrideConfig:u}}function O(e,r){return{type:s,mapId:r,info:e}}function _(e,r){return{type:f,mapId:e,error:r}}function m(e){return{type:c,mapId:e}}function A(e){return{type:a,mapId:e}}},80416:(e,r,t)=>{"use strict";t.d(r,{yS:()=>n,Zz:()=>o,ms:()=>u,ih:()=>i,OX:()=>a,sb:()=>c,K$:()=>s,k7:()=>f,cX:()=>l,x9:()=>p,vs:()=>y,oE:()=>E,Po:()=>d,qv:()=>g,cI:()=>O,g6:()=>_,I4:()=>m,l$:()=>A,Xv:()=>R,k3:()=>v,CQ:()=>b,R8:()=>S,HN:()=>T,sH:()=>h,c7:()=>P,_7:()=>I,eF:()=>D,O6:()=>L,ED:()=>w,RP:()=>C,sF:()=>j,VP:()=>M,He:()=>H,vO:()=>N,WO:()=>G,bh:()=>q,pV:()=>k,MK:()=>F,ZF:()=>Y,tV:()=>x,Dv:()=>X,Yz:()=>U,kI:()=>V,XG:()=>Z,A4:()=>W,Rp:()=>K,$o:()=>Q,ct:()=>$,oh:()=>z,$h:()=>B,ud:()=>J,Qr:()=>ee,LR:()=>re,nN:()=>te,UG:()=>ne,F5:()=>oe,c9:()=>ue,Jh:()=>ie,Xy:()=>ae});var n="CHANGE_LAYER_PROPERTIES",o="LAYERS:CHANGE_LAYER_PARAMS",u="CHANGE_GROUP_PROPERTIES",i="TOGGLE_NODE",a="SORT_NODE",c="REMOVE_NODE",s="UPDATE_NODE",f="MOVE_NODE",l="LAYER_LOADING",p="LAYER_LOAD",y="LAYER_ERROR",E="ADD_LAYER",d="ADD_GROUP",g="REMOVE_LAYER",O="SHOW_SETTINGS",_="HIDE_SETTINGS",m="UPDATE_SETTINGS",A="REFRESH_LAYERS",R="LAYERS:UPDATE_LAYERS_DIMENSION",v="LAYERS_REFRESHED",b="LAYERS_REFRESH_ERROR",S="LAYERS:BROWSE_DATA",T="LAYERS:DOWNLOAD",h="LAYERS:CLEAR_LAYERS",P="LAYERS:SELECT_NODE",I="LAYERS:FILTER_LAYERS",D="LAYERS:SHOW_LAYER_METADATA",L="LAYERS:HIDE_LAYER_METADATA",w="LAYERS:UPDATE_SETTINGS_PARAMS";function C(e,r,t){return{type:O,node:e,nodeType:r,options:t}}function j(){return{type:_}}function M(e){return{type:m,options:e}}function H(e,r){return{type:n,newProperties:r,layer:e}}function N(e,r){return{type:o,layer:e,params:r}}function G(e,r){return{type:u,newProperties:r,group:e}}function q(e,r,t){return{type:i,node:e,nodeType:r,status:!t}}function k(e){return{type:"CONTEXT_NODE",node:e}}function F(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{type:a,node:e,order:r,sortLayers:t}}function Y(e,r){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return{type:c,node:e,nodeType:r,removeEmpty:t}}function x(e,r,t){return{type:s,node:e,nodeType:r,options:t}}function X(e,r,t){return{type:f,node:e,groupId:r,index:t}}function U(e){return{type:l,layerId:e}}function V(e,r){return{type:p,layerId:e,error:r}}function Z(e,r,t){return{type:y,layerId:e,tilesCount:r,tilesErrorCount:t}}function W(e){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return{type:E,layer:e,foreground:r}}function K(e,r,t){return{type:d,group:e,parent:r,options:t}}function Q(e){return{type:g,layerId:e}}function $(e,r){return{type:n,layer:e,newProperties:{_v_:r||(new Date).getTime()}}}function z(e){return{type:v,layers:e}}function B(e,r){return{type:b,layers:e,error:r}}function J(e,r,t,n){return{type:R,dimension:e,value:r,options:t,layers:n}}function ee(e){return{type:S,layer:e}}function re(e){return{type:T,layer:e}}function te(){return{type:h}}function ne(e,r,t){return{type:P,id:e,nodeType:r,ctrlKey:t}}function oe(e){return{type:I,text:e}}function ue(e,r){return{type:D,metadataRecord:e,maskLoading:r}}function ie(){return{type:L}}function ae(e,r){return{type:w,newParams:e,update:r}}},97222:(e,r,t)=>{"use strict";t.d(r,{Vc:()=>o,bj:()=>u,p7:()=>i,Av:()=>a,M8:()=>c,wn:()=>s,gs:()=>f,NN:()=>l,C2:()=>p,O7:()=>y,oQ:()=>E,dX:()=>d,al:()=>g,Gh:()=>O,x2:()=>_,Y7:()=>m,b4:()=>A,GI:()=>R,KP:()=>v,dS:()=>b,Zw:()=>S,Z:()=>T,a:()=>h,WN:()=>P,k9:()=>I,yo:()=>D,kE:()=>L,kV:()=>w,v2:()=>C,_q:()=>j,tt:()=>M,Jc:()=>H,w4:()=>N,QJ:()=>G,KG:()=>q,o$:()=>k,TS:()=>F,Tw:()=>Y,I3:()=>x});var n=t(97395),o="SEARCH:SEARCH_WITH_FILTER",u="TEXT_SEARCH_STARTED",i="TEXT_SEARCH_RESULTS_LOADED",a="TEXT_SEARCH_RESULTS_PURGE",c="TEXT_SEARCH_RESET",s="TEXT_SEARCH_ADD_MARKER",f="TEXT_SEARCH_TEXT_CHANGE",l="TEXT_SEARCH_LOADING",p="TEXT_SEARCH_NESTED_SERVICE_SELECTED",y="TEXT_SEARCH_ERROR",E="TEXT_SEARCH_CANCEL_ITEM",d="TEXT_SEARCH_ITEM_SELECTED",g="TEXT_SEARCH_SHOW_GFI",O="TEXT_SEARCH_SET_HIGHLIGHTED_FEATURE",_="UPDATE_RESULTS_STYLE",m="CHANGE_SEARCH_TOOL",A="SEARCH:ZOOM_ADD_POINT",R="SEARCH:CHANGE_FORMAT",v="SEARCH:CHANGE_COORD",b="SEARCH:HIDE_MARKER";function S(e){return{type:R,format:e}}function T(e,r,t){return{type:A,pos:e,zoom:r,crs:t}}function h(e){return{type:m,activeSearchTool:e}}function P(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=arguments.length>2?arguments[2]:void 0;return{type:i,results:e,append:r,services:t}}function I(e){return{type:f,searchText:e}}function D(e){return{type:l,loading:e}}function L(e){return{type:y,error:e}}function w(){return{type:a}}function C(){return{type:c}}function j(e,r){return{type:s,markerPosition:e,markerLabel:r}}function M(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=r.services,n=void 0===t?null:t,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:15;return{type:u,searchText:e,services:n,maxResults:o}}function H(e,r,t){return{type:d,item:e,mapConfig:r,resultsStyle:t}}var N=function(e){return{type:g,item:e}};function G(e,r,t){return{type:p,searchText:t,services:e,items:r}}function q(e){return{type:E,item:e}}function k(e){return{type:_,style:e}}function F(e,r){return{type:v,coord:e,val:r}}function Y(){return(0,n.vU)({title:"Error",position:"tc",message:"search.errors.nonQueriableLayers",autoDismiss:10})}function x(){return(0,n.vU)({title:"Error",position:"tc",message:"search.errors.serverError",autoDismiss:10})}},15402:(e,r,t)=>{"use strict";t.d(r,{Z:()=>g});var n=t(45697),o=t.n(n),u=t(24852),i=t.n(u);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function s(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,r){return(f=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}function l(e,r){return!r||"object"!==a(r)&&"function"!=typeof r?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):r}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var E=t(68195).FormattedHTMLMessage,d=function(e){!function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&f(e,r)}(a,e);var r,t,n,o,u=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=p(n);if(o){var t=p(this).constructor;e=Reflect.construct(r,arguments,t)}else e=r.apply(this,arguments);return l(this,e)});function a(){return c(this,a),u.apply(this,arguments)}return r=a,(t=[{key:"render",value:function(){return this.context.intl?i().createElement(E,{id:this.props.msgId,values:this.props.msgParams}):i().createElement("span",null,this.props.msgId||"")}}])&&s(r.prototype,t),a}(i().Component);y(d,"propTypes",{msgId:o().string.isRequired,msgParams:o().object}),y(d,"contextTypes",{intl:o().object});const g=d},93451:(e,r,t)=>{"use strict";t.d(r,{Z:()=>v});var n=t(86638),o=t(45697),u=t.n(o),i=t(84596),a=t.n(i),c=t(1469),s=t.n(c),f=t(14293),l=t.n(f),p=t(47037),y=t.n(p),E=t(67076),d=["messages"];function g(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function O(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function _(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?O(Object(t),!0).forEach((function(r){m(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function m(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var A=function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"label";if(s()(r))return r.map((function(o){var u=(0,n.S$)(e,o[t]||y()(o)&&o||"");return _(_({},o),{},m({},t,l()(u)?r:u))}));var o=(0,n.S$)(e,r);return l()(o)?r:o},R=function(e,r,t){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;return _(_({},n),{},m({},o,e[o]&&A(r,e[o],t)))}};const v=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"label";return(0,E.compose)((0,E.getContext)({messages:u().object}),(0,E.mapProps)((function(t){var n=t.messages,o=g(t,d);return _(_({},o),a()(e).reduce(R(o,n,r),{}))})))}},26125:(e,r,t)=>{"use strict";t.d(r,{Z:()=>T});var n=t(21914),o=t(81808),u=t(82904),i=t(27418),a=t.n(i),c=t(30998),s=t.n(c),f=t(52353),l=t.n(f),p=t(41609),y=t.n(p),E=t(13652),d=t(7412),g=["index","loaded"];function O(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function _(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(e){if("string"==typeof e)return m(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?m(e,r):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function A(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function R(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?A(Object(t),!0).forEach((function(r){v(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function v(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function b(e,r,t){var n="vector"===t,o=n?r.reqId:s()(e.requests||[],(function(e){return e.reqId===r.reqId}));if(-1!==o){if(["exceptions","error"].includes(t)){var u=e.requests.filter((function(e,r){return r!==o})),i=e.responses.filter((function(e,r){return r!==o}));return R(R({},e),{},{responses:i,requests:u})}var c,f=e.configuration,p=e.requests,E=e.responses||[],g="hover"===(null==f?void 0:f.trigger);if(!n){var O={response:r[t],queryParams:r.requestParams,layerMetadata:r.layerMetadata,layer:r.layer};g?E=[].concat(_(E),[O]):E[o]=O}return g?c={loaded:!0,index:0}:!g&&function(e,r,t,n){var o,u,i=e.configuration,a=e.requests,c=e.queryableLayers,s=void 0===c?[]:c,f=e.index,p=(i||{}).infoFormat,E=null===(o=(0,d.Te)(p))||void 0===o?void 0:o.getValidResponses([r[t]]),g=null===(u=(0,d.Te)(p))||void 0===u?void 0:u.getNoValidResponses(r);return l()(f)&&!!E.length||!n&&a.length===g.filter((function(e){return e})).length||l()(f)&&n&&a.filter((function(e){return y()(e)})).length===s.length}(e,E,o,n)&&(c={loaded:!0,index:o}),a()({},e,R(R(R({},n&&{requests:p}),!l()(c)&&c),{},{responses:_(E)}))}return e}var S={enabled:!0,configuration:{}};const T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case n.Re:return a()({},e,{warning:"NO_QUERYABLE_LAYERS"});case n.ih:return a()({},e,{warning:null});case n.Xw:return a()({},e,{enabled:r.enabled});case n.ph:return a()({},e,{enabled:!e.enabled});case n.gG:return a()({},e,{index:r.index});case n.oz:return a()({},e,{highlight:r.enabled});case n.Pn:var i=r.reqId,c=r.request,s=e.requests||[];return a()({},e,{requests:[].concat(_(s),[{request:c,reqId:i}])});case n.DZ:e.index,e.loaded;var f=O(e,g);return R(R({},f),{},{queryableLayers:[],responses:[],requests:[]});case n.XL:return b(e,r,"data");case n.Ih:return b(e,r,"exceptions");case n.km:return b(e,r,"error");case n.xy:return a()({},e,{clickPoint:r.point,clickLayer:r.layer||null,itemId:r.itemId||null,overrideParams:r.overrideParams||null,filterNameList:r.filterNameList||null});case n.e8:return R(R({},e),{},{configuration:R(R({},e.configuration),{},{infoFormat:r.infoFormat})});case n.E0:return a()({},e,{showMarker:!0});case n.F9:return a()({},e,{showMarker:!1});case n.X_:return a()({},e,{showModalReverse:!0,reverseGeocodeData:r.reverseGeocodeData});case n.pb:return a()({},e,{showModalReverse:!1,reverseGeocodeData:void 0});case u.l:return a()({},e,{showMarker:!1,responses:[],requests:[],configuration:R(R({},e.configuration),{},{trigger:"click"})});case n.qb:var l,p=t(55745),y=t(65442),d={type:"Feature",properties:{},geometry:{type:"Point",coordinates:[r.request.lng,r.request.lat]}},m=r.metadata&&r.metadata.units;switch(m){case"m":m="meters";break;case"deg":m="degrees";break;case"mi":m="miles";break;default:m="meters"}var A,v=r.metadata&&r.metadata.resolution||1,T=p(d,(r.metadata.buffer||1)*v,m),h=(r.layer.features||[]).filter((function(e){try{return"FeatureCollection"===e.type&&e.features&&e.features.length?e.features.reduce((function(e,t){var n=t.properties.useGeodesicLines&&t.properties.geometryGeodesic?R(R({},t),{},{geometry:t.properties.geometryGeodesic}):t;return e||y(T,v&&r.metadata.buffer&&m?p(n,1,"meters"):n)}),!1):y(T,v&&r.metadata.buffer&&m?p(e,1,"meters"):e)}catch(e){return!1}})),P=e.responses||[],I="hover"===(null==e||null===(l=e.configuration)||void 0===l?void 0:l.trigger)||!1,D={response:{crs:null,features:h,totalFeatures:"unknown",type:"FeatureCollection"},queryParams:r.request,layerMetadata:r.metadata,format:"JSON"};I?(P=[].concat(_(P),[D]),A={reqId:0}):(P[e.requests.length]=D,A={reqId:e.requests.length});var L=[].concat(_(e.requests),[{}]);return b(a()({},e,{requests:L,queryableLayers:r.queryableLayers,responses:_(P)}),A,"vector");case n.lF:return a()({},e,{centerToMarker:r.status});case n.ZF:return R(R({},e),{},{configuration:R(R({},e.configuration),{},{showEmptyMessageGFI:!e.configuration.showEmptyMessageGFI})});case o.ok:return R(R({},e),{},{configuration:r.config.mapInfoConfiguration||e.configuration||{}});case n.GI:return R(R({},e),{},{formatCoord:r.format});case n.B1:return R(R({},e),{},{showCoordinateEditor:!r.showCoordinateEditor});case n.gc:return R(R({},e),{},{currentEditFeatureQuery:r.query});case n.zX:return R(R({},e),{},{configuration:R(R({},e.configuration),{},{trigger:r.trigger})});case n.Zb:return R(R({},e),{},{showInMapPopup:r.value});case E.Wz:return"cesium"===r.mapType?R(R({},e),{},{configuration:R(R({},e.configuration),{},{trigger:"click"})}):e;default:return e}}}}]);