const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.main-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.textContent = isOpen ? '×' : '☰';
});

document.querySelectorAll('.main-nav a').forEach((link) => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  if (menuButton) menuButton.textContent = '☰';
}));

document.querySelector('#lead-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const message = form.querySelector('.form-success');
  message.textContent = 'Thank you - a KVL Academy counsellor will contact you shortly.';
  form.reset();
});

const whatsapp = document.createElement('a');
whatsapp.className = 'whatsapp-float';
whatsapp.href = 'https://wa.me/918105377213?text=Hi%20KVL%20Academy%2C%20I%20would%20like%20course%20guidance.';
whatsapp.target = '_blank';
whatsapp.rel = 'noreferrer';
whatsapp.setAttribute('aria-label', 'Chat with KVL Academy on WhatsApp');
whatsapp.textContent = '◔';
whatsapp.style.cssText = 'position:fixed;right:22px;bottom:22px;width:57px;height:57px;background:#25d366;color:#fff;border-radius:50%;z-index:30;display:grid;place-items:center;box-shadow:0 12px 30px rgba(15,112,55,.35);font-size:26px;text-decoration:none';
document.body.append(whatsapp);

const themeTrack = document.querySelector('.theme-track');
if (themeTrack && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let pauseCarousel = false;
  themeTrack.addEventListener('pointerdown', () => { pauseCarousel = true; });
  themeTrack.addEventListener('pointerup', () => { setTimeout(() => { pauseCarousel = false; }, 1200); });
  setInterval(() => {
    if (!pauseCarousel) {
      const card = themeTrack.querySelector('.theme-card');
      const step = card ? card.getBoundingClientRect().width + 18 : 360;
      const atEnd = themeTrack.scrollLeft + themeTrack.clientWidth >= themeTrack.scrollWidth - 16;
      themeTrack.scrollTo({ left: atEnd ? 0 : themeTrack.scrollLeft + step, behavior: 'smooth' });
    }
  }, 4600);
}
