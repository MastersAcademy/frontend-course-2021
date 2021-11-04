const messageListEl = document.querySelector('[data-container-messages]');
const postTemplateEl = document.querySelector('[data-post]').content;
const inputFilterEl = document.querySelector('[data-input]');
const buttonSortEl = document.querySelector('[data-button-sort]');
const loadingTemplateEl = document.querySelector('[data-loader]').content;
const loadingEl = loadingTemplateEl.cloneNode(true).firstElementChild;

let postsData = [];
let cloneData = [];

buttonSortEl.textContent = 'Sort off';

// 0 - sortUp, 1-sortDown, 3-sor default
let stateSort = 2;

const url = 'https://jsonplaceholder.typicode.com/posts';

// loading page
document.querySelector('[data-window-loader]').append(loadingEl);

const dataPosts = async () => {
    const returnPosts = await fetch(url);
    postsData = await returnPosts.json();
    cloneData = postsData;
};

const deletePost = async (id) => {
    const response = await fetch(`${url}/${id}`, { method: 'DELETE' });
    return response;
};

const addEventListenerPost = async () => {
    const parent = document.querySelectorAll('[data-id-post]');

    [...parent].forEach((postData) => {
        postData.querySelector('[data-image]').addEventListener('click', async () => {
            postsData = postsData.filter((post) => post.id !== Number(postData.dataset.idPost));
            cloneData = postsData;

            const resultResponse = await deletePost(postData.dataset.idPost);
            if (resultResponse.status === 200) {
                alert(`message: id:${postData.dataset.idPost} delete`);
                postData.remove();
            } else {
                alert('message: error delete ');
            }
        });
        return null;
    });
};

const renderPost = (data) => {
    if (stateSort === 0) {
        data.sort((a, b) => a.title.localeCompare(b.title));
        buttonSortEl.textContent = 'Sort ▲';
    } else if (stateSort === 1) {
        data.sort((a, b) => b.title.localeCompare(a.title));
        buttonSortEl.textContent = 'Sort ▼';
    } else {
        data.sort((a, b) => a.id - b.id);
        buttonSortEl.textContent = 'Sort off';
    }

    data.forEach((element) => {
        const messageEl = postTemplateEl.cloneNode(true).firstElementChild;
        messageEl.querySelector('[data-title]').textContent = element.title;
        messageEl.setAttribute('data-id-post', element.id);
        messageEl.querySelector('[data-body]').textContent = element.body;
        messageListEl.append(messageEl);
    });

    addEventListenerPost();
};

const cleanDataPosts = async () => {
    const parent = document.querySelector('[data-container-messages]');
    while (parent.firstChild) {
        parent.firstChild.remove();
    }
};

setTimeout(() => {
    dataPosts()
        .then(() => loadingEl.remove())
        .then(() => renderPost(postsData))
        .catch((e) => console.log(e));
}, 3000);

buttonSortEl.addEventListener('click', async () => {
    await cleanDataPosts();
    if (stateSort >= 2) stateSort = 0;
    else stateSort++;
    renderPost(cloneData);
});

inputFilterEl.addEventListener('input', async () => {
    await cleanDataPosts();
    cloneData = postsData.filter((item) => item.title.toLowerCase()
        .includes(inputFilterEl.value.toLowerCase()));
    renderPost(cloneData);
});
