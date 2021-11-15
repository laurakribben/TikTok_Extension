/*
chrome.runtime.onMessage.addListener(
    function(request, _, sendResponse) {

        if (request.flag_active) {
            //window.location.href = "https://www.tiktok.com"
            chrome.storage.sync.set()
            alert("Button was pressed")
        }

        sendResponse({ farewell: "goodbye" });
    }
);

*/

chrome.storage.sync.get(['isActive'], (a) => {
    if (a.isActive) {
        window.location.href = "http://192.168.2.214:8000/" //Insert your IP address!
    }
})

function render() {
    //TODO
}



//shit
/*
while (true) {
    window.open("https://example.com/", "_blank", "toolbar = yes, top = 500, left = 500, width = 1000, height = 800")
}
*/
//alert("TikTok wurde geöffnet!!!")