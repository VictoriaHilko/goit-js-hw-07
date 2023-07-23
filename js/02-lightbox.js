// імпортуємо із ./gallery-items.js дані масиву об'єктів galleryItems
import { galleryItems } from './gallery-items.js';


// створили змінну, де записали посилання на <ul class="gallery"></ul>
const galleryList = document.querySelector('.gallery');



// markup - змінна для генерування списку li
const markup = galleryItems
    .map((picture) =>
        `<li class="gallery__item">
    <a class="gallery__link" href="${picture.original}">
    <img class="gallery__image" 
    src="${picture.preview}" 
    alt="${picture.description}"
    data-source="${picture.original}"
    target="_parent">
    </a>
    </li>`)
    .join("");

//   додаємо всередину ul дані із змінної markup
galleryList.insertAdjacentHTML("beforeend", markup);


const lightbox = new SimpleLightbox('.gallery a', {
    captions: 'true',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});
