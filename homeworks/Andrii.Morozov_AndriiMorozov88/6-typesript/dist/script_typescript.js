(()=>{"use strict";var e,t,n,r,i,o=document.querySelector("[data-random-letter]"),a=document.querySelector("[data-score]"),c=document.querySelector("[data-score-different]"),d=100;function u(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}function s(){a.innerText="Lost",o.innerText="",o.classList.add("container__letter-red")}function T(){r=String.fromCharCode(u(65,90)),o.innerText=r,i=window.setTimeout((function(){n=u(10,15),d-=n,a.textContent=String(d),c.innerText="-"+String(n),d>0?T():s()}),2e3)}a.innerText="100",T(),document.addEventListener("keydown",(function(n){clearTimeout(i),n.key.toUpperCase()===r&&(t=u(5,10),d+=t,a.innerText=String(d),c.innerText="+"+String(t)),n.key.toUpperCase()!==r&&(e=u(20,25),d-=e,a.innerText=String(d),c.innerText="-"+String(e)),d<=0?s():d>=200?(a.innerText="WIN",o.innerText="",o.classList.add("container__letter-green")):T()}))})();