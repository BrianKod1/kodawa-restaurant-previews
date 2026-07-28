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

// Phase 2 menu tabs
const menuTabs = document.querySelectorAll('.menu-tab');
const menuPanels = document.querySelectorAll('.menu-panel');

menuTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.menu;

    menuTabs.forEach(item => item.classList.remove('active'));
    menuPanels.forEach(panel => panel.classList.remove('active'));

    tab.classList.add('active');
    document.querySelector(`[data-panel="${target}"]`)?.classList.add('active');
  });
});

const livePosters=[...document.querySelectorAll('.live-poster')],liveControls=[...document.querySelectorAll('.live-control')];let liveIndex=0,liveTimer;
function showLive(i){if(!livePosters.length)return;livePosters[liveIndex].classList.remove('active');liveControls[liveIndex]?.classList.remove('active');liveIndex=(i+livePosters.length)%livePosters.length;livePosters[liveIndex].classList.add('active');liveControls[liveIndex]?.classList.add('active')}
function startLive(){clearInterval(liveTimer);liveTimer=setInterval(()=>showLive(liveIndex+1),5200)}
liveControls.forEach(b=>b.onclick=()=>{showLive(Number(b.dataset.live));startLive()});startLive();

const galleryFrames=[...document.querySelectorAll('.gallery-frame')],galleryProgress=document.getElementById('galleryProgress');let galleryIndex=0;
function showGallery(i){if(!galleryFrames.length)return;galleryFrames[galleryIndex].classList.remove('active');galleryIndex=(i+galleryFrames.length)%galleryFrames.length;galleryFrames[galleryIndex].classList.add('active');if(galleryProgress)galleryProgress.style.width=`${((galleryIndex+1)/galleryFrames.length)*100}%`}
document.getElementById('galleryPrev')?.addEventListener('click',()=>showGallery(galleryIndex-1));
document.getElementById('galleryNext')?.addEventListener('click',()=>showGallery(galleryIndex+1));

const reviewTabs=document.querySelectorAll('.review-tab'),reviewPanels=document.querySelectorAll('.review-panel');
reviewTabs.forEach(tab=>tab.onclick=()=>{reviewTabs.forEach(x=>x.classList.remove('active'));reviewPanels.forEach(x=>x.classList.remove('active'));tab.classList.add('active');document.querySelector(`[data-review-panel="${tab.dataset.review}"]`)?.classList.add('active')});

// Phase 4 lightweight concierge
const conciergeOptions = document.querySelectorAll('.concierge-option');
const conciergePanels = document.querySelectorAll('.concierge-panel');

conciergeOptions.forEach(option => {
  option.addEventListener('click', () => {
    const target = option.dataset.concierge;
    conciergeOptions.forEach(item => item.classList.remove('active'));
    conciergePanels.forEach(panel => panel.classList.remove('active'));
    option.classList.add('active');
    document.querySelector(`[data-concierge-panel="${target}"]`)?.classList.add('active');
  });
});

// Subtle sticky header refinement
const siteHeader = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  siteHeader?.classList.toggle('final-scrolled', window.scrollY > 80);
}, { passive: true });
