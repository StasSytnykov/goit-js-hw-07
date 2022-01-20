import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const makeGalleryMarkup = ({ preview, original, description }) => {
  return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
};

const makeGallery = galleryItems.map(makeGalleryMarkup).join("");

gallery.innerHTML += makeGallery;
