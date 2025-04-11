export function createDiscountCoupon() {
  const coupon = document.createElement('div');
  coupon.className = 'discount-coupon container-auto';
  coupon.innerHTML = `
    <div class="d-flex flex-wrap justify-content-center align-itmes-center" style="min-height: 30px">
      <p class="fw-bold mb-0">
        Ganhe 
        <span class="price">R$10,00</span>
        de desconto no seu primeiro pedido.
      </p>

      <p class="fw-bold mb-0 mx-2">Utilze o cupom <span style="font-weight: normal;">DESCOCNTO10</span></p>
    </div>
  `;
  return coupon;
}
