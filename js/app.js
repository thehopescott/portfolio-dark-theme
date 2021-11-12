const projectsLink = document.querySelector("#proLink");
const testLink = document.querySelector("#testLink");
const aboutLink = document.querySelector("#aboutLink");
const contactLinks = document.querySelectorAll(".hire-me");

let mainContainer = document.querySelector("main");
let homeContainer = document.querySelector("#home");
let aboutContainer = document.querySelector("#aboutme");
let projectsContainer = document.querySelector("#projects");
let testsContainer = document.querySelector("#testimonies");
let contactContainer = document.querySelector("#contactme");
let footr = document.querySelector("footer");

aboutContainer.remove();
projectsContainer.remove();
testsContainer.remove();
contactContainer.remove();
footr.remove();

projectsLink.addEventListener("click", (e) => {
    homeContainer.remove();
    testsContainer.remove();
    aboutContainer.remove();
    contactContainer.remove();
    mainContainer.append(projectsContainer);
    mainContainer.append(footr);
});
testLink.addEventListener("click", (e) => {
    homeContainer.remove();
    projectsContainer.remove();
    aboutContainer.remove();
    contactContainer.remove();
    mainContainer.append(testsContainer);
    mainContainer.append(footr);
});
aboutLink.addEventListener("click", (e) => {
    homeContainer.remove();
    projectsContainer.remove();
    contactContainer.remove();
    testsContainer.remove();
    mainContainer.append(aboutContainer);
    mainContainer.append(footr);
});

for (let i = 0; i < contactLinks.length; i++) {
    contactLinks[i].addEventListener("click", (e) => {
        homeContainer.remove();
        projectsContainer.remove();
        aboutContainer.remove();
        testsContainer.remove();
        mainContainer.append(contactContainer);
        mainContainer.append(footr);
    });
}

const navToggler = document.querySelector("nav .nav-toggler");
let navContainer = document.querySelector("nav .nav-menu");
let navActive = false;

navToggler.addEventListener("click", () => {
    navActive = true;
    navContainer.style.display = "flex";
    navToggler.innerHTML = '<i class="bi bi-x"></i>';
    if (navActive) {
        navToggler.addEventListener("click", () => {
            navContainer.classList += " nav-slide-out";
            navToggler.innerHTML = '<i class="bi bi-list"></i>';
            navActive = false;
        });
    }
});
