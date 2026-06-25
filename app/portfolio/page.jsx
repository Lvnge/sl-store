import Link from "next/link";
import { portfolioItems } from "@/lib/portfolio";
import styles from "./page.module.css";

const comingSoon = [
  { title: "Sendas", type: "fotolibro" },
  { title: "Después de la senda", type: "photo zine" },
  { title: "Ejercicios de amor", type: "postales" },
];

export default function PortfolioPage() {
  return (
    <main className={styles.main}>
      {portfolioItems.map((item) => (
        <Link
          key={item.slug}
          href={`/portfolio/${item.slug}`}
          className={styles.item}
          style={{ "--card-title-font": "'PMingLiU-ExtB', serif" }}
        >
          <span className={styles.title}>{item.title}</span>
          <span className={styles.type}>{item.type}</span>
        </Link>
      ))}
      {comingSoon.map((item) => (
        <div key={item.title} className={styles.itemDisabled}>
          <span className={styles.title}>{item.title}</span>
          <span className={styles.type}>{item.type}</span>
          <span className={styles.soon}>próximamente</span>
        </div>
      ))}
    </main>
  );
}
