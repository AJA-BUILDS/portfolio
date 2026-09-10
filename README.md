# 🌑 Modern Dark Portfolio Website

A sleek, modern portfolio website with a dark theme, smooth animations, and responsive design. Built with HTML, CSS, and JavaScript.

## ✨ Features

- **Dark Theme Design** - Modern dark color scheme with accent colors
- **Responsive Layout** - Works perfectly on desktop, tablet, and mobile
- **Smooth Animations** - Scroll animations, hover effects, and transitions
- **Interactive Elements** - Animated buttons, project cards, and skill bars
- **Contact Form** - Functional contact form with validation
- **Modern Typography** - Clean, readable fonts using Google Fonts
- **Loading Animation** - Smooth page loading experience
- **Mobile Navigation** - Hamburger menu for mobile devices

## 🚀 Quick Start

1. **Clone or Download** the files to your local machine
2. **Open `index.html`** in your web browser
3. **Customize** the content to match your information
4. **Deploy** to your preferred hosting service

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🎨 Customization Guide

### 1. Personal Information

Edit the following sections in `index.html`:

```html
<!-- Hero Section -->
<span class="title-name">Your Name</span>
<span class="title-role">Your Role/Title</span>
<p class="hero-subtitle">Your tagline or intro</p>

<!-- About Section -->
<p class="about-description">Your personal description</p>

<!-- Contact Information -->
<span>your.email@example.com</span>
<span>+1 (555) 123-4567</span>
<span>Your City, Country</span>
```

### 2. Projects

Replace the project cards in the Projects section:

```html
<div class="project-card" data-aos="fade-up">
    <div class="project-image">
        <!-- Add your project image here -->
        <img src="path/to/your/image.jpg" alt="Project Name">
    </div>
    <div class="project-content">
        <h3 class="project-title">Your Project Name</h3>
        <p class="project-description">Your project description</p>
        <div class="project-tech">
            <span class="tech-tag">Technology 1</span>
            <span class="tech-tag">Technology 2</span>
        </div>
        <div class="project-buttons">
            <a href="your-live-demo-url" class="btn btn-small btn-primary">
                <i class="fas fa-external-link-alt"></i>
                <span>Live Demo</span>
            </a>
            <a href="your-github-url" class="btn btn-small btn-secondary">
                <i class="fab fa-github"></i>
                <span>Code</span>
            </a>
        </div>
    </div>
</div>
```

### 3. Skills

Update the skills section with your actual skills and proficiency levels:

```html
<div class="skill-item" data-aos="fade-up">
    <div class="skill-icon">
        <i class="fab fa-html5"></i>
    </div>
    <span class="skill-name">HTML5</span>
    <div class="skill-bar">
        <div class="skill-progress" data-progress="90"></div>
    </div>
</div>
```

### 4. Social Media Links

Update the footer social links:

```html
<div class="footer-social">
    <a href="your-linkedin-url" class="social-link" aria-label="LinkedIn">
        <i class="fab fa-linkedin"></i>
    </a>
    <a href="your-github-url" class="social-link" aria-label="GitHub">
        <i class="fab fa-github"></i>
    </a>
    <!-- Add more social links as needed -->
</div>
```

### 5. Colors and Theme

Customize the color scheme in `styles.css`:

```css
:root {
    --bg-primary: #0D0D0D;        /* Main background */
    --bg-secondary: #121212;      /* Secondary background */
    --bg-tertiary: #1A1A1A;       /* Tertiary background */
    --text-primary: #FFFFFF;      /* Primary text */
    --text-secondary: #CCCCCC;    /* Secondary text */
    --accent-primary: #6366F1;    /* Primary accent */
    --accent-secondary: #8B5CF6;  /* Secondary accent */
    --accent-tertiary: #EC4899;   /* Tertiary accent */
}
```

## 🎯 Sections Overview

### Hero Section
- Animated name and title
- Call-to-action buttons
- Floating background elements
- Scroll indicator

### About Section
- Personal description
- Professional highlights
- Circular avatar placeholder

### Projects Section
- Project cards with hover effects
- Technology tags
- Live demo and code links
- Responsive grid layout

### Skills Section
- Animated skill bars
- Technology icons
- Categorized skills (Frontend/Backend)

### Contact Section
- Contact form with validation
- Contact information
- Social media links

### Footer
- Social media icons
- Copyright information
- Hover animations

## 🔧 Technical Features

### Animations
- **Scroll Animations** - Elements fade in as you scroll
- **Hover Effects** - Interactive elements respond to mouse hover
- **Loading Animation** - Smooth page loading experience
- **Typing Effect** - Animated text in hero section
- **Parallax Effects** - Background elements move on scroll

### Responsive Design
- **Mobile First** - Optimized for mobile devices
- **Flexible Grid** - Adapts to different screen sizes
- **Touch Friendly** - Large touch targets for mobile
- **Hamburger Menu** - Collapsible navigation for mobile

### Performance
- **Optimized CSS** - Efficient styling with CSS variables
- **Smooth Scrolling** - Native smooth scroll behavior
- **Intersection Observer** - Efficient scroll animations
- **Minimal JavaScript** - Lightweight and fast

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📱 Mobile Features

- Responsive navigation menu
- Touch-friendly buttons
- Optimized typography
- Smooth scrolling
- Mobile-optimized layouts

## 🚀 Deployment

### GitHub Pages
1. Create a new repository
2. Upload your files
3. Go to Settings > Pages
4. Select source branch
5. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop your folder to Netlify
2. Your site will be deployed instantly
3. Get a custom domain (optional)

### Vercel
1. Connect your GitHub repository
2. Deploy automatically on push
3. Get preview deployments for pull requests

## 🎨 Customization Tips

1. **Images** - Replace placeholder images with your own
2. **Colors** - Adjust the CSS variables to match your brand
3. **Fonts** - Change Google Fonts in the HTML head
4. **Icons** - Use Font Awesome icons or replace with custom SVGs
5. **Animations** - Modify animation timings in CSS
6. **Content** - Update all text content to reflect your information

## 📞 Support

If you need help customizing your portfolio:

1. Check the comments in the code files
2. Modify the CSS variables for easy color changes
3. Update the HTML content with your information
4. Test on different devices and browsers

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy coding! 🚀**

Feel free to customize this portfolio to showcase your unique skills and personality. The dark theme provides a modern, professional look that will make your work stand out. 