document.getElementById('activate').addEventListener('click', async () => {
  const [tab] = await browser.tabs.query({active: true, lastFocusedWindow: true});
  const ms = Math.round(document.getElementById('delay').value * 1000)
  await browser.tabs.sendMessage(tab.id, {
    action: 'activate',
    delay: ms
  });
});

document.getElementById('deactivate').addEventListener('click', async () => {
  const [tab] = await browser.tabs.query({active: true, lastFocusedWindow: true});
  await browser.tabs.sendMessage(tab.id, {
    action: 'deactivate',
  });
});
