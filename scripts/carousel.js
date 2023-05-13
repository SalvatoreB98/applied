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
        htmlString += `<button class="circle outline" data-value=${i}></div> `;
      })
      dotsContainer.innerHTML = htmlString;
      const dotsHtmlElementArray = document.querySelectorAll('.dots-container .circle');
      // Crea dei dots con event listener in modo che le immagini siano navigabili tramite il click su di essi
      dotsHtmlElementArray.forEach((dot)=>{
          dot.addEventListener("click",(e)=>{
          const dotIndex = parseInt(e.target.getAttribute("data-value", 10));
          index = dotIndex;
          indexChange();
          console.log(index)
          scroll(scroller);
        })
      })
      return dotsHtmlElementArray
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