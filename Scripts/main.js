let colorlink = document.querySelector("#colorLink")
let colorswitch = document.querySelector("#colorSwitch")
let heroBg = document.querySelector("#heroBg")
let currentColor = localStorage.getItem("color") != null ? localStorage.getItem("color") : "light"
let skillsArray = []

let skillsContainer = document.querySelector(".skillsContainer")
let skillsCircle = document.querySelector(".skillCircle")

document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX - skillsContainer.getBoundingClientRect().left;
    const mouseY = event.clientY - skillsContainer.getBoundingClientRect().top;

    const skillsCircleWidthHalf = skillsCircle.offsetWidth / 2;
    const skillsCircleHeightHalf = skillsCircle.offsetHeight / 2;

    skillsCircle.style.left = (mouseX - skillsCircleWidthHalf) + 'px';
    skillsCircle.style.top = (mouseY - skillsCircleHeightHalf) + 'px';
});

class Skill {
    constructor(n, d, l) {
        this.name = n
        this.desc = d
        this.link = l
        this.img = n + ".png"
    }
}


colorlink.setAttribute("href", `./styles/${currentColor}Colors.css`)
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
    colorlink.setAttribute("href", `./styles/${currentColor}Colors.css`)
    heroBg.setAttribute("src", `./Media/hero_${currentColor}.jpg`)
}

fetch("./Media/data/codeSkills.json")
    .then(response => {
        return response.json()
    })
    .then(data => {
        data.skills.forEach(skill => {
            skillsArray.push(new Skill(skill.name, skill.description, skill.link))
        });
        displaySkills(skillsArray)
    })


function displaySkills(skills) {
    skills.forEach(skill => {
        let wrapper = document.createElement("div")
        wrapper.classList.add("skillItemBg")
        let item = document.createElement("div")
        item.classList.add("skillItem")
        let header = document.createElement("h3")
        header.innerHTML = skill.name
        let desc = document.createElement("p")
        desc.innerHTML = skill.desc
        let link = document.createElement("a")
        link.setAttribute("href", skill.link)
        link.classList.add("btn")
        link.classList.add("btn-main")
        link.innerHTML = 'See more'


        wrapper.append(item)
        item.append(header)
        item.append(desc)
        item.append(link)
        skillsContainer.append(wrapper)
    });
}

