/* Sign-in. With CFG.SCRIPT_URL set it talks to your Google Sheet script; otherwise it runs as a browser-only demo. */
const Auth=(()=>{
  const U='gcs_users',S='gcs_session',SRV=()=>!!CFG.SCRIPT_URL;
  const users=()=>{try{return JSON.parse(localStorage.getItem(U))||{}}catch(e){return{}}};
  const put=o=>{try{localStorage.setItem(U,JSON.stringify(o))}catch(e){}};
  const setS=o=>{try{localStorage.setItem(S,JSON.stringify(o))}catch(e){}};
  async function api(body){try{const r=await fetch(CFG.SCRIPT_URL,{method:'POST',body:JSON.stringify(body)});return await r.json()}catch(e){return{ok:false,err:'network'}}}
  async function hash(pw,salt){const b=new TextEncoder().encode(salt+pw);const d=await crypto.subtle.digest('SHA-256',b);return [...new Uint8Array(d)].map(x=>x.toString(16).padStart(2,'0')).join('')}
  const salt=()=>crypto.getRandomValues(new Uint32Array(2)).join('-');
  const sess=r=>setS({email:r.email,name:r.name,admin:!!r.admin,wa:r.wa||''});
  return{
    server:SRV,
    current(){try{return JSON.parse(localStorage.getItem(S))}catch(e){return null}},
    isAdmin(){const s=this.current();if(!s)return false;return SRV()?s.admin===true:(CFG.ADMIN_EMAILS||[]).some(e=>e.toLowerCase()===s.email)},
    whatsapp(){const s=this.current();if(!s)return '';return (SRV()?s.wa:CFG.WHATSAPP_URL)||''},
    errKey(r,def){const e=r&&r.err;return e==='locked'?'err_locked':(e==='network'||e==='server'||e==='busy')?'err_server':e==='exists'?'err_exists':e==='short'?'err_short':e==='code'?'err_code':def},
    async register(p){
      if(SRV()){const r=await api({action:'register',name:p.name,org:p.org,country:p.country,role:p.role,email:p.email,password:p.password,comments:p.comments||''});if(r.ok)sess(r);return r}
      const all=users(),k=p.email.toLowerCase();if(all[k])return{ok:false,err:'exists'};
      const sl=salt();all[k]={name:p.name,org:p.org,country:p.country,role:p.role,comments:p.comments||'',joined:new Date().toISOString(),salt:sl,h:await hash(p.password,sl)};put(all);
      setS({email:k,name:p.name});
      if(CFG.FORM_ENDPOINT){try{await fetch(CFG.FORM_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify({name:p.name,email:k,organization:p.org,country:p.country,role:p.role,comments:p.comments||''})})}catch(e){}}
      return{ok:true}},
    async login(email,pw){
      if(SRV()){const r=await api({action:'login',email,password:pw});if(r.ok)sess(r);return r}
      const u=users()[email.toLowerCase()];if(!u||u.h!==await hash(pw,u.salt))return{ok:false,err:'login'};
      setS({email:email.toLowerCase(),name:u.name});return{ok:true}},
    async forgot(email){return SRV()?api({action:'forgot',email}):{ok:true}},
    async reset(email,pw,code){
      if(SRV())return api({action:'reset',email,code,password:pw});
      const all=users(),k=email.toLowerCase();if(!all[k])return{ok:false,err:'noacct'};
      all[k].salt=salt();all[k].h=await hash(pw,all[k].salt);put(all);return{ok:true}},
    logout(){try{localStorage.removeItem(S)}catch(e){}}
  }})();
