export function createDiscountCoupon() {
  const coupon = document.createElement('div');
  coupon.className = 'discount-coupon container';
  coupon.innerHTML = `
    <div class="row justify-content-center g-1">
      <p class="col-auto">Ganhe </p>
      <span class="price col-auto">R$10,00</span>
      <p class="col-auto">de desconto no seu primeiro pedido.</p>
    </div>
    <div class="row justify-content-center g-1">
      <p class="col-auto">Utilze o cupom</p>
      <span class="col-auto">DESCOCNTO10</span>
    </div>
  `;
  return coupon;
}
