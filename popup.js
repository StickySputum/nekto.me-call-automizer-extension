// popup.js
document.getElementById('startExtension').addEventListener('click', function() {
    chrome.tabs.executeScript({
      file: 'content.js',
      runAt: 'document_idle'
    });
  });

document.getElementById('stopButton').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: 'stop'});
    });
  });