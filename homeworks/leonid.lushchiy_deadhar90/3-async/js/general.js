const sectionTweets = document.querySelector('[data-tweets]');
const filtring = document.querySelector('[data-select-option]');

// from MDN
const requestURL = 'https://jsonplaceholder.typicode.com/posts';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

// do element from Array
function showTweets(jsonObj) {
    const tweets = jsonObj;
    let i = 0;
    for (i; i < tweets.length; i++) {
        const myArticle = document.createElement('article');
        myArticle.className = 'tweet';
        const myH1 = document.createElement('h1');
        const myPara1 = document.createElement('p');
        myH1.textContent = tweets[i].title;
        myPara1.textContent = tweets[i].body;
        myArticle.appendChild(myH1);
        myArticle.appendChild(myPara1);
        sectionTweets.appendChild(myArticle);
    }
}

const loadBlog = new Promise((resolve) => {
    window.onload = setTimeout(() => {
        const blog = request.response;
        resolve(showTweets(blog));
    }, 3000);
});

// want to do error but not work
// function showError() {
//     const squer = document.querySelector('.rollingSquer');
//     squer.classList.add('error');
//     squer.classList.remove('rollingSquer');
// }

// hidden preloader when load from server
loadBlog.then(() => {
    const preloaderEl = document.querySelector('[data-preloader]');
    preloaderEl.classList.add('hidden');
    preloaderEl.classList.remove('visible');
});

// from A to Z, reverse, reload
filtring.addEventListener('change', () => {
    const dataTweets = document.querySelector('[data-tweets]');
    const nodesToSort = dataTweets.querySelectorAll('.tweet');
    if (filtring.options[filtring.selectedIndex].value === 'withOut') {
        document.location.reload();
    } if (filtring.options[filtring.selectedIndex].value === 'fromAtoZ') {
        Array.prototype.map.call(nodesToSort, (node) => {
            return {
                node: node,
                relevantText: node.querySelector('h1').textContent,
            };
        }).sort((a, b) => { return a.relevantText.localeCompare(b.relevantText);
            }).forEach((item) => { dataTweets.appendChild(item.node); });
    } if (filtring.options[filtring.selectedIndex].value === 'fromZtoA') {
        Array.prototype.map.call(nodesToSort, (node) => {
            return {
                node: node,
                relevantText: node.querySelector('h1').textContent,
            };
        }).reverse((a, b) => { return b.relevantText.localeCompare(a.relevantText);
            }).forEach((item) => { dataTweets.appendChild(item.node); });
    }
});

// filtring text from input
const input = document.querySelector('[data-mySearch]');
input.addEventListener('input', () => {
    const filter = input.value.toUpperCase();
    const tweets = document.querySelector('[data-tweets]');
    const article = tweets.getElementsByTagName('article');
    let i = 0;
    for (i; i < article.length; i++) {
        const H1 = article[i].getElementsByTagName('h1')[0];
        if (H1.innerHTML.toUpperCase().trim().indexOf(filter) > -1) {
            article[i].style.display = '';
        } else {
            article[i].style.display = 'none';
        }
    }
});
