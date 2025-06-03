const GithubBtn = document.getElementById("GithubBtn")
const stackBtn = document.getElementById('stackBtn')

chrome.storage.local.get(['code'],(result) =>{
    GithubBtn.addEventListener("click",() =>{
        const url = `https://github.com/search?q=${encodeURIComponent(result.code)}&type=repositories`
        chrome.tabs.create({url})
    })

    stackBtn.addEventListener('click',() =>{
        const url = `https://stackoverflow.com/search?q=${encodeURIComponent(result.code)}`
        chrome.tabs.create({url})
    })
})

