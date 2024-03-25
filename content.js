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
        const talkLabel = document.querySelector('.talk-label');

        // Проверяем, содержит ли элемент именно этот текст
        if (talkLabel && talkLabel.textContent.trim() === 'Разговор завершен') {
            console.log('Элемент содержит текст "Разговор завершен".');
            var redirectLink = document.querySelector('.btn.btn-lg.go-idle-button');
            if (redirectLink) {
                // Если кнопка найдена, симулируем клик на неё
                redirectLink.click();
            }
        }
    
    }
}

findAndClickButton();
checkAndRedirect();