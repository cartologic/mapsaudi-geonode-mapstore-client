(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[2794],{83520:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>L});var n=r(67294),o=r.n(n),u=r(45697),i=r.n(u),a=r(33664),c=r(64317),l=r(31255),f=r(55105),s=r(22222),p=r(27418),y=r.n(p),b=r(58252);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}var d=["children"],v=["children"];function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},h.apply(this,arguments)}function O(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function j(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function P(e,t,r){return t&&w(e.prototype,t),r&&w(e,r),e}function S(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}function q(e,t){return q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},q(e,t)}function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=x(e);if(t){var o=x(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return T(this,r)}}function T(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return C(e)}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}var D=function(e){S(r,e);var t=k(r);function r(){return j(this,r),t.apply(this,arguments)}return P(r,[{key:"render",value:function(){var e=this.props,t=e.children,r=O(e,d);return o().createElement(c.CSSTransitionGroup,h({},r,{transitionName:"toolbarexpand",transitionEnterTimeout:500,transitionLeaveTimeout:300}),t)}}]),r}(o().Component),_=function(e){S(r,e);var t=k(r);function r(){return j(this,r),t.apply(this,arguments)}return P(r,[{key:"render",value:function(){var e=this.props,t=e.children,r=O(e,v);return o().createElement("div",r,t)}}]),r}(o().Component),z=function(e){S(r,e);var t=k(r);function r(){var e;j(this,r);for(var n=arguments.length,o=new Array(n),u=0;u<n;u++)o[u]=arguments[u];return m(C(e=t.call.apply(t,[this].concat(o))),"getPanel",(function(e){return!0===e.panel?e.plugin:e.panel})),m(C(e),"getPanels",(function(){return e.getTools().filter((function(e){return e.panel})).map((function(t){return{name:t.name,title:t.title,cfg:t.cfg,panel:e.getPanel(t),items:t.items,wrap:t.wrap||!1}}))})),m(C(e),"getTools",(function(){var t=e.props.items.filter((function(e){return!e.alwaysVisible}))||[];return e.props.items.filter((function(r){return r.alwaysVisible||1===t.length||e.props.allVisible})).filter((function(t){return!t.showWhen||t.showWhen(e.props)})).map((function(e,t){return y()({},e,{position:e.position||t})})).sort((function(e,t){return e.position-t.position}))})),e}return P(r,[{key:"render",value:function(){var e=this.props.disableAnimation?_:D;return o().createElement(b.Z,{id:this.props.id,className:"mapToolbar btn-group-"+this.props.layout,toolCfg:this.props.btnConfig,container:e,mapType:this.props.mapType,toolStyle:this.props.buttonStyle,activeStyle:this.props.pressedButtonStyle,toolSize:this.props.buttonSize,stateSelector:this.props.stateSelector,tools:this.getTools(),panels:this.getPanels(),activePanel:this.props.active,style:this.props.style,panelStyle:this.props.panelStyle,panelClassName:this.props.panelClassName})}}]),r}(o().Component);m(z,"propTypes",{id:i().string,tools:i().array,mapType:i().string,style:i().object,panelStyle:i().object,panelClassName:i().string,disableAnimation:i().bool,active:i().string,items:i().array,allVisible:i().bool,layout:i().string,stateSelector:i().string,buttonStyle:i().string,buttonSize:i().string,pressedButtonStyle:i().string,btnConfig:i().object}),m(z,"contextTypes",{messages:i().object,router:i().object}),m(z,"defaultProps",{id:"mapstore-toolbar",style:{},panelStyle:{minWidth:"300px",right:"52px",zIndex:100,position:"absolute",overflow:"auto",left:"450px"},panelClassName:"toolbar-panel",disableAnimation:!1,items:[],allVisible:!0,layout:"vertical",stateSelector:"toolbar",buttonStyle:"primary",buttonSize:null,pressedButtonStyle:"success",btnConfig:{className:"square-button"}});var E=function(e){return(0,s.P1)([function(t){return t.controls&&t.controls[e]&&t.controls[e].active},function(t){return t.controls&&t.controls[e]&&t.controls[e].expanded},l.Rd,function(e){return(0,f.ic)(e,{right:!0,bottom:!0})}],(function(t,r,n,o){return{active:t,allVisible:r,stateSelector:e,layout:n?"horizontal":"vertical",style:o}}))};const L={ToolbarPlugin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"toolbar";return(0,a.connect)(E(e))(z)},reducers:{controls:r(25108).Z}}},25108:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(82904),o=r(27418),u=r.n(o);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.kM:var r=t.property||"enabled";return u()({},e,i({},t.control,u()({},e[t.control],i({},r,!(e[t.control]||{})[r]))));case n.At:return!0===t.toggle&&e[t.control]&&e[t.control][t.property]===t.value?u()({},e,i({},t.control,u()({},e[t.control],i({},t.property,void 0)))):u()({},e,i({},t.control,u()({},e[t.control],i({},t.property,t.value))));case n.dc:return u()({},e,i({},t.control,u()({},e[t.control],t.properties)));case n.l:var o=Object.keys(e).filter((function(e){return-1===(t.skip||[]).indexOf(e)})),a=o.reduce((function(t,r){return u()(t,i({},r,u()({},e[r],!0===e[r].enabled?{enabled:!1}:{})))}),{});return u()({},e,a);default:return e}}},31255:(e,t,r)=>{"use strict";r.d(t,{u$:()=>w,PI:()=>P,_w:()=>S,eO:()=>q,kG:()=>k,P3:()=>T,bq:()=>D,LB:()=>_,b4:()=>z,M0:()=>E,Li:()=>L,Rd:()=>F,g5:()=>V,Sj:()=>A,o:()=>N,eK:()=>R,jY:()=>M,ND:()=>G,OK:()=>I,tU:()=>B,ou:()=>K,DK:()=>W,Gl:()=>Q,uz:()=>U,Ci:()=>Z,Ae:()=>H,gz:()=>Y,He:()=>J,P4:()=>X,kd:()=>$,TC:()=>ee,nq:()=>te,Vf:()=>re});var n=r(91175),o=r.n(n),u=r(27361),i=r.n(u),a=r(13218),c=r.n(a),l=r(75110),f=r(78889),s=r(8316),p=r(52259),y=r(96958),b=r(85148),g=r(74621),d=r(93152),v=r(24260);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var j=l.CA,w=function(e){return i()(e,"featuregrid.selectedLayer")},P=function(e){return i()(e,"featuregrid.chartDisabled",!1)},S=function(e){return e&&e.featuregrid&&e.featuregrid.select},q=function(e){return e&&e.featuregrid&&e.featuregrid.changes},k=function(e){return e&&e.featuregrid&&e.featuregrid.newFeatures},T=function(e){return o()(S(e))},C=function(e){var t=(0,v.Qs)(e);if(t){var r=(0,f.findGeometryProperty)(t);return r&&r.localType}return null},x=["Geometry","GeometryCollection"],D=function(e){return!o()(x.filter((function(t){return C(e)===t})))},_=function(e){return q(e)&&q(e).length>0},z=function(e){return k(e)&&k(e).length>0},E=function(e){return e&&e.featuregrid&&e.featuregrid.filters},L=function(e){return j(e,w(e))},F=function(e){return e&&e.featuregrid&&e.featuregrid.open},V=function(e,t){return i()(E(e),t)},A=function(e){var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.title||e.name}(j(e,w(e)));return c()(t)?t[(0,s.Pz)(e)]||t.default||"":t},N=function(e){return((0,v.L)(e)||[]).map((function(t){var r=function(e,t){return i()(e,"featuregrid.attributes[".concat(t.name||t.attribute,"]"))}(e,t);return r?h(h({},t),r):t}))},R=function(e){return e&&e.featuregrid&&e.featuregrid.mode},M=function(e){return(S(e)||[]).length},G=function(e){return(0,y.rK)(q(e))},I=function(e){return function(e){var t=T(e);if(t){var r=(0,y.rK)(q(e));return!((!r[t.id]||null===r[t.id].geometry)&&(r[t.id]&&null===r[t.id].geometry||t._new&&o()(k(e))&&null===o()(k(e)).geometry||(!t._new||!o()(k(e))||null===o()(k(e)).geometry)&&null===t.geometry))}return!1}(e)},B=function(e){return i()(e,"featuregrid.showAgain",!1)},K=function(e){if(i()(e,"featuregrid.showTimeSync",!1)){var t=w(e);return(0,b.jo)({id:t},"time")(e)}return null},W=function(e){return i()(e,"featuregrid.timeSync",!1)},Q=function(e){return i()(e,"featuregrid.showPopoverSync",!0)},U=function(e){return e&&e.featuregrid&&e.featuregrid.saving},Z=function(e){return e&&e.featuregrid&&e.featuregrid.saved},H=function(e){return e&&e.featuregrid&&e.featuregrid.drawing},Y=function(e){return i()(e,"featuregrid.multiselect",!1)},J=function(e){return(0,p.isSimpleGeomType)(C(e))},X=function(e){return e.featuregrid&&e.featuregrid.dockSize},$=function(e){var t=j(e,w(e));return t&&t.name||""},ee=function(e){var t=function(e){return i()(j(e,w(e)),"params")}(e);return{viewParams:t&&(t.VIEWPARAMS||t.viewParams||t.viewparams),cqlFilter:t&&(t.CQL_FILTER||t.cqlFilter||t.cql_filter)}},te=function(e){var t=(0,g.L3)(e),r=function(e){return i()(e,"featuregrid.editingAllowedRoles",["ADMIN"])}(e)||["ADMIN"],n=function(e){return e&&e.featuregrid&&e.featuregrid.canEdit}(e);return(-1!==r.indexOf(t)||n)&&!(0,d.c0)(e)},re=function(e){return i()(e,"featuregrid.pagination")}},55105:(e,t,r)=>{"use strict";r.d(t,{Nr:()=>s,ic:()=>p,Jz:()=>b,VM:()=>g,CF:()=>d});var n=r(91175),o=r.n(n),u=r(827),i=r(52259);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var f=function(e){return e.maplayout&&e.maplayout.layout||{}},s=function(e){return e.maplayout&&e.maplayout.boundingMapRect||{}},p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=f(e);return r&&Object.keys(r).filter((function(e){return t[e]})).reduce((function(e,t){return c(c({},e),{},l({},t,r[t]))}),{})||{}},y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=f(e),n=!!o()(t.filter((function(e){return r[e.key]})).map((function(e){return"not"===e.type?r[e.key]!==e.value&&r[e.key]:r[e.key]===e.value})));return n},b=function(e){return y(e,[{key:"right",value:658}])},g=function(e){return y(e,[{key:"bottom",value:30,type:"not"}])},d=function(e){var t=(0,u.Od)(e),r=s(e);return r&&t&&t.size&&{left:(0,i.parseLayoutValue)(r.left,t.size.width),bottom:(0,i.parseLayoutValue)(r.bottom,t.size.height),right:(0,i.parseLayoutValue)(r.right,t.size.width),top:(0,i.parseLayoutValue)(r.top,t.size.height)}}},24260:(e,t,r)=>{"use strict";r.d(t,{qj:()=>m,Bu:()=>h,UM:()=>O,X1:()=>j,L:()=>w,HY:()=>P,Mz:()=>S,F0:()=>q,dc:()=>k,b0:()=>T,hk:()=>C,Qs:()=>x,gy:()=>D,M7:()=>_,VD:()=>z});var n=r(14293),o=r.n(n),u=r(27361),i=r.n(u),a=r(91175),c=r.n(a),l=r(1469),f=r.n(l),s=r(30998),p=r.n(s);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=function(e){return i()(e,"query.filterObj.featureTypeName")},v=function(e){return function(t){return i()(t,'query.featureTypes["'.concat(e,'"]'))}},m=function(e,t){return i()(v(t)(e),"original")},h=function(e){return e&&e.query&&e.query.searchUrl},O=function(e){return e&&e.query&&e.query.url},j=function(e){return e&&e.query&&e.query.filterObj},w=function(e){return i()(v(d(e))(e),"attributes")},P=function(e){return i()(e,"query.typeName")},S=function(e){return i()(e,"query.result.features")},q=function(e){var t=i()(e,"query.result");return b(b({},t),{},{features:(t&&t.features||[]).filter((function(e){return!o()(e.geometry)}))})},k=function(e,t){var r=e&&e.query&&e.query.result&&e.query.result.features;return c()(r.filter((function(e){return e.id===t})))},T={startIndex:function(e){return i()(e,"query.filterObj.pagination.startIndex")},maxFeatures:function(e){return i()(e,"query.filterObj.pagination.maxFeatures")},resultSize:function(e){return i()(e,"query.result.features.length")},totalFeatures:function(e){return i()(e,"query.result.totalFeatures")}},C=function(e,t){var r=v(t)(e);return!!(r&&r.attributes&&r.geometry&&r.original)},x=function(e){return m(e,d(e))},D=function(e){return i()(e,"query.featureLoading")},_=function(e){return i()(e,"query.syncWmsFilter",!1)},z=function(e){var t=i()(e,"query.filterObj.crossLayerFilter"),r=i()(e,"query.filterObj.spatialField"),n=i()(e,"query.filterObj.filterFields");return!!(n&&c()(n)||r&&(r.method&&r.operation&&r.geometry||f()(r)&&p()(r,(function(e){return e.method&&e.operation&&e.geometry}))>-1)||t&&t.collectGeometries&&t.operation)}},85082:(e,t,r)=>{var n=r(40554),o=r(88958);e.exports=function(e,t,r,u){var i=e.length;for((r=n(r))<0&&(r=-r>i?0:i+r),(u=void 0===u||u>i?i:n(u))<0&&(u+=i),u=r>u?0:o(u);r<u;)e[r++]=t;return e}},19873:(e,t,r)=>{var n=r(85082),o=r(16612);e.exports=function(e,t,r,u){var i=null==e?0:e.length;return i?(r&&"number"!=typeof r&&o(e,t,r)&&(r=0,u=i),n(e,t,r,u)):[]}},88958:(e,t,r)=>{var n=r(29750),o=r(40554);e.exports=function(e){return e?n(o(e),0,4294967295):0}},64317:(e,t,r)=>{"use strict";var n=u(r(1174)),o=u(r(92381));function u(e){return e&&e.__esModule?e:{default:e}}e.exports={TransitionGroup:o.default,CSSTransitionGroup:n.default}}}]);