import Link from 'next/link'
import { portfolioItems } from '@/lib/portfolio'

export default function PortfolioPage() {
  return (
    <main>
      <h1>Portfolio</h1>
      <ul>
        {portfolioItems.map((item) => (
          <li key={item.slug}>
            <Link href={`/portfolio/${item.slug}`}>{item.title}</Link>
            <span>{item.category}</span>
          </li>
        ))}
      </ul>
    </main>
  )
}
