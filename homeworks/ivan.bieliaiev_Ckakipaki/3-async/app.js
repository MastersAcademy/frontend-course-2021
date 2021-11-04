// Create post's markup with value text, title, id
const blog = document.querySelector('[data-blog]');

function postMarkupPost(id, title, text) {
    const article = document.createElement('article');
    const p = document.createElement('p');
    const h1 = document.createElement('h1');
    const div = document.createElement('div');
    const button = document.createElement('button');
    article.setAttribute('data-post', id);
    article.classList = 'blog__post';
    button.setAttribute('data-delete-post', id);
    button.classList = 'delete__button';
    p.classList = 'post__text';
    h1.classList = 'post__title';
    div.classList = 'post__delete';
    button.textContent = 'delete';
    h1.textContent = title;
    p.textContent = text;
    div.appendChild(button);
    article.appendChild(h1);
    article.appendChild(p);
    article.appendChild(div);
    blog.appendChild(article);
}

// Appending posts to blog container
function createPosts(content) {
    for (let i = 0; i < content.length; i++) {
        postMarkupPost(content[i].id, content[i].title, content[i].body);
    }
}

// Rendering posts from JSON
setTimeout(async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let content = await response.json();
        content = content.slice(0, 10);
        // Create Post
        await createPosts(content);
        // Delete post
        await document.addEventListener('click', (e) => {
            if (e.target.classList[0] === 'delete__button') {
                blog.removeChild(e.target.parentElement.parentElement);
            }
        });
    } catch (e) {
        console.log(e);
    }
}, 3000);
