const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const header=document.getElementById('siteHeader');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>70),{passive:true});

const options=document.querySelectorAll('.audit-option');
const panels=document.querySelectorAll('.audit-result');
options.forEach(option=>{
  option.addEventListener('click',()=>{
    const target=option.dataset.audit;
    options.forEach(item=>item.classList.remove('active'));
    panels.forEach(panel=>panel.classList.remove('active'));
    option.classList.add('active');
    document.querySelector(`[data-audit-panel="${target}"]`)?.classList.add('active');
  });
});
