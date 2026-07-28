const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .16 });
reveals.forEach(el => observer.observe(el));

const frames = [...document.querySelectorAll('.hero-frame')];
let frame = 0;
setInterval(() => {
  frames[frame].classList.remove('active');
  frame = (frame + 1) % frames.length;
  frames[frame].classList.add('active');
}, 5200);

const mobileMenu = document.getElementById('mobileMenu');
const menuToggle = document.getElementById('menuToggle');
const menuClose = document.getElementById('menuClose');
function setMenu(open) {
  mobileMenu.classList.toggle('open', open);
  mobileMenu.setAttribute('aria-hidden', String(!open));
  document.body.classList.toggle('menu-open', open);
}
menuToggle.addEventListener('click', () => setMenu(true));
menuClose.addEventListener('click', () => setMenu(false));
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));

const soundToggle = document.getElementById('soundToggle');
let audioContext;
let soundNodes = [];
let crackleTimer;
let isPlaying = false;

function startAtmosphere() {
  audioContext = audioContext || new (window.AudioContext || window.webkitAudioContext)();

  const master = audioContext.createGain();
  master.gain.value = 0.055;
  master.connect(audioContext.destination);

  // Warm low drone.
  [82.41, 110, 164.81].forEach((frequency, index) => {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = index === 1 ? 'triangle' : 'sine';
    oscillator.frequency.value = frequency;
    gain.gain.value = index === 0 ? .16 : .055;
    oscillator.connect(gain);
    gain.connect(master);
    oscillator.start();
    soundNodes.push(oscillator, gain);
  });

  // Slow movement, like a room breathing.
  const lfo = audioContext.createOscillator();
  const lfoGain = audioContext.createGain();
  lfo.frequency.value = .09;
  lfoGain.gain.value = .018;
  lfo.connect(lfoGain);
  lfoGain.connect(master.gain);
  lfo.start();
  soundNodes.push(lfo, lfoGain, master);

  // Occasional tiny fire crackles.
  crackleTimer = setInterval(() => {
    if (!audioContext || audioContext.state !== 'running') return;
    const buffer = audioContext.createBuffer(1, audioContext.sampleRate * .045, audioContext.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
    const source = audioContext.createBufferSource();
    const gain = audioContext.createGain();
    gain.gain.value = Math.random() * .035;
    source.buffer = buffer;
    source.connect(gain);
    gain.connect(master);
    source.start();
  }, 1100 + Math.random() * 900);

  isPlaying = true;
  soundToggle.classList.add('playing');
  soundToggle.setAttribute('aria-pressed', 'true');
  soundToggle.querySelector('.sound-label').textContent = 'Pause atmosphere';
}

function stopAtmosphere() {
  clearInterval(crackleTimer);
  soundNodes.forEach(node => {
    try { if (node.stop) node.stop(); } catch (e) {}
    try { node.disconnect(); } catch (e) {}
  });
  soundNodes = [];
  if (audioContext && audioContext.state === 'running') audioContext.suspend();
  isPlaying = false;
  soundToggle.classList.remove('playing');
  soundToggle.setAttribute('aria-pressed', 'false');
  soundToggle.querySelector('.sound-label').textContent = 'Play atmosphere';
}

soundToggle.addEventListener('click', async () => {
  if (!isPlaying) {
    if (audioContext && audioContext.state === 'suspended') await audioContext.resume();
    startAtmosphere();
  } else {
    stopAtmosphere();
  }
});
