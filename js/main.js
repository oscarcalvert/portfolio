let pageBeforeLoad = document.querySelector("#loading")
let pageAfterLoad = document.querySelector("#loaded")
let loadingTime = document.querySelector("#loadingTime")
let isOnMobile = true;
let loadTimeCounter = 0;
let homeSection = document.querySelector("#heroSection")
let aboutSection = document.querySelector("#aboutSection")
let projectsSection = document.querySelector("#projectsSection")
let skillsSection = document.querySelector("#skillsSection")
let homeButton = document.querySelectorAll(".goToHome")
let aboutButton = document.querySelectorAll(".goToAbout")
let projectsButton = document.querySelectorAll(".goToProjects")
let skillsButton = document.querySelectorAll(".goToSkills")
let contactButton = document.querySelectorAll(".goToContact")
let sectionsArr = {homeSection, aboutSection, projectsSection, skillsSection, contactSection}
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
function fakeLoadingScreen() { //make using on mobile annoying
    loadingTime.innerHTML = loadTimeCounter
    loadTimeCounter += 1;

    if (loadTimeCounter <= 100) {
        let rand = Math.round(Math.random() * 100)
        if (rand <= 25)
            setTimeout(fakeLoadingScreen, 10)
        else if (rand <= 50)
            setTimeout(fakeLoadingScreen, 20)
        else if (rand <= 75)
            setTimeout(fakeLoadingScreen, 30)
        else if (rand > 90)
            setTimeout(fakeLoadingScreen, 40)
        else
            setTimeout(fakeLoadingScreen, 50)
    } else {
        setTimeout(loadPage, 300)
    }
}

let header = document.querySelector("#desktopHeader")
document.addEventListener("scroll", function () {
    if (window.scrollY == 0) {
        header.setAttribute('id', 'desktop-header-placeholder')
    } else if (window.scrollY != 0) {
        header.setAttribute('id', 'desktop-header')
    }
})

homeButton.forEach(function (homeButton) {
    homeButton.addEventListener("click", function () {
        homeSection.scrollIntoView({ behavior: 'smooth' });
    });
});

aboutButton.forEach(function (aboutButton) {
    aboutButton.addEventListener("click", function () {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
});

projectsButton.forEach(function (projectsButton) {
    projectsButton.addEventListener("click", function () {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
    });
});

skillsButton.forEach(function (skillsButton) {
    skillsButton.addEventListener("click", function () {
        skillsSection.scrollIntoView({ behavior: 'smooth' });
    });
});

contactButton.forEach(function (contactButton) {
    contactButton.addEventListener("click", function () {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });
});
//END OF SCROLL THINGS

// aboutSection.addEventListener("mouseover", function() {
//     aboutButton.forEach(function (aboutButton) {
//         aboutButton.setAttribute("id", "textColor1")
//     })
// })

const homeObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0.5) {
            setHomeToCurrent();
        }
    });
}, {
    root: null,
    rootMargin: '0px 0px 200px 0px',
    threshold: [0, 0.25, 0.5, 0.75, 1]
});

homeObs.observe(homeSection);

function setHomeToCurrent() { //HOME FUNCTION
    
    homeButton.forEach(function (homeButton) {
        homeButton.setAttribute("id", "textColor1")
    })
    aboutButton.forEach(function (aboutButton) {
        aboutButton.setAttribute("id", "")
    })
    projectsButton.forEach(function (homeButton) {
        homeButton.setAttribute("id", "")
    })
    skillsButton.forEach(function (skillsButton) {
        skillsButton.setAttribute("id", "")
    })
    contactButton.forEach(function (contactButton) {
        contactButton.setAttribute("id", "")
    })
}

const aboutObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0.5) {
            setAboutToCurrent();
        }
    });
}, {
    root: null,
    rootMargin: '0px',
    threshold: [0, 0.25, 0.5, 0.75, 1]
});

aboutObs.observe(aboutSection);

function setAboutToCurrent() {
    
    homeButton.forEach(function (homeButton) {
        homeButton.setAttribute("id", "")
    })
    aboutButton.forEach(function (aboutButton) {
        aboutButton.setAttribute("id", "textColor2")
    })
    projectsButton.forEach(function (homeButton) {
        homeButton.setAttribute("id", "")
    })
    skillsButton.forEach(function (skillsButton) {
        skillsButton.setAttribute("id", "")
    })
    contactButton.forEach(function (contactButton) {
        contactButton.setAttribute("id", "")
    })
}

const projectsObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0.5) {
            setProjectsToCurrent();
        }
    });
}, {
    root: null,
    rootMargin: '0px',
    threshold: [0, 0.25, 0.5, 0.75, 1]
});

projectsObs.observe(projectsSection);

function setProjectsToCurrent() {
    
    homeButton.forEach(function (homeButton) {
        homeButton.setAttribute("id", "")
    })
    aboutButton.forEach(function (aboutButton) {
        aboutButton.setAttribute("id", "")
    })
    projectsButton.forEach(function (homeButton) {
        homeButton.setAttribute("id", "textColor3")
    })
    skillsButton.forEach(function (skillsButton) {
        skillsButton.setAttribute("id", "")
    })
    contactButton.forEach(function (contactButton) {
        contactButton.setAttribute("id", "")
    })
}

const skillsObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0.5) {
            setSkillsToCurrent();
        }
    });
}, {
    root: null,
    rootMargin: '0px',
    threshold: [0, 0.25, 0.5, 0.75, 1]
});

skillsObs.observe(skillsSection);

function setSkillsToCurrent() {
    
    homeButton.forEach(function (homeButton) {
        homeButton.setAttribute("id", "")
    })
    aboutButton.forEach(function (aboutButton) {
        aboutButton.setAttribute("id", "")
    })
    projectsButton.forEach(function (homeButton) {
        homeButton.setAttribute("id", "")
    })
    skillsButton.forEach(function (skillsButton) {
        skillsButton.setAttribute("id", "textColor4")
    })
    contactButton.forEach(function (contactButton) {
        contactButton.setAttribute("id", "")
    })
}

const contactObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0.5) {
            setContactToCurrent();
        }
    });
}, {
    root: null,
    rootMargin: '0px',
    threshold: [0, 0.25, 0.5, 0.75, 1]
});

contactObs.observe(contactSection);

function setContactToCurrent() {
    
    homeButton.forEach(function (homeButton) {
        homeButton.setAttribute("id", "")
    })
    aboutButton.forEach(function (aboutButton) {
        aboutButton.setAttribute("id", "")
    })
    projectsButton.forEach(function (homeButton) {
        homeButton.setAttribute("id", "")
    })
    skillsButton.forEach(function (skillsButton) {
        skillsButton.setAttribute("id", "")
    })
    contactButton.forEach(function (contactButton) {
        contactButton.setAttribute("id", "textColor5")
    })
}