if (document.location.href === 'https://nekto.me/audiochat#/') {
    // Функция для поиска кнопки и нажатия
    function findAndClickButton() {
        var button = document.getElementById('searchCompanyBtn');
        if (button) {
            button.click();
        }
    }

    // Непрерывная проверка наличия кнопки и нажатие
    setInterval(findAndClickButton, 1000); // Проверять каждую секунду (можете изменить интервал по вашему желанию)

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
setInterval(checkAndRedirect, 1000); // Проверять каждую секунду (можете изменить интервал по вашему желанию)

// Вызов функции сразу после загрузки страницы
checkAndRedirect();