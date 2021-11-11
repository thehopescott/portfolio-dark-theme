const projectsLink = document.querySelector("#proLink");
const testLink = document.querySelector("#tesLink");
const aboutLink = document.querySelector("#aboutLink");

let mainContainer = document.querySelector("main");
let homeContainer = document.querySelector("#home");
let projectsContainer = document.querySelector("#projects");
let testsContainer = document.querySelector("#testimonies");
let aboutContainer = document.querySelector("#aboutme");
let footr = document.querySelector("footer");

aboutContainer.remove();
projectsContainer.remove();
testsContainer.remove();
footr.remove();

projectsLink.addEventListener("click", (e) => {
    e.target.style.color = "#fff";
    homeContainer.remove();
    testsContainer.remove();
    mainContainer.append(projectsContainer);
    mainContainer.append(footr);
});
testLink.addEventListener("click", (e) => {
    e.target.style.color = "#fff";
    homeContainer.remove();
    projectsContainer.remove();
    mainContainer.append(testsContainer);
    mainContainer.append(footr);
});
aboutLink.addEventListener("click", (e) => {
    e.target.style.color = "#fff";
    homeContainer.remove();
    projectsContainer.remove();
    testsContainer.remove();
    mainContainer.append(aboutContainer);
    mainContainer.append(footr);
});
