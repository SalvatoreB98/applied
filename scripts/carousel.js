window.addEventListener("load", () => {
    
    const scroller = document.querySelector(".imgs-scroller");
    const images = document.querySelectorAll(".image");
    const arrowRight = document.querySelector(".arrow-container.right");
    const arrowLeft = document.querySelector(".arrow-container.left");
    let index = 0;
  
    arrowRight.addEventListener("click", () => {
      if (index < images.length - 1) {
        index++;
        scroll(scroller);
      }
    });
  
    arrowLeft.addEventListener("click", () => {
      if (index > 0) {
        index--;
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
        width += images[i].offsetWidth;
      }
      return width;
    }
  });