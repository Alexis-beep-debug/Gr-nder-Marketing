/* ─── Preisrechner (Hero) ────────────────────────────────────────── */
function updatePrices() {
  var weightEl = document.getElementById('pw-weight');
  var countEl = document.getElementById('pw-count');
  if (!weightEl || !countEl) return;
  var weight = parseFloat(weightEl.value) || 1;
  var count = parseInt(countEl.value, 10) || 1;
  document.querySelectorAll('.pc-price').forEach(function (el) {
    var base = parseFloat(el.dataset.base) || 0;
    var rate = parseFloat(el.dataset.rate) || 1;
    var price = (base + (weight - 1) * rate * 0.5) * count;
    el.textContent = price.toFixed(2).replace('.', ',') + ' €';
  });
}

/* ─── FAQ Akkordeon ──────────────────────────────────────────────── */
function toggleFaq(btn) {
  var item = btn.closest('.faq-item');
  var wasOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(function (el) {
    el.classList.remove('open');
  });
  if (!wasOpen) item.classList.add('open');
}

/* ─── Scroll-Reveal (Einsatzgebiete-Karten) ─────────────────────── */
function initFeatureReveal() {
  var cards = document.querySelectorAll('.feat-card.reveal');
  if (!cards.length) return;
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    cards.forEach(function (el) { el.classList.add('in-view'); });
    return;
  }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2, rootMargin: '0px 0px -60px 0px' });
  cards.forEach(function (el) { observer.observe(el); });
}

/* ─── Init ───────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {
  updatePrices();
  initFeatureReveal();
});
