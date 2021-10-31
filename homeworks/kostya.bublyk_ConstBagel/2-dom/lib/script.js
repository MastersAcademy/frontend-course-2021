/**
 * Elements and storage:
 */
const inputMessageField = document.querySelector('[data-role="chat-input-message-field"]');
const sendMessageButton = document.querySelector('[data-role="chat-send-message-button"]');
const chatStorySection = document.querySelector('[data-role="chat-story-section"]');
const deleteMessageDataRole = 'data-role="chat-delete-message-button"';
let messages = [];

/**
 * Functions:
 */
function showChatStory() {
    chatStorySection.innerHTML = messages.map((text, index) => `<div class="chat-message">
      <p class="chat-message-text">${text}</p>
      <button
        id="${index}"
        class="chat-cross-button"
        ${deleteMessageDataRole}>
        X
      </button>
    </div>`).join('');
    updateEventListenersForDeleteButtons();
}

function updateEventListenersForDeleteButtons() {
    const deleteMessageButtons = document.querySelectorAll(`[${deleteMessageDataRole}]`);
    deleteMessageButtons.forEach((button) => button.addEventListener('click', (event) => {
        const pickedId = +event.target.id;
        messages = messages.filter((_, index) => index !== pickedId);
        showChatStory();
    }));
}

function sendMessage() {
    const sentText = inputMessageField.value.trim();
    if (sentText) {
        messages.push(sentText);
        showChatStory();
        inputMessageField.value = '';
    }
}

/**
 *  Event listeners:
 */
sendMessageButton.addEventListener('click', () => sendMessage());

inputMessageField.addEventListener('keydown', (event) => {
    if (event.which === 13) {
        inputMessageField.blur();
        sendMessage();
    }
});
