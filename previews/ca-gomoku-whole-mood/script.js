const reveals=document.querySelectorAll('.reveal');
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.14});
reveals.forEach(el=>observer.observe(el));

const images=[...document.querySelectorAll('.hero-image')];
let current=0;
setInterval(()=>{
  images[current].classList.remove('active');
  current=(current+1)%images.length;
  images[current].classList.add('active');
},5200);

const mobileMenu=document.getElementById('mobileMenu');
const menuButton=document.getElementById('menuButton');
const menuClose=document.getElementById('menuClose');

function setMenu(open){
  mobileMenu.classList.toggle('open',open);
  mobileMenu.setAttribute('aria-hidden',String(!open));
  document.body.classList.toggle('menu-open',open);
}
menuButton?.addEventListener('click',()=>setMenu(true));
menuClose?.addEventListener('click',()=>setMenu(false));
mobileMenu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>setMenu(false)));

const header=document.getElementById('siteHeader');
window.addEventListener('scroll',()=>{
  header.classList.toggle('scrolled',window.scrollY>70);
},{passive:true});

// Phase 2 optional ambient sound
const soundPlayer=document.getElementById('soundPlayer');
let audioContext,audioNodes=[],audioTimer,audioPlaying=false;

function startMood(){
  audioContext=audioContext||new (window.AudioContext||window.webkitAudioContext)();
  if(audioContext.state==='suspended')audioContext.resume();

  const master=audioContext.createGain();
  master.gain.value=.035;
  master.connect(audioContext.destination);

  [73.42,98,146.83].forEach((frequency,index)=>{
    const oscillator=audioContext.createOscillator();
    const gain=audioContext.createGain();
    oscillator.type=index===1?'triangle':'sine';
    oscillator.frequency.value=frequency;
    gain.gain.value=index===0?.15:.045;
    oscillator.connect(gain).connect(master);
    oscillator.start();
    audioNodes.push(oscillator,gain);
  });

  audioTimer=setInterval(()=>{
    const buffer=audioContext.createBuffer(1,audioContext.sampleRate*.03,audioContext.sampleRate);
    const data=buffer.getChannelData(0);
    for(let i=0;i<data.length;i++)data[i]=(Math.random()*2-1)*(1-i/data.length);
    const source=audioContext.createBufferSource();
    const gain=audioContext.createGain();
    gain.gain.value=Math.random()*.018;
    source.buffer=buffer;
    source.connect(gain).connect(master);
    source.start();
  },1450);

  audioNodes.push(master);
  audioPlaying=true;
  soundPlayer.classList.add('playing');
  soundPlayer.setAttribute('aria-pressed','true');
  soundPlayer.querySelector('.sound-icon').textContent='Ⅱ';
}

function stopMood(){
  clearInterval(audioTimer);
  audioNodes.forEach(node=>{
    try{if(node.stop)node.stop()}catch(error){}
    try{node.disconnect()}catch(error){}
  });
  audioNodes=[];
  audioPlaying=false;
  soundPlayer.classList.remove('playing');
  soundPlayer.setAttribute('aria-pressed','false');
  soundPlayer.querySelector('.sound-icon').textContent='▶';
}

soundPlayer?.addEventListener('click',()=>audioPlaying?stopMood():startMood());
