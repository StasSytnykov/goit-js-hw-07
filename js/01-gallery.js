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
gallery.addEventListener("click", onGalleryOpenModal);

const originImg = document.querySelectorAll(".gallery__link");
function onAddEventListenerOnImg() {
  originImg.forEach((element) =>
    element.addEventListener("click", (event) => event.preventDefault())
  );
}

onAddEventListenerOnImg();

let instance = basicLightbox.create(`
    <img src="origin-img" width="800" height="600">
`);

function onGalleryOpenModal(event) {
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

  instance.show();

  window.addEventListener("keydown", onEscCloseModal);
}

function onEscCloseModal(event) {
  if (event.code === "Escape") {
    instance.close();
    window.removeEventListener("keydown", onEscCloseModal);
  }
}
