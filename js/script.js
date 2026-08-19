// ---------- MENU MÓVIL ----------
const menuBtn = document.getElementById('menuBtn');
const mainNav = document.getElementById('mainNav');
menuBtn.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  menuBtn.textContent = isOpen ? '✕' : '☰';
});
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.textContent = '☰';
  });
});

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

// Mock submit (front-end only por ahora)
document.getElementById('resForm').addEventListener('submit', (e) => {
  e.preventDefault();
  document.getElementById('confirmBox').style.display = 'block';
});