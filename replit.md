# Varun Jain Portfolio Website

## Overview

This is a dynamic portfolio website for Varun Jain, a passionate web developer. The site is built with vanilla HTML, CSS, and JavaScript, featuring a modern, responsive design with smooth animations and a dark/light theme toggle. The website is designed to be fully dynamic, pulling all content from a single JSON file (`data.json`) for easy maintenance and updates.

## System Architecture

### Frontend Architecture
- **Technology Stack**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Architecture Pattern**: Client-side rendered single-page application
- **Styling Approach**: CSS custom properties (variables) for theme management
- **Animation Library**: AOS (Animate On Scroll) for scroll-triggered animations
- **Icon Library**: Font Awesome 6.0 for consistent iconography
- **Typography**: Google Fonts (Inter family) for modern, readable text

### Data Management
- **Data Source**: Single JSON file (`data.json`) containing all portfolio content
- **Data Structure**: Organized into sections (personal, stats, skills, experience, projects)
- **Dynamic Loading**: JavaScript fetches and renders data dynamically on page load

## Key Components

### 1. Theme System
- **Dual Theme Support**: Light and dark mode toggle
- **CSS Variables**: Theme-aware color scheme using CSS custom properties
- **Persistence**: Theme preference stored in localStorage
- **Smooth Transitions**: Animated theme switching

### 2. Navigation System
- **Sticky Navigation**: Fixed navbar with scroll-based styling changes
- **Smooth Scrolling**: CSS scroll-behavior for seamless navigation
- **Active State Management**: JavaScript-driven active link highlighting

### 3. Loading Experience
- **Loading Screen**: Custom loader with animated ring and fade-out effect
- **Progressive Enhancement**: Content loads after initial page setup

### 4. Content Sections
- **Hero Section**: Dynamic name, title, and description from JSON with particle animations
- **About Section**: Personal information and bio with animated code snippet
- **Experience Section**: Professional timeline with animated cards showing internships and work experience
- **Skills Section**: Dynamic skill cards with hover animations and shimmer effects
- **Projects Section**: Portfolio projects with 3D hover effects and light sweeps
- **Contact Section**: Interactive contact form with glow effects

### 5. Animation System
- **AOS Integration**: Scroll-triggered animations for visual appeal
- **Custom CSS Animations**: Loader animations and hover effects
- **Performance Optimized**: Smooth 60fps animations using CSS transforms

## Data Flow

1. **Initial Load**: Page loads with loading screen
2. **Data Fetching**: JavaScript fetches `data.json`
3. **DOM Manipulation**: Content is dynamically injected into HTML templates
4. **Animation Initialization**: AOS and custom animations are initialized
5. **User Interaction**: Theme toggle, navigation, and form handling

## External Dependencies

### CDN Dependencies
- **Google Fonts**: Inter font family for typography
- **Font Awesome**: v6.0.0 for icons
- **AOS Library**: v2.3.1 for scroll animations

### No Build Tools Required
- Pure vanilla JavaScript approach
- No bundling or compilation needed
- Direct browser compatibility

## Deployment Strategy

### Static Hosting Ready
- **File Structure**: All files are static and can be served directly
- **No Server Requirements**: Pure client-side application
- **CDN Friendly**: External dependencies loaded from CDNs
- **Performance**: Optimized for fast loading and smooth interactions

### Recommended Hosting
- GitHub Pages
- Netlify
- Vercel
- Any static file hosting service

## Changelog

- July 02, 2025. Initial setup
- July 02, 2025. Added three main projects (Edusity, .sneakers E-commerce, Instagram Clone) with JSON-driven image support
- July 02, 2025. Redesigned experience section from timeline to modern card grid layout
- July 02, 2025. Removed Express server dependency, switched to static Python server for simplicity

## User Preferences

Preferred communication style: Simple, everyday language.