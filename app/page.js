import styles from "./page.module.css";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  return (
    <main>
      <div
        style={{
          "--card-title-font": "'PMingLiU-ExtB', serif",
        }}
      >
        <ProjectCard
          title="Taker"
          type="photo zine"
          href="/portfolio/taker"
          description={[
            "¿Cómo voy a cargar con este peso?",
            "Fotografías y textos sobre la culpa, la ausencia, y la extraña costumbre de prepararse para todo.",
            "Menos para uno mismo.",
          ]}
          spreadDivider={false} // false para sin separador
          images={[
            "/images/taker/01.webp",
            "/images/taker/02.webp",
            "/images/taker/03.webp",
            "/images/taker/04.webp",
            "/images/taker/05.webp",
            "/images/taker/06.webp",
            "/images/taker/07.webp",
            "/images/taker/08.webp",
            "/images/taker/09.webp",
            "/images/taker/10.webp",
          ]}
          details={{
            formato: "media carta",
            páginas: "19",
            fecha: "febrero 2026",
          }}
        />
      </div>
    </main>
  );
}
