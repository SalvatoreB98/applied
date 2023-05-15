let startX = 0;
let startY = 0;

const minSlideThreshold = 10;

scroller.addEventListener('touchstart', handleTouchStart, false);
scroller.addEventListener('touchmove', handleTouchMove, false);
const images = document.querySelectorAll(".image");
let imgArray= Array.from(images);

function handleTouchStart(event) {
  startX = event.touches[0].clientX;
  startY = event.touches[0].clientY;
}


function handleTouchMove(event) {
  if (!startX || !startY) {
    return;
  }

  const currentX = event.touches[0].clientX;
  const currentY = event.touches[0].clientY;

  const deltaX = startX - currentX;
  const deltaY = startY - currentY;

  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    if (deltaX > minSlideThreshold) {
      console.log('Slide left');
      scroll(scroller);
    } else if (deltaX < -minSlideThreshold) {
      console.log('Slide right');
    }
  } 

  // Reset start coordinates
  startX = 0;
  startY = 0;
}

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


