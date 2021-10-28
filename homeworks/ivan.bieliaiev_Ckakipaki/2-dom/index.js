const inputText = document.querySelector('.input__text');
const messeges = document.querySelector('.messeges');

let amountOfMesseges = (document.querySelectorAll('.messege__item')).length;

function createMessege() {
    if (inputText.value.length > 0) {
        const div = document.createElement('div');
        div.classList = `messege__item mes__item${amountOfMesseges + 1}`;
        const p = document.createElement('p');
        p.classList = 'messege__text';
        p.innerText = inputText.value;
        const a = document.createElement('a');
        a.classList = `delete__button delete__button${amountOfMesseges + 1}`;
        a.innerHTML = '&#9746';
        div.appendChild(p);
        div.appendChild(a);
        messeges.appendChild(div);
        inputText.value = '';
        amountOfMesseges++;
    }
}
// For click (adding and removing messeges)
document.addEventListener('click', (e) => {
    if (e.target.classList[0] === 'delete__button') {
        const tar = document.querySelector(`.${e.target.classList[1]}`);
        messeges.removeChild(tar.parentElement);
    } else if (e.target.classList[0] === 'input__button') {
        createMessege();
    }
});
// For Enter key
document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        createMessege();
    }
});
