const form = document.querySelector('.feedback-form');
const input = document.querySelector('.email');
const message = document.querySelector('.message');

updateInput();

form.addEventListener('input', getDataOnInput);
form.addEventListener('submit', resetOnSubmit);





function getDataOnInput(event) {
  const {
    elements: { email, message },
  } = event.currentTarget;

  const userData = {
    userEmail: email.value,
    userMessage: message.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(userData));
 

}

function updateInput() {
  const UserDataJSON = localStorage.getItem('feedback-form-state');
  const UserDataParsed = JSON.parse(UserDataJSON);

//   console.log(UserDataParsed.userEmail)
//   console.log( UserDataParsed.userMessage)

  form.elements.email.value=UserDataParsed.userEmail || ""
  form.elements.message.value=UserDataParsed.userMessage ||""

}
function resetOnSubmit() {
    console.log (form.elements.email.value)
    form.elements.email.value= ""
    form.elements.message.value= ""
}