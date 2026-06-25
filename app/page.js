import styles from "./page.module.css";
import { ProjectCard } from "@/components/ProjectCard";
import { portfolioItems } from "@/lib/portfolio";

export default function Home() {
  const taker = portfolioItems.find((i) => i.slug === "taker");

  return (
    <main>
      <div
        style={{
          "--card-title-font": "'PMingLiU-ExtB', serif",
        }}
      >
        <ProjectCard
          title={taker.title}
          type={taker.type}
          href="/portfolio/taker"
          description={taker.description}
          spreadDivider={false}
          images={taker.images}
          details={{
            páginas: "19",
            fecha: "2026",
          }}
        />
      </div>
    </main>
  );
}
