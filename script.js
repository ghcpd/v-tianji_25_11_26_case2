// Auto-generated dataset of 12 zodiac animals
const ZODIACS = (() => {
  const items = [
    {en:'Rat', cn:'鼠', element:'Water', icon:'🐀', trait:'Resourceful', trait_cn:'機智', keywords:['clever','quick']},
    {en:'Ox', cn:'牛', element:'Earth', icon:'🐂', trait:'Dependable', trait_cn:'可靠', keywords:['steady','strong']},
    {en:'Tiger', cn:'虎', element:'Wood', icon:'🐅', trait:'Brave', trait_cn:'勇敢', keywords:['bold','adventurous']},
    {en:'Rabbit', cn:'兔', element:'Wood', icon:'🐇', trait:'Gentle', trait_cn:'溫和', keywords:['calm','warm']},
    {en:'Dragon', cn:'龍', element:'Fire', icon:'🐉', trait:'Confident', trait_cn:'自信', keywords:['energetic','charismatic']},
    {en:'Snake', cn:'蛇', element:'Fire', icon:'🐍', trait:'Wise', trait_cn:'智慧', keywords:['deep','intuitive']},
    {en:'Horse', cn:'馬', element:'Fire', icon:'🐎', trait:'Energetic', trait_cn:'熱情', keywords:['free','wild']},
    {en:'Goat', cn:'羊', element:'Earth', icon:'🐐', trait:'Kind', trait_cn:'善良', keywords:['creative','compassionate']},
    {en:'Monkey', cn:'猴', element:'Metal', icon:'🐒', trait:'Curious', trait_cn:'好奇', keywords:['playful','smart']},
    {en:'Rooster', cn:'雞', element:'Metal', icon:'🐓', trait:'Observant', trait_cn:'機敏', keywords:['meticulous','confident']},
    {en:'Dog', cn:'狗', element:'Earth', icon:'🐕', trait:'Loyal', trait_cn:'忠誠', keywords:['honest','friendly']},
    {en:'Pig', cn:'豬', element:'Water', icon:'🐖', trait:'Warmhearted', trait_cn:'熱心', keywords:['generous','calm']},
  ];
  // Add a short personality summary auto-generated
  return items.map(item => ({
    ...item,
    summary_en:`${item.en} (${item.cn}) — ${item.trait} and ${item.keywords.join(', ')}.`,
    summary_cn:`${item.cn} (${item.en}) — ${item.trait_cn}，${item.keywords.join('、')}。`
  }));
})();

// App State
const state = {
  lang: localStorage.getItem('zodiac_lang') || 'en',
  theme: localStorage.getItem('zodiac_theme') || 'light',
  elementFilter: localStorage.getItem('zodiac_filter') || 'all',
  search: '',
  items: ZODIACS
};

// Cached DOM elements
const grid = document.getElementById('zodiacGrid');
const cardTemplate = document.getElementById('zodiac-card-template');
const elementSelect = document.getElementById('elementFilter');
const searchInput = document.getElementById('searchInput');
const langToggle = document.getElementById('langToggle');
const themeToggle = document.getElementById('themeToggle');
const detailPanel = document.getElementById('detailPanel');
const detailContent = document.getElementById('detailContent');
const closeDetailBtn = document.getElementById('closeDetail');

// UI text for languages
const UI_TEXT = {
  en: {
    allElements: 'All Elements',
    searchPlaceholder: 'Search (EN/中文)',
    langToggle: '中文',
    themeToggleDark: 'Dark',
    themeToggleLight: 'Light',
    element: 'Element'
  },
  cn: {
    allElements: '所有元素',
    searchPlaceholder: '搜索 (EN/中文)',
    langToggle: 'EN',
    themeToggleDark: '暗色',
    themeToggleLight: '亮色',
    element: '元素'
  }
};

function savePreferences(){
  localStorage.setItem('zodiac_lang', state.lang);
  localStorage.setItem('zodiac_theme', state.theme);
  localStorage.setItem('zodiac_filter', state.elementFilter);
}

function init(){
  applyTheme(state.theme);
  applyLang(state.lang);
  populateElementOptions();
  wireEvents();
  renderGrid();
}

function populateElementOptions(){
  // unique elements
  const set = new Set(ZODIACS.map(z => z.element));
  const elements = Array.from(set);
  // Clear existing except 'all'
  elementSelect.innerHTML = '';
  const allOpt = document.createElement('option');
  allOpt.value = 'all';
  allOpt.textContent = UI_TEXT[state.lang].allElements;
  elementSelect.appendChild(allOpt);
  elements.forEach(el => {
    const opt = document.createElement('option');
    opt.value = el;
    opt.textContent = el;
    elementSelect.appendChild(opt);
  });
  elementSelect.value = state.elementFilter || 'all';
}

function wireEvents(){
  // Search
  searchInput.value = state.search || '';
  searchInput.placeholder = UI_TEXT[state.lang].searchPlaceholder;
  searchInput.addEventListener('input', (e) => {
    state.search = e.target.value.trim();
    renderGrid();
  });

  // Element filter
  elementSelect.addEventListener('change',(e)=>{
    state.elementFilter = e.target.value;
    savePreferences();
    renderGrid();
  });

  // Language toggle
  langToggle.addEventListener('click', ()=>{
    state.lang = state.lang === 'en' ? 'cn' : 'en';
    applyLang(state.lang);
    savePreferences();
    renderGrid();
  });

  // Theme toggle
  themeToggle.addEventListener('click', ()=>{
    state.theme = state.theme === 'light'? 'dark':'light';
    applyTheme(state.theme);
    savePreferences();
  });

  // close detail
  closeDetailBtn.addEventListener('click', closeDetail);

  // key handlers
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape') closeDetail();
  });
  // close when clicking outside of the panel
  document.addEventListener('click', (e)=>{
    if(detailPanel.classList.contains('open')){
      const panelRect = detailPanel.getBoundingClientRect();
      const clickX = e.clientX; const clickY = e.clientY;
      const within = clickX >= panelRect.left && clickX <= panelRect.right && clickY >= panelRect.top && clickY <= panelRect.bottom;
      if(!within){
        closeDetail();
      }
    }
  });
}

function applyTheme(theme){
  const root = document.documentElement;
  if(theme === 'dark'){
    root.dataset.theme = 'dark';
    themeToggle.textContent = UI_TEXT[state.lang].themeToggleLight || 'Light';
    themeToggle.setAttribute('aria-pressed','true');
  }else{
    root.removeAttribute('data-theme');
    themeToggle.textContent = UI_TEXT[state.lang].themeToggleDark || 'Dark';
    themeToggle.setAttribute('aria-pressed','false');
  }
}

function applyLang(lang){
  // toggle text for controls
  const ui = UI_TEXT[lang];
  document.getElementById('searchInput').placeholder = ui.searchPlaceholder;
  document.getElementById('langToggle').textContent = ui.langToggle;
  document.getElementById('langToggle').setAttribute('aria-pressed', (lang === 'cn').toString());
  // theme text
  themeToggle.textContent = state.theme === 'light' ? ui.themeToggleDark : ui.themeToggleLight;
  // element select label first option
  populateElementOptions();
}

function filterItems(){
  const q = state.search.toLowerCase();
  return state.items.filter(item=>{
    if(state.elementFilter !== 'all' && item.element !== state.elementFilter) return false;
    if(!q) return true;
    const inEn = item.en.toLowerCase().includes(q);
    const inCn = item.cn.includes(q) || q.split('').some(c => item.cn.includes(c));
    const inKeys = item.keywords.join(' ').toLowerCase().includes(q);
    const inSummary = (item.summary_en && item.summary_en.toLowerCase().includes(q)) || (item.summary_cn && item.summary_cn.toLowerCase().includes(q));
    return inEn || inCn || inKeys || inSummary;
  });
}

function renderGrid(){
  const items = filterItems();
  // Clear
  grid.innerHTML = '';
  // Add with small stagger for transitions
  items.forEach((it, idx)=>{
    const node = cardTemplate.content.cloneNode(true);
    const article = node.querySelector('.card');
    const icon = article.querySelector('.icon');
    const nameEn = article.querySelector('.name-en');
    const nameCn = article.querySelector('.name-cn');
    const tooltip = article.querySelector('.tooltip');
    icon.textContent = it.icon;
    nameEn.textContent = it.en;
    nameCn.textContent = it.cn;
    tooltip.textContent = state.lang === 'cn' ? (it.trait_cn || it.trait) : it.trait;
    // set up click to open
    article.addEventListener('click', ()=>openDetail(it));
    article.addEventListener('keydown', (e)=>{ if(e.key==='Enter') openDetail(it) });
    // small animation
    article.style.opacity = 0;article.style.transform = 'translateY(12px)';

    grid.appendChild(node);
    requestAnimationFrame(()=>{
      const appended = grid.childNodes[grid.childNodes.length-1];
      appended.style.transition = 'opacity 280ms ease, transform 280ms ease';
      appended.style.opacity = 1;appended.style.transform = 'translateY(0)';
    });
  });
}

function openDetail(item){
  detailContent.innerHTML = '';
  const h1 = document.createElement('div');h1.className='detail-name';h1.textContent = state.lang === 'en' ? item.en : item.cn;
  const cn = document.createElement('p');cn.className='detail-cn';cn.textContent = state.lang === 'en' ? item.cn : item.en;
  const el = document.createElement('div');el.className='detail-element';el.textContent = `${UI_TEXT[state.lang].element}: ${item.element}`;
  const hr = document.createElement('div');hr.className='detail-bg-anim';
  const desc = document.createElement('p');desc.textContent = state.lang === 'en' ? item.summary_en : item.summary_cn;
  detailContent.appendChild(h1);detailContent.appendChild(cn);detailContent.appendChild(el);detailContent.appendChild(hr);detailContent.appendChild(desc);
  detailPanel.classList.add('open');
  detailPanel.setAttribute('aria-hidden','false');
}
function closeDetail(){
  detailPanel.classList.remove('open');
  detailPanel.setAttribute('aria-hidden','true');
}

// initial apply for lang and selections
function bootstrap(){
  // Prefill values based on state
  if(state.lang) applyLang(state.lang);
  applyTheme(state.theme);
  // Restore element selection
  populateElementOptions();
  elementSelect.value = state.elementFilter || 'all';
  // placeholder
  searchInput.placeholder = UI_TEXT[state.lang].searchPlaceholder;
  renderGrid();
}

init();
bootstrap();
