// Self-contained dataset of 12 Chinese zodiac animals (EN + 中文)
const ZODIACS = [
  { id: 'rat', en: 'Rat', zh: '鼠', element: 'Water', trait: 'Quick-witted', trait_zh: '机智', desc: 'Clever, adaptable, quick-thinker and social; often excellent problem-solvers.', keywords_en: ['clever','quick','smart','social'], keywords_zh: ['机智','适应','聪明','社交'], icon: '🐀' },
  { id: 'ox', en: 'Ox', zh: '牛', element: 'Earth', trait: 'Dependable', trait_zh: '可靠', desc: 'Strong, steady and reliable. Ox focus on hard work and tenacity.', keywords_en: ['strong','steady','hardworking'], keywords_zh: ['坚强','可靠','勤奋'], icon: '🐂' },
  { id: 'tiger', en: 'Tiger', zh: '虎', element: 'Wood', trait: 'Courageous', trait_zh: '勇敢', desc: 'Brave, competitive and unpredictable — natural leaders who act decisively.', keywords_en: ['brave','leader','competitive'], keywords_zh: ['勇敢','领袖','竞争'], icon: '🐅' },
  { id: 'rabbit', en: 'Rabbit', zh: '兔', element: 'Wood', trait: 'Gentle', trait_zh: '温和', desc: 'Calm and elegant with strong intuition and a love for quiet comforts.', keywords_en: ['calm','gentle','elegant'], keywords_zh: ['温和','优雅','直觉'], icon: '🐇' },
  { id: 'dragon', en: 'Dragon', zh: '龙', element: 'Earth', trait: 'Confident', trait_zh: '自信', desc: 'Charismatic, energetic and ambitious — often creative and powerful personalities.', keywords_en: ['charismatic','energetic','creative'], keywords_zh: ['自信','有活力','有创造力'], icon: '🐉' },
  { id: 'snake', en: 'Snake', zh: '蛇', element: 'Fire', trait: 'Wise', trait_zh: '睿智', desc: 'Discerning, mysterious, and thoughtful — often deep thinkers who plan ahead.', keywords_en: ['wise','mysterious','thoughtful'], keywords_zh: ['睿智','神秘','深思'], icon: '🐍' },
  { id: 'horse', en: 'Horse', zh: '马', element: 'Fire', trait: 'Energetic', trait_zh: '有活力', desc: 'Free-spirited, active and adventurous — loves travel, movement, and friends.', keywords_en: ['free','active','adventurous'], keywords_zh: ['自由','活跃','冒险'], icon: '🐎' },
  { id: 'goat', en: 'Goat', zh: '羊', element: 'Earth', trait: 'Kind', trait_zh: '善良', desc: 'Gentle, creative and compassionate; often artistic and gentle in approach.', keywords_en: ['kind','creative','compassionate'], keywords_zh: ['善良','有创造力','同情'], icon: '🐐' },
  { id: 'monkey', en: 'Monkey', zh: '猴', element: 'Metal', trait: 'Inventive', trait_zh: '有创意', desc: 'Curious, clever and quick-witted; playful problem solvers who like puzzles.', keywords_en: ['curious','playful','inventive'], keywords_zh: ['好奇','爱玩','机灵'], icon: '🐒' },
  { id: 'rooster', en: 'Rooster', zh: '鸡', element: 'Metal', trait: 'Observant', trait_zh: '善于观察', desc: 'Hardworking, honest and confident — great at organization and detail.', keywords_en: ['observant','organized','honest'], keywords_zh: ['善于观察','有条理','诚实'], icon: '🐓' },
  { id: 'dog', en: 'Dog', zh: '狗', element: 'Earth', trait: 'Loyal', trait_zh: '忠诚', desc: 'Loyal, honest and friendly. A solid friend who values fairness and trust.', keywords_en: ['loyal','honest','friendly'], keywords_zh: ['忠诚','诚实','友好'], icon: '🐕' },
  { id: 'pig', en: 'Pig', zh: '猪', element: 'Water', trait: 'Generous', trait_zh: '慷慨', desc: 'Kind-hearted, generous and sincere; enjoys comfort and the good things in life.', keywords_en: ['generous','sincere','kind'], keywords_zh: ['慷慨','真诚','善良'], icon: '🐖' }
];

// Simple i18n dictionary for the page copy
const I18N = {
  en: { title: '12 Zodiac', subtitle: 'Explore the Chinese Zodiac — Rat to Pig', all: 'All Elements', search_placeholder: 'Search name or trait...' },
  zh: { title: '十二生肖', subtitle: '探索中国生肖 — 鼠到猪', all: '全部元素', search_placeholder: '搜索 名称 或 特质...' }
};


// localStorage keys
const LS = { lang: 'zodiac_lang', theme: 'zodiac_theme', element: 'zodiac_element', search: 'zodiac_search' };

// DOM refs
const gridEl = document.getElementById('grid');
const searchInput = document.getElementById('searchInput');
const elementFilter = document.getElementById('elementFilter');
const langToggle = document.getElementById('langToggle');
const themeToggle = document.getElementById('themeToggle');
const detailPanel = document.getElementById('detailPanel');
const closePanelBtn = document.getElementById('closePanel');

const detailIcon = document.getElementById('detailIcon');
const detailName = document.getElementById('detailName');
const detailElement = document.getElementById('detailElement');
const detailDesc = document.getElementById('detailDesc');

let currentLang = localStorage.getItem(LS.lang) || 'en';
let currentTheme = localStorage.getItem(LS.theme) || 'light';
let currentElement = localStorage.getItem(LS.element) || 'all';
let lastFocusedCard = null;

// Apply saved theme
document.documentElement.setAttribute('data-theme', currentTheme === 'dark' ? 'dark' : 'light');
themeToggle.checked = currentTheme === 'dark';

// set saved element and search
if (localStorage.getItem(LS.element)) elementFilter.value = currentElement;
if (localStorage.getItem(LS.search)) searchInput.value = localStorage.getItem(LS.search);

// Helper: translate static labels
function translateUI(lang){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(I18N[lang] && I18N[lang][key]) el.textContent = I18N[lang][key];
  });
  searchInput.placeholder = I18N[lang].search_placeholder;
}

// Render a card
function makeCard(zodiac){
  const card = document.createElement('article');
  card.className = 'card element-' + zodiac.element;
  card.setAttribute('data-id', zodiac.id);
  card.setAttribute('data-tooltip', zodiac.trait);

  const traitText = (currentLang === 'zh' && zodiac.trait_zh) ? zodiac.trait_zh : zodiac.trait;
  const nameText = (currentLang === 'zh') ? `${zodiac.zh} ${zodiac.en}` : `${zodiac.en} ${zodiac.zh}`;
  card.innerHTML = `
    <div class="icon ${'element-' + zodiac.element}">${zodiac.icon}</div>
    <div class="title">
      <div class="name">${nameText}</div>
      <div class="sub">${zodiac.element}</div>
    </div>
    <div class="tooltip">${traitText}</div>
  `;

  // Accessible role and label
  card.setAttribute('role','button');
  const ariaName = (currentLang === 'zh') ? `${zodiac.zh} ${zodiac.en} — ${zodiac.trait_zh || zodiac.trait}` : `${zodiac.en} ${zodiac.zh} — ${zodiac.trait}`;
  card.setAttribute('aria-label', ariaName);

  // click -> open detail
  card.addEventListener('click', ()=> openDetail(zodiac));

  // keyboard accessibility
  card.tabIndex = 0;
  card.addEventListener('keydown', (e)=>{ if(e.key === 'Enter' || e.key === ' ') openDetail(zodiac); });

  return card;
}

// Render grid (with optional animations)
function renderGrid(list){
  gridEl.innerHTML = '';
  if(!list || list.length === 0){
    const msg = document.createElement('div');
    msg.className = 'no-results';
    msg.textContent = currentLang === 'zh' ? '未找到匹配的生肖。尝试更改筛选或搜索。' : 'No zodiac found — try changing the filter or search.';
    gridEl.appendChild(msg);
    return;
  }
  // Staggered enter animation
  list.forEach((z, idx) => {
    const card = makeCard(z);
    card.classList.add('enter');
    gridEl.appendChild(card);
    setTimeout(()=>card.classList.replace('enter','enter-loaded'), 10 + idx*50);
  });
}

// Filter + search logic
function filterAndRender(){
  const query = (searchInput.value || '').trim().toLowerCase();
  const elementSel = elementFilter.value;

  const filtered = ZODIACS.filter(z => {
    if(elementSel !== 'all' && z.element !== elementSel) return false;
    if(!query) return true;

    // match in en/zh/keywords/trait
    if(z.en.toLowerCase().includes(query)) return true;
    if(z.zh.includes(query)) return true;
    if(z.trait.toLowerCase().includes(query)) return true;
    if(z.keywords_en.join(' ').toLowerCase().includes(query)) return true;
    if(z.keywords_zh.join(' ').toLowerCase().includes(query)) return true;
    return false;
  });

  renderGrid(filtered);

  // update announcer for screen readers
  const status = document.getElementById('status');
  if(status){
    if(filtered.length === 0){
      status.textContent = currentLang === 'zh' ? '无匹配结果' : 'No matching results';
    } else {
      status.textContent = currentLang === 'zh' ? `${filtered.length} 条结果` : `${filtered.length} results`;
    }
  }

  // Save filters to localStorage
  localStorage.setItem(LS.element, elementSel);
  localStorage.setItem(LS.search, searchInput.value || '');
}

// Open the detail panel
function openDetail(z){
  // remember last focused element so we can restore focus
  lastFocusedCard = document.activeElement;
  detailIcon.textContent = z.icon;
  detailName.textContent = currentLang === 'zh' ? `${z.zh} ${z.en}` : `${z.en} ${z.zh}`;
  detailElement.textContent = (currentLang === 'zh' ? '元素：' : 'Element:') + ' ' + (currentLang === 'zh' ? translateElement(z.element) : z.element);
  detailDesc.textContent = z.desc;
  detailPanel.classList.add('open');
  detailPanel.setAttribute('aria-hidden','false');
  // move focus to the close button for accessibility
  setTimeout(()=>closePanelBtn.focus(), 120);
}

function closeDetail(){
  detailPanel.classList.remove('open');
  detailPanel.setAttribute('aria-hidden','true');
  // restore focus
  if(lastFocusedCard && typeof lastFocusedCard.focus === 'function'){
    setTimeout(()=> lastFocusedCard.focus(), 80);
  }
}

function translateElement(el){
  const map = { Metal: '金', Wood: '木', Water: '水', Fire: '火', Earth: '土' };
  return map[el] || el;
}

// Language toggle
function toggleLang(){
  currentLang = currentLang === 'en' ? 'zh' : 'en';
  localStorage.setItem(LS.lang, currentLang);
  translateUI(currentLang);
  // update element dropdown labels
  updateElementLabels();
  // Re-render grid so tooltips / name formatting update
  filterAndRender();
}

function updateElementLabels(){
  // Update select option text to show translated element names
  for(const opt of elementFilter.options){
    if(opt.value === 'all') opt.textContent = I18N[currentLang].all;
    else opt.textContent = (currentLang === 'zh') ? translateElement(opt.value) : opt.value;
  }
}

// Theme toggle
function toggleTheme(){
  currentTheme = themeToggle.checked ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', currentTheme === 'dark' ? 'dark' : 'light');
  localStorage.setItem(LS.theme, currentTheme);
}

// wire up controls
searchInput.addEventListener('input', ()=> filterAndRender());
elementFilter.addEventListener('change', ()=> filterAndRender());
langToggle.addEventListener('click', ()=>{ toggleLang(); });
themeToggle.addEventListener('change', ()=>{ toggleTheme(); });
closePanelBtn.addEventListener('click', closeDetail);
detailPanel.addEventListener('click', (e)=>{ if(e.target === detailPanel) closeDetail(); });
document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeDetail(); });

// Initialize UI
translateUI(currentLang);
updateElementLabels();
filterAndRender();

// expose for debugging (optional)
window.ZODIACS_APP = { ZODIACS, filterAndRender, openDetail, closeDetail };
