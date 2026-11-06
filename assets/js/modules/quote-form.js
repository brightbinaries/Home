/**
 * Quote Form Module
 * Handles plan pre-selection from pricing CTAs, form validation, and accessible feedback.
 */
export function initQuoteForm() {
  const form = document.getElementById('quoteForm');
  const planSelect = document.getElementById('quotePlan');
  const alertBox = document.getElementById('quoteAlert');
  const planButtons = document.querySelectorAll('[data-plan]');

  // Pre-select plan when user clicks any "Choose Plan" CTA
  planButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetPlan = button.getAttribute('data-plan');
      if (planSelect && targetPlan) {
        planSelect.value = targetPlan;
      }
    });
  });

  if (!form) return;

  function setFieldError(fieldId, errorMessage) {
    const errorEl = document.getElementById(`${fieldId}-error`);
    const inputEl = document.getElementById(fieldId);

    if (errorEl) {
      errorEl.textContent = errorMessage;
      if (errorMessage) {
        errorEl.classList.add('is-visible');
        if (inputEl) inputEl.setAttribute('aria-invalid', 'true');
      } else {
        errorEl.classList.remove('is-visible');
        if (inputEl) inputEl.removeAttribute('aria-invalid');
      }
    }
  }

  // Clear errors on field input
  ['quoteName', 'quoteEmail', 'quoteMessage'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', () => {
        setFieldError(id, '');
      });
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    const nameInput = document.getElementById('quoteName');
    const emailInput = document.getElementById('quoteEmail');
    const messageInput = document.getElementById('quoteMessage');
    const submitBtn = form.querySelector('button[type="submit"]');

    const nameVal = nameInput ? nameInput.value.trim() : '';
    const emailVal = emailInput ? emailInput.value.trim() : '';
    const messageVal = messageInput ? messageInput.value.trim() : '';

    // Validate Name
    if (!nameVal) {
      setFieldError('quoteName', 'Please provide your full name.');
      isValid = false;
    } else {
      setFieldError('quoteName', '');
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailVal || !emailRegex.test(emailVal)) {
      setFieldError('quoteEmail', 'Please enter a valid email address (e.g., name@domain.com).');
      isValid = false;
    } else {
      setFieldError('quoteEmail', '');
    }

    // Validate Message
    if (!messageVal || messageVal.length < 10) {
      setFieldError('quoteMessage', 'Please tell us a bit more about your project (at least 10 characters).');
      isValid = false;
    } else {
      setFieldError('quoteMessage', '');
    }

    if (!isValid) {
      const firstInvalid = form.querySelector('[aria-invalid="true"]');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // Simulate submission state
    const originalBtnText = submitBtn ? submitBtn.innerHTML : 'Send my request';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="btn-icon" style="animation: spin 1s linear infinite;" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="10" stroke-width="4" stroke-opacity="0.25"></circle>
          <path d="M4 12a8 8 0 018-8" stroke-width="4"></path>
        </svg>
        Sending quote request...
      `;
    }

    setTimeout(() => {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }

      if (alertBox) {
        const selectedPlan = planSelect ? planSelect.value : 'selected plan';
        alertBox.innerHTML = `
          <svg style="width: 22px; height: 22px; flex-shrink: 0;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <div>
            <strong>Thank you, ${nameVal}!</strong> We received your request for the <strong>${selectedPlan}</strong>. Our lead designer will email your custom proposal within one business day.
          </div>
        `;
        alertBox.className = 'form-alert success is-shown';
        alertBox.focus();
      }

      form.reset();
    }, 600);
  });
}
