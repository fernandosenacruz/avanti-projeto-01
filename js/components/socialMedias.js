export function createSocialMedias() {
  const socialMedias = document.createElement('div');
  socialMedias.id = 'socialMedias';
  socialMedias.classList.add('d-flex', 'flex-column', 'gap-3', 'mt-3', 'mb-5');

  socialMedias.innerHTML = `
    <div class="logo">
      <img src="/assets/avanti.png" alt="Logo avanti">
    </div>
    <div class="d-flex justify-content-center align-items-center gap-4 mt-4">
      <a href="https://www.instagram.com/penseavanti/" target="_blank">
        <i class="bi bi-instagram" style="font-size: 19px;"></i>
      </a>
      <a href="https://www.facebook.com/penseavanti/" target="_blank">
        <i class="bi bi-facebook" style="font-size: 19px;"></i>
      </a>
      <a href="https://www.youtube.com/penseavanti" target="_blank">
        <i class="bi bi-youtube" style="font-size: 19px;"></i>
      </a>
      <a href="https://www.tiktok.com" target="_blank">
        <i class="bi bi-tiktok" style="font-size: 19px;"></i>
      </a>
    </div>
  `;

  return socialMedias;
}
