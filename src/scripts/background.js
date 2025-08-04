function shouldTriggerPopup(url) {
  return (
    url &&
    !url.includes("meet.google.com") &&
    !url.startsWith("chrome://") &&
    !url.startsWith("chrome-extension://")
  );
}

chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    if (shouldTriggerPopup(tab.url)) {
      chrome.scripting.executeScript({
        target: { tabId: activeInfo.tabId },
        files: ["inject.js"],
      });
    }
  });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && shouldTriggerPopup(tab.url)) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ["inject.js"],
    });
  }
});
