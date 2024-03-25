// content.js

function findAndClickButton() {
    if (document.location.href === 'https://nekto.me/audiochat#/') {
        var button = document.getElementById('searchCompanyBtn');
        if (button) {
            button.click();
        }
    }
}

function checkAndRedirect() {
    if (document.location.href.includes('/peer')) {
        // Изменено на поиск элемента по классу
        var redirectLink = document.querySelector('.btn.btn-lg.go-idle-button');
        if (redirectLink) {
            // Если кнопка найдена, симулируем клик на неё
            redirectLink.click();
        }
    }
}

findAndClickButton();
checkAndRedirect();