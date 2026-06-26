import styles from "./page.module.css";
import { ProjectCard } from "@/components/ProjectCard";
import { portfolioItems } from "@/lib/portfolio";
import { PageWrapper } from "@/components/PageWrapper";
import { Player } from "@/components/Player";

export default function Home() {
  const taker = portfolioItems.find((i) => i.slug === "taker");
  const sendas = portfolioItems.find((i) => i.slug === "sendas");
  const despues = portfolioItems.find((i) => i.slug === "despues-de-la-senda");
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
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
          <Player src="/audio/one-last-kiss.mp3" title="One last kiss" />
        </div>
      </main>
    </PageWrapper>
  );
}
