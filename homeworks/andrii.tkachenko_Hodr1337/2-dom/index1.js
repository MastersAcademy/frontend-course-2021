const input = document.getElementById('textArea');
const button = document.querySelector('button');

function myClick() {
    const message = document.getElementById('textArea').value;
    input.value = '';
    const createNew = document.createElement('div');
    createNew.textContent = message;
    createNew.classList.add('created-message');
    document.body.querySelector('[data-chat]').append(createNew);
}

button.addEventListener('click', myClick);

input.addEventListener('keypress', (e) => {
    if (!e.shiftKey && e.key === 'Enter') {
        myClick();
    }
});
