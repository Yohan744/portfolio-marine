/*----------------------------------------Import projects info-------------------------------------------*/

const aProposImageWrapper = document.querySelector("#a-propos-right-wrapper")
const aProposParagraph = document.querySelector("#a-propos-paragraph-wrapper")

const requestProjects = async () => {
    const locationApi = "https://marine-quetaud-portfolio.herokuapp.com/"
    //const locationApi = "http://localhost:3000/"

    const response = await axios.get(`${locationApi}getProjectMarine`)

    try {
        const datas = response.data

        datas.forEach(data => {

            let verifUserImage = data.description.indexOf("Profil")
            if (verifUserImage !== -1) {
                aProposImageWrapper.innerHTML = `<img src="${data.images.hidpi}" alt="image" class="a-propos-image">`
                aProposParagraph.innerHTML = `<div class="a-propos-paragraph">${data.description}</div>`
            }
        })
    } catch (err) {
        console.log(err)
    }
}

requestProjects()

/*-----------------------------------------Software------------------------------------------------*/

const softwareWrapperGlobal = document.querySelector('#software-wrapper-global')
let tabSoftware = ["Adobe XD","Illustrator","Photoshop","After effects","Indesign","Premiere","Lightroom","Ableton live","Whimsical","Trello","Miro","Lauchaco"]

softwareWrapperGlobal.style.width = `${tabSoftware.length * 5}vw`

for (let i=0; i<tabSoftware.length; i++) {
    const softwareWrapper = document.createElement("div")
    softwareWrapper.classList.add("software-wrapper")
    const softwareImageWrapper = document.createElement("div")
    softwareImageWrapper.classList.add("software-image-wrapper")
    softwareImageWrapper.setAttribute("id", `softwareImageWrapper${i}`)
    const softwareTitleWrapper = document.createElement("div")
    softwareTitleWrapper.classList.add("software-title-wrapper")
    softwareWrapperGlobal.append(softwareWrapper)
    softwareWrapper.append(softwareImageWrapper)
    softwareWrapper.append(softwareTitleWrapper)

    const softwareImage = document.getElementById(`softwareImageWrapper${i}`)
    softwareImage.innerHTML = `<img src="../image/linkedin.svg" alt="software" class="image-about">`
    softwareTitleWrapper.append(tabSoftware[i])

}