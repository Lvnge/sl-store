/**
 * Portfolio catalog
 * Add your projects here. Each item can reference MDX content in /content/portfolio/
 */

export const portfolioItems = [
  {
    slug: 'example-series',
    title: 'Example Photo Series',
    category: 'photography',
    description: 'A short description of this series.',
    coverImage: '/images/placeholder.jpg',
    images: ['/images/placeholder.jpg'],
    year: 2024,
    featured: true,
  },
  {
    slug: 'example-zine',
    title: 'Example Zine',
    category: 'zine',
    description: 'A short description of this zine project.',
    coverImage: '/images/placeholder.jpg',
    images: ['/images/placeholder.jpg'],
    year: 2024,
    featured: true,
  },
]

export function getFeatured() {
  return portfolioItems.filter((i) => i.featured)
}
