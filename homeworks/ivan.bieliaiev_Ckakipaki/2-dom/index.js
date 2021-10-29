const inputText = document.querySelector('.input__text');
const messeges = document.querySelector('.chat__messeges');
const inputBtn = document.querySelector('.input__button');

let amountOfMesseges = (document.querySelectorAll('.messege__item')).length;

inputText.addEventListener('keydown', (e) => {
    const keyCode = e.which || e.keyCode;
    if(keyCode === 13 && !e.shiftKey) {
        e.preventDefault();
    }
})
function createMessege() {
    if (inputText.value.length > 0) {
        const div = document.createElement('div');
        div.classList = `messege__item mes__item${amountOfMesseges + 1}`;
        const p = document.createElement('p');
        p.classList = 'item__text';
        p.innerText = inputText.value;
        const button = document.createElement('button');
        button.classList = `item__delete item__del${amountOfMesseges + 1}`;
        button.innerHTML = '&#9746';
        div.appendChild(p);
        div.appendChild(button);
        messeges.appendChild(div);
        inputText.value = '';
        amountOfMesseges++;
        messeges.scrollTop = messeges.scrollHeight;
        
    }
}
// For click on button (adding and removing messeges)
document.addEventListener('click', (e) => {
    if (e.target.classList[0] === 'item__delete') {
        const tar = document.querySelector(`.${e.target.classList[1]}`);
        messeges.removeChild(tar.parentElement);
    }
});

inputBtn.addEventListener('click', (e) => {
    createMessege();
})
// For Enter key
document.addEventListener('keydown', (e) => {
    if(e.shiftKey === false && e.key ===  "Enter") {
        createMessege();
        e.preventDefault();
    }
});
