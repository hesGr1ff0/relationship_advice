# Relationship Advice Website - Project Plan

## Overview
Build a modern, responsive website for relationship advice content.

## Tech Stack
- **Frontend**: React with Vite (fast, modern DX)
- **Styling**: Tailwind CSS (rapid UI development)
- **Routing**: React Router
- **Content**: Markdown-based articles with MDX support
- **Deployment**: Vercel or Netlify

## Site Structure

### Pages
1. **Home** (`/`)
   - Hero section with value proposition
   - Featured articles
   - Categories overview
   - Newsletter signup

2. **Articles** (`/articles`)
   - Article listing with filters/categories
   - Search functionality

3. **Article Detail** (`/articles/:slug`)
   - Full article content
   - Related articles
   - Share buttons

4. **Categories** (`/categories/:category`)
   - Dating
   - Communication
   - Conflict Resolution
   - Long-term Relationships
   - Self-Love

5. **About** (`/about`)
   - Mission statement
   - Author bio

6. **Contact** (`/contact`)
   - Contact form
   - Social links

## Features
- Responsive design (mobile-first)
- SEO optimized (meta tags, sitemap)
- Fast loading (optimized images, lazy loading)
- Newsletter integration (Substack or ConvertKit)
- Comment system (optional: Giscus or Disqus)

## Implementation Phases

### Phase 1: Setup ✅
- [x] Initialize Vite + React project
- [x] Configure Tailwind CSS
- [x] Set up React Router
- [x] Create base layout components

### Phase 2: Core Pages
- [x] Home page with hero
- [x] Article listing page
- [x] Article detail page with MDX rendering
- [x] Navigation and footer

### Phase 3: Content
- [x] Create sample articles in markdown
- [x] Set up content directory structure
- [x] Build article data layer

### Phase 4: Polish
- [ ] Add animations/transitions
- [ ] Implement search
- [ ] SEO meta tags
- [ ] Performance optimization

### Phase 5: Deploy
- [ ] Connect to GitHub
- [ ] Deploy to Vercel/Netlify
- [ ] Set up custom domain (optional)

## File Structure
```
src/
├── components/
│   ├── Layout.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ArticleCard.tsx
│   └── SEO.tsx
├── pages/
│   ├── Home.tsx
│   ├── Articles.tsx
│   ├── Article.tsx
│   ├── Category.tsx
│   ├── About.tsx
│   └── Contact.tsx
├── content/
│   └── articles/
└── styles/
```

## Coding Conventions

### TypeScript
- Use TypeScript for all components (`.tsx` files)
- Prefer interfaces over types for component props
- Use strict null checks
- No `any` - use `unknown` with proper type guards when needed

### Component Patterns
- Functional components only (no class components)
- Use named exports for components, default export only for page components
- Props interface naming: `ComponentNameProps`
- Destructure props in function signature

```tsx
interface ArticleCardProps {
  title: string;
  excerpt: string;
  category: string;
  slug: string;
}

export function ArticleCard({ title, excerpt, category, slug }: ArticleCardProps) {
  // component logic
}
```

### File Naming
- Components: PascalCase (e.g., `ArticleCard.tsx`)
- Utilities: camelCase (e.g., `formatDate.ts`)
- Content files: kebab-case (e.g., `5-tips-for-better-communication.md`)

### Styling (Tailwind)
- Use Tailwind classes directly in JSX
- Extract to components when pattern repeats 3+ times
- Use `clsx` or `classnames` for conditional classes
- Mobile-first approach (base styles mobile, `md:` and up for larger)

## Content Format

### Article Frontmatter
All markdown articles should include this frontmatter:

```markdown
---
title: "Article Title"
excerpt: "Brief 1-2 sentence description"
date: 2024-01-15
category: "Dating"
tags: ["communication", "first dates"]
readTime: 5
featured: false
---
```

### Supported Categories
- `Dating` - Early stage relationship content
- `Communication` - Talking, listening, expression
- `Conflict Resolution` - Arguments, disagreements, repair
- `Long-term Relationships` - Marriage, commitment, growth
- `Self-Love` - Personal growth, boundaries, independence

## Development Workflow

### Commands
```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Branch Naming
- `feature/<name>` - New features
- `fix/<name>` - Bug fixes
- `content/<name>` - Content additions

### Commit Convention
```
<type>(<scope>): <description>

feat: add newsletter signup component
fix: resolve navigation z-index issue
docs: update README with setup instructions
content: add 3 new articles about communication
```

## Architecture Notes

### State Management
- Keep state local when possible
- Use React Context for global state (theme, mobile menu)
- No Redux/Zustand needed for this content-focused site

### Data Flow
- Articles loaded from markdown at build time
- No backend API - static generation
- Future: Could add CMS integration (Contentful, Sanity)

### Performance Budget
- Lighthouse score > 90 on all metrics
- First Contentful Paint < 1.5s
- Time to Interactive < 3.5s
- Max bundle size: 200KB (gzipped)

## API Integrations

### Newsletter (To implement)
- Substack embed OR
- ConvertKit form
- Store subscriber count for social proof

### Analytics (To implement)
- Vercel Analytics (built-in) OR
- Google Analytics 4
- Plausible (privacy-focused alternative)

## Known Decisions

- **Why Vite?** - Faster DX than CRA, simpler than Next.js for static content
- **Why not Next.js?** - No SSR/ISR needed for this content type; simpler deployment
- **Why Tailwind?** - Faster UI iteration, consistent design system, smaller bundle
- **Why markdown?** - Easy content updates without touching code

## Current Status
**Phase 3 Complete** - Core pages, content structure, and sample articles are ready.

### Next Steps
1. Begin Phase 4: Polish (Animations/transitions, search, SEO, performance)
2. Finalize site design

### Useful Commands
```bash
npm run dev     # Start dev server at localhost:5173
npm run build   # Production build
npm run preview # Preview production build
```
