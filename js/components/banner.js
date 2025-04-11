export function createBanner() {
  const banner = document.createElement('section');
  banner.className = 'banner position-relative overflow-hidden';

  banner.innerHTML = `
    <div class="container h-100">
      <div class="d-flex align-items-center h-100 banner-flex">
        <div class="banner-img-wrapper">
          <img src="/assets/chair.png"
               alt="Banner"
               class="img-fluid banner-img object-fit-cover" />
        </div>

        <div class="banner-text-wrapper ps-3">
          <h2 class="d-flex flex-wrap lh-1 mb-2 banner-title"> <span class="fw-bold">SUPER</span> SALE</h2>
          <p class="text-uppercase mb-1 text-primary banner-subtitle">
            Selected items up to
          </p>
          <p class="fw-bold text-primary banner banner-off">50% OFF</p>
        </div>
      </div>
    </div>
  `;
  return banner;
}
