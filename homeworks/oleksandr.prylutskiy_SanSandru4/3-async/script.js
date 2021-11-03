const url = 'https://jsonplaceholder.typicode.com/posts';
let blogMsg = document.querySelector('[data-blog-msg]');

console.log(blogMsg);

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
        // console.log(`${i} - ${blogArr[i].title}`);
        console.log(`${i} - ${blogArr[i].body}`);
    }
});

