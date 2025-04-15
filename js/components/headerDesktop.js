import { createSearchBar } from './searchBar.js';
import { createDepartmentMenu } from './departmentMenu.js';

export function createHeaderDesktop() {
  const header = document.createElement('div');
  header.className = 'header-desktop';
  header.id = 'header-desktop';

  const logoAvanti = document.createElement('div');
  logoAvanti.className = 'logo';
  logoAvanti.innerHTML = `<img src="/assets/avanti.png" alt="Logo avanti">`;

  const searchBar = createSearchBar();
  searchBar.style.width = '579px';
  searchBar.style.marginLeft = '-100px';

  const wellcome = document.createElement('div');
  wellcome.className = 'd-flex';
  wellcome.style.width = '116px';
  wellcome.style.gap = '5px';
  wellcome.innerHTML = `
    <img src="/assets/wellcome-user-avatar.png" alt="User avatar" class="img-fluid">
    <div class="d-flex flex-column">
      <span style="font-size: 14px; margin-top: -5px;">Olá,</span>
      <span style="font-size: 14px; margin-top: -5px;">Nome cliente!</span>
    </div>
  `;

  const cart = document.createElement('div');
  cart.className = 'cart';
  cart.innerHTML = `<img src="/assets/cart.png" alt="Carrinho de compras">`;

  const d2 = document.createElement('div');
  d2.className = 'd-flex';
  d2.style.gap = '24px';
  d2.style.height = '28px';
  d2.appendChild(wellcome);
  d2.appendChild(cart);

  const d1 = document.createElement('div');
  d1.className = 'd-flex justify-content-between align-items-center mx-5 my-3';

  d1.appendChild(logoAvanti);
  d1.appendChild(searchBar);
  d1.appendChild(d2);

  const department = document.createElement('div');
  department.className = 'd-flex align-items-center mx-5';

  const toggleButton = document.createElement('button');
  toggleButton.className = 'nav-toggle';
  toggleButton.innerHTML = '&#9776 Todas as Categorias';

  const navItems = document.createElement('div');
  navItems.className = 'nav-items';
  navItems.style.display = 'none';

  for (let i = 0; i < 10; i++) {
    const styles = {
      gridContainer: 'width: 10rem;',
    };
    navItems.appendChild(createDepartmentMenu(styles));
  }

  toggleButton.addEventListener('click', (e) => {
    e.stopPropagation();
    if (navItems.style.display === 'none') {
      navItems.style.display = 'block';
      navItems.classList.add('nav-overlay-desktop');
    } else {
      navItems.style.display = 'none';
      navItems.classList.remove('nav-overlay-desktop');
    }
  });

  document.addEventListener('click', (e) => {
    if (!navItems.contains(e.target) && e.target !== toggleButton) {
      navItems.style.display = 'none';
      navItems.classList.remove('nav-overlay-desktop');
    }
  });

  const nav = document.createElement('nav');
  nav.className = 'custom-navbar';
  nav.appendChild(toggleButton);
  nav.appendChild(navItems);

  department.appendChild(nav);

  header.appendChild(d1);
  header.appendChild(department);

  return header;
}
