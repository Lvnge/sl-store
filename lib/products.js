/**
 * Product catalog
 * Add your products here. Each product maps to a Stripe Price ID.
 * Create products in your Stripe dashboard, then paste the price_id here.
 */

export const products = [
  {
    id: "zine-taker",
    name: "Taker",
    slug: "taker",
    description: null,
    price: null,
    stripePriceId: null,
    category: "zine",
    images: ["/images/taker/01.webp"],
    formato: "media carta",
    páginas: "36",
    tiraje: "edición limitada",
    fecha: "diciembre 2025",
    available: false,
  },
];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug) ?? null;
}

export function getProductsByCategory(category) {
  return products.filter((p) => p.category === category);
}
