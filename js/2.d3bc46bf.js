(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"414a":function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));const s={methods:{generateLink(t){return t.toLowerCase().replace(/[çöüğşüı]/g,(t=>({"ç":"c","ö":"o","ü":"u","ğ":"g","ş":"s","ı":"i"}[t]))).replace(/[^\w ]+/g,"").replace(/ +/g,"-")}}}},"5e7d":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:{fullscreen:"photograph"===t.$route.name},staticStyle:{"z-index":"inherit"}},[i("q-carousel",{staticClass:"full-height",style:"photograph"===t.$route.name?{"background-color":"black"}:{"background-color":""},attrs:{animated:"",infinite:""},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},t._l(t.collection,(function(e){return i("q-carousel-slide",{key:e.id,staticClass:"column no-wrap q-pa-none",class:{"flex-center":"photograph"===t.$route.name},attrs:{name:e.id}},[t._t("default",null,{item:e})],2)})),1),"photograph"===t.$route.name?i("div",{staticClass:"absolute-center full-width full-height row"},[i("router-link",{staticClass:"col-6",attrs:{to:t.prevSlideId,event:""}}),i("router-link",{staticClass:"col-6",attrs:{to:t.nextSlideId,event:""}})],1):t._e(),"photograph"===t.$route.name?i("div",{staticClass:"absolute-center full-width full-height"}):t._e(),i("q-page-sticky",{attrs:{offset:[18,18],position:"top-right"}},[i("q-btn",{staticStyle:{opacity:".3"},attrs:{round:"",color:"primary",icon:t.mdiClose},on:{click:function(e){return t.$router.push("photograph"===t.$route.name?"/photography":"/reviews")}}})],1)],1)},o=[],h=i("e519"),n=i("cc8e"),r=i("414a"),c={name:"ItemComponent",mixins:[n["a"],r["a"]],props:{updateLayout:Object,store:Object},data(){return{slide:0,collection:[],count:0,fetching:!0,notify:void 0,mdiClose:""}},computed:{prevSlideId(){return this.slide>0&&this.slide<this.count?(this.slide+1).toString():"1"},nextSlideId(){return this.slide>1&&this.slide<=this.count?(this.slide-1).toString():this.count.toString()},curLink(){let t="",e=this.collection.find((t=>t.id===this.slide));return this.slide>1&&this.slide<=this.count&&this.count>0&&void 0!==e&&(t=t+this.slide+"-"+this.generateLink(e.title)),t}},methods:{next(){this.fetching||this.changeSlide(1)},prev(){this.fetching||this.changeSlide(-1)},first(){this.fetching||this.changeSlide(this.slide-this.count)},last(){this.fetching||this.changeSlide(this.slide-1)},updateSlide(){this.$router.push({params:{id:"photograph"===this.$route.name?this.slide:(t=>t.id+"-"+this.generateLink(t.title))(this.collection.find((t=>t.id===this.slide)))}}).then((()=>this.fetch(this.slide)),(t=>"NavigationDuplicated"===t.name?this.notify=this.$q.notify({message:"You are at the start/end of the gallery =]",position:"top-right",onDismiss:()=>this.notify=void 0}):this.unknownError(t)))},changeSlide(t){"function"===typeof this.notify&&this.notify(),this.slide-t<=this.count&&this.slide-t>0?(this.slide-=t,this.updateSlide()):this.slide-t<1?(this.slide=this.count,this.updateSlide()):this.slide-t>this.count&&(this.slide=1,this.updateSlide())},check(t){return t>0&&t<=this.count&&!this.collection.find((e=>e.id===t))?t:t<1&&!this.collection.find((t=>t.id===this.count))?this.count:t>this.count&&!this.collection.find((t=>1===t.id))?1:-1},fetchReview(t,e){if(!(t.length>0))return this.notFound("Item Component could not fetch the detail item/items.");t.forEach(((t,i)=>this.collection.push({...e[i],...t.docs[0].data()}))),"photography"!==this.$route.name&&(this.$route.params.id!==this.curLink&&history.pushState({},null,"/reviews/"+this.curLink),document.title=this.collection.find((t=>t.id===this.slide)).title),this.fetching=!1},fetchThen(t,e){let i=[];t.forEach((t=>!1===t.empty?i.push(...t.docs):{}));let s=[],o=[];i.forEach((t=>{"photograph"!==this.$route.name&&s.push(this.store.doc(t.id).collection("review").get()),o.push(t.data())}),this),s.length?Promise.all(s).then((t=>this.fetchReview(t,o))).catch(this.connectionError):(this.collection.push(...o),this.fetching=!1),this.collection.sort(((t,e)=>e.id-t.id))},fetch(t){this.updateLayout.value=(this.count-this.slide+1)/this.count,this.fetching=!0;let e=this.check(t+1),i=this.check(t),s=this.check(t-1),o=[];e===t+1&&i===t&&s===t-1?o.push(this.fetchRange(t+2,3)):e!==t+1&&i===t&&s===t-1?(o.push(this.fetchRange(t+1,2)),o.push(this.fetchOne(e))):e===t+1&&i===t&&s!==t-1?(o.push(this.fetchRange(t+2,2)),o.push(this.fetchOne(s))):(-1!==e&&o.push(this.fetchOne(e)),-1!==i&&o.push(this.fetchOne(i)),-1!==s&&o.push(this.fetchOne(s)));let h=this.collection.find((t=>t.id===this.slide));o.length<3&&"photograph"!==this.$route.name&&void 0!==h?document.title=h.title:"photograph"===this.$route.name&&(document.title="Over 20 years, and tens of thousands of stills these are the best I can come up with. Please, don't judge..."),Promise.all(o).then((e=>this.fetchThen(e,t))).catch(this.connectionError)},fetchOne(t){return this.store.where("id","==",t).get()},fetchRange(t,e){return this.store.orderBy("id","desc").where("id","<",t).limit(e).get()},init(t){if(this.count=t.data().count,this.slide="photograph"===this.$route.name?Number(this.$route.params.id):Number(this.$route.params.id.split("-")[0]),!(this.slide>0&&this.slide<=this.count))return this.notFound("Item Component could not fetch the item/items.");this.fetch(this.slide)}},created(){this.mdiClose=h["e"],this.store.doc("data").get().then((t=>this.init(t))).catch(this.connectionError),window.onpopstate=()=>this.fetch("photograph"===this.$route.name?this.slide=Number(this.$route.params.id):this.slide=Number(this.$route.params.id.split("-")[0])),this.$root.$on("prev",(()=>this.prev())),this.$root.$on("next",(()=>this.next())),this.$root.$on("first",(()=>this.first())),this.$root.$on("last",(()=>this.last()))},destroyed(){this.updateLayout.value=this.updateLayout.buffer=0,window.onpopstate=()=>{},this.$root.$off("prev"),this.$root.$off("next"),this.$root.$off("first"),this.$root.$off("last")}},l=c,a=i("2877"),d=i("880c"),u=i("62cd"),p=i("de5e"),f=i("9c40"),m=i("eebe"),g=i.n(m),$=Object(a["a"])(l,s,o,!1,null,null,null);e["default"]=$.exports;g()($,"components",{QCarousel:d["a"],QCarouselSlide:u["a"],QPageSticky:p["a"],QBtn:f["a"]})},cc8e:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));const s={methods:{connectionError(t){return this.error("firestore","Connection problem with firestore servers. Object: "+t)},cdnProblem(t){return this.error("cdn","Connection problem with cdn servers. Object: "+t)},notFound(t){return this.error("404","Requested content could not found. Probable url mismatch. Object: "+t)},unknownError(t){return this.error("url","Have no idea what the hell just happened. Kindly inform the idiot dev please, thanks. Object: "+t)},error(t,e){return this.$q.loading.hide(),this.$router.push("/error?code="+t),Promise.reject(e)}}}}}]);