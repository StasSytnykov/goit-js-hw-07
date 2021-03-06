import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryList = document.querySelector(".gallery");

const makeGalleryMarkup = ({ preview, original, description }) => {
  return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
</a>`;
};

const makeGallery = galleryItems.map(makeGalleryMarkup).join("");

galleryList.innerHTML += makeGallery;

let gallery = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
});
gallery.on("show.simplelightbox", function () {
  // do somethingâ€¦
});
