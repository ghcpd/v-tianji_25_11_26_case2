# 12 Zodiac Dashboard

This is a small front-end demo of an interactive 12-Zodiac Dashboard. It uses self-generated data (no external JSON) and provides language toggling, element filtering, search, dark/light themes, and a slide-in detail panel.

Features
- 12 Zodiac Cards (Rat → Pig) with emoji icons
- Hover tooltip for a key trait
- Click to open a slide-in detail panel with element and description
- Filters: element dropdown and search (EN + 中文)
- Language toggle (EN / 中文)
- Light/Dark theme toggle (smooth transitions)
- Responsive: desktop 4×3 grid, mobile single column vertical scroll
- Smooth animations and transitions
- Persistence in localStorage for last used language, theme, filter, and search

Files
- `index.html` — main HTML layout
- `style.css` — styles, themes, responsive layout
- `script.js` — dataset, rendering, filtering, language, theme toggle, and persistence

How to run
1. Open `index.html` in your browser (no server required).
2. Interact: search, filter, switch language, theme, and open details for each zodiac card.

Customization
- Update the dataset in `script.js` if you'd like to change names, traits or descriptions.
- Icons are emoji by default; replace with image URLs or inline SVGs if desired.

License
MIT
