let input = document.getElementById("textArea");
let button = document.querySelector("button");

button.addEventListener("click", myClick);
function myClick() {
     let message = document.getElementById("textArea").value;
     input.value = '';
     let createNew = document.createElement('div');
     createNew.textContent = message;
     createNew.classList.add("created-message");
     document.body.querySelector('[data-chat]').append(createNew);
}

input.addEventListener('keypress', (e) => {
     if (!e.shiftKey && e.key === 'Enter') {
          myClick();
     }});