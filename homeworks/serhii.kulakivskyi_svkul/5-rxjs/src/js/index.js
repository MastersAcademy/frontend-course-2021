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

        // check if we have all necessary elements on page
        if (headerWrapperEl && headerEl && buyNowBtnEl) {
            const headerHeight = headerEl.offsetHeight;
            headerWrapperEl.style.height = `${headerHeight}px`;

            const hideHeader = (buyNowBtnTopPosition) => {
                if (buyNowBtnTopPosition < 0) {
                    // console.log('hide - near btn: ', buyNowBtnTopPosition);

                    headerEl.classList.remove('slide-out-top');
                    headerEl.classList.add('slide-in-top');
                    headerEl.classList.add('header--alternative-view');
                } else {
                    // console.log('hide - over btn: ', buyNowBtnTopPosition);

                    headerEl.classList.remove('slide-in-top');
                    headerEl.classList.add('slide-out-top');
                }
            };

            const showHeader = (buyNowBtnTopPosition) => {
                if (buyNowBtnTopPosition < 0) {
                    // console.log('show - near btn: ', buyNowBtnTopPosition);

                    headerEl.classList.remove('header--alternative-view');
                    headerEl.classList.add('slide-in-top');
                    headerEl.classList.add('header--show-btn');
                } else {
                    // console.log('show - over btn: ', buyNowBtnTopPosition);

                    headerEl.classList.remove('slide-out-top');
                    headerEl.classList.remove('header--show-btn');
                    headerEl.classList.add('slide-in-top');
                }
            };

            const handleHeaderVisibility = ([scrollPosition, scrollDirection]) => {
                const buyNowBtnTopPosition = buyNowBtnEl.getBoundingClientRect().top;

                if (scrollPosition > headerHeight) {
                    // eslint-disable-next-line no-unused-expressions
                    scrollDirection === DIRECTIONS.DOWN
                        ? showHeader(buyNowBtnTopPosition)
                        : hideHeader(buyNowBtnTopPosition);
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

        // check if we have all necessary elements on page
        if (headerNavBtn && headerNavWrapper) {
            const headerNavBtn$ = fromEvent(headerNavBtn, 'click');

            headerNavBtn$.subscribe(() => headerNavWrapper.classList.toggle('active'));
        }
    })();
})();
