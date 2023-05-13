window.addEventListener("load", () => {
    
    const scroller = document.querySelector(".imgs-scroller");
    const images = document.querySelectorAll(".image");
    let imgArray= Array.from(images);
    const arrowRight = document.querySelector(".arrow-container.right");
    const arrowLeft = document.querySelector(".arrow-container.left");
    let dotsContainer = document.querySelector(".dots-container") 

    let index = 0;

    let dots = createDots();
    moveSelectedDots();
    indexChange();

    arrowRight.addEventListener("click", () => {
      if (index < images.length - 1) {
        index++;
        indexChange();
        scroll(scroller);
      }
    });
  
    arrowLeft.addEventListener("click", () => {
      if (index > 0) {
        index--;
        indexChange();
        scroll(scroller);
      }
    });
  
    function scroll(scroller) {
      const width = getWidth(index);
      scroller.scrollTo(width, 0);
    }
  
    function getWidth(index) {
      let width = 0;
      for (let i = 0; i < index; i++) {
        width += images[i].offsetWidth + 20;
        console.log(images[i].offsetWidth)
        console.log(width)
      }
      return width;
    }

    function indexChange(){
      if (index === 0) {
        arrowLeft.classList.add('disabled')
      } else {
        arrowLeft.classList.remove('disabled')
      }
      if(index >= images.length - 1){
        arrowRight.classList.add('disabled')
      } else {
        arrowRight.classList.remove('disabled')
      }
      moveSelectedDots();
    }

    function createDots(){
      let htmlString = ''
      imgArray.forEach((img, i)=>{
        htmlString += `<button class="circle outline"></div> `;
      })
      dotsContainer.innerHTML = htmlString;
      return document.querySelectorAll('.dots-container .circle') 
    }

    function moveSelectedDots(){
      dots.forEach( (dot, i) => {
        if(index === i){
          dot.classList.add('fill')
        } else {
          dot.classList.remove('fill')
        }
      })
    }
  });