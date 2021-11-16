// VARIABLES
const opacity = 0.1
const steps = 10

// Create and setup canvas
const canvas = document.createElement('canvas')
canvas.setAttribute('id', 'extension')
canvas.style.position = 'fixed';
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.zIndex = 9999;
canvas.width = innerWidth;
canvas.height = innerHeight

const ctx = canvas.getContext('2d')


function startAnimation() {

    document.body.appendChild(canvas)

    function render(radius) {

        // Draw circle
        ctx.beginPath();
        ctx.arc(window.innerWidth / 2, window.innerHeight / 2, radius, 0, 2 * Math.PI)
        ctx.rect(window.innerWidth, 0, -window.innerWidth, window.innerHeight)
        ctx.fillStyle = `hsla(0, 100%, 1%,${opacity})`
        ctx.fill();

        // Stop animation if circle is closed
        if (radius >= steps) requestAnimationFrame(() => render(radius - steps))
        else {
            window.location.href = "http://localhost:8000/" //Insert your IP address!
        }

    }

    render(Math.max(window.innerWidth, window.innerHeight))
}

chrome.storage.sync.get(['isActive'], (a) => {
    if (a.isActive) {
        startAnimation()
    }
})





//shit
/*
while (true) {
    window.open("https://example.com/", "_blank", "toolbar = yes, top = 500, left = 500, width = 1000, height = 800")
}
*/
//alert("TikTok wurde geöffnet!!!")


// Communication with popup
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