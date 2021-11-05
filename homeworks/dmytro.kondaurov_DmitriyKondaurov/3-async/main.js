window.onload = () => {
    document.querySelector('.loader_inner').classList.add('hide');
    document.querySelector('.loader').classList.add('hide');
};

const addPost = (title, text) => {
    const newEl = document.createElement('li');
    const newElCloseBtn = document.createElement('div');
    const newElCloseBtnLink = document.createElement('a');
    const newElCloseBtnImg = document.createElement('img');
    const newElTitle = document.createElement('h2');
    const newElText = document.createElement('p');
    newEl.classList.add('post-list__item');
    newElTitle.classList.add('post-list__item-title');
    newElText.classList.add('post-list__item-text');
    newElCloseBtn.classList.add('trash-bnt');
    newElCloseBtnLink.classList.add('trash-btn__link');
    newElCloseBtnImg.classList.add('trash-btn__icon');
    newElText.textContent = text;
    newElTitle.textContent = title;
    newEl.append(newElTitle, newElText, newElCloseBtn);
    document.body.querySelector('[data-main-box]').append(newEl);
};

setTimeout(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            json.map((post) => addPost(post.title, post.body));
        });
}, 3000);
