# 12 Zodiac Dashboard

A small interactive front-end dashboard featuring the 12 Chinese Zodiac animals. All data is generated in `script.js` — no external files required.

## Features

- 12 zodiac cards displayed in a responsive grid (Rat → Pig).
- Each card shows an emoji icon, English name and 中文. Hovering shows a short tooltip with one key trait.
- Click a card to open a slide-in detail panel showing name, element and a short personality description (EN/中文). Panel includes a subtle animated background.
- Element filter drop-down (client-side, instant filtering).
- Search bar (supports English and 中文, and keyword search).
- Language toggle (English / 中文 updates UI and content dynamically).
- Theme mode: Light/Dark with smooth transitions.
- Responsive layout: Desktop (4×3 grid), Mobile (vertical scroll).
- Persists language, theme, and element filter choices in localStorage.

## Controls & Keys

- Search: type in the search field (supports EN & 中文)
- Filter: select an Element from the dropdown to filter instantly
- Language: press the language button to toggle between English and 中文
- Theme: press the theme button to toggle between Light and Dark modes
- Click a card to open details; press Escape or click outside to close

## Files

- `index.html` — UI and layout
- `style.css` — Styling, themes, and animations
- `script.js` — Data and interaction logic

## How to run locally

Open `index.html` in your web browser. No server or build steps required.

On Windows, double-click the `index.html` file or open it from your browser using File -> Open.

## Notes & Extensions

- The data is embedded in `script.js` and can be edited there to adjust copy, icons, or add more translations.
- Because everything is client-side, changes to the local files are needed to persist modifications.
- You can expand the UI to show more zodiac details, or add images/illustrations.

Enjoy exploring the 12 Zodiac animals! 🎴🔮
