// import './sass/main.scss';
// import imageCardTpl from './templates/imageCard.hbs'
// import apiService from './js/api.js';
// import Notiflix from 'notiflix';

// const formRef = document.querySelector("#search-form");
// const galleryRef = document.querySelector('.gallery');
// const loadMoreRef = document.querySelector('.load-more')

// formRef.addEventListener("submit", onFormSubmit);
// loadMoreRef.addEventListener("click", onBtnLoadMoreClick)

// let page = 1;
// function renderList(event){
//     event.preventDefault();

//         const userRequest = event.target.elements.searchQuery.value.trim();
//         if (userRequest === '') {            
//             galleryRef.innerHTML = "";
//             loadMoreRef.classList.remove('load-more-visible')
//             Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
//             return;
//         }
     
//         return apiService.searchImages(userRequest)
//             .then(array => {
//                 if(array.total === 0){
//                     Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.")
//                 } else {
//                     console.log("array", array);
//                     const markup = imageCardTpl(array.hits);
//                     galleryRef.insertAdjacentHTML("beforeend", markup);
//                     console.log(galleryRef);
//                     loadMoreRef.classList.add('load-more-visible');

//                 }                
//         })
//             .catch(error => {
//                 console.log("error.message", error.message);
//             });
//     }

//     async function onFormSubmit(event){
//         galleryRef.innerHTML = "";
//         //searchImages
        
//         await renderList(event);
              
//     }

//     function onBtnLoadMoreClick(){
//         page+=1;
//         renderList(event)


//         // добавить ещё картинок

//         // если оставшиеся = 0
//         loadMoreRef.classList.remove('load-more-visible');
//     }