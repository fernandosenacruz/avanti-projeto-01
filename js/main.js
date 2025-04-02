import { createDiscountCoupon } from './components/discountCoupon.js';
import { createHeader } from './components/header.js';
import { createBanner } from './components/banner.js';
import { createCarrousel } from './components/carrousel.js';
import { createFooter } from './components/footer.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  if (!app) return;

  app.appendChild(createDiscountCoupon());
  app.appendChild(createHeader());
  app.appendChild(createBanner());
  app.appendChild(createCarrousel());
  app.appendChild(createFooter());
});
