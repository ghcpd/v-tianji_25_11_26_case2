# 🐉 Chinese Zodiac Dashboard | 十二生肖仪表板

An interactive, beautifully designed web dashboard for exploring the 12 Chinese Zodiac animals. Built with vanilla JavaScript, featuring bilingual support (English/中文), light/dark themes, and smooth animations.

![Chinese Zodiac Dashboard](https://img.shields.io/badge/Status-Complete-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

### 🎴 Zodiac Cards Display
- **12-card grid layout** displaying all zodiac animals (Rat → Pig)
- Each card shows:
  - Zodiac icon (emoji representation)
  - English and Chinese names
  - Associated element (Metal/Wood/Water/Fire/Earth)
- **Hover tooltips** reveal key personality traits
- **Smooth animations** with staggered entrance effects
- **Responsive design**:
  - Desktop: 4×3 grid layout
  - Tablet: 3×4 grid layout
  - Mobile: Single column vertical scroll

### 📋 Detail Panel
Click any zodiac card to open a slide-in detail panel featuring:
- Full zodiac name in both languages
- Element classification with color coding
- Comprehensive personality description
- Key characteristics list
- **Background glow animation** for visual appeal
- **Floating icon animation**
- Easy close via button, overlay click, or ESC key

### 🔍 Filters & Search
- **Element dropdown filter**: Filter by Metal, Wood, Water, Fire, or Earth
- **Real-time search bar**: Search by zodiac name (English or Chinese) or keywords
- **Instant client-side filtering** - no page reload needed
- **No results message** when filters yield no matches

### 🌐 Language Toggle
- Switch between **English** and **中文** (Chinese)
- All text updates dynamically:
  - Card names and tooltips
  - Detail descriptions and traits
  - UI labels and placeholders
  - Element names
- Selected language persists in localStorage

### 🌙 Theme Mode
- **Light/Dark mode toggle** with smooth transitions
- Theme-aware color palette:
  - Background, cards, and text colors adapt
  - Element badges adjust for readability
  - Shadows and borders change dynamically
- **Icon indicator**: 🌙 (light mode) / ☀️ (dark mode)
- Theme preference saved in localStorage

### 💾 Persistence
All user preferences are saved in **localStorage**:
- Selected language (EN/中文)
- Theme preference (light/dark)
- Last used element filter
- Settings persist across browser sessions

### 🎨 Animations & Transitions
- **Staggered card entrance** animations
- **Smooth hover effects** with elevation and border highlights
- **Slide-in detail panel** with backdrop overlay
- **Pulsing glow effect** in detail view
- **Floating icon animation**
- **Theme transition** animations
- All transitions use CSS cubic-bezier easing

## 🗂️ Project Structure

```
Claude-Sonnet-4.5/
├── index.html       # Main HTML structure
├── style.css        # All styles, themes, and animations
├── script.js        # JavaScript logic and zodiac data
└── README.md        # This file
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required!

### Installation & Usage

1. **Download the files**
   ```
   - index.html
   - style.css
   - script.js
   ```

2. **Open in browser**
   - Simply double-click `index.html` or
   - Right-click → Open with → [Your Browser]

3. **Explore!**
   - Click cards to view details
   - Use filters and search
   - Toggle language and theme
   - Your preferences will be saved automatically

## 📊 Dataset

The zodiac data is **self-generated** within `script.js` - no external JSON files needed!

Each zodiac animal includes:
- **Name**: English and Chinese
- **Icon**: Emoji representation
- **Element**: One of five elements (Metal/Wood/Water/Fire/Earth)
- **Tooltip**: Quick personality trait
- **Description**: Detailed personality overview
- **Traits**: 4 key characteristics

### Zodiac Animals & Elements

| Zodiac | Chinese | Element | Icon |
|--------|---------|---------|------|
| Rat    | 鼠      | Water   | 🐀   |
| Ox     | 牛      | Earth   | 🐂   |
| Tiger  | 虎      | Wood    | 🐅   |
| Rabbit | 兔      | Wood    | 🐇   |
| Dragon | 龙      | Earth   | 🐉   |
| Snake  | 蛇      | Fire    | 🐍   |
| Horse  | 马      | Fire    | 🐴   |
| Goat   | 羊      | Earth   | 🐐   |
| Monkey | 猴      | Metal   | 🐵   |
| Rooster| 鸡      | Metal   | 🐓   |
| Dog    | 狗      | Earth   | 🐕   |
| Pig    | 猪      | Water   | 🐖   |

## 🎯 Technical Highlights

### Pure Vanilla JavaScript
- No frameworks or libraries
- No build process required
- ~450 lines of clean, well-commented code

### CSS Custom Properties
- Theme switching using CSS variables
- Easy color customization
- Smooth transitions between themes

### LocalStorage Integration
- Persistent user preferences
- Seamless experience across sessions
- Privacy-friendly (all data stored locally)

### Accessibility Features
- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support (ESC to close panel)
- High contrast ratios in both themes
- Responsive touch targets for mobile

### Performance Optimizations
- Efficient DOM manipulation
- CSS-based animations (hardware accelerated)
- Minimal JavaScript execution
- No external API calls or network requests

## 🌟 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (4 columns)
- **Tablet**: 768px - 1199px (3 columns)
- **Mobile**: < 768px (1 column)

## 🎨 Color Palette

### Light Theme
- Primary Background: `#f5f7fa`
- Card Background: `#ffffff`
- Primary Text: `#2c3e50`
- Accent: `#4a90e2`

### Dark Theme
- Primary Background: `#1a1d29`
- Card Background: `#2d3142`
- Primary Text: `#e0e6ed`
- Accent: `#5da9ff`

### Element Colors
- Metal: `#c0c0c0` (Silver)
- Wood: `#4caf50` (Green)
- Water: `#2196f3` (Blue)
- Fire: `#f44336` (Red)
- Earth: `#8d6e63` (Brown)

## 🔧 Customization

### Adding More Zodiac Data
Edit the `zodiacData` array in `script.js`:

```javascript
{
    id: 13,
    name: { en: "YourZodiac", zh: "你的生肖" },
    icon: "🎨",
    element: "Wood",
    tooltip: { en: "Trait", zh: "特征" },
    description: { en: "Description...", zh: "描述..." },
    traits: { en: ["Trait 1", ...], zh: ["特征1", ...] }
}
```

### Changing Colors
Modify CSS custom properties in `style.css`:

```css
:root {
    --accent: #your-color;
    --bg-primary: #your-background;
}
```

## 📄 License

This project is open source and available for personal and commercial use.

## 👨‍💻 Development

Built with ❤️ using:
- Pure HTML5
- CSS3 (Grid, Flexbox, Custom Properties, Animations)
- Vanilla JavaScript (ES6+)
- LocalStorage API

## 🐛 Known Issues

None currently! If you find any bugs, feel free to report them.

## 🙏 Acknowledgments

- Zodiac personality descriptions inspired by traditional Chinese astrology
- Emoji icons provided by Unicode Consortium
- Design inspired by modern dashboard interfaces

---

**Enjoy exploring the Chinese Zodiac! 祝你好运！🐉**
