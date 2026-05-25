/**
 * Product catalog
 * Add your products here. Each product maps to a Stripe Price ID.
 * Create products in your Stripe dashboard, then paste the price_id here.
 */

export const products = [
  {
    id: 'print-001',
    name: 'Example Print',
    slug: 'example-print',
    description: 'A short description of this photo print.',
    price: 35,          // in USD, for display only
    stripePriceId: 'price_XXXXXXXXXXXXXXXX', // replace with real Stripe price ID
    category: 'print',
    images: ['/images/placeholder.jpg'],
    edition: 'Open edition',
    dimensions: '8x10 in',
    available: true,
  },
  {
    id: 'zine-001',
    name: 'Example Zine',
    slug: 'example-zine',
    description: 'A short description of this zine.',
    price: 15,
    stripePriceId: 'price_XXXXXXXXXXXXXXXX', // replace with real Stripe price ID
    category: 'zine',
    images: ['/images/placeholder.jpg'],
    pages: 24,
    available: true,
  },
]

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug) ?? null
}

export function getProductsByCategory(category) {
  return products.filter((p) => p.category === category)
}
