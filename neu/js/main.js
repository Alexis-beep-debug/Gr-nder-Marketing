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

/* ─── Init ───────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {
  updatePrices();
});
