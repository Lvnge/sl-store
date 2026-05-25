'use client'
import { products } from '@/lib/products'
import { notFound } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { use } from 'react'

export default function ProductPage({ params }) {
  const { slug } = use(params)
  const router = useRouter()
  const product = products.find((p) => p.slug === slug)
  if (!product) notFound()

  async function handleBuy() {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        priceId: product.stripePriceId,
        productName: product.name,
      }),
    })
    const data = await res.json()
    if (data.url) window.location.href = data.url
  }

  return (
    <main>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
      {product.dimensions && <p>{product.dimensions}</p>}
      {product.pages && <p>{product.pages} pages</p>}
      <button onClick={handleBuy}>Buy — ${product.price}</button>
    </main>
  )
}
