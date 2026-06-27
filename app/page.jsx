import styles from "./page.module.css";
import { ProjectCard } from "@/components/ProjectCard";
import { portfolioItems } from "@/lib/portfolio";
import { PageWrapper } from "@/components/PageWrapper";
import { Player } from "@/components/Player";

export default function Home() {
  const taker = portfolioItems.find((i) => i.slug === "taker");
  const sendas = portfolioItems.find((i) => i.slug === "sendas");
  const despues = portfolioItems.find((i) => i.slug === "despues-de-la-senda");
  const eda = portfolioItems.find((i) => i.slug === "ejercicios-de-amor");

  return (
    <PageWrapper>
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
            singleImage={false}
            details={taker.details}
          />
        </div>

        <ProjectCard
          title={sendas.title}
          type={sendas.type}
          href="/portfolio/sendas"
          description={sendas.description}
          spreadDivider={false}
          aspectRatio={sendas.aspectRatio}
          images={sendas.images}
          details={sendas.details}
          singleImage={true}
        />

        <ProjectCard
          title={despues.title}
          type={despues.type}
          href="/portfolio/despues-de-la-senda"
          description={despues.description}
          spreadDivider={false}
          aspectRatio={despues.aspectRatio}
          images={despues.images}
          details={despues.details}
          singleImage={false}
        />

        <ProjectCard
          title={eda.title}
          type={eda.type}
          href="/portfolio/ejercicios-de-amor"
          description={eda.description}
          singleImage={eda.singleImage}
          aspectRatio={eda.aspectRatio}
          images={eda.images}
          details={eda.details}
        />
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Player src="/audio/one-last-kiss.mp3" title="One last kiss" />
        </div>
      </main>
    </PageWrapper>
  );
}
