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

        <p className={styles.description}>
          Fotografía, video, dibujo, pintura, escritura, zines y música.
        </p>

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
