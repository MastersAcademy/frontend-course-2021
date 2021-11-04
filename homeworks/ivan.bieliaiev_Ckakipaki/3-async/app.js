const url = 'https://jsonplaceholder.typicode.com/posts';
const blog = document.querySelector('[data-blog]');

async function timeOut(ms){
    setTimeout(() => console.log('timeout', ms / 1000, 'seconds'), ms);
}

async function renderPosts(url) {
    try {
        console.log('Rendering');
        const response = await fetch(url);
        let content = await response.json();
        content = await content.slice(0, 10);
        console.log(content);
        createPost(content, )
    }
    catch (e) {
        console.log(e);
    }
}

function createPost(content){
    for(let  i = 0; i < content.length; i++){
        const article = document.createElement('article');
        const p = document.createElement('p');
        const h1 = document.createElement('h1');
        const div = document.createElement('div');
        const button = document.createElement('button');
        article.setAttribute(`data-post`, content[i].id)
        button.attributes = `data-delete-post = ${content[i].id}`;
        article.classList = 'blog__post';
        p.classList = 'post__text';
        h1.classList = 'post__title';
        div.classList = 'post__delete';
        button.classList = 'delete__button';
        button.textContent = "delete";
        h1.textContent = content[i].title;
        p.textContent = content[i].body;
        div.appendChild(button);
        article.appendChild(h1);
        article.appendChild(p);
        article.appendChild(div);
        blog.appendChild(article);
    }
}

renderPosts(url)
