!function(){var t=document.querySelector("body"),e=document.querySelector("[data-start]"),o=document.querySelector("[data-stop]"),r=document.querySelector(".title"),n=null;e.addEventListener("click",(function(){return n=setInterval((function(){return t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16)),r.innerHTML="Color of this site is: ".concat(t.style.backgroundColor),e.disabled=!0}),1e3)})),o.addEventListener("click",(function(){return clearInterval(n),e.disabled=!1,o=t.style.backgroundColor,void navigator.clipboard.writeText(o).then((function(){alert("Color copied to clipboard")}));var o}))}();
//# sourceMappingURL=01-color-switcher.269eb8dc.js.map
