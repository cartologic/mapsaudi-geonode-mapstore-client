(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[9546],{15264:(e,t,o)=>{function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){f(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?u(e):t}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var d=o(45697),y=o(24852),m=o(86494),w=m.last,g=m.isNil,h=o(56307);o(21787),h.Draw.Polygon.prototype._calculateFinishDistance=function(e){if(this._markers.length>0){var t=this._map.latLngToContainerPoint(this._markers[0].getLatLng()),o=this._map.latLngToContainerPoint(this._markers[this._markers.length-1].getLatLng()),r=new h.Marker(e,{icon:this.options.icon,zIndexOffset:2*this.options.zIndexOffset}),n=this._map.latLngToContainerPoint(r.getLatLng());return Math.min(t.distanceTo(n),o.distanceTo(n))}return 1/0};var v=o(52259),b=v.isSimpleGeomType,P=v.getSimpleGeomType,O=o(86199).boundsToOLExtent,j=o(27418),L=o(90183),S=L.reproject,C=L.reprojectBbox,E=L.calculateCircleCoordinates,D=L.reprojectGeoJson,M=o(80379).pointToLayer,G=Math.PI/180,k=function(e,t,o){if("EPSG:4326"===o)return{center:t,srs:o,radius:e};var r=e/40075017*360/Math.cos(G*t[1]),n=S(t,"EPSG:4326",o);if(r){var a=S([t[0]+r,t[1]],"EPSG:4326",o);return{center:n,srs:o,radius:Math.sqrt(Math.pow(n.x-a.x,2)+Math.pow(n.y-a.y,2))}}return{center:n,srs:o,radius:e}},x=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"EPSG:4326";if("EPSG:4326"===o||void 0===e)return{center:t,projection:o,radius:e};var r=S({x:t.lng,y:t.lat},o,"EPSG:4326");if(void 0===e)return{center:r,projection:o,radius:e};var n=S([t.lng+e,t.lat],o,"EPSG:4326"),a=Math.sqrt(Math.pow(r.x-n.x,2)+Math.pow(r.y-n.y,2)),i=a*Math.cos(G*r.y)*40075017/360;return{center:r,projection:"EPSG:4326",radius:i}},_=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(y,e);var t,o,r,n,d=(r=y,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=l(r);if(n){var o=l(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return c(this,e)});function y(){var e;i(this,y);for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return f(u(e=d.call.apply(d,[this].concat(o))),"onDrawStart",(function(){e.drawing=!0})),f(u(e),"onDrawCreated",(function(t){e.drawing=!1;var o,r=t.layer,n=r.toGeoJSON();"marker"===t.layerType?o=h.latLngBounds(n.geometry.coordinates,n.geometry.coordinates):(r._map||(r._map=e.props.map,r._renderer=e.props.map.getRenderer(r),r._project()),o=r.getBounds());var a=O(o),i=o.getCenter();i=[i.lng,i.lat];var s=n.geometry.coordinates,p="EPSG:4326",c=n.geometry.type,u=r.getRadius?r.getRadius():0;if("circle"===t.layerType){n.projection="EPSG:4326",a=C(a,"EPSG:4326",p="EPSG:3857");var l=k(r._mRadius,i,p);i=l.center,u=l.radius,s=E(i,u,100),n.radius=r.getRadius?r.getRadius():0,i=[i.x,i.y],c="Polygon"}e.drawLayer.addData(n);var f={type:c,extent:a,center:i,coordinates:s,radius:u,projection:p};e.props.options&&e.props.options.stopAfterDrawing&&e.props.onChangeDrawingStatus("stop",e.props.drawMethod,e.props.drawOwner);var d=e.convertFeaturesToGeoJson(t.layer,e.props);e.props.onEndDrawing(f,e.props.drawOwner),e.props.onGeometryChanged([d],e.props.drawOwner,e.props.options&&e.props.options.stopAfterDrawing?"enterEditMode":"")})),f(u(e),"onUpdateGeom",(function(t,o){var r=e.convertFeaturesToGeoJson(t,o);o.onGeometryChanged([r],o.drawOwner)})),f(u(e),"addLayer",(function(t){e.clean();var o=h.geoJson(null,{pointToLayer:function(e,t){var o=x(e.radius,t,e.projection),r=o.center,n=o.radius;return h.circle(r,n||5)},style:function(e){return t.style&&t.style[e.geometry.type]||{color:"#ffcc33",opacity:1,weight:3,fillColor:"#ffffff",fillOpacity:.2,clickable:!1}}});e.props.map.addLayer(o),t.features&&t.features.length>0&&o.addData(e.convertFeaturesPolygonToPoint(t.features,e.props.drawMethod)),e.drawLayer=o})),f(u(e),"addGeojsonLayer",(function(t){var o=t.features,r=t.projection,n=t.style;e.clean();var a=h.geoJson(o,{style:function(e){return e.style||n},pointToLayer:function(e,t){var o=S({x:t.lng,y:t.lat},r,"EPSG:4326");return M(h.latLng(o.y,o.x),e,n)}});e.drawLayer=a.addTo(e.props.map)})),f(u(e),"replaceFeatures",(function(t){e.drawLayer?(e.drawLayer.clearLayers(),"Circle"===e.props.drawMethod?(e.drawLayer.options.pointToLayer=function(e,t){var o=x(e.radius,t,e.projection),r=o.center,n=o.radius;return h.circle(r,n||5)},e.drawLayer.options.style={color:"#ffcc33",opacity:1,weight:3,fillColor:"#ffffff",fillOpacity:.2,clickable:!1}):e.drawLayer.options.pointToLayer=function(e,o){var r=S({x:o.lng,y:o.lat},t.options&&t.options.featureProjection||"EPSG:4326","EPSG:4326");return M(h.latLng(r.y,r.x),e,t.style)},e.drawLayer.addData(e.convertFeaturesPolygonToPoint(t.features,e.props.drawMethod))):e.addGeojsonLayer({features:t.features,projection:t.options&&t.options.featureProjection||"EPSG:4326",style:t.style&&t.style[t.drawMethod]||t.style})})),f(u(e),"endDrawing",(function(t){e.replaceFeatures(t);var o=w(t.features);"Circle"!==e.props.drawMethod||!o||g(o.center)||g(o.radius)?o&&e.props.onEndDrawing(o,e.props.drawOwner):e.props.onEndDrawing(a(a({},o),{},{coordinates:E(o.center,o.radius,100)}),e.props.drawOwner)})),f(u(e),"addDrawInteraction",(function(t){e.removeAllInteractions(),"Point"===t.drawMethod||"MultiPoint"===t.drawMethod?e.addGeojsonLayer({features:t.features,projection:t.options&&t.options.featureProjection||"EPSG:4326",style:t.style&&t.style[t.drawMethod]||t.style}):e.addLayer(t),e.props.map.on("draw:created",e.onDrawCreated,u(e)),e.props.map.on("draw:drawstart",e.onDrawStart,u(e)),"LineString"===t.drawMethod||"Bearing"===t.drawMethod||"MultiLineString"===t.drawMethod?e.drawControl=new h.Draw.Polyline(e.props.map,{shapeOptions:{color:"#000000",weight:2,fillColor:"#ffffff",fillOpacity:.2},showLength:!1,repeatMode:!0,icon:new h.DivIcon({iconSize:new h.Point(8,8),className:"leaflet-div-icon leaflet-editing-icon"}),touchIcon:new h.DivIcon({iconSize:new h.Point(8,8),className:"leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"})}):"Polygon"===t.drawMethod||"MultiPolygon"===t.drawMethod?e.drawControl=new h.Draw.Polygon(e.props.map,{shapeOptions:{color:"#000000",weight:2,fillColor:"#ffffff",fillOpacity:.2,dashArray:[5,5],guidelineDistance:5},allowIntersection:!1,showLength:!1,showArea:!1,repeatMode:!0,icon:new h.DivIcon({iconSize:new h.Point(8,8),className:"leaflet-div-icon leaflet-editing-icon"}),touchIcon:new h.DivIcon({iconSize:new h.Point(8,8),className:"leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"})}):"BBOX"===t.drawMethod?e.drawControl=new h.Draw.Rectangle(e.props.map,{draw:!1,shapeOptions:{color:"#000000",weight:2,fillColor:"#ffffff",fillOpacity:.2,dashArray:[5,5]},repeatMode:!0,icon:new h.DivIcon({iconSize:new h.Point(8,8),className:"leaflet-div-icon leaflet-editing-icon"}),touchIcon:new h.DivIcon({iconSize:new h.Point(8,8),className:"leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"})}):"Circle"===t.drawMethod?e.drawControl=new h.Draw.Circle(e.props.map,{shapeOptions:{color:"#000000",weight:2,fillColor:"#ffffff",fillOpacity:.2,dashArray:[5,5]},showRadius:!1,repeatMode:!0}):"Point"!==t.drawMethod&&"MultiPoint"!==t.drawMethod||(e.drawControl=new h.Draw.Marker(e.props.map,{shapeOptions:{color:"#000000",weight:2,fillColor:"#ffffff",fillOpacity:.2},repeatMode:!0})),e.props.map.doubleClickZoom&&e.props.map.doubleClickZoom.disable(),e.drawControl.enable()})),f(u(e),"addDrawOrEditInteractions",(function(t){var o=[];t.features.map((function(e){var t;e&&e.geometry&&e.geometry.type&&!b(e.geometry.type)&&("GeometryCollection"===e.geometry.type?(t=e.geometry.geometries.map((function(t){return t.coordinates.map((function(o,r){return{type:"Feature",properties:a({},e.properties),id:t.type+r,geometry:{coordinates:o,type:P(t.type)}}}))})),o.push({type:"FeatureCollection",features:t})):(t=e.geometry.coordinates.map((function(t,o){return{type:"Feature",properties:a({},e.properties),id:e.geometry.type+o,geometry:{coordinates:t,type:P(e.geometry.type)}}})),o.push({type:"FeatureCollection",features:t})))}));var r=j({},t,{features:o.length>0?o:[{}]});e.drawLayer?(e.drawLayer.clearLayers(),e.drawLayer.addData(e.convertFeaturesPolygonToPoint(r.features,r.drawMethod))):e.addGeojsonLayer({features:t.features&&t.options.featureProjection&&"EPSG:4326"!==t.options.featureProjection?t.features.map((function(e){return D(e,t.options.featureProjection,"EPSG:4326")})):t.features,projection:t.options&&t.options.featureProjection||"EPSG:4326",style:t.style&&t.style[t.drawMethod]||t.style}),t.options.editEnabled&&e.addEditInteraction(r),t.options.drawEnabled&&e.addDrawInteraction(r)})),f(u(e),"addEditInteraction",(function(t){e.clean(),e.addGeojsonLayer({features:t.features,projection:t.options&&t.options.featureProjection||"EPSG:4326",style:j({},t.style,{poly:{icon:new h.DivIcon({iconSize:new h.Point(8,8),className:"leaflet-div-icon leaflet-editing-icon"}),touchIcon:new h.DivIcon({iconSize:new h.Point(8,8),className:"leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"})}})});var o=e.drawLayer.getLayers();setTimeout((function(){o.forEach((function(o){o.getLayers&&o.getLayers()&&o.getLayers().length?o.getLayers().forEach((function(o){o.on("edit",(function(o){return e.onUpdateGeom(o.target,t)})),o.on("moveend",(function(o){return e.onUpdateGeom(o.target,t)})),o.editing&&o.editing.enable()})):(o.on("edit",(function(o){return e.onUpdateGeom(o.target,t)})),o.on("moveend",(function(o){return e.onUpdateGeom(o.target,t)})),o.editing&&o.editing.enable())}))}),0),e.editControl=new h.Control.Draw({edit:{featureGroup:e.drawLayer,poly:{allowIntersection:!1},edit:!0},draw:{polygon:{allowIntersection:!1,showArea:!0}}}),e.props.map.doubleClickZoom&&e.props.map.doubleClickZoom.disable()})),f(u(e),"removeAllInteractions",(function(){e.removeEditInteraction(),e.removeDrawInteraction()})),f(u(e),"removeDrawInteraction",(function(){null!==e.drawControl&&void 0!==e.drawControl&&(e.props.options&&e.props.options.stopAfterDrawing&&(e.drawControl.setOptions({repeatMode:!1}),e.props.onDrawStopped()),e.drawControl.disable(),e.drawControl=null,e.props.map.off("draw:created",e.onDrawCreated,u(e)),e.props.map.off("draw:drawstart",e.onDrawStart,u(e)),e.props.map.doubleClickZoom&&e.props.map.doubleClickZoom.enable())})),f(u(e),"removeEditInteraction",(function(){e.drawLayer&&(e.drawLayer.getLayers().forEach((function(e){e.getLayers&&e.getLayers()&&e.getLayers().length?e.getLayers().forEach((function(e){e.off("edit"),e.off("moveend"),e.editing&&e.editing.disable()})):(e.off("edit"),e.off("moveend"),e.editing&&e.editing.disable())})),e.editControl=null),e.props.map.doubleClickZoom&&e.props.map.doubleClickZoom.enable()})),f(u(e),"cleanAndStop",(function(){e.removeAllInteractions(),e.drawLayer&&(e.drawLayer.clearLayers(),e.props.map.removeLayer(e.drawLayer),e.drawLayer=null)})),f(u(e),"clean",(function(){e.removeEditInteraction(),e.removeDrawInteraction(),e.drawLayer&&(e.drawLayer.clearLayers(),e.props.map.removeLayer(e.drawLayer),e.drawLayer=null)})),f(u(e),"convertFeaturesPolygonToPoint",(function(e,t){return"Circle"===t?e.map((function(e){var t=void 0!==e.center&&void 0!==e.radius?x(e.radius,{lat:e.center.y,lng:e.center.x},e.projection):e,o=t.center,r=t.projection,n=t.radius;return a(a({},e),{},{coordinates:o?[o.x,o.y]:e.coordinates,center:o||e.center,projection:r||e.projection,radius:void 0!==n?n:e.radius,type:"Point"})})):e})),f(u(e),"convertFeaturesToGeoJson",(function(t,o){var r;if(b(o.drawMethod))r=t.toGeoJSON().geometry;else{if("GeometryCollection"===o.drawMethod)return{type:"GeometryCollection",geometries:e.drawLayer.getLayers().map((function(e){return e.toGeoJSON()})).map((function(e){return"FeatureCollection"===e.type?{type:"Multi"+e.features[0].geometry.type,coordinates:e.features.map((function(e){return e.geometry.coordinates}))}:{type:e.geometry.type,coordinates:e.geometry.coordinates}}))};var n=e.drawLayer.getLayers().map((function(e){return e.toGeoJSON()}));r={type:o.drawMethod,coordinates:n.reduce((function(e,t){return e.concat([t.geometry.coordinates])}),[])}}return j({},t.toGeoJSON(),{geometry:r})})),e}return t=y,(o=[{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=!(!this.props.messages&&!this.context.messages)&&this.context.messages.drawLocal;if(t&&(h.drawLocal=t),this.props.drawStatus!==e.drawStatus||"replace"===e.drawStatus||this.props.drawMethod!==e.drawMethod||this.props.features!==e.features)switch(e.drawStatus){case"create":this.addGeojsonLayer({features:e.features,projection:e.options&&e.options.featureProjection||"EPSG:4326",style:e.style&&e.style[e.drawMethod]||e.style});break;case"start":this.addDrawInteraction(e);break;case"drawOrEdit":this.addDrawOrEditInteractions(e);break;case"stop":this.removeAllInteractions();break;case"replace":this.replaceFeatures(e);break;case"clean":this.cleanAndStop();break;case"endDrawing":this.endDrawing(e);break;default:return}}},{key:"render",value:function(){return null}}])&&s(t.prototype,o),y}(y.Component);f(_,"displayName","DrawSupport"),f(_,"propTypes",{map:d.object,drawOwner:d.string,drawStatus:d.string,drawMethod:d.string,options:d.object,features:d.array,onChangeDrawingStatus:d.func,onGeometryChanged:d.func,onDrawStopped:d.func,onEndDrawing:d.func,messages:d.object,style:d.object}),f(_,"defaultProps",{map:null,drawOwner:null,drawStatus:null,drawMethod:null,features:null,options:{stopAfterDrawing:!0},onChangeDrawingStatus:function(){},onGeometryChanged:function(){},onDrawStopped:function(){},onEndDrawing:function(){},style:{color:"#ffcc33",opacity:1,weight:3,fillColor:"#ffffff",fillOpacity:.2,clickable:!1,editing:{fill:1}}}),e.exports=_},67465:(e,t,o)=>{"use strict";o.d(t,{Z:()=>C});var r=o(24852),n=o.n(r),a=o(80307),i=o.n(a),s=o(45697),p=o.n(s),c=o(56307),u=o.n(c),l=o(47037),f=o.n(l),d=o(25064),y=o(21751);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function g(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?w(Object(o),!0).forEach((function(t){L(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):w(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var S=function(e,t){var o=new MutationObserver((function(){e.update()}));e.once("remove",(function(){o&&o.disconnect(),o=null})),o.observe(t,{attributes:!0,childList:!0,subtree:!0})},C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(p,e);var t,o,r,a,s=(r=p,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(r);if(a){var o=j(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return P(this,e)});function p(){var e;h(this,p);for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return L(O(e=s.call.apply(s,[this].concat(o))),"updatePopup",(function(){(e._popups||[]).map((function(e){return e.popup.update()}))})),L(O(e),"popupClose",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=t.target,r=(o=void 0===o?{}:o).options,n=(r=void 0===r?{}:r).id;n&&e.props.onPopupClose(n)})),L(O(e),"preparePopups",(function(){var t=e.props,o=t.popups,r=void 0===o?[]:o,n=t.map,a=e.props.map.getSize();return(e._popups||[]).forEach((function(t){var o=t.popup;o.off("remove",e.popupClose),o&&e.props.map.removeLayer(o)})),e._popups=r.map((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=.9*a.x,r=.9*a.y,i=t.id,s=t.position.coordinates,p=t.component,c=t.content,l=t.className,f=t.maxWidth,y=void 0===f?o:f,m=t.maxHeight,w=void 0===m?r:m,h=t.autoPan,v=void 0===h||h,b=t.offset,P=void 0===b?[0,7]:b,O=y>o?o:y,j=w>r?r:w,L=d.fH(i,l);L.setAttribute("style","max-width: ".concat(O,"px; max-height: ").concat(j,"px")),d.R3(L,c);var C=u().popup({id:i,autoClose:!1,closeOnClick:!1,autoPan:v,autoPanPadding:u().point(70,70),maxWidth:O,maxHeight:j,className:"ms-leaflet-popup",offset:P}).setContent(L);return C.once("remove",e.popupClose),p&&S(C,L),C.setLatLng(s),n.addLayer(C),g({popup:C},t)})),e._popups})),L(O(e),"stopPropagationOnMouseMove",(function(e){e.stopPropagation()})),L(O(e),"fireMouseOutEvent",(function(){e.props.map.fireEvent("mouseout")})),e}return t=p,(o=[{key:"UNSAFE_componentWillMount",value:function(){this.props.map&&(this.props.map.getContainer().querySelector(".leaflet-popup-pane").addEventListener("mousemove",this.stopPropagationOnMouseMove),this.props.map.getContainer().querySelector(".leaflet-popup-pane").addEventListener("mouseenter",this.fireMouseOutEvent))}},{key:"componentDidMount",value:function(){this.props.map&&this.props.map.on("resize",this.updatePopup)}},{key:"shouldComponentUpdate",value:function(e){return e.popups!==this.props.popups}},{key:"componentWillUnmount",value:function(){var e=this;(this._popups||[]).forEach((function(t){var o,r,n=t.popup;n.off("remove",e.popupClose),n&&(null===(o=e.props.map)||void 0===o||null===(r=o.removeLayer)||void 0===r||r.call(o,n))})),this.props.map&&(this.props.map.off("resize",this.updatePopup),this.props.map.getContainer().removeEventListener("mousemove",this.stopPropagationOnMouseMove),this.props.map.getContainer().removeEventListener("mouseenter",this.fireMouseOutEvent))}},{key:"renderPopups",value:function(){return this.preparePopups().filter((function(e){return!!e.component})).map((function(e){var t=e.popup,o=e.props,r=void 0===o?{}:o,a=e.component,s=e.id,p=t.getContent(),c=f()(a)&&y.default[a]||a,u=n().isValidElement(c)&&c||n().createElement(c,r);return p?i().createPortal(u,p,s):null}))}},{key:"render",value:function(){return n().createElement("div",null,this.renderPopups())}}])&&v(t.prototype,o),p}(n().Component);L(C,"propTypes",{map:p().object,popups:p().arrayOf(p().object),onPopupClose:p().func}),L(C,"defaultProps",{popups:[],onPopupClose:function(){}})},21751:(e,t,o)=>{"use strict";o.r(t),o.d(t,{IDENTIFY_POPUP:()=>v,default:()=>b});var r=o(24852),n=o.n(r),a=o(73014),i=o(11196),s=o(67076),p=o(71703),c=o(22222),u=o(7877),l=o(21914),f=o(42872),d=o(86494),y=o(79870),m=o(827),w=(0,s.compose)((0,p.connect)((0,c.P1)(u.Qf,(function(e){return{index:e}})),{setIndex:l.oO}),(0,s.defaultProps)({index:0,responses:[]})),g=(0,c.P1)([u.q7,u.o9,u.OK,u.us,u.x0,m.Mc,u.vR],(function(e,t,o,r,n,a,i){return{responses:e,validResponses:t,requests:o,format:r,showEmptyMessageGFI:n,missingResponses:(o||[]).length-(e||[]).length,renderEmpty:a,loaded:i}}));const h=(0,s.compose)((0,p.connect)(g),(0,s.defaultProps)({responses:[],container:function(e){var t=e.index,o=e.children;return n().createElement(n().Fragment,null,(0,d.isArray)(o)&&o[t]||o)},header:y.Z}),w,i.Yy,i.mI,(0,a.Z)((function(e){var t=e.loaded;return(0,d.isUndefined)(t)})))(f.Z);var v="identify";const b={identify:h}},32425:(e,t,o)=>{"use strict";o.d(t,{Z:()=>f});var r=o(45697),n=o.n(r),a=o(24852),i=o.n(a);function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function p(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){c(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var u=function(e){return e>100?"full":e>40?"medium":"small"},l=function(e){var t=e.size,o=e.style,r=void 0===o?{}:o,n=e.className,a=e.hidden;return i().createElement("div",{className:n,style:p({width:t,height:t,overflow:"hidden"},r)},!a&&i().createElement("div",{className:"mapstore-".concat(u(t),"-size-loader")}))};l.propTypes={size:n().number,className:n().string,style:n().object};const f=l},25064:(e,t,o)=>{"use strict";o.d(t,{fH:()=>a,FP:()=>i,R3:()=>s});var r=o(55877),n=o.n(r),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n()(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ms-map-popup",o=document.createElement("div");return o.setAttribute("id",e+"-map-popup"),o.setAttribute("class",t),o},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.startsWith("<")},s=function(e,t){if(!t)return e;if(t instanceof Node){var o=document.createDocumentFragment();o.appendChild(t),e.appendChild(o)}else i(t)?e.innerHTML=t:e.append(document.createTextNode(String(t)));return e}},86199:(e,t,o)=>{"use strict";o.r(t),o.d(t,{boundsToOLExtent:()=>r,fromLeafletFeatureToQueryform:()=>n});var r=function(e){return[e.getWest(),e.getSouth(),e.getEast(),e.getNorth()]},n=function(e){var t=e.toGeoJSON(),o=e.getBounds(),n=r(o),a=o.getCenter(),i=e.getRadius?e.getRadius():0,s=t.features[0].geometry.coordinates;return{type:t.features[0].geometry.type,extent:n,center:a,coordinates:s,radius:i,projection:"EPSG:4326"}}}}]);