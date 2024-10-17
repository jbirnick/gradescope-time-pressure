browser.webNavigation.onHistoryStateUpdated.addListener(function(details) {
  // send a message to the content script in the tab where the URL changed
  browser.tabs.sendMessage(details.tabId, {
    action: 'yourhistoryjustgotupdated'
  });
}, { url: [{ urlMatches: '.*' }] }); // TODO adjust URL filter

