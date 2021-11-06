const customSelect = document.querySelector('[date-sort-select]');

if (customSelect) {
    document.querySelectorAll('[date-sort-select]').forEach((select) => { // Выбриаем все выпадающие списки на странице
        const selectSort = select.querySelector('[date-sort-posts]');
        const selectList = select.querySelector('[date-select-list]');
        const selectItem = select.querySelectorAll('[data-value]');

        // по клику добавляем/удалям класс
        selectSort.addEventListener('click', () => {
            selectList.classList.toggle('show');
        });
        // функция закрытия выпадающего списка
        const selectListHide = () => {
            selectList.classList.remove('show');
        };
        // обходим элементы списка
        selectItem.forEach((item) => {
            // обрабатываем событие клик по элементу
            item.addEventListener('click', () => {
                // получаем содержание элемента (текст)
                const itemText = item.textContent;
                // присваиваем текущее значение (текст)
                selectSort.textContent = itemText;
                // скрываем выпадающий список
                selectListHide();
            });
        });
        // Закрываем выпадающий сисок, если клик был вне области
        document.addEventListener('mouseup', (e) => {
            if (!select.contains(e.target))selectListHide();
        });
    });
}
