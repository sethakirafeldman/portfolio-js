(()=>{"use strict";const e=document.getElementById("display-site-container"),t="https://sethakirafeldman.github.io/",a=(document.getElementById("site-description"),(e,t,a,i)=>{let n=document.createElement(e),r=document.getElementById(a);n.id=t,n.innerHTML=i,r.appendChild(n)}),i=[{name:"Weather Getter",url:"weatherAPI/homepage.html",value:"weather",git:" The repository is available on my <a href ='https://github.com/sethakirafeldman/weatherAPI' target='_blank'>GitHub</a>.",description:"This app makes calls to two separate APIs using Async Await, one to <a href ='https://openweathermap.org/' target='_blank'>Openweather</a>, and another <a href ='https://unsplash.com/developers' target='_blank'>Unsplash</a>. \n        It fetches weather data and a pseudorandom photo of the chosen city. \n        Written in HTML, CSS, and vanilla JS."},{name:"Restaurant Page",url:"restaurant/",value:"restaurant",git:" The repository is available on my <a href ='https://github.com/sethakirafeldman/restaurant' target='_blank'>GitHub</a>.",description:"Demo page for a responsive restaraunt website. Bundled using Webpack and uses bootstrap for some styling. Otherwise, built with HTML, CSS, and JS."},{name:"Tic Tac Toe",url:"tictactoe/homepage.html",value:"tictactoe",git:" The repository is available on my <a href ='https://github.com/sethakirafeldman/tictactoe' target='_blank'>GitHub</a>.",description:"Vanilla JS with a simple computer AI algorithm."},{name:"Etch A Sketch",url:"etch/homepage.html",value:"etch",git:" The repository is available <a href ='https://github.com/sethakirafeldman/etch' target='_blank'>GitHub</a>.",description:"Vanilla JS. Early project using mostly pre-ECMA 5 syntax. \n        Fixed scrollbar so that it can size the grid recently. \n        As with a real Etch A Sketch, you must draw from whichever point you start in one continuous motion."}],n=a=>{null!==document.getElementById("iframe")&&document.getElementById("iframe").remove(),i.forEach((i=>{if(i.value===a.target.value){let a=document.createElement("iframe");a.src=t+i.url,a.id="iframe",e.appendChild(a),n=i,document.getElementById("desc-text").innerHTML=n.description+n.git}var n}))};(()=>{a("p","intro-text","intro","Welcome to my portfolio. Here you will find some examples of my personal projects.\n These were built as part of <a href='https://theodinproject.com' target ='_blank'>The Odin Project</a> Foundations and Full Stack Javascript Courses.\n  Select a site from the drop-down menu below to view. This was built and bundled using Webpack. You can view this page's repository <a href='https://github.com/sethakirafeldman/portfolio-js' target ='_blank'>here</a>."),a("h2","name-text","title","Seth Akira Feldman"),a("h2","title-text","title","Developer Portfolio");let n=document.createElement("iframe");n.src=t+i[0].url,n.id="iframe",e.appendChild(n),a("h4","description-heading","about-site","About this Project"),a("div","desc-text","about-site",""),document.getElementById("desc-text").innerHTML=i[0].description+i[0].git})(),(()=>{a("select","selector","dropdown-menu","");let e=document.getElementById("selector");e.classList.add("dropdown-menu"),i.forEach((t=>{let a=document.createElement("option");a.value=t.value,a.classList.add("dropdown-item"),a.innerText=t.name,e.appendChild(a)})),e.addEventListener("change",n)})()})();