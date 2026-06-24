/**
 * Portfolio catalog
 * Add your projects here. Each item can reference MDX content in /content/portfolio/
 */

export const portfolioItems = [
  {
    slug: "taker",
    title: "Taker",
    category: "photo zine",
    description: "Una publicación sobre contemplar.",
    featured: true,
  },
];

export function getFeatured() {
  return portfolioItems.filter((i) => i.featured);
}
