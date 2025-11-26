// 12-Zodiac Explorer logic
// Plain ES Modules, no external dependencies

const STORAGE_KEY = 'zodiacExplorerSettings';

const zodiacData = [
	{
		id: 'rat',
		icon: '🐀',
		name: { en: 'Rat', zh: '鼠' },
		element: 'Water',
		trait: { en: 'Clever & adaptable', zh: '聪明灵活' },
		description: {
			en: 'Quick-witted problem solver with charming adaptability, often thriving in changing environments.',
			zh: '机智灵活，善于解决问题，懂得在变化中找到优势。',
		},
		keywords: ['intelligent', 'resourceful', '聪慧', '机敏'],
	},
	{
		id: 'ox',
		icon: '🐂',
		name: { en: 'Ox', zh: '牛' },
		element: 'Earth',
		trait: { en: 'Steady & dependable', zh: '踏实可靠' },
		description: {
			en: 'Patient, persistent, and grounded; Oxen carry responsibilities with resilience and quiet strength.',
			zh: '耐心持久、稳重踏实，以沉稳力量承担责任。',
		},
		keywords: ['loyal', 'reliable', '坚韧', '稳重'],
	},
	{
		id: 'tiger',
		icon: '🐅',
		name: { en: 'Tiger', zh: '虎' },
		element: 'Wood',
		trait: { en: 'Bold & passionate', zh: '勇敢热情' },
		description: {
			en: 'Courageous leaders with magnetic charisma; Tigers leap into challenges with heart and vision.',
			zh: '富有魅力的勇者，以热忱和远见迎接挑战。',
		},
		keywords: ['brave', 'leader', '勇猛', '热血'],
	},
	{
		id: 'rabbit',
		icon: '🐇',
		name: { en: 'Rabbit', zh: '兔' },
		element: 'Wood',
		trait: { en: 'Gentle & perceptive', zh: '温柔细腻' },
		description: {
			en: 'Graceful listeners with keen intuition; Rabbits nurture harmony and spot subtle opportunities.',
			zh: '心思细腻、直觉敏锐，善于营造和谐并抓住细微契机。',
		},
		keywords: ['elegant', 'empathetic', '细心', '体贴'],
	},
	{
		id: 'dragon',
		icon: '🐉',
		name: { en: 'Dragon', zh: '龙' },
		element: 'Earth',
		trait: { en: 'Visionary & magnetic', zh: '远见魅力' },
		description: {
			en: 'Mythic innovators who inspire; Dragons blend ambition with benevolence, igniting big ideas.',
			zh: '富有创造与感召力，兼具雄心与善意，点燃宏大愿景。',
		},
		keywords: ['inspiring', 'innovative', '威严', '创意'],
	},
	{
		id: 'snake',
		icon: '🐍',
		name: { en: 'Snake', zh: '蛇' },
		element: 'Fire',
		trait: { en: 'Wise & enigmatic', zh: '智慧神秘' },
		description: {
			en: 'Elegant thinkers with strategic calm; Snakes read the room and move with refined intent.',
			zh: '沉静聪慧，洞察人心，以优雅策略行事。',
		},
		keywords: ['intuitive', 'strategic', '睿智', '洞察'],
	},
	{
		id: 'horse',
		icon: '🐎',
		name: { en: 'Horse', zh: '马' },
		element: 'Fire',
		trait: { en: 'Energetic & free', zh: '热情自由' },
		description: {
			en: 'Spirited adventurers who love momentum; Horses gallop toward freedom and shared excitement.',
			zh: '热情洋溢、热爱奔跑，追求自由与共鸣。',
		},
		keywords: ['dynamic', 'explorer', '活力', '自由'],
	},
	{
		id: 'goat',
		icon: '🐐',
		name: { en: 'Goat', zh: '羊' },
		element: 'Earth',
		trait: { en: 'Creative & kind', zh: '艺术善良' },
		description: {
			en: 'Artistic nurturers with calm empathy; Goats bring grace, care, and aesthetic harmony.',
			zh: '富有艺术感与同理心，以温柔与美感温暖众人。',
		},
		keywords: ['gentle', 'artistic', '温和', '文艺'],
	},
	{
		id: 'monkey',
		icon: '🐒',
		name: { en: 'Monkey', zh: '猴' },
		element: 'Metal',
		trait: { en: 'Inventive & curious', zh: '机智好奇' },
		description: {
			en: 'Playful innovators who solve with wit; Monkeys juggle ideas and delight in clever twists.',
			zh: '灵动机敏、善于巧思，以幽默解决难题。',
		},
		keywords: ['clever', 'playful', '机灵', '幽默'],
	},
	{
		id: 'rooster',
		icon: '🐓',
		name: { en: 'Rooster', zh: '鸡' },
		element: 'Metal',
		trait: { en: 'Confident & precise', zh: '自信严谨' },
		description: {
			en: 'Meticulous planners who shine with flair; Roosters herald clarity and polished execution.',
			zh: '严谨细致又不失风采，传递清晰与完美执行。',
		},
		keywords: ['organized', 'vivid', '果断', '细致'],
	},
	{
		id: 'dog',
		icon: '🐕',
		name: { en: 'Dog', zh: '狗' },
		element: 'Earth',
		trait: { en: 'Loyal & upright', zh: '忠诚正直' },
		description: {
			en: 'Trustworthy guardians who value justice; Dogs stand by their circle with heartfelt integrity.',
			zh: '重情重义、坚守正直，守护身边所爱。',
		},
		keywords: ['trustworthy', 'protector', '守护', '诚信'],
	},
	{
		id: 'pig',
		icon: '🐖',
		name: { en: 'Pig', zh: '猪' },
		element: 'Water',
		trait: { en: 'Warm & generous', zh: '温暖慷慨' },
		description: {
			en: 'Kind hosts with open hearts; Pigs savor comfort, share abundance, and uplift community.',
			zh: '心地善良、乐于分享，享受温馨与团聚。',
		},
		keywords: ['optimistic', 'giving', '友善', '慷慨'],
	},
];

const translations = {
	en: {
		title: '12-Zodiac Explorer',
		subtitle: 'Discover traits, elements, and stories.',
		searchLabel: 'Search',
		searchPlaceholder: 'Search by name or keyword',
		filterLabel: 'Element',
		filterAll: 'All',
		elements: {
			Metal: 'Metal',
			Wood: 'Wood',
			Water: 'Water',
			Fire: 'Fire',
			Earth: 'Earth',
		},
		languageLabel: 'Language',
		themeLabel: 'Theme',
		elementPrefix: 'Element',
		closeLabel: 'Close',
	},
	zh: {
		title: '十二生肖探索',
		subtitle: '了解生肖特质、五行与故事。',
		searchLabel: '搜索',
		searchPlaceholder: '按名称或关键词搜索',
		filterLabel: '五行',
		filterAll: '全部',
		elements: {
			Metal: '金',
			Wood: '木',
			Water: '水',
			Fire: '火',
			Earth: '土',
		},
		languageLabel: '语言',
		themeLabel: '主题',
		elementPrefix: '五行',
		closeLabel: '关闭',
	},
};

const state = {
	language: 'en',
	theme: 'light',
	filterElement: 'all',
	searchQuery: '',
};

const dom = {};

function init() {
	cacheDom();
	hydrateStateFromStorage();
	applyTheme();
	renderStaticTexts();
	bindEvents();
	renderGrid();
}

function cacheDom() {
	dom.grid = document.getElementById('zodiac-grid');
	dom.search = document.getElementById('search-input');
	dom.filter = document.getElementById('element-filter');
	dom.langToggle = document.getElementById('language-toggle');
	dom.themeToggle = document.getElementById('theme-toggle');
	dom.languageButtons = dom.langToggle?.querySelectorAll('.lang-btn');
	dom.appTitle = document.getElementById('app-title');
	dom.appSubtitle = document.getElementById('app-subtitle');
	dom.labelSearch = document.getElementById('label-search');
	dom.labelFilter = document.getElementById('label-filter');
	dom.labelLanguage = document.getElementById('label-language');
	dom.labelTheme = document.getElementById('label-theme');
	dom.detailPanel = document.getElementById('detail-panel');
	dom.detailOverlay = document.getElementById('detail-overlay');
	dom.detailClose = document.getElementById('detail-close');
	dom.detailIcon = document.getElementById('detail-icon');
	dom.detailTitle = document.getElementById('detail-title');
	dom.detailElement = document.getElementById('detail-element');
	dom.detailDescription = document.getElementById('detail-description');
}

function hydrateStateFromStorage() {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (raw) {
			const saved = JSON.parse(raw);
			if (saved.language) state.language = saved.language;
			if (saved.theme) state.theme = saved.theme;
			if (saved.filterElement) state.filterElement = saved.filterElement;
			if (typeof saved.searchQuery === 'string') state.searchQuery = saved.searchQuery;
		} else {
			// default theme respects system preference
			const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
			state.theme = prefersDark ? 'dark' : 'light';
		}
	} catch (e) {
		console.warn('Failed to read settings; using defaults', e);
	}

	// set initial control values
	if (dom.search) dom.search.value = state.searchQuery;
	if (dom.filter) dom.filter.value = state.filterElement;
	if (dom.themeToggle) dom.themeToggle.checked = state.theme === 'dark';
}

function persistState() {
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
	} catch (e) {
		console.warn('Failed to save settings', e);
	}
}

function applyTheme() {
	document.body.setAttribute('data-theme', state.theme);
	if (dom.themeToggle) dom.themeToggle.checked = state.theme === 'dark';
}

function renderStaticTexts() {
	const t = translations[state.language];
	if (!t) return;

	if (dom.appTitle) dom.appTitle.textContent = t.title;
	if (dom.appSubtitle) dom.appSubtitle.textContent = t.subtitle;
	if (dom.labelSearch) dom.labelSearch.textContent = t.searchLabel;
	if (dom.search) dom.search.placeholder = t.searchPlaceholder;
	if (dom.labelFilter) dom.labelFilter.textContent = t.filterLabel;
	if (dom.labelLanguage) dom.labelLanguage.textContent = t.languageLabel;
	if (dom.labelTheme) dom.labelTheme.textContent = t.themeLabel;

	// translate filter options (display text only; values stay in EN canonical form)
	if (dom.filter) {
		Array.from(dom.filter.options).forEach((opt) => {
			if (opt.value === 'all') {
				opt.textContent = t.filterAll;
			} else if (t.elements[opt.value]) {
				opt.textContent = t.elements[opt.value];
			}
		});
	}

	// update language toggle active state
	dom.languageButtons?.forEach((btn) => {
		btn.classList.toggle('active', btn.dataset.lang === state.language);
	});
}

function bindEvents() {
	dom.search?.addEventListener('input', (e) => {
		state.searchQuery = e.target.value;
		persistState();
		renderGrid();
	});

	dom.filter?.addEventListener('change', (e) => {
		state.filterElement = e.target.value;
		persistState();
		renderGrid();
	});

	dom.languageButtons?.forEach((btn) => {
		btn.addEventListener('click', () => {
			const lang = btn.dataset.lang;
			if (lang && lang !== state.language) {
				state.language = lang;
				persistState();
				renderStaticTexts();
				renderGrid();
				refreshOpenDetail();
			}
		});
	});

	dom.themeToggle?.addEventListener('change', (e) => {
		state.theme = e.target.checked ? 'dark' : 'light';
		persistState();
		applyTheme();
	});

	dom.detailClose?.addEventListener('click', closeDetail);
	dom.detailOverlay?.addEventListener('click', closeDetail);
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && dom.detailPanel?.classList.contains('open')) {
			closeDetail();
		}
	});
}

function renderGrid() {
	if (!dom.grid) return;

	const filtered = zodiacData.filter((item) => {
		const elementPass = state.filterElement === 'all' || item.element === state.filterElement;
		const searchPass = matchesSearch(item, state.searchQuery);
		return elementPass && searchPass;
	});

	dom.grid.innerHTML = '';

	filtered.forEach((item) => {
		const card = document.createElement('button');
		card.type = 'button';
		card.className = 'zodiac-card card-enter';
		card.dataset.id = item.id;
		card.dataset.trait = item.trait[state.language];
		card.setAttribute('aria-label', `${item.name.en} ${item.name.zh}`);

		card.innerHTML = `
			<div class="icon">${item.icon}</div>
			<p class="name">${item.name.en}</p>
			<p class="subname">${item.name.zh}</p>
		`;

		card.addEventListener('click', () => openDetail(item));
		card.addEventListener('keydown', (e) => {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				openDetail(item);
			}
		});

		dom.grid.appendChild(card);
	});
}

function matchesSearch(item, query) {
	const q = query.trim().toLowerCase();
	if (!q) return true;
	const haystack = [
		item.name.en,
		item.name.zh,
		item.trait.en,
		item.trait.zh,
		item.description.en,
		item.description.zh,
		...(item.keywords || []),
	]
		.join(' | ')
		.toLowerCase();
	return haystack.includes(q);
}

let currentDetailId = null;

function openDetail(item) {
	currentDetailId = item.id;
	if (!dom.detailPanel) return;
	const t = translations[state.language];
	dom.detailIcon.textContent = item.icon;
	dom.detailTitle.textContent = `${item.name.en} · ${item.name.zh}`;
	dom.detailElement.textContent = `${t.elementPrefix}: ${t.elements[item.element] || item.element}`;
	dom.detailDescription.textContent = item.description[state.language];

	dom.detailPanel.classList.add('open');
	dom.detailOverlay?.classList.add('open');
	dom.detailPanel.setAttribute('aria-hidden', 'false');
	dom.detailOverlay?.setAttribute('aria-hidden', 'false');
}

function refreshOpenDetail() {
	if (!currentDetailId) return;
	const item = zodiacData.find((z) => z.id === currentDetailId);
	if (item) openDetail(item);
}

function closeDetail() {
	currentDetailId = null;
	dom.detailPanel?.classList.remove('open');
	dom.detailOverlay?.classList.remove('open');
	dom.detailPanel?.setAttribute('aria-hidden', 'true');
	dom.detailOverlay?.setAttribute('aria-hidden', 'true');
}

// Initialize when DOM ready
document.addEventListener('DOMContentLoaded', init);
