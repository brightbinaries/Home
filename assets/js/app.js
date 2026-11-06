/**
 * Brightbinaries Web Studio - Main Application Entrypoint
 */

import { initNavigation } from './modules/navigation.js';
import { initPreviewSwitcher } from './modules/preview-switcher.js';
import { initPricingToggle } from './modules/pricing-toggle.js';
import { initQuoteForm } from './modules/quote-form.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize modular controllers
  initNavigation();
  initPreviewSwitcher();
  initPricingToggle();
  initQuoteForm();

  // Dynamic copyright year
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
