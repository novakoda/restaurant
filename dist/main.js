!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const o=()=>{let e=document.getElementById("content"),t=document.createElement("h1");t.innerHTML="Welcome to the Retreat",t.id="welcome";let n=document.createElement("p");n.innerHTML="A place you can always fall back to.",n.id="text";let o=document.createElement("p");o.innerHTML="Sun-Thu: Noon - Midnight <br> Fri-Sat: Noon - 2 AM",o.id="hours",e.append(t,n,o)};(()=>{let e=document.createElement("li");e.id="home",e.className="tab",e.innerHTML="Home";let t=document.createElement("li");t.id="menu",t.className="tab",t.innerHTML="Menu";let n=document.createElement("li");n.id="about",n.className="tab",n.innerHTML="About";let o=document.createElement("li");o.id="contact",o.className="tab",o.innerHTML="Contact";let r=document.createElement("ul");r.append(e,t,n,o),document.getElementById("main").append(r)})(),o(),document.querySelectorAll(".tab").forEach(e=>{e.addEventListener("click",(function(){console.log("clicked a tab"),r(),c(e)}))});const r=()=>{document.getElementById("content").innerHTML=""},c=e=>{"home"===e.id?o():"menu"===e.id?tabMenu():"about"===e.id?tabAbout():tabContact()}}]);