let isOn = false;
let button_search_timeout;
let redirect_timeout;

// Функция для поиска кнопки и нажатия
function findAndClickButton() {
    console.log(isOn);
    if (document.location.href === 'https://nekto.me/audiochat#/' && isOn) {
        var button = document.getElementById('searchCompanyBtn');
        if (button) {
            button.click();
        }
    }
}

// Непрерывная проверка наличия кнопки и нажатие только при включенной кнопке
button_search_timeout = setInterval(findAndClickButton, 2000);

// Вызов функции сразу после загрузки страницы
findAndClickButton();

// Добавленный код для переключения на страницу, если текущий URL содержит '/peer'
function checkAndRedirect() {
    console.log(isOn);
    if (document.location.href.includes('/peer') && isOn) {
        // Создание элемента <a> для редиректа
        var redirectLink = document.createElement('a');
        redirectLink.href = 'https://nekto.me/audiochat#/';
    
        // Симуляция клика по элементу для перенаправления
        redirectLink.click();
    }
}

// Непрерывная проверка изменения URL только при включенной кнопке
redirect_timeout = setInterval(checkAndRedirect, 3000);

// Вызов функции сразу после загрузки страницы
checkAndRedirect();