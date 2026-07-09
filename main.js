/* ==========================================================================
   CHARLES THOMAS REAL ESTATE — SITE SCRIPT
   ========================================================================== */

document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mobilePanel = document.getElementById('mobilePanel');
navToggle.addEventListener('click', () => {
  const open = mobilePanel.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
});
mobilePanel.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  mobilePanel.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
}));

// Lead form — placeholder submit handler.
// TODO: once the Zoho CRM webform / API endpoint is ready, replace this
// with a real POST request so submissions create a lead automatically.
const form = document.getElementById('leadForm');
const status = document.getElementById('formStatus');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  status.classList.add('show');
  form.reset();
});

// Scroll reveal for elements marked with the .reveal class
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target); }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in'));
}
