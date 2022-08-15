import './css/styles.css';
import { getFoto } from './js/fetch';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { formRef, loadMoreRef } from './js/refs';
import { creatMurcup, clearList } from './js/creatMurcup';

let page = 1;

formRef.addEventListener('submit', onSubmit);
loadMoreRef.addEventListener('click', onClickMore);

const lightbox = new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});

function onSubmit(event) {
  event.preventDefault();

  const {
    elements: { searchQuery, button },
  } = event.target;
  const searchQueryValue = searchQuery.value.trim();
  clearList();
  if (!searchQueryValue) {
    return;
  }
  loadMoreRef.disabled = false;
  page = 1;
  getData(searchQueryValue, page);
}

function onClickMore(event) {
  page += 1;
  getData(formRef.elements.searchQuery.value.trim(), page);
  if (page > 12) {
    loadMoreRef.disabled = true;
    Notify.info("We're sorry, but you've reached the end of search results.");
  }
}
async function getData(value, page) {
  try {
    const photos = await getFoto(value, page);
    if (photos.data.hits.length < 1) {
      return Notify.info(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }
    creatMurcup(photos);
    lightbox.refresh();
  } catch (error) {
    return Notify.failure(error);
  }
}
