import { portfolioItems } from '@/lib/portfolio'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return portfolioItems.map((item) => ({ slug: item.slug }))
}

export default async function PortfolioItemPage({ params }) {
  const { slug } = await params
  const item = portfolioItems.find((i) => i.slug === slug)
  if (!item) notFound()

  return (
    <main>
      <h1>{item.title}</h1>
      <p>{item.category}</p>
      <p>{item.description}</p>
      {/* Images and MDX content go here */}
    </main>
  )
}
