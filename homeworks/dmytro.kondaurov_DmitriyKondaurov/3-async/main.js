window.onload = () => {
    document.querySelector('.loader_inner').classList.add('hide');
    document.querySelector('.loader').classList.add('hide');
};

setTimeout(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            // json.map((post) => {
            // post.title
            // post.body
            // })
        });
}, 3000);
