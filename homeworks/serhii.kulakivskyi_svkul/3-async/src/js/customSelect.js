((global, Popper) => {
    class Select {
        constructor(select, currentValueObj, cb) {
            this.container = document.querySelector(select);
            this.currentValue = currentValueObj;
            this.selectLayout = null;
            this.selectedValueEl = null;
            this.selectedValueTextEl = null;
            this.selectOptionsEl = null;
            this.cb = cb || null;

            this.initLayout();
            this.initListeners();
        }

        initLayout() {
            const selectContent = document.createDocumentFragment();

            const selectedValueEl = document.createElement('button');
            selectedValueEl.type = 'button';
            selectedValueEl.className = 'select__current-type';
            selectedValueEl.dataset.selectValue = this.currentValue.currentValue.value;
            this.selectedValueEl = selectedValueEl;

            const selectedValueTextEl = document.createElement('span');
            selectedValueTextEl.textContent = this.currentValue.currentValue.text;
            this.selectedValueTextEl = selectedValueTextEl;

            this.selectedValueEl.innerHTML = `
                <svg style="width:18px;height:18px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>`;
            this.selectedValueEl.prepend(this.selectedValueTextEl);

            const selectOptions = document.createElement('div');
            selectOptions.className = 'select__list';

            if (this.currentValue.options.length) {
                this.currentValue.options.forEach((option) => {
                    const optionEl = document.createElement('button');
                    optionEl.type = 'button';
                    optionEl.className = 'select__list-variant';
                    optionEl.dataset.selectValue = option.value;
                    optionEl.textContent = option.text;

                    selectOptions.appendChild(optionEl);
                });
            }

            this.selectOptionsEl = selectOptions;

            selectContent.appendChild(selectedValueEl);
            selectContent.appendChild(selectOptions);
            this.selectLayout = selectContent;
        }

        initListeners() {
            if (Popper) {
                Popper.createPopper(this.selectedValueEl, this.selectOptionsEl, {
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: [0, 4],
                            },
                            strategy: 'fixed',
                        },
                    ],
                });
            }

            this.selectedValueEl.addEventListener('click', () => {
                this.selectOptionsEl.classList.toggle('active');
            });

            this.selectOptionsEl.addEventListener('click', (e) => {
                const selectOption = e.target.closest('[data-select-value]');

                if (selectOption) {
                    this.selectedValueEl.dataset.selectValue = selectOption.dataset.selectValue;
                    this.selectedValueTextEl.textContent = selectOption.textContent;
                    this.selectOptionsEl.classList.remove('active');

                    if (this.cb) {
                        this.cb(selectOption.dataset.selectValue);
                    }
                }
            });
        }

        render() {
            if (this.container) {
                this.container.appendChild(this.selectLayout);
            }
        }
    }

    // eslint-disable-next-line no-param-reassign
    global.CustomSelect = Select;
// eslint-disable-next-line no-undef
})(window, Popper);
