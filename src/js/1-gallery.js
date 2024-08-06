import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { images } from './img';

const galleryList = document.querySelector('.gallery');

const createGalleryCard = image => {
  return `<li class="gallery-item">
        <a class="gallery-link" href= "${image.original}">
            <img
                class="gallery-image"
                src = "${image.preview}"
                alt = "${image.description}"
            />
        </a>
    </li>`;
};

const createGalleryImages = images
  .map(imageInfo => createGalleryCard(imageInfo))
  .join('');
galleryList.innerHTML = createGalleryImages;

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
