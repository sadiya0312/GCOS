/* Front-end demo authentication (localStorage only). See README for connecting a real backend. */
const Auth=(()=>{
  const U='gcs_users',S='gcs_session';
  const users=()=>{try{return JSON.parse(localStorage.getItem(U))||{}}catch(e){return{}}};
  const put=o=>{try{localStorage.setItem(U,JSON.stringify(o))}catch(e){}};
  async function hash(pw,salt){const b=new TextEncoder().encode(salt+pw);const d=await crypto.subtle.digest('SHA-256',b);return [...new Uint8Array(d)].map(x=>x.toString(16).padStart(2,'0')).join('')}
  const salt=()=>crypto.getRandomValues(new Uint32Array(2)).join('-');
  return{
    current(){try{return JSON.parse(localStorage.getItem(S))}catch(e){return null}},
    isAdmin(){const s=this.current();return !!s&&(CFG.ADMIN_EMAILS||[]).some(e=>e.toLowerCase()===s.email)},
    async register(p){const all=users(),k=p.email.toLowerCase();
      if(all[k])return{ok:false,err:'exists'};
      const sl=salt();
      all[k]={name:p.name,org:p.org,country:p.country,role:p.role,comments:p.comments||'',joined:new Date().toISOString(),salt:sl,h:await hash(p.password,sl)};
      put(all);
      try{localStorage.setItem(S,JSON.stringify({email:k,name:p.name}))}catch(e){}
      if(CFG.FORM_ENDPOINT){try{await fetch(CFG.FORM_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},
        body:JSON.stringify({name:p.name,email:k,organization:p.org,country:p.country,role:p.role,comments:p.comments||''})})}catch(e){}}
      return{ok:true}},
    async login(email,pw){const u=users()[email.toLowerCase()];
      if(!u||u.h!==await hash(pw,u.salt))return{ok:false};
      try{localStorage.setItem(S,JSON.stringify({email:email.toLowerCase(),name:u.name}))}catch(e){}return{ok:true}},
    async reset(email,pw){const all=users(),k=email.toLowerCase();if(!all[k])return{ok:false};
      all[k].salt=salt();all[k].h=await hash(pw,all[k].salt);put(all);return{ok:true}},
    logout(){try{localStorage.removeItem(S)}catch(e){}}
  }})();
