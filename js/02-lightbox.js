import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galery = document.querySelector('.gallery')
const markup = galleryItems.map(({ preview, original, description }) => `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`)

galery.insertAdjacentHTML('beforeend', markup.join(''));

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});