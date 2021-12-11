import { galleryItems } from "./gallery-items.js";

const instance = basicLightbox.create(`
    <div>
        <img src="" width="100%" height="100%" />
    </div>
`);

const refs = {
  gallery: document.querySelector(".gallery"),
  modalImage: instance.element().querySelector("img"),
  body: document.querySelector("body"),
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

// ===== Открытие/закрытие мод. окна =====

refs.gallery.addEventListener("click", onOpenModal);
refs.modalImage.addEventListener("click", onCloseModal);

function onOpenModal(event) {
  window.addEventListener("keydown", onEscKeyPress);
  event.preventDefault();

  if (event.target.nodeName !== "IMG") return;
  refs.modalImage.src = event.target.dataset.source;
  refs.body.style.overflow = "hidden";

  instance.show();
}

function onCloseModal() {
  window.removeEventListener("keydown", onEscKeyPress);

  instance.close();
  refs.body.style.overflow = "";
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = "Escape";

  if (event.code === ESC_KEY_CODE) onCloseModal();
}
