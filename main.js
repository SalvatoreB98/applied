import './styles/root.css'
import './styles/style.css'
import './styles/utilities.css'
import './styles/webkit.css'
import './styles/navbar.css'
import './styles/animations.css'
import './styles/card.css'

import './scripts/carousel'
import './scripts/smoothScroll'
import './scripts/navbar'
import './scripts/cards'

let dataArray = []
getDataFromJson();



function getDataFromJson(){
  fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Use the data here
    dataArray = data;
    console.log(dataArray)
  })
  .catch(error => {
    // Handle any errors
    console.error('Error:', error);
});
}