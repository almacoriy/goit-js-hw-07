import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");
const cardsMarkup = createGalleryCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", cardsMarkup);

function createGalleryCardsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
								<a class="gallery__link" href="${preview}">
									<img
										class="gallery__image"
										src="${preview}"
										data-source="large-image.jpg"
										alt="${description}"
									/>
								</a>
							</div>`;
    })
    .join("");
}

console.log(galleryItems);
