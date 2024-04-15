chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  const currentTab = tabs[0];
    const url = currentTab.url;
    var tabId = currentTab.id
    // // Display the URL in the popup
    // const urlDiv = document.getElementById('url');
    // urlDiv.textContent = "Current URL: " + url;
  });
  