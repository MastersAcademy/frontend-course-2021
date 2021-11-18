const { fromEvent } = window.rxjs;
const { scan, filter } = window.rxjs.operators;

const headerEl = document.querySelector('.header');
const btnElCopy = document.createElement('button');
btnElCopy.classList.add('main__button-scroll-');
btnElCopy.innerText = 'buy me';

const burgerEl = document.querySelector('[data-burger-menu]');
const menuEl = document.querySelector('.menu__links');

burgerEl.addEventListener('click', () => {
    if (headerEl.classList.length === 1) {
        headerEl.classList.add('header-burger');
        menuEl.style.display = 'flex';
        menuEl.style.flexDirection = 'column';
    } else {
        headerEl.classList.remove('header-burger');
        menuEl.style.display = 'none';
        menuEl.style.flexDirection = 'row';
    }
});

// const btnEl = document.querySelector('.main__button');
// // Test visibility button
// function visible(element) {
//     if (element.offsetWidth === 0 || element.offsetHeight === 0) return false;
//     const height = document.documentElement.clientHeight;
//     const rects = element.getClientRects();
//     const onTop = function (r) {
//         const x = (r.left + r.right) / 2;
//         const y = (r.top + r.bottom) / 2;
//         return document.elementFromPoint(x, y) === element;
//     };
//     for (let i = 0, l = rects.length; i < l; i++) {
//         const r = rects[i];
//         const inViewport = r.top > 0 ? r.top <= height : (r.bottom > 0 && r.bottom <= height);
//         if (inViewport && onTop(r)) return true;
//     }
//     return false;
// }
//
// const scrollingButton$ = fromEvent(document, 'scroll')
//     .pipe(
//         scan(() => (visible(btnEl))),
//     );
//
// scrollingButton$.subscribe((option) => {
//     if (option === true) {
//         headerEl.appendChild(btnElCopy);
//     }
// });

// Scrolling
const scrolling$ = fromEvent(document, 'scroll')
    .pipe(
        scan(() => (window.scrollY)),
        filter((posY) => posY > 60),
        scan((acc, val) => acc.concat(val), []),
    );
scrolling$.subscribe((item) => {
    if (item[item.length - 2] - item[item.length - 1] > 0) {
        headerEl.style.display = 'flex';
    } else if (item[item.length - 2] - item[item.length - 1] < 0) {
        headerEl.style.display = 'none';
    }
});
