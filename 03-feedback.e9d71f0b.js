!function(){var e,t,a=document.querySelector(".feedback-form");document.querySelector(".email"),document.querySelector(".message"),document.querySelector("button");e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e),a.elements.email.value=(null==t?void 0:t.userEmail)||"",a.elements.message.value=(null==t?void 0:t.userMessage)||"",a.addEventListener("input",(function(e){var t=e.currentTarget.elements,a=t.email,r=t.message,l={userEmail:a.value,userMessage:r.value};localStorage.setItem("feedback-form-state",JSON.stringify(l))})),a.addEventListener("submit",(function(e){e.preventDefault();var t=localStorage.getItem("feedback-form-state"),r=JSON.parse(t);console.log(r),a.reset(),localStorage.removeItem("feedback-form-state")}))}();
//# sourceMappingURL=03-feedback.e9d71f0b.js.map