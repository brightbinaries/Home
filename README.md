# Brightbinaries Web Studio

> **Affordable, handcrafted websites, lightning cloud hosting, and ongoing concierge care.**

Brightbinaries is a modern, modular web studio application engineered for high conversion, sub-second performance, and accessible user experiences across desktop, tablet, and mobile devices.

---

## 📁 Structured Directory Layout

The codebase is organized into a clean, scalable, separation-of-concerns architecture:

```text
Brightbinaries/
├── index.html                   # Semantic HTML5 entry point with OpenGraph & accessibility tags
├── favicon.svg                  # Vector brand icon and browser shortcut
├── README.md                    # Project documentation & architecture overview
└── assets/
    ├── css/
    │   ├── variables.css        # Design tokens: palette, typography stacks, elevations, radiuses
    │   ├── base.css             # CSS reset, fluid typography with clamp(), focus states, containers
    │   ├── components.css       # Buttons, cards, interactive browser mockup, FAQ accordion, forms
    │   ├── layout.css           # Sticky navigation, hero grid, section rhythms, footer, media queries
    │   └── main.css             # Core stylesheet importing modular layers in ITCSS order
    ├── js/
    │   ├── modules/
    │   │   ├── navigation.js    # Mobile drawer menu, ARIA state, and sticky header scroll effect
    │   │   ├── preview-switcher.js # Interactive live website template showcase (Bakery, Clinic, etc.)
    │   │   ├── pricing-toggle.js   # Monthly vs Annual billing toggle with 20% discount calculations
    │   │   └── quote-form.js    # Accessible validation, plan pre-selection, and alert feedback
    │   └── app.js               # Application entrypoint registering modules & dynamic footer date
    └── images/
        └── favicon.svg          # High-resolution brand SVG icon
```

---

## 🎨 UI & UX Improvements

1. **Brand Identity & Elevated Aesthetic**:
   - Replaced basic flat styling with an elevated **Electric Cobalt & Warm Amber** visual system.
   - Glassmorphism sticky header (`backdrop-filter: blur(14px)`) with dynamic elevation on scroll.
   - Layered drop shadows and smooth micro-interactions on hover and active states.

2. **Interactive Live Browser Mockup Showcase**:
   - Realistic browser window with macOS-style traffic light controls and SSL security badge.
   - Live interactive industry switcher for **Bakery**, **Clinic**, **Builder**, and **Enterprise**.
   - Dynamic real-time updates of headlines, subtext, color palettes, CTA buttons, and mini service cards.

3. **Value Proposition & Comparison Matrix**:
   - Clear breakdown of **Brightbinaries vs Traditional Agencies vs DIY Site Builders (Wix/Squarespace)**.
   - Highlighting fixed upfront pricing, 7-day turnaround, and included human maintenance.

4. **Interactive Pricing Switcher**:
   - Seamless monthly and annual billing switcher with animated "Save 20%" badge.
   - "Choose Plan" buttons on each pricing card automatically scroll down and pre-select that tier in the quote request form.

5. **Accessibility & Modern Web Standards**:
   - Conforms to modern form guidance (`validate-input-after-interaction`): uses `:user-invalid` and `:user-valid` styling with field hints placed above inputs so mobile autocompletes don't obscure them.
   - Accessible `<details>` and `<summary>` accordion for FAQs with rotating chevron indicator and keyboard support.
   - Full keyboard navigation, high-contrast `:focus-visible` rings, and ARIA attributes (`aria-expanded`, `aria-describedby`, `aria-live`, `aria-invalid`).

---

## 🚀 Running Locally

Because Brightbinaries uses native ES6 JavaScript modules (`type="module"`), serve the directory with any standard local HTTP server:

```bash
# Using Python 3:
python3 -m http.server 8000

# Using Node / npx:
npx serve .
```

Then open `http://localhost:8000` in your web browser.
