# Sauga Wellness Foundation

**Your destination for wellness advocacy and community health.**

The Sauga Wellness Foundation website — built with modern web technologies for performance, accessibility, and user experience.

## Features

- ✅ **Production-ready** performance (Lighthouse scores 90+)
- ✅ **Responsive design** with Tailwind CSS and dark mode support
- ✅ **Image optimization** for fast page loads
- ✅ **SEO-friendly** with sitemap and meta tags
- ✅ **Analytics integration** for tracking engagement
- ✅ **Accessibility** built-in from the start

## Tech Stack

- **[Astro 6.0](https://astro.build/)** - Static site framework
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Node.js 22+](https://nodejs.org/)** - Runtime environment

## Getting Started

### Prerequisites

- Node.js 22 or later
- npm 10+

### Installation

```bash
# Clone the repository
git clone https://github.com/serendevity/sauga-wellness-astro.git
cd sauga-wellness-astro

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

## Available Commands

```bash
npm run dev          # Start local development server
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run check        # Run all checks (Astro, ESLint, Prettier)
npm run fix          # Auto-fix linting and formatting issues
```

## Project Structure

```
/
├── src/
│   ├── assets/           # Images, fonts, styles
│   ├── components/       # Reusable Astro components
│   ├── layouts/          # Page layouts
│   ├── pages/            # Route pages (auto-generates URLs)
│   └── content/          # Content collections
├── public/               # Static files (robots.txt, etc.)
├── astro.config.ts       # Astro configuration
└── tailwind.config.js    # Tailwind CSS configuration
```

## Deployment

The site is deployed on [Netlify](https://netlify.com) at **https://saugawellness.com**

Deployment happens automatically when changes are pushed to the `main` branch.

### Local Testing Before Deploy

```bash
npm run build
npm run preview
```

## Contributing

We welcome contributions! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Test with `npm run check`
5. Commit with clear messages
6. Push to your fork
7. Open a pull request

## License

This project is licensed under the MIT License. See [LICENSE.md](LICENSE.md) for details.

This project is based on the [AstroWind](https://github.com/onwidget/astrowind) template by [onWidget](https://onwidget.com).

## Support

For questions or issues, please open an issue on [GitHub](https://github.com/serendevity/sauga-wellness-astro/issues).

---

**Maintained by Sauga Wellness Foundation**
