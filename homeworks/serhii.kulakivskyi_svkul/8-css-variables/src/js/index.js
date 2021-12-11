(() => {
    const { rxjs } = window;
    const { fromEvent, combineLatest } = rxjs;
    const {
        throttleTime,
        map,
        pairwise,
        distinctUntilChanged,
    } = rxjs.operators;

    const DIRECTIONS = {
        UP: 'Up',
        DOWN: 'Down',
    };

    const THEMES = {
        dark: 'light',
        light: 'dark',
    };

    // init header
    (() => {
        const headerWrapperEl = document.querySelector('[data-header-wrapper]');
        const headerEl = document.querySelector('[data-header]');

        if (headerWrapperEl && headerEl) {
            const headerHeight = headerEl.offsetHeight;
            headerWrapperEl.style.height = `${headerHeight}px`;

            const hideHeader = () => {
                // if (buyNowBtnTopPosition < 0) {
                // headerEl.classList.remove('slide-out-top');
                // headerEl.classList.add('slide-in-top');
                // } else {
                headerEl.classList.remove('slide-in-top');
                headerEl.classList.add('slide-out-top');
                // }
            };

            const showHeader = () => {
                // if (buyNowBtnTopPosition < 0) {
                // headerEl.classList.remove('header--alternative-view');
                // headerEl.classList.add('slide-in-top');
                // headerEl.classList.add('header--show-btn');
                // } else {
                headerEl.classList.remove('slide-out-top');
                headerEl.classList.remove('header--show-btn');
                headerEl.classList.add('slide-in-top');
                // }
            };

            const handleHeaderVisibility = ([scrollPosition, scrollDirection]) => {
                if (scrollPosition < headerHeight) {
                    return;
                }

                if (scrollDirection === DIRECTIONS.DOWN) {
                    showHeader();
                } else {
                    hideHeader();
                }
            };

            const windowScroll$ = fromEvent(window, 'scroll', { passive: false });

            const windowScrollDirection$ = windowScroll$
                .pipe(
                    map(() => window.pageYOffset),
                    pairwise(),
                    map(([y1, y2]) => (y2 - y1 > 0 ? DIRECTIONS.UP : DIRECTIONS.DOWN)),
                    distinctUntilChanged(),
                );

            const windowScrollPosition$ = windowScroll$
                .pipe(
                    throttleTime(150),
                    map(() => window.pageYOffset),
                );

            combineLatest(windowScrollPosition$, windowScrollDirection$)
                .subscribe((settings) => handleHeaderVisibility(settings));
        }
    })();

    // init menu
    (() => {
        const headerNavBtn = document.querySelector('[data-nav-btn]');
        const headerNavWrapper = document.querySelector('[data-nav]');

        if (headerNavBtn && headerNavWrapper) {
            headerNavBtn.addEventListener('click', () => {
                headerNavWrapper.classList.toggle('active');
            });
        }
    })();

    // init theme switcher
    (() => {
        const headerThemeSwitcher = document.querySelector('[data-theme-switcher]');
        const headerThemeSwitcherIcon = document.querySelector('[data-theme-switcher-icon]');

        if (headerThemeSwitcher && headerThemeSwitcherIcon) {
            headerThemeSwitcher.addEventListener('click', () => {
                const currentTheme = document.body.dataset.theme;

                headerThemeSwitcherIcon.setAttribute('xlink:href', `#${currentTheme}`);
                document.body.dataset.theme = THEMES[currentTheme];
            });
        }
    })();
})();
