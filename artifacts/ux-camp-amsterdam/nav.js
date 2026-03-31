/* ============================================================
   UX Camp Amsterdam 2026 — nav.js
   Handles: hamburger toggle, mobile menu, dropdown hover on touch
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ── Hamburger toggle ──────────────────────────────────── */
  var hamburger = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.toggle('is-open');
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  /* ── Close mobile menu on outside click ────────────────── */
  document.addEventListener('click', function (e) {
    if (!mobileMenu || !hamburger) return;
    if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
      mobileMenu.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });

});
