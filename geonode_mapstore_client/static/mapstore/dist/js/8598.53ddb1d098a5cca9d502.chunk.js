(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[8598],{34990:(t,e,n)=>{"use strict";n.d(e,{D7:()=>a,mN:()=>l,vb:()=>s,KT:()=>f,QK:()=>d,cc:()=>p,Gx:()=>E,XH:()=>m,lX:()=>y,tP:()=>O,Dq:()=>v,LE:()=>T,SW:()=>g,si:()=>S,i2:()=>h,IY:()=>b,Zf:()=>I,ij:()=>R,Hb:()=>D,Mk:()=>_,c:()=>A,NZ:()=>C,Cx:()=>G,wb:()=>w,km:()=>M,un:()=>P,Ro:()=>Y,jr:()=>j,ZY:()=>N,EQ:()=>L,W$:()=>k,mk:()=>B,IH:()=>Z,rp:()=>U,D_:()=>V,zJ:()=>x,wJ:()=>W,OS:()=>H,YP:()=>z,Ct:()=>Q,Od:()=>$,y6:()=>F,g5:()=>q,_e:()=>K,DF:()=>X,GD:()=>J,K0:()=>tt,kB:()=>et,Xn:()=>nt,G5:()=>rt,Vx:()=>ot,RZ:()=>it,pB:()=>ct,$A:()=>ut,m7:()=>at,YM:()=>lt,o2:()=>st,ql:()=>ft,c0:()=>dt,nL:()=>pt,Fu:()=>Et,WE:()=>mt,fD:()=>yt,EE:()=>Ot});var r=n(47037),o=n.n(r),i=n(55877),c=n.n(i),u=n(92579),a="GEOSTORY:ADD",l="GEOSTORY:ADD_RESOURCE",s="GEOSTORY:CHANGE_MODE",f="GEOSTORY:CLEAR_SAVE_ERROR",d="GEOSTORY:EDIT_RESOURCE",p="GEOSTORY:EDIT_WEBPAGE",E="GEOSTORY:SCROLLING",m="GEOSTORY:LOAD_GEOSTORY",y="GEOSTORY:LOADING_GEOSTORY",O="GEOSTORY:MOVE",v="GEOSTORY:REMOVE",T="GEOSTORY:SAVE_STORY",g="GEOSTORY:SAVE_ERROR",S="GEOSTORY:STORY_SAVED",h="GEOSTORY:SELECT_CARD",b="GEOSTORY:SET_CONTROL",I="GEOSTORY:SET_RESOURCE",R="GEOSTORY:SET_CURRENT_STORY",D="GEOSTORY:SET_WEBPAGE_URL",_="GEOSTORY:TOGGLE_CARD_PREVIEW",A="GEOSTORY:TOGGLE_SETTINGS_PANEL",C="GEOSTORY:TOGGLE_SETTING",G="GEOSTORY:TOGGLE_CONTENT_FOCUS",w="GEOSTORY:UPDATE",M="GEOSTORY:UPDATE_SETTING",P="GEOSTORY:UPDATE_CURRENT_PAGE",Y="GEOSTORY:REMOVE_RESOURCE",j="GEOSTORY:SET_PENDING_CHANGES",N="GEOSTORY:SET_UPDATE_URL_SCROLL",L="GEOSTORY:UPDATE_MEDIA_EDITOR_SETTINGS",k="GEOSTORY:HIDE_CAROUSEL_ITEMS",B="GEOSTORY:ENABLE_DRAW",Z=function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(t){return t};return{type:a,id:n&&n.id||c()(),path:t,position:e,element:o()(n)&&(0,u.nq)(n,r)||n}},U=function(t,e,n){return{type:l,id:t,mediaType:e,data:n}},V=function(t){return{type:s,mode:t?u.nl.EDIT:u.nl.VIEW}},x=function(t,e,n){return{type:d,id:t,mediaType:e,data:n}},W=function(t,e){return{type:m,id:t,options:e}},H=function(t){return{type:"GEOSTORY:GEOSTORY_LOADED",id:t}},z=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"loading";return{type:y,value:t,name:e}},Q=function(t){return{type:"GEOSTORY:LOAD_GEOSTORY_ERROR",error:t}},$=function(t){return{type:v,path:t}},F=function(t){return{type:g,error:t}},q=function(t,e){return{type:b,control:t,value:e}},K=function(t){return{type:h,card:t}},X=function(t){return{type:I,resource:t}},J=function(t){return{type:S,id:t}},tt=function(t){return{type:R,story:t}},et=function(){return{type:_}},nt=function(t){return{type:C,option:t}},rt=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return{type:A,withSave:t}},ot=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"replace";return{type:w,path:t,element:e,mode:n}},it=function(t){var e=t.sectionId,n=t.columnId;return{type:P,sectionId:e,columnId:n}},ct=function(t,e,n){return{type:O,source:t,target:e,position:n}},ut=function(t,e,n,r,o){return{type:G,status:t,target:e,selector:n,hideContent:r,path:o}},at=function(t,e){return{type:M,prop:t,value:e}},lt=function(t){return{type:D,src:t}},st=function(t){var e=t.path,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GEOSTORY";return{type:p,path:e,owner:n}},ft=function(t,e){return{type:Y,id:t,mediaType:e}},dt=function(t){return{type:j,value:t}},pt=function(t){return{type:N,value:t}},Et=function(t){return{type:L,mediaEditorSettings:t}},mt=function(t){return{type:E,status:t}},yt=function(t,e){return{type:k,sectionId:t,showContentId:e}},Ot=function(t){return{type:B,drawOptions:t}}},82385:(t,e,n)=>{"use strict";n.d(e,{nr:()=>r,B8:()=>o,LE:()=>i,$Z:()=>c,Cp:()=>u});var r="MAP_EDITOR:SHOW",o="MAP_EDITOR:HIDE",i="MAP_EDITOR:SAVE",c=function(t,e){return{type:r,owner:t,map:e}},u=function(t){return{type:o,owner:t}}},93848:(t,e,n)=>{"use strict";n.d(e,{Ai:()=>c,AQ:()=>u,Gl:()=>a,wd:()=>l,V9:()=>s,ih:()=>f,B8:()=>d,ww:()=>p,HP:()=>E,ri:()=>m,gd:()=>y,nr:()=>O,ty:()=>v,GZ:()=>T,O6:()=>g,Vt:()=>S,Ug:()=>h,Wp:()=>b,Ke:()=>I,Cp:()=>R,pW:()=>D,Gr:()=>_,gG:()=>A,oo:()=>C,Gh:()=>G,$G:()=>w,I5:()=>M,d8:()=>P,y5:()=>Y,Az:()=>j,$Z:()=>N,Ql:()=>L,Ul:()=>k,TU:()=>B,E0:()=>Z,Yt:()=>U,Tk:()=>V});var r=n(13218),o=n.n(r),i=n(27693),c="MEDIA_EDITOR:ADDING_MEDIA",u="MEDIA_EDITOR:CHOOSE_MEDIA",a="MEDIA_EDITOR:EDITING_MEDIA",l="GEOSTORY:EDIT_MEDIA",s="MEDIA_EDITOR:LOAD_MEDIA",f="MEDIA_EDITOR:LOAD_MEDIA_SUCCESS",d="MEDIA_EDITOR:HIDE",p="MEDIA_EDITOR:SAVE_MEDIA",E="MEDIA_EDITOR:SET_MEDIA_TYPE",m="MEDIA_EDITOR:SET_MEDIA_SERVICE",y="MEDIA_EDITOR:SELECT_ITEM",O="MEDIA_EDITOR:SHOW",v="MEDIA_EDITOR:UPDATE_ITEM",T="MEDIA_EDITOR:IMPORT_IN_LOCAL",g="MEDIA_EDITOR:REMOVE_MEDIA",S="MEDIA_EDITOR:LOADING_SELECTED_MEDIA",h="MEDIA_EDITOR:LOADING_MEDIA_LIST",b="MEDIA_EDITOR:MEDIA_TYPE_DISABLE",I=function(t){return{type:u,resource:t}},R=function(){return{type:d}},D=function(t,e,n){return{type:s,params:t,mediaType:e,sourceId:n}},_=function(t){var e=t.mediaType,n=t.sourceId,r=t.params,o=t.resultData;return{type:f,mediaType:e,sourceId:n,params:r,resultData:o}},A=function(t){var e=t.type,n=t.source,r=t.data;return{type:p,mediaType:e,source:n,data:r}},C=function(t){return{type:"MEDIA_EDITOR:SAVE_MEDIA_SUCCESS",mediaType:t.mediaType,source:t.source,data:t.data,id:t.id}},G=function(t){return{type:y,id:t}},w=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"merge";return{type:v,item:t,mode:e}},M=function(t){return{type:c,adding:t}},P=function(t){return{type:m,id:o()(t)?t.value:t}},Y=function(t,e){return{type:E,mediaType:t,selectedService:e}},j=function(t){return{type:a,editing:t}},N=function(t,e){return{type:O,owner:t,settings:e}},L=function(t,e){var n=t.path,r=t.owner;return{type:l,path:n,owner:void 0===r?"geostory":r,sectionType:e}},k=function(t){var e=t.resource,n=t.sourceType,r=void 0===n?i.rR.GEOSTORY:n,o=t.owner;return{type:T,resource:e,sourceType:r,owner:void 0===o?"geostory":o}},B=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"geostory";return{type:g,mediaType:t,owner:e}},Z=function(t){return{type:S,loading:t}},U=function(){return{type:h}},V=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{type:b,mediaTypes:t}}},52826:(t,e,n)=>{"use strict";n.d(e,{Z:()=>O});var r=n(24852),o=n.n(r),i=n(70390),c=n(32425),u=n(80628),a=n(30294),l=n(92579),s=n(5346);function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function E(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],c=!0,u=!1;try{for(n=n.call(t);!(c=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{c||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,e)||function(t,e){if(t){if("string"==typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var y=(0,u.Z)((function(t){var e=t.src,n=t.width,u=t.height,l=t.resolution,f=t.thumbnail,p=t.controls,m=t.play,y=t.onPlay,O=void 0===y?function(){}:y,v=t.onStart,T=void 0===v?function(){}:v,g=t.fit,S=t.loop,h=t.volume,b=void 0===h?1:h,I=t.muted,R=m,D=E((0,r.useState)(R),2),_=D[0],A=D[1],C=E((0,r.useState)(),2),G=C[0],w=C[1],M=E((0,r.useState)(m),2),P=M[0],Y=M[1],j="cover"===g,N=E((0,r.useState)(!1),2),L=N[0],k=N[1];(0,r.useEffect)((function(){!_&&R&&(A(!0),Y(!0)),_&&T(_)}),[_,R]);var B,Z=(B=n/u,j?B<l?[u*l,u]:[n,n/l]:"contain"===g?B<l?[n,n/l]:[u*l,u]:[n,n/l]),U="contain"===g||j?u:Z[1],V=!j&&p,x=!!j||S;return o().createElement("div",{className:"ms-video",style:{position:"relative",width:n,height:U,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"}},e&&o().createElement(o().Fragment,null,_&&o().createElement(i.ZP,{url:e,width:Z[0],height:Z[1],playing:R,loop:x,volume:b,muted:I,style:j?{left:"50%",top:"50%",transform:"translate(-50%, -50%)",position:"absolute"}:{},controls:V,pip:!1,fileConfig:{attributes:{controlsList:"nodownload",disablePictureInPicture:!0}},youtubeConfig:{playerVars:{controls:V?2:0,modestbranding:1,rel:0}},onReady:function(){return Y(!1)},onError:function(t){w(t),(""+t).includes("NotAllowedError")&&(O(!1),k(!0),Y(!1))},onPause:function(){O(!1)},onPlay:function(){O(!0),L&&(w(!1),k(!1))}}),(!_||_&&(P||G))&&o().createElement("div",{className:"ms-video-cover",style:d(d({position:"absolute",width:Z[0],height:Z[1],display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(0, 0, 0, 1.0)"},!(P||G)&&{cursor:"pointer"}),!R&&f&&{backgroundImage:"url(".concat(f,")"),backgroundSize:j?"cover":"640px auto",backgroundPosition:"center",backgroundRepeat:"no-repeat"}),onClick:function(){L?(k(!1),w(!1)):Y(!0),A(!0),O(!0)}},P&&o().createElement(c.Z,{size:70}),G&&!L&&o().createElement("div",{className:"text-center"},o().createElement(a.Glyphicon,{glyph:"alert",style:{fontSize:Z[1]/4>100?100:Z[1]/4,mixBlendMode:"difference",color:"#ffffff"}}),o().createElement("h3",null,o().createElement(s.Z,{msgId:"geostory.errors.loading.video"}))," "),(!(P||G)&&!R||G&&L)&&o().createElement(a.Glyphicon,{glyph:"play",style:{fontSize:Z[1]/4>100?100:Z[1]/4,mixBlendMode:"difference",color:"#ffffff"}}))),!V&&!L&&o().createElement("div",{className:"ms-video-mask-cover",style:{position:"absolute",width:Z[0],height:Z[1]}}))}));const O=function(t){var e=t.id,n=t.src,i=t.resolution,c=void 0===i?16/9:i,u=t.autoplay,a=t.inView,s=t.description,f=t.showCaption,d=t.caption,p=void 0===d?s:d,m=t.thumbnail,O=t.credits,v=t.controls,T=void 0===v||v,g=t.fit,S=t.loop,h=t.muted,b=t.onPlay,I=void 0===b?function(){}:b,R=t.mode,D=t.containerInView,_=(void 0===D||D)&&a,A=E((0,r.useState)(!1),2),C=A[0],G=A[1],w=function(t){G(t),I(t)};return(0,r.useEffect)((function(){R===l.nl.EDIT&&w(!1)}),[R]),(0,r.useEffect)((function(){R===l.nl.VIEW&&_&&(u||"cover"===g)&&w(!0)}),[_,u,g,R]),(0,r.useEffect)((function(){R===l.nl.VIEW&&!_&&C&&w(!1)}),[_,C,R]),o().createElement("div",{id:e,key:"".concat(e,"-").concat(g,"-").concat(R),className:"ms-media ms-media-video"},o().createElement(y,{src:n,play:C&&R===l.nl.VIEW,resolution:c,thumbnail:m,controls:T&&R===l.nl.VIEW,onPlay:w,fit:g,loop:S,muted:h}),O&&o().createElement("div",{className:"ms-media-credits"},o().createElement("small",null,O)),f&&p&&o().createElement("div",{className:"ms-media-caption"},o().createElement("small",null,p)))}},1262:(t,e,n)=>{"use strict";n.d(e,{Z:()=>I});var r=n(27418),o=n.n(r),i=n(45697),c=n.n(i),u=n(24852),a=n.n(u),l=n(80307),s=n.n(l),f=n(30294),d=n(38560),p=n(5346),E=n(7472);function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function v(t,e){return v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},v(t,e)}function T(t,e){if(e&&("object"===m(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return g(t)}function g(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&v(t,e)}(u,t);var e,n,r,i,c=(r=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(r);if(i){var n=S(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return T(this,t)});function u(){var t;y(this,u);for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return h(g(t=c.call.apply(c,[this].concat(n))),"setConfirmRef",(function(e){return t.confirm=e,t.confirm})),t}return e=u,(n=[{key:"componentDidMount",value:function(){this.props.focusConfirm&&s().findDOMNode(this.confirm).focus()}},{key:"render",value:function(){return a().createElement(E.Z,{draggable:this.props.draggable,onClickOut:this.props.onClose,id:"confirm-dialog",modal:this.props.modal,style:o()({},this.props.style,{display:this.props.show?"block":"none"})},a().createElement("span",{role:"header"},a().createElement("span",{className:"user-panel-title"},this.props.title),a().createElement("button",{onClick:this.props.onClose,className:"login-panel-close close"},this.props.closeGlyph?a().createElement(f.Glyphicon,{glyph:this.props.closeGlyph}):a().createElement("span",null,"×"))),a().createElement("div",{role:"body"},this.props.children),a().createElement("div",{role:"footer"},a().createElement(f.ButtonGroup,null,a().createElement(d.Z,{ref:this.setConfirmRef,onClick:this.props.onConfirm,disabled:this.props.confirmButtonDisabled,bsStyle:this.props.confirmButtonBSStyle},this.props.confirmButtonContent),a().createElement(d.Z,{onClick:this.props.onClose},this.props.closeText))))}}])&&O(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(a().Component);h(b,"propTypes",{show:c().bool,draggable:c().bool,onClose:c().func,onConfirm:c().func,onSave:c().func,modal:c().bool,closeGlyph:c().string,style:c().object,buttonSize:c().string,inputStyle:c().object,title:c().node,confirmButtonContent:c().node,confirmButtonDisabled:c().bool,closeText:c().node,confirmButtonBSStyle:c().string,focusConfirm:c().bool}),h(b,"defaultProps",{onClose:function(){},onChange:function(){},modal:!0,title:a().createElement(p.Z,{msgId:"confirmTitle"}),closeGlyph:"",confirmButtonBSStyle:"danger",confirmButtonDisabled:!1,confirmButtonContent:a().createElement(p.Z,{msgId:"confirm"})||"Confirm",closeText:a().createElement(p.Z,{msgId:"close"}),includeCloseButton:!0,focusConfirm:!1});const I=b},12122:(t,e,n)=>{"use strict";n.d(e,{Z:()=>E});var r=n(24852),o=n.n(r),i=n(1262),c=n(99534),u=n(5346),a=n(67076),l=["confirming","confirmYes","confirmNo","confirmTitle","confirmContent","confirmModal","draggable","onConfirm","setConfirming"];function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],c=!0,u=!1;try{for(n=n.call(t);!(c=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{c||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,e)||function(t,e){if(t){if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var d=(0,a.compose)((0,a.withProps)((function(t){var e=t.setConfirming;return{onClose:function(t){null!=t&&t.stopPropagation&&t.stopPropagation(),e(!1)}}})))((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.confirmYes,n=void 0===e?o().createElement(u.Z,{msgId:"yes"}):e,r=t.confirmNo,a=void 0===r?o().createElement(u.Z,{msgId:"no"}):r,l=t.confirmTitle,s=void 0===l?o().createElement(u.Z,{msgId:"confirm"}):l,f=t.confirmContent,d=t.confirmButtonBSStyle,p=void 0===d?"primary":d,E=t.show,m=void 0!==E&&E,y=t.confirmModal,O=void 0===y||y,v=t.draggable,T=void 0!==v&&v,g=t.onClose,S=void 0===g?function(){}:g,h=t.onConfirm,b=void 0===h?function(){}:h;return m?o().createElement(c.Z,null,o().createElement("div",{className:"with-confirm-modal"},o().createElement(i.Z,{draggable:T,show:m,modal:O,onClose:S,onConfirm:b,title:s,confirmButtonContent:n,closeText:a,confirmButtonBSStyle:p,closeGlyph:"1-close"},f))):null})),p=function(t){return function(e){var n=e.confirming,r=e.confirmYes,i=e.confirmNo,c=e.confirmTitle,u=e.confirmContent,a=e.confirmModal,s=e.draggable,f=e.onConfirm,p=e.setConfirming,E=function(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}(e,l);return o().createElement(o().Fragment,null,o().createElement(d,{show:n,setConfirming:p,confirmYes:r,confirmNo:i,confirmTitle:c,confirmContent:u,confirmModal:a,draggable:s,onConfirm:f}),o().createElement(t,E))}};const E=function(t){return(0,a.compose)((0,a.withState)("confirming","setConfirming",!1),(0,a.withHandlers)({onClick:function(t){var e=t.setConfirming,n=void 0===e?function(){}:e,r=t.onClick,o=void 0===r?function(){}:r,i=t.confirmPredicate,c=void 0===i||i;return function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];var i=e||[],u=s(i,1),a=u[0];null!=a&&a.stopPropagation&&a.stopPropagation(),c?n(!0):o.apply(void 0,e)}},onConfirm:function(t){var e=t.onClick,n=void 0===e?function(){}:e,r=t.setConfirming,o=void 0===r?function(){}:r;return function(){o(!1),n.apply(void 0,arguments)}}}),p)(t)}},7501:(t,e,n)=>{"use strict";n.d(e,{hp:()=>a,cM:()=>l,Qi:()=>s,TU:()=>f,IQ:()=>d,hb:()=>p,HL:()=>E,dq:()=>m,Iy:()=>y,Qd:()=>O,ER:()=>v,Gi:()=>T,mA:()=>g,jR:()=>S,mD:()=>h,XG:()=>b,B6:()=>I,f5:()=>R,gW:()=>D});var r=n(27361),o=n.n(r),i=n(13311),c=n.n(i),u=n(22222),a=function(t){return o()(t,"mediaEditor.open")},l=function(t){return o()(t,"mediaEditor.saveState.editing",!1)},s=function(t){return o()(t,"mediaEditor.saveState.addingMedia",!1)},f=function(t){return o()(t,"mediaEditor.saveState")},d=function(t){return o()(t,"mediaEditor.settings.sourceId")},p=function(t){return o()(t,"mediaEditor.settings.mediaType")},E=function(t){return o()(t,"mediaEditor.settings.sources")},m=function(t){return o()(E(t),d(t),{})},y=function(t){return function(t){return o()(function(t){return o()(t,"mediaEditor.settings.mediaTypes")}(t),"".concat(p(t),".sources"),[])}(t).map((function(e){return{id:e,name:(n=e,function(t){return o()(E(t),"".concat(n),{})})(t).name};var n}))},O=function(t){return o()(t,'mediaEditor.data["'.concat(p(t),'"]["').concat(d(t),'"].resultData'))},v=function(t){return o()(t,'mediaEditor.data["'.concat(p(t),'"]["').concat(d(t),'"].params'))},T=function(t){return o()(O(t),"resources")},g=function(t){return o()(O(t),"totalCount")},S=function(t){return o()(t,"mediaEditor.selected")},h=function(t){return o()(t,"mediaEditor.loadingSelected")},b=function(t){return o()(t,"mediaEditor.loadingList")},I=(0,u.P1)(T,S,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;return c()(t,{id:e})})),R=function(t){return o()(t,"mediaEditor.disabledMediaType",[])},D=function(t){return R(t).length&&!I(t)&&"map"===p(t)}},27693:(t,e,n)=>{"use strict";n.d(e,{rR:()=>r,D0:()=>o,Cz:()=>i});var r={GEOSTORY:"geostory",GEOSTORE:"geostore"},o={type:"osm",title:"Open Street Map",name:"mapnik",source:"osm",group:"background",visibility:!0,id:"mapnik__0",loading:!1,loadingError:!1},i=function(t,e){return t.find((function(t){return t.id===e}))?e:r.GEOSTORY}}}]);