(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"6bcd":function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var a={left:{enter:"animated fadeInLeft",leave:"animated fadeOutRight"},right:{enter:"animated fadeInRight",leave:"animated fadeOutLeft"},up:{enter:"animated fadeInDown",leave:"animated fadeOutDown"},down:{enter:"animated fadeInUp",leave:"animated fadeOutUp"},in:{enter:"animated fadeIn",leave:"animated fadeOut"}}},"8e31":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-layout",{on:{scroll:e.scrollHandler,"scroll-height":e.scrollHeightHandler}},[i("q-page-container",{on:e._d({},[e.keyUpEvent,e.handleKey,e.wheelEvent,e.handleWheel])},[i("transition",{attrs:{"enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut",mode:"out-in"}},[e.ifPagePhotograph?i("div",{on:e._d({},[e.clickEvent,e.handleClick])},[i("router-view",{directives:[{name:"touch-swipe",rawName:"v-touch-swipe",value:e.handleSwipe,expression:"handleSwipe"}],ref:"itemNav",attrs:{updateLayout:e.updateLayout,tabindex:"-1"}})],1):e.ifReview?i("div",{on:e._d({},[e.clickEvent,e.handleClick])},[i("router-view",{directives:[{name:"touch-swipe",rawName:"v-touch-swipe.horizontal",value:e.handleSwipe,expression:"handleSwipe",modifiers:{horizontal:!0}}],ref:"itemNav",attrs:{updateLayout:e.updateLayout,tabindex:"-1"}})],1):i("div",{on:e._d({},[e.clickEvent,e.handleClick])},[i("router-view",{attrs:{updateLayout:e.updateLayout}})],1)]),i("q-linear-progress",{staticClass:"fixed-top",attrs:{buffer:e.updateLayout.buffer,value:e.updateLayout.value}}),i("q-page-sticky",{attrs:{offset:[18,18],position:"bottom-right"}},[i("q-fab",{staticStyle:{transition:"opacity .3s"},style:{opacity:e.qFabOpacity},attrs:{direction:"up",color:"primary",icon:e.Icons.mdiPlus,"active-icon":e.Icons.mdiClose},on:{hide:function(t){e.qFabOpacity=.3},show:function(t){e.qFabOpacity=1}}},["page"===e.$route.name&&"/"!==e.$route.path&&"/1"!==e.$route.path?i("q-fab-action",{attrs:{color:"primary",icon:e.Icons.mdiPageFirst},on:{click:function(t){e.updateLayout.page--}}},[i("q-tooltip",{attrs:{anchor:"center left",self:"center right"}},[e._v("First page")])],1):e._e(),"page"===e.$route.name&&e.$route.path!=="/"+e.updateLayout.lastPage?i("q-fab-action",{attrs:{color:"primary",icon:e.Icons.mdiPageLast},on:{click:function(t){e.updateLayout.page++}}},[i("q-tooltip",{attrs:{anchor:"center left",self:"center right"}},[e._v("Last page")])],1):e._e(),"page"!==e.$route.name?i("q-fab-action",{attrs:{color:"primary",icon:e.Icons.mdiHomeVariant,to:"/"}},[i("q-tooltip",{attrs:{anchor:"center left",self:"center right"}},[e._v("Home")])],1):e._e(),"/photography"!==e.$route.path?i("q-fab-action",{attrs:{color:"primary",icon:e.Icons.mdiImageFilterHdr,to:"/photography"}},[i("q-tooltip",{attrs:{anchor:"center left",self:"center right"}},[e._v("Photography")])],1):e._e(),"/reviews"!==e.$route.path?i("q-fab-action",{attrs:{color:"primary",icon:e.Icons.mdiGamepad,to:"/reviews"}},[i("q-tooltip",{attrs:{anchor:"center left",self:"center right"}},[e._v("Oyun yazıları")])],1):e._e(),"/contact"!==e.$route.path?i("q-fab-action",{attrs:{color:"primary",icon:e.Icons.mdiAt,to:"/contact"}},[i("q-tooltip",{attrs:{anchor:"center left",self:"center right"}},[e._v("Contact")])],1):e._e(),i("q-fab-action",{attrs:{color:"primary",icon:e.Icons.mdiHelp},on:{click:e.showHelp}},[i("q-tooltip",{attrs:{anchor:"center left",self:"center right"}},[e._v("How to navigate")])],1)],1)],1)],1)],1)},o=[],r=(i("7f7f"),i("6bcd")),n={name:"MainLayout",data:function(){return{updateLayout:{value:0,buffer:0,page:0,lastPage:0},qFabOpacity:.3,scrollPosition:0}},computed:{keyUpEvent:function(){return this.ifPagePhotograph||this.ifReview?"keyup":null},wheelEvent:function(){return this.ifPagePhotograph?"wheel":null},clickEvent:function(){return this.ifPagePhotograph?"click":null},touchEvent:function(){},ifPagePhotograph:function(){return"page"===this.$route.name||"photograph"===this.$route.name},ifReview:function(){return"review"===this.$route.name}},methods:{showHelp:function(){var e="These are general instructions,some options might not apply every page.<br>";this.$q.platform.is.mobile?e+="<br><em>Swipe horizontally/vertically:</em> Next/prev page<br><em>Tap right/left side of screen:</em> Next/prev page":e+="<br><em>Click and move horizontally/vertically with mouse:</em> Next/prev page<br><em>Click right/left side of screen with mouse:</em> Next/prev page<br><em>Mouse wheel down/up:</em> Next/prev page<br><em>Left/right/up/down/page up/page down keys:</em> Next/prev page<br><em>Home/end keys:</em> First/last page<br><em>Esc key:</em> Close photograph/review",e+="<br>You can use floating buttons for first/last page and to navigate to the rest of the site.",this.$q.dialog({message:e,html:!0,position:"bottom",ok:!1,"full-width":!0})},scrollHandler:function(e){"/photography"!==this.$route.path&&"/reviews"!==this.$route.path||(this.scrollPosition=e.position),this.updateLayout.value=e.position/(document.body.scrollHeight-window.innerHeight)},scrollHeightHandler:function(e){"/photography"!==this.$route.path&&"/reviews"!==this.$route.path||(this.updateLayout.value=this.scrollPosition/(document.body.scrollHeight-window.innerHeight))},handleKey:function(e){if(e.preventDefault(),!this.$q.loading.isActive)switch(e.keyCode){case 37:this.ifReview||this.$root.$emit("prev",r["a"].left);break;case 39:this.ifReview||this.$root.$emit("next",r["a"].right);break;case 38:this.ifReview||this.$root.$emit("prev",r["a"].up);break;case 40:this.ifReview||this.$root.$emit("next",r["a"].down);break;case 33:this.ifReview||this.$root.$emit("prev",r["a"].up);break;case 34:this.ifReview||this.$root.$emit("next",r["a"].down);break;case 36:this.ifReview||this.$root.$emit("first");break;case 35:this.ifReview||this.$root.$emit("last");break;case 27:"photograph"===this.$route.name?this.$router.push("/photography"):this.ifReview&&this.$router.push("/reviews");break}},handleWheel:function(e){e.preventDefault(),!this.$q.loading.isActive&&e.deltaY>0?this.$root.$emit("next",r["a"].down):!this.$q.loading.isActive&&e.deltaY<0&&this.$root.$emit("prev",r["a"].up)},handleClick:function(e){e.preventDefault(),!this.$q.loading.isActive&&e.clientX>e.currentTarget.offsetWidth/2?this.$root.$emit("next",r["a"].right):this.$q.loading.isActive||this.$root.$emit("prev",r["a"].left)},handleSwipe:function(e){if(e.evt.preventDefault(),!this.$q.loading.isActive&&"touchmove"===e.evt.type&&e.touch)switch(e.direction){case"right":this.$root.$emit("prev",r["a"].left);break;case"left":this.$root.$emit("next",r["a"].right);break;case"down":this.$root.$emit("prev",r["a"].up);break;case"up":this.$root.$emit("next",r["a"].down);break}}},mounted:function(){this.$refs.itemNav&&this.$refs.itemNav.$el.focus()},updated:function(){this.$refs.itemNav&&this.$refs.itemNav.$el.focus()}},s=n,c=i("2877"),l=Object(c["a"])(s,a,o,!1,null,null,null);t["default"]=l.exports}}]);