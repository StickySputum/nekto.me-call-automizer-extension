let isOn = false;
const button = document.getElementById('toggleButton');

button.addEventListener('click', () => {
  isOn = !isOn;
  if (isOn) {
    button.textContent = 'Включено';
    // Добавьте здесь код для включенного состояния
  } else {
    button.textContent = 'Выключено';
    // Добавьте здесь код для выключенного состояния
  }
});