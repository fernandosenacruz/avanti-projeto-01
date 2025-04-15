import { resizingIsLessThan } from '../utils/resizing.js';
import { createHeaderMobile } from './headerMobile.js';
import { createHeaderDesktop } from './headerDesktop.js';

export function createHeader() {
  const header = document.createElement('header');
  header.className = 'header';
  header.id = 'header';

  const headerMobile = createHeaderMobile();
  const headerDesktop = createHeaderDesktop();

  function render() {
    header.innerHTML = ``;

    if (resizingIsLessThan(1279)) {
      header.appendChild(headerMobile);
    } else {
      header.appendChild(headerDesktop);
    }
  }

  render();

  window.addEventListener('resize', () => {
    render();
  });

  return header;
}
