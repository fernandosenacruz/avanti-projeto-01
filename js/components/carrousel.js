import { createCard } from './card.js';
import { cardMockedData } from '../data.js';

export function createCarrousel() {
  const carrousel = document.createElement('section');
  carrousel.className =
    'container d-flex flex-column justify-content-center align-items-center';

  carrousel.innerHTML = `
    <div class="container d-flex justify-content-between mt-5 mb-2">
      <h5 class="text-center">Lançamentos</h5>
      <a href="#" class="fs-6" style="color: #000000;">Ver mais</a>
    </div>
    <div id="carouselSlidesOnly" class="carousel slide mb-5" data-bs-ride="carousel">
      <div class="carousel-indicators">
        ${cardMockedData.map((card) => {
          return `
            <button type="button" data-bs-target="#carouselSlidesOnly" data-bs-slide-to="${
              card.id - 1
            }" class="${card.id == 1 ? 'active' : ''}" aria-current="${
            card.id == 1 ? 'true' : 'false'
          }" aria-label="Slide ${card.id}"></button>
          `;
        })}
      </div>
      <div class="carousel-inner">
        ${cardMockedData.map((card) => {
          return `
            <div class="carousel-item ${card.id == 1 ? 'active' : ''}" key="${
            card.id
          }">
              ${createCard(card).innerHTML}
            </div>
          `;
        })}
      </div>
    </div>
  `;

  return carrousel;
}
