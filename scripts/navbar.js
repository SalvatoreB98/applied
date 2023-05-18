window.addEventListener("load",()=>{
    let isMenuOpen = false;
    const burger = document.querySelector(".burger");
    const menuMobile = document.querySelector(".mobile-menu"); 
    const navbar = document.querySelector("navbar")
    let prevScroll = window.pageYOffset || document.documentElement.scrollTop;

    window.addEventListener("scroll", handleScroll);
    burger.addEventListener("click", changeMenuStatus)
    
    menuMobile.addEventListener("click",()=>{
        if(isMenuOpen){
            changeMenuStatus();
        }
    })

    function changeMenuStatus(){
        if(isMenuOpen){
            menuMobile.classList.remove("expanded")
        } else {
            menuMobile.classList.add("expanded")
        }
        isMenuOpen = !isMenuOpen;
    }

    function handleScroll() {
        if(!isMenuOpen){
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            if (currentScroll > prevScroll && currentScroll > 100) {
                navbar.style.height = '0px';
                navbar.style.overflow = 'hidden'
            } else if (currentScroll < prevScroll ) {
                navbar.style.height = '80px';
            }
            prevScroll = currentScroll;
        } else {
            navbar.style.height = '80px'
        }
    }
})
