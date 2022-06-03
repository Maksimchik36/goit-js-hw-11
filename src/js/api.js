const BASE_URL = "https://pixabay.com/api/";
const KEY = "27623768-405768f09194e046df4a054c4";


export default {
    itemsPerPage: 5,
    page: 1,
        
    searchImages(searchQuery){
    return fetch(`${BASE_URL}?key=${KEY}&q=${searchQuery}&page=${this.page}&per_page=${this.itemsPerPage}&image_type=photo&orientation=horizontal&safesearch=true`).then(response => {
        if (!response.ok){
            throw new Error('Error fetching data');
        }
        // console.log(response.data);
        return response.json();
    })   
}
}




          // FROM PAGINATION-TEST api.js


// export default {

//  itemsPerPage: 0,
//   searchQuery: '',
    
//   // create object hits, totalhits, total
// fetchPopularImages(page) {
//   console.log(page);
//   return fetch(
//     `${BASE_URL}?key=${KEY}&q=${this.searchQuery}&image_type=photo&page=${page}&per_page=${this.itemsPerPage}`,
//   )
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     })
//     .then(data => ({ images: data.hits, total: data.totalHits }));
// },


// fetchImagesByName(page) {

//   return fetch(
//     `${BASE_URL}?key=${KEY}&q=${this.searchQuery}&image_type=photo&page=${page}&per_page=${this.itemsPerPage}`,
//   )
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     })
//     .then(data => ({ images: data.hits, total: data.totalHits }));
//   }
// }




//  from render-images.js

// // Рисует текстовую разметку для картинок
// export default function renderGallery(images) {
//   return images
//     .map(image => {
//       const { largeImageURL, webformatURL, tags, likes, views, comments, downloads } = image;
//       return `<a class="gallery__link" href="${largeImageURL}">
//           <div class="gallery-item">
//             <img class="gallery-item__img" src="${webformatURL}" alt="${tags}" loading="lazy" width="250"/>
//             <div class="info">
//               <p class="info-item"><b>Likes</b>${likes}</p>
//               <p class="info-item"><b>Views</b>${views}</p>
//               <p class="info-item"><b>Comments</b>${comments}</p>
//               <p class="info-item"><b>Downloads</b>${downloads}</p>
//             </div>
//           </div>
//         </a>`;
//     })
//     .join('');
  
// }