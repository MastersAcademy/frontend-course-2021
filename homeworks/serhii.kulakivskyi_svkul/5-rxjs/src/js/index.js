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

    // init header
    (() => {
        const headerWrapperEl = document.querySelector('[data-header-wrapper]');
        const headerEl = document.querySelector('[data-header]');
        const buyNowBtnEl = document.querySelector('[data-buy-now]');

        if (headerWrapperEl && headerEl) {
            const headerHeight = headerEl.offsetHeight;
            headerWrapperEl.style.height = `${headerHeight}px`;

            const handleHeaderVisibility = ([scrollPosition, scrollDirection]) => {
                const buyNowBtnTopPosition = buyNowBtnEl.getBoundingClientRect().top;

                if (scrollPosition > headerHeight) {
                    if (scrollDirection === DIRECTIONS.DOWN) {
                        headerEl.classList.remove('slide-out-top');
                        headerEl.classList.add('slide-in-top');
                    } else {
                        headerEl.classList.remove('slide-in-top');
                        headerEl.classList.add('slide-out-top');
                    }

                    if (buyNowBtnTopPosition < 0) {
                        headerEl.classList.add('header--button');
                    } else {
                        headerEl.classList.remove('header--button');
                    }
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
                    throttleTime(20),
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
            const headerNavBtn$ = fromEvent(headerNavBtn, 'click');

            headerNavBtn$.subscribe(() => headerNavWrapper.classList.toggle('active'));
        }
    })();
})();
