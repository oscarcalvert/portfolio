let colorlink = document.querySelector("#colorLink")
let colorswitch = document.querySelector("#colorSwitch")
let heroBg = document.querySelector("#heroBg")
let currentColor = localStorage.getItem("color") != null ? localStorage.getItem("color") : "light"


colorlink.setAttribute("href", `./Styles/${currentColor}Colors.css`)
heroBg.setAttribute("src", `./Media/hero_${currentColor}.jpg`)

colorswitch.addEventListener("click", switchStyles)

function switchStyles() {
    switch (currentColor) {
        case "light":
            currentColor = "dark"
            break;
        case "dark":
            currentColor = "light"
            break;
    }
    localStorage.setItem("color", currentColor)
    colorlink.setAttribute("href", `./Styles/${currentColor}Colors.css`)
    heroBg.setAttribute("src", `./Media/hero_${currentColor}.jpg`)
}
