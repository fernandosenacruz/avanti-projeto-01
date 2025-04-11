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
    'gap-1',
    'mx-1'
  );

  const titleElement = document.createElement('h4');
  titleElement.style.fontWeight = 'bold';
  titleElement.style.fontSize = '12px';
  titleElement.innerHTML = title;

  container.appendChild(titleElement);

  links.forEach((link, index) => {
    const linkElement = document.createElement('h5');
    linkElement.style.fontSize = '12px';

    if (container.children[0].innerHTML === 'Atendimento') {
      const [boldText, normalText] = link.split(':');
      linkElement.innerHTML = `
        <spam class="fw-bold">${boldText}</spam>: ${normalText}
      `;
      container.appendChild(linkElement);

      if (officeHours && officeHours.length > 0 && index === links.length - 1) {
        officeHours.forEach((officeHour) => {
          const officeHoursElement = document.createElement('p');
          officeHoursElement.innerHTML += `
            ${officeHour.days}: ${officeHour.time}
          `;
          officeHoursElement.style.fontSize = '12px';
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
