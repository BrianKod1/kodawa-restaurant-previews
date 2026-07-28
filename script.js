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
window.addEventListener('scroll',()=>{
  header.classList.toggle('scrolled',window.scrollY>70);
},{passive:true});

const auditOptions=document.querySelectorAll('.audit-option');
const auditPanels=document.querySelectorAll('.audit-result');
auditOptions.forEach(option=>{
  option.addEventListener('click',()=>{
    const target=option.dataset.audit;
    auditOptions.forEach(item=>item.classList.remove('active'));
    auditPanels.forEach(panel=>panel.classList.remove('active'));
    option.classList.add('active');
    document.querySelector(`[data-audit-panel="${target}"]`)?.classList.add('active');
  });
});

if(window.matchMedia('(pointer:fine)').matches){
  const glow=document.getElementById('cursorGlow');
  window.addEventListener('pointermove',event=>{
    glow.style.transform=`translate(${event.clientX}px,${event.clientY}px)`;
    glow.style.opacity='1';
  },{passive:true});
  document.documentElement.addEventListener('mouseleave',()=>glow.style.opacity='0');
}
