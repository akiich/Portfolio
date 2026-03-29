# Portfolio Website - Palki Sangwan

A modern, responsive, and highly interactive single-page portfolio website designed to showcase projects, skills, and experience.

## Features ✨
- **Fully Responsive**: Mobile-first design that adapts seamlessly to any screen size.
- **Premium Aesthetics**: Dark theme featuring Deep Charcoal (`#1a1a2e`), Cream White (`#f5f0e8`), and Gold Accents (`#c9a84c`).
- **Dynamic Scroll Animations**: Elements fade, slide, and scale into view as you scroll down using `IntersectionObserver`.
- **Interactive Navigation**: Sticky navbar with scroll-spy functionality that highlights the active section.
- **Certificate Lightbox**: Click on any certificate to view it in full screen without leaving the page.
- **Integrated CV Preview**: Embedded real-time PDF viewer alongside a quick summary.
- **Custom Cursor Gloss**: A subtle glowing effect follows the mouse cursor on desktop devices, enhancing interactivity.

## Technologies Used 🛠️
- **HTML5**: Semantic layout.
- **CSS3**: CSS Variables, Grid, Flexbox, Keyframes, Transitions.
- **Vanilla JavaScript**: DOM Manipulation, Event Listeners, IntersectionObserver API.
- **FontAwesome & DevIcons**: Scalable vector icons.

## File Structure 📁
```
portfolio/
├── index.html        # Main HTML layout
├── css/
│   └── style.css     # Theming, layout, and animations
├── js/
│   └── main.js       # Core logic for interactions and scrolling
├── assets/
│   ├── images/       # Placeholder for future raster assets
│   └── cv.pdf        # Downloadable resume
└── README.md
```

## Setup & Local Development 🚀
1. Clone or download the repository.
2. Ensure you have the file structure exactly as described above.
3. Replace the placeholder images in `index.html` with your actual project screenshots.
4. Replace the `assets/cv.pdf` with your up-to-date resume file.
5. Simply open `index.html` in any modern web browser to view the portfolio.

## Future Customization 🎨
All main theme colors and typography are controlled by CSS Variables inside `css/style.css` in the `:root` scope. To change the theme, simply update the variables:
```css
:root {
    --bg-dark: #YOUR_BACKGROUND;
    --text-light: #YOUR_TEXT_COLOR;
    --accent: #YOUR_ACCENT_COLOR;
}
```

## Author
*Designed & Built by Palki Sangwan*
