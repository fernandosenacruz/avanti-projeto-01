export function createSearchBar() {
  const container = document.createElement('div');
  container.className = 'search-bar-container';

  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.className = 'search-input';
  searchInput.placeholder = 'Digite o que você procura';

  const iconSpan = document.createElement('span');
  iconSpan.className = 'search-icon';
  iconSpan.innerHTML = `<i class="bi bi-search"></i>`;

  const messageEl = document.createElement('p');
  messageEl.className = 'search-message';

  container.appendChild(searchInput);
  container.appendChild(iconSpan);
  container.appendChild(messageEl);

  iconSpan.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query !== '') {
      messageEl.textContent = `Você buscou por: '${query}'`;
    } else {
      messageEl.textContent = '';
    }
  });

  return container;
}
