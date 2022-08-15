import { photoListRef } from './refs';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function creatMurcup(photos) {
  const markup = photos.data.hits
    .map(photo => {
      return `<div class="photo-list__item"><a class = "gallery__item" href="${photo.largeImageURL}"><img class = "gallery__image" src="${photo.webformatURL}" alt="${photo.tags}"></img></a>
      <div class="info">
      <p class="info-item"><b class="info-item__text">Likes</b> ${photo.likes}</p>
        <p class="info-item"><b class="info-item__text">Views</b> ${photo.views}</p>
        <p class="info-item"><b class="info-item__text">Comments</b> ${photo.comments}</p> 
        <p class="info-item"><b class="info-item__text">Downloads</b> ${photo.downloads}</p></div></div>`;
    })
    .join('');
  photoListRef.innerHTML = markup;
}

export function clearList() {
  photoListRef.innerHTML = '';
}
