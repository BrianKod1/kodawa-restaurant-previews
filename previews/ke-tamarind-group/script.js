
const loader = document.querySelector('.loader');
window.addEventListener('load', () => setTimeout(() => loader.classList.add('hidden'), 1650));

const panel = document.querySelector('.menu-panel');
document.querySelector('.menu-toggle').addEventListener('click', () => {
  panel.classList.add('open');
  panel.setAttribute('aria-hidden','false');
});
document.querySelector('.menu-close').addEventListener('click', () => {
  panel.classList.remove('open');
  panel.setAttribute('aria-hidden','true');
});
panel.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  panel.classList.remove('open');
  panel.setAttribute('aria-hidden','true');
}));

const frames = [...document.querySelectorAll('.hero-frame')];
const currentLabel = document.querySelector('#heroCurrent');
const progress = document.querySelector('#heroProgress');
let current = 0;
setInterval(() => {
  frames[current].classList.remove('active');
  current = (current + 1) % frames.length;
  frames[current].classList.add('active');
  currentLabel.textContent = String(current + 1).padStart(2,'0');
  progress.style.animation = 'none';
  progress.offsetHeight;
  progress.style.animation = '';
}, 6000);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.13});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const reviews = [
  ['“The kind of dining experience that stays with you long after the evening ends.”','— International guest'],
  ['“Warm, polished and unmistakably Kenyan. Every detail felt considered.”','— Returning guest'],
  ['“A remarkable setting for celebrating the people and moments that matter.”','— Private event guest']
];
let reviewIndex = 0;
const quote = document.querySelector('#reviewQuote');
const source = document.querySelector('#reviewSource');
const count = document.querySelector('#reviewCount');

function renderReview(){
  quote.animate([{opacity:0,transform:'translateY(10px)'},{opacity:1,transform:'translateY(0)'}],{duration:450,easing:'ease-out'});
  quote.textContent = reviews[reviewIndex][0];
  source.textContent = reviews[reviewIndex][1];
  count.textContent = `${String(reviewIndex+1).padStart(2,'0')} / 03`;
}
document.querySelector('#nextReview').addEventListener('click',()=>{reviewIndex=(reviewIndex+1)%reviews.length;renderReview()});
document.querySelector('#prevReview').addEventListener('click',()=>{reviewIndex=(reviewIndex-1+reviews.length)%reviews.length;renderReview()});

document.querySelector('.newsletter form').addEventListener('submit', e => {
  e.preventDefault();
  e.currentTarget.querySelector('button').textContent = 'Thank you';
});
