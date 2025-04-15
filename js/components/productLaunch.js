export function createProductLaunch() {
  const productLaunch = document.createElement('div');
  productLaunch.className = 'card border-0 product-launch';

  productLaunch.innerHTML = `
    <div class="product-launch-overlay"></div>
    <div class="card-body d-flex flex-column justify-content-center align-items-start mx-3">
      <h5 class="text-white mb-4" style="width: 8rem; font-size: 24px;">
        Confira os Produtos <span class="fw-bold">Que acabaram De chegar</span>
      </h5>
      <button class="btn btn-product-launch">VER TODOS</button>
    </div>
  `;

  return productLaunch;
}
