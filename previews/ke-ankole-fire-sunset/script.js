document.querySelectorAll('[data-jump]').forEach(button=>{
  button.addEventListener('click',()=>{
    document.querySelector(button.dataset.jump)?.scrollIntoView({behavior:'smooth'});
  });
});

const plans={
  date:{title:'Kilimani after 7 PM',text:'Warm lighting, stronger evening energy and a natural date-night atmosphere.',link:'https://www.ankole.co.ke/reservation',label:'Continue to reservation ↗'},
  family:{title:'Kitisuru for a slower table',text:'More relaxed pacing, garden atmosphere and a setting that works across generations.',link:'https://www.ankole.co.ke/reservation',label:'Reserve a family table ↗'},
  music:{title:'Live Acoustic Wednesday',text:'Check the artist lineup first, then reserve before the best tables are gone.',link:'https://www.ankole.co.ke/live',label:'See the live calendar ↗'},
  group:{title:'Speak to the team directly',text:'For a larger occasion, confirm timing, seating and the right location with Ankole.',link:'https://www.ankole.co.ke/contact',label:'Contact Ankole ↗'}
};

const result=document.getElementById('assistantResult');
document.querySelectorAll('.assistant-option').forEach(button=>{
  button.addEventListener('click',()=>{
    document.querySelectorAll('.assistant-option').forEach(item=>item.classList.remove('active'));
    button.classList.add('active');
    const plan=plans[button.dataset.plan];
    result.innerHTML=`<span>Recommended</span><h3>${plan.title}</h3><p>${plan.text}</p><a href="${plan.link}" target="_blank" rel="noreferrer">${plan.label}</a>`;
  });
});

const soundToggle=document.getElementById('soundToggle');
let context,nodes=[],timer,playing=false;

function startSound(){
  context=context||new (window.AudioContext||window.webkitAudioContext)();
  if(context.state==='suspended')context.resume();

  const master=context.createGain();
  master.gain.value=.045;
  master.connect(context.destination);

  [82.41,110,164.81].forEach((frequency,index)=>{
    const oscillator=context.createOscillator();
    const gain=context.createGain();
    oscillator.type=index===1?'triangle':'sine';
    oscillator.frequency.value=frequency;
    gain.gain.value=index===0?.15:.05;
    oscillator.connect(gain).connect(master);
    oscillator.start();
    nodes.push(oscillator,gain);
  });

  timer=setInterval(()=>{
    const buffer=context.createBuffer(1,context.sampleRate*.035,context.sampleRate);
    const data=buffer.getChannelData(0);
    for(let i=0;i<data.length;i++)data[i]=(Math.random()*2-1)*(1-i/data.length);
    const source=context.createBufferSource();
    const gain=context.createGain();
    gain.gain.value=Math.random()*.025;
    source.buffer=buffer;
    source.connect(gain).connect(master);
    source.start();
  },1250);

  nodes.push(master);
  playing=true;
  soundToggle.classList.add('playing');
  soundToggle.setAttribute('aria-pressed','true');
}

function stopSound(){
  clearInterval(timer);
  nodes.forEach(node=>{
    try{if(node.stop)node.stop()}catch(e){}
    try{node.disconnect()}catch(e){}
  });
  nodes=[];
  playing=false;
  soundToggle.classList.remove('playing');
  soundToggle.setAttribute('aria-pressed','false');
}

soundToggle.addEventListener('click',()=>playing?stopSound():startSound());
