const header = document.querySelector('.site-header');
const reveals = document.querySelectorAll('.reveal');
const sections = document.querySelectorAll('[data-time]');
const glow = document.getElementById('sunGlow');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 30);
}, {passive:true});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
},{threshold:.16});
reveals.forEach(el => revealObserver.observe(el));

const lightMap = {
  dawn:['#cad7d1',.30,'translate(-4vw,1vh)'],
  morning:['#d9ddbd',.34,'translate(-7vw,8vh)'],
  midday:['#f0d68b',.38,'translate(-12vw,18vh)'],
  afternoon:['#dbb35e',.36,'translate(-15vw,28vh)'],
  golden:['#cf873f',.38,'translate(-18vw,38vh)'],
  'late-afternoon':['#b37039',.34,'translate(-20vw,48vh)'],
  sunset:['#9c4b31',.30,'translate(-22vw,58vh)'],
  dusk:['#394451',.24,'translate(-24vw,68vh)'],
  night:['#17253d',.18,'translate(-26vw,78vh)']
};

const lightObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const [color, opacity, transform] = lightMap[entry.target.dataset.time];
      glow.style.background = color;
      glow.style.opacity = opacity;
      glow.style.transform = transform;
    }
  });
},{threshold:.45});
sections.forEach(section => lightObserver.observe(section));

const soundToggle = document.getElementById('soundToggle');
let audioContext, masterGain, soundOn = false;

function buildFarmAmbience(){
  audioContext = new (window.AudioContext || window.webkitAudioContext)();
  masterGain = audioContext.createGain();
  masterGain.gain.value = 0.0001;
  masterGain.connect(audioContext.destination);

  const buffer = audioContext.createBuffer(1, audioContext.sampleRate * 4, audioContext.sampleRate);
  const data = buffer.getChannelData(0);
  for(let i=0;i<data.length;i++){
    data[i] = (Math.random()*2-1) * 0.08;
  }
  const wind = audioContext.createBufferSource();
  const windFilter = audioContext.createBiquadFilter();
  const windGain = audioContext.createGain();
  wind.buffer = buffer;
  wind.loop = true;
  windFilter.type = 'lowpass';
  windFilter.frequency.value = 420;
  windGain.gain.value = .24;
  wind.connect(windFilter).connect(windGain).connect(masterGain);
  wind.start();

  [523.25,659.25,783.99].forEach((freq,index)=>{
    const bird = audioContext.createOscillator();
    const gain = audioContext.createGain();
    bird.type = 'sine';
    bird.frequency.value = freq;
    gain.gain.value = 0;
    bird.connect(gain).connect(masterGain);
    bird.start();
    setInterval(()=>{
      if(!soundOn) return;
      const now = audioContext.currentTime;
      gain.gain.cancelScheduledValues(now);
      gain.gain.setValueAtTime(0,now);
      gain.gain.linearRampToValueAtTime(.025/(index+1),now+.05);
      gain.gain.exponentialRampToValueAtTime(.0001,now+.45);
    }, 3600 + index*1700);
  });
}

soundToggle.addEventListener('click', async ()=>{
  if(!audioContext) buildFarmAmbience();
  if(audioContext.state === 'suspended') await audioContext.resume();
  soundOn = !soundOn;
  soundToggle.classList.toggle('on',soundOn);
  soundToggle.querySelector('.sound-label').textContent = soundOn ? 'Sound on' : 'Sound off';
  masterGain.gain.cancelScheduledValues(audioContext.currentTime);
  masterGain.gain.linearRampToValueAtTime(soundOn ? .55 : .0001,audioContext.currentTime + .7);
});
