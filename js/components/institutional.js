import { createSocialMedias } from './socialMedias.js';
import { createPaymentMethods } from './paymentMethods.js';
import {
  resizingIsGreaterThan,
  resizingIsLessThan,
} from '../utils/resizing.js';
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
  wrapper.classList.add('d-flex', 'justify-content-center', 'w-100', 'mt-5');
  wrapper.appendChild(createSocialMedias());

  const links = document.createElement('div');
  links.id = 'links';
  links.classList.add('d-flex', 'justify-content-center');

  const institucionalLinks = document.createElement('div');
  institucionalLinks.id = 'institutionalLinks';
  institucionalLinks.appendChild(
    generateLinks('Institucional', [
      'Sobre nós',
      'Nossas lojas',
      'Privacidade e segurança',
      'Termos e Condições',
    ])
  );

  const helpLinks = document.createElement('div');
  helpLinks.id = 'helpLinks';
  helpLinks.appendChild(
    generateLinks('Central de ajuda', [
      'Fale conosco',
      'Frete e entrega',
      'Trocas e devoluções',
      'Forma de pagamento',
      'FAQ',
    ])
  );

  const serviceLinks = document.createElement('div');
  serviceLinks.id = 'serviceLinks';
  serviceLinks.appendChild(
    generateLinks(
      'Atendimento',
      [
        'Telefone: (00) 1234-5678',
        'E-mail: exemplo@exemplo.com.br',
        'Horas de atendimento:',
      ],
      [
        { days: 'Segunda a Sexta', time: '08:00 às 18:00' },
        { days: 'Sábado', time: '08:00 às 12:00' },
      ]
    )
  );

  links.appendChild(institucionalLinks);
  links.appendChild(helpLinks);
  links.appendChild(serviceLinks);

  wrapper.appendChild(links);
  institucional.appendChild(wrapper);
  institucional.appendChild(createPaymentMethods());

  window.addEventListener('resize', () => {
    if (resizingIsGreaterThan(390) && resizingIsLessThan(768)) {
      const oldLinks = document.getElementById('#links');
      if (oldLinks) {
        const newLinks = document.createElement('div');
        newLinks.id = 'links';
        newLinks.innerHTML = `<h4>Trocou</h4>`;
        wrapper.replaceChild(newLinks, oldLinks);
      }
    }
    if (resizingIsGreaterThan(768)) {
      const oldLinks = document.getElementById('#links');
      if (oldLinks) {
        const newLinks = document.createElement('div');
        newLinks.id = 'links';
        newLinks.appendChild(institucionalLinks);
        newLinks.appendChild(helpLinks);
        newLinks.appendChild(serviceLinks);
        wrapper.replaceChild(newLinks, oldLinks);
      }
    }
  });

  return institucional;
}
