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
          type="zine"
          href="/portfolio/taker"
          description=" Una publicación sobre contemplar."
          details={{
            formato: "media carta",
            papel: "bond 90g",
            impresión: "inkjet",
            páginas: "8",
            tiraje: "edición limitada",
            publicado: "febrero 2026",
          }}
        />
      </div>
    </main>
  );
}
