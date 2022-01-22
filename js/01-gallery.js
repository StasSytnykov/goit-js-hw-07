import { galleryItems } from "./gallery-items.js";
// // Change code below this line

const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", onGalleryOpenModal);

let instance;

class MakeGallery {
  constructor(galleryItems) {
    this.galleryItems = galleryItems;
  }

  onGalleryMarkup = ({ preview, original, description }) => {
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

  onMakeGallerMarkup() {
    const makeGallery = galleryItems.map(this.onGalleryMarkup).join("");
    gallery.innerHTML += makeGallery;
    this.onImgClickLisetner();
  }

  onImgClickLisetner() {
    const linkToOriginImg = document.querySelectorAll(".gallery__link");
    linkToOriginImg.forEach((element) =>
      element.addEventListener("click", (event) => event.preventDefault())
    );
  }
}

const completlyGalleryMarkup = new MakeGallery(galleryItems);

completlyGalleryMarkup.onMakeGallerMarkup();

function onGalleryOpenModal(event) {
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);
  instance.show();

  window.addEventListener("keydown", onCloseImgModal);
}

function onCloseImgModal(event) {
  if (event.code === "Escape") {
    instance.close();
    window.removeEventListener("keydown", onCloseImgModal);
  }
}
