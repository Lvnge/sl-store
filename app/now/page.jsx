import { nowUpdates } from "@/lib/updates";
import { PageWrapper } from "@/components/PageWrapper";
import styles from "./page.module.css";

export const metadata = {
  title: "Ahora",
  description: "Mi actualidad.",
};

export default function NowPage() {
  return (
    <PageWrapper>
      <main className={styles.list}>
        <header className={styles.header}>
          <h1 className={styles.title}>Ahora</h1>
        </header>

        {nowUpdates.map((update, i) => (
          <article key={i} className={styles.entry}>
            <p className={styles.meta}>
              {update.date}. {update.location}
            </p>
            <p className={styles.text}>{update.text}</p>
            {update.reading && (
              <p className={styles.reading}>
                Leyendo{" "}
                <span className={styles.bookTitle}>{update.reading.title}</span>
                , de {update.reading.author}
              </p>
            )}
            {update.listening && (
              <p className={styles.reading}>
                Escuchando{" "}
                <span className={styles.bookTitle}>
                  {update.listening.track}
                </span>
                {update.listening.artist && <>, de {update.listening.artist}</>}
              </p>
            )}
          </article>
        ))}
      </main>
    </PageWrapper>
  );
}
