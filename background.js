const CONTEXT_ID = "yandexSearchContext";

chrome.contextMenus.create(
    {
        id: CONTEXT_ID,
        title: 'Найти "%s" в Яндекс',
        contexts: ["selection"]
    },
    () => {
        console.log("context created")
    },
  )
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    console.log(info);
    console.log(tab);
    if (info.menuItemId === CONTEXT_ID) {
        chrome.tabs.create({
            index: tab.index + 1,
            openerTabId: tab.id,
            url: `https://yandex.ru/search/?text=${info.selectionText}`
        })
    }
  })