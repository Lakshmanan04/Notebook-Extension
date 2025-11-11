chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "save-selection",
    title: "Save selection to Notebook",
    contexts: ["selection"]
  });
});
