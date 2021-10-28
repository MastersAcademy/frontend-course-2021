// get the button and input field and close button
const button = document.querySelector('[data-btn]');
const input = document.querySelector('[data-input]');
const close = document.getElementsByClassName('close');
// create the element received from the input field and the delete element
button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.classList.add('message');
    const inputValue = document.querySelector('[data-input]').value.replace(/\n/g, '<br />');
    li.innerHTML = inputValue;
    if (inputValue === '') {
        alert('You must write something!');
    } else {
        document.querySelector('[data-app]').append(li);
    }
    document.querySelector('[data-input]').value = '';

    const span = document.createElement('div');
    const txt = document.createTextNode('\u2A2F');
    span.className = 'close';
    span.append(txt);
    li.append(span);
    let i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            const delet = this.parentElement;
            delet.style.display = 'none';
        };
    }
});
// send by pressing the enter, and the transition is the shift enter
input.addEventListener('keydown', (event) => {
    if (event.code === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        button.click();
    }
});