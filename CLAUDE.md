# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 documentation site built with Nextra 4.6 and nextra-theme-docs. The project uses the Next.js App Router architecture with React 19, TypeScript, and Tailwind CSS 4.

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build production bundle
npm run build

# Start production server
npm start
```

The development server runs on http://localhost:3000 by default.

## Architecture

### Nextra Integration

The project uses a dual configuration setup for Nextra:

- **next.config.mjs**: Contains the Nextra wrapper configuration using the `nextra()` function
- **next.config.ts**: Standard Next.js configuration file (currently minimal)

The Nextra configuration in next.config.mjs wraps the Next.js config to enable MDX-based documentation features.

### App Router Structure

This project uses Next.js App Router (not Pages Router):

- **app/layout.tsx**: Root layout that sets up the Nextra theme with `<Layout>`, `<Navbar>`, `<Footer>`, and `<Banner>` components
  - Uses `getPageMap()` to generate navigation from file structure
  - Configured with docs repository base URL pointing to Nextra's GitHub
  - Implements theme switching via next-themes with `suppressHydrationWarning`
- **app/page.tsx**: Homepage (currently the default Next.js starter page)

### Key Dependencies

- **Nextra 4.6**: MDX-based static site generator for Next.js
- **nextra-theme-docs**: Documentation theme with built-in navigation, search, and dark mode
- **Next.js 15.5**: Using Turbopack for faster builds
- **Tailwind CSS 4**: Utility-first CSS framework (using @tailwindcss/postcss)
- **TypeScript 5**: Strict mode enabled

### Styling

- Uses Tailwind CSS 4 with the PostCSS plugin approach
- Nextra theme styles imported via `nextra-theme-docs/style.css` in app/layout.tsx
- PostCSS configured with @tailwindcss/postcss plugin

## Important Notes

### Nextra App Router File Structure (CRITICAL)

**ALWAYS follow this structure when creating documentation pages:**

1. **Pages MUST be in folders as `page.mdx`**, NOT standalone `.mdx` files
   - ✅ CORRECT: `app/infrastructure/proxmox-install/page.mdx`
   - ❌ WRONG: `app/infrastructure/proxmox-install.mdx`

2. **_meta.ts files reference folder names**, not file names
   ```ts
   // app/infrastructure/_meta.ts
   export default {
     'proxmox-install': 'Installing Proxmox VE'  // References the FOLDER name
   }
   ```

3. **Section overview pages** use `page.mdx` in the section folder with `asIndexPage: true` frontmatter
   ```mdx
   ---
   title: Infrastructure
   asIndexPage: true
   ---
   ```

### MDX Syntax (CRITICAL)

**MDX is NOT the same as Markdown. Follow these rules:**

1. **Comments**: Use `{/* comment */}` NOT `<!-- comment -->`
   - ✅ CORRECT: `{/* Add screenshot here */}`
   - ❌ WRONG: `<!-- Add screenshot here -->`

2. **JSX expressions** require curly braces for dynamic content

3. **Images** are automatically optimized by Nextra when using standard markdown syntax:
   ```mdx
   ![Alt text](/images/folder/image.png)
   ```

### Nextra Page Map

The `getPageMap()` function in app/layout.tsx:39 automatically generates the site's navigation structure from the file system. Content pages should be added following the App Router structure above.

### Configuration Files

There are two Next.js config files:
- **next.config.mjs**: The active configuration that includes Nextra setup
- **next.config.ts**: TypeScript config file (may be legacy or for type checking)

When modifying Next.js configuration, ensure changes are made to next.config.mjs.

### Turbopack

Both dev and build scripts use the `--turbopack` flag for faster bundling. This is a Next.js 15 feature that replaces Webpack.

## MCP Servers
REQUIRED: MUST Use the Github MCP servers when doing github things, NEVER USE JUST git 
Use the Context7 MCP server to get documentation when doing any coding or when you need to reference something about nextjs, nextra, or anything else that MCP server might be useful for.
- NEVER USE GIT DIRECTLY ONLY USE THE MCP SERVER FOR GITHUB
