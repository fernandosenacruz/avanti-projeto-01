export function createBanner() {
  const banner = document.createElement('section');
  banner.className = 'banner';
  banner.innerHTML = `
    <div class="banner container">
      <div class="row">
        <div class="col-12">
          <img src="/assets/chair.png" alt="Banner" class="img-fluid">
        </div>
      </div>
    </div>
  `;
  return banner;
}
