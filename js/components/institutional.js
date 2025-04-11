import { createSocialMedias } from './socialMedias.js';
import { createPaymentMethods } from './paymentMethods.js';
import { resizingIsLessThan } from '../utils/resizing.js';
import { createAccordion } from './accordion.js';
import {
  helpMockedData,
  institutionalMockedData,
  serviceMockedData,
} from '../data.js';
import { generateLinks } from './generateLinks.js';

export function createInstitutional() {
  const institucional = document.createElement('section');
  institucional.classList.add(
    'd-flex',
    'flex-column',
    'justify-content-center',
    'align-items-center',
    'institutional'
  );

  const wrapper = document.createElement('div');
  wrapper.classList.add(
    'd-flex',
    'justify-content-center',
    'w-100',
    'my-5',
    'gap-5',
    'institutional-wrapper'
  );
  wrapper.appendChild(createSocialMedias());

  function renderLinksContainer() {
    const container = document.createElement('div');
    container.id = 'links';

    if (resizingIsLessThan(768)) {
      container.appendChild(
        createAccordion(
          institutionalMockedData.header,
          institutionalMockedData.body
        )
      );
      container.appendChild(
        createAccordion(helpMockedData.header, helpMockedData.body)
      );
      container.appendChild(
        createAccordion(
          serviceMockedData.header,
          serviceMockedData.body,
          serviceMockedData.officeHours
        )
      );
    } else {
      container.classList.add(
        'd-flex',
        'justify-content-center',
        'gap-5',
        'mt-3'
      );

      container.appendChild(
        generateLinks(
          institutionalMockedData.header,
          institutionalMockedData.body
        )
      );
      container.appendChild(
        generateLinks(helpMockedData.header, helpMockedData.body)
      );
      container.appendChild(
        generateLinks(
          serviceMockedData.header,
          serviceMockedData.body,
          serviceMockedData.officeHours
        )
      );
    }

    return container;
  }

  wrapper.appendChild(renderLinksContainer());

  window.addEventListener('resize', () => {
    const old = wrapper.querySelector('#links');
    if (!old) return;
    const fresh = renderLinksContainer();
    wrapper.replaceChild(fresh, old);
  });

  institucional.appendChild(wrapper);
  institucional.appendChild(createPaymentMethods());
  return institucional;
}
