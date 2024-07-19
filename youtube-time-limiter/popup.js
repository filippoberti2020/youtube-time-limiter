document.addEventListener('DOMContentLoaded', () => {
  const timeLimitInput = document.getElementById('timeLimit');
  const setLimitButton = document.getElementById('setLimit');
  const statusElement = document.getElementById('status');

  chrome.storage.sync.get('timeLimit', (data) => {
    timeLimitInput.value = data.timeLimit || 60;
  });

  setLimitButton.addEventListener('click', () => {
    const timeLimit = parseInt(timeLimitInput.value);
    if (timeLimit > 0) {
      chrome.runtime.sendMessage({ action: 'setTimeLimit', timeLimit: timeLimit }, (response) => {
        statusElement.textContent = 'Time limit set successfully!';
      });
    } else {
      statusElement.textContent = 'Please enter a valid time limit.';
    }
  });
});