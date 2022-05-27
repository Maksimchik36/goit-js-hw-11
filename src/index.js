import './sass/main.scss';
import { fetchImages } from './js/fetchImages';

const formRef = document.querySelector("#search-form");

formRef.addEventListener("submit", onSearch);

function onSearch(event) {
    event.preventDefault();
    // console.log(event.currentTarget.elements.searchQuery.value);
    console.log(fetchImages(event.currentTarget.elements.searchQuery.value));
}









           // FROM GINATION-TEST index.js


// import './sass/main.scss';
// import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
// import apiService from "./js/api";
// import renderGallery from './js/render_images'

// const galleryEl = document.querySelector('.gallery');
// const formEl = document.querySelector('.search-form');

// let searchQuery = '';

// const options = {
//   totalItems: 0,
//   itemsPerPage: 3,
//   visiblePages: 10,
//   page: 1,
// };


// apiService.itemsPerPage = options.itemsPerPage;



// const pagination = new Pagination('pagination', options);
// // console.dir(pagination);

// const page = pagination.getCurrentPage();


// apiService.fetchPopularImages(page).then(({ images, total }) => {
//    const markup = renderGallery(images);
//     galleryEl.insertAdjacentHTML('beforeend', markup);
//   pagination.reset(total);
// });

// function popular(event) {
//   const currentPage = event.page;
//   apiService.fetchPopularImages(currentPage).then(({ images, total }) => {
//     const markup = renderGallery(images);
//     galleryEl.insertAdjacentHTML('beforeend', markup);
//   });
// }

// pagination.on('afterMove', popular);

// formEl.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();

//   galleryEl.innerHTML = '';

//   pagination.off('afterMove', popular);
//   pagination.movePageTo(1);
//   pagination.on('afterMove', bySearch);

//   apiService.searchQuery = event.currentTarget.elements.searchQuery.value;
  
//   apiService.fetchImagesByName(page).then(({ images, total }) => {
//    const markup = renderGallery(images);
//     galleryEl.insertAdjacentHTML('beforeend', markup);
//     pagination.reset(total);
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