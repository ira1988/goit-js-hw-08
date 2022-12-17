// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(SimpleLightbox);

const gallery = document.querySelector('.gallery');

function creatMarkup(itemsArr) {
  const markUp = itemsArr
    .map(
      ({ preview, original, description }) =>
        `<a href="${original}"><img src="${preview}" alt="${description}"" /></a>`
    )
    .join('');
  console.log(markUp);
  gallery.insertAdjacentHTML('beforeend', markUp);
}

creatMarkup(galleryItems);

let modalItem = new SimpleLightbox('.gallery a', {
  overlayOpacity: 0.8,
  captionsData: 'alt',
  captionDelay: 0,
});
