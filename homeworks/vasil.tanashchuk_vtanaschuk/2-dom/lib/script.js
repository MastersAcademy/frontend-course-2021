function addClose() {
    const myNodeList = document.getElementsByTagName('article');

    for (let i = 0; i < myNodeList.length; i++) {
        if (myNodeList[i].getElementsByTagName('button').length === 0) {
            const btnEl = document.createElement('button');
            const text = document.createTextNode('\u00D7');
            btnEl.className = 'close';
            btnEl.appendChild(text);
            myNodeList[i].appendChild(btnEl);
        }
    }
}

const inputForm = document.querySelector('[data-message-form]');
const inputEl = document.querySelector('[data-message-input]');

inputForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const postListEl = document.querySelector('[data-message-otput]');
    const postTemplateEl = document.querySelector('[data-post-template]');
    const newMessage = inputEl.value;

    if (newMessage) {
        const postEl = postTemplateEl.content.cloneNode(true);
        postEl.querySelector('[data-post-title]').textContent = newMessage;
        postListEl.appendChild(postEl);
        addClose();
        inputEl.value = '';
    }
});
