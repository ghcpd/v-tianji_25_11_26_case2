/* script.js — 12 Zodiac Dashboard
   - Generates the zodiac dataset
   - Renders cards
   - Filters, search, language toggle, theme toggle
   - Detail panel and transitions
   - Persists settings in localStorage
*/

(function(){
  // Simple dataset for the 12 zodiacs
  const ZODIAC_DATA = [
    {id: 'rat', en: 'Rat', zh: '鼠', icon: '🐀', element: 'Water', trait: 'Clever', descEN: 'Quick-witted, resourceful, and versatile. Great at problem solving and social networking.', descZH: '机智、机灵、适应力强，善于解决问题与社交。'},
    {id: 'ox', en: 'Ox', zh: '牛', icon: '🐂', element: 'Earth', trait: 'Dependable', descEN: 'Strong, reliable, and honest. Deeply rooted in tradition with steadfast patience.', descZH: '坚实、可靠、诚恳，重视传统，耐心恒久。'},
    {id: 'tiger', en: 'Tiger', zh: '虎', icon: '🐅', element: 'Wood', trait: 'Brave', descEN: 'Bold and courageous, a natural leader who values freedom and challenge.', descZH: '勇敢无畏，天生领袖，追求自由与挑战。'},
    {id: 'rabbit', en: 'Rabbit', zh: '兔', icon: '🐇', element: 'Wood', trait: 'Gentle', descEN: 'Elegant, quiet, and kind; a lover of comfort and peaceful moments.', descZH: '优雅、温和、善良，追求舒适与宁静。'},
    {id: 'dragon', en: 'Dragon', zh: '龙', icon: '🐉', element: 'Fire', trait: 'Charismatic', descEN: 'Energetic, charismatic, and confident; blessed with strong ambition.', descZH: '充满能量、有魅力且自信，怀抱极大抱负。'},
    {id: 'snake', en: 'Snake', zh: '蛇', icon: '🐍', element: 'Fire', trait: 'Wise', descEN: 'Thoughtful, private, and intuitive; great at strategy and depth.', descZH: '周密、神秘、直觉敏锐，擅长策略与深思。'},
    {id: 'horse', en: 'Horse', zh: '马', icon: '🐎', element: 'Fire', trait: 'Energetic', descEN: 'Free-spirited and active. Loves travel and embraces spontaneity.', descZH: '自由奔放、充满活力，喜爱旅行并拥抱即兴。'},
    {id: 'goat', en: 'Goat', zh: '羊', icon: '🐐', element: 'Earth', trait: 'Creative', descEN: 'Gentle, artistic, and compassionate. Deep appreciation for beauty.', descZH: '温柔、有艺术感并富同情心，热爱美好事物。'},
    {id: 'monkey', en: 'Monkey', zh: '猴', icon: '🐒', element: 'Metal', trait: 'Inventive', descEN: 'Clever and curious, playful but sharp-minded with quick learning.', descZH: '聪明好奇、调皮却机智，学习能力强。'},
    {id: 'rooster', en: 'Rooster', zh: '鸡', icon: '🐓', element: 'Metal', trait: 'Diligent', descEN: 'Observant, hardworking, and honest with attention to detail.', descZH: '观察入微、勤奋诚恳，注重细节。'},
    {id: 'dog', en: 'Dog', zh: '狗', icon: '🐕', element: 'Earth', trait: 'Loyal', descEN: 'Loyal and realistic, a devoted friend with a strong sense of duty.', descZH: '忠诚务实，是忠心的朋友，有强烈的责任感。'},
    {id: 'pig', en: 'Pig', zh: '猪', icon: '🐖', element: 'Water', trait: 'Generous', descEN: 'Kind, tolerant, and generous; a lover of life and simple pleasures.', descZH: '和善宽容、慷慨大方，爱生活并享受简单乐趣。'}
  ];

  const ELEMENTS = ['All','Metal','Wood','Water','Fire','Earth'];

  // UI references
  const gridEl = document.getElementById('grid');
  const elementFilterEl = document.getElementById('elementFilter');
  const searchEl = document.getElementById('searchInput');
  const langToggleEl = document.getElementById('langToggle');
  const themeToggleEl = document.getElementById('themeToggle');
  const detailPanel = document.getElementById('detailPanel');
  const closePanelBtn = document.getElementById('closePanel');
  const detailContent = document.getElementById('detailContent');
  const overlay = document.getElementById('overlay');
  const appTitle = document.querySelector('.app-title');

  const STORAGE_KEY = 'zodiac_dashboard_prefs';

  const translations = {
    en: {
      title: '12 Zodiac Dashboard',
      elementLabel: 'Element',
      searchPlaceholder: 'Search name or trait...',
      langButton: '中文',
      elementOptions: ['All','Metal','Wood','Water','Fire','Earth']
    },
    zh: {
      title: '十二生肖面板',
      elementLabel: '五行',
      searchPlaceholder: '搜索 名称 或 特点...',
      langButton: 'EN',
      elementOptions: ['全部','金','木','水','火','土']
    }
  };

  // Default settings
  const DEFAULT_PREFS = {lang: 'en', theme: 'light', element: 'all', query: ''};
  let prefs = loadPrefs();

  // Initialize
  applyTheme(prefs.theme);
  applyLang(prefs.lang);
  elementFilterEl.value = prefs.element || 'all';
  searchEl.value = prefs.query || '';

  renderGrid();

  // Event listeners
  elementFilterEl.addEventListener('change', onFilterChange);
  searchEl.addEventListener('input', onSearchChange);
  langToggleEl.addEventListener('click', toggleLang);
  themeToggleEl.addEventListener('change', toggleTheme);
  closePanelBtn.addEventListener('click', closePanel);
  overlay.addEventListener('click', closePanel);
  document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closePanel(); });

  // Ensure theme toggle state
  themeToggleEl.checked = prefs.theme === 'dark';

  function loadPrefs(){
    try{
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : DEFAULT_PREFS;
    }catch(e){return DEFAULT_PREFS}
  }

  function savePrefs(){
    try{localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));}catch(e){}
  }

  function applyTheme(theme){
    const root = document.documentElement;
    if(theme === 'dark') root.setAttribute('data-theme','dark');
    else root.removeAttribute('data-theme');
  }

  function toggleTheme(e){
    prefs.theme = e.target.checked ? 'dark' : 'light';
    applyTheme(prefs.theme);
    savePrefs();
  }

  function applyLang(lang){
    prefs.lang = lang;
    // Update UI
    appTitle.textContent = translations[lang].title;
    document.querySelector('label[for=elementFilter]').textContent = translations[lang].elementLabel;
    document.querySelector('label[for=searchInput]').textContent = prefs.lang === 'zh' ? '搜索' : 'Search';
    searchEl.placeholder = translations[lang].searchPlaceholder;
    langToggleEl.textContent = translations[lang].langButton;
    // Update element options
    const options = translations[lang].elementOptions;
    elementFilterEl.innerHTML = options.map((opt,i)=> `<option value="${ELEMENTS[i].toLowerCase()}">${opt}</option>`).join('');
    // Apply selected element to keep sync
    elementFilterEl.value = prefs.element || 'all';
    savePrefs();
    renderGrid();
  }

  function toggleLang(){
    prefs.lang = prefs.lang === 'en' ? 'zh' : 'en';
    applyLang(prefs.lang);
  }

  function onFilterChange(e){
    prefs.element = e.target.value;
    savePrefs();
    renderGrid();
  }

  function onSearchChange(e){
    prefs.query = e.target.value.trim();
    savePrefs();
    renderGrid();
  }

  function renderGrid(){
    // Filter by element and query
    const q = (prefs.query||'').toLowerCase();
    const element = prefs.element || 'all';

    const filtered = ZODIAC_DATA.filter(z => {
      const matchElement = element==='all' || z.element.toLowerCase()===element;
      const textEN = `${z.en} ${z.trait} ${z.descEN}`.toLowerCase();
      const textZH = `${z.zh} ${z.trait} ${z.descZH}`.toLowerCase();
      const matchQuery = !q || textEN.includes(q) || textZH.includes(q);
      return matchElement && matchQuery;
    });

    gridEl.innerHTML = '';
    if(filtered.length === 0){ gridEl.innerHTML = `<p class="muted">${prefs.lang==='zh' ? '没有找到结果' : 'No results found'}</p>`; return; }

    filtered.forEach((z, idx)=>{
      const card = document.createElement('article');
      card.className = `zodiac-card fade-in`;
      card.setAttribute('tabindex','0');
      card.dataset.id = z.id;

      const icon = document.createElement('div');
      icon.className = 'zodiac-icon'; icon.textContent = z.icon;

      const name = document.createElement('div');
      name.className = 'zodiac-name';
      name.innerHTML = prefs.lang === 'zh' ? `${z.zh}` : `${z.en}`;

      const sub = document.createElement('div');
      sub.className = 'zodiac-sub';
      sub.textContent = prefs.lang === 'zh' ? `${z.en} • ${z.element}` : `${z.zh} • ${z.element}`;

      const tooltip = document.createElement('span');
      tooltip.className = 'tooltip';
      tooltip.textContent = prefs.lang === 'zh' ? `${z.trait} — ${z.descZH.split('。')[0]}` : `${z.trait} — ${z.descEN.split('.')[0]}`;

      card.appendChild(icon);
      card.appendChild(name);
      card.appendChild(sub);
      card.appendChild(tooltip);

      card.addEventListener('click', ()=> openPanel(z));
      card.addEventListener('keyup', (e)=>{ if(e.key==='Enter') openPanel(z); });

      gridEl.appendChild(card);

      // Add slight stagger animation
      card.style.animationDelay = `${idx * 35}ms`;
    });
  }

  function openPanel(z){
    // Build content
    detailContent.innerHTML = '';

    const title = document.createElement('div');
    title.className = 'zodiac-title';
    title.innerHTML = `<span class="zodiac-icon">${z.icon}</span><div><div style='font-weight:700'>${prefs.lang==='zh'? z.zh : z.en}</div><div class='zodiac-sub' style='font-size:0.9rem'>${prefs.lang==='zh'? z.en : z.zh}</div></div>`;

    const elementBadge = document.createElement('div');
    elementBadge.className = 'element';
    elementBadge.textContent = prefs.lang==='zh' ? (mapElementToZh(z.element)) : z.element;

    const desc = document.createElement('p');
    desc.className = 'desc';
    desc.textContent = prefs.lang === 'zh' ? z.descZH : z.descEN;

    // small animated accent
    const accent = document.createElement('div');
    accent.className = 'panel-accent';
    accent.style.marginTop = '12px';
    accent.innerHTML = `<div style='height:8px;width:100%;border-radius:12px;background:linear-gradient(90deg,rgba(96,165,250,0.12),rgba(59,130,246,0.12))'></div>`;

    detailContent.appendChild(title);
    detailContent.appendChild(elementBadge);
    detailContent.appendChild(desc);
    detailContent.appendChild(accent);

    // show panel
    overlay.classList.remove('hidden');
    detailPanel.classList.add('open');
    detailPanel.setAttribute('aria-hidden','false');

    // Add glow on card for extra polish
    const activeCard = document.querySelector(`[data-id='${z.id}']`);
    document.querySelectorAll('.zodiac-card').forEach(c => c.classList.remove('glow'));
    if(activeCard) activeCard.classList.add('glow');

  }

  function closePanel(){
    detailPanel.classList.remove('open');
    detailPanel.setAttribute('aria-hidden','true');
    overlay.classList.add('hidden');
    document.querySelectorAll('.zodiac-card').forEach(c => c.classList.remove('glow'));
  }

  function mapElementToZh(el){
    switch(el){
      case 'Metal': return '金';
      case 'Wood': return '木';
      case 'Water': return '水';
      case 'Fire': return '火';
      case 'Earth': return '土';
      default: return el;
    }
  }

})();
