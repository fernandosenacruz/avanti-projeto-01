import { createProductLaunch } from './productLaunch.js';

export function createDepartmentMenu(styles = null, isMobile = false) {
  const deptBtn = document.createElement('button');
  deptBtn.className = 'dept-btn';
  deptBtn.textContent = 'Departamento';

  const grid = document.createElement('div');
  grid.className = 'department-grid';
  grid.style.display = 'none';

  const gridContainer = document.createElement('div');
  gridContainer.className = 'grid-container';

  for (let i = 1; i <= 30; i++) {
    const item = document.createElement('a');
    item.href = '#';
    item.id = `item-${i}`;
    if (styles?.gridContainer) {
      item.style = styles.gridContainer;
    }
    item.textContent = 'Categoria';
    gridContainer.appendChild(item);
  }
  grid.appendChild(gridContainer);

  function toggleGrid(e) {
    e.stopPropagation();
    document.querySelectorAll('.department-grid').forEach((el) => {
      if (el !== grid) {
        el.style.display = 'none';
      }
    });
    grid.style.display =
      grid.style.display === 'none' ? (isMobile ? 'grid' : 'flex') : 'none';
  }

  function closeGrid(e) {
    if (!grid.contains(e.target) && e.target !== deptBtn) {
      grid.style.display = 'none';
    }
  }

  deptBtn.addEventListener('click', toggleGrid);
  document.addEventListener('click', closeGrid);

  if (!isMobile) {
    const card = createProductLaunch();
    grid.appendChild(card);
  }

  const container = document.createElement('div');
  container.className = 'department-menu';
  container.appendChild(deptBtn);
  container.appendChild(grid);

  return container;
}
