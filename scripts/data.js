export default class Data {
    constructor(){
    }
    
    getDataFromJson() {
        return fetch('data.json')
          .then(response => response.json())
          .catch(error => {
            // Handle any errors
            console.error('Error:', error);
          });
      }
} 

