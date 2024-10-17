function triggerRedBlink() {
  blinkDiv.animate([
    { opacity: 0 },
    { opacity: 1 },
    { opacity: 0 }
  ], {
    duration: 300,
    easing: 'ease-in-out',
    iterations: 1,
    fill: 'forwards'
  });
}

function startNewTimer() {
  timeoutID = setTimeout(() => {
    triggerRedBlink()
  }, delay)
}

function clearTimer() {
  if (timeoutID != null) {
    clearTimeout(timeoutID);
  }
}

// global variables
let blinkDiv = document.createElement('div');
blinkDiv.id = 'red-blink';
document.body.appendChild(blinkDiv);
let active = false;
let timeoutID = null;
let delay;

// react to messages from background/popup
browser.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === 'activate') {
    active = true;
    delay = message.delay;
    startNewTimer();
  } else if (message.action === 'deactivate') {
    active = false;
    clearTimer();
  } else if (message.action === 'yourhistoryjustgotupdated' && active) {
    clearTimer();
    startNewTimer();
  }
});
