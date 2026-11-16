/* Resource Library: renders sections from js/resources-data.js, plus Admin add/edit tools */
(function(){
const P={"leaf": "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10ZM2 21c0-3 1.9-5.5 6-7", "book": "M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14ZM6.5 17a2.5 2.5 0 0 0 0 4H20", "users": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8", "globe": "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20", "bolt": "M13 2 3 14h9l-1 8 10-12h-9l1-8Z", "briefcase": "M3 7h18v13H3ZM8 7V4h8v3M3 13h18", "chart": "M3 3v18h18M7 15l4-5 3 3 5-7", "check": "M20 6 9 17l-5-5", "shield": "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10ZM9 12l2 2 4-4", "building": "M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6", "sun": "M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4", "mail": "M3 5h18v14H3ZM3 7l9 6 9-6", "chat": "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z", "star": "M12 2l3 7 7 .6-5.3 4.8 1.6 7.2L12 17.8 5.7 21.6l1.6-7.2L2 9.6 9 9Z", "map": "M12 22s7-6 7-12a7 7 0 1 0-14 0c0 6 7 12 7 12ZM12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4", "grid": "M3 3h7v7H3ZM14 3h7v7h-7ZM3 14h7v7H3ZM14 14h7v7h-7Z", "award": "M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12M8.2 13.9 7 23l5-3 5 3-1.2-9.1", "graduation": "M22 10 12 5 2 10l10 5 10-5ZM6 12v5c3 2 9 2 12 0v-5", "tool": "M14.7 6.3l3 3-9.4 9.4H5.3v-3ZM13 8l3 3M18 4l2 2", "lock": "M5 11h14v10H5ZM8 11V7a4 4 0 0 1 8 0v4", "link": "M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"};
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const safe=u=>{u=(u||'').trim();if(/^https?:\/\//i.test(u))return u;if(u&&!/^[a-z][a-z0-9+.-]*:/i.test(u)&&/^[\w\-.\/?=#&%]+$/.test(u))return u;return''};
const ic=n=>`<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="${P[n]||P.leaf}"/></svg>`;
const wave='<svg class="wave" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true" style="position:absolute;bottom:-1px;left:0"><path fill="#fff" d="M0 30C240 70 480 0 720 25s480 40 720 5V60H0Z"/></svg>';
const KEY='gcs_res_override',BASE=window.RESOURCES;
let D;
function load(){D={version:BASE.version,sections:JSON.parse(JSON.stringify(BASE.sections))};
  try{const o=JSON.parse(localStorage.getItem(KEY));if(o&&o.base===BASE.version&&Array.isArray(o.sections)){D.sections=o.sections;D.local=true}}catch(e){}}
function save(){D.local=true;try{localStorage.setItem(KEY,JSON.stringify({base:D.version,sections:D.sections}))}catch(e){}}
const $=id=>document.getElementById(id);
const href=s=>s.page||('resource.html?s='+encodeURIComponent(s.slug));
const retr=()=>{if(typeof apply==='function')apply()};

/* ---------- Library index ---------- */
let q='',cat='';
function renderLib(){
 const grid=$('libgrid');if(!grid)return;
 const cats=[...new Set(D.sections.map(s=>s.category))].sort();
 $('libchips').innerHTML=cats.map(c=>`<button type="button" class="chip fc${c===cat?' on':''}" data-cat="${esc(c)}">${esc(c)}</button>`).join('');
 grid.innerHTML=D.sections.map((s,i)=>{const sn=(s.intro&&s.intro[0])||(s.items[0]&&(s.items[0].desc||s.items[0].title))||'';
  const hay=(s.title+' '+s.category+' '+(s.intro||[]).join(' ')+' '+s.items.map(x=>x.title+' '+x.desc).join(' ')).toLowerCase();
  return `<a class="card rc" data-cat="${esc(s.category)}" data-hay="${esc(hay)}" href="${esc(href(s))}"><span class="badge">${ic(s.icon)}</span><h3>${i+1}. ${esc(s.title)}</h3><p>${esc(sn.slice(0,130))}…</p><span class="tag">${esc(s.category)}</span></a>`}).join('');
 document.querySelectorAll('.fc').forEach(c=>c.onclick=()=>{cat=cat===c.dataset.cat?'':c.dataset.cat;renderLib()});
 filter();
}
function filter(){let n=0;document.querySelectorAll('.rc').forEach(c=>{const ok=(!q||c.dataset.hay.includes(q))&&(!cat||c.dataset.cat===cat);c.style.display=ok?'':'none';if(ok)n++});
 const e=$('empty');if(e)e.style.display=n?'none':'block'}

/* ---------- Section page ---------- */
function renderSec(){
 const root=$('secroot');if(!root)return;
 const slug=new URLSearchParams(location.search).get('s');
 const i=D.sections.findIndex(s=>s.slug===slug);
 if(i<0){root.innerHTML='<section><div class="wrap"><h1>Not found</h1><p><a href="resources.html">← Back to the Resource Library</a></p></div></section>';return}
 const s=D.sections[i];if(s.page){location.replace(s.page);return}
 document.title=s.title+' | Global Community of Support';
 const adm=Auth.isAdmin();
 const items=s.items.map(it=>{const u=safe(it.url),ext=/^https?:/i.test(u);
  const link=u?`<a href="${esc(u)}"${ext?' target="_blank" rel="noopener"':''}>${ext?'Open ↗':'Open'}</a>`:`<a href="https://www.google.com/search?q=${encodeURIComponent(it.title)}" target="_blank" rel="noopener">Find online ↗</a>`;
  return `<div class="item"><h3>${esc(it.title)}</h3>${it.desc?`<p>${esc(it.desc)}</p>`:''}${link}${adm?`<a href="resources.html?edit=${encodeURIComponent(it.id)}#adminsec">✎ Edit</a>`:''}</div>`}).join('');
 const pv=D.sections[i-1],nx=D.sections[i+1];
 root.innerHTML=`<div class="phead"><div class="wrap"><span class="badge lg">${ic(s.icon)}</span><div><div class="crumb"><a href="resources.html" data-t="nav_res">Resource Library</a> › ${i+1} / ${D.sections.length}</div><h1>${esc(s.title)}</h1></div></div>${wave}</div>
 <section style="padding-top:10px"><div class="wrap"><span class="tag">${esc(s.category)}</span>${(s.intro||[]).map(p=>`<p class="lede">${esc(p)}</p>`).join('')}<div class="items">${items}</div>
 <div class="pn">${pv?`<a class="btn ghost" href="${esc(href(pv))}">← ${esc(pv.title.slice(0,38))}</a>`:'<span></span>'}${nx?`<a class="btn solid" href="${esc(href(nx))}">${esc(nx.title.slice(0,38))} →</a>`:''}</div>
 <p><a href="resources.html">← All collections</a></p></div></section>`;
 retr();
}

/* ---------- Admin tools ---------- */
function secOpts(){return D.sections.map((s,i)=>`<option value="${esc(s.slug)}">${i+1}. ${esc(s.title)}</option>`).join('')}
function msg(t,err){const m=$('amsg');m.className='msg '+(err?'err':'ok');m.style.display='block';m.textContent=t}
const SAVED='Saved in this browser. To show it to everyone, click “Download updated resource file” and upload that file to GitHub in the js folder (replace resources-data.js).';
function admin(){
 const box=$('admin');if(!box||!Auth.isAdmin())return;
 box.innerHTML=`<section class="admin" id="adminsec"><div class="wrap"><h2>Admin tools</h2>
 <div class="chips" style="justify-content:flex-start;margin:0 0 14px"><button class="chip on" type="button" data-tab="add">Add Resource</button><button class="chip" type="button" data-tab="edit">Edit Resource</button></div>
 <form id="fadd" class="panel afrm"><h3>Add Resource</h3>
  <label>Section<select id="a_sec">${secOpts()}</select></label>
  <label>Title<input id="a_t" required></label>
  <label>Description<textarea id="a_d" rows="3"></textarea></label>
  <label>Link (web address, optional)<input id="a_u" type="url" placeholder="https://"></label>
  <button class="btn solid" type="submit">Add Resource</button></form>
 <form id="fedit" class="panel afrm" hidden><h3>Edit Resource</h3>
  <label>Section<select id="e_sec">${secOpts()}</select></label>
  <label>Resource<select id="e_it"></select></label>
  <label>Title<input id="e_t" required></label>
  <label>Description<textarea id="e_d" rows="3"></textarea></label>
  <label>Link (web address, optional)<input id="e_u" placeholder="https://"></label>
  <button class="btn solid" type="submit">Save changes</button></form>
 <div class="adminbar"><button class="btn solid" id="dl" type="button">Download updated resource file</button><button class="btn ghost" id="dc" type="button">Discard changes in this browser</button></div>
 <p class="note">Changes are saved in this browser first. They become visible to all visitors only after you upload the downloaded <code>resources-data.js</code> file to the <code>js</code> folder on GitHub.</p>
 <div id="amsg" class="msg ok" role="status" style="display:none"></div></div></section>`;
 const sec=slug=>D.sections.find(s=>s.slug===slug);
 const fillItems=(sel)=>{const s=sec($('e_sec').value);$('e_it').innerHTML=s.items.map(x=>`<option value="${esc(x.id)}">${esc(x.title)}</option>`).join('');fillEdit()};
 const fillEdit=()=>{const s=sec($('e_sec').value),it=s&&s.items.find(x=>x.id===$('e_it').value);
   $('e_t').value=it?it.title:'';$('e_d').value=it?it.desc||'':'';$('e_u').value=it?it.url||'':''};
 const tab=t=>{$('fadd').hidden=t!=='add';$('fedit').hidden=t!=='edit';box.querySelectorAll('[data-tab]').forEach(b=>b.classList.toggle('on',b.dataset.tab===t))};
 box.querySelectorAll('[data-tab]').forEach(b=>b.onclick=()=>tab(b.dataset.tab));
 $('e_sec').onchange=fillItems;$('e_it').onchange=fillEdit;fillItems();
 $('fadd').onsubmit=e=>{e.preventDefault();const s=sec($('a_sec').value);
   s.items.push({id:'n'+Date.now().toString(36),title:$('a_t').value.trim(),desc:$('a_d').value.trim(),url:$('a_u').value.trim()});
   save();renderLib();$('fadd').reset();fillItems();msg('Resource added to “'+s.title+'”. '+SAVED)};
 $('fedit').onsubmit=e=>{e.preventDefault();const s=sec($('e_sec').value),it=s.items.find(x=>x.id===$('e_it').value);if(!it)return;
   it.title=$('e_t').value.trim();it.desc=$('e_d').value.trim();it.url=$('e_u').value.trim();
   save();renderLib();fillItems();$('e_it').value=it.id;fillEdit();msg('Resource updated. '+SAVED)};
 $('dl').onclick=()=>{const out='/* Resource Library data. Replace js/resources-data.js on GitHub with this file. */\nwindow.RESOURCES='+JSON.stringify({version:Date.now(),sections:D.sections},null,1)+';\n';
   const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([out],{type:'text/javascript'}));a.download='resources-data.js';document.body.appendChild(a);a.click();a.remove();
   msg('File downloaded. Upload it to GitHub in the js folder (replace resources-data.js) to publish your changes.')};
 $('dc').onclick=()=>{try{localStorage.removeItem(KEY)}catch(e){}load();renderLib();admin();msg('Changes in this browser were discarded.')};
 const id=new URLSearchParams(location.search).get('edit');
 if(id){const s=D.sections.find(s=>s.items.some(x=>x.id===id));if(s){tab('edit');$('e_sec').value=s.slug;fillItems();$('e_it').value=id;fillEdit();setTimeout(()=>$('adminsec').scrollIntoView(),50)}}
}

document.addEventListener('DOMContentLoaded',()=>{
 load();
 const qi=$('q');if(qi)qi.oninput=()=>{q=qi.value.toLowerCase().trim();filter()};
 renderLib();renderSec();admin();retr();
});
})();
