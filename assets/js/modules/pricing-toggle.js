/**
 * Pricing Toggle Module
 * Handles monthly vs annual billing switch with price recalculation.
 */
export function initPricingToggle() {
  const btnMonthly = document.getElementById('billingMonthly');
  const btnYearly = document.getElementById('billingYearly');
  const priceElements = document.querySelectorAll('[data-monthly]');
  const periodElements = document.querySelectorAll('.price-period');

  if (!btnMonthly || !btnYearly) return;

  function setBilling(isYearly) {
    btnMonthly.setAttribute('aria-pressed', String(!isYearly));
    btnYearly.setAttribute('aria-pressed', String(isYearly));

    priceElements.forEach(el => {
      const targetVal = isYearly ? el.dataset.yearly : el.dataset.monthly;
      el.textContent = `$${targetVal}`;
    });

    periodElements.forEach(el => {
      el.textContent = isYearly ? '/year' : '/month';
    });
  }

  btnMonthly.addEventListener('click', () => setBilling(false));
  btnYearly.addEventListener('click', () => setBilling(true));
}
