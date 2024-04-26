let pageBeforeLoad = document.querySelector("#loading")
let pageAfterLoad = document.querySelector("#loaded")
let loadingTime = document.querySelector("#loadingTime")
let isOnMobile = true;
let loadTimeCounter = 0;
if (window.innerWidth > 700) {
    isOnMobile = false;
}
window.onload = function () {
    if (isOnMobile)
        fakeLoadingScreen()
    else
        loadPage()

}

function loadPage() {
    pageAfterLoad.setAttribute("class", "")
    pageBeforeLoad.setAttribute("class", "hidden")
}
function fakeLoadingScreen() { //I just dont want mobile users... ok?
    loadingTime.innerHTML = loadTimeCounter
    loadTimeCounter += 1;

    if (loadTimeCounter <= 100) { 
        let rand = Math.round(Math.random() * 100)
        if (rand <= 25)
            setTimeout(fakeLoadingScreen, 100)
        else if (rand <= 50)
            setTimeout(fakeLoadingScreen, 40)
        else if (rand <= 75)
            setTimeout(fakeLoadingScreen, 50)
        else if (rand > 90)
            setTimeout(fakeLoadingScreen, 200)
        else
            setTimeout(fakeLoadingScreen, 30)
    } else {
        setTimeout(loadPage, 2000)
    }
}

let header = document.querySelector("#desktopHeader")
document.addEventListener("scroll", function () {
    if (window.scrollY == 0) {
        header.setAttribute('id', 'desktop-header-placeholder')
    } else if (window.scrollY != 0) {
        header.setAttribute('id', 'desktop-header')
    }
    console.log("shit works")
})
