import Image from "next/image";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <div className={styles.photoWrapper}>
        <Image
          src="/images/about/selfie.jpg"
          alt="Román Montes"
          fill
          sizes="120px"
          className={styles.photo}
          loading="eager"
        />
      </div>

      <div className={styles.content}>
        <h1 className={styles.name}>Román Montes</h1>
        <span className={styles.location}>Nayarit, México</span>

        <div className={styles.bio}>
          <p>
            Soy fotógrafo y hacedor de zines. Trabajo con lo que tengo cerca —
            la luz que queda, los paisajes que pesan, las cosas que no sé cómo
            decir de otra forma.
          </p>
          <p>
            Taker es mi primer zine. Nació de un momento en que cargaba
            demasiado y no sabía cómo soltarlo. Las fotografías llegaron antes
            que las palabras, y las palabras llegaron cuando ya no podía
            callarlas.
          </p>
          <p>
            Si algo de lo que hago te resuena, me alegra mucho. Gracias por
            estar aquí.
          </p>
        </div>

        <div className={styles.links}>
          <a
            href="https://www.instagram.com/rmg.wav/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @rmg.wav
          </a>
        </div>
      </div>
    </main>
  );
}
