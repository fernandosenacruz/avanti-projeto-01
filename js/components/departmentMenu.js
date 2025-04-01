export function createDepartmentMenu() {
  const deptBtn = document.createElement('button');
  deptBtn.className = 'dept-btn';
  deptBtn.textContent = 'Departamento';

  const grid = document.createElement('div');
  grid.className = 'department-grid';
  grid.style.display = 'none';
  grid.innerHTML = `
    <div class="grid-container">
      <a href="#">Categoria</a>
      <a href="#">Categoria</a>
      <a href="#">Categoria</a>
      <a href="#">Categoria</a>
      <a href="#">Categoria</a>
      <a href="#">Categoria</a>
      <a href="#">Categoria</a>
      <a href="#">Categoria</a>
      <a href="#">Categoria</a>
      <a href="#">Categoria</a>
      <a href="#">Categoria</a>
      <a href="#">Categoria</a>
      <a href="#">Categoria</a>
      <a href="#">Categoria</a>
      <a href="#">Categoria</a>
      <a href="#">Categoria</a>
      <a href="#">Categoria</a>
      <a href="#">Categoria</a>
      <a href="#">Categoria</a>
      <a href="#">Categoria</a>
      <a href="#">Categoria</a>
      <a href="#">Categoria</a>
      <a href="#">Categoria</a>
      <a href="#">Categoria</a>
      <a href="#">Categoria</a>
      <a href="#">Categoria</a>
      <a href="#">Categoria</a>
      <a href="#">Categoria</a>
      <a href="#">Categoria</a>
      <a href="#">Categoria</a>
    </div>
  `;

  function toggleGrid(e) {
    e.stopPropagation();
    document.querySelectorAll('.department-grid').forEach((el) => {
      if (el !== grid) {
        el.style.display = 'none';
      }
    });
    grid.style.display = grid.style.display === 'none' ? 'grid' : 'none';
  }

  function closeGrid(e) {
    if (!grid.contains(e.target) && e.target !== deptBtn) {
      grid.style.display = 'none';
    }
  }

  deptBtn.addEventListener('click', toggleGrid);
  document.addEventListener('click', closeGrid);

  const container = document.createElement('div');
  container.className = 'department-menu';
  container.appendChild(deptBtn);
  container.appendChild(grid);

  return container;
}
