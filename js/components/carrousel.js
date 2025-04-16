import { createCard } from './card.js';
import { cardMockedData } from '../data.js';
import { getContentCardsPerSlide } from '../utils/getContentCardsPerSlide.js';

function groupCards(data, groupSize) {
  const groups = [];
  for (let i = 0; i < data.length; i += groupSize) {
    groups.push(data.slice(i, i + groupSize));
  }
  return groups;
}

export function createCarrousel(isDesktop = false) {
  function buildCarouselHTML() {
    const cardsPerSlide = getContentCardsPerSlide();
    const cardGroups = groupCards(cardMockedData, cardsPerSlide);

    return `
      <div class="container d-flex justify-content-between mt-5 mb-2">
        <h5 class="text-center fw-bold">Lançamentos</h5>
        <a href="#" class="fs-6" style="color: #000;">Ver mais</a>
      </div>
      <div id="carouselSlidesOnly" class="carousel slide mb-5" data-bs-ride="carousel">
        <div class="carousel-indicators">
          ${cardGroups
            .map(
              (_, index) => `
            <button type="button" data-bs-target="#carouselSlidesOnly" data-bs-slide-to="${index}"
              class="${index === 0 ? 'active' : ''}" 
              aria-current="${index === 0 ? 'true' : 'false'}" 
              aria-label="Slide ${index + 1}">
            </button>
          `
            )
            .join('')}
        </div>
        <div class="carousel-inner">
          ${cardGroups
            .map((group, index) => {
              const cardsHtml = group
                .map(
                  (card) =>
                    `<div class="col">${createCard(card).outerHTML}</div>`
                )
                .join('');
              return `
              <div class="carousel-item ${index === 0 ? 'active' : ''}">
                <div class="row">
                  ${cardsHtml}
                </div>
              </div>
            `;
            })
            .join('')}
        </div>
      </div>
    `;
  }

  const carrouselContainer = document.createElement('section');
  carrouselContainer.className = `container d-flex flex-column justify-content-center align-items-center`;

  carrouselContainer.innerHTML = buildCarouselHTML();

  window.addEventListener('resize', () => {
    if (isDesktop) {
      let display = window.innerWidth < 1280 ? 'none' : 'flex';
      carrouselContainer.className = `container d-${display} flex-column justify-content-center align-items-center`;
    }
    carrouselContainer.innerHTML = buildCarouselHTML();
  });

  window.dispatchEvent(new Event('resize'));

  return carrouselContainer;
}
