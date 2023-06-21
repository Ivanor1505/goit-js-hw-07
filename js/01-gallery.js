import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galery = document.querySelector('.gallery')

const markup = galleryItems.map(({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="Image ${description}"
    />
  </a>
</li>`)

galery.insertAdjacentHTML('beforeend', markup.join(''));

galery.addEventListener('click', onClick);

function onClick(e) {
    if (!e.target.classList.contains("gallery__image")) { return; }

    const imgUrl = e.target.dataset.source;
}