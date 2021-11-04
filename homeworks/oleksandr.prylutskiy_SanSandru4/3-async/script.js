const url = "https://jsonplaceholder.typicode.com/posts";
const blogMsg = document.querySelector("[data-blog-msg]");
const sortPost= document.querySelector("[data-blog-sort]");
const filterPostTitle = document.querySelector("[data-blog-filter]");
const postStr = "";

function forward(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
};

function back(field) {
    return (a, b) => b[field] > a[field] ? 1 : -1;
};

function render(bTitle, bBody) {
    let msg = document.createElement("ol");
    msg.classList.add("blog-msg");
    blogMsg.appendChild(msg);
    let postTitle = document.createElement("H1");
    postTitle.innerHTML = bTitle;
    postTitle.classList.add("post-title");
    msg.appendChild(postTitle);
    let postBody = document.createElement("p");
    postBody.innerHTML = bBody;
    postBody.classList.add("post-body");
    msg.appendChild(postBody);
};

function deleteEl(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
};

fetch(url)
.then((response) => response.json())
.then((json) => {
    const blogArr = json;
    for (let i = 0; i < blogArr.length; i++) {
        render(`${blogArr[i].title}`, `${blogArr[i].body}`);
    };

    sortPost.addEventListener("change", function() {
        if(`${sortPost.value}` == "No sort") {
            const blogSort = blogArr;
            deleteEl(blogMsg);
            for (let i = 0; i < blogSort.length; i++) {
                render(`${blogSort[i].title}`, `${blogSort[i].body}`);
            };
        }
        else if(`${sortPost.value}` == "Sort A-Z") {
            deleteEl(blogMsg);
            blogArr.sort(forward("title"));
            for (let i = 0; i < blogArr.length; i++) {
                render(`${blogArr[i].title}`, `${blogArr[i].body}`);
            };
        }
        else if(`${sortPost.value}` == "Sort Z-A") {
            deleteEl(blogMsg);
            blogArr.sort(back("title"));
            for (let i = 0; i < blogArr.length; i++) {
                render(`${blogArr[i].title}`, `${blogArr[i].body}`);
            };
        };
    })

    filterPostTitle.addEventListener("change", (event) => {
        deleteEl(blogMsg);
        const postStr = filterPostTitle.value;
        console.log(postStr);
        const blogFilter = blogArr.filter(x => {return x.title.toLowerCase().indexOf(postStr.toLowerCase()) > -1;});
        for (let i = 0; i < blogFilter.length; i++) {
            render(`${blogFilter[i].title}`, `${blogFilter[i].body}`);
        };
    })
})

