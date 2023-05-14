import Data from './data'
const data = new Data()
data.getDataFromJson().then(((response) => {
  
  /** DECLARATIONS */
  let users = response;
  let pageIndex = 0;
  let results = response.length;
  let itemsPage = data.isMobileDevice() ? 1 : 3;
  let pages = results / itemsPage;
  const indecesContainerHTML = document.querySelector(".indeces-container")
  const cardsContainer = document.querySelector(".cards-container")
  const selectElement = document.querySelector('select[name="items-page"]')

  /** BODY */
  window.addEventListener("load", () => {
    const arrowRight = document.querySelector(".paginator-arrow.arrow-right");
    const arrowLeft = document.querySelector(".paginator-arrow.arrow-left");

    arrowRight.addEventListener("click", () => {
      if (pageIndex < pages - 1) {
        pageIndex++;
        indexChange();
        addScrollClassForAnimation("scroll-left");
      }
    });

    arrowLeft.addEventListener("click", () => {
      if (pageIndex > 0) {
        pageIndex--;
        indexChange();
        addScrollClassForAnimation("scroll-right");
      }
    });
    
    selectElement.addEventListener("change",(e)=>{
      itemsPage = parseInt(e.target.value)
      pageIndex = 0;
      indexChange();
    })
    updatePaginator();
    updateComponent();

  })


  /** FUNCTIONS DECLARATION */
  function updatePaginator() {
    pages =  Math.round(results / itemsPage);
    let toInject = ''
    if(data.isMobileDevice()){
      toInject = `<span class="page-index">${pageIndex}</span>`
    } else{ 
      for (let i = 0; i < pages; i++) {
        toInject += `<span class="page-index ${i == pageIndex ? 'primary' : ''}">${i + 1}</span>`
      }
    }
    indecesContainerHTML.innerHTML = toInject;
  }

  function updateComponent() {
    let htmlComponents = "";
    let startIndex = pageIndex * itemsPage;
    users.forEach((user, index) => {
      let render = index < itemsPage * (pageIndex == 0 ? 1 : pageIndex + 1) && index >= startIndex;
      if (render) {
        let tags = user.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        let htmlComponent = `
        <div class="card">
          <div class="card-header">
            <img src="https://randomuser.me/api/portraits/${user.gender == 'male' ? 'men' : 'women'}/${index}.jpg" alt="">
          </div>
          <div class="card-content">
            <div class="name"> <strong>${user.name}</strong>  </div>
            <div class="company"> <i>${user.company}</i>  </div>
            <div class="info">
              <div> <i class="fa fa-map-marker" aria-hidden="true"></i> ${user.address} </div>
              <div class="tags-container"> 
                ${tags}
              </div>
            </div>
          </div>
          <div class="flex-grow"></div>
          <div class="card-footer">
            <div>
              <a href="mailto:${user.email}" data-tooltip="${user.email}" class="contact-button secondary tooltip-btn" target="_blank">
              <i class="icon fa fa-envelope lg"></i>
                <span>Email</span> 
              </a>
            </div>
            <div>
              <a href="tel:${user.phone}" data-tooltip="${user.phone}" class="contact-button primary tooltip-btn">
                <i class="icon fa fa-phone lg" aria-hidden="true"></i> 
                <span>Chiamami</span> 
              </a>
            </div>
          </div>
        </div>`;
        htmlComponents += htmlComponent;
      }
    });
    cardsContainer.innerHTML = htmlComponents;
    let cardsArray = document.querySelectorAll(".card");
    cardsArray.forEach(card=>{
      setTimeout(()=>{
        card.classList.add("active")
      },10)
    })
  }

  function indexChange() {
    updatePaginator();
    updateComponent();
  }

  function addScrollClassForAnimation(scrollClass){
    document.querySelectorAll(".card").forEach(card=>{
      card.classList.add(scrollClass)
    })
  }

}));

