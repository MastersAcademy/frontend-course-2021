// const messageListEl = document.querySelector("[data-time]");

// const timePEl = document.querySelector("[data-p-time]");

// const buttonEl = document.querySelector("[data-button]");

// setInterval(() => {
//     const today = new Date();
//     const dd = today.getDate().toString().padStart(2, "0");
//     const mm = (today.getMonth() + 1).toString().padStart(2, "0");
//     const yyyy = today.getFullYear();
//     let H = today.getHours().toString();
//     let M = today.getMinutes().toString();
//     let S = today.getSeconds().toString();

//     if (H.length === 1) H = `0${H}`;
//     if (M.length === 1) M = `0${M}`;
//     if (S.length === 1) S = `0${S}`;
//     messageListEl.value = `${yyyy}-${mm}-${dd}`;
//     timePEl.textContent = `${H}:${M}:${S}`;
// }, 1000);

// function getMondaysOfMonth(data) {
//     const year = data.getFullYear();
//     const month = data.getMonth();
//     const counter = [];
//     let date = new Date(year, month - 1, 1);
//     const daysInMount = new Date(year, month, 0).getDate();
//     for (let day = 1; day <= daysInMount; day++) {
//         if (date.getDay() === 1 && day - 1 !== 0) counter.push(day - 1);
//         date = new Date(year, month - 1, day);
//     }
//     return counter;
// }

// const isMonthLong = (data) => {
//     const year = data.getFullYear();
//     const month = data.getMonth();
//     const daysInMount = new Date(year, month, 0).getDate();
//     if (daysInMount === 31) return true;
//     return false;
// };

// function test(data) {
//     let daysInWeek = 1;
//     const weekMinimumNumberOfDays = [];
//     const year = data.getFullYear();
//     const month = data.getMonth();
//     let date = new Date(year, month - 1, 1);
//     const daysInMount = new Date(year, month, 0).getDate();
//     for (let day = 1; day <= daysInMount; day++) {
//         if (date.getDay() === 6) {
//             weekMinimumNumberOfDays.push(daysInWeek);
//             daysInWeek = 0;
//         }
//         daysInWeek += 1;
//         date = new Date(year, month - 1, day);
//     }
//     weekMinimumNumberOfDays.push(daysInWeek - 1);
//     weekMinimumNumberOfDays.sort((a, b) =>
//         a.daysInWeek > b.daysInWeek ? 1 : -1
//     );
//     return weekMinimumNumberOfDays[0];
// }

// function test2(data) {
//     let weeks = 0;
//     let daysInWeek = 1;
//     const year = data.getFullYear();
//     const month = data.getMonth();
//     let date = new Date(year, month - 1, 1);
//     const daysInMount = new Date(year, month, 0).getDate();

//     for (let day = 1; day <= daysInMount; day++) {
//         if (date.getDay() === 6 && daysInWeek >= 7) {
//             daysInWeek = 1;
//             weeks++;
//         } else {
//             daysInWeek += 1;
//         }
//         date = new Date(year, month - 1, day);
//     }
//     return weeks;
// }

// console.log("///////////", getMondaysOfMonth(new Date(2021, 11)));
// console.log("11111111111", isMonthLong(new Date(2021, 11)));
// console.log("22222222222", isMonthLong(new Date(2021, 12)));

// console.log("33333333", test(new Date(2021, 12)));
// console.log("555555555", test2(new Date(2021, 6)));

// function daysInMonth(month, year) {
//     return new Date(year, month, 0).getDate();
// }

// // // July
// // daysInMonth(7, newDate.getFullYear()); // 31
// // // February
// // daysInMonth(2, 2009); // 28
// // daysInMonth(2, 2008); // 29

// // messageListEl.value = new Date().getDate;
// buttonEl.addEventListener("click", () => {
// console.log(messageListEl.value);
// const today = new Date(messageListEl.value);
// console.log(today.getMonth() + 1, today.getFullYear());
// console.log(daysInMonth(today.getMonth() + 1, today.getFullYear()));
// console.log('dd', new Date().getDay());
// // February
// daysInMonth(2,2009); // 28
// daysInMonth(2,2008); // 29
//     const newDate = new Date(messageListEl.value);
//     console.log(newDate.getFullYear()); // 2019
//     console.log(newDate.getMonth()); // 10
//     console.log(newDate.getDate()); // 11);
// });
// messageListEl.addEventListener('input', async () => {
//     console.log(messageListEl.value.toLowerCase());
// });

// const messageListEl = document.querySelector('[data-container-messages]');
// const postTemplateEl = document.querySelector('[data-post]').content;
// const inputFilterEl = document.querySelector('[data-input]');
// const buttonSortEl = document.querySelector('[data-button-sort]');
// const messageTemplateEl = document.querySelector('[data-message]').content;
// const messageUserEl = messageTemplateEl.cloneNode(true).firstElementChild;
// const loadingTemplateEl = document.querySelector('[data-loader]').content;
// const loadingEl = loadingTemplateEl.cloneNode(true).firstElementChild;
// const buttonMessageOk = messageUserEl.querySelector('[data-button-ok]');

// let postsData = [];
// let cloneData = [];

// buttonSortEl.textContent = 'Sort off';

// // 0 - sortUp, 1-sortDown, 3-sor default
// let stateSort = 2;

// const url = 'https://jsonplaceholder.typicode.com/posts';

// // loading page
// document.querySelector('[data-window-loader]').append(loadingEl);

// const renderMessageUser = (textMessage = '') => {
//     messageUserEl.querySelector('[data-message-text]').textContent = textMessage;
//     document.querySelector('[data-main]').append(messageUserEl);
// };

// const dataPosts = async () => {
//     const returnPosts = await fetch(url);
//     postsData = await returnPosts.json();
//     cloneData = postsData;
// };

// const deletePost = async (id) => {
//     const response = await fetch(`${url}/${id}`, { method: 'DELETE' });
//     return response;
// };

// const addEventListenerPost = async () => {
//     const parent = document.querySelectorAll('[data-id-post]');

//     [...parent].forEach((postData) => {
//         postData.querySelector('[data-image]').addEventListener('click', async () => {
//             postsData = postsData.filter((post) => post.id !== Number(postData.dataset.idPost));
//             cloneData = postsData;
//             const resultResponse = await deletePost(postData.dataset.idPost);
//             if (resultResponse.status === 200) {
//                 renderMessageUser(`message: Post number id:${postData.dataset.idPost} delete`);
//                 postData.remove();
//             } else {
//                 renderMessageUser('message: error delete ');
//             }
//         });
//     });
// };

// const renderPost = (data) => {
//     if (stateSort === 0) {
//         data.sort((a, b) => a.title.localeCompare(b.title));
//         buttonSortEl.textContent = 'Sort ▲';
//     } else if (stateSort === 1) {
//         data.sort((a, b) => b.title.localeCompare(a.title));
//         buttonSortEl.textContent = 'Sort ▼';
//     } else {
//         data.sort((a, b) => a.id - b.id);
//         buttonSortEl.textContent = 'Sort off';
//     }

//     data.forEach((element) => {
//         const messageEl = postTemplateEl.cloneNode(true).firstElementChild;
//         messageEl.querySelector('[data-title]').textContent = element.title;
//         messageEl.setAttribute('data-id-post', element.id);
//         messageEl.querySelector('[data-body]').textContent = element.body;
//         messageListEl.append(messageEl);
//     });

//     addEventListenerPost();
// };

// const cleanDataPosts = async () => {
//     const parent = document.querySelector('[data-container-messages]');
//     while (parent.firstChild) {
//         parent.firstChild.remove();
//     }
// };

// setTimeout(() => {
//     dataPosts()
//         .then(() => loadingEl.remove())
//         .then(() => renderPost(postsData))
//         .catch((e) => console.log(e));
// }, 3000);

// buttonSortEl.addEventListener('click', async () => {
//     await cleanDataPosts();
//     if (stateSort >= 2) stateSort = 0;
//     else stateSort++;
//     renderPost(cloneData);
// });

// inputFilterEl.addEventListener('input', async () => {
//     await cleanDataPosts();
//     cloneData = postsData.filter((item) => item.title.toLowerCase()
//         .includes(inputFilterEl.value.toLowerCase()));
//     renderPost(cloneData);
// });

// buttonMessageOk.addEventListener('click', () => {
//     messageUserEl.remove();
// });
