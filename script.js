const home = document.querySelector("#buttonHome")
const myDashboard = document.querySelector("#buttonMyDashboard")
const people = document.querySelector("#buttonPeople")
const performance = document.querySelector("#buttonPerformance")

home.addEventListener("click", e => {
    home.classList.replace("inactive", "active");
    myDashboard.classList.replace("active", "inactive");
    people.classList.replace("active", "inactive");
    performance.classList.replace("active", "inactive");
})

myDashboard.addEventListener("click", e => {
    home.classList.replace("active", "inactive");
    myDashboard.classList.replace("inactive", "active");
    people.classList.replace("active", "inactive");
    performance.classList.replace("active", "inactive");
})

people.addEventListener("click", e => {
    home.classList.replace("active", "inactive");
    myDashboard.classList.replace("active", "inactive");
    people.classList.replace("inactive", "active");
    performance.classList.replace("active", "inactive");
})

performance.addEventListener("click", e => {
    home.classList.replace("active", "inactive");
    myDashboard.classList.replace("active", "inactive");
    people.classList.replace("active", "inactive");
    performance.classList.replace("inactive", "active");
})

