let timeLimit = 0;
let startTime = 0;
let isTimerRunning = false;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ timeLimit: 60 }); // Default time limit: 60 minutes
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url.includes('youtube.com')) {
    if (!isTimerRunning) {
      startTimer();
    }
  }
});

function startTimer() {
  isTimerRunning = true;
  startTime = Date.now();
  chrome.alarms.create('youtubeTimer', { delayInMinutes: timeLimit });
}

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'youtubeTimer') {
    blockYouTube();
  }
});

function blockYouTube() {
  chrome.tabs.query({ url: '*://*.youtube.com/*' }, (tabs) => {
    tabs.forEach((tab) => {
      chrome.tabs.update(tab.id, { url: 'https://www.example.com' });
    });
  });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'setTimeLimit') {
    timeLimit = request.timeLimit;
    chrome.storage.sync.set({ timeLimit: timeLimit });
    sendResponse({ status: 'Time limit set' });
  }
});