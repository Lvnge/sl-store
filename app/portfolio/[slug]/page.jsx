import Image from "next/image";
import { portfolioItems } from "@/lib/portfolio";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { PageWrapper } from "@/components/PageWrapper";
export async function generateStaticParams() {
  return portfolioItems.map((item) => ({ slug: item.slug }));
}

export default async function PortfolioItemPage({ params }) {
  const { slug } = await params;
  const item = portfolioItems.find((i) => i.slug === slug);
  if (!item) notFound();

  return (
    <PageWrapper>
      <main
        className={styles.main}
        style={{ "--card-title-font": item.titleFont || "var(--font-sans)" }}
      >
        <div className={styles.header}>
          <h1 className={styles.title}>{item.title}</h1>
          {item.type && <span className={styles.type}>{item.type}</span>}
        </div>

        <div className={styles.narrative}>
          {item.narrative?.map((block, i) =>
            block.type === "image" ? (
              <div key={i} className={styles.imageBlock}>
                <Image
                  src={block.src}
                  alt={`${item.title} ${i + 1}`}
                  width={1748}
                  height={2480}
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className={styles.image}
                  priority={i === 0}
                />
              </div>
            ) : (
              <div key={i} className={styles.textBlock}>
                <p>{block.text}</p>
              </div>
            ),
          )}
        </div>
        {item.details && (
          <ul className={styles.details}>
            {Object.entries(item.details).map(([key, value]) => (
              <li key={key} className={styles.detailItem}>
                <span className={styles.detailKey}>{key}</span>
                <span className={styles.detailValue}>{value}</span>
              </li>
            ))}
          </ul>
        )}
      </main>
    </PageWrapper>
  );
}
