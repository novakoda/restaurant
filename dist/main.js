!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){"use strict";t.a=n.p+"e44c4723728362d2ee13ba6660f129ad.jpg"},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(c=r,i=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),"/*# ".concat(u," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([o]).join("\n")}var c,i,u;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(o[c]=!0)}for(var i=0;i<e.length;i++){var u=[].concat(e[i]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,t,n){var r=n(4),o=n(5);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),c=[];function i(e){for(var t=-1,n=0;n<c.length;n++)if(c[n].identifier===e){t=n;break}return t}function u(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],u=t.base?a[0]+t.base:a[0],l=n[u]||0,s="".concat(u," ").concat(l);n[u]=l+1;var d=i(s),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(c[d].references++,c[d].updater(f)):c.push({identifier:s,updater:b(f,t),references:1}),r.push(s)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var c=a(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var s,d=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var a=document.createTextNode(o),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(a,c[t]):e.appendChild(a)}}function p(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,h=0;function b(e,t){var n,r,o;if(t.singleton){var a=h++;n=m||(m=l(t)),r=f.bind(null,n,a,!1),o=f.bind(null,n,a,!0)}else n=l(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=i(n[r]);c[o].references--}for(var a=u(e,t),l=0;l<n.length;l++){var s=i(n[l]);0===c[s].references&&(c[s].updater(),c.splice(s,1))}n=a}}}},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(2),c=n.n(a),i=n(0),u=o()(!1),l=c()(i.a);u.push([e.i,"body {\n  background: url("+l+") no-repeat center center fixed;\n  background-size: cover;\n  color: white;\n}\n\n#tab-bar {\n  width: 500px;\n  margin: 30px auto;\n  display: flex;\n  justify-content: center;\n}\n\n.tab {\n  padding: 10px;\n  background-color: rgba(240, 104, 0, 0.65);\n  list-style: none;\n  cursor: pointer;\n}\n\n.tab:hover {\n  background-color: rgba(240, 104, 0, 1);\n}\n\n#content {\n  max-width: 900px;\n  margin: 0 auto;\n  text-align: center;\n  background-color: rgba(53, 33, 19, 0.75);\n}\n",""]),t.default=u},function(e,t,n){"use strict";n.r(t);const r=()=>{let e=document.getElementById("content"),t=document.createElement("h1");t.innerHTML="Welcome to the Retreat",t.id="welcome";let n=document.createElement("p");n.innerHTML="A place you can always fall back to.",n.id="text";let r=document.createElement("p");r.innerHTML="Sun-Thu: Noon - Midnight <br> Fri-Sat: Noon - 2 AM",r.id="hours",e.append(t,n,r)};n(3),n(0);(()=>{let e=document.createElement("li");e.id="home",e.className="tab",e.innerHTML="Home";let t=document.createElement("li");t.id="menu",t.className="tab",t.innerHTML="Menu";let n=document.createElement("li");n.id="about",n.className="tab",n.innerHTML="About";let r=document.createElement("li");r.id="contact",r.className="tab",r.innerHTML="Contact";let o=document.createElement("ul");o.id="tab-bar",o.append(e,t,n,r),document.getElementById("main").append(o)})(),r(),document.querySelectorAll(".tab").forEach(e=>{e.addEventListener("click",(function(){console.log("clicked a tab"),o(),a(e)}))});const o=()=>{document.getElementById("content").innerHTML=""},a=e=>{"home"===e.id?r():"menu"===e.id?tabMenu():"about"===e.id?(()=>{let e=document.getElementById("content"),t=document.createElement("h1");t.id="about-title",t.innerHTML="At The Retreat, everyone gets the privacy that they deserve.";let n=document.createElement("p");n.id="about-text",n.innerHTML="The Retreat was opened in 1984 by George Orwell as a place people could gather at to escape from the constant surveilance by Big Brother. Orwell placed a strong emphasis on remaining anonymous, which is why re require all of our guests to wear a facemask to enter. All electronic devices are banned from the premesis, as cell phones are able to track your every move and listen to each conversation. <br><br> All of our drinks are imported from France, and we have top of the line gourmet chefs preparing every meal so each plate is cooked to perfection.",e.append(t,n)})():tabContact()}}]);