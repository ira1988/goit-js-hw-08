const e=document.querySelector(".feedback-form");document.querySelector(".email"),document.querySelector(".message"),document.querySelector("button");!function(){const t=localStorage.getItem("feedback-form-state"),a=JSON.parse(t);a&&(e.elements.email.value=a.userEmail);a&&(e.elements.message.value=a.userMessage)}();let t={};e.addEventListener("input",(function(e){const{elements:{email:a,message:s}}=e.currentTarget;t.userEmail=a.value,t.userMessage=s.value,localStorage.setItem("feedback-form-state",JSON.stringify(t))})),e.addEventListener("submit",(function(t){t.preventDefault();const a=localStorage.getItem("feedback-form-state"),s=JSON.parse(a);console.log(s),e.reset(),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.6d92f960.js.map
