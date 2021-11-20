const { fromEvent } = window.rxjs;
// const { filter } = window.rxjs.operators;

const header = document.querySelector('.header');
let lastScroll = 0;
const defaultOffset = 50;

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
    if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
        header.classList.add('hide');
    }
    else if (scrollPosition() < lastScroll && containHide()) {
        header.classList.remove('hide');
    }

    lastScroll = scrollPosition();
})

const scrollEvent = fromEvent(document, 'scroll');
scrollEvent.subscribe(x => console.log(x));
// scrollEvent.pipe(filter(ev => ev.target.tagName === 'DIV'));
// clicksOnDivs.subscribe(x => console.log(x));

//Определяем на каком устройстве открыта страница (тачскрин или ПК)
const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

if (isMobile.any()) {
    document.body.classList.add('touch-screen');

    const menuArrows = document.querySelectorAll('[data-menu-arrow]');
    if (menuArrows.length > 0) {
        for (let i = 0; i < menuArrows.length; i++) {
            const menuArrow = menuArrows[i];
            menuArrow.addEventListener('click', () => {
                menuArrow.parentElement.classList.toggle('active');
            });
        }
    }
} else {
    document.body.classList.add('pc');
}
