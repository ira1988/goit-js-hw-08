const e=document.querySelector(".feedback-form");document.querySelector(".email"),document.querySelector(".message");!function(){const t=localStorage.getItem("feedback-form-state"),s=JSON.parse(t);e.elements.email.value=s.userEmail||"",e.elements.message.value=s.userMessage||""}(),e.addEventListener("input",(function(e){const{elements:{email:t,message:s}}=e.currentTarget,a={userEmail:t.value,userMessage:s.value};localStorage.setItem("feedback-form-state",JSON.stringify(a))})),e.addEventListener("submit",(function(){console.log(e.elements.email.value),e.elements.email.value="",e.elements.message.value=""}));
//# sourceMappingURL=03-feedback.f9f2137d.js.map