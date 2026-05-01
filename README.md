# Relationship Advice Website 🤍

A modern, fast, and responsive website dedicated to providing practical advice and insights for dating, communication, conflict resolution, and lasting love.

This project is built as a static site that renders Markdown (`.mdx`) files into beautiful, interactive web pages.

## ✨ Features

- **Fast & Responsive**: Built with Vite and React for lightning-fast load times.
- **MDX Content Pipeline**: Articles are written in Markdown with frontmatter, automatically parsed and injected into the site. No database required!
- **Instant Search**: Real-time filtering across article titles, excerpts, and tags.
- **SEO Optimized**: Fully integrated with `react-helmet-async` for automatic metadata and OpenGraph tags to ensure links look great when shared on social media.
- **Smooth Animations**: Powered by `framer-motion` for a premium, polished user experience.
- **Performance Tuned**: Implements React Route Code-Splitting (`React.lazy()`) for minimal initial load times.

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS v4
- **Routing**: React Router v7
- **Content Parsing**: `@mdx-js/rollup`, `remark-frontmatter`, `remark-mdx-frontmatter`
- **Animations**: Framer Motion
- **SEO**: React Helmet Async

---

## 📝 How to Write a New Article

Adding content is incredibly easy. You don't need to touch any code!

1. Go to the `src/content/articles/` folder.
2. Create a new file ending in `.mdx` (e.g., `my-new-article.mdx`).
3. Add the "frontmatter" at the very top of the file to configure the metadata:
   ```markdown
   ---
   title: "Your Article Title"
   excerpt: "A short 1-2 sentence summary."
   date: 2026-05-01
   category: "Communication"
   tags: ["listening", "tips"]
   readTime: 4
   featured: false
   ---
   ```
4. Write your article below the dashes using standard Markdown! The site will automatically detect the file, add it to the Article index, and make it searchable.

---

## 🚀 Running the Site Locally

If you want to run this project on your own machine:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## 🌐 Deployment

This project is configured to be easily deployed to **Vercel** or **Netlify**. Simply connect your GitHub repository to your preferred hosting provider, and it will automatically build and publish your site whenever you push to the `main` branch.
