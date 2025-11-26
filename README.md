# 12 Zodiac — Interactive Dashboard

A small, self-contained front-end demo showing the 12 Chinese zodiacs with interactive cards, a detail panel, filters, bilingual support (English / 中文), and a light/dark theme.

Files
- `index.html` — single-page app UI
- `style.css` — styling and responsive layout
- `script.js` — dataset and interactivity; no external files required

How to run
1. Open `index.html` in your browser (drag into browser or double-click). No server required.

Features
- 12-card grid (Rat → Pig) with icon, EN + 中文 name, and short tooltip.
- Click a card to open a slide-in detail panel that shows a description and element.
- Client-side filter by element and instant search (English + 中文 keywords).
- Language toggle (EN / 中文) and a light/dark theme switch.
- Smooth animations for card rendering and detail panel.
- Saves last used language, theme, element filter and search in localStorage.

Notes
- Fully client-side; the zodiac dataset is embedded in `script.js`.
- Designed to be responsive: 4×3 grid on desktop, stacked cards on mobile.

Enjoy! 
