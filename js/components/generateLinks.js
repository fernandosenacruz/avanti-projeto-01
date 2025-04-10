/**
 *
 * @param {*} title string
 * @param {*} links array of strings
 * @param {*} officeHours Optional [{ days: string, time: string }]
 */
export function generateLinks(title, links, officeHours = null) {
  const container = document.createElement('div');
  container.classList.add(
    'd-flex',
    'flex-column',
    'justify-content-center',
    'align-items-center',
    'gap-1',
    'mt-3'
  );

  const titleElement = document.createElement('h4');
  titleElement.style.fontWeight = 'bold';
  titleElement.innerHTML = title;

  container.appendChild(titleElement);

  links.forEach((link) => {
    const linkElement = document.createElement('h5');

    if (container.children[0].innerHTML === 'Atendimento') {
      const [boldText, normalText] = link.split(':');
      linkElement.innerHTML = `
        <spam style"fw-bold">${boldText}</spam>: ${normalText}
      `;
      container.appendChild(linkElement);

      if (officeHours && officeHours.length > 0 && officeHours.length - 1) {
        officeHours.forEach((officeHour) => {
          const officeHoursElement = document.createElement('p');
          officeHoursElement.innerHTML += `
            ${officeHour.days}: ${officeHour.time}
          `;
          container.appendChild(officeHoursElement);
        });
      }
    } else {
      linkElement.innerHTML = link;
      container.appendChild(linkElement);
    }
  });

  return container;
}
