/* Front-end demo authentication (localStorage only). See README for connecting a real backend. */
const Auth=(()=>{
  const U='gcs_users',S='gcs_session';
  const users=()=>{try{return JSON.parse(localStorage.getItem(U))||{}}catch(e){return{}}};
  async function hash(pw,salt){const b=new TextEncoder().encode(salt+pw);const d=await crypto.subtle.digest('SHA-256',b);return [...new Uint8Array(d)].map(x=>x.toString(16).padStart(2,'0')).join('')}
  return{
    current(){try{return JSON.parse(localStorage.getItem(S))}catch(e){return null}},
    async register(p){const all=users(),k=p.email.toLowerCase();
      if(all[k])return{ok:false,err:'exists'};
      const salt=crypto.getRandomValues(new Uint32Array(2)).join('-');
      all[k]={name:p.name,org:p.org,country:p.country,role:p.role,salt,h:await hash(p.password,salt)};
      localStorage.setItem(U,JSON.stringify(all));
      localStorage.setItem(S,JSON.stringify({email:k,name:p.name}));return{ok:true}},
    async login(email,pw){const u=users()[email.toLowerCase()];
      if(!u||u.h!==await hash(pw,u.salt))return{ok:false};
      localStorage.setItem(S,JSON.stringify({email:email.toLowerCase(),name:u.name}));return{ok:true}},
    logout(){localStorage.removeItem(S)}
  }})();
