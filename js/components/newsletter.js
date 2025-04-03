export function createNewsletter() {
  const form = document.createElement('section');
  form.style.marginBottom = '2rem';

  form.innerHTML = `
    <h2 class="fw-bold fs-5 mt-5 mb-4 text-center">
      Cadastre-se na nossa <span class="text-primary fw-bold">newsletter</span>
    </h2>
    <form class="newsletter-form mx-5 my-1 px-4 py-5 rounded-3">
      <fieldset>
        <div class="d-flex flex-column flex-lg-row gap-1">
          <div class="flex-fill mb-3 newsletter-input">
            <input 
              type="text" 
              class="form-control" 
              id="inputName" 
              aria-describedby="nameHelp"
              required
              placeholder="Digite seu nome"
            >
          </div>
          <div class="flex-fill mb-3 newsletter-input">
            <input 
              type="email" 
              class="form-control" 
              id="inputEmail" 
              aria-describedby="emailHelp"
              required
              placeholder="Digite seu e-mail"
            >
          </div>
          <div class="flex-fill mb-3 form-check newsletter-agree">
            <input type="checkbox" class="form-check-input" id="inputCheckAgree" required>
            <label class="form-check-label" for="inputCheckAgree" style="font-size: 12px">
              Estou de acordo com a 
              <a href="#" class="text-decoration-underline" style="color: black">Política de Privacidade</a>
            </label>
          </div>
          <div class="flex-fill mb-3">
            <button type="submit" class="btn btn-primary w-100 nl-btn">Cadastrar</button>
          </div>
        </div>
      </fieldset>
    </form>
  `;

  return form;
}
