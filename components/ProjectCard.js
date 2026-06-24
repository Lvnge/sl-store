"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./ProjectCard.module.css";

export function ProjectCard({
  title,
  type,
  description,
  images,
  href,
  details,
  spreadDivider = true,
}) {
  const [current, setCurrent] = useState(0);
  const totalSpreads = Math.ceil((images?.length || 0) / 2);

  const prev = () => setCurrent((i) => (i - 1 + totalSpreads) % totalSpreads);
  const next = () => setCurrent((i) => (i + 1) % totalSpreads);

  const leftImage = images?.[current * 2];
  const rightImage = images?.[current * 2 + 1];
  console.log("leftImage:", leftImage, "rightImage:", rightImage);
  return (
    <div className={styles.card}>
      <Link href={href} className={styles.header}>
        <span className={styles.title}>{title}</span>
        {type && <span className={styles.type}>{type}</span>}
      </Link>

      {images && images.length > 0 && (
        <div className={styles.carousel}>
          <div className={styles.imageWrapper}>
            <div
              className={`${styles.spread} ${spreadDivider ? styles.spreadDivider : ""}`}
            >
              <div className={styles.page}>
                {leftImage && (
                  <Image
                    src={leftImage}
                    alt={`${title} página ${current * 2 + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 280px"
                    className={styles.image}
                  />
                )}
              </div>

              {rightImage && (
                <div className={styles.page}>
                  <Image
                    src={rightImage}
                    alt={`${title} página ${current * 2 + 2}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 280px"
                    className={styles.image}
                    loading="eager"
                  />
                </div>
              )}
            </div>
          </div>
          {totalSpreads > 1 && (
            <div className={styles.controls}>
              <button
                onClick={prev}
                className={styles.arrow}
                aria-label="Anterior"
              >
                ←
              </button>
              <div className={styles.controlsCenter}>
                <span className={styles.preview}>preview</span>
                <span className={styles.counter}>
                  {current + 1} / {totalSpreads}
                </span>
              </div>
              <button
                onClick={next}
                className={styles.arrow}
                aria-label="Siguiente"
              >
                →
              </button>
            </div>
          )}
        </div>
      )}

      {description &&
        description.map((text, i) => (
          <p key={i} className={styles.description}>
            {text}
          </p>
        ))}
      {details && (
        <ul className={styles.details}>
          {Object.entries(details).map(([key, value]) => (
            <li key={key} className={styles.detailItem}>
              <span className={styles.detailKey}>{key}</span>
              <span className={styles.detailValue}>{value}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
