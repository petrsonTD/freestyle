// Buttons

const buttonHome = document.querySelector("#buttonHome")
const buttonMyDashboard = document.querySelector("#buttonMyDashboard")
const buttonPeople = document.querySelector("#buttonPeople")
const buttonPerformance = document.querySelector("#buttonPerformance")

buttonHome.addEventListener("click", e => {
    buttonHome.classList.replace("inactive", "active");
    buttonMyDashboard.classList.replace("active", "inactive");
    buttonPeople.classList.replace("active", "inactive");
    buttonPerformance.classList.replace("active", "inactive");
})

buttonMyDashboard.addEventListener("click", e => {
    buttonHome.classList.replace("active", "inactive");
    buttonMyDashboard.classList.replace("inactive", "active");
    buttonPeople.classList.replace("active", "inactive");
    buttonPerformance.classList.replace("active", "inactive");
})

buttonPeople.addEventListener("click", e => {
    buttonHome.classList.replace("active", "inactive");
    buttonMyDashboard.classList.replace("active", "inactive");
    buttonPeople.classList.replace("inactive", "active");
    buttonPerformance.classList.replace("active", "inactive");
})

buttonPerformance.addEventListener("click", e => {
    buttonHome.classList.replace("active", "inactive");
    buttonMyDashboard.classList.replace("active", "inactive");
    buttonPeople.classList.replace("active", "inactive");
    buttonPerformance.classList.replace("inactive", "active");
})

// Showpage

const home = document.querySelector("#home")
const myDashboard = document.querySelector("#myDashboard")
const people = document.querySelector("#people")
const performance = document.querySelector("#performance")


buttonHome.addEventListener("click", e => {
    myDashboard.classList.replace("animationIn", "animationOut");
    people.classList.replace("animationIn", "animationOut");
    performance.classList.replace("animationIn", "animationOut");
    setTimeout(() => {
        home.classList.replace("animationOut", "animationIn");
   
        home.classList.replace("inactiveShowPlace", "activeShowPlace");
        myDashboard.classList.replace("activeShowPlace", "inactiveShowPlace");
        people.classList.replace("activeShowPlace", "inactiveShowPlace");
        performance.classList.replace("activeShowPlace", "inactiveShowPlace");
    }, 600)
})

buttonMyDashboard.addEventListener("click", e => {
    home.classList.replace("animationIn", "animationOut");
    people.classList.replace("animationIn", "animationOut");
    performance.classList.replace("animationIn", "animationOut");

    setTimeout(() => {
        myDashboard.classList.replace("animationOut", "animationIn");
    
        home.classList.replace("activeShowPlace", "inactiveShowPlace");
        myDashboard.classList.replace("inactiveShowPlace", "activeShowPlace");
        people.classList.replace("activeShowPlace", "inactiveShowPlace");
        performance.classList.replace("activeShowPlace", "inactiveShowPlace");
    }, 600) 
})

buttonPeople.addEventListener("click", e => {
    home.classList.replace("animationIn", "animationOut");
    myDashboard.classList.replace("animationIn", "animationOut");
    performance.classList.replace("animationIn", "animationOut");
    setTimeout(() => {
        people.classList.replace("animationOut", "animationIn");
    
        home.classList.replace("activeShowPlace", "inactiveShowPlace");
        myDashboard.classList.replace("activeShowPlace", "inactiveShowPlace");
        people.classList.replace("inactiveShowPlace", "activeShowPlace");
        performance.classList.replace("activeShowPlace", "inactiveShowPlace");
    }, 600) 
})

buttonPerformance.addEventListener("click", e => {
    home.classList.replace("animationIn", "animationOut");
    myDashboard.classList.replace("animationIn", "animationOut");
    people.classList.replace("animationIn", "animationOut");
    setTimeout(() => {
        performance.classList.replace("animationOut", "animationIn");
    
        home.classList.replace("activeShowPlace", "inactiveShowPlace");
        myDashboard.classList.replace("activeShowPlace", "inactiveShowPlace");
        people.classList.replace("activeShowPlace", "inactiveShowPlace");
        performance.classList.replace("inactiveShowPlace", "activeShowPlace");
    }, 600) 
})