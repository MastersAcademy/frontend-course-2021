const gambMenuEl = document.querySelector('[data-min-menu]');
// const { fromEvent } = window.rxjs;
// const { map } = window.rxjs.operators;

gambMenuEl.addEventListener('click', () => {
    const x = document.querySelector('[data-nav-menu]');
    if (x.className === 'header__nav_menu') {
        x.className += ' responsive';
    } else {
        x.className = 'header__nav_menu';
    }
});
