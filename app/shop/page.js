import Link from 'next/link'
import { products } from '@/lib/products'

export default function ShopPage() {
  return (
    <main>
      <h1>Shop</h1>
      <ul>
        {products.filter((p) => p.available).map((product) => (
          <li key={product.id}>
            <Link href={`/shop/${product.slug}`}>{product.name}</Link>
            <span>${product.price}</span>
            <span>{product.category}</span>
          </li>
        ))}
      </ul>
    </main>
  )
}
