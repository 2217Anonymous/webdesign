const stick_menu = document.querySelector(".stick-menu")

stick_menu.addEventListener("click",()=>{
    const header_menu = document.querySelector("ul.header--menu")
    const nav_icon = document.querySelectorAll(".navIcon")
    header_menu.classList.toggle("show")

    nav_icon.forEach((icon) =>{
        icon.classList.toggle("hidden")
    })
})

function navbarFixed(){
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
}

function setMenuAcive(){
    const section = document.querySelectorAll("section")
    const navLinks = document.querySelectorAll(".header--menu__item > a")

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
}

navbarFixed()
setMenuAcive()