
const loader = document.getElementById('loader');
window.addEventListener('load', () => setTimeout(() => loader.classList.add('hidden'), 900));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {threshold: .12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

let audioContext;
let masterGain;
let isPlaying = false;
let ambientNodes = [];

function buildAmbientSound(){
  audioContext = new (window.AudioContext || window.webkitAudioContext)();
  masterGain = audioContext.createGain();
  masterGain.gain.value = 0.045;
  masterGain.connect(audioContext.destination);

  const notes = [110, 164.81, 220, 246.94];
  notes.forEach((frequency, index) => {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = index % 2 ? 'sine' : 'triangle';
    oscillator.frequency.value = frequency;
    gain.gain.value = index === 0 ? 0.35 : 0.12;
    oscillator.connect(gain);
    gain.connect(masterGain);
    oscillator.start();
    ambientNodes.push(oscillator);
  });

  const noiseBuffer = audioContext.createBuffer(1, audioContext.sampleRate * 2, audioContext.sampleRate);
  const output = noiseBuffer.getChannelData(0);
  for(let i = 0; i < output.length; i++){
    output[i] = (Math.random() * 2 - 1) * .15;
  }
  const noise = audioContext.createBufferSource();
  const noiseGain = audioContext.createGain();
  const filter = audioContext.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = 420;
  noise.buffer = noiseBuffer;
  noise.loop = true;
  noise.connect(filter);
  filter.connect(noiseGain);
  noiseGain.gain.value = .18;
  noiseGain.connect(masterGain);
  noise.start();
  ambientNodes.push(noise);

  const pulse = () => {
    if(!isPlaying || !audioContext) return;
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    osc.frequency.value = [329.63, 392, 440][Math.floor(Math.random()*3)];
    osc.type = 'sine';
    gain.gain.setValueAtTime(0, audioContext.currentTime);
    gain.gain.linearRampToValueAtTime(.06, audioContext.currentTime + .08);
    gain.gain.exponentialRampToValueAtTime(.001, audioContext.currentTime + 2.5);
    osc.connect(gain);
    gain.connect(masterGain);
    osc.start();
    osc.stop(audioContext.currentTime + 2.6);
    setTimeout(pulse, 5500 + Math.random()*5000);
  };
  pulse();
}

const soundToggle = document.getElementById('soundToggle');
const soundLabel = document.getElementById('soundLabel');

soundToggle.addEventListener('click', async () => {
  if(!audioContext){
    isPlaying = true;
    buildAmbientSound();
    soundToggle.classList.add('active');
    soundLabel.textContent = 'Sound on';
    return;
  }
  if(audioContext.state === 'suspended'){
    await audioContext.resume();
    isPlaying = true;
    soundToggle.classList.add('active');
    soundLabel.textContent = 'Sound on';
  }else{
    await audioContext.suspend();
    isPlaying = false;
    soundToggle.classList.remove('active');
    soundLabel.textContent = 'Sound off';
  }
});


// HERO rotating gallery
const heroCarousel = document.getElementById('heroCarousel');

if (heroCarousel) {
  const heroSlides = [...heroCarousel.querySelectorAll('.hero-slide')];
  const heroIndex = document.getElementById('heroIndex');
  const heroPrev = document.getElementById('heroPrev');
  const heroNext = document.getElementById('heroNext');

  let currentHeroSlide = 0;
  let heroTimer;
  let touchStartX = 0;

  const showHeroSlide = (nextIndex) => {
    heroSlides[currentHeroSlide].classList.remove('active');
    currentHeroSlide = (nextIndex + heroSlides.length) % heroSlides.length;
    heroSlides[currentHeroSlide].classList.add('active');

    if (heroIndex) {
      heroIndex.textContent = `${String(currentHeroSlide + 1).padStart(2, '0')} / ${String(heroSlides.length).padStart(2, '0')}`;
    }
  };

  const startHeroRotation = () => {
    clearInterval(heroTimer);
    heroTimer = setInterval(() => showHeroSlide(currentHeroSlide + 1), 5200);
  };

  heroPrev?.addEventListener('click', () => {
    showHeroSlide(currentHeroSlide - 1);
    startHeroRotation();
  });

  heroNext?.addEventListener('click', () => {
    showHeroSlide(currentHeroSlide + 1);
    startHeroRotation();
  });

  heroCarousel.addEventListener('mouseenter', () => clearInterval(heroTimer));
  heroCarousel.addEventListener('mouseleave', startHeroRotation);

  heroCarousel.addEventListener('touchstart', (event) => {
    touchStartX = event.changedTouches[0].clientX;
  }, { passive: true });

  heroCarousel.addEventListener('touchend', (event) => {
    const distance = event.changedTouches[0].clientX - touchStartX;

    if (Math.abs(distance) > 45) {
      showHeroSlide(currentHeroSlide + (distance < 0 ? 1 : -1));
      startHeroRotation();
    }
  }, { passive: true });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      clearInterval(heroTimer);
    } else {
      startHeroRotation();
    }
  });

  startHeroRotation();
}
