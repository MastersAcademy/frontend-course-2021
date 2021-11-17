const gambMenuEl = document.querySelector('[data-min-menu]');

gambMenuEl.addEventListener('click', () => {
    const x = document.querySelector('[data-nav-menu]');
    if (x.className === 'header__nav_menu') {
        x.className += ' responsive';
    } else {
        x.className = 'header__nav_menu';
    }
});
