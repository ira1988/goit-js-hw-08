!function(){var e,t,a=document.querySelector(".feedback-form"),r=(document.querySelector(".email"),document.querySelector(".message"),document.querySelector("button"));e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e),a.elements.email.value=t.userEmail||"",a.elements.message.value=t.userMessage||"";var o={};a.addEventListener("input",(function(e){var t=e.currentTarget.elements,a=t.email,r=t.message;o.userEmail=a.value,o.userMessage=r.value,localStorage.setItem("feedback-form-state",JSON.stringify(o))})),r.addEventListener("click",(function(e){Event.preventDefault();var t=localStorage.getItem("feedback-form-state"),r=JSON.parse(t);console.log(r),a.reset(),localStorage.removeItem("feedback-form-state")}))}();
//# sourceMappingURL=03-feedback.337a10d2.js.map
