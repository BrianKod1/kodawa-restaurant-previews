const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 70);
}, { passive: true });

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal, .reveal-image').forEach(el => observer.observe(el));

const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', (event) => {
  if (!glow) return;
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
}, { passive: true });

document.getElementById('reservationForm')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const note = document.getElementById('formNote');
  note.textContent = 'Thank you. In a production version, this request would now be sent to the restaurant’s reservation team.';
  note.style.color = '#edd7ad';
});


const introLoader = document.getElementById('introLoader');
window.addEventListener('load', () => {
  window.setTimeout(() => introLoader?.classList.add('hide'), 850);
});

const progress = document.getElementById('scrollProgress');
const updateProgress = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const value = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  if (progress) progress.style.width = `${value}%`;
};
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

const soundToggle = document.getElementById('soundToggle');
let ambientContext;
let ambientGain;
let ambientOn = false;

function startAmbient() {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return;
  ambientContext = ambientContext || new AudioCtx();
  ambientGain = ambientGain || ambientContext.createGain();
  ambientGain.gain.value = 0.018;
  ambientGain.connect(ambientContext.destination);

  const oscA = ambientContext.createOscillator();
  const oscB = ambientContext.createOscillator();
  const gainA = ambientContext.createGain();
  const gainB = ambientContext.createGain();

  oscA.frequency.value = 110;
  oscB.frequency.value = 164.81;
  oscA.type = 'sine';
  oscB.type = 'sine';
  gainA.gain.value = 0.45;
  gainB.gain.value = 0.2;

  oscA.connect(gainA).connect(ambientGain);
  oscB.connect(gainB).connect(ambientGain);
  oscA.start();
  oscB.start();

  soundToggle._nodes = [oscA, oscB];
}

soundToggle?.addEventListener('click', async () => {
  ambientOn = !ambientOn;
  soundToggle.setAttribute('aria-pressed', String(ambientOn));
  soundToggle.textContent = ambientOn ? 'Ambient on' : 'Ambient off';

  if (ambientOn) {
    startAmbient();
    if (ambientContext?.state === 'suspended') await ambientContext.resume();
  } else if (ambientGain && ambientContext) {
    ambientGain.gain.cancelScheduledValues(ambientContext.currentTime);
    ambientGain.gain.setTargetAtTime(0, ambientContext.currentTime, 0.08);
  }
});

const modal = document.getElementById('bookingModal');
const summary = document.getElementById('bookingSummary');
const emailLink = document.getElementById('bookingEmail');

function closeModal() {
  modal?.classList.remove('open');
  modal?.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

document.querySelectorAll('[data-close-modal]').forEach(el => el.addEventListener('click', closeModal));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeModal();
});

const reservationForm = document.getElementById('reservationForm');
reservationForm?.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(reservationForm);
  const name = formData.get('name') || 'Guest';
  const guests = formData.get('guests') || '2 guests';
  const occasion = formData.get('occasion') || 'Dinner';

  if (summary) {
    summary.textContent = `${name}, your request for ${guests} for ${occasion.toString().toLowerCase()} is ready to send.`;
  }

  const subject = encodeURIComponent(`Reservation request — ${occasion}`);
  const body = encodeURIComponent(`Hello Trunk & Tandoor Team,\n\nMy name is ${name}. I would like to request a table for ${guests} for ${occasion}.\n\nPlease let me know the available dates and times.\n\nThank you.`);
  if (emailLink) emailLink.href = `mailto:?subject=${subject}&body=${body}`;

  modal?.classList.add('open');
  modal?.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
});
