/* Shared: translations, header/footer, tip sheets, language switcher */
const LANGS=[['en','English'],['es','Español'],['fr','Français'],['ar','العربية'],['zh','中文'],['ru','Русский']];
const T={
nav_about:['About','Acerca de','À propos','حول','关于','О нас'],
nav_tips:['Tip Sheets','Fichas de consejos','Fiches pratiques','أوراق النصائح','提示手册','Памятки'],
nav_report:['Progress Report','Informe de avances','Rapport d\'avancement','تقرير التقدم','进展报告','Отчёт о работе'],
nav_connect:['Stay Connected','Mantente conectado','Restez connectés','ابقَ على اتصال','保持联系','На связи'],
nav_home:['Home','Inicio','Accueil','الرئيسية','首页','Главная'],
nav_green:['Green Jobs','Empleos verdes','Emplois verts','الوظائف الخضراء','绿色就业','Зелёные профессии'],
nav_res:['Resource Library','Biblioteca de recursos','Bibliothèque de ressources','مكتبة الموارد','资源库','Библиотека ресурсов'],
search_ph:['Search…','Buscar…','Rechercher…','بحث…','搜索…','Поиск…'],
login:['Login','Iniciar sesión','Connexion','تسجيل الدخول','登录','Войти'],
register:['Become a member','Hazte miembro','Devenir membre','كن عضوًا','成为会员','Стать участником'],
logout:['Logout','Cerrar sesión','Déconnexion','تسجيل الخروج','退出','Выйти'],
hello:['Welcome','Bienvenido/a','Bienvenue','مرحبًا','欢迎','Добро пожаловать'],
hero_h:['A global community of support for sustainability education','Una comunidad global de apoyo para la educación en sostenibilidad','Une communauté mondiale de soutien pour l\'éducation à la durabilité','مجتمع عالمي للدعم من أجل التعليم من أجل الاستدامة','全球可持续发展教育支持社区','Глобальное сообщество поддержки образования для устойчивого развития'],
hero_p:['Educators, researchers, publishers and workforce specialists sharing practical tools to build a green, inclusive and sustainable future.','Docentes, investigadores, editores y especialistas en empleo comparten herramientas prácticas para construir un futuro verde, inclusivo y sostenible.','Enseignants, chercheurs, éditeurs et spécialistes de l\'emploi partagent des outils pratiques pour bâtir un avenir vert, inclusif et durable.','معلمون وباحثون وناشرون وأخصائيو القوى العاملة يتشاركون أدوات عملية لبناء مستقبل أخضر وشامل ومستدام.','教育工作者、研究人员、出版商和劳动力发展专家共同分享实用工具，共建绿色、包容、可持续的未来。','Преподаватели, исследователи, издатели и специалисты по трудовым ресурсам делятся практическими инструментами для зелёного, инклюзивного и устойчивого будущего.'],
tips_h:['View and Download Tip Sheets','Ver y descargar fichas de consejos','Consulter et télécharger les fiches pratiques','عرض وتنزيل أوراق النصائح','查看和下载提示手册','Просмотр и загрузка памяток'],
tips_sub:['Research and education are at the core of all progress, and can now be aimed at helping to achieve the Sustainable Development Goals (SDGs) by the 2030 deadline.','La investigación y la educación son el núcleo de todo progreso y ahora pueden orientarse a lograr los Objetivos de Desarrollo Sostenible (ODS) antes de 2030.','La recherche et l\'éducation sont au cœur de tout progrès et peuvent désormais viser la réalisation des Objectifs de développement durable (ODD) d\'ici 2030.','البحث والتعليم هما جوهر كل تقدم، ويمكن الآن توجيههما للمساهمة في تحقيق أهداف التنمية المستدامة بحلول عام 2030.','研究和教育是一切进步的核心，现在可以用于助力在2030年期限前实现可持续发展目标（SDGs）。','Исследования и образование — основа любого прогресса; теперь их можно направить на достижение Целей устойчивого развития (ЦУР) к 2030 году.'],
view_pdf:['View or download PDF','Ver o descargar PDF','Voir ou télécharger le PDF','عرض أو تنزيل PDF','查看或下载 PDF','Открыть или скачать PDF'],
about_h:['Education for Green Jobs','Educación para empleos verdes','Éducation aux emplois verts','التعليم من أجل الوظائف الخضراء','绿色就业教育','Образование для зелёных рабочих мест'],
report_h:['Progress Report 2023–24','Informe de avances 2023-24','Rapport d\'avancement 2023-24','تقرير التقدم 2023-24','2023-24年进展报告','Отчёт о работе за 2023–24'],
connect_h:['Stay Connected and Communicate','Mantente conectado y comunícate','Restez connectés et communiquez','ابقَ على اتصال وتواصل','保持联系与交流','Оставайтесь на связи и общайтесь'],
wa:['Community Whatsapp Group','Grupo comunitario de WhatsApp','Groupe communautaire WhatsApp','مجموعة المجتمع على واتساب','社区 WhatsApp 群组','Группа сообщества в WhatsApp'],
form:['Form to submit informational resources for the community','Formulario para enviar recursos informativos a la comunidad','Formulaire pour soumettre des ressources d\'information à la communauté','نموذج لإرسال موارد معلوماتية للمجتمع','向社区提交信息资源的表单','Форма для отправки информационных ресурсов сообществу'],
li:['Community LinkedIn Group','Grupo comunitario de LinkedIn','Groupe communautaire LinkedIn','مجموعة المجتمع على لينكد إن','社区 LinkedIn 群组','Группа сообщества в LinkedIn'],
login_h:['Login to Global Community of Support','Inicia sesión en la Comunidad Global de Apoyo','Connexion à la Communauté mondiale de soutien','تسجيل الدخول إلى مجتمع الدعم العالمي','登录全球支持社区','Вход в Глобальное сообщество поддержки'],
email:['Email','Correo electrónico','E-mail','البريد الإلكتروني','电子邮箱','Эл. почта'],
password:['Password','Contraseña','Mot de passe','كلمة المرور','密码','Пароль'],
confirm:['Confirm password','Confirmar contraseña','Confirmer le mot de passe','تأكيد كلمة المرور','确认密码','Подтвердите пароль'],
name:['Full name','Nombre completo','Nom complet','الاسم الكامل','姓名','Полное имя'],
org:['Organization','Organización','Organisation','المؤسسة','机构','Организация'],
country:['Country','País','Pays','البلد','国家','Страна'],
role:['Role','Rol','Fonction','الدور','职务','Должность'],
submit_reg:['Create my membership','Crear mi membresía','Créer mon adhésion','إنشاء عضويتي','创建我的会员资格','Создать членство'],
no_acct:['Not a member yet?','¿Aún no eres miembro?','Pas encore membre ?','لست عضوًا بعد؟','还不是会员？','Ещё не участник?'],
have_acct:['Already a member?','¿Ya eres miembro?','Déjà membre ?','هل أنت عضو بالفعل؟','已经是会员？','Уже участник?'],
err_login:['Email or password is incorrect.','El correo o la contraseña son incorrectos.','E-mail ou mot de passe incorrect.','البريد الإلكتروني أو كلمة المرور غير صحيحة.','邮箱或密码不正确。','Неверная почта или пароль.'],
err_exists:['An account with this email already exists. Please log in.','Ya existe una cuenta con este correo. Inicia sesión.','Un compte existe déjà avec cet e-mail. Connectez-vous.','يوجد حساب بهذا البريد بالفعل. سجّل الدخول.','该邮箱已注册，请直接登录。','Аккаунт с этой почтой уже существует. Войдите.'],
err_match:['Passwords do not match.','Las contraseñas no coinciden.','Les mots de passe ne correspondent pas.','كلمتا المرور غير متطابقتين.','两次输入的密码不一致。','Пароли не совпадают.'],
err_short:['Password must be at least 8 characters.','La contraseña debe tener al menos 8 caracteres.','Le mot de passe doit comporter au moins 8 caractères.','يجب ألا تقل كلمة المرور عن 8 أحرف.','密码至少需要8个字符。','Пароль должен содержать не менее 8 символов.']
};
const TIPS=[
['Academic Authors','Authors must actively choose to create the knowledge humankind needs to fuel growth that is sustainable and make change that is positive.','academic-authors'],
['Academic Journal Editors','Journal editors guide and curate the academic record. To drive sustainability in the research agenda, journal editors can support policies that give authors the platform to focus on sustainability.','academic-journal-editors'],
['Academic Publishers','The academic publishing community must create the systems through which research and education can drive global achievement of the SDGs.','academic-publishers'],
['Connecting Researchers and Practitioners','Research alone will not make the SDGs reality. Each member of scholarly community must work to put research in the hands of practitioners.','connecting-researchers-and-practitioners'],
['Academic Librarians','Libraries must ensure that the knowledge required to achieve the SDGs can be recognized, discovered and made available to those who will build upon it and put it into action.','academic-librarians'],
['Graduate Researchers and Students','The new generations of researchers, beginning their careers in a time of change and action, must integrate sustainability into the agenda of future scholarship.','graduate-students-and-researchers'],
['Equity','Top action tips for promoting equity in research and publishing: for collaborative use by researchers, publishers, editors, funders and higher education institutions.','equity-revised'],
['Educators','Educators can inform students of sustainability challenges and solutions, and inspire and empower them to take action and find new and better solutions to our biggest challenges.','educators'],
['SDG Rubric for Educators/Researchers','Guidance in the form of an applications guide for academic book authors and editors to help them reference SDGs in their work, addressing the 17 goals one-by-one.','using-the-sdg-rubric-1'],
['Communicating Implications 1: Policymakers, Journalists and the Public','To drive real world change, the practical implications of SDG related research must be accessible to policymakers, journalists and the public.','communicating-implications-1-policymakers-journalists-and-the-public'],
['Communicating Implications 2: Professionals and Practitioners','To drive real world change, the practical implications of SDG related research must be accessible to professionals and practitioners.','communicating-implications-2-professionals-and-practitioners'],
['APC Waivers and Discounts','A \'waiver\' is a discounted or free Article Processing Charge (APC). Be aware that waivers do not always translate into offers for removing all Article Processing Charges for a particular author or submitted manuscript type.','apc-waivers-and-discounts'],
['Co-creating Research with Practitioners','Co-creation involves collaboration between researchers and practitioners and aims to jointly generate knowledge by involving stakeholders from various sectors throughout the research process to ensure that real-world needs and challenges are addressed effectively.','co-creating-research-with-practitioners'],
['Academic Societies','Academic societies can enhance how research can help solve urgent societal issues, connect researchers to policymakers and practitioners to improve the utilization of research results and inform the research agendas, and cultivate a culture of action for a sustainable society by researchers, educators, and other society members.','academic-societies']
];
const LINKS={
wa:'https://uspartnership-dot-yamm-track.appspot.com/2kM8T0p6yCm1lCs0U8SybwSlm2svbJl6fQ4bPQnlOtz2QIT9eoQHZSyySyF603Gk6g10r5DdRTq8DKh2XJMkMV9_ySPqCP3QX36IbJURjy9QFOubZd3zPt6Zo6R3OtzqKKwUQ0a5-Yuc1nsJqyHl0HfusBk90yqRXAPTDgZ_opvn2YzwoKGKEVVgPq5-CDYeW2t17aSFjioZeHPYhVg',
form:'https://uspartnership-dot-yamm-track.appspot.com/2jEvY3Ykr1mDP_wL93ni1saGSWfkFDoPXAg7ouka2rViWIT9eoQHGM65sWd5pKTxa6JGSZib76usAy8l224sudpyqclBWPC-27k90_Sj2LNmMGpv0Qf8_Hqs23g78jyva8SfGqzfkeByFPW7bk3L1AmTXlU2xOn7PvZqqQV5LegJABYHpnU2n-07fVWr-xRfKtiJetFUeGDd_xmdVdvsrcNXmGy9NjeTzbKVBHpcpGkvp1CnByVO_AqLrtacU1yjUECpMIgEi2wg',
li:'https://uspartnership-dot-yamm-track.appspot.com/2EZMZdRc56sPVNebAIzgzYIYPBsj85ChXRElM-j2-yCahIT9eoQHhFQ16AsDiGhrP6P-t3EbmtEztfO3E6B9toBi91--D3WpgkPN2G_6sYW0-K7SErq1cSYkC9j_fS_58u6OiSMbteaKfMlNglDBGOGfoNH2cxyS1FmTBYD4OQuXJNI7NoKg1HhLPFj163PtTh7Y'};
const store={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
let L=Math.max(0,LANGS.findIndex(l=>l[0]===(store.get('gcs_lang')||(navigator.language||'en').slice(0,2))));
const t=k=>(T[k]||[k])[L]||T[k][0];
const R=document.body.dataset.root||'',PG=document.body.dataset.page||'';
const NAV=[['index.html','nav_home','home'],['tip-sheets.html','nav_tips','tips'],['green-jobs.html','nav_green','green'],['progress-report.html','nav_report','report'],['resources.html','nav_res','res'],['connect.html','nav_connect','connect']];
function chrome(){
 const me=Auth.current();
 document.getElementById('hdr').innerHTML=`<a class="sr" href="#main">Skip to content</a>
 <header class="top"><div class="wrap bar">
 <a class="brand" href="${R}index.html" aria-label="Global Community of Support"><svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="18" fill="#86efac" stroke="#14532d" stroke-width="2"/><ellipse cx="20" cy="20" rx="8" ry="18" fill="none" stroke="#14532d" stroke-width="1.6"/><path d="M2 20h36M5 11h30M5 29h30" stroke="#14532d" stroke-width="1.6" fill="none"/></svg><span>Global Community<br>of Support</span></a>
 <nav class="main" id="nv" aria-label="Main">${NAV.map(n=>`<a href="${R}${n[0]}" data-t="${n[1]}"${n[2]===PG?' class="on" aria-current="page"':''}></a>`).join('')}</nav>
 <div class="right"><select class="lang" id="lg" aria-label="Language">${LANGS.map((l,i)=>`<option value="${i}"${i===L?' selected':''}>${l[1]}</option>`).join('')}</select>
 ${me?`<span style="font-size:.88rem"><span data-t="hello"></span>, ${me.name.replace(/</g,'&lt;')}</span><button class="btn ghost" id="lo" data-t="logout"></button>`:
 `<a class="btn ghost" href="${R}login.html" data-t="login"></a><a class="btn solid" href="${R}register.html" data-t="register"></a>`}
 <button class="burger" aria-label="Menu" aria-expanded="false" id="bg">☰</button></div></div></header>`;
 document.getElementById('ftr').innerHTML=`<footer><div class="wrap"><strong>Global Community of Support</strong>
 <div class="fl">${NAV.map(n=>`<a href="${R}${n[0]}" data-t="${n[1]}"></a>`).join('')}</div>
 <p>Tip sheets courtesy of <a href="https://www.sdgcompactfellows.org/top-action-tips-2-1">SDG Compact Fellows</a>, licensed under <a href="http://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>. Contact: <a href="mailto:DebraRowe@aya.yale.edu">DebraRowe@aya.yale.edu</a> · Feedback on tips: <a href="mailto:hesicompactfellows@gmail.com">hesicompactfellows@gmail.com</a></p></div></footer><button id="top" aria-label="Back to top">↑</button>`;
 document.getElementById('lg').onchange=e=>{L=+e.target.value;store.set('gcs_lang',LANGS[L][0]);apply()};
 const lo=document.getElementById('lo');if(lo)lo.onclick=()=>{Auth.logout();location.href=R+'index.html'};
 const bg=document.getElementById('bg'),nv=document.getElementById('nv');
 bg.onclick=()=>{const o=nv.classList.toggle('open');bg.setAttribute('aria-expanded',o)};
}
function apply(){
 document.documentElement.lang=LANGS[L][0];document.documentElement.dir=LANGS[L][0]==='ar'?'rtl':'ltr';
 document.querySelectorAll('[data-t]').forEach(n=>n.textContent=t(n.dataset.t));
 document.querySelectorAll('[data-ph]').forEach(n=>n.placeholder=t(n.dataset.ph));
 const g=document.getElementById('tipgrid');
 if(g)g.innerHTML=TIPS.map(x=>`<article class="card"><h3>${x[0]}</h3><p>${x[1]}</p><a href="https://www.sdgcompactfellows.org/${x[2]}" target="_blank" rel="noopener">${t('view_pdf')}</a></article>`).join('');
 if(window.afterApply)afterApply();
}
document.addEventListener('DOMContentLoaded',()=>{chrome();apply()});
