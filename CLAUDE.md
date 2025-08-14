# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Alan Fuller built with Astro, featuring:
- Static site generation with Astro framework
- Tailwind CSS for styling
- Docker deployment with Nginx
- Umami analytics integration
- Enhanced email obfuscation

## Essential Commands

```bash
# Development
npm run dev          # Start dev server at localhost:4321

# Production
npm run build        # Build static site to ./dist/
npm run preview      # Preview production build locally

# Docker deployment
docker build -t alanfuller-web .
docker run -p 80:80 alanfuller-web
```

## Architecture

### Tech Stack
- **Framework**: Astro 5.x with TypeScript
- **Styling**: Tailwind CSS with custom Inter font
- **Deployment**: Static files served via Nginx in Docker container
- **Analytics**: Umami (self-hosted at analytics.fw9.uk)

### Component Structure
- **Layout**: `src/layouts/Layout.astro` - Base HTML template with SEO, structured data, and email protection script
- **Pages**: `src/pages/*.astro` - Routes based on file names
- **Components**: `src/components/*.astro` - Reusable Astro components (Header, Hero, Footer, etc.)

### Key Features Implementation

**Email Protection**: Custom JavaScript obfuscation in Layout.astro that:
- Base64 encodes email parts
- Uses CSS pseudo-elements for display
- Prevents right-click inspection
- Builds mailto links dynamically on click

**Image Optimization**: Multiple image sizes with preloading:
- alanfuller-small.jpg (mobile < 640px)
- alanfuller-mobile.jpg (tablet 641-768px)
- alanfuller-desktop.jpg (desktop 769px+)
- alanfuller-og.jpg (Open Graph 1200x630)

**Performance**: 
- Inline critical CSS (`inlineStylesheets: 'always'`)
- Asset inlining for files < 10KB
- Font preloading with local TTF files

### SEO & Structured Data
- Rich structured data for Person, Organization, and ProfilePage schemas
- Complete Open Graph and Twitter Card meta tags
- Sitemap at `/sitemap.xml`
- Robots.txt configured for AI/LLM indexing