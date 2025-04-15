import { createDepartmentMenu } from './departmentMenu.js';
import { createSearchBar } from './searchBar.js';

export function createHeaderMobile() {
  const header = document.createElement('div');
  header.className = 'header-mobile';
  header.id = 'header-mobile';

  const logoAvanti = document.createElement('div');
  logoAvanti.className = 'logo';
  logoAvanti.innerHTML = `<img src="/assets/avanti.png" alt="Logo avanti">`;

  const cart = document.createElement('div');
  cart.className = 'cart';
  cart.innerHTML = `<img src="/assets/cart.png" alt="Carrinho de compras">`;

  const toggleButton = document.createElement('button');
  toggleButton.className = 'nav-toggle';
  toggleButton.innerHTML = '&#9776;';

  const navItems = document.createElement('div');
  navItems.className = 'nav-items';
  navItems.style.display = 'none';

  for (let i = 0; i < 10; i++) {
    navItems.appendChild(createDepartmentMenu(null, true));
  }

  toggleButton.addEventListener('click', (e) => {
    e.stopPropagation();
    if (navItems.style.display === 'none') {
      navItems.style.display = 'block';
      navItems.classList.add('nav-overlay-mobile');
    } else {
      navItems.style.display = 'none';
      navItems.classList.remove('nav-overlay-mobile');
    }
  });

  document.addEventListener('click', (e) => {
    if (!navItems.contains(e.target) && e.target !== toggleButton) {
      navItems.style.display = 'none';
      navItems.classList.remove('nav-overlay-mobile');
    }
  });

  const nav = document.createElement('nav');
  nav.className = 'custom-navbar';
  nav.appendChild(toggleButton);
  nav.appendChild(navItems);

  header.appendChild(nav);
  header.appendChild(logoAvanti);
  header.appendChild(cart);
  header.appendChild(createSearchBar());

  return header;
}
