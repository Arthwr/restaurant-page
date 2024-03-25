(()=>{"use strict";var n={555:(n,e,t)=>{t.d(e,{A:()=>s});var o=t(601),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([n.id,'#about {\n  margin-top: 190px;\n}\n\n.about-container {\n  margin-bottom: 155px;\n  padding: 0px 38px 0px 64px;\n}\n\n.about-container > h1 {\n  text-align: start;\n}\n\n.about-content {\n  display: flex;\n  justify-content: space-between;\n}\n\n.about-content > article {\n  display: flex;\n  flex-direction: column;\n  gap: 4.5rem;\n  max-width: 830px;\n}\n\n.japanese-text {\n  display: inline-block;\n  margin-right: 2.5rem;\n  font-family: "Meiryo", メイリオ, "Hiragino Kaku Gothic ProN",\n    ヒラギノ角ゴ Pro W3, "MS PGothic", sans-serif;\n}\n\n.about-footer {\n  background-color: var(--eerie-black);\n  min-height: 120px;\n}\n',""]);const s=a},171:(n,e,t)=>{t.d(e,{A:()=>y});var o=t(601),r=t.n(o),i=t(314),a=t.n(i),s=t(421),c=t(417),d=t.n(c),l=new URL(t(915),t.b),m=new URL(t(411),t.b),p=new URL(t(268),t.b),u=new URL(t(178),t.b),f=a()(r());f.i(s.A);var h=d()(l),g=d()(m),b=d()(p),v=d()(u);f.push([n.id,`:root {\n  --white-smoke: #f2f2f2;\n  --eerie-black: #222222ff;\n  --seasalt: #f8f8f8ff;\n  --cool-gray: #7e7f9aff;\n  --true-blue: #5171a5ff;\n  --silver: #a5a5a5;\n}\n\n@font-face {\n  font-family: "koho";\n  src: url(${h}) format(woff2),\n    url(${g}) format(woff);\n  font-weight: normal;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: "lexend deca";\n  src: url(${b}) format(woff2),\n    url(${v}) format(woff);\n  font-weight: normal;\n  font-style: normal;\n}\n\n/* Reset default styles */\nh1,\nh2,\np {\n  margin: 0;\n  padding: 0;\n}\n\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\nbutton {\n  margin: 0;\n  padding: 0;\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  cursor: pointer;\n}\n\nbody {\n  font-family: "koho";\n  font-size: 2rem;\n  font-weight: normal;\n  background-color: var(--white-smoke);\n}\n\n/* Header */\nheader {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 36px 38px 0px 64px;\n}\n\nnav > ul {\n  display: flex;\n  gap: 2.375rem;\n}\n\nnav button:hover {\n  color: var(--silver);\n  transition: color 0.3s;\n}\n\n.logo-container {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n}\n\n.logo-container > button:hover {\n  transform: scale(0.95);\n  transition: transform 0.3s;\n  color: var(--true-blue);\n}\n\n.order-container {\n  display: flex;\n  gap: 2rem;\n}\n\n.order-container > div {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n}\n\n.order-container > button {\n  padding: 0.5rem 2rem;\n  border: 1px solid;\n  color: var(--seasalt);\n  background-color: var(--true-blue);\n}\n\n.order-container > button:hover {\n  transform: translateY(-4px);\n  transition: transform 0.3s;\n}\n`,""]);const y=f},249:(n,e,t)=>{t.d(e,{A:()=>d});var o=t(601),r=t.n(o),i=t(314),a=t.n(i),s=t(171),c=a()(r());c.i(s.A),c.push([n.id,'/* Main */\n.cta-container {\n  margin: 170px auto 0;\n  max-width: 885px;\n}\n\nh1 {\n  text-align: center;\n  text-transform: uppercase;\n  font-family: "lexend deca";\n  font-size: 4.5rem;\n  font-weight: 400;\n  margin-bottom: 2rem;\n}\n\nh1 + p {\n  margin: 0 auto;\n  text-align: center;\n  max-width: 750px;\n  color: var(--silver);\n  line-height: 1.3;\n}\n\n.cta-buttons {\n  display: flex;\n  margin-top: 4.375rem;\n  gap: 2rem;\n  justify-content: center;\n}\n\n.cta-buttons > button {\n  font-family: "lexend deca";\n  text-transform: uppercase;\n  padding: 1rem 2.5rem;\n  border: 1px solid;\n}\n\n.cta-buttons > button:hover {\n  transform: translateY(-4px);\n  transition: transform 0.3s;\n}\n\n.cta-buttons > button:nth-child(1) {\n  color: var(--white-smoke);\n  background-color: var(--eerie-black);\n}\n\n.cta-buttons > button:nth-child(2):hover {\n  color: var(--white-smoke);\n  background-color: var(--eerie-black);\n}\n/* Gallery */\n\n.grid-container {\n  display: grid;\n  margin: 0 auto;\n  margin-top: 130px;\n  grid-template-columns: 1fr 2rem min-content 38px min-content 38px min-content 2rem 1fr;\n  grid-template-rows: 500px 500px;\n}\n\n.grid-container > img {\n  object-fit: cover;\n  z-index: 9999;\n}\n\n.grid-container > img:nth-child(1) {\n  grid-column: 3/4;\n}\n\n.grid-container > img:nth-child(2) {\n  grid-column: 5/6;\n  grid-row: 1/3;\n  align-self: center;\n  opacity: 0;\n  transition: opacity 0.75s ease-in-out, transform 0.75s ease-in-out;\n  transform: translateY(20px);\n}\n\n.grid-container > img:nth-child(2).visible {\n  opacity: 1;\n  transform: translateY(0);\n}\n\n.grid-container > img:nth-child(3) {\n  grid-column: 7/8;\n}\n\n.img-backside {\n  background-color: var(--eerie-black);\n  grid-column: 1 / -1;\n  grid-row: 2/3;\n}\n',""]);const d=c},407:(n,e,t)=>{t.d(e,{A:()=>s});var o=t(601),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([n.id,"#menu {\n  margin-top: 190px;\n}\n\n.menu-content > h1 {\n  text-align: start;\n}\n\n.menu-content {\n  padding-left: 64px;\n}\n\n.grid-photo {\n  display: grid;\n  margin-top: 80px;\n  margin-bottom: 155px;\n  grid-template-columns: min-content 2rem min-content 2rem min-content;\n  grid-template-rows: min-content 2rem min-content;\n}\n\n.food-img-1 {\n  grid-column: 1/2;\n  grid-row: 1/2;\n}\n\n.food-img-2 {\n  grid-column: 1/2;\n  grid-row: 3/4;\n}\n\n.food-img-3 {\n  grid-column: 3/4;\n  grid-row: 1/-1;\n}\n\n.food-img-4 {\n  grid-column: 5/6;\n  grid-row: 1/-1;\n}\n",""]);const s=a},421:(n,e,t)=>{t.d(e,{A:()=>s});var o=t(601),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([n.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""]);const s=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],d=o.base?c[0]+o.base:c[0],l=i[d]||0,m="".concat(d," ").concat(l);i[d]=l+1;var p=t(m),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var f=r(u,o);o.byIndex=s,e.splice(s,0,{identifier:m,updater:f,references:1})}a.push(m)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var c=o(n,r),d=0;d<i.length;d++){var l=t(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=c}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},159:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},411:(n,e,t)=>{n.exports=t.p+"assets/b1daac9c489288f2d4a1.woff"},915:(n,e,t)=>{n.exports=t.p+"assets/d0ba4251bfd42c7d3830.woff2"},178:(n,e,t)=>{n.exports=t.p+"assets/e020ea563302d82c95c8.woff"},268:(n,e,t)=>{n.exports=t.p+"assets/3496cea5d035dde93ce9.woff2"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(72),e=t.n(n),o=t(825),r=t.n(o),i=t(659),a=t.n(i),s=t(56),c=t.n(s),d=t(159),l=t.n(d),m=t(113),p=t.n(m),u=t(171),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),e()(u.A,f),u.A&&u.A.locals&&u.A.locals;var h=t(249),g={};g.styleTagTransform=p(),g.setAttributes=c(),g.insert=a().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=l(),e()(h.A,g),h.A&&h.A.locals&&h.A.locals;const b=t.p+"assets/main-food-1.webp",v=t.p+"assets/main-food-2.webp",y=t.p+"assets/main-food-3.webp";function x(){const n=document.createElement("section");n.id="main";const e=document.createElement("div");e.classList.add("cta-container");const t=document.createElement("h1");t.innerHTML="The best place <br/> to enjoy your food";const o=document.createElement("p");o.textContent="Indulge in the perfection of expertly cooked cuisine, crafted from time-honored recipes under the guidance of our seasoned chefs.";const r=document.createElement("div");r.classList.add("cta-buttons");const i=document.createElement("button");i.textContent="Reservate";const a=document.createElement("button");a.textContent="Order online",r.appendChild(i),r.appendChild(a),e.appendChild(t),e.appendChild(o),e.appendChild(r);const s=document.createElement("div");s.id="gallery";const c=document.createElement("div");c.classList.add("grid-container");const d=document.createElement("img");d.src=b;const l=document.createElement("img");l.src=v;const m=document.createElement("img");m.src=y;const p=document.createElement("div");p.classList.add("img-backside"),s.appendChild(c),c.appendChild(d),c.appendChild(l),c.appendChild(m),c.appendChild(p),n.appendChild(e),n.appendChild(s);const u=()=>{const n=document.querySelector(".grid-container > img:nth-child(2)");window.scrollY>=200&&n&&(n.classList.add("visible"),window.removeEventListener("scroll",u))};return window.addEventListener("scroll",u),n}var w=t(555),E={};E.styleTagTransform=p(),E.setAttributes=c(),E.insert=a().bind(null,"head"),E.domAPI=r(),E.insertStyleElement=l(),e()(w.A,E),w.A&&w.A.locals&&w.A.locals;const C=t.p+"assets/about-chef.webp";function k(){const n=document.createElement("div");n.id="about";const e=document.createElement("div");e.classList.add("about-container");const t=document.createElement("h1");t.textContent="About us";const o=document.createElement("div");o.classList.add("about-content"),e.appendChild(t),e.appendChild(o);const r=document.createElement("article"),i=document.createElement("p");i.innerHTML='<span class="japanese-text">料理に心</span> Cooking with heart';const a=document.createElement("div");a.innerHTML="<p> Since 2005, we've been dedicated to offering something that many have overlooked or disregarded—the art of cooking, honed through traditions and history.</p> <br /> <p>At our core, we believe the most meaningful dishes are thosesavored and enjoyed. Our menu features high-quality Japanesecuisine paired with classic beverages, all served with acommitment to excellence and a nod to the past.</p>";const s=document.createElement("img");s.src=C,r.appendChild(i),r.appendChild(a),o.appendChild(r),o.appendChild(s);const c=document.createElement("div");return c.classList.add("about-footer"),n.appendChild(e),n.appendChild(c),n}var A=t(407),S={};S.styleTagTransform=p(),S.setAttributes=c(),S.insert=a().bind(null,"head"),S.domAPI=r(),S.insertStyleElement=l(),e()(A.A,S),A.A&&A.A.locals&&A.A.locals;const z=t.p+"assets/menu-item-1.webp",L=t.p+"assets/menu-item-2.webp",I=t.p+"assets/menu-item-3.webp",T=t.p+"assets/menu-item-4.webp";function R(){const n=document.createElement("section");n.id="menu";const e=document.createElement("div");e.classList.add("menu-content"),n.appendChild(e);const t=document.createElement("h1");t.textContent="Featured Menu";const o=document.createElement("div");o.classList.add("grid-photo"),e.appendChild(t),e.appendChild(o);const r=document.createElement("img");r.classList.add("food-img-1"),r.src=z;const i=document.createElement("img");i.classList.add("food-img-2"),i.src=L;const a=document.createElement("img");a.classList.add("food-img-3"),a.src=I;const s=document.createElement("img");s.classList.add("food-img-4"),s.src=T,o.appendChild(r),o.appendChild(i),o.appendChild(a),o.appendChild(s);const c=document.createElement("div");return c.classList.add("about-footer"),n.appendChild(c),n}const M=t.p+"assets/fire-icon.svg",j=t.p+"assets/cart-icon.svg",F=n=>{content.innerHTML="",content.appendChild(n())};document.querySelector("#fire-icon").src=M,document.querySelector("#cart-icon").src=j,document.querySelectorAll(".main").forEach((n=>{n.addEventListener("click",(()=>F(x)))}));const P=document.querySelector(".about"),O=document.querySelector(".menu");P.addEventListener("click",(()=>F(k))),O.addEventListener("click",(()=>F(R))),F(x)})()})();