const ulList = document.querySelector(".message-list");

const input = document.querySelector(".input");

const btn = document.querySelector(".send-message-btn");

const messagerWrapper = document.querySelector(".message-wrapper");

const li = `<li>${input.value}</li>`;

// function createMessage (text) {
//     // let html = '';
//     // html = `<li>${text.value}</li>`;
//     ulList.insertAdjacentHTML('beforeend', `<li>${text.value}</li>`);
//     console.log("1");
// };


btn.addEventListener('click', function () {
    const li = `<li>${input.value}</li>`;
    if (input.value === "") {} else {
        ulList.insertAdjacentHTML('beforeend', li);
        messagerWrapper.scrollTo(this.li);
        input.value = "";
}
});

input.addEventListener('keydown', (event) => {
    const li = `<li>${input.value}</li>`;
    if (event.key === 'Enter' && !event.shiftKey && input.value !== "") {
        ulList.insertAdjacentHTML('beforeend', li);
        messagerWrapper.scrollTo(this.li);
        input.value = "";
    } else {}
});

