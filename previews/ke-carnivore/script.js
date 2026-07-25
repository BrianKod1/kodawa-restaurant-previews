
const loader = document.querySelector('.loader');
window.addEventListener('load', () => setTimeout(() => loader.classList.add('hidden'), 1600));

const panel = document.querySelector('.menu-panel');
const body = document.body;
document.querySelector('.menu-toggle').addEventListener('click', () => {
  panel.classList.add('open'); panel.setAttribute('aria-hidden','false'); body.classList.add('menu-open'); panel.scrollTop = 0;
});
function closeMenu(){panel.classList.remove('open');panel.setAttribute('aria-hidden','true');body.classList.remove('menu-open')}
document.querySelector('.menu-close').addEventListener('click', closeMenu);
panel.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeMenu(); });

const frames = [...document.querySelectorAll('.hero-frame')];
const currentText = document.querySelector('#heroCurrent');
const bar = document.querySelector('#heroBar');
let current = 0;
setInterval(() => {
  frames[current].classList.remove('active');
  current = (current + 1) % frames.length;
  frames[current].classList.add('active');
  currentText.textContent = String(current + 1).padStart(2,'0');
  bar.style.animation = 'none'; bar.offsetHeight; bar.style.animation = '';
}, 6200);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}
  });
},{threshold:.13});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const reviews = [
  ['“A truly distinctive and unforgettable dining experience. The meat, atmosphere and tableside service made the evening feel like a performance.”','— International guest'],
  ['“A heaven for meat lovers and a must-try Nairobi experience. The ostrich, chicken, sauces and energy were unforgettable.”','— Visiting guest'],
  ['“Fast, efficient service, incredible variety and a fantastic atmosphere. You simply cannot miss this place when visiting Nairobi.”','— Returning guest']
];
let reviewIndex = 0;
const quote = document.querySelector('#reviewQuote');
const author = document.querySelector('#reviewAuthor');
const count = document.querySelector('#reviewCount');
function renderReview(){
  quote.animate([{opacity:0,transform:'translateY(10px)'},{opacity:1,transform:'none'}],{duration:420});
  quote.textContent = reviews[reviewIndex][0];
  author.textContent = reviews[reviewIndex][1];
  count.textContent = `${String(reviewIndex+1).padStart(2,'0')} / 03`;
}
document.querySelector('#nextReview').addEventListener('click',()=>{reviewIndex=(reviewIndex+1)%reviews.length;renderReview()});
document.querySelector('#prevReview').addEventListener('click',()=>{reviewIndex=(reviewIndex-1+reviews.length)%reviews.length;renderReview()});

document.querySelector('#reserveForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = new FormData(e.currentTarget).get('name') || 'Guest';
  document.querySelector('#formNote').textContent = `Thanks, ${name}. This concept form is ready to connect to Carnivore's booking system.`;
  e.currentTarget.reset();
});
