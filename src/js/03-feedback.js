const form = document.querySelector('.feedback-form');
const input = document.querySelector('.email');
const message = document.querySelector('.message');
const button = document.querySelector('button');

updateInput();
let userData = {};
form.addEventListener('input', setDataOnInput);
button.addEventListener('click', resetOnSubmit);

function setDataOnInput(event) {
  const {
    elements: { email, message },
  } = event.currentTarget;

  (userData.userEmail = email.value),
    (userData.userMessage = message.value),
    localStorage.setItem('feedback-form-state', JSON.stringify(userData));
}

function updateInput() {
  const UserDataJSON = localStorage.getItem('feedback-form-state');
  const UserDataParsed = JSON.parse(UserDataJSON);

  form.elements.email.value = UserDataParsed.userEmail || '';
  form.elements.message.value = UserDataParsed.userMessage || '';
}

function resetOnSubmit(event) {
  Event.preventDefault();
  const UserDataJSON = localStorage.getItem('feedback-form-state');
  const UserDataParsed = JSON.parse(UserDataJSON);

  console.log(UserDataParsed);

  form.reset();
  localStorage.removeItem('feedback-form-state');
}
