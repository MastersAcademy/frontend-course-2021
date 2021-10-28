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
            mainLayout.className = 'ma__chat-wrapper';

            const messagesWrapper = document.createElement('div');
            messagesWrapper.className = 'ma__chat-messages';

            const controlsWrapper = document.createElement('div');
            controlsWrapper.className = 'ma__chat-controls';

            const textarea = document.createElement('textarea');
            textarea.className = 'ma__chat-textarea';
            textarea.placeholder = 'Type something here...';

            const submitButton = document.createElement('button');
            submitButton.className = 'ma__chat-button';
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
                const isSvg = e.target.closest('svg');
                const message = e.target.closest('.ma__chat-message');

                if (message && isSvg) {
                    this.messagesWrapper.removeChild(message);
                }
            });
        }

        messageLayout(str) {
            const message = document.createElement('div');
            message.className = 'ma__chat-message';

            const messageText = document.createElement('p');
            messageText.innerText = str;

            const messageClose = document.createElement('button');
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
