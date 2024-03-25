// background.js

const nektoMeSite = 'nekto.me';
let var_interval;


chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: 'OFF'
  });
});

chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.includes(nektoMeSite)) {
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
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
  }
});