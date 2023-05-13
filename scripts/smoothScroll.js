import SmoothScroll from 'smooth-scroll'
window.addEventListener("load",()=>{
    var scroll = new SmoothScroll('#app', {
        speed: 300
    });
    console.log(scroll)
})