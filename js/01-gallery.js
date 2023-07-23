// імпортуємо із ./gallery-items.js дані масиву об'єктів galleryItems
import { galleryItems } from './gallery-items.js';


// створили змінну, де записали посилання на <ul class="gallery"></ul>
const galleryList = document.querySelector('.gallery');

// markup - змінна для генерування списку li
const markup = galleryItems
    .map((picture) =>
        `<li class="gallery__item">
    <img class="gallery__image" 
    src="${picture.preview}" 
    alt="${picture.description}">
    </li>`)
    .join("");

//   додаємо всередину ul дані із змінної markup
galleryList.insertAdjacentHTML("beforeend", markup);




//додали обробник події на клик по ul
galleryList.addEventListener('click', handleClick);

//   функція обробник події клик по ul

function handleClick(event) {

    // console.log(event.target);

    // console.log();


    // const originalPicture = basicLightbox.create(`
    // <div>
    // <img class="gallery__image" 
    // src="${event.target.src}" 
    // alt="${event.target.description}">
    // </div>
    // `);

    // originalPicture.show();


    for (let i = 0; i < galleryItems.length; i += 1){
        if (event.target.getAttribute('src') === galleryItems[i].preview) {
            const originalPicture = basicLightbox.create(`
    <div>
    <img class="gallery__image" 
    src="${galleryItems[i].original}" 
    alt="${event.target.description}">
    </div>
    `);
    originalPicture.show();
        }
    }
}