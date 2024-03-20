// Объявление переменной для хранения идентификатора интервала
var intervalId;

if (document.location.href === 'https://nekto.me/audiochat#/') {
    // Функция для поиска кнопки и нажатия
    function findAndClickButton() {
        var button = document.getElementById('searchCompanyBtn');
        if (button) {
            button.click();
        }
    }

    // Непрерывная проверка наличия кнопки и нажатие
    intervalId = setInterval(findAndClickButton, 1000); // Сохраняем идентификатор интервала

    // Вызов функции сразу после загрузки страницы
    findAndClickButton();
}

// Добавленный код для переключения на страницу, если текущий URL содержит '/peer'
function checkAndRedirect() {
    if (document.location.href.includes('/peer')) {
        // Создание элемента <a> для редиректа
        var redirectLink = document.createElement('a');
        redirectLink.href = 'https://nekto.me/audiochat#/';
    
        // Симуляция клика по элементу для перенаправления
        redirectLink.click();
    }
}

// Непрерывная проверка изменения URL
intervalId = setInterval(checkAndRedirect, 2000); // Проверять каждую секунду (можете изменить интервал по вашему желанию)

// Вызов функции сразу после загрузки страницы
checkAndRedirect();

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === 'stop') {
        clearInterval(intervalId); // Остановка выполнения функции из content.js
    }
});