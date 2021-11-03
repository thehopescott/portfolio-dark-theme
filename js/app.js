const projectsLink = document.querySelector('#proLink')
let projectsContainer = document.querySelector('#projects')
let homeContainer = document.querySelector('#home')
let footr = document.querySelector('footer')


projectsLink.addEventListener('click', ()=>{
        homeContainer.style.display = 'none'
        projectsContainer.style.display = 'flex'
        footr.style.display = 'block'

})