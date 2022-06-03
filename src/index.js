import './sass/main.scss';
import imageCardTpl from './templates/imageCard.hbs'
import apiService from './js/api.js';
import Notiflix from 'notiflix';

const formRef = document.querySelector("#search-form");
const galleryRef = document.querySelector('.gallery');
const loadMoreRef = document.querySelector('.load-more')

formRef.addEventListener("submit", onFormSubmit);
loadMoreRef.addEventListener("click", onBtnLoadMoreClick)

let searchQuery = '';

async function onFormSubmit(event) {
    event.preventDefault();
    galleryRef.innerHTML = "";
    
    searchQuery = event.currentTarget.elements.searchQuery.value.trim();

    if (searchQuery === '') {            
                    galleryRef.innerHTML = "";
                    loadMoreRef.classList.remove('load-more-visible')
                    Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
                    return;
    }
            apiService.page = 1;

    const result = await apiService.searchImages(searchQuery);
    renderImages(result.data.hits);
        
        if (result.data.totalHits > 0) {
            Notiflix.Notify.success(`Hooray! We found ${result.data.totalHits} images.`);
            loadMoreRef.classList.add('load-more-visible');
        } else {
            Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.")
             }   
}

function renderImages(hits){
    const markup = imageCardTpl(hits); 
    galleryRef.insertAdjacentHTML("beforeend", markup);
}

async function onBtnLoadMoreClick(){
        apiService.page += 1;

const result = await apiService.searchImages(searchQuery);
    renderImages(result.data.hits);
    
    if (result.data.hits.length < apiService.itemsPerPage) {
        Notiflix.Notify.warning("We're sorry, but you've reached the end of search results.");
        loadMoreRef.classList.remove('load-more-visible');
    }
}