((window) => {
    class Chat {
        constructor(chatSelector) {
            this.container = document.querySelector(chatSelector);
            this.chatLayout = null;
            this.messagesWrapper = null;
            this.textarea = null;
            this.submitButton = null;

            this.initLayout();
            this.initListeners();
        }

        initLayout() {
            const mainLayout = document.createElement('div');
            mainLayout.className = 'chat';

            const messagesWrapper = document.createElement('div');
            messagesWrapper.className = 'chat__messages';

            const controlsWrapper = document.createElement('div');
            controlsWrapper.className = 'chat__controls';

            const textarea = document.createElement('textarea');
            textarea.className = 'chat__controls-textarea';
            textarea.placeholder = 'Type something here...';

            const submitButton = document.createElement('button');
            submitButton.className = 'chat__controls-button';
            submitButton.type = 'button';
            submitButton.textContent = 'Send';

            controlsWrapper.appendChild(textarea);
            controlsWrapper.appendChild(submitButton);
            mainLayout.appendChild(messagesWrapper);
            mainLayout.appendChild(controlsWrapper);

            this.messagesWrapper = messagesWrapper;
            this.textarea = textarea;
            this.submitButton = submitButton;
            this.chatLayout = mainLayout;
        }

        initListeners() {
            this.submitButton.addEventListener('click', () => {
                this.addMessage();
            });

            this.textarea.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    this.addMessage();
                }
            });

            this.messagesWrapper.addEventListener('click', (e) => {
                const isChatBtn = e.target.closest('[data-chat-message-btn');
                const message = e.target.closest('[data-chat-message]');

                if (message && isChatBtn) {
                    this.messagesWrapper.removeChild(message);
                }
            });
        }

        messageLayout(str) {
            const message = document.createElement('div');
            message.className = 'chat__message-item';
            message.dataset.chatMessage = '';

            const messageText = document.createElement('p');
            messageText.className = 'chat__message-item-text';
            messageText.innerText = str;

            const messageClose = document.createElement('button');
            messageClose.className = 'chat__message-item-btn';
            messageClose.dataset.chatMessageBtn = '';
            messageClose.type = 'button';
            messageClose.innerHTML = `
            <svg style="width:12px;height:12px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z" />
            </svg>`;

            message.appendChild(messageText);
            message.appendChild(messageClose);

            return message;
        }

        addMessage() {
            const message = this.textarea.value;

            if (message.trim()) {
                this.messagesWrapper.appendChild(this.messageLayout(message));
                this.textarea.value = '';
                this.messagesWrapper.scrollTop = this.messagesWrapper.scrollHeight;
            }
        }

        render() {
            if (this.container) {
                this.container.appendChild(this.chatLayout);
            }
        }
    }

    /* eslint no-param-reassign: ["error", { "props": false }] */
    window.Chat = Chat;
})(this);

const { Chat } = window;
new Chat('[data-chat]').render();
