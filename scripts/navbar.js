window.addEventListener("load",()=>{
    let isMenuOpen = false;
    const burger = document.querySelector(".burger");
    const menuMobile = document.querySelector(".mobile-menu"); 
    console.log()
    
    burger.addEventListener("click",()=> {;
        changeMenuStatus();
    })

    function changeMenuStatus(){
        if(isMenuOpen){
            menuMobile.classList.remove("expanded")
        } else {
            menuMobile.classList.add("expanded")
        }
        isMenuOpen = !isMenuOpen;
    }
    
    menuMobile.addEventListener("click",()=>{
        if(isMenuOpen){
            changeMenuStatus();
        }
    })
})
