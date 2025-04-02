const nektoMeSite = 'nekto.me';
let var_interval;

// Функция обновления значка для всех вкладок
const updateBadgeForAllTabs = async (state) => {
  chrome.tabs.query({}, (tabs) => {
    tabs.forEach(tab => {
      chrome.action.setBadgeText({ tabId: tab.id, text: state });
    });
  });
};

// Получает глобальное состояние (ON/OFF)
const getGlobalState = async () => {
  return new Promise((resolve) => {
    chrome.storage.local.get(['globalState'], (result) => {
      resolve(result.globalState || 'OFF');
    });
  });
};

// Сохраняет глобальное состояние и обновляет значки
const saveGlobalState = async (state) => {
  chrome.storage.local.set({ globalState: state }, () => {
    updateBadgeForAllTabs(state);
  });
};

// При клике по иконке переключаем состояние везде
chrome.action.onClicked.addListener(async () => {
  const prevState = await getGlobalState();
  const nextState = prevState === 'ON' ? 'OFF' : 'ON';

  clearInterval(var_interval);

  if (nextState === 'ON') {
    var_interval = setInterval(() => {
      chrome.tabs.query({}, (tabs) => {
        tabs.forEach((tab) => {
          if (tab.url && tab.url.includes(nektoMeSite)) {
            chrome.scripting.executeScript({
              target: { tabId: tab.id },
              files: ['content.js']
            });
          }
        });
      });
    }, 2000);
  }

  await saveGlobalState(nextState);
});

// Обновление значка при переключении вкладок
chrome.tabs.onActivated.addListener(() => {
  getGlobalState().then(updateBadgeForAllTabs);
});

// Обновление значка при загрузке новой вкладки
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    getGlobalState().then(updateBadgeForAllTabs);
  }
});

// При старте расширения обновляем значки
chrome.runtime.onStartup.addListener(() => {
  getGlobalState().then(updateBadgeForAllTabs);
});

// При установке расширения инициализируем состояние
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ globalState: 'OFF' }, updateBadgeForAllTabs);
});
