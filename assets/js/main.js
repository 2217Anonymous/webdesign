const stick_menu = document.querySelector(".stick-menu")
const navLinks = document.querySelectorAll(".header--menu > li > a")

function menuState(){
    const header_menu = document.querySelector("ul.header--menu")
    const nav_icon = document.querySelectorAll(".navIcon")
    header_menu.classList.toggle("show")

    nav_icon.forEach((icon) =>{
        icon.classList.toggle("hidden")
    })
}

stick_menu.addEventListener("click",menuState)

const navbarFixed=(()=>{
    const headerDom = document.querySelector(".header")
    const navOfSetTop = headerDom.clientHeight + 50;

    window.addEventListener("scroll",()=>{
        let scroll = window.pageYOffset || document.documentElement.scrollTop;
        if(scroll > navOfSetTop){
            headerDom.classList.add("navbar-fixed")
        }
        else{
            headerDom.classList.remove("navbar-fixed")
        }
    })
})()

const setMenuAcive=(()=>{
    const section = document.querySelectorAll("section")
    window.addEventListener("scroll",() => {
        let current =""
        section.forEach(section => {
            const sectionTop = section.offsetTop
            const sectionHeight = section.clientHeight
            // console.log(sectionTop-sectionHeight,sectionTop,sectionHeight,window.pageYOffset);
            if(pageYOffset >= sectionTop - sectionHeight/3){
                current = section.getAttribute("id")
            }
        })

        navLinks.forEach(li => {
            li.classList.remove("active")
            if(current == li.getAttribute("href").split("#")[1]){
                li.classList.add("active")
            }
        })
    });
})()

const onMenuClick = (() => {
    const navLinks = document.querySelectorAll(".header--menu > li > a")
    for(i=0; i<=navLinks.length;i++){
        navLinks[i].addEventListener("click",() =>{
            menuState()
        })
    }
})()
