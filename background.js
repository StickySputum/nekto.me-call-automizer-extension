// background.js
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript({
      file: 'content.js',
      runAt: 'document_idle'
    });
  });
  chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === 'stop') {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: 'stop'});
      });
    }
  });