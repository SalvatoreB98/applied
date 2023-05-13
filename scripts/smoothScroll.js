import SmoothScroll from 'smooth-scroll'
window.addEventListener("load",()=>{
    console.log('smooth')
    var scroll = new SmoothScroll('#app', {
        speed: 300
    });
})