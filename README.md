# 🐭 12-Zodiac Interactive Web Dashboard

A beautiful, fully-functional cultural web application for exploring the 12 Chinese zodiac animals with interactive features, bilingual support, and theme switching.

## ✨ Features

### 1. **Zodiac Cards Display**
- 12-card responsive grid (Rat → Pig in order)
- Each card displays:
  - Zodiac emoji icon
  - English and Chinese names
  - Element badge (Metal/Wood/Water/Fire/Earth)
  - Key personality trait
- Smooth hover animations with glow effect
- Staggered card entrance animation

### 2. **Interactive Detail Panel**
- Click any card to open a slide-in detail panel
- Displays comprehensive information:
  - Zodiac name (English + Chinese)
  - Element with color-coded badge
  - Birth years (last 11 zodiac cycles)
  - Detailed personality description
  - Lucky numbers and colors
- Smooth slide-in animation from the right
- Close with close button, overlay click, or Escape key
- Animated icon bounce effect on open
- Floating glow animation in background

### 3. **Filters & Search**
- **Element Filter Dropdown**: Filter by Metal, Wood, Water, Fire, or Earth
- **Search Bar**: Search by:
  - Zodiac name (English)
  - Zodiac name (Chinese/中文)
  - Personality traits (both languages)
- Instant client-side filtering (no page reload)
- Clear Filters button to reset all filters
- Filter state persisted in localStorage

### 4. **Bilingual Language Support**
- **Language Toggle**: Switch between English and 中文 (Chinese)
- All text dynamically updates:
  - Zodiac names
  - Personality traits
  - UI labels and placeholders
  - Filter options
  - Detail panel content
- Language preference saved in localStorage

### 5. **Dark/Light Theme Mode**
- **Theme Toggle**: Switch between light mode (☀️) and dark mode (🌙)
- Smooth color transitions
- Theme preference saved in localStorage
- Optimized colors for both modes
- Improved readability in dark mode

### 6. **Responsive Design**
- **Desktop** (1400px+): 4×3 grid layout
- **Tablet** (768px-1024px): 3-column responsive grid
- **Mobile** (480px-768px): 2-column grid
- **Small Mobile** (<480px): Single-column vertical scroll
- Touch-friendly controls and spacing
- Adaptive detail panel width

### 7. **Animations & Transitions**
- Staggered card entrance animations
- Smooth card hover effects (lift + shadow)
- Detail panel slide-in from right (cubic-bezier easing)
- Icon bounce animation on panel open
- Floating glow background animation
- Theme transition animations
- Respects `prefers-reduced-motion` for accessibility

### 8. **Data Persistence**
- Last used language saved in localStorage
- Last used theme saved in localStorage
- Last filter selections saved in localStorage
- Last search query saved in localStorage
- All preferences restore on page reload

### 9. **Accessibility**
- Semantic HTML structure
- ARIA labels for screen readers
- Keyboard navigation support (Escape to close panel)
- Focus visible indicators on interactive elements
- High contrast in both light and dark modes
- Respects motion preferences

## 📁 Project Structure

```
zodiac-dashboard/
├── index.html          # HTML structure
├── style.css          # Responsive styles & animations
├── script.js          # JavaScript logic & data
└── README.md          # This file
```

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required!

### Installation & Running

1. **Download/Clone the files**
   ```bash
   git clone <repo-url>
   cd zodiac-dashboard
   ```

2. **Open in Browser**
   ```bash
   # Simple method: Double-click index.html
   # OR open with your browser
   
   # Using VS Code Live Server (Optional)
   # Install "Live Server" extension and right-click → "Open with Live Server"
   ```

3. **Start exploring!**
   - Browse zodiac cards
   - Click cards to see details
   - Use filters and search
   - Toggle language and theme
   - Close panel with Escape key

## 🎨 Design & Styling

### Color Scheme

**Light Mode:**
- Background: `#f8f9fa` (light gray)
- Cards: `#ffffff` (white)
- Text: `#1a1a1a` (dark gray)
- Accent: `#ff6b6b` (red)

**Dark Mode:**
- Background: `#0d1117` (dark navy)
- Cards: `#161b22` (dark gray)
- Text: `#f6f8fa` (light gray)
- Accent: `#ff7b7b` (bright red)

**Element Colors:**
- Metal: `#c0c0c0` (Silver)
- Wood: `#4caf50` (Green)
- Water: `#2196f3` (Blue)
- Fire: `#ff5722` (Orange)
- Earth: `#d4a574` (Brown)

### Typography
- Font Family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- Headers: Bold weight (700)
- Body: Regular weight (400)
- Responsive sizing for readability

## 📊 Zodiac Data

All 12 zodiacs are pre-generated with:

| Animal | Element | Chinese | Birth Years |
|--------|---------|---------|-------------|
| Rat | Water | 鼠 | 1900, 1912, 1924... 2020 |
| Ox | Earth | 牛 | 1901, 1913, 1925... 2021 |
| Tiger | Wood | 虎 | 1902, 1914, 1926... 2022 |
| Rabbit | Wood | 兔 | 1903, 1915, 1927... 2023 |
| Dragon | Wood | 龙 | 1904, 1916, 1928... 2024 |
| Snake | Fire | 蛇 | 1905, 1917, 1929... 2025 |
| Horse | Fire | 马 | 1906, 1918, 1930... 2026 |
| Goat | Earth | 羊 | 1907, 1919, 1931... 2027 |
| Monkey | Metal | 猴 | 1908, 1920, 1932... 2028 |
| Rooster | Metal | 鸡 | 1909, 1921, 1933... 2029 |
| Dog | Earth | 狗 | 1910, 1922, 1934... 2030 |
| Pig | Water | 猪 | 1911, 1923, 1935... 2031 |

Each zodiac includes:
- English & Chinese names
- Element classification
- Birth years (11 cycles)
- Personality traits (EN + ZH)
- Lucky numbers and colors
- Detailed description

## 🎮 Usage Guide

### Viewing Zodiac Details
1. Browse the 12-card grid
2. Click any card to open the detail panel
3. View comprehensive information in the right sidebar
4. Click close button (✕), overlay, or press Escape to close

### Searching
1. Type in the search bar to filter zodiacs
2. Search works with:
   - English names (e.g., "Rat")
   - Chinese names (e.g., "鼠")
   - Traits (e.g., "intelligent")
3. Results update instantly

### Filtering by Element
1. Open the "Filter by Element" dropdown
2. Select Metal, Wood, Water, Fire, or Earth
3. Cards update to show only selected element
4. Combine with search for precise results

### Language Switching
1. Click the language toggle (EN / 中文) in header
2. All text updates immediately:
   - Card names and traits
   - Detail panel content
   - UI labels
3. Preference saves automatically

### Theme Switching
1. Click the theme toggle (☀️ / 🌙) in header
2. Colors smoothly transition
3. All elements adapt to theme
4. Preference saves automatically

### Clearing Filters
1. Click "Clear Filters" button
2. All filters and search are reset
3. All 12 zodiacs displayed again

## 💾 Data Storage

Uses browser's localStorage to save:
- **zodiac_language**: Last selected language (en/zh)
- **zodiac_theme**: Last selected theme (light/dark)
- **zodiac_element**: Last element filter
- **zodiac_search**: Last search query

All data reloads automatically on page refresh.

## 🎯 Browser Support

- ✅ Chrome/Chromium (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Customization

### Adding New Zodiacs
Edit the `zodiacData` array in `script.js`:
```javascript
{
    id: 13,
    nameEn: 'Phoenix',
    nameZh: '凤凰',
    icon: '🔥',
    element: 'Fire',
    years: '...',
    personality: '...',
    traitEn: '...',
    traitZh: '...',
    luckyNumbers: '...',
    luckyColors: '...',
    description: '...'
}
```

### Changing Colors
Edit CSS variables in `:root` in `style.css`:
```css
:root {
    --accent-color: #ff6b6b;
    --element-water: #2196f3;
    /* ... etc */
}
```

### Adding Translations
Edit the `translations` object in `script.js`:
```javascript
const translations = {
    en: { /* ... */ },
    zh: { /* ... */ },
    es: { /* ... */ }  // Add new language
}
```

## 📱 Mobile Optimizations

- Touch-friendly buttons (44px+ height)
- Optimized spacing for small screens
- Responsive grid that adapts to device width
- Full-width detail panel on mobile
- Efficient animations on mobile devices

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels for screen readers
- Keyboard navigation (Escape key)
- Focus indicators for keyboard users
- Color contrast ratios meet WCAG AA standards
- Respects `prefers-reduced-motion` setting
- Alt text for emoji (Unicode descriptions)

## 🐛 Troubleshooting

### Cards not displaying?
- Ensure all files (index.html, style.css, script.js) are in the same directory
- Check browser console (F12) for errors
- Try refreshing the page

### Filters not working?
- Check browser localStorage is enabled
- Clear browser cache and reload
- Ensure search/filter values are correct

### Theme not persisting?
- localStorage might be disabled in your browser
- Check privacy settings
- Try incognito/private mode

### Language not updating?
- Ensure JavaScript is enabled
- Check console for errors
- All zodiac names should have English and Chinese translations

## 📝 License

This project is free to use for educational and commercial purposes.

## 🎉 Credits

- Icons: Unicode emoji (🐭🐂🐯🐰🐉🐍🐴🐑🐵🐓🐕🐷)
- Design inspiration: Modern web design practices
- Technologies: Vanilla HTML, CSS, and JavaScript (no frameworks!)

## 🚀 Future Enhancements

- ✨ Compatibility chart between zodiacs
- ✨ Personality match calculator
- ✨ Export zodiac info as PDF
- ✨ Share zodiac on social media
- ✨ Animation preferences
- ✨ Custom theme builder
- ✨ API integration for extended data

## 📞 Support

For questions or issues, please check:
1. This README documentation
2. Browser console (F12 → Console tab) for errors
3. Ensure files are in correct directory
4. Try different browser

---

**Happy Exploring! 🐭🐂🐯🐰🐉🐍🐴🐑🐵🐓🐕🐷**
