(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[3828],{34990:(e,t,n)=>{"use strict";n.d(t,{D7:()=>c,mN:()=>u,vb:()=>s,KT:()=>f,QK:()=>d,cc:()=>m,Gx:()=>p,XH:()=>E,lX:()=>y,tP:()=>O,Dq:()=>v,LE:()=>g,SW:()=>h,si:()=>T,i2:()=>S,IY:()=>b,Zf:()=>I,ij:()=>R,Hb:()=>D,Mk:()=>_,c:()=>C,NZ:()=>A,Cx:()=>G,wb:()=>w,km:()=>M,un:()=>N,Ro:()=>P,jr:()=>Y,ZY:()=>j,EQ:()=>k,W$:()=>L,mk:()=>B,IH:()=>Z,rp:()=>x,D_:()=>z,zJ:()=>U,wJ:()=>V,OS:()=>W,YP:()=>H,Ct:()=>F,Od:()=>Q,y6:()=>$,g5:()=>q,_e:()=>K,DF:()=>X,GD:()=>J,K0:()=>ee,kB:()=>te,Xn:()=>ne,G5:()=>re,Vx:()=>oe,RZ:()=>ie,pB:()=>ae,$A:()=>le,m7:()=>ce,YM:()=>ue,o2:()=>se,ql:()=>fe,c0:()=>de,nL:()=>me,Fu:()=>pe,WE:()=>Ee,fD:()=>ye,EE:()=>Oe});var r=n(47037),o=n.n(r),i=n(55877),a=n.n(i),l=n(92579),c="GEOSTORY:ADD",u="GEOSTORY:ADD_RESOURCE",s="GEOSTORY:CHANGE_MODE",f="GEOSTORY:CLEAR_SAVE_ERROR",d="GEOSTORY:EDIT_RESOURCE",m="GEOSTORY:EDIT_WEBPAGE",p="GEOSTORY:SCROLLING",E="GEOSTORY:LOAD_GEOSTORY",y="GEOSTORY:LOADING_GEOSTORY",O="GEOSTORY:MOVE",v="GEOSTORY:REMOVE",g="GEOSTORY:SAVE_STORY",h="GEOSTORY:SAVE_ERROR",T="GEOSTORY:STORY_SAVED",S="GEOSTORY:SELECT_CARD",b="GEOSTORY:SET_CONTROL",I="GEOSTORY:SET_RESOURCE",R="GEOSTORY:SET_CURRENT_STORY",D="GEOSTORY:SET_WEBPAGE_URL",_="GEOSTORY:TOGGLE_CARD_PREVIEW",C="GEOSTORY:TOGGLE_SETTINGS_PANEL",A="GEOSTORY:TOGGLE_SETTING",G="GEOSTORY:TOGGLE_CONTENT_FOCUS",w="GEOSTORY:UPDATE",M="GEOSTORY:UPDATE_SETTING",N="GEOSTORY:UPDATE_CURRENT_PAGE",P="GEOSTORY:REMOVE_RESOURCE",Y="GEOSTORY:SET_PENDING_CHANGES",j="GEOSTORY:SET_UPDATE_URL_SCROLL",k="GEOSTORY:UPDATE_MEDIA_EDITOR_SETTINGS",L="GEOSTORY:HIDE_CAROUSEL_ITEMS",B="GEOSTORY:ENABLE_DRAW",Z=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(e){return e};return{type:c,id:n&&n.id||a()(),path:e,position:t,element:o()(n)&&(0,l.nq)(n,r)||n}},x=function(e,t,n){return{type:u,id:e,mediaType:t,data:n}},z=function(e){return{type:s,mode:e?l.nl.EDIT:l.nl.VIEW}},U=function(e,t,n){return{type:d,id:e,mediaType:t,data:n}},V=function(e,t){return{type:E,id:e,options:t}},W=function(e){return{type:"GEOSTORY:GEOSTORY_LOADED",id:e}},H=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"loading";return{type:y,value:e,name:t}},F=function(e){return{type:"GEOSTORY:LOAD_GEOSTORY_ERROR",error:e}},Q=function(e){return{type:v,path:e}},$=function(e){return{type:h,error:e}},q=function(e,t){return{type:b,control:e,value:t}},K=function(e){return{type:S,card:e}},X=function(e){return{type:I,resource:e}},J=function(e){return{type:T,id:e}},ee=function(e){return{type:R,story:e}},te=function(){return{type:_}},ne=function(e){return{type:A,option:e}},re=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return{type:C,withSave:e}},oe=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"replace";return{type:w,path:e,element:t,mode:n}},ie=function(e){var t=e.sectionId,n=e.columnId;return{type:N,sectionId:t,columnId:n}},ae=function(e,t,n){return{type:O,source:e,target:t,position:n}},le=function(e,t,n,r,o){return{type:G,status:e,target:t,selector:n,hideContent:r,path:o}},ce=function(e,t){return{type:M,prop:e,value:t}},ue=function(e){return{type:D,src:e}},se=function(e){var t=e.path,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GEOSTORY";return{type:m,path:t,owner:n}},fe=function(e,t){return{type:P,id:e,mediaType:t}},de=function(e){return{type:Y,value:e}},me=function(e){return{type:j,value:e}},pe=function(e){return{type:k,mediaEditorSettings:e}},Ee=function(e){return{type:p,status:e}},ye=function(e,t){return{type:L,sectionId:e,showContentId:t}},Oe=function(e){return{type:B,drawOptions:e}}},82385:(e,t,n)=>{"use strict";n.d(t,{nr:()=>r,B8:()=>o,LE:()=>i,$Z:()=>a,Cp:()=>l});var r="MAP_EDITOR:SHOW",o="MAP_EDITOR:HIDE",i="MAP_EDITOR:SAVE",a=function(e,t){return{type:r,owner:e,map:t}},l=function(e){return{type:o,owner:e}}},93848:(e,t,n)=>{"use strict";n.d(t,{Ai:()=>a,AQ:()=>l,Gl:()=>c,wd:()=>u,V9:()=>s,ih:()=>f,B8:()=>d,ww:()=>m,HP:()=>p,ri:()=>E,gd:()=>y,nr:()=>O,ty:()=>v,GZ:()=>g,O6:()=>h,Vt:()=>T,Ug:()=>S,Wp:()=>b,Ke:()=>I,Cp:()=>R,pW:()=>D,Gr:()=>_,gG:()=>C,oo:()=>A,Gh:()=>G,$G:()=>w,I5:()=>M,d8:()=>N,y5:()=>P,Az:()=>Y,$Z:()=>j,Ql:()=>k,Ul:()=>L,TU:()=>B,E0:()=>Z,Yt:()=>x,Tk:()=>z});var r=n(13218),o=n.n(r),i=n(27693),a="MEDIA_EDITOR:ADDING_MEDIA",l="MEDIA_EDITOR:CHOOSE_MEDIA",c="MEDIA_EDITOR:EDITING_MEDIA",u="GEOSTORY:EDIT_MEDIA",s="MEDIA_EDITOR:LOAD_MEDIA",f="MEDIA_EDITOR:LOAD_MEDIA_SUCCESS",d="MEDIA_EDITOR:HIDE",m="MEDIA_EDITOR:SAVE_MEDIA",p="MEDIA_EDITOR:SET_MEDIA_TYPE",E="MEDIA_EDITOR:SET_MEDIA_SERVICE",y="MEDIA_EDITOR:SELECT_ITEM",O="MEDIA_EDITOR:SHOW",v="MEDIA_EDITOR:UPDATE_ITEM",g="MEDIA_EDITOR:IMPORT_IN_LOCAL",h="MEDIA_EDITOR:REMOVE_MEDIA",T="MEDIA_EDITOR:LOADING_SELECTED_MEDIA",S="MEDIA_EDITOR:LOADING_MEDIA_LIST",b="MEDIA_EDITOR:MEDIA_TYPE_DISABLE",I=function(e){return{type:l,resource:e}},R=function(){return{type:d}},D=function(e,t,n){return{type:s,params:e,mediaType:t,sourceId:n}},_=function(e){var t=e.mediaType,n=e.sourceId,r=e.params,o=e.resultData;return{type:f,mediaType:t,sourceId:n,params:r,resultData:o}},C=function(e){var t=e.type,n=e.source,r=e.data;return{type:m,mediaType:t,source:n,data:r}},A=function(e){return{type:"MEDIA_EDITOR:SAVE_MEDIA_SUCCESS",mediaType:e.mediaType,source:e.source,data:e.data,id:e.id}},G=function(e){return{type:y,id:e}},w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"merge";return{type:v,item:e,mode:t}},M=function(e){return{type:a,adding:e}},N=function(e){return{type:E,id:o()(e)?e.value:e}},P=function(e){return{type:p,mediaType:e}},Y=function(e){return{type:c,editing:e}},j=function(e,t){return{type:O,owner:e,settings:t}},k=function(e,t){var n=e.path,r=e.owner;return{type:u,path:n,owner:void 0===r?"geostory":r,sectionType:t}},L=function(e){var t=e.resource,n=e.sourceType,r=void 0===n?i.r.GEOSTORY:n,o=e.owner;return{type:g,resource:t,sourceType:r,owner:void 0===o?"geostory":o}},B=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"geostory";return{type:h,mediaType:e,owner:t}},Z=function(e){return{type:T,loading:e}},x=function(){return{type:S}},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{type:b,mediaTypes:e}}},52826:(e,t,n)=>{"use strict";n.d(t,{Z:()=>O});var r=n(24852),o=n.n(r),i=n(70390),a=n(32425),l=n(80628),c=n(30294),u=n(92579),s=n(5346);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var y=(0,l.Z)((function(e){var t=e.src,n=e.width,l=e.height,u=e.resolution,f=e.thumbnail,m=e.controls,E=e.play,y=e.onPlay,O=void 0===y?function(){}:y,v=e.onStart,g=void 0===v?function(){}:v,h=e.fit,T=e.loop,S=e.volume,b=void 0===S?1:S,I=e.muted,R=E,D=p((0,r.useState)(R),2),_=D[0],C=D[1],A=p((0,r.useState)(),2),G=A[0],w=A[1],M=p((0,r.useState)(E),2),N=M[0],P=M[1],Y="cover"===h,j=p((0,r.useState)(!1),2),k=j[0],L=j[1];(0,r.useEffect)((function(){!_&&R&&(C(!0),P(!0)),_&&g(_)}),[_,R]);var B,Z=(B=n/l,Y?B<u?[l*u,l]:[n,n/u]:"contain"===h?B<u?[n,n/u]:[l*u,l]:[n,n/u]),x="contain"===h||Y?l:Z[1],z=!Y&&m,U=!!Y||T;return o().createElement("div",{className:"ms-video",style:{position:"relative",width:n,height:x,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"}},t&&o().createElement(o().Fragment,null,_&&o().createElement(i.ZP,{url:t,width:Z[0],height:Z[1],playing:R,loop:U,volume:b,muted:I,style:Y?{left:"50%",top:"50%",transform:"translate(-50%, -50%)",position:"absolute"}:{},controls:z,pip:!1,fileConfig:{attributes:{controlsList:"nodownload",disablePictureInPicture:!0}},youtubeConfig:{playerVars:{controls:z?2:0,modestbranding:1,rel:0}},onReady:function(){return P(!1)},onError:function(e){w(e),(""+e).includes("NotAllowedError")&&(O(!1),L(!0),P(!1))},onPause:function(){O(!1)},onPlay:function(){O(!0),k&&(w(!1),L(!1))}}),(!_||_&&(N||G))&&o().createElement("div",{className:"ms-video-cover",style:d(d({position:"absolute",width:Z[0],height:Z[1],display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(0, 0, 0, 1.0)"},!(N||G)&&{cursor:"pointer"}),!R&&f&&{backgroundImage:"url(".concat(f,")"),backgroundSize:Y?"cover":"640px auto",backgroundPosition:"center",backgroundRepeat:"no-repeat"}),onClick:function(){k?(L(!1),w(!1)):P(!0),C(!0),O(!0)}},N&&o().createElement(a.Z,{size:70}),G&&!k&&o().createElement("div",{className:"text-center"},o().createElement(c.Glyphicon,{glyph:"alert",style:{fontSize:Z[1]/4>100?100:Z[1]/4,mixBlendMode:"difference",color:"#ffffff"}}),o().createElement("h3",null,o().createElement(s.Z,{msgId:"geostory.errors.loading.video"}))," "),(!(N||G)&&!R||G&&k)&&o().createElement(c.Glyphicon,{glyph:"play",style:{fontSize:Z[1]/4>100?100:Z[1]/4,mixBlendMode:"difference",color:"#ffffff"}}))),!z&&!k&&o().createElement("div",{className:"ms-video-mask-cover",style:{position:"absolute",width:Z[0],height:Z[1]}}))}));const O=function(e){var t=e.id,n=e.src,i=e.resolution,a=void 0===i?16/9:i,l=e.autoplay,c=e.inView,s=e.description,f=e.showCaption,d=e.caption,m=void 0===d?s:d,E=e.thumbnail,O=e.credits,v=e.controls,g=void 0===v||v,h=e.fit,T=e.loop,S=e.muted,b=e.onPlay,I=void 0===b?function(){}:b,R=e.mode,D=e.containerInView,_=(void 0===D||D)&&c,C=p((0,r.useState)(!1),2),A=C[0],G=C[1],w=function(e){G(e),I(e)};return(0,r.useEffect)((function(){R===u.nl.EDIT&&w(!1)}),[R]),(0,r.useEffect)((function(){R===u.nl.VIEW&&_&&(l||"cover"===h)&&w(!0)}),[_,l,h,R]),(0,r.useEffect)((function(){R===u.nl.VIEW&&!_&&A&&w(!1)}),[_,A,R]),o().createElement("div",{id:t,key:"".concat(t,"-").concat(h,"-").concat(R),className:"ms-media ms-media-video"},o().createElement(y,{src:n,play:A&&R===u.nl.VIEW,resolution:a,thumbnail:E,controls:g&&R===u.nl.VIEW,onPlay:w,fit:h,loop:T,muted:S}),O&&o().createElement("div",{className:"ms-media-credits"},o().createElement("small",null,O)),f&&m&&o().createElement("div",{className:"ms-media-caption"},o().createElement("small",null,m)))}},1262:(e,t,n)=>{"use strict";n.d(t,{Z:()=>I});var r=n(27418),o=n.n(r),i=n(45697),a=n.n(i),l=n(24852),c=n.n(l),u=n(80307),s=n.n(u),f=n(30294),d=n(38560),m=n(5346),p=n(7472);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(l,e);var t,n,r,i,a=(r=l,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(r);if(i){var n=T(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function l(){var e;y(this,l);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return S(h(e=a.call.apply(a,[this].concat(n))),"setConfirmRef",(function(t){return e.confirm=t,e.confirm})),e}return t=l,(n=[{key:"componentDidMount",value:function(){this.props.focusConfirm&&s().findDOMNode(this.confirm).focus()}},{key:"render",value:function(){return c().createElement(p.Z,{draggable:this.props.draggable,onClickOut:this.props.onClose,id:"confirm-dialog",modal:this.props.modal,style:o()({},this.props.style,{display:this.props.show?"block":"none"})},c().createElement("span",{role:"header"},c().createElement("span",{className:"user-panel-title"},this.props.title),c().createElement("button",{onClick:this.props.onClose,className:"login-panel-close close"},this.props.closeGlyph?c().createElement(f.Glyphicon,{glyph:this.props.closeGlyph}):c().createElement("span",null,"×"))),c().createElement("div",{role:"body"},this.props.children),c().createElement("div",{role:"footer"},c().createElement(f.ButtonGroup,null,c().createElement(d.Z,{ref:this.setConfirmRef,onClick:this.props.onConfirm,disabled:this.props.confirmButtonDisabled,bsStyle:this.props.confirmButtonBSStyle},this.props.confirmButtonContent),c().createElement(d.Z,{onClick:this.props.onClose},this.props.closeText))))}}])&&O(t.prototype,n),l}(c().Component);S(b,"propTypes",{show:a().bool,draggable:a().bool,onClose:a().func,onConfirm:a().func,onSave:a().func,modal:a().bool,closeGlyph:a().string,style:a().object,buttonSize:a().string,inputStyle:a().object,title:a().node,confirmButtonContent:a().node,confirmButtonDisabled:a().bool,closeText:a().node,confirmButtonBSStyle:a().string,focusConfirm:a().bool}),S(b,"defaultProps",{onClose:function(){},onChange:function(){},modal:!0,title:c().createElement(m.Z,{msgId:"confirmTitle"}),closeGlyph:"",confirmButtonBSStyle:"danger",confirmButtonDisabled:!1,confirmButtonContent:c().createElement(m.Z,{msgId:"confirm"})||"Confirm",closeText:c().createElement(m.Z,{msgId:"close"}),includeCloseButton:!0,focusConfirm:!1});const I=b},99534:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(61365),o=n(56936);const i=(0,r.Z)(o.h_)},94745:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(24852),o=n.n(r),i=n(30294),a=n(7472),l=n(80717),c=n(67076),u=n(19081),s=n.n(u),f=n(75480),d={xs:" ms-xs",sm:" ms-sm",md:"",lg:" ms-lg"},m={className:{vertical:" ms-fullscreen-v",horizontal:" ms-fullscreen-h",full:" ms-fullscreen"},glyph:{expanded:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-small"},collapsed:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-full"}}};const p=(0,c.withState)("fullscreenState","onFullscreen",(function(e){var t=e.initialFullscreenState;return void 0===t?"collapsed":t}))((function(e){var t=e.show,n=void 0!==t&&t,r=e.loading,c=e.loadingText,u=e.onClose,p=void 0===u?function(){}:u,E=e.title,y=void 0===E?"":E,O=e.clickOutEnabled,v=void 0===O||O,g=e.showClose,h=void 0===g||g,T=e.disabledClose,S=void 0!==T&&T,b=e.showFullscreen,I=void 0!==b&&b,R=e.fullscreenType,D=void 0===R?"full":R,_=e.buttons,C=void 0===_?[]:_,A=e.size,G=void 0===A?"":A,w=e.bodyClassName,M=void 0===w?"":w,N=e.children,P=e.draggable,Y=void 0!==P&&P,j=e.fullscreenState,k=e.onFullscreen,L=e.fade,B=void 0!==L&&L,Z=e.fitContent,x=e.modalClassName,z=void 0===x?"":x,U=e.dialogClassName,V=void 0===U?"":U,W=e.enableFooter,H=void 0===W||W,F=d[G]||"",Q=I&&"expanded"===j&&m.className[D]||"",$=n?o().createElement("div",{className:"modal-fixed ".concat(z," ")+(Y?"ms-draggable":"")},o().createElement(a.Z,{id:"ms-resizable-modal",style:{display:"flex"},onClickOut:v?p:function(){},containerClassName:"ms-resizable-modal",draggable:Y,modal:!0,className:"modal-dialog modal-content"+F+Q+V+(Z?" ms-fit-content":"")},o().createElement("span",{role:"header"},o().createElement("h4",{className:"modal-title"},o().createElement("div",{className:"ms-title"},y),I&&m.className[D]&&o().createElement(i.Glyphicon,{className:"ms-header-btn",onClick:function(){return k("expanded"===j?"collapsed":"expanded")},glyph:m.glyph[j][D]}),h&&p&&o().createElement(i.Glyphicon,{glyph:"1-close",className:"ms-header-btn",onClick:p,disabled:S}))),o().createElement("div",{role:"body",className:M},N),H&&o().createElement("div",{style:{display:"flex"},role:"footer"},o().createElement("div",{className:"ms-resizable-modal-loading-spinner-container"},r?o().createElement(f.Z,null):null),o().createElement("div",{className:"ms-resizable-modal-loading-text"},r?c:null),o().createElement(l.Z,{buttons:C})))):null;return B?o().createElement(s(),{transitionName:"ms-resizable-modal-fade",transitionEnterTimeout:300,transitionLeaveTimeout:300},$):$}))},12122:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(24852),o=n.n(r),i=n(1262),a=n(99534),l=n(5346),c=n(67076),u=["confirming","confirmYes","confirmNo","confirmTitle","confirmContent","confirmModal","draggable","onConfirm","setConfirming"];function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var d=(0,c.compose)((0,c.withProps)((function(e){var t=e.setConfirming;return{onClose:function(e){null!=e&&e.stopPropagation&&e.stopPropagation(),t(!1)}}})))((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.confirmYes,n=void 0===t?o().createElement(l.Z,{msgId:"yes"}):t,r=e.confirmNo,c=void 0===r?o().createElement(l.Z,{msgId:"no"}):r,u=e.confirmTitle,s=void 0===u?o().createElement(l.Z,{msgId:"confirm"}):u,f=e.confirmContent,d=e.confirmButtonBSStyle,m=void 0===d?"primary":d,p=e.show,E=void 0!==p&&p,y=e.confirmModal,O=void 0===y||y,v=e.draggable,g=void 0!==v&&v,h=e.onClose,T=void 0===h?function(){}:h,S=e.onConfirm,b=void 0===S?function(){}:S;return E?o().createElement(a.Z,null,o().createElement("div",{className:"with-confirm-modal"},o().createElement(i.Z,{draggable:g,show:E,modal:O,onClose:T,onConfirm:b,title:s,confirmButtonContent:n,closeText:c,confirmButtonBSStyle:m,closeGlyph:"1-close"},f))):null})),m=function(e){return function(t){var n=t.confirming,r=t.confirmYes,i=t.confirmNo,a=t.confirmTitle,l=t.confirmContent,c=t.confirmModal,s=t.draggable,f=t.onConfirm,m=t.setConfirming,p=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(t,u);return o().createElement(o().Fragment,null,o().createElement(d,{show:n,setConfirming:m,confirmYes:r,confirmNo:i,confirmTitle:a,confirmContent:l,confirmModal:c,draggable:s,onConfirm:f}),o().createElement(e,p))}};const p=function(e){return(0,c.compose)((0,c.withState)("confirming","setConfirming",!1),(0,c.withHandlers)({onClick:function(e){var t=e.setConfirming,n=void 0===t?function(){}:t,r=e.onClick,o=void 0===r?function(){}:r,i=e.confirmPredicate,a=void 0===i||i;return function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var i=t||[],l=s(i,1),c=l[0];null!=c&&c.stopPropagation&&c.stopPropagation(),a?n(!0):o.apply(void 0,t)}},onConfirm:function(e){var t=e.onClick,n=void 0===t?function(){}:t,r=e.setConfirming,o=void 0===r?function(){}:r;return function(){o(!1),n.apply(void 0,arguments)}}}),m)(e)}},7501:(e,t,n)=>{"use strict";n.d(t,{hp:()=>c,cM:()=>u,Qi:()=>s,TU:()=>f,IQ:()=>d,hb:()=>m,HL:()=>p,dq:()=>E,Iy:()=>y,Qd:()=>O,ER:()=>v,Gi:()=>g,mA:()=>h,jR:()=>T,mD:()=>S,XG:()=>b,B6:()=>I,f5:()=>R,gW:()=>D});var r=n(27361),o=n.n(r),i=n(13311),a=n.n(i),l=n(22222),c=function(e){return o()(e,"mediaEditor.open")},u=function(e){return o()(e,"mediaEditor.saveState.editing",!1)},s=function(e){return o()(e,"mediaEditor.saveState.addingMedia",!1)},f=function(e){return o()(e,"mediaEditor.saveState")},d=function(e){return o()(e,"mediaEditor.settings.sourceId")},m=function(e){return o()(e,"mediaEditor.settings.mediaType")},p=function(e){return o()(e,"mediaEditor.settings.sources")},E=function(e){return o()(p(e),d(e),{})},y=function(e){return function(e){return o()(function(e){return o()(e,"mediaEditor.settings.mediaTypes")}(e),"".concat(m(e),".sources"),[])}(e).map((function(t){return{id:t,name:(n=t,function(e){return o()(p(e),"".concat(n),{})})(e).name};var n}))},O=function(e){return o()(e,'mediaEditor.data["'.concat(m(e),'"]["').concat(d(e),'"].resultData'))},v=function(e){return o()(e,'mediaEditor.data["'.concat(m(e),'"]["').concat(d(e),'"].params'))},g=function(e){return o()(O(e),"resources")},h=function(e){return o()(O(e),"totalCount")},T=function(e){return o()(e,"mediaEditor.selected")},S=function(e){return o()(e,"mediaEditor.loadingSelected")},b=function(e){return o()(e,"mediaEditor.loadingList")},I=(0,l.P1)(g,T,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return a()(e,{id:t})})),R=function(e){return o()(e,"mediaEditor.disabledMediaType",[])},D=function(e){return R(e).length&&!I(e)&&"map"===m(e)}},27693:(e,t,n)=>{"use strict";n.d(t,{r:()=>r,D:()=>o});var r={GEOSTORY:"geostory",GEOSTORE:"geostore"},o={type:"osm",title:"Open Street Map",name:"mapnik",source:"osm",group:"background",visibility:!0,id:"mapnik__0",loading:!1,loadingError:!1}}}]);