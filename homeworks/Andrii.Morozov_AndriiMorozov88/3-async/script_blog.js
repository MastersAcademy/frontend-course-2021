const blogContainer = document.querySelector('[data-blog-container]');
function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            return response.json();
        })
        .then(function (data) {
            for (let i = 0; i < data.length; i++) {
                const blogElement = document.createElement('div');
        blogElement.className = 'blog_container-el';
        blogContainer.append(blogElement);
        blogElement.innerText = data[i].title;
     }   
    });
 }
 function fetchDataA_Z() {
    fetch('https://jsonplaceholder.typicode.com/posts')
   .then((response) => {
     return response.json();
   })
   .then(function(data) {
       for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if (data[i].title < data[j].title) {
                [data[i], data[j]] = [data[j], data[i]]; 
            }
        }
       }
     for (let i = 0; i < data.length; i++) {
        let blogElement = document.createElement('div');
        blogElement.className = 'blog_container-el';
        blogContainer.append(blogElement);
        blogElement.innerText = data[i].title;
     }   
    });
 }
 function fetchDataZ_A() {
    fetch('https://jsonplaceholder.typicode.com/posts')
   .then((response) => {
     return response.json();
   })
   .then(function(data) {
       for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if (data[i].title > data[j].title) {
                [data[i], data[j]] = [data[j], data[i]]; 
            }
        }
       }
     for (let i = 0; i < data.length; i++) {
        let blogElement = document.createElement('div');
        blogElement.className = 'blog_container-el';
        blogContainer.append(blogElement);
        blogElement.innerText = data[i].title;
        
     }  
    });
}
function fetchDataFilter() {
    fetch('https://jsonplaceholder.typicode.com/posts')
   .then((response) => {
     return response.json();
   })
   .then(function(data) {
    blogContainer.innerHTML = "";
     for (let i = 0; i < data.length; i++) {
         if (data[i].title.indexOf(filter.value) !== -1) {
         
        let blogElement = document.createElement('div');
        blogElement.className = 'blog_container-el';
        blogContainer.append(blogElement);
        blogElement.innerText = data[i].title;
         }
         }
         filter.value = ''; 
    });
 }
 
document.querySelector('[data-btn]').addEventListener('click', () => {
let sort = document.querySelector('[data-sort]');
if (sort.value == 1) {
    blogContainer.innerHTML = "";
   setTimeout(fetchData, 100);
   
}
if (sort.value == 2) {
    blogContainer.innerHTML = "";
    setTimeout(fetchDataA_Z, 100);
}


if (sort.value == 3) {
    blogContainer.innerHTML = "";
    setTimeout(fetchDataZ_A, 100);
} 
});
let filter = document.querySelector('[data-input-filter]');
filter.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        fetchDataFilter();
    }
})