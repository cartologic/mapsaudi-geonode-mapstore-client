(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[6266],{32420:(t,e,n)=>{"use strict";n.r(e),n.d(e,{toDescribeURL:()=>g,getFeatureSimple:()=>m,getCapabilitiesURL:()=>d,getFeatureURL:()=>v,getFeature:()=>y,getCapabilities:()=>b,describeFeatureTypeOGCSchemas:()=>h,describeFeatureType:()=>O});var r=n(75875),o=n.n(r),u=n(8575),i=n(27418),a=n.n(i);function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},u=Object.keys(t);for(r=0;r<u.length;r++)n=u[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(r=0;r<u.length;r++)n=u[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var g=function(t,e){var n=u.parse(t,!0);return u.format(l(l({},n),{},{search:void 0,query:l(l({},n.query),{},{service:"WFS",version:"1.1.0",typeName:e,outputFormat:"application/json",request:"DescribeFeatureType"})}))},m=function(t,e){return o().get(t+"?service=WFS&version=1.1.0&request=GetFeature",{params:a()({outputFormat:"application/json"},e)}).then((function(t){return"object"!==f(t.data)?JSON.parse(t.data):t.data}))},d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.version,r=void 0===n?"1.1.0":n,o=u.parse(t,!0);return u.format(a()({},o,{query:a()({service:"WFS",version:r,request:"GetCapabilities"},o.query)}))},v=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.version,o=void 0===r?"1.1.0":r,i=c(n,["version"]),f=u.parse(t,!0);return u.format(a()({},f,{query:a()(l({service:"WFS",typeName:e,version:o,request:"GetFeature"},i),f.query)}))},y=function(t,e,n){return o().get(v(t,e,n))},b=function(t){return o().get(d(t))},h=function(t,e){var r=u.parse(t,!0),i=u.format(a()({},r,{query:a()({service:"WFS",version:"1.1.0",typeName:e,request:"DescribeFeatureType"},r.query)}));return new Promise((function(t){Promise.all([n.e(9942),n.e(7674)]).then(function(){var e=n(97674).unmarshaller;t(o().get(i).then((function(t){var n=e.unmarshalString(t.data);return n&&n.value})))}.bind(null,n)).catch(n.oe)}))},O=function(t,e){return o().get(g(t,e)).then((function(t){return t.data}))}},63528:(t,e,n)=>{"use strict";n.d(e,{SV:()=>l,IO:()=>d});var r=n(22222),o=n(2510),u=n(61545),i=n(37275),a=n(22843);function c(t){return function(t){if(Array.isArray(t))return f(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var s=function(t){return t.context&&t.context.currentContext},l=function(t){return t.context&&t.context.resource},p=(0,r.P1)((function(){return(0,u.get)(i.ZP.getConfigProp("plugins"),"desktop")}),(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{desktop:[].concat(c(t),["Context"])}})),g=(0,r.P1)((function(t){return(0,u.get)(s(t),"plugins")}),(function(t){return(0,u.get)(s(t),"userPlugins")}),(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t&&{desktop:[].concat(c((0,u.get)(t,"desktop",[])),c(e.filter((function(t){return t.active}))))}})),m=((0,r.P1)(s,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t.templates})),function(t){return function(t){return(0,u.get)(t,"context.loading")}(t)?function(t){return p(t)}(t):g(t)||p(t)}),d=function(t){return(0,r.P1)(s,m,(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return!e||(0,u.findIndex)((0,u.get)(n,"desktop",[]),(function(e){return e.name===t}))>-1}))};(0,r.P1)((function(t){return(0,a.bh)(t,(0,o.Hy)(t))}),(function(t){return JSON.stringify(t)}))},2510:(t,e,n)=>{"use strict";n.d(e,{Hy:()=>u,kt:()=>i,nR:()=>a});var r=n(61545),o=function(t){return t.localConfig},u=function(t){return(o(t)||{}).monitorState},i=function(t){return function(e){return(0,r.get)(function(t){return(0,r.get)(o(t),"plugins")}(e),t)}},a=function(t){return(0,r.get)(o(t),"defaultMapOptions.floatingIdentifyDelay",500)}},8316:(t,e,n)=>{"use strict";n.d(e,{Pz:()=>u,Ps:()=>i,KV:()=>a});var r=n(22222),o=n(61545),u=function(t){return t.locale&&t.locale.current||"en-US"},i=function(t){return t.locale&&t.locale.messages||{}},a=(0,r.P1)([u],(function(t){return(0,o.head)(t.split("-"))}))},827:(t,e,n)=>{"use strict";n.d(e,{Od:()=>i,uy:()=>a,J9:()=>c,_H:()=>f,HJ:()=>s,pb:()=>l,zj:()=>g,A0:()=>m,S:()=>d,pQ:()=>v,_e:()=>y,up:()=>b,Zs:()=>h,x9:()=>I,zT:()=>P,Mc:()=>j});var r=n(90183),o=n(22222),u=n(61545),i=function(t){return t.map&&t.map.present||t.map||t.config&&t.config.map||null},a=(0,o.P1)([i],(function(t){return t&&t.projection})),c=function(t){return(0,u.get)(t,"mapInitialConfig.mapId")&&parseInt((0,u.get)(t,"mapInitialConfig.mapId"),10)||function(t){return(0,u.get)(i(t),"mapId")&&parseInt((0,u.get)(i(t),"mapId"),10)||null}(t)},f=function(t){return(0,u.get)(i(t),"info")},s=function(t){var e=(0,u.get)(f(t),"canEdit");return void 0===e?(0,u.get)(t,"context.resource.canEdit"):e},l=function(t){return t.localConfig&&t.localConfig.projectionDefs||[]},p=function(t){return t.localConfig&&t.localConfig.mapConstraints||{}},g=function(t){return p(t).restrictedExtent},m=function(t){return p(t).crs},d=function(t){var e=p(t),n=a(t);return n&&(0,u.get)(e,'projectionsConstraints["'.concat(n,'"].minZoom'))||(0,u.get)(e,"minZoom")},v=function(t){return(0,u.get)(i(t),"bbox")},y=function(t){return(0,u.get)(function(t){return(0,u.get)(i(t),"limits")}(t),"minZoom")},b=(0,o.P1)([function(t){return(0,u.get)(i(t),"resolutions")},a],(function(t,e){if(t&&e){var n=r.default.getUnits(e);return t.map((function(t){return 3779.527559055118*t*("degrees"===n?111194.87428468118:1)}))}return[]})),h=function(t){return t.map&&t.map.present&&t.map.present.info&&t.map.present.info.name||""},O=function(t){return(0,u.get)(i(t),"eventListeners.mousemove",[])},I=function(t){return!!O(t).length},P=function(t){return O(t).includes("mouseposition")},j=function(t){return O(t).includes("identifyFloatingTool")}},7877:(t,e,n)=>{"use strict";n.d(e,{xt:()=>m,Qp:()=>d,us:()=>v,x0:()=>y,bI:()=>b,Bz:()=>h,H_:()=>O,A4:()=>I,Ap:()=>P,ij:()=>j,lN:()=>S,oq:()=>w,hs:()=>C,Qf:()=>x,q7:()=>F,OK:()=>k,vR:()=>q,o9:()=>A,IA:()=>E,Kc:()=>D,Dg:()=>L,AO:()=>_,EI:()=>z,qK:()=>R});var r=n(61545),o=n(22222),u=n(827),i=n(63528),a=n(8316),c=n(7412),f=n(93152),s=n(2510);function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var m=(0,o.P1)((function(t){return(0,s.kt)("desktop")(t)||{}}),f.c0,(function(t,e){return!e&&!!((Object.values(t).filter((function(t){return"Identify"===t.name})).pop()||{}).cfg||{}).showInMapPopup})),d=(0,o.P1)((function(t){return(0,r.get)(t,"mapInfo.requests")||[]}),(0,i.IO)("Identify"),m,(function(t,e,n){return!n&&!!t&&t.length>0&&e})),v=function(t){return(0,r.get)(t,"mapInfo.configuration.infoFormat","text/plain")},y=function(t){return(0,r.get)(t,"mapInfo.configuration.showEmptyMessageGFI",!0)},b=function(t){return(0,r.get)(t,"mapInfo.configuration",{})},h=function(t){return t&&t.mapInfo&&t.mapInfo.clickPoint},O=function(t){return t&&t.mapInfo&&t.mapInfo.clickLayer},I=function(t){return(0,r.get)(t,"mapInfo.itemId",null)},P=function(t){return(0,r.get)(t,"mapInfo.overrideParams",{})},j=function(t){return(0,r.get)(t,"mapInfo.filterNameList",[])},S=(0,o.P1)((function(t){return!(0,r.get)(t,"mapInfo.enabled",!1)}),(function(t){return(0,r.get)(t,"controls.measure.enabled")&&((0,r.get)(t,"measurement.lineMeasureEnabled")||(0,r.get)(t,"measurement.areaMeasureEnabled")||(0,r.get)(t,"measurement.bearingMeasureEnabled"))}),(function(t){var e=(0,r.get)(t,"draw.drawStatus",!1);return e&&"clean"!==e&&"stop"!==e}),(function(t){return(0,r.get)(t,"annotations.editing")}),(0,i.IO)("Identify"),(function(t,e,n,r,o){return t||!!e||n||!!r||!o})),w=(0,o.zB)({format:v,map:u.Od,point:h,currentLocale:a.Pz,maxItems:function(t){return(0,r.get)(t,"mapInfo.configuration.maxItems")}}),C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t.mapInfo&&t.mapInfo.highlight},x=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t&&t.mapInfo&&t.mapInfo.index},F=function(t){return t.mapInfo&&t.mapInfo.responses||[]},k=function(t){var e;return(null==t||null===(e=t.mapInfo)||void 0===e?void 0:e.requests)||[]},q=function(t){var e;return null==t||null===(e=t.mapInfo)||void 0===e?void 0:e.loaded},A=(0,o.P1)(k,F,v,(function(t,e,n){var r=(0,c.Te)(n);return t.length===e.length&&r.getValidResponses(e)})),T=(0,o.P1)(A,x,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t[e]})),E=function(t){var e=T(t)||{};return(0,r.get)(e,"layerMetadata.features")},D=function(t){var e=T(t)||{};return(0,r.get)(e,"layerMetadata.featuresCrs")},M=function(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.style||e.geometry&&("Point"===e.geometry.type||"MultiPoint"===e.geometry.type)?t:(0,r.omit)(t,"radius")}},N=function(t){return function(e){return p(p({},e),{},{style:M(t)(e)})}},L=(0,o.P1)(h,C,E,D,(function(t){return t&&t.mapInfo&&t.mapInfo.showMarker}),(function(t){return(0,r.get)(t,"mapInfo.highlightStyle",{color:"#3388ff",weight:4,radius:4,dashArray:"",fillColor:"#3388ff",fillOpacity:.2})}),(function(t,e,n,o,u,i){return u&&t?e?p(p({},t),{},{featuresCrs:o,features:n&&(0,r.isArray)(n)&&n.map(N(i))}):t:void 0})),_=function(t){var e;return null===(e=t.mapInfo)||void 0===e?void 0:e.currentEditFeatureQuery},z=function(t){return(0,r.get)(t,"mapInfo.configuration.trigger","click")},R=function(t){return!(0,f.c0)(t)}},59286:(t,e,n)=>{"use strict";n.r(e),n.d(e,{validateStringAttribute:()=>u,getCleanTemplate:()=>i,parseCustomTemplate:()=>a,generateTemplateString:()=>c,parseTemplate:()=>f,default:()=>s});var r,o=n(61545),u=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,u=(0,o.isString)(e)&&(0,o.trim)(e.substring(n,e.length-r))||"";return(0,o.has)(t,u)},i=function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:function(){return""},c=(0,o.isString)(t)&&t.match(n),f=c&&c.map((function(t){var n=t.replace(/(<([^>]+)>)/gi,"");return{previous:t,next:u(e,n,r,i)?n:a(t)}}))||null;return f&&f.reduce((function(t,e){return t.replace(e.previous,e.next)}),t)||t||""},a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(t){return"".concat((0,o.trim)(t.substring(2,t.length-1))," Not Available")};return(0,o.template)(i(t||"",e,/\$\{.*?\}/g,2,1,n))(e)},c=(r={},function(t,e){var n=r[t];return n&&!e||(n=function(n){var r=t.replace(/\$\{([\s]*[^;\s\{]+[\s]*)\}/g,(function(t,r){return(e||function(t){return t})(r.trim().split(".").reduce((function(t,e){return t&&t[e]}),n))}));return(0,o.isString)(r)&&r||""},e||(r[t]=n)),n}),f=function(t,e){n.e(181).then(function(){var r=n(90181),o="function"==typeof t?t():t;try{var u=r.transform(o,{presets:["es2015","react","stage-0"]}).code;e(u)}catch(t){e(null,t)}}.bind(null,n)).catch(n.oe)};const s={generateTemplateString:c,parseTemplate:f,validateStringAttribute:u,getCleanTemplate:i,parseCustomTemplate:a}}}]);