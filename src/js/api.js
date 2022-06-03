const axios = require('axios').default;

const BASE_URL = "https://pixabay.com/api/";
const KEY = "27623768-405768f09194e046df4a054c4";


export default {
    itemsPerPage: 5,
    page: 1,
        
//     searchImages(searchQuery){
//     return fetch(`${BASE_URL}?key=${KEY}&q=${searchQuery}&page=${this.page}&per_page=${this.itemsPerPage}&image_type=photo&orientation=horizontal&safesearch=true`).then(response => {
//         if (!response.ok){
//             throw new Error('Error fetching data');
//         }
//         // console.log(response.data);
//         return response.json();
//     })
// }
    
    async searchImages(searchQuery) {
  try {
      const response = await axios.get(`${BASE_URL}?key=${KEY}&q=${searchQuery}&page=${this.page}&per_page=${this.itemsPerPage}&image_type=photo&orientation=horizontal&safesearch=true`);
    //   console.log(response);
      return response;
  } catch (error) {
    //   console.error(error);
      throw new Error('Error fetching data');
  }
}
}

