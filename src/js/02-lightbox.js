import { galleryItems } from "./gallery-items.js";

//===== Создаем галерею из массива =====

const galleryContainer = document.querySelector(".gallery");
const cardsMarkup = createGalleryCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", cardsMarkup);

function createGalleryCardsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li>
                <a class="gallery__item" href="${original}">
									<img
										class="gallery__image"
										src="${preview}"
										alt="${description}"
									/>
							  </a>
              </li>
                `;
    })
    .join("");
}

//===== Инициализация библиотеки, отображение подписи к картинкам =====

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
