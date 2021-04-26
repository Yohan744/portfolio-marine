/*----------------------------------------Import user info-------------------------------------------*/

const aProposImageWrapper = document.querySelector("#a-propos-right-wrapper")
const aProposParagraph = document.querySelector("#a-propos-paragraph-wrapper")

const requestUser = async () => {
    const locationApi = "https://marine-quetaud-portfolio.herokuapp.com/"
    //const locationApi = "http://localhost:3000/"

    const response = await axios.get(`${locationApi}getUser`)

    try {
        const datas = response.data
        aProposParagraph.innerHTML += `<p id="a-propos-paragraph">${datas.bio}</p>`
    } catch (err) {
        console.log(err)
    }
}

const requestProjects = async () => {
    const locationApi = "https://marine-quetaud-portfolio.herokuapp.com/"
    //const locationApi = "http://localhost:3000/"

    const response = await axios.get(`${locationApi}getProjectMarine`)

    try {
        const datas = response.data

        datas.forEach(data => {

            let verifUserImage = data.title.indexOf("profil")
            if (verifUserImage !== -1) {
                aProposImageWrapper.innerHTML = `<img src="${data.images.hidpi}" alt="image" class="a-propos-image">`
            }
        })
    } catch (err) {
        console.log(err)
    }
}

requestUser().then()
requestProjects().then()