import { galleryItems } from "./gallery-items.js";

const instance = basicLightbox.create(`
    <div class="modal">
        <img src="" width="400" height="200">
    </div>
`);

const refs = {
  gallery: document.querySelector(".gallery"),
  galleryItem: document.querySelector(".gallery__item"),
  linkImage: document.querySelector(".gallery__link"),
  image: document.querySelector(".gallery__image"),
  originalImage: document.querySelector("img[data-source]"),
  modalImage: instance.element().querySelector("img"),
};

//===== Создаем галерею из массива =====
const galleryContainer = document.querySelector(".gallery");
const cardsMarkup = createGalleryCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", cardsMarkup);

function createGalleryCardsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
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
    })
    .join("");
}

//=====  =====

refs.gallery.addEventListener("click", onModalOpen);
refs.modalImage.addEventListener("click", onModalClose);

function onModalOpen(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") return;
  refs.modalImage.src = event.target.dataset.source;

  instance.show();
}

function onModalClose() {
  instance.close();
}

// console.log(galleryI?tems);
