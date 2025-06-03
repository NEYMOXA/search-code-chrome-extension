chrome.runtime.onInstalled.addListener(() =>{
    chrome.contextMenus.create({
        id:"search-code",
        title: "Искать код: '%s'",
        contexts: ['selection'] 
    })
})
chrome.contextMenus.onClicked.addListener((info,tab) =>{
    if (info.menuItemId == "search-code"){
        chrome.storage.local.set({code: info.selectionText},() =>{
            chrome.action.openPopup()
        })
    }
})