const clickMouse = document.querySelector('.send');
const message = document.querySelector('.message');
const tmpl = document.querySelector('#tmpl');
const p = tmpl.content.querySelector('.content');
const clickKey = document.querySelector('.write_message');
function createElement() {
    const text = document.getElementById('myTextArea').value;
    if (text.length > 0) {
        p.textContent = text;
        const item = tmpl.content.cloneNode(true);
        message.prepend(item);
        const clear = document.getElementsByTagName('textarea');
        for (let i = 0; i < clear.length; i++) {
            clear[i].value = '';
        }
        return false;
    }
    return 0;
}
clickMouse.addEventListener('click', () => {
    if (clickMouse.click) {
        createElement();
    }
});
clickKey.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        createElement();
    }
});
