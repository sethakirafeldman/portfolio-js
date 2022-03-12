(()=>{"use strict";var e={336:(e,t,a)=>{e.exports=a.p+"b039b2d83982c8256af3.png"}},t={};function a(r){var i=t[r];if(void 0!==i)return i.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,a),n.exports}a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{const e=document.getElementById("display-site-container"),t="https://sethakirafeldman.github.io/",r=(document.getElementById("site-description"),(e,t,a,r)=>{let i=document.createElement(e),n=document.getElementById(a);i.id=t,i.innerHTML=r,n.appendChild(i)}),i=[{name:"Weather Getter",url:"weatherAPI/homepage.html",value:"weather",git:" The repository is available on my <a href ='https://github.com/sethakirafeldman/weatherAPI' target='_blank'>GitHub</a>.",description:"This app makes calls to two separate APIs using Async Await, one to <a href ='https://openweathermap.org/' target='_blank'>Openweather</a>, and another <a href ='https://unsplash.com/developers' target='_blank'>Unsplash</a>. \n        It fetches weather data and a pseudorandom photo of the chosen city. \n        Written in HTML, CSS, and vanilla JS. Unsplash limits hourly API calls to 50, if you notice the image is not changing, then this limit has likely been reached."},{name:"Restaurant Page",url:"restaurant/",value:"restaurant",git:" The repository is available on my <a href ='https://github.com/sethakirafeldman/restaurant' target='_blank'>GitHub</a>.",description:"Demo page for a responsive restaurant website. Bundled using Webpack and uses bootstrap for some styling. Otherwise, built with HTML, CSS, and JS."},{name:"Tic Tac Toe",url:"tictactoe/homepage.html",value:"tictactoe",git:" The repository is available on my <a href ='https://github.com/sethakirafeldman/tictactoe' target='_blank'>GitHub</a>.",description:"Vanilla JS with a simple computer AI algorithm."},{name:"Etch A Sketch",url:"etch/homepage.html",value:"etch",git:" The repository is available <a href ='https://github.com/sethakirafeldman/etch' target='_blank'>GitHub</a>.",description:"Vanilla JS. Early project using mostly pre-ECMA 5 syntax. \n        Fixed scrollbar so that it can size the grid recently. \n        As with a real Etch A Sketch, you must draw from whichever point you start in one continuous motion."}];var n=a(336);const o=new Image;o.src=n,o.style.width="1rem";const s=a=>{null!==document.getElementById("iframe")&&document.getElementById("iframe").remove(),i.forEach((r=>{if(r.value===a.target.value){let a=document.createElement("iframe");a.src=t+r.url,a.id="iframe",e.appendChild(a),i=r,document.getElementById("desc-text").innerHTML=i.description+i.git}var i}))};(()=>{r("p","intro-text","intro","Welcome to my portfolio. Here you will find some examples of my personal projects.\n These were built as part of <a href='https://theodinproject.com' target ='_blank'>The Odin Project</a> Foundations and Full Stack Javascript Courses.\n  Select a site from the drop-down menu below to view. This page was built with vanilla JS and bundled using Webpack. You can view this page's repository <a href='https://github.com/sethakirafeldman/portfolio' target ='_blank'>here</a>."),r("h2","name-text","title","Seth Akira Feldman"),r("h2","title-text","title","Developer Portfolio");let a=document.createElement("iframe");a.src=t+i[0].url,a.id="iframe",e.appendChild(a),r("h4","description-heading","about-site","About this Project"),r("div","desc-text","about-site",""),document.getElementById("desc-text").innerHTML=i[0].description+i[0].git})(),(()=>{r("select","selector","dropdown-menu","");let e=document.getElementById("selector");e.classList.add("dropdown-menu"),i.forEach((t=>{let a=document.createElement("option");a.value=t.value,a.classList.add("dropdown-item"),a.innerText=t.name,e.appendChild(a)})),e.addEventListener("change",s)})()})()})();