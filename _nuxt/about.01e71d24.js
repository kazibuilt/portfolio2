import{u as wt,a as ot,b as _t}from"./menuIsOpenStore.5e7bcf7b.js";import{d as yt,u as st,r as g,o as xt,a as At,b as Tt,c as M,e as a,f as j,F,g as D,t as y,h as ut,i as kt,n as Lt,j as V,p as St,k as Ct,l as Et,_ as Pt}from"./entry.01c54f3b.js";import{u as nt}from"./fromWorksTransitionStore.573937cc.js";import{g as d,P as Rt,i as U,a as Ht,w as It,S as Mt,d as jt,h as Ft,v as rt,f as Vt,c as lt}from"./webGL.b8c3ad4f.js";import{S as x,a as zt}from"./ScrollTrigger.8fa05460.js";import{s as Nt}from"./meta.a45a3a77.js";const Ot=""+globalThis.__publicAssetsURL("images/src/about-bg.webm?1120"),Wt=""+globalThis.__publicAssetsURL("images/src/about-bg.mp4"),Bt=""+globalThis.__publicAssetsURL("images/dest/about-contact.jpg.webp"),qt=""+globalThis.__publicAssetsURL("images/src/about-contact.jpg"),Yt=""+globalThis.__publicAssetsURL("images/dest/information_1.jpg.webp"),Dt=""+globalThis.__publicAssetsURL("images/src/information_1.jpg"),Ut=""+globalThis.__publicAssetsURL("images/dest/about-principle.jpg.webp"),Gt=""+globalThis.__publicAssetsURL("images/src/about-principle.jpg");var dt=function(t){return Array.prototype.slice.call(t)},ct=function(){var t=window.navigator.userAgent,i=!!t.match(/iPad/i)||!!t.match(/iPhone/i),s=!!t.match(/WebKit/i);return i&&s&&!t.match(/CriOS/i)},Jt={scale:1.5,speed:1.5,wrapperClass:null,willChange:!1,externalRAF:!1},u=function(t,i){var s=this;if(this.element=t,this.wrapper=document.createElement("div"),this.options=Object.assign({},Jt,i),this.updateOptions(),this.vh=document.documentElement.clientHeight,this.isVisible=!1,this.damp=this.calcDamp(document.documentElement.clientWidth),this.elementTagName=this.element.tagName.toLowerCase(),this.elementTagName==="img"){var e=this.element.getAttribute("src");if(!e)return;(async function(n){var o=new Image;return o.src=n,await o.decode(),o})(e).then(function(){s.createParallax()})}else this.createParallax()};u.prototype.createParallax=function(){this.setStyle(!0),this.wrapElement(),ct()||this.createObserver()},u.prototype.updateOptions=function(){var t=this.element.getAttribute("data-u-scale"),i=this.element.getAttribute("data-u-speed"),s=this.element.getAttribute("data-u-willchange");t!==null&&(this.options.scale=Number(t)),i!==null&&(this.options.speed=Number(i)),s!==null&&(this.options.willChange=!0)},u.prototype.setStyle=function(t){t===void 0&&(t=!1);var i=this.element.clientHeight,s=this.element.clientWidth,e=window.getComputedStyle(this.element),n=e.position==="absolute",o=this.wrapper.style,r=this.element.style;this.overflow=Math.floor(10*(i-i*this.options.scale))/10,n&&e.marginRight!=="0px"&&e.marginLeft!=="0px"&&e.marginLeft===e.marginRight&&(o.margin="auto"),e.marginTop==="0px"&&e.marginBottom==="0px"||(o.marginTop=e.marginTop,o.marginBottom=e.marginBottom,r.marginTop="0",r.marginBottom="0"),e.inset!=="auto"&&(o.top=e.top,o.right=e.right,o.bottom=e.bottom,o.left=e.left,r.top="0",r.right="0",r.bottom="0",r.left="0"),e.transform!=="none"&&(o.transform=e.transform),e.zIndex!=="auto"&&(o.zIndex=e.zIndex),o.position=n?"absolute":"relative",e.gridArea!=="auto"&&e.gridArea!=="auto / auto / auto / auto"&&(o.gridArea=e.gridArea,r.gridArea="auto"),t&&(o.width="100%",o.overflow="hidden",r.display="block",r.overflow="hidden",r.backfaceVisibility="hidden",e.padding!=="0px"&&(r.padding="0"),this.elementTagName==="img"?r.objectFit="cover":this.elementTagName!=="video"&&(r.backgroundPosition="center")),e.borderRadius!=="0px"&&(o.borderRadius=e.borderRadius,o.isolation||(o.isolation="isolate"),e.marginLeft!=="0px"&&(o.marginLeft=e.marginLeft,r.marginLeft="0"),e.marginRight!=="0px"&&(o.marginRight=e.marginRight,r.marginRight="0"),o.width=s+"px"),n&&(o.width=s+"px",r.width="100%"),e.maxHeight!=="none"&&(o.maxHeight=e.maxHeight,r.maxHeight="none"),e.minHeight!=="0px"&&(o.minHeight=e.minHeight,r.minHeight="none"),r.width=s+"px",o.setProperty("height",i+"px","important"),r.setProperty("height",i*this.options.scale+"px","important"),this.wrapperHeight=i},u.prototype.wrapElement=function(){var t=this.element.getAttribute("data-u-wrapper-class")||this.options.wrapperClass;t&&this.wrapper.classList.add(t);var i=this.element.closest("picture"),s=i!==null?i:this.element,e=s.parentNode;e!==null&&e.insertBefore(this.wrapper,s),this.wrapper.appendChild(s)},u.prototype.checkVisible=function(){var t=this.wrapper.getBoundingClientRect();t.bottom>0&&t.top<window.innerHeight?this.onEnter():this.onLeave()},u.prototype.createObserver=function(){var t=this;this.observer=new IntersectionObserver(function(i){i[0].isIntersecting?t.onEnter():t.onLeave()},{root:null,rootMargin:"0px",threshold:0}),this.observer.observe(this.wrapper)},u.prototype.onEnter=function(){var t=this.element.style,i="transform";this.options.willChange&&t.willChange!==i&&(t.willChange=i),this.isVisible=!0},u.prototype.onLeave=function(){var t=this.element;this.options.willChange&&t.style.willChange==="transform"&&(t.style.willChange=""),this.isVisible=!1},u.prototype.calcTranslateValue=function(){var t=window.pageYOffset;t<0&&(t=0);var i=this.wrapper.getBoundingClientRect().top+t,s=(t+this.vh-i)/((this.vh+this.wrapperHeight)/100),e=Math.min(100,Math.max(0,s))/100,n=(this.overflow*this.options.speed-this.overflow)/2,o=this.overflow*(1-e)*this.options.speed*this.damp-n;return Number(o.toFixed(4))},u.prototype.calcDamp=function(t){var i=this.options.scale,s=this.options.speed;if(!(s>=1.4||i>=1.4)||!(t<=1e3))return 1;i<1&&(i=1),s<1&&(s=1);var e=1.2-(1-(t/1e3+(3-(i+s)))),n=Math.max(.5,Math.min(1,e));return Math.floor(100*n)/100},u.prototype.applyParallax=function(){this.element.style.transform="translate3d(0 , "+this.calcTranslateValue()+"px , 0)"},u.prototype.animate=function(){ct()&&this.checkVisible(),window.pageYOffset<0||this.isVisible&&this.applyParallax()},u.prototype.reset=function(){this.damp=this.calcDamp(window.innerWidth);var t=this.wrapper.style,i=this.element.style;this.vh=document.documentElement.clientHeight,t.width="",t.position="",t.height="100%",i.width="",this.elementTagName==="img"&&t.position==="absolute"&&(t.height="100%"),t.gridArea===""?i.height="":i.height="100%",t.margin!=="0px"&&(t.margin="",i.margin=""),t.inset!=="auto"&&(t.top="",t.right="",t.bottom="",t.left="",i.top="",i.right="",i.bottom="",i.left=""),t.transform!=="none"&&(t.transform="",i.transform=""),t.zIndex!=="auto"&&(t.zIndex=""),t.borderRadius!=="0px"&&(t.borderRadius="",t.isolation=""),this.setStyle(),this.applyParallax()},u.prototype.destroy=function(){var t;this.observer&&this.observer.disconnect(),this.wrapper.removeAttribute("style"),this.element.removeAttribute("style"),(t=this.wrapper).replaceWith.apply(t,this.wrapper.childNodes)};var f=function(t,i){if(this.elements=[],!t)throw new Error("Argument 'elements' cannot be null.");var s,e;this.elements=function(n){return Array.isArray(n)?n:typeof n=="string"?dt(document.querySelectorAll(n)):n instanceof HTMLElement?[n]:n instanceof NodeList||n instanceof HTMLCollection?dt(n):[n]}(t),this.options=i,this.instances=[],this.externalRAF=this.options&&this.options.externalRAF||!1,this.onResizeEvent=this.resize.bind(this),this.isInit=!1,s=typeof Promise<"u"&&Promise.toString().indexOf("[native code]")!==-1,e=typeof Element<"u"&&Element.prototype.closest,s&&e&&"IntersectionObserver"in window&&this.init()};f.prototype.init=function(){var t=this;this.isInit||(this.instances=this.elements.map(function(i){return new u(i,t.options)}),this.externalRAF||this.animate(),this.addEventListeners(),this.isInit=!0)},f.prototype.animate=function(){this.instances.forEach(function(t){t.animate()}),this.externalRAF||(this.requestId=window.requestAnimationFrame(this.animate.bind(this)))},f.prototype.cancel=function(){this.requestId&&window.cancelAnimationFrame(this.requestId)},f.prototype.reset=function(){this.instances.forEach(function(t){t.reset()})},f.prototype.resize=function(){clearTimeout(this.timer),this.timer=window.setTimeout(this.reset.bind(this),500),this.reset.bind(this)},f.prototype.addEventListeners=function(){navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)?window.addEventListener("orientationchange",this.onResizeEvent):window.addEventListener("resize",this.onResizeEvent)},f.prototype.destroy=function(){this.cancel(),window.removeEventListener("resize",this.onResizeEvent),window.removeEventListener("orientationchange",this.onResizeEvent),this.instances.forEach(function(t){t.destroy()}),this.isInit=!1};const A=t=>(St("data-v-820dbe4a"),t=t(),Ct(),t),Zt=Bt,Kt=Yt,$t=Ut,Qt=["aria-hidden"],Xt={class:"about-hero_heading-sub"},te={class:"about-hero_mvWrapper"},ee=A(()=>a("video",{muted:"",loop:"",playsinline:"",poster:"",autoplay:""},[a("source",{src:Ot,type:"video/webm"}),a("source",{src:Wt,type:"video/mp4"})],-1)),ae=[ee],ie=A(()=>a("div",{class:"about-hero_copy"},[a("p",null,"Intuition, Motion, Seamlessness.")],-1)),oe=A(()=>a("section",{class:"about-intro"},[a("div",{class:"about-intro_inner"},[a("div",{class:"about-intro_text"},[a("p",null," Yiteng Jun is a front-end developer (digital designer) based in Tokyo, passionately devoted to pursuing the elegant simplicity of functionality, digital-specific interactions, animations, and graphics. ")])])],-1)),se={class:"about-values"},ne={class:"about-values_inner"},re={class:"about-values_container"},le=A(()=>a("h2",{class:"about-values_heading"},"(services)",-1)),de={class:"about-values_block_heading"},ce={class:"about-values_block_text"},ue=ut('<section class="about-contact" data-v-820dbe4a><div class="about-contact_column" data-col="1" data-v-820dbe4a><div class="about-contact_row" data-row="1" data-v-820dbe4a><h2 class="about-contact_row_heading" data-v-820dbe4a>(contact)</h2></div><div class="about-contact_row" data-row="2" data-v-820dbe4a><h3 class="about-contact_row_heading" data-v-820dbe4a>social</h3></div><div class="about-contact_row" data-row="3" data-v-820dbe4a><p data-v-820dbe4a><a href="https://github.com/yitengjun" target="_blank" rel="noopener noreferrer" data-css-hover-underline-animation data-v-820dbe4a>GitHub</a></p><p data-v-820dbe4a><a href="https://twitter.com/ytngjn" target="_blank" rel="noopener noreferrer" data-css-hover-underline-animation data-v-820dbe4a>Twitter</a></p></div></div><div class="about-contact_column" data-col="2" data-v-820dbe4a><div class="about-contact_row" data-row="1" data-v-820dbe4a></div><div class="about-contact_row" data-row="2" data-v-820dbe4a><h3 class="about-contact_row_heading" data-v-820dbe4a>email</h3></div><div class="about-contact_row" data-row="3" data-v-820dbe4a><p data-v-820dbe4a>yiteng.work[at]gmail.com*</p><p data-v-820dbe4a><span class="about-contact_row--note" data-v-820dbe4a>(*Currently not accepting any project requests at the moment.)</span></p></div></div><figure class="about-contact_image" data-v-820dbe4a><picture data-v-820dbe4a><source type="image/webp" srcset="'+Zt+'" data-v-820dbe4a><img src="'+qt+'" decoding="async" width="153" height="401" loading="lazy" data-js-background-parallax alt="" data-v-820dbe4a></picture></figure><a class="about-contact_link" data-css-hover-underline-animation href="mailto:yiteng.work@gmail.com" data-v-820dbe4a><span class="about-contact_link_text" data-v-820dbe4a><span class="about-contact_link_text--before" data-v-820dbe4a>say hi</span><span class="about-contact_link_text--after" data-v-820dbe4a>say hi</span></span><span class="about-contact_link_icon" data-v-820dbe4a><figure class="about-contact_link_icon--before" data-v-820dbe4a><svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-820dbe4a><path d="M2.66949 45L0 42.3305L38.5169 3.81356H3.05085V0H45V41.9492H41.1864V6.48305L2.66949 45Z" fill="currentColor" data-v-820dbe4a></path></svg></figure><figure class="about-contact_link_icon--after" data-v-820dbe4a><svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-820dbe4a><path d="M2.66949 45L0 42.3305L38.5169 3.81356H3.05085V0H45V41.9492H41.1864V6.48305L2.66949 45Z" fill="currentColor" data-v-820dbe4a></path></svg></figure></span></a></section><section class="about-news" data-bg="light" data-v-820dbe4a><div class="about-news_container" data-v-820dbe4a><div class="about-news_content" data-v-820dbe4a><h2 class="about-news_content_category" data-v-820dbe4a>(information)</h2><h3 class="about-news_content_title" data-v-820dbe4a>A myriad of colors.</h3><div class="about-news_content_date" data-v-820dbe4a><time data-v-820dbe4a>May 27, 2023</time></div><div class="about-news_content_text" data-v-820dbe4a><p data-v-820dbe4a> I have released a new portfolio that embodies simplicity, aesthetic functionality, and a consistent user experience throughout the entire website. It utilizes WebGL and is built with Nuxt3. </p></div><figure class="about-news_content_thumbnail" data-v-820dbe4a><picture data-v-820dbe4a><source type="image/webp" srcset="'+Kt+'" data-v-820dbe4a><img src="'+Dt+'" decoding="async" alt="" width="649" height="401" loading="lazy" data-v-820dbe4a></picture></figure></div><div class="about-news_posts" data-v-820dbe4a><ul class="about-news_postList" data-v-820dbe4a><li class="about-news_postItem" data-v-820dbe4a><span class="about-news_postItem_title" data-v-820dbe4a>A myriad of colors.</span><span class="about-news_postItem_date" data-v-820dbe4a>May 27, 2023</span></li></ul></div></div></section>',2),pe={class:"about-current","data-bg":"light"},he={class:"about-current_version"},me=A(()=>a("h2",{class:"about-current_heading"},"(current)",-1)),ge={class:"about-current_version_text"},ve=A(()=>a("div",{class:"about-current_note"},[a("div",{class:"about-current_note_heading"},[a("p",null,[Et(" 五彩 "),a("a",{href:"https://www.trainchinese.com/v2/wordDetails.php?rAp=0&tcLanguage=en&wordId=46051",rel:"nofollow noopener noreferrer",target:"_blank"},"[wú cǎi]")])]),a("div",{class:"about-current_desc"},[a("p",null,"five (main) colors (white, black, red, yellow, and blue); multicolored")])],-1)),be=ut('<section class="about-principle" data-bg="light" data-v-820dbe4a><h2 class="about-principle_heading" data-v-820dbe4a>(We are)</h2><div class="about-principle_copy" data-v-820dbe4a><p data-v-820dbe4a>not before an image</p></div><div class="about-principle_image" data-v-820dbe4a><div class="about-principle_desc" data-v-820dbe4a><p data-v-820dbe4a> “We are not before an image; rather, just as the images surround us, we are surrounded by the images. The issue lies in how to maneuver among these images and how to make them move around us.” </p></div><picture data-v-820dbe4a><source type="image/webp" srcset="'+$t+'" data-v-820dbe4a><img src="'+Gt+'" decoding="async" loading="lazy" width="1920" data-js-background-parallax alt="" data-v-820dbe4a></picture></div></section>',1),fe=["aria-hidden"],we={"data-split":"wrapper"},_e={class:"about-next_title--count"},ye=yt({__name:"about",setup(t){const{state:i}=wt(),s=i.value.firstAccess,{worksStore:e}=st(),{switchPageTransition:n}=ot(),{switchLoadedAnimationState:o}=_t(),{isAtTopOnPageTransition:r,isAtBottomOnPageTransition:pt}=nt(),z=g(null),k=g(null),L=g(null),S=g(null),N=g(null),G=g(null),C=g(null),J=g(null),E=g(null),Z=g(null),K=e.value.activePageIndex,P=new Mt;let p,b,$=!0;const w=g(!1);let Q=!1,O=!1,X,tt=0;const et=()=>{var l;(l=window.slider)==null||l.onHoverNextWorkLink()},W=d.timeline({defaults:{duration:.5},paused:!0}),B=d.timeline({paused:!0}),q=d.timeline({paused:!0}),ht=[{title:"design",text:"Valuing the pursuit of new possibilities in digital design, I prioritize creating fresh value without being bound by conventional perspectives."},{title:"development",text:"Intuition, responsiveness, and fluidity. I prioritize users' intuition and construct digital experiences that align with human senses."}],mt=l=>{const _=kt();Q=!0,_.push({path:"/"}),l.preventDefault()},gt=()=>{const l=window.pageYOffset;l>window.innerHeight||tt!==l&&($=l<=0,tt=l)},at=l=>{p==null||p.raf(l),b==null||b.animate(),gt(),X=requestAnimationFrame(at)};d.defaults({ease:Rt.easeInOut}),pt(!1),r(!1);const vt=l=>{U()||w.value&&window.slider.getMousePosition(l)};return xt(()=>{var h;d.registerPlugin(x),d.registerPlugin(zt);const l=()=>{const c=document.querySelectorAll('[data-js-loader-title][data-heading="1"] [data-split="wrapper"] [data-split="char"]'),v=document.querySelectorAll('[data-js-loader-title][data-heading="2"] [data-split="wrapper"] [data-split="char"]');c.length!==0&&(B.set(c,{y:0,scaleY:1,opacity:1}).to(c,{duration:1,y:"-100%",scaleY:0,opacity:.5,stagger:{amount:.175}}),B.restart()),v.length!==0&&(q.set(k.value,{opacity:0}).set(v,{y:"100%",scaleY:0,opacity:0}).to(v,{duration:1.75,y:0,scaleY:1,opacity:1,stagger:{amount:.175},onComplete:()=>{d.set(k.value,{opacity:1}),d.set(L.value,{opacity:1,scaleY:1,y:0}),jt(),Ft()}}),q.restart()),U()&&d.to(L.value,{opacity:1,scaleY:1,y:0,stagger:{amount:.15}}),W.set(C.value,{opacity:0}).set(S.value,{y:"100%"}).to(S.value,{duration:1,y:0,delay:.75}).to(C.value,{duration:1,opacity:1,delay:.25,onStart:()=>{o(!0)},onComplete:()=>{var T;(T=window.navigation)==null||T.zero(K,!1),p==null||p.start(),n(!1)}},"<"),rt(),s&&(d.to(L.value,{duration:1.5,y:0,scaleY:1,opacity:1,stagger:{amount:.175}}),Vt()),W.restart()},_=()=>{p=P.init(),b=new f("[data-js-background-parallax]",{scale:1.2,externalRAF:!0}),requestAnimationFrame(at),l(),Lt(()=>{x.create({trigger:E.value,onToggle:c=>{c.isActive===!0?(window.slider.addMousemoveCanvasEvent(),w.value=!0,document.body.classList.add("is-about-footer-visible")):c.isActive===!1&&(window.slider.removeMousemoveCanvasEvent(),w.value=!1,document.body.classList.remove("is-about-footer-visible"))}}),x.create({trigger:z.value,onToggle:c=>{c.isActive===!0?O=!1:c.isActive===!1&&(O=!0)}}),d.to(N.value,{scale:1.5,scrollTrigger:{trigger:G.value,start:"top center",endTrigger:".about-contact",scrub:0}}),d.to(".about-principle_copy p",{xPercent:-100,ease:Ht.easeNone,scrollTrigger:{trigger:".about-principle",start:"top center",endTrigger:".about-principle",scrub:0}})})};s?(async()=>{const v=await It();window.navigation.createGL(v),window.slider.init(v),window.slider.hidden(),_()})():(window.slider.leave(),(h=window.navigation)==null||h.fadeOut(K),_())}),At((l,_,h)=>{const{transitionStore:c}=ot();if(c.value.pageTransition){h(!1);return}const v=()=>{var m;p==null||p.stop(),(m=window.slider)==null||m.removeMousemoveCanvasEvent(!1),cancelAnimationFrame(X)},T=()=>{const m=document.querySelectorAll('[data-js-loader-title][data-heading="1"] [data-split="wrapper"] [data-split="char"]');d.killTweensOf([m,N.value]),W.kill(),B.kill(),q.kill(),P==null||P.destroy(),p==null||p.destroy(),b==null||b.destroy(),p=null,b=null,x.scrollerProxy(null),x.clearScrollMemory(),x.killAll()},R=()=>{const m=document.querySelectorAll('[data-js-loader-title][data-heading="1"] [data-split="wrapper"] [data-split="char"]'),Y=document.querySelector("[data-js-gl-canvas]"),I=d.timeline({paused:!0});d.killTweensOf(Y),I.set(k.value,{opacity:0}).set(m,{opacity:1,y:0,scale:1}).to(S.value,{duration:.25,opacity:0}).to([".about-next_title--count",J.value,C.value],{duration:.5,opacity:0,onComplete:()=>{d.set(Z.value,{opacity:0}),T(),h()}},"<"),rt(),I.restart()},H=async m=>{const Y=document.querySelector('[data-js-loader-title][data-heading="1"] [data-split="wrapper"]'),I=document.querySelector('[data-js-loader-title][data-heading="2"] [data-split="wrapper"]'),{worksStore:it}=st(),ft=[lt(Y,m),lt(I,it.value.works[it.value.activePageIndex].name)];await Promise.all(ft)},bt=()=>{if(v(),$)n(!0),H("About"),R();else if(Q&&w&&l.meta.page==="index"){const{isAtBottomOnPageTransition:m}=nt();m(!0),O?(H("works"),R()):d.to(window,{duration:1,scrollTo:{y:E.value,onStart:()=>{document.documentElement.classList.add("disable-pointer-event")}},onComplete:()=>{document.documentElement.classList.remove("disable-pointer-event"),H("works"),R()}})}else n(!0),H(w.value?"works":"About"),R()};if(U()){n(!0),v();const m=d.timeline({defaults:{duration:.5},paused:!0,onComplete:()=>{T(),h()}});m.to(z.value,{opacity:0}).to(E.value,{opacity:0},"<"),m.restart()}else bt()}),Tt({title:`${Nt} — About`}),(l,_)=>(V(),M(F,null,[a("article",{ref_key:"pageAbout",ref:z,class:"about"},[a("section",{ref_key:"fv",ref:G,class:"about-hero"},[a("h1",{class:"about-hero_heading","aria-label":"About","aria-hidden":j(w)},[a("span",{ref_key:"heading",ref:k,"data-split":"wrapper"},[(V(),M(F,null,D("About",(h,c)=>a("span",{ref_for:!0,ref_key:"headingChars",ref:L,key:c,"data-split":"char"},y(h),1)),64))],512),a("span",Xt,[a("span",{ref_key:"headingSubText",ref:S,class:"about-hero_heading-sub_text"},"(YitengJun)",512)])],8,Qt),a("div",{ref_key:"fvContent",ref:C,class:"about-hero_content"},[a("div",te,[a("figure",{ref_key:"aboutMainVisual",ref:N,class:"about-hero_mv"},ae,512),ie])],512)],512),a("div",{ref_key:"aboutContent",ref:J,class:"about_content"},[oe,a("section",se,[a("div",ne,[a("div",re,[le,(V(),M(F,null,D(ht,h=>a("div",{key:h.index,class:"about-values_block"},[a("div",de,[a("h3",null,y(h.title),1)]),a("div",ce,[a("p",null,y(h.text),1)])])),64))])])]),ue,a("section",pe,[a("div",he,[me,a("h3",ge,"v1.0.0 ("+y(j(e).works[0].name)+")",1)]),ve]),be],512)],512),a("footer",{ref_key:"footer",ref:E,class:"about-next",onMouseenter:vt},[a("div",{ref_key:"nextTitle",ref:Z,class:"about-next_title","aria-hidden":!j(w),"aria-label":"Works",onClick:mt,onMouseenter:et,onMouseleave:et},[a("span",we,[(V(),M(F,null,D("Works",(h,c)=>a("span",{key:c},y(h),1)),64))]),a("span",_e,"("+y(j(e).works.length)+")",1)],40,fe)],544)],64))}});const Ce=Pt(ye,[["__scopeId","data-v-820dbe4a"]]);export{Ce as default};
