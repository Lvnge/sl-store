import Link from "next/link";
import { portfolioItems } from "@/lib/portfolio";
import styles from "./page.module.css";
import { PageWrapper } from "@/components/PageWrapper";

export default function PortfolioPage() {
  return (
    <PageWrapper>
      <main className={styles.main}>
        {portfolioItems.map((item) => (
          <Link
            key={item.slug}
            href={`/portfolio/${item.slug}`}
            className={styles.item}
            style={{
              "--card-title-font": item.titleFont || "var(--font-sans)",
            }}
          >
            <span className={styles.title}>{item.title}</span>
            <span className={styles.type}>{item.type}</span>
          </Link>
        ))}
      </main>
    </PageWrapper>
  );
}
