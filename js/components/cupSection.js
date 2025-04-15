export function createCupSection() {
  const cupSection = document.createElement('section');
  cupSection.className = 'container-fluid w-100 mb-5 cup-section';

  const row = document.createElement('div');
  row.className = 'row flex-md-row-reverse';

  const colImg = document.createElement('div');
  colImg.className =
    'col-12 col-md-6 d-flex align-items-center justify-content-center';
  const img = document.createElement('img');
  img.src = '/assets/cup-avanti-kitchen.png';
  img.alt = 'Cup Avanti in kitchen';
  img.className = 'cup-section-img mt-4';
  colImg.appendChild(img);

  const colText = document.createElement('div');
  colText.className = 'col-12 col-md-6 mt-4 mb-1';
  const title = document.createElement('h2');
  title.className = 'text-center fw-bold cup-section-title';
  title.textContent = 'Lorem Ipsum';
  colText.appendChild(title);

  for (let i = 0; i < 3; i++) {
    const flexContainer = document.createElement('div');
    flexContainer.className = 'd-flex m-1 p-1';
    flexContainer.style.gap = '14px';

    const pinImg = document.createElement('img');
    pinImg.src = '/assets/blue-map-pin.png';
    pinImg.alt = 'Map pin';
    pinImg.style.width = '60px';
    pinImg.style.height = '60px';

    const para = document.createElement('p');
    para.className = 'cup-section-paragraph';
    para.textContent = `
      Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
      Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
    `;

    flexContainer.appendChild(pinImg);
    flexContainer.appendChild(para);
    colText.appendChild(flexContainer);
  }

  row.appendChild(colImg);
  row.appendChild(colText);
  cupSection.appendChild(row);

  return cupSection;
}
