/* FredDriver — small progressive-enhancement script (no dependencies) */
(function () {
  'use strict';

  // --- Mobile menu toggle ---
  var toggle = document.querySelector('.menu-toggle');
  var mobileNav = document.getElementById('mobile-nav');

  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      mobileNav.hidden = open;
    });

    // Close the menu after tapping a link
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        mobileNav.hidden = true;
      });
    });
  }

  // --- Current year in footer ---
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // --- Scroll reveal: tag sections/cards, animate in on view ---
  var revealTargets = document.querySelectorAll(
    '.section-head, .card, .feature, .step, .vehicle-copy, .vehicle-media, .areas-copy, .areas-list, .cta-inner'
  );
  revealTargets.forEach(function (el, i) {
    el.setAttribute('data-reveal', '');
    el.style.transitionDelay = (Math.min(i % 4, 3) * 70) + 'ms';
  });

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    // Fallback: show everything
    revealTargets.forEach(function (el) { el.classList.add('in'); });
  }
})();
