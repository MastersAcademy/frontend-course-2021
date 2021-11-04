const url = 'https://jsonplaceholder.typicode.com/posts';
const blog = document.querySelector('[data-blog]');

// Rendering posts from JSON
async function renderPosts(url) {
    try {
        const response = await fetch(url);
        let content = await response.json();
        content = await content.slice(0, 10);
        createPosts(content);
    }
    catch (e) {
        console.log(e);
    }
}

// Create post markup with value text, title, id
function postMarkupPost(id, title, text){
    const article = document.createElement('article');
    const p = document.createElement('p');
    const h1 = document.createElement('h1');
    const div = document.createElement('div');
    const button = document.createElement('button');
    article.setAttribute(`data-post`, id);
    article.classList = 'blog__post';
    button.setAttribute(`data-delete-post`, id);
    button.classList = 'delete__button';
    p.classList = 'post__text';
    h1.classList = 'post__title';
    div.classList = 'post__delete';
    button.textContent = "delete";
    h1.textContent = title;
    p.textContent = text;
    div.appendChild(button);
    article.appendChild(h1);
    article.appendChild(p);
    article.appendChild(div);
    blog.appendChild(article);
}

// Appending posts to blog container
function createPosts(content){
    for(let i = 0; i < content.length; i++){
        postMarkupPost(i, content[i].title, content[i].body);
    }
}

renderPosts(url)


document.addEventListener('click', e => {
    if(e.classList = "[data-delete-post]") {
        blog.removeChild(e.target.parentElement.parentElement)
    }
})