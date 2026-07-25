
const slides=[...document.querySelectorAll('.hero-slide')];
const number=document.querySelector('#slideNumber');
let current=0;
setInterval(()=>{
  slides[current].classList.remove('active');
  current=(current+1)%slides.length;
  slides[current].classList.add('active');
  number.textContent=String(current+1).padStart(2,'0');
},5200);

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const reviews=[
  ['“A truly distinctive and unforgettable dining experience. The atmosphere, service and food came together beautifully.”','— Tamarind Guest'],
  ['“The kind of place that becomes part of your Nairobi story. Warm service, memorable flavours and a setting full of character.”','— International Visitor'],
  ['“From the first welcome to the final course, everything felt generous, polished and unmistakably Kenyan.”','— Returning Guest']
];
let reviewIndex=0;
const text=document.querySelector('#reviewText');
const author=document.querySelector('#reviewAuthor');
function showReview(){
  text.animate([{opacity:0,transform:'translateY(10px)'},{opacity:1,transform:'none'}],{duration:450});
  text.textContent=reviews[reviewIndex][0];
  author.textContent=reviews[reviewIndex][1];
}
document.querySelector('#next').onclick=()=>{reviewIndex=(reviewIndex+1)%reviews.length;showReview()};
document.querySelector('#prev').onclick=()=>{reviewIndex=(reviewIndex-1+reviews.length)%reviews.length;showReview()};
