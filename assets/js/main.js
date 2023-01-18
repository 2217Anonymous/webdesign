const stick_menu = document.querySelector(".stick-menu")

stick_menu.addEventListener("click",()=>{
    const header_menu = document.querySelector("ul.header--menu")
    const nav_icon = document.querySelectorAll(".navIcon")
    header_menu.classList.toggle("show")

    nav_icon.forEach((icon) =>{
        icon.classList.toggle("hidden")
    })
})