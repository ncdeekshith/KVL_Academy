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

if (!document.querySelector('.whatsapp-float')) {
  const whatsapp = document.createElement('a');
  whatsapp.className = 'whatsapp-float';
  whatsapp.href = 'https://wa.me/918105377213?text=Hi%20KVL%20Academy%2C%20I%20would%20like%20course%20guidance.';
  whatsapp.target = '_blank';
  whatsapp.rel = 'noreferrer';
  whatsapp.setAttribute('aria-label', 'Chat with KVL Academy on WhatsApp');
  whatsapp.textContent = '☎';
  document.body.append(whatsapp);
}

const heroSlider = document.querySelector('.hero-visual-slider');
if (heroSlider) {
  const slides = [...heroSlider.querySelectorAll('.hero-slide')];
  const dots = [...heroSlider.querySelectorAll('[data-slide-to]')];
  let currentSlide = 0;
  let sliderTimer;

  const showSlide = (nextIndex) => {
    currentSlide = (nextIndex + slides.length) % slides.length;
    slides.forEach((slide, index) => slide.classList.toggle('active', index === currentSlide));
    dots.forEach((dot, index) => dot.classList.toggle('active', index === currentSlide));
  };

  const startSlider = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    clearInterval(sliderTimer);
    sliderTimer = setInterval(() => showSlide(currentSlide + 1), 4800);
  };

  heroSlider.querySelector('.slider-prev')?.addEventListener('click', () => { showSlide(currentSlide - 1); startSlider(); });
  heroSlider.querySelector('.slider-next')?.addEventListener('click', () => { showSlide(currentSlide + 1); startSlider(); });
  dots.forEach((dot, index) => dot.addEventListener('click', () => { showSlide(index); startSlider(); }));
  heroSlider.addEventListener('mouseenter', () => clearInterval(sliderTimer));
  heroSlider.addEventListener('mouseleave', startSlider);
  startSlider();
}
