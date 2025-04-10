export function createPaymentMethods() {
  const payments = document.createElement('div');
  payments.id = 'payments';
  payments.classList.add(
    'd-flex',
    'flex-wrap',
    'justify-content-center',
    'align-items-center',
    'gap-3',
    'mb-5'
  );
  payments.style.width = '65%';

  payments.innerHTML = `
    <img src="/assets/amex.png" alt="Amex icon">
    <img src="/assets/mastercard.png" alt="Mastercard icon">
    <img src="/assets/visa.png" alt="Visa icon">
    <img src="/assets/hipercard.png" alt="Hipercard icon">
    <img src="/assets/elo.png" alt="Elo icon">
    <img src="/assets/diners.png" alt="Diners icon">
    <img src="/assets/paypal.png" alt="Paypal icon">
    <img src="/assets/maestro.png" alt="Maestro icon">
    <img src="/assets/barscode.png" alt="Barscode icon">
  `;

  return payments;
}
