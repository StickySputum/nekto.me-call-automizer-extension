// popup.js
document.getElementById('startExtension').addEventListener('click', function() {
    chrome.tabs.executeScript({
      file: 'content.js',
      runAt: 'document_idle'
    });
  });
