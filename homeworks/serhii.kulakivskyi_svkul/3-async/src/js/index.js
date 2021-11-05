(() => {
    const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';
    const { CustomSelect } = window;
    const loader = document.querySelector('[data-loader]');
    const filterInput = document.querySelector('[data-blog-filter]');
    const postsWrapper = document.querySelector('[data-posts]');
    const messageWrapper = document.querySelector('[data-message]');

    let posts = [];

    const selectObj = {
        currentValue: {
            value: '',
            text: 'Default',
        },
        options: [
            {
                value: '',
                text: 'Default',
            },
            {
                value: 'asc',
                text: 'A to Z',
            },
            {
                value: 'desc',
                text: 'Z to A',
            },
        ],
    };

    function postLayout(data) {
        const postEl = document.createElement('article');
        postEl.className = 'news-item';
        postEl.dataset.postId = data.id;
        postEl.innerHTML = `
            <header>
                <h2 class="news-item__title">${data.title}</h2>
            </header>
            
            <p class="news-item__text">${data.body}</p>
            
            <footer class="news-item__footer">
                <button class="news-item__footer-button" data-post-delete="${data.id}">
                    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
                    </svg>
                </button>
            </footer>
        `;

        return postEl;
    }

    const appendPosts = (value = '', sortType = '') => {
        postsWrapper.innerHTML = '';

        const filteredPosts = posts
            .filter((post) => post.title.toLowerCase().includes(value))
            .sort((a, b) => {
                if (sortType === 'asc') {
                    return a.title >= b.title ? 1 : -1;
                }

                if (sortType === 'desc') {
                    return a.title <= b.title ? 1 : -1;
                }

                return 0;
            });

        return new Promise((res) => {
            const postsEl = document.createDocumentFragment();
            filteredPosts.forEach((post) => {
                const el = postLayout(post);

                postsEl.appendChild(el);
            });
            postsWrapper.appendChild(postsEl);
            res();
        });
    };

    // eslint-disable-next-line no-new
    const select = new CustomSelect('[data-select="sort"]', selectObj, (sortType) => {
        appendPosts(filterInput.value.toLowerCase(), sortType);
    });
    select.render();

    function showMessage(type, text) {
        const message = document.createElement('div');
        message.classList = type === 'success' ? 'message__item message__item--success' : 'message__item message__item--error';
        message.textContent = text;
        messageWrapper.appendChild(message);
        setTimeout(() => {
            messageWrapper.removeChild(message);
        }, 1500);
    }

    const deletePost = async (postId) => {
        loader.classList.add('active');

        try {
            const response = await fetch(`${BASE_URL}/${postId}`, {
                method: 'DELETE',
            });

            if (response.status >= 200 && response.status <= 299) {
                posts = posts.filter((post) => post.id !== +postId);
                await appendPosts(
                    filterInput.value.toLowerCase(),
                    select.selectedValueEl.dataset.selectValue,
                );
                showMessage('success', `Post: ${postId} successfully deleted`);
            } else {
                throw new Error();
            }
        } catch (error) {
            showMessage('error', `Post: Failed to delete ${postId}`);
        } finally {
            loader.classList.remove('active');
        }
    };

    // init fn
    (async () => {
        loader.classList.add('active');

        try {
            await new Promise((res) => setTimeout(res, 3000));
            const res = await fetch(BASE_URL);
            const data = await res.json();
            posts = data;
            await appendPosts();
        } catch (error) {
            console.log(error);
        } finally {
            loader.classList.remove('active');
        }

        filterInput.addEventListener('input', (e) => {
            const { value } = e.target;
            appendPosts(value.toLowerCase(), select.selectedValueEl.dataset.selectValue);
        });

        postsWrapper.addEventListener('click', async (e) => {
            const isPostDeleteBtn = e.target.closest('[data-post-delete');

            if (isPostDeleteBtn) {
                const postId = isPostDeleteBtn.dataset.postDelete;
                deletePost(postId);
            }
        });
    })();
})();
