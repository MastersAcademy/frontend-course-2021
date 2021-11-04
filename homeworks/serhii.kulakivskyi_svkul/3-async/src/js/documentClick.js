document.addEventListener('click', (e) => {
    const targetFinder = e.target.closest('[data-select]');

    if (!targetFinder) {
        const targetList = document.querySelector('.select__list.active');

        if (targetList) {
            targetList.classList.remove('active');
        }
    }
});
