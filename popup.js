let isOn = false;
  const button = document.getElementById('toggleButton');
  
  function toggleState() {
      if (isOn) {
          button.textContent = 'Выключено';
          isOn = false;
          // Действия при выключенном состоянии
          console.log('Кнопка выключена');
      } else {
          button.textContent = 'Включено';
          isOn = true;
          // Действия при включенном состоянии
          console.log('Кнопка включена');
      }
  }