!function(){function e(e,t,o){var a,n=o||{},r=n.noTrailing,i=void 0!==r&&r,l=n.noLeading,u=void 0!==l&&l,s=n.debounceMode,c=void 0===s?void 0:s,m=!1,d=0;function v(){a&&clearTimeout(a)}function f(){for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];var l=this,s=Date.now()-d;function f(){d=Date.now(),t.apply(l,n)}function g(){a=void 0}m||(u||!c||a||f(),v(),void 0===c&&s>e?u?(d=Date.now(),i||(a=setTimeout(c?g:f,e))):f():!0!==i&&(a=setTimeout(c?g:f,void 0===c?e-s:e)))}return f.cancel=function(e){var t=(e||{}).upcomingOnly,o=void 0!==t&&t;v(),m=!o},f}var t,o,a=document.querySelector(".feedback-form");document.querySelector(".email"),document.querySelector(".message");t=localStorage.getItem("feedback-form-state"),o=JSON.parse(t),a.elements.email.value=(null==o?void 0:o.userEmail)||"",a.elements.message.value=(null==o?void 0:o.userMessage)||"",a.addEventListener("input",e(500,(function(e){var t=e.currentTarget.elements,o=t.email,a=t.message,n={userEmail:o.value,userMessage:a.value};localStorage.setItem("feedback-form-state",JSON.stringify(n))}))),a.addEventListener("submit",(function(e){e.preventDefault();var t=localStorage.getItem("feedback-form-state"),o=JSON.parse(t);console.log(o),a.reset(),localStorage.removeItem("feedback-form-state")}))}();
//# sourceMappingURL=03-feedback.c5d12cff.js.map