import { createDiscountCoupon } from './components/discountCoupon.js';
import { createHeader } from './components/header.js';
import { createBanner } from './components/banner.js';
import { createCarrousel } from './components/carrousel.js';
import { createCupCard } from './components/cupCard.js';
import { createCupSection } from './components/cupSection.js';
import { createBannerAvanti } from './components/bannerAvanti.js';
import { createNewsletter } from './components/newsletter.js';
import { createFooter } from './components/footer.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  if (!app) return;

  app.appendChild(createDiscountCoupon());
  app.appendChild(createHeader());
  app.appendChild(createBanner());
  app.appendChild(createCarrousel());
  app.appendChild(createCupCard());
  app.appendChild(createCupSection());
  app.appendChild(createCupCard());
  app.appendChild(createBannerAvanti());
  app.appendChild(createNewsletter());
  app.appendChild(createFooter());
});
