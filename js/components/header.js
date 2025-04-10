import { createDepartmentMenu } from './departmentMenu.js';
import { resizingIsLessThan } from '../utils/resizing.js';
import { createSearchBar } from './searchBar.js';

export function createHeader() {
  const header = document.createElement('header');
  header.className = 'header';

  const logoAvanti = document.createElement('div');
  logoAvanti.className = 'logo';
  logoAvanti.innerHTML = `<img src="/assets/avanti.png" alt="Logo avanti">`;

  const cart = document.createElement('div');
  cart.className = 'cart';
  cart.innerHTML = `<img src="/assets/cart.png" alt="Carrinho de compras">`;

  const toggleButton = document.createElement('button');
  toggleButton.className = 'nav-toggle';
  toggleButton.innerHTML = resizingIsLessThan(768)
    ? '&#9776;'
    : '&#9776; Todas as Categorias';

  const navItems = document.createElement('div');
  navItems.className = 'nav-items';
  navItems.style.display = 'none';

  for (let i = 0; i < 10; i++) {
    navItems.appendChild(createDepartmentMenu());
  }

  toggleButton.addEventListener('click', (e) => {
    e.stopPropagation();
    if (navItems.style.display === 'none') {
      navItems.style.display = 'block';
      navItems.classList.add('nav-overlay');
    } else {
      navItems.style.display = 'none';
      navItems.classList.remove('nav-overlay');
    }
  });

  document.addEventListener('click', (e) => {
    if (!navItems.contains(e.target) && e.target !== toggleButton) {
      navItems.style.display = 'none';
      navItems.classList.remove('nav-overlay');
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

  window.addEventListener('resize', () => {
    if (resizingIsLessThan(1024)) {
      toggleButton.innerHTML = '&#9776;';
    } else {
      toggleButton.innerHTML = '&#9776; Todas as Categorias';
    }
  });

  return header;
}
