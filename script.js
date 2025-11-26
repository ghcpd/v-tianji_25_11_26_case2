// ============================================
// Zodiac Data Generator
// ============================================

const zodiacData = [
    {
        id: 1,
        nameEn: 'Rat',
        nameZh: '鼠',
        icon: '🐭',
        element: 'Water',
        years: '1900, 1912, 1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020',
        personality: 'Intelligent, adaptable, quick-witted, and resourceful.',
        traitEn: 'Intelligent & Resourceful',
        traitZh: '聪慧与机智',
        luckyNumbers: '2, 3',
        luckyColors: 'Gold, Blue',
        description: 'Born with sharp minds and quick wits, Rats are natural problem-solvers who adapt swiftly to new environments.'
    },
    {
        id: 2,
        nameEn: 'Ox',
        nameZh: '牛',
        icon: '🐂',
        element: 'Earth',
        years: '1901, 1913, 1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021',
        personality: 'Reliable, patient, hardworking, and determined.',
        traitEn: 'Steady & Reliable',
        traitZh: '坚定与可靠',
        luckyNumbers: '1, 9',
        luckyColors: 'Blue, Green',
        description: 'Known for their steadfast nature, Oxen are dependable friends and diligent workers.'
    },
    {
        id: 3,
        nameEn: 'Tiger',
        nameZh: '虎',
        icon: '🐯',
        element: 'Wood',
        years: '1902, 1914, 1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022',
        personality: 'Courageous, competitive, unpredictable, and bold.',
        traitEn: 'Brave & Bold',
        traitZh: '勇敢与大胆',
        luckyNumbers: '1, 3, 4',
        luckyColors: 'Green, Orange',
        description: 'Tigers are fierce and bold, carrying a natural leadership spirit and passion for action.'
    },
    {
        id: 4,
        nameEn: 'Rabbit',
        nameZh: '兔',
        icon: '🐰',
        element: 'Wood',
        years: '1903, 1915, 1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023',
        personality: 'Gentle, kind, quiet, and creative.',
        traitEn: 'Gentle & Creative',
        traitZh: '温柔与创意',
        luckyNumbers: '3, 4, 6',
        luckyColors: 'Red, Pink, Purple',
        description: 'Rabbits are gentle souls with a love for peace and tranquility, known for their artistic nature.'
    },
    {
        id: 5,
        nameEn: 'Dragon',
        nameZh: '龙',
        icon: '🐉',
        element: 'Wood',
        years: '1904, 1916, 1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024',
        personality: 'Confident, passionate, charismatic, and ambitious.',
        traitEn: 'Powerful & Confident',
        traitZh: '强大与自信',
        luckyNumbers: '1, 6, 7',
        luckyColors: 'Gold, Silver, Blue',
        description: 'Dragons are magnificent and charismatic, exuding confidence and commanding presence.'
    },
    {
        id: 6,
        nameEn: 'Snake',
        nameZh: '蛇',
        icon: '🐍',
        element: 'Fire',
        years: '1905, 1917, 1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025',
        personality: 'Wise, mysterious, thoughtful, and introspective.',
        traitEn: 'Wise & Mysterious',
        traitZh: '智慧与神秘',
        luckyNumbers: '2, 8, 9',
        luckyColors: 'Red, Black, Yellow',
        description: 'Snakes are enigmatic and wise, possessing deep wisdom and strategic thinking abilities.'
    },
    {
        id: 7,
        nameEn: 'Horse',
        nameZh: '马',
        icon: '🐴',
        element: 'Fire',
        years: '1906, 1918, 1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026',
        personality: 'Energetic, free-spirited, warm-hearted, and enthusiastic.',
        traitEn: 'Energetic & Free',
        traitZh: '活跃与自由',
        luckyNumbers: '2, 3, 7',
        luckyColors: 'Green, Red, Purple',
        description: 'Horses are spirited and energetic, living life to the fullest with unbridled enthusiasm.'
    },
    {
        id: 8,
        nameEn: 'Goat',
        nameZh: '羊',
        icon: '🐑',
        element: 'Earth',
        years: '1907, 1919, 1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027',
        personality: 'Gentle, artistic, kind, and peaceful.',
        traitEn: 'Gentle & Artistic',
        traitZh: '温和与艺术',
        luckyNumbers: '2, 7',
        luckyColors: 'Green, Red, Purple',
        description: 'Goats are gentle and artistic, finding beauty in simplicity and harmony in nature.'
    },
    {
        id: 9,
        nameEn: 'Monkey',
        nameZh: '猴',
        icon: '🐵',
        element: 'Metal',
        years: '1908, 1920, 1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028',
        personality: 'Playful, clever, mischievous, and inventive.',
        traitEn: 'Clever & Playful',
        traitZh: '聪慧与调皮',
        luckyNumbers: '1, 7, 8',
        luckyColors: 'White, Gold, Blue',
        description: 'Monkeys are witty and playful, using their intelligence to navigate life with humor and charm.'
    },
    {
        id: 10,
        nameEn: 'Rooster',
        nameZh: '鸡',
        icon: '🐓',
        element: 'Metal',
        years: '1909, 1921, 1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029',
        personality: 'Honest, straightforward, practical, and hard-working.',
        traitEn: 'Honest & Practical',
        traitZh: '诚实与实际',
        luckyNumbers: '5, 7, 8',
        luckyColors: 'Gold, Red, Purple',
        description: 'Roosters are honest and straightforward, approaching life with practical wisdom and dedication.'
    },
    {
        id: 11,
        nameEn: 'Dog',
        nameZh: '狗',
        icon: '🐕',
        element: 'Earth',
        years: '1910, 1922, 1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030',
        personality: 'Loyal, honest, reliable, and protective.',
        traitEn: 'Loyal & Faithful',
        traitZh: '忠诚与可信',
        luckyNumbers: '3, 4, 9',
        luckyColors: 'Green, Red, Purple',
        description: 'Dogs are the most loyal of companions, always faithful to those they care about.'
    },
    {
        id: 12,
        nameEn: 'Pig',
        nameZh: '猪',
        icon: '🐷',
        element: 'Water',
        years: '1911, 1923, 1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031',
        personality: 'Compassionate, sincere, generous, and good-natured.',
        traitEn: 'Compassionate & Kind',
        traitZh: '善良与慈悲',
        luckyNumbers: '2, 5, 8',
        luckyColors: 'Yellow, Brown, Gold',
        description: 'Pigs are kind-hearted and generous, approaching life with sincerity and warmth.'
    }
];

// ============================================
// Translation Strings
// ============================================

const translations = {
    en: {
        header: 'Zodiac Explorer',
        search: 'Search zodiac...',
        filter: 'Filter by Element:',
        clearFilters: 'Clear Filters',
        element: 'Element',
        years: 'Years',
        personality: 'Personality',
        luckyNumbers: 'Lucky Numbers',
        luckyColors: 'Lucky Colors',
        noResults: 'No zodiac signs match your search. Please try again.',
        allElements: 'All Elements'
    },
    zh: {
        header: '十二生肖浏览器',
        search: '搜索生肖...',
        filter: '按元素筛选:',
        clearFilters: '清除筛选',
        element: '元素',
        years: '年份',
        personality: '性格',
        luckyNumbers: '幸运数字',
        luckyColors: '幸运颜色',
        noResults: '没有找到匹配的生肖。请重试。',
        allElements: '所有元素'
    }
};

// ============================================
// App State
// ============================================

const appState = {
    language: localStorage.getItem('zodiac_language') || 'en',
    theme: localStorage.getItem('zodiac_theme') || 'light',
    searchQuery: '',
    elementFilter: localStorage.getItem('zodiac_element') || '',
    selectedZodiac: null,
    filteredData: [...zodiacData]
};

// ============================================
// DOM Elements
// ============================================

const elements = {
    app: document.getElementById('app'),
    zodiacGrid: document.getElementById('zodiacGrid'),
    detailPanel: document.getElementById('detailPanel'),
    overlay: document.getElementById('overlay'),
    closeBtn: document.getElementById('closePanel'),
    langToggle: document.getElementById('langToggle'),
    themeToggle: document.getElementById('themeToggle'),
    searchInput: document.getElementById('searchInput'),
    elementFilter: document.getElementById('elementFilter'),
    clearFilters: document.getElementById('clearFilters'),
    noResults: document.getElementById('noResults'),
    // Detail panel fields
    detailIcon: document.getElementById('detailIcon'),
    detailNameEn: document.getElementById('detailNameEn'),
    detailNameZh: document.getElementById('detailNameZh'),
    detailElement: document.getElementById('detailElement'),
    detailYears: document.getElementById('detailYears'),
    detailPersonality: document.getElementById('detailPersonality'),
    detailLucky: document.getElementById('detailLucky'),
    detailColors: document.getElementById('detailColors')
};

// ============================================
// Initialization
// ============================================

function init() {
    applyTheme(appState.theme);
    setLanguage(appState.language);
    loadFilterState();
    renderCards();
    attachEventListeners();
}

// ============================================
// Theme Management
// ============================================

function applyTheme(theme) {
    appState.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeIcon();
    localStorage.setItem('zodiac_theme', theme);
}

function toggleTheme() {
    const newTheme = appState.theme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
}

function updateThemeIcon() {
    const icon = appState.theme === 'light' ? '🌙' : '☀️';
    elements.themeToggle.querySelector('.theme-icon').textContent = icon;
}

// ============================================
// Language Management
// ============================================

function setLanguage(lang) {
    appState.language = lang;
    document.documentElement.setAttribute('lang', lang);
    updateUIText();
    updateLanguageToggle();
    renderCards();
    localStorage.setItem('zodiac_language', lang);
}

function toggleLanguage() {
    const newLang = appState.language === 'en' ? 'zh' : 'en';
    setLanguage(newLang);
}

function updateLanguageToggle() {
    const langLabel = appState.language === 'en' ? 'EN' : '中文';
    elements.langToggle.querySelector('.lang-label').textContent = langLabel;
}

function updateUIText() {
    const t = translations[appState.language];
    elements.searchInput.placeholder = t.search;
    elements.filterLabel = document.querySelector('.filter-label');
    if (elements.filterLabel) {
        elements.filterLabel.textContent = t.filter;
    }
    elements.clearFilters.textContent = t.clearFilters;
    
    // Update select options
    const options = elements.elementFilter.querySelectorAll('option');
    if (options[0]) options[0].textContent = t.allElements;
    
    // Update placeholders in detail panel
    const detailLabels = document.querySelectorAll('.info-label');
    const labelTexts = [t.element, t.years, t.personality, t.luckyNumbers, t.luckyColors];
    detailLabels.forEach((label, i) => {
        if (labelTexts[i]) {
            label.textContent = labelTexts[i] + ':';
        }
    });
}

// ============================================
// Card Rendering
// ============================================

function renderCards() {
    elements.zodiacGrid.innerHTML = '';
    
    if (appState.filteredData.length === 0) {
        elements.noResults.style.display = 'block';
        return;
    }
    
    elements.noResults.style.display = 'none';
    
    appState.filteredData.forEach(zodiac => {
        const card = createCard(zodiac);
        elements.zodiacGrid.appendChild(card);
    });
}

function createCard(zodiac) {
    const card = document.createElement('div');
    card.className = 'zodiac-card';
    card.dataset.id = zodiac.id;
    
    const nameEn = zodiac.nameEn;
    const nameZh = zodiac.nameZh;
    const trait = appState.language === 'en' ? zodiac.traitEn : zodiac.traitZh;
    const elementClass = zodiac.element.toLowerCase();
    
    card.innerHTML = `
        <div class="card-icon">${zodiac.icon}</div>
        <div class="card-names">
            <span class="card-name-en">${nameEn}</span>
            <span class="card-name-zh">${nameZh}</span>
        </div>
        <span class="card-element ${elementClass}">${zodiac.element}</span>
        <p class="card-trait">${trait}</p>
    `;
    
    card.addEventListener('click', () => openDetailPanel(zodiac));
    
    return card;
}

// ============================================
// Detail Panel Management
// ============================================

function openDetailPanel(zodiac) {
    appState.selectedZodiac = zodiac;
    
    // Update detail content
    elements.detailIcon.textContent = zodiac.icon;
    elements.detailNameEn.textContent = zodiac.nameEn;
    elements.detailNameZh.textContent = zodiac.nameZh;
    elements.detailElement.textContent = zodiac.element;
    elements.detailElement.className = `element-badge ${zodiac.element.toLowerCase()}`;
    elements.detailYears.textContent = zodiac.years;
    elements.detailPersonality.textContent = zodiac.personality;
    elements.detailLucky.textContent = zodiac.luckyNumbers;
    elements.detailColors.textContent = zodiac.luckyColors;
    
    // Show panel and overlay
    elements.detailPanel.classList.add('active');
    elements.overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeDetailPanel() {
    elements.detailPanel.classList.remove('active');
    elements.overlay.classList.remove('active');
    document.body.style.overflow = '';
    appState.selectedZodiac = null;
}

// ============================================
// Filtering & Search
// ============================================

function filterZodiacs() {
    appState.filteredData = zodiacData.filter(zodiac => {
        // Element filter
        if (appState.elementFilter && zodiac.element !== appState.elementFilter) {
            return false;
        }
        
        // Search query
        if (appState.searchQuery) {
            const query = appState.searchQuery.toLowerCase();
            const matchesEn = zodiac.nameEn.toLowerCase().includes(query);
            const matchesZh = zodiac.nameZh.includes(appState.searchQuery);
            const matchesTrait = zodiac.traitEn.toLowerCase().includes(query) || 
                                zodiac.traitZh.includes(appState.searchQuery);
            
            if (!matchesEn && !matchesZh && !matchesTrait) {
                return false;
            }
        }
        
        return true;
    });
    
    renderCards();
    saveFilterState();
}

function clearAllFilters() {
    appState.searchQuery = '';
    appState.elementFilter = '';
    elements.searchInput.value = '';
    elements.elementFilter.value = '';
    filterZodiacs();
}

function saveFilterState() {
    localStorage.setItem('zodiac_element', appState.elementFilter);
    localStorage.setItem('zodiac_search', appState.searchQuery);
}

function loadFilterState() {
    appState.elementFilter = localStorage.getItem('zodiac_element') || '';
    appState.searchQuery = localStorage.getItem('zodiac_search') || '';
    elements.elementFilter.value = appState.elementFilter;
    elements.searchInput.value = appState.searchQuery;
    filterZodiacs();
}

// ============================================
// Event Listeners
// ============================================

function attachEventListeners() {
    // Language toggle
    elements.langToggle.addEventListener('click', toggleLanguage);
    
    // Theme toggle
    elements.themeToggle.addEventListener('click', toggleTheme);
    
    // Search input
    elements.searchInput.addEventListener('input', (e) => {
        appState.searchQuery = e.target.value;
        filterZodiacs();
    });
    
    // Element filter
    elements.elementFilter.addEventListener('change', (e) => {
        appState.elementFilter = e.target.value;
        filterZodiacs();
    });
    
    // Clear filters
    elements.clearFilters.addEventListener('click', clearAllFilters);
    
    // Detail panel close
    elements.closeBtn.addEventListener('click', closeDetailPanel);
    elements.overlay.addEventListener('click', closeDetailPanel);
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && elements.detailPanel.classList.contains('active')) {
            closeDetailPanel();
        }
    });
    
    // Prevent closing panel when clicking inside it
    elements.detailPanel.addEventListener('click', (e) => {
        if (e.target === elements.detailPanel) {
            closeDetailPanel();
        }
    });
}

// ============================================
// Start App
// ============================================

document.addEventListener('DOMContentLoaded', init);
