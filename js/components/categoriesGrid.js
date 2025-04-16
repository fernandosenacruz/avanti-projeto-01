import { createProductLaunch } from './productLaunch.js';

/**
 *
 * @param {*} departmentName string
 * @param {*} categoryName string
 * @returns {HTMLElement}
 */
export function createCategoriesGrid(departmentName, categoryName) {
  const grid = document.createElement('div');
  grid.className = 'department-grid-desktop ms-3';
  grid.style.display = 'none';

  const gridContainer = document.createElement('div');
  gridContainer.className = 'grid-container-desktop m-3';

  const box = document.createElement('div');
  box.className = 'd-flex flex-column ps-3 pe-5 my-3';
  box.style.width = '70%';

  const departmentTitle = document.createElement('h5');
  departmentTitle.className = 'department-title';
  departmentTitle.textContent = departmentName;
  box.appendChild(departmentTitle);

  const navItmes = document.createElement('div');
  navItmes.className = 'nav-items-desktop';

  for (let i = 1; i <= 20; i++) {
    const item = document.createElement('a');
    item.href = '#';
    item.id = `item-${i}`;
    item.textContent = categoryName;
    item.style.color = 'black';
    item.style.textDecoration = 'none';
    navItmes.appendChild(item);
  }

  box.appendChild(navItmes);

  const gidCard = createProductLaunch();

  gridContainer.appendChild(box);
  gridContainer.appendChild(gidCard);
  grid.appendChild(gridContainer);

  return grid;
}
