# LocalHake Docs

Comprehensive documentation for self-hosting, AI infrastructure, and homelab management. Built with Next.js 15 and Nextra 4.

🌐 **Live Documentation**: https://docs.localhake.com

## About

LocalHake Docs is your go-to resource for practical, step-by-step guides covering:

- **AI Infrastructure**: ComfyUI, Open WebUI, Ollama, and AI tooling
- **Self-Hosting**: Deploy and manage applications in your homelab
- **Proxmox**: LXC containers, VMs, and virtualization guides
- **Docker**: Container deployment and management
- **Automation**: n8n workflows and automation solutions
- **Media Servers**: Jellyfin and homelab essentials

## Support This Project

If you find these guides helpful, please consider subscribing to my YouTube channel where I create video tutorials and walkthroughs:

**[HakeHardware on YouTube](https://www.youtube.com/@hakehardware)**

Your support helps me create more content and maintain this documentation!

## Tech Stack

- **Framework**: Next.js 15.5 (App Router)
- **Documentation**: Nextra 4.6 with nextra-theme-docs
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript 5
- **Build Tool**: Turbopack

## Development

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Getting Started

1. Clone the repository:
```bash
git clone https://github.com/hakehardware/nextra-doc.git
cd nextra-doc
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

The page auto-updates as you edit files.

### Available Scripts

```bash
# Development server with Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm start
```

## Project Structure

```
nextra-doc/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout with Nextra theme
│   ├── page.mdx             # Homepage
│   └── [sections]/          # Documentation sections
├── components/              # React components
├── public/                  # Static assets
│   └── photos/             # Documentation images
├── next.config.mjs         # Next.js + Nextra configuration
└── CLAUDE.md               # AI assistant instructions
```

## Contributing Documentation

Documentation pages are written in MDX (Markdown + JSX). To add a new guide:

1. Create a folder in `app/` for your section (e.g., `app/infrastructure/`)
2. Add `page.mdx` files for each guide
3. Create a `_meta.ts` file to define navigation
4. Add images to `public/photos/[section]/`

See [CLAUDE.md](./CLAUDE.md) for detailed architecture notes.

## Key Features

- **MDX Support**: Write documentation with Markdown and React components
- **Dark Mode**: Built-in theme switching
- **Search**: Full-text search across documentation
- **Navigation**: Automatic sidebar generation from file structure
- **Responsive**: Mobile-friendly design
- **Fast**: Optimized with Turbopack and static generation

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Nextra Documentation](https://nextra.site)
- [Project Issues](https://github.com/hakehardware/nextra-doc/issues)

## License

Documentation content © HakeHardware. See individual guide pages for specific licensing.

---

**Made with ❤️ by [HakeHardware](https://www.youtube.com/@hakehardware)**
