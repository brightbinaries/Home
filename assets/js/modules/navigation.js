/**
 * Navigation Module
 * Handles sticky header effects and accessible mobile menu navigation.
 */
export function initNavigation() {
  const header = document.querySelector('.site-header');
  const menuBtn = document.getElementById('menuBtn');
  const mobileNav = document.getElementById('mobileNav');

  if (!menuBtn || !mobileNav) return;

  // Toggle mobile navigation
  function toggleMenu(forceState) {
    const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
    const nextState = typeof forceState === 'boolean' ? forceState : !isExpanded;

    menuBtn.setAttribute('aria-expanded', String(nextState));
    mobileNav.classList.toggle('is-open', nextState);

    if (nextState) {
      const firstLink = mobileNav.querySelector('a');
      if (firstLink) firstLink.focus();
    }
  }

  menuBtn.addEventListener('click', () => toggleMenu());

  // Close when clicking any nav link
  mobileNav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      toggleMenu(false);
    }
  });

  // Close on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuBtn.getAttribute('aria-expanded') === 'true') {
      toggleMenu(false);
      menuBtn.focus();
    }
  });

  // Sticky header scroll elevation
  window.addEventListener('scroll', () => {
    if (!header) return;
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}
