export function createBanner() {
  const banner = document.createElement('section');
  banner.className = 'banner';
  banner.innerHTML = `
    <div class="container">
      <div class="d-flex justify-content-around align-items-center m-0 p-0">
        <div class="col-6 m-0 p-0">
          <img src="/assets/chair.png" alt="Banner" class="img-fluid h-200" />
        </div>
        <div class="col-6 m-0 p-0">
          <div class="d-flex flex-column align-items-center">
            <h2 class="fw-bold fs-4 mb-0">SUPER</h2>
            <h2 class="fs-5 mt-0">SALE</h2>
            <p class="fw-bold mb-0 text-primary selected-items mb-1">SELECTED ITEMS UP TO</p>
            <p class="fw-bold fs-5 text-primary mb-0">50% OFF</p>
          </div>
        </div>
      </div>
    </div>
  `;
  return banner;
}
