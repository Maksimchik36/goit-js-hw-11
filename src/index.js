import './sass/main.scss';
import imageCardTpl from './templates/imageCard.hbs'
import apiService from './js/api.js';
import Notiflix from 'notiflix';

const formRef = document.querySelector("#search-form");
const galleryRef = document.querySelector('.gallery');
const loadMoreRef = document.querySelector('.load-more')

formRef.addEventListener("submit", onFormSubmit);
loadMoreRef.addEventListener("click", onBtnLoadMoreClick)

function onFormSubmit(event){
    event.preventDefault();
    galleryRef.innerHTML = "";
    const userRequest = event.target.elements.searchQuery.value.trim();

    if (userRequest === '') {            
                    galleryRef.innerHTML = "";
                    loadMoreRef.classList.remove('load-more-visible')
                    Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
                    return;
                }
                apiService.searchImages(userRequest).then(data=>renderImages(data.hits));
                loadMoreRef.classList.add('load-more-visible');
             }

function renderImages(hits){
    const markup = imageCardTpl(hits); 
    galleryRef.insertAdjacentHTML("beforeend", markup);
}

let page = 1;
// function renderList(event){
//         
//         
     
//         return apiService.searchImages(userRequest)
//             .then(array => {
//                 if(array.total === 0){
//                     Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.")
//                 }               
//         })
//             .catch(error => {
//                 console.log("error.message", error.message);
//             });
//     }

//   

    function onBtnLoadMoreClick(){
             // добавить ещё картинок
        page = this.page +1;
        const data = apiService.searchImages().then(response=>{return renderImages(response)}).then(response=> response);

        console.log("data", data);             

        // если оставшиеся = 0
        // loadMoreRef.classList.remove('load-more-visible');
    }








           // FROM GINATION-TEST index.js


// import './sass/main.scss';

// import apiService from "./js/api";
// import renderGallery from './js/render_images'

// const galleryEl = document.querySelector('.gallery');
// const formEl = document.querySelector('.search-form');

// let searchQuery = '';



// apiService.fetchPopularImages(page).then(({ images, total }) => {
//    const markup = renderGallery(images);
//     galleryEl.insertAdjacentHTML('beforeend', markup);
//
// });

// function popular(event) {
//   const currentPage = event.page;
//   apiService.fetchPopularImages(currentPage).then(({ images, total }) => {
//     const markup = renderGallery(images);
//     galleryEl.insertAdjacentHTML('beforeend', markup);
//   });
// }


// formEl.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();

//   galleryEl.innerHTML = '';

//  

//   apiService.searchQuery = event.currentTarget.elements.searchQuery.value;
  
//   apiService.fetchImagesByName(page).then(({ images, total }) => {
//    const markup = renderGallery(images);
//     galleryEl.insertAdjacentHTML('beforeend', markup);
//   });
// }

// function bySearch(event) {
//   const currentPage = event.page;
//   apiService.fetchImagesByName(currentPage).then(({ images }) => {
//      const markup = renderGallery(images);
//     galleryEl.insertAdjacentHTML('beforeend', markup);
//   });
// }





       //    FROM HOMEWORK 10

//        import './css/styles.css';
// import countryCardTpl from './templates/country-card.hbs';
// import countryCardsTpl from './templates/list-country-cards.hbs';

// import Notiflix from 'notiflix';
// import {fetchCountries} from "./js/fetchCountries";
// import debounce from "lodash.debounce";
// const DEBOUNCE_DELAY = 300;

// const inputRef = document.querySelector("input#search-box");
// const countryInfoRef = document.querySelector(".country-info"); 
// const countriesListRef = document.querySelector(".country-list");

// inputRef.addEventListener("input", debounce(renderList, DEBOUNCE_DELAY));

// function renderList(event){
//     const userRequest = event.target.value.trim();
    
//     if (userRequest === '') {
//         countryInfoRef.innerHTML = "";
//         countriesListRef.innerHTML ="";
//         return;
//     }
 
//     fetchCountries(userRequest)
//         .then(array => {
//             if (array.length >10) {
//                 countryInfoRef.innerHTML = "";
//                 countriesListRef.innerHTML ="";
//                 Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
//             } else if (array.length >= 2) {
//                 countryInfoRef.innerHTML = "";                
//                 const markup = countryCardsTpl(array);
//                 countriesListRef.innerHTML = markup;
//             } else {
//                 countriesListRef.innerHTML ="";                
//                 const markup = countryCardTpl(array);
//                 countryInfoRef.innerHTML = markup;
//             }
//     })
//         .catch(error => {
//             countryInfoRef.innerHTML = "";
//             countriesListRef.innerHTML ="";
//             Notiflix.Notify.failure("Oops, there is no country with that name.")
//         });
// }