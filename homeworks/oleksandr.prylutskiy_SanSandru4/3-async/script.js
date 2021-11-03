const url = 'https://jsonplaceholder.typicode.com/posts';
const blogMsg = document.querySelector('[data-blog-msg]');
const sortAZ = document.querySelector('[data-sort-az]');

console.log(sortAZ);

fetch(url)
.then((response) => response.json())
.then((json) => {let blogArr = json;
    for (let i = 0; i < blogArr.length; i++) {
        let msg = document.createElement('ol');
        msg.classList.add('blog-msg');
        blogMsg.appendChild(msg);
        let postTitle = document.createElement('H1');
        postTitle.innerHTML = `${blogArr[i].title}`;
        postTitle.classList.add('post-title');
        msg.appendChild(postTitle);
        let postBody = document.createElement('p');
        postBody.innerHTML = `${blogArr[i].body}`;
        postBody.classList.add('post-body');
        msg.appendChild(postBody);
    }
});

