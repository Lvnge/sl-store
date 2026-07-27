import styles from "./page.module.css";
import { ProjectCard } from "@/components/ProjectCard";
import { portfolioItems } from "@/lib/portfolio";
import { PageWrapper } from "@/components/PageWrapper";
import { Player } from "@/components/Player";
import { NowUpdate } from "@/components/NowUpdate";
import { nowUpdates } from "@/lib/updates";

export const metadata = {
  metadataBase: new URL("https://romanmontes.com"),
  links: [
    {
      rel: "preload",
      href: "/fonts/mingliub.woff2",
      as: "font",
      type: "font/woff2",
      crossOrigin: "anonymous",
    },
  ],
};

export default function Home() {
  const taker = portfolioItems.find((i) => i.slug === "taker");
  const sendas = portfolioItems.find((i) => i.slug === "sendas");
  const despues = portfolioItems.find((i) => i.slug === "despues-de-la-senda");
  const eda = portfolioItems.find((i) => i.slug === "ejercicios-de-amor");
  const galeria = portfolioItems.find((i) => i.slug === "galeria");

  return (
    <PageWrapper>
      <main>
        <ProjectCard
          title={taker.title}
          type={taker.type}
          href="/portfolio/taker"
          description={taker.description}
          images={taker.images}
          details={taker.details}
          titleFont={taker.titleFont}
        />

        <ProjectCard
          title={sendas.title}
          type={sendas.type}
          href="/portfolio/sendas"
          description={sendas.description}
          images={sendas.images}
          details={sendas.details}
        />

        <ProjectCard
          title={despues.title}
          type={despues.type}
          href="/portfolio/despues-de-la-senda"
          description={despues.description}
          images={despues.images}
          details={despues.details}
        />

        <ProjectCard
          title={eda.title}
          type={eda.type}
          href="/portfolio/ejercicios-de-amor"
          description={eda.description}
          images={eda.images}
          details={eda.details}
        />

        <ProjectCard
          title={galeria.title}
          type={galeria.type}
          href="/galeria"
          description={galeria.description}
          images={galeria.images}
        />

        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Player src="/audio/one-last-kiss.mp3" title="One last kiss" />
        </div>

        <NowUpdate {...nowUpdates[0]} />
      </main>
    </PageWrapper>
  );
}
