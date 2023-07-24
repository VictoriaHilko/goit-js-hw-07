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
    data-source="${picture.original}"
    alt="${picture.description}"
    target="_parent">
    </a>
    </li>`)
    .join("");

//   додаємо всередину ul дані із змінної markup
galleryList.insertAdjacentHTML("beforeend", markup);


//додали обробник події на клик по ul
galleryList.addEventListener('click', handleClick);

//   функція обробник події клик по ul
function handleClick(event) {

    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const instance = basicLightbox.create(`
    <img
    src="${event.target.dataset.source}" 
    alt="${event.target.description}"
    width="800" height="600">
    `
    // `, {
    //     onShow: document.body.addEventListener('keydown', onEscClose)
    // },
    //     {
    //         onClose: document.body.removeEventListener('keydown', onEscClose)
    //     }
    );

    instance.show();

    document.body.addEventListener('keydown', onEscClose);

    function onEscClose(event) {
        if (event.code === 'Escape') {
            instance.close();
            document.body.removeEventListener('keydown', onEscClose);
        }
    }
}