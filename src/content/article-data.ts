export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  tags: string[];
  readTime: number;
  featured: boolean;
}

export interface ArticleModule {
  default: React.ComponentType;
  frontmatter: Article;
}

// Import all articles - Vite will bundle these
const articles = import.meta.glob<ArticleModule>('./articles/**/*.mdx', {
  eager: true,
});

export function getAllArticles(): Article[] {
  const articleList: Article[] = [];

  for (const path of Object.keys(articles)) {
    const module = articles[path] as ArticleModule;
    if (module?.frontmatter) {
      const slug = path
        .replace('./articles/', '')
        .replace('.mdx', '');
      articleList.push({
        ...module.frontmatter,
        slug,
      });
    }
  }

  // Sort by date descending
  return articleList.sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getArticleBySlug(slug: string): ArticleModule | null {
  const path = `./articles/${slug}.mdx`;
  return (articles[path] as ArticleModule) || null;
}

export function getArticlesByCategory(category: string): Article[] {
  return getAllArticles().filter(
    (article) => article.category.toLowerCase() === category.toLowerCase()
  );
}

export function getFeaturedArticles(): Article[] {
  return getAllArticles().filter((article) => article.featured);
}
