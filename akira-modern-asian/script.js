const header=document.querySelector('.site-header');
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.site-nav');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>40));
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.14});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const dateInput=document.querySelector('#date');
if(dateInput){const today=new Date();const local=new Date(today.getTime()-today.getTimezoneOffset()*60000).toISOString().split('T')[0];dateInput.min=local;dateInput.value=local}

const form=document.querySelector('#reservationForm');
const toast=document.querySelector('#toast');
form.addEventListener('submit',e=>{e.preventDefault();toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),3500);form.reset();if(dateInput){const today=new Date();dateInput.value=new Date(today.getTime()-today.getTimezoneOffset()*60000).toISOString().split('T')[0]}});

const lightbox=document.querySelector('#lightbox');
const lightboxImg=lightbox.querySelector('img');
document.querySelectorAll('.gallery-item').forEach(item=>item.addEventListener('click',()=>{lightboxImg.src=item.dataset.image;lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false')}));
const closeLightbox=()=>{lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true')};
lightbox.querySelector('.lightbox-close').addEventListener('click',closeLightbox);
lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox()});

const reviews=[
  ['“A beautiful atmosphere, attentive service and dishes that make you want to order one more for the table.”','Akira guest'],
  ['“The open kitchen, warm wood details and beautifully presented sushi make the whole meal feel like an occasion.”','Dinner guest'],
  ['“From the cocktails to the grilled skewers, everything felt considered, vibrant and full of flavour.”','Nairobi diner']
];
let reviewIndex=0;
const reviewContent=document.querySelector('#reviewContent');
function renderReview(){reviewContent.animate([{opacity:0,transform:'translateY(8px)'},{opacity:1,transform:'none'}],{duration:350});reviewContent.innerHTML=`<div class="stars">★★★★★</div><blockquote>${reviews[reviewIndex][0]}</blockquote><cite>${reviews[reviewIndex][1]}</cite>`}
document.querySelector('#prevReview').addEventListener('click',()=>{reviewIndex=(reviewIndex-1+reviews.length)%reviews.length;renderReview()});
document.querySelector('#nextReview').addEventListener('click',()=>{reviewIndex=(reviewIndex+1)%reviews.length;renderReview()});
