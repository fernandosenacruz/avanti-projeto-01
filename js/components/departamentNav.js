export function createDepartmentNav() {
  const nav = document.createElement('nav');
  nav.className = 'department-nav';

  for (let i = 1; i <= 8; i++) {
    const navButton = document.createElement('button');
    navButton.className = 'nav-button';
    navButton.id = `nav-button-${i}`;
    navButton.textContent = `Departamento`;

    nav.appendChild(navButton);
  }

  return nav;
}
