function addClose() {
    const myNodeList = document.getElementsByTagName('li');

    for (let i = 0; i < myNodeList.length; i++) {
        if (myNodeList[i].getElementsByTagName('span').length === 0) {
            const span = document.createElement('span');
            const text = document.createTextNode('\u00D7');
            // span.setAttribute('onclick', 'removeElement(this)');
            span.className = 'close';
            span.appendChild(text);
            myNodeList[i].appendChild(span);
        }
    }
}
const inputBnt = document.querySelector('[data-message-input-btn]');

inputBnt.addEventListener('click', () => {
    const input = document.querySelector('[data-message-input]');
    const newMessage = input.value;
    const list = document.querySelector('[data-message-otput]');
    if (newMessage) {
        const newLi = document.createElement('li');
        const text = document.createTextNode(newMessage);
        newLi.className = 'message';
        newLi.appendChild(text);
        list.appendChild(newLi);
        addClose();
    }
});

// function removeElement(el) {
//     el.parentElement.remove();
// }
