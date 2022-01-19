import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const makeGalleryMarkup = ({ preview, original, description }) => {
  return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
};

const makeGallery = galleryItems.map(makeGalleryMarkup).join("");

gallery.innerHTML += makeGallery;
gallery.addEventListener("click", onGalleryItemClick);

const link = document.querySelectorAll(".gallery__link");
function addEventListenerOnLink() {
  link.forEach((element) =>
    element.addEventListener("click", (event) => event.preventDefault())
  );
}

addEventListenerOnLink();

function onGalleryItemClick(event) {
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  console.log(event.target.dataset.source);
}

const instance = basicLightbox.create(`
	<h1>Dynamic Content</h1>
	<p>You can set the content of the lightbox with JS.</p>
`);
console.log(instance);
