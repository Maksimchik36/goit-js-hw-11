import './sass/main.scss';
import imageCardTpl from './templates/imageCard.hbs'
import { fetchImages } from './js/api.js';

const formRef = document.querySelector("#search-form");
const galleryRef = document.querySelector('.gallery');

formRef.addEventListener("submit", renderList);

function renderList(event){
    event.preventDefault();

        const userRequest = event.target.elements.searchQuery.value.trim();
           
        if (userRequest === '') {
            galleryRef.innerHTML = "";
            return;
        }
     
        return fetchImages(userRequest)
            .then(array => {
                console.log(array);
                    const markup = imageCardTpl(array.hits);
                    galleryRef.insertAdjacentHTML("beforeend", markup);
                    console.log(galleryRef);
                // }
        })
            .catch(error => {
                galleryRef.innerHTML = "";
                // Notiflix.Notify.failure("Oops, there is no country with that name.")
            });
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