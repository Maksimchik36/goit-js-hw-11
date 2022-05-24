const BASE_URL = "https://pixabay.com/api/";
const KEY = "27623768-405768f09194e046df4a054c4";

//  key="KEY" q=примерно`${input.value}` image_type="photo" orientation="horizontal" safesearch="true"

// https://pixabay.com/api/?key=27623768-405768f09194e046df4a054c4&q=yellow+flowers&image_type=photo&pretty=true

export function fetchImages(name){
    return fetch(`${BASE_URL}?key=${KEY}&q=${input.value}&image_type=photo&orientation="horizontal"&safesearch="true"`).then(response => {
        if (!response.ok){
            throw new Error('Error fetching data');
        }
        return response.json();
    })   
}