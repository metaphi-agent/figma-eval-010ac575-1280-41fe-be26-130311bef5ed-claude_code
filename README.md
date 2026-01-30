# Startup Landing Pages

A production-ready React implementation of landing page templates from Figma design.

## Features

- **Article Page**: Purple hero header with user profile and article content
- **Blog Page**: Main article with sidebar (Last Seen, Newsletter, Most Popular sections)
- **Responsive Design**: Following Figma specifications
- **Modern Stack**: React 19, Vite, Tailwind CSS v4

## Preview

Live preview available at: https://ta-01kg7y53mvrsztt6ey0xh8xaxm-5173.wo-j58o0qzm0tayp7l87pn2ig4h1.w.modal.host

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── ui/           # Button, PostCard, NewsletterForm
│   └── blocks/       # HeroHeader, UserProfile, Sidebar
├── pages/           # ArticlePage, BlogPage
├── App.tsx          # Main app with navigation
├── main.tsx         # Entry point
└── index.css        # Tailwind CSS with design tokens
```

## Design Tokens

Colors, typography, and spacing extracted from Figma:

- **Primary**: #2F1893 (Dark), #E93A7D (Action)
- **Text**: #1E0D63 (Heading), rgba(21, 20, 57, 0.4) (Body)
- **Font**: DM Sans (Regular, Medium, Bold)

## Figma Source

[Free Figma Website Landing Pages - Startup App](https://www.figma.com/design/V9fFusRtr1gh5rC8dmMwVQ/Free-Figma-Website-Landing-Pages---Startup-App--Community-)

## License

MIT
