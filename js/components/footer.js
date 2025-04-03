export function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer container';
  footer.innerHTML = `
    <p class="text-center mx-3 mt-5">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
      sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
      Ut wisi enim ad minim veniam, quis nostrud exerci.
    </p>
    <div class="row text-center mx-5">
      <div class="col-3">
        <img src="/assets/lets_encrypt.png" alt="logo let's encrypt" class="img-fluid" />
      </div>
      <div class="col-3">
        <img src="/assets/vtex-pci-200.png" alt="logo vtex certificado" class="img-fluid" />
      </div>
      <div class="col-3">
        <img src="/assets/avanti.png" alt="logo avanti" class="img-fluid" />
      </div>
      <div class="col-3">
        <img src="/assets/VTEX_Logo.png" alt="logo VTEX" class="img-fluid" />
      </div>
    </div>
  `;
  return footer;
}
