const e=document.querySelector(".feedback-form"),t=(document.querySelector(".email"),document.querySelector(".message"),document.querySelector("button"));!function(){const t=localStorage.getItem("feedback-form-state"),a=JSON.parse(t);e.elements.email.value=a.userEmail||"test",e.elements.message.value=a.userMessage||"test"}();let a={};e.addEventListener("input",(function(e){const{elements:{email:t,message:s}}=e.currentTarget;a.userEmail=t.value,a.userMessage=s.value,localStorage.setItem("feedback-form-state",JSON.stringify(a))})),t.addEventListener("click",(function(t){t.preventDefault();const a=localStorage.getItem("feedback-form-state"),s=JSON.parse(a);console.log(s),e.reset(),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.3a2ceed2.js.map