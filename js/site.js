/* Interactive extras: count-up stats, globe language chips, live search, back-to-top */
document.addEventListener('DOMContentLoaded',()=>{
 const nums=document.querySelectorAll('.num');
 if(nums.length){const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;io.unobserve(e.target);
   const el=e.target,n=+el.dataset.n,t0=performance.now();
   const step=t=>{const p=Math.min(1,(t-t0)/1400);el.textContent=Math.round(n*(1-Math.pow(1-p,3))).toLocaleString();if(p<1)requestAnimationFrame(step)};requestAnimationFrame(step)}),{threshold:.5});
   nums.forEach(n=>io.observe(n))}
 const words=[...document.querySelectorAll('.globe .gl')],box=document.getElementById('gchips');
 if(box){words.forEach((w,i)=>{const b=document.createElement('button');b.className='chip';b.type='button';b.textContent=w.dataset.lang;
   const on=()=>{words.forEach(x=>x.classList.remove('hl'));box.querySelectorAll('.chip').forEach(x=>x.classList.remove('on'));w.classList.add('hl');b.classList.add('on')};
   b.onclick=on;w.onclick=on;box.appendChild(b)});
   let i=0;setInterval(()=>{if(!box.matches(':hover')&&!matchMedia('(prefers-reduced-motion:reduce)').matches){box.children[i%words.length].click();i++}},2600)}
 function filt(inp,sel,chipsSel){const q=document.getElementById(inp);if(!q)return;
   const run=()=>{const v=q.value.toLowerCase().trim(),c=document.querySelector(chipsSel+'.on');const cat=c?c.dataset.cat:'';let n=0;
     document.querySelectorAll(sel).forEach(x=>{const ok=(!v||x.textContent.toLowerCase().includes(v))&&(!cat||x.dataset.cat===cat);x.style.display=ok?'':'none';if(ok)n++});
     const e=document.getElementById('empty');if(e)e.style.display=n?'none':'block'};
   q.oninput=run;document.querySelectorAll(chipsSel).forEach(c=>c.onclick=()=>{const was=c.classList.contains('on');document.querySelectorAll(chipsSel).forEach(x=>x.classList.remove('on'));if(!was)c.classList.add('on');run()});
   window.afterApply=run}
 filt('q','.rc','.fc');filt('tq','#tipgrid .card','.nochip');
 const top=document.getElementById('top');
 if(top){addEventListener('scroll',()=>top.style.display=scrollY>500?'block':'none');top.onclick=()=>scrollTo({top:0})}
});
