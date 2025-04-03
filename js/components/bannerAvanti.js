export function createBannerAvanti() {
  const banner = document.createElement('section');
  banner.className = 'container-fluid m-0 p-0 w-100 banner-avanti';
  banner.innerHTML = `
      <p class="text-center w-100 py-3 px-5">
        Entre em contato conosco e verifique a disponibilidade para sua região!
      </p>
  `;
  return banner;
}
