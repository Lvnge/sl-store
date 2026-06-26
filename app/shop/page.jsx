import { PageWrapper } from "@/components/PageWrapper";
import Link from "next/link";
import { products } from "@/lib/products";
import styles from "./page.module.css";

export default function ShopPage() {
  const takerProducts = products.filter((p) => p.slug === "taker");
  const otherProducts = products.filter(
    (p) => p.slug !== "taker" && p.available,
  );

  return (
    <PageWrapper>
      <main className={styles.main}>
        {takerProducts.map((p) => (
          <Link key={p.slug} href={`/shop/${p.slug}`} className={styles.item}>
            <span className={styles.title}>{p.name}</span>
            <span className={styles.type}>{p.category}</span>
            <span className={styles.soon}>próximamente</span>
          </Link>
        ))}
      </main>
    </PageWrapper>
  );
}
