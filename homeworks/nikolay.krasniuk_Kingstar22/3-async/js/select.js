const customSelect = document.querySelector('[date-sort-select]');

if (customSelect) {
    document.querySelectorAll('[date-sort-select]').forEach((select) => {
        const selectSort = select.querySelector('[date-sort-posts]');
        const selectList = select.querySelector('[date-select-list]');
        const selectItem = select.querySelectorAll('[data-value]');
        selectSort.addEventListener('click', () => {
            selectList.classList.toggle('show');
        });
        const selectListHide = () => {
            selectList.classList.remove('show');
        };
        selectItem.forEach((item) => {
            item.addEventListener('click', () => {
                const itemText = item.textContent;
                selectSort.textContent = itemText;
                selectListHide();
            });
        });
        document.addEventListener('mouseup', (e) => {
            if (!select.contains(e.target))selectListHide();
        });
    });
}
