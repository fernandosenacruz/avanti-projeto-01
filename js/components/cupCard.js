export function createCupCard() {
  const card = document.createElement('div');
  card.className = 'cup-card';
  card.innerHTML = `
  <div class="card cup-card-box">
    <div class="card-image m-0 p-0 cup-card-img">
      <img src="/assets/cup-avanti.png" alt="Cup avanti" class="card-img-top"/>
    </div>
    <div class="card-body m-2">
      <h4 class="card-title">Lorem Ipsum</h4>
      <p class="card-text">
        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
      </p>
      <p class="card-text">
        Cras dignissim est et pellentesque tincidunt. Praesent bibendum quis velit a aliquam. 
        Ut vestibulum turpis eget mi iaculis ullamcorper. 
        Curabitur nec metus sed tortor sollicitudin porta nec eu enim. 
        Ut fermentum scelerisque tortor mollis volutpat. 
        Mauris iaculis magna nisl, vel porttitor augue placerat et.
      </p>
    </div>
  </div>
  `;

  return card;
}
