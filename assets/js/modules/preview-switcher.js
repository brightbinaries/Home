/**
 * Preview Switcher Module
 * Powers the interactive live website mockup showcase in the Hero section.
 */
export function initPreviewSwitcher() {
  const showcaseData = [
    {
      id: 'bakery',
      tag: 'Artisan Bakery',
      url: 'www.sunrisebakery.com',
      brand: 'Sunrise Bakery',
      badge: 'Fresh Daily Batch 🥐',
      title: 'Warm sourdough, baked fresh every dawn.',
      text: 'Order our signature loaves and morning pastries online for contactless curbside pickup.',
      btnText: 'Order for Pickup',
      btnBg: '#B45309',
      bg: '#FFFBEB',
      fg: '#451A03',
      cards: [
        { title: 'Sourdough Loaves', desc: 'Fermented 36 hrs with stoneground flour' },
        { title: 'Morning Pastries', desc: 'Butter croissants, pain au chocolat & buns' },
        { title: 'Local Delivery', desc: 'Delivered warm across downtown by 8 AM' }
      ]
    },
    {
      id: 'clinic',
      tag: 'Health & Dental Clinic',
      url: 'www.greenleafhealth.com',
      brand: 'Greenleaf Dental',
      badge: 'Accepting New Patients 🩺',
      title: 'Modern family care that listens first.',
      text: 'Experience gentle preventive dentistry and telehealth bookings in under 60 seconds.',
      btnText: 'Book a Consultation',
      btnBg: '#0F766E',
      bg: '#F0FDFA',
      fg: '#134E4A',
      cards: [
        { title: 'Family Dentistry', desc: 'Comprehensive exams, cleanings & hygiene' },
        { title: 'Clear Aligners', desc: 'Discreet orthodontic solutions with 3D scans' },
        { title: 'Emergency Care', desc: 'Same-day appointments for urgent cases' }
      ]
    },
    {
      id: 'builder',
      tag: 'Architectural Builders',
      url: 'www.northstonebuild.com',
      brand: 'Northstone Construction',
      badge: 'Licensed & Bonded 🏗️',
      title: 'Enduring commercial & residential builds.',
      text: 'Architectural precision, transparent timelines, and fixed-price craftsmanship for over 15 years.',
      btnText: 'Request Site Estimate',
      btnBg: '#1D4ED8',
      bg: '#F8FAFC',
      fg: '#0F172A',
      cards: [
        { title: 'Turnkey Builds', desc: 'Complete architecture to occupancy management' },
        { title: 'Commercial Fitouts', desc: 'Bespoke retail, office, and restaurant builds' },
        { title: 'Eco Renovations', desc: 'LEED certified energy-efficient modernizations' }
      ]
    },
    {
      id: 'enterprise',
      tag: 'Enterprise SaaS & Cloud',
      url: 'www.meridiangroup.com',
      brand: 'Meridian Group',
      badge: 'SOC2 Type II Certified 🛡️',
      title: 'Unified infrastructure for global teams.',
      text: 'Connect distributed operations across 14 countries with high-availability cloud architecture.',
      btnText: 'Request Executive Briefing',
      btnBg: '#6D28D9',
      bg: '#FAF5FF',
      fg: '#3B0764',
      cards: [
        { title: '99.99% Uptime SLA', desc: 'Multi-region failover and active replication' },
        { title: 'Enterprise SSO', desc: 'SAML 2.0, Okta, Azure AD and RBAC built-in' },
        { title: 'Dedicated Support', desc: '24/7 dedicated engineering pod & TAM' }
      ]
    }
  ];

  const screen = document.getElementById('screen');
  const urlEl = document.getElementById('mockupUrl');
  const tagEl = document.getElementById('mockupTag');
  const brandEl = document.getElementById('mockupBrand');
  const titleEl = document.getElementById('mockupTitle');
  const textEl = document.getElementById('mockupText');
  const btnEl = document.getElementById('mockupBtn');
  const cardsContainer = document.getElementById('mockupCards');
  const switcherButtons = document.querySelectorAll('.switcher-btn');

  if (!screen || !switcherButtons.length) return;

  function renderShowcase(index) {
    const data = showcaseData[index];
    if (!data) return;

    // Update screen surface
    screen.style.backgroundColor = data.bg;
    screen.style.color = data.fg;

    // Update browser bar
    if (urlEl) urlEl.textContent = data.url;

    // Update content elements
    if (tagEl) tagEl.textContent = data.badge;
    if (brandEl) brandEl.textContent = data.brand;
    if (titleEl) titleEl.textContent = data.title;
    if (textEl) textEl.textContent = data.text;

    // Update CTA button
    if (btnEl) {
      btnEl.textContent = data.btnText;
      btnEl.style.backgroundColor = data.btnBg;
    }

    // Update mini feature cards
    if (cardsContainer) {
      cardsContainer.innerHTML = data.cards.map(card => `
        <div class="screen-card-item">
          <div class="item-title">${card.title}</div>
          <div class="item-desc">${card.desc}</div>
        </div>
      `).join('');
    }

    // Update button states
    switcherButtons.forEach((btn, idx) => {
      btn.setAttribute('aria-pressed', String(idx === index));
    });
  }

  switcherButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const targetIndex = btn.dataset.index !== undefined ? parseInt(btn.dataset.index, 10) : index;
      renderShowcase(targetIndex);
    });
  });

  // Initial render with first item (Bakery)
  renderShowcase(0);
}
