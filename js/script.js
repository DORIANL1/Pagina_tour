// Header solid on scroll
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

// Min date = today
document.getElementById('fecha').min = new Date().toISOString().split('T')[0];

// ---------- MODAL ----------
const modalOverlay = document.getElementById('modalOverlay');
const tourSelect = document.getElementById('tour');

function openModal(e, el){
  if (e) e.preventDefault();
  if (el) {
    const nombre = el.getAttribute('data-tour');
    [...tourSelect.options].forEach((opt, i) => {
      if (opt.text.startsWith(nombre)) tourSelect.selectedIndex = i;
    });
    updateTotal();
  }
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(){
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// Estimated total
const personasInput = document.getElementById('personas');
const totalAmount = document.getElementById('totalAmount');
function formatCRC(n){
  return '₡' + n.toLocaleString('es-CR');
}
function updateTotal(){
  const precio = parseInt(tourSelect.selectedOptions[0].getAttribute('data-precio'), 10);
  const personas = Math.max(1, parseInt(personasInput.value || '1', 10));
  totalAmount.textContent = formatCRC(precio * personas);
}
tourSelect.addEventListener('change', updateTotal);
personasInput.addEventListener('input', updateTotal);
updateTotal();

// Mock submit (front-end only por ahora)
document.getElementById('resForm').addEventListener('submit', (e) => {
  e.preventDefault();
  document.getElementById('confirmBox').style.display = 'block';
});