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

// Phase 3 social sequence
const socialFrames=[...document.querySelectorAll('.social-frame')];
const socialProgress=document.getElementById('socialProgress');
let socialIndex=0;

function showSocial(index){
  if(!socialFrames.length)return;
  socialFrames[socialIndex].classList.remove('active');
  socialIndex=(index+socialFrames.length)%socialFrames.length;
  socialFrames[socialIndex].classList.add('active');
  if(socialProgress){
    socialProgress.style.width=`${((socialIndex+1)/socialFrames.length)*100}%`;
  }
}
document.getElementById('socialPrev')?.addEventListener('click',()=>showSocial(socialIndex-1));
document.getElementById('socialNext')?.addEventListener('click',()=>showSocial(socialIndex+1));

// Guest intent tabs
const experienceTabs=document.querySelectorAll('.experience-tab');
const experiencePanels=document.querySelectorAll('.experience-panel');
experienceTabs.forEach(tab=>{
  tab.addEventListener('click',()=>{
    experienceTabs.forEach(item=>item.classList.remove('active'));
    experiencePanels.forEach(panel=>panel.classList.remove('active'));
    tab.classList.add('active');
    document.querySelector(`[data-experience-panel="${tab.dataset.experience}"]`)?.classList.add('active');
  });
});

// Review carousel
const reviewCards=[...document.querySelectorAll('.review-card')];
const reviewDots=[...document.querySelectorAll('.review-dot')];
let reviewIndex=0;
function showReview(index){
  if(!reviewCards.length)return;
  reviewCards[reviewIndex].classList.remove('active');
  reviewDots[reviewIndex]?.classList.remove('active');
  reviewIndex=(index+reviewCards.length)%reviewCards.length;
  reviewCards[reviewIndex].classList.add('active');
  reviewDots[reviewIndex]?.classList.add('active');
}
reviewDots.forEach(dot=>dot.addEventListener('click',()=>showReview(Number(dot.dataset.review))));

// Desktop pointer glow
if(window.matchMedia('(pointer:fine)').matches){
  const glow=document.createElement('div');
  glow.className='cursor-glow';
  document.body.appendChild(glow);
  window.addEventListener('pointermove',event=>{
    glow.style.transform=`translate(${event.clientX}px,${event.clientY}px)`;
    glow.style.opacity='1';
  },{passive:true});
  document.documentElement.addEventListener('mouseleave',()=>glow.style.opacity='0');
}

// Phase 4 host guide
const hostOptions=document.querySelectorAll('.host-option');
const hostPanels=document.querySelectorAll('.host-result');

hostOptions.forEach(option=>{
  option.addEventListener('click',()=>{
    const target=option.dataset.host;
    hostOptions.forEach(item=>item.classList.remove('active'));
    hostPanels.forEach(panel=>panel.classList.remove('active'));
    option.classList.add('active');
    document.querySelector(`[data-host-panel="${target}"]`)?.classList.add('active');
  });
});

// Final header state
window.addEventListener('scroll',()=>{
  document.getElementById('siteHeader')?.classList.toggle('final-scrolled',window.scrollY>120);
},{passive:true});
