import { galleryItems } from './gallery-items.js';
const containerGallery = document.querySelector(".gallery")
const markup = galleryItems.map(
    (item) => `<li class="gallery__item">
    <a class="gallery__link" >
    <img class="gallery__image"
    src="${item.preview}" 
    alt="${item.description}"
    data-source="${item.original}"/>
    </a></li>`)
    .join(""); 

containerGallery.insertAdjacentHTML("beforeend", markup);
containerGallery.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(event) {
    event.preventDefault();
    
    if (event.target.classList.contains('gallery__image')) {
        const largeImg = event.target.dataset.source;
        const instance = basicLightbox.create(`
    <img src="${largeImg}" width="800" height="600">
  `);
        instance.show();
    }
}


