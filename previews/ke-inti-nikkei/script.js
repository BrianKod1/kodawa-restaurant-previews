const header = document.querySelector('.site-header');
const reveals = document.querySelectorAll('.reveal');
const sections = [...document.querySelectorAll('[data-light]')];
const orbA = document.querySelector('.light-orb-a');
const orbB = document.querySelector('.light-orb-b');

window.addEventListener('scroll', () => header.classList.toggle('scrolled', scrollY > 30), {passive:true});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {threshold:.17});
reveals.forEach(el => revealObserver.observe(el));

const lightMap = {
  cool:['#4b7f99','#173d31'], dawn:['#806749','#9b6845'], amber:['#b16c2e','#c6a15a'],
  sunset:['#b84b31','#d89a45'], gold:['#c6a15a','#7b4d29'], copper:['#9b6845','#4c2b21'],
  night:['#18243a','#7c2530'], ivory:['#d7c9aa','#8a7554'], afterglow:['#aa5f36','#37395b']
};
const lightObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const pair = lightMap[entry.target.dataset.light] || lightMap.cool;
      orbA.style.background = pair[0];
      orbB.style.background = pair[1];
      orbA.style.transform = `translate(${Math.random()*10-5}vw,${Math.random()*10-5}vh)`;
      orbB.style.transform = `translate(${Math.random()*10-5}vw,${Math.random()*10-5}vh)`;
    }
  });
}, {threshold:.42});
sections.forEach(s => lightObserver.observe(s));

const soundToggle = document.getElementById('soundToggle');
let ctx, master, started = false;

function createAmbient(){
  ctx = new (window.AudioContext || window.webkitAudioContext)();
  master = ctx.createGain();
  master.gain.value = 0.0001;
  master.connect(ctx.destination);

  const notes = [110, 146.83, 164.81, 220];
  notes.forEach((freq, i) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    osc.type = i % 2 ? 'sine' : 'triangle';
    osc.frequency.value = freq / (i < 2 ? 2 : 1);
    filter.type = 'lowpass';
    filter.frequency.value = 420 + i * 90;
    gain.gain.value = .018 / (i + 1);
    osc.connect(filter).connect(gain).connect(master);
    osc.start();
  });

  const noiseBuffer = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
  const data = noiseBuffer.getChannelData(0);
  for(let i=0;i<data.length;i++) data[i]=(Math.random()*2-1)*.12;
  const noise = ctx.createBufferSource();
  const noiseFilter = ctx.createBiquadFilter();
  const noiseGain = ctx.createGain();
  noise.buffer=noiseBuffer; noise.loop=true;
  noiseFilter.type='lowpass'; noiseFilter.frequency.value=180;
  noiseGain.gain.value=.035;
  noise.connect(noiseFilter).connect(noiseGain).connect(master);
  noise.start();

  const lfo = ctx.createOscillator();
  const lfoGain = ctx.createGain();
  lfo.frequency.value=.08; lfoGain.gain.value=.012;
  lfo.connect(lfoGain).connect(master.gain); lfo.start();
  started = true;
}

soundToggle.addEventListener('click', async () => {
  if (!started) createAmbient();
  if (ctx.state === 'suspended') await ctx.resume();
  const isOn = soundToggle.classList.toggle('on');
  master.gain.cancelScheduledValues(ctx.currentTime);
  master.gain.linearRampToValueAtTime(isOn ? .55 : .0001, ctx.currentTime + .8);
  soundToggle.querySelector('.sound-label').textContent = isOn ? 'Sound on' : 'Sound off';
  soundToggle.setAttribute('aria-label', isOn ? 'Turn ambient sound off' : 'Turn ambient sound on');
});
