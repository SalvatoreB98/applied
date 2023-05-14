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
    isMobileDevice() {
      const mobileWidthThreshold = 768; // Adjust this threshold value as needed
      return window.innerWidth < mobileWidthThreshold;
    }
} 

