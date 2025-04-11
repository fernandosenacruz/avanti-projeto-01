import { slugify } from '../utils/slugify.js';

/**
 *
 * @param {*} header string
 * @param {*} body [string]
 * @param {*} officeHours Optional [{ days: string, time: string }]
 */
export function createAccordion(header, body, officeHours = null) {
  const accordion = document.createElement('div');
  accordion.classList.add('accordion', 'w-100', 'accordion-institutional');
  const key = slugify(header);
  accordion.id = `accordion${key}`;

  const accordionItem = document.createElement('div');
  accordionItem.classList.add('accordion-item');

  const accordionHeader = document.createElement('h2');
  accordionHeader.classList.add('accordion-header');
  accordionHeader.id = `heading${header}`;

  const button = document.createElement('button');
  button.classList.add(
    'accordion-button',
    'collapsed',
    'd-flex',
    'justify-content-between',
    'align-items-center',
    'fw-bold'
  );
  button.type = 'button';
  button.setAttribute('data-bs-toggle', 'collapse');
  button.setAttribute('data-bs-target', `#collapse${key}`);
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-controls', `collapse${key}`);
  button.innerHTML = header;
  button.style.backgroundColor = '#f5f5f5';

  const icon = document.createElement('i');
  icon.classList.add('fa-solid', 'fa-plus', 'icon-accordion');

  button.appendChild(icon);
  accordionHeader.appendChild(button);
  accordionItem.appendChild(accordionHeader);

  const collapseDiv = document.createElement('div');
  collapseDiv.id = `collapse${key}`;
  collapseDiv.classList.add('accordion-collapse', 'collapse', 'w-100', 'p-3');
  collapseDiv.setAttribute('aria-labelledby', `heading${key}`);
  collapseDiv.setAttribute('data-bs-parent', `#${key}`);

  const bodyContent = document.createElement('div');
  bodyContent.innerHTML = body.join('<br>');
  bodyContent.style.fontSize = '12px';

  if (officeHours && officeHours.length > 0) {
    const officeHoursContent = document.createElement('div');
    officeHoursContent.style.fontSize = '12px';
    officeHoursContent.style.marginTop = '5px';
    officeHours.forEach((officeHour) => {
      const officeHourElement = document.createElement('p');
      officeHourElement.innerHTML += `
        ${officeHour.days}: ${officeHour.time}
      `;
      officeHourElement.style.margin = '0';
      officeHoursContent.appendChild(officeHourElement);
    });
    bodyContent.appendChild(officeHoursContent);
  }

  collapseDiv.appendChild(bodyContent);
  accordionItem.appendChild(collapseDiv);
  accordion.appendChild(accordionItem);

  return accordion;
}
