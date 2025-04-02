export function createCard(cardData) {
  const card = document.createElement('div');
  card.innerHTML = `
    <div class="card" id="${cardData.id}" style="width: 171px; height: 365px;">
      <div class="card-image p-2">
        <span class="position-absolute tag">${cardData.tag}</span>
        <img src="${cardData.image}" alt="${cardData.alt}" class="img-fuid w-100"/>
      </div>
      <div class="card-body m-1 p-1">
        <h3>${cardData.title}</h3>
        <div class="d-flex flex-column">
          <div class="row">
            <div class="col-6">
              <span class="text-decoration-line-through full-price">R$ ${cardData.fullPrice}</span>
              <span class="fw-bold">R$${cardData.priceWithDiscount}</span>
            </div>
            <div class="col-6">
              <span class="text-light off">${cardData.discount}% OFF</span>
            </div>
          </div>
          <div class="d-flex installments">
            <p>Ou em até</p>
            <p class="fw-bold">${cardData.installments}</p>
          </div>
          <a href="#" class="btn btn-primary">Comprar</a>
        </div>
      </div>
    </div>
  `;
  return card;
}
