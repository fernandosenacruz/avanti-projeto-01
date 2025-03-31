import { createDepartmentMenu } from './departmentMenu.js';

export function createHeader() {
  const header = document.createElement('header');

  const nav = document.createElement('nav');
  nav.className = 'navbar navbar-expand-lg navbar-light';
  nav.innerHTML = `
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" 
              data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        </ul>
      </div>
    </div>
  `;

  const ul = nav.querySelector('ul');
  if (ul) {
    for (let i = 0; i < 10; i++) {
      ul.appendChild(createDepartmentMenu());
    }
  }

  header.appendChild(nav);
  return header;
}
