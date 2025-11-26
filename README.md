# 12-Zodiac Explorer

Interactive dashboard to explore the Chinese Zodiac animals with bilingual support, filters, and theme switching. Fully client-side; no external data files.

## ✨ Features
- **12-card grid** (Rat → Pig) with emoji icons and bilingual names
- **Hover tooltips** showing a key trait (localized)
- **Slide-in detail panel** with name (EN + 中文), element, and language-aware description
- **Filters**: element dropdown and live search across English & 中文 text
- **Language toggle**: English ⇄ 中文 for all UI text and content
- **Theme switch**: light/dark with smooth transitions
- **Animations**: card enter effects & glowing detail panel
- **Responsive**: 4×3 grid on desktop; stack on mobile
- **Persistence**: saves language, theme, filter, and search in `localStorage`

## 🗂️ Data
All zodiac data is defined inline in `script.js` (no external JSON). Each item includes:
- `icon`, `name.en`, `name.zh`
- `element` (Metal/Wood/Water/Fire/Earth)
- `trait.en` / `trait.zh`
- `description.en` / `description.zh`
- `keywords` for search

## 🚀 Run locally
No build step required. Options:

- Double-click `index.html` to open in your browser, **or**
- Serve with a lightweight server (avoids some browser `file://` restrictions):

```powershell
# From repo root
python -m http.server 8000
# then open http://localhost:8000
```

## 🔧 Controls
- **Search**: filters cards instantly by EN/中文 names, traits, descriptions, or keywords
- **Element filter**: narrow to Metal/Wood/Water/Fire/Earth
- **Language toggle**: switches all strings
- **Theme switch**: light/dark; respects saved setting (defaults to system preference)

## 🧠 Persistence
Stored under `localStorage` key: `zodiacExplorerSettings` with fields:
```json
{
  "language": "en|zh",
  "theme": "light|dark",
  "filterElement": "all|Metal|Wood|Water|Fire|Earth",
  "searchQuery": "..."
}
```

## 📁 File structure
```
index.html    # Layout & root containers
style.css     # Theming, grid, responsive & animations
script.js     # Data, rendering, interactions, persistence
README.md     # This guide
```

## 📝 Notes
- No external dependencies or assets
- Animations respect `prefers-reduced-motion`

## 🚧 Future ideas
- Add lunar year ranges & compatibility insights
- Support pinyin search and audio pronunciations
- Extend with timeline/element cycles and shareable links
