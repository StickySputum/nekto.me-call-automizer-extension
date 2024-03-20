let isOn = false;
const button = document.getElementById('toggleButton');

// Функция для обновления текста кнопки и отправки сообщения в content.js
function updateButtonState() {
    button.textContent = isOn ? 'Включено' : 'Выключено';
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { isOn: isOn });
    });
}

button.addEventListener('click', () => {
    isOn = !isOn;
    updateButtonState();
});

// Обработка начального состояния кнопки при загрузке расширения
chrome.storage.sync.get('isOn', function(data) {
    isOn = data.isOn !== undefined ? data.isOn : isOn;
    updateButtonState();
});