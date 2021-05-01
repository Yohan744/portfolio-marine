/*-------------------------------------------Full Page------------------------------------------*/

new fullpage("#fullpage", {
    fixedElements: '#logo',
    autoScrolling: true,
    scrollingSpeed: 700,
    onLeave: (origin, destination, direction) => {
        //const section = destination.item
        //console.log(destination.item)
        //const text = section.querySelector('.presentationS1')
        //const image = section.querySelector('.imgPresentationS1')
        //const tl = new TimelineMax({delay: 0.75})
        //tl.fromTo(text, 0.75, {y: '50', opacity: 0}, {y: 0, opacity: 1})
        //tl.fromTo(image, 0.75, {y: '-50', opacity: 0}, {y: 0, opacity: 1})
    }
})

/*-------------------------------------------Navigation---------------------------------------------*/

const navigationWrapper = document.querySelector("#navigation-wrapper")

navigationNumber = 5

for (let i = 0; i < navigationNumber; i++) {

    const navigation = document.createElement("div")
    navigation.classList.add("navigation")
    navigation.setAttribute("id", `navigation${i}`)
    navigation.classList.add(`${i + 1}`)
    navigationWrapper.append(navigation)

}

const changeSection = function () {

    for (let i = 0; i < navigationNumber; i++) {
        let sectionTarget = document.getElementById(`section${i}`)
        let navigationTarget = document.getElementById(`navigation${i}`)

        // Change active navigation on scroll
        if (sectionTarget.classList.contains("active")) {
            navigationTarget.classList.add("active")
            navigationTarget.setAttribute("data-before", `0${i + 1}`)
        } else {
            navigationTarget.classList.remove("active")
        }

        // Change section on click
        navigationWrapper.addEventListener('click', e => {
            fullpage_api.moveTo(e.target.className[11])
        })
    }
}

setInterval(changeSection, 500)

/*-------------------------------------------Project---------------------------------------------*/

const firstProjectImageWrapper = document.querySelector("#first-project-image-wrapper")

firstProjectImageWrapper.addEventListener("mouseenter", () => {
    cursor.classList.add("active")
    cursor.style.backgroundColor = "white"
})

firstProjectImageWrapper.addEventListener("mouseleave", () => {
    cursor.classList.remove("active")
    cursor.style.backgroundColor = "#212121"
})

// Second Project

const secondProjectImageWrapper = document.querySelector("#second-project-image-wrapper")

secondProjectImageWrapper.addEventListener("mouseenter", () => {
    cursor.classList.add("active")
    cursor.style.backgroundColor = "white"
})

secondProjectImageWrapper.addEventListener("mouseleave", () => {
    cursor.classList.remove("active")
    cursor.style.backgroundColor = "#212121"
})

// Third Project

const thirdProjectImageWrapper = document.querySelector("#third-project-image-wrapper")

thirdProjectImageWrapper.addEventListener("mouseenter", () => {
    cursor.classList.add("active")
    cursor.style.backgroundColor = "#FFFFFF"
})

thirdProjectImageWrapper.addEventListener("mouseleave", () => {
    cursor.classList.remove("active")
    cursor.style.backgroundColor = "#212121"
})

/*-------------------------------------------Parallax-------------------------------------------*/

const firstProjectWrapper = document.getElementById('first-project-wrapper');
let parallaxFirstProject = new Parallax(firstProjectWrapper, {
    pointerEvents: true,
})

// Second Project

const secondProjectWrapper = document.getElementById('second-project-wrapper');
let parallaxSecondProject = new Parallax(secondProjectWrapper, {
    pointerEvents: true,
})

// Third Project

const thirdProjectWrapper = document.getElementById('third-project-wrapper');
let parallaxThirdProject = new Parallax(thirdProjectWrapper, {
    pointerEvents: true,
})

// Projects

/*
const projects = document.getElementById('projects-wrapper')
let parallaxProjects = new Parallax(projects, {
    pointerEvents: true,
})
/*

 */
const firstFlowerWrapper = document.querySelector("#first-flower-wrapper")
let firstParallaxFlower = new Parallax(firstFlowerWrapper, {
    pointerEvents: true,
})

const secondFlowerWrapper = document.querySelector("#second-flower-wrapper")
let secondParallaxFlower = new Parallax(secondFlowerWrapper, {
    pointerEvents: true,
})

const thirdFlowerWrapper = document.querySelector("#third-flower-wrapper")
let thirdParallaxFlower = new Parallax(thirdFlowerWrapper, {
    pointerEvents: true,
})

const firstLineTopWrapper = document.querySelector("#first-line-wrapper")
let firstLineWrapper = new Parallax(firstLineTopWrapper, {
    pointerEvents: true,
})

const secondLineTopWrapper = document.querySelector("#second-line-wrapper")
let secondLineWrapper = new Parallax(secondLineTopWrapper, {
    pointerEvents: true,
})

const thirdLineTopWrapper = document.querySelector("#third-line-wrapper")
let thirdLineWrapper = new Parallax(thirdLineTopWrapper, {
    pointerEvents: true,
})

/*---------------------------------------Insert Projects------------------------------------------*/

const firstProjectTitleWrapper = document.getElementById('first-project-title-wrapper')
const firstProjectSubtitleWrapper = document.getElementById('first-project-subtitle-wrapper')

const secondProjectTitleWrapper = document.getElementById('second-project-title-wrapper')
const secondProjectSubtitleWrapper = document.getElementById('second-project-subtitle-wrapper')

const thirdProjectTitleWrapper = document.getElementById('third-project-title-wrapper')
const thirdProjectSubtitleWrapper = document.getElementById('third-project-subtitle-wrapper')

const welcomeImageWrapper = document.getElementById('welcome-right-wrapper')
const welcomeTitleWrapper = document.getElementById("welcome-left-title-wrapper")
const welcomeSubtitleWrapper = document.getElementById("welcome-left-subtitle-wrapper")
const welcomeParagraphWrapper = document.getElementById("welcome-left-paragraph-wrapper")

const mesProjets = document.getElementById('projects-wrapper')

const requestProjects = async () => {
    const locationApi = "https://marine-quetaud-portfolio.herokuapp.com/"
    //const locationApi = "http://localhost:3000/"

    const response = await axios.get(`${locationApi}getProjectMarine`)

    try {
        const datas = response.data

        datas.forEach(data => {

            let verifFirstProject = data.description.indexOf("Project0")
            if ((verifFirstProject !== -1) && (verifFirstProject < 30)) {
                firstProjectTitleWrapper.innerHTML = `<h1 class="project-title">${data.title}</h1>`
                firstProjectSubtitleWrapper.innerHTML = `<h1 class="project-subtitle">${data.tags}</h1>`
                firstProjectImageWrapper.innerHTML = `<img src="${data.images.hidpi}" alt="image" class="project-image">`
            }

            let verifSecondProject = data.description.indexOf("Project1")
            if ((verifSecondProject !== -1) && (verifSecondProject < 30)) {
                secondProjectTitleWrapper.innerHTML = `<h1 class="project-title">${data.title}</h1>`
                secondProjectSubtitleWrapper.innerHTML = `<h1 class="project-subtitle">${data.tags}</h1>`
                secondProjectImageWrapper.innerHTML = `<img src="${data.images.hidpi}" alt="image" class="project-image">`
            }

            let verifThirdProject = data.description.indexOf("Project2")
            if ((verifThirdProject !== -1) && (verifThirdProject < 30)) {
                thirdProjectTitleWrapper.innerHTML = `<h1 class="project-title">${data.title}</h1>`
                thirdProjectSubtitleWrapper.innerHTML = `<h1 class="project-subtitle">${data.tags}</h1>`
                thirdProjectImageWrapper.innerHTML = `<img src="${data.images.hidpi}" alt="image" class="project-image">`
            }

            let verifWelcome = data.title.indexOf("Bienvenue dans mon monde !")
            if ((verifWelcome !== -1) && (verifWelcome < 30)) {
                welcomeImageWrapper.innerHTML = `<img src="${data.images.hidpi}" alt="welcome" class="image">`
                welcomeTitleWrapper.innerHTML = `<h1 class="welcome-left-title">${data.tags}</h1>`
                welcomeSubtitleWrapper.innerHTML = `<h1 class="welcome-left-subtitle">${data.title}</h1>`
                welcomeParagraphWrapper.innerHTML = `<div class="welcome-left-paragraph">${data.description}</div>`
            }

            let verifProjects = data.description.indexOf("Projets")
            if ((verifProjects !== -1) && (verifProjects < 30)) {
                mesProjets.innerHTML += `<img src="${data.images.hidpi}" alt="project" class="image">`
            }

        })
    } catch (err) {
        console.log(err)
    }
}


/*----------------------------------------------Functions----------------------------------------*/

cursorFunction()
requestProjects()