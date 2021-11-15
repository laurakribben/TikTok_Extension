/*
var flag_active = false
document.getElementById("btn").addEventListener("click", () => {
    //if (active) active = false
    //else active = true

    chrome.tabs.query({ active: true, currentWindow: true },
        function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, flag_active, function(response) {
                console.log(response);
            });
        });
})
*/
//var isActive = false

//chrome.storage.sync.set({ isActive: true }, () => { console.log("init") })
//changeButtonState(true)

chrome.storage.sync.get(['isActive'], (e) => {
    var a = e.isActive
    changeButtonState(a)

})

const btn = document.getElementById("btn")
btn.addEventListener("click", () => {

    chrome.storage.sync.get(['isActive'], (e) => {
        var a = !e.isActive

        chrome.storage.sync.set({ isActive: a }, () => {
            changeButtonState(a)
        })

    })


    /*
    if (isActive) chrome.storage.sync.set({ isActive: false }, () => { console.log("set false") })
    else chrome.storage.sync.set({ isActive: true }, () => { console.log("set true") })

    chrome.storage.sync.get(['isActive'], (m) => { console.log(m) })
    */

    //changeButtonState(!isActive)

})

function changeButtonState(isActive) {

    var color = "grey"
    var text = "off"


    if (isActive) {
        color = "green"
        text = "on"
    }

    btn.innerText = text

    let root = document.documentElement
    root.style.setProperty('--btn-background', color)

}