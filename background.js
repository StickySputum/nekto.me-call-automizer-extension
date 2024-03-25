// background.js

const nektoMeSite = 'nekto.me';
let var_interval;

const setBadgeTextOnTab = (tabId, text) => {
  chrome.action.setBadgeText({ tabId, text });
};

// Обработчик для события обновления вкладки
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.url.includes(nektoMeSite)) {
    getStateFromStorage(tabId).then((state) => {
      setBadgeTextOnTab(tabId, state);
    });
  }
});

// Функция для получения состояния из хранилища
const getStateFromStorage = async (tabId) => {
  return new Promise((resolve) => {
    chrome.storage.local.get(['badgeState'], (result) => {
      const badgeState = result.badgeState || {};
      resolve(badgeState[tabId] || 'OFF');
    });
  });
};

// Функция для сохранения состояния в хранилище
const saveStateToStorage = (tabId, state) => {
  chrome.storage.local.get(['badgeState'], (result) => {
    const badgeState = result.badgeState || {};
    badgeState[tabId] = state;
    chrome.storage.local.set({ badgeState });
  });
};

chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.includes(nektoMeSite)) {
    const prevState = await getStateFromStorage(tab.id);
    const nextState = prevState === 'ON' ? 'OFF' : 'ON';

    await chrome.action.setBadgeText({
      tabId: tab.id,
      text: nextState
    });

    clearInterval(var_interval);

    if (nextState === 'ON') {
      var_interval = setInterval(() => {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ['content.js']
        });
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          function: 'findAndClickButton'
        });
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          function: 'checkAndRedirect'
        });
      }, 2000);
    }

    saveStateToStorage(tab.id, nextState);
  }
});