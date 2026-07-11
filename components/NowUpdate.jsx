import styles from "./NowUpdate.module.css";

export function NowUpdate({ date, location, text, reading, listening }) {
  return (
    <section className={styles.wrapper}>
      <a href="/now" className={styles.label}>
        AHORA <span className={styles.arrow}>›</span>
      </a>
      <p className={styles.meta}>
        Actualizado {date}. {location}
      </p>
      <p className={styles.text}>{text}</p>
      {reading && (
        <p className={styles.reading}>
          Leyendo <span className={styles.bookTitle}>{reading.title}</span>, de{" "}
          {reading.author}
        </p>
      )}
      {listening && (
        <p className={styles.reading}>
          Escuchando <span className={styles.bookTitle}>{listening.track}</span>
          {listening.artist && <>, de {listening.artist}</>}
        </p>
      )}
    </section>
  );
}
