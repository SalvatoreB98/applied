export default class Data {
    constructor(){
      
    }
    
    async getDataFromJson() {
        try {
        const response = await fetch('data.json');
        return await response.json();
      } catch (error) {
        // Handle any errors
        console.error('Error:', error);
      }
    }
    isMobileDevice() {
      const mobileWidthThreshold = 768; // Adjust this threshold value as needed
      return window.innerWidth < mobileWidthThreshold;
    }
} 

