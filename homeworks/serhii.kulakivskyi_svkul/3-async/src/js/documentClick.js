document.addEventListener('click', (e) => {
    const customSelectTarget = e.target.closest('[data-select]');
    const customAccordionTarget = e.target.closest('[data-accordion]');

    if (!customSelectTarget) {
        const customSelectOpened = document.querySelector('.select__list.active');

        if (customSelectOpened) {
            customSelectOpened.classList.remove('active');
        }
    }

    if (!customAccordionTarget) {
        const customAccordionOpened = document.querySelector('.accordion__list.active');

        if (customAccordionOpened) {
            customAccordionOpened.classList.remove('active');
        }
    }
});
