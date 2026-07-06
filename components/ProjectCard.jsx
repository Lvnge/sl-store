"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./ProjectCard.module.css";
import { useInView } from "@/hooks/useInView";

export function ProjectCard({
  title,
  type,
  description,
  images,
  href,
  details,
  spreadDivider = true,
  aspectRatio = "3496 / 2480",
  singleImage = false,
}) {
  const [current, setCurrent] = useState(0);
  const totalSpreads = singleImage
    ? images?.length || 0
    : Math.ceil((images?.length || 0) / 2);
  const prev = () => setCurrent((i) => (i - 1 + totalSpreads) % totalSpreads);
  const next = () => setCurrent((i) => (i + 1) % totalSpreads);

  const leftImage = singleImage ? images?.[current] : images?.[current * 2];
  const rightImage = singleImage ? null : images?.[current * 2 + 1];
  const touchStartX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
    touchStartX.current = null;
  };
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`${styles.card} fadeIn ${inView ? "visible" : ""}`}
    >
      <Link href={href} className={styles.header}>
        <span className={styles.title}>{title}</span>
        {type && <span className={styles.type}>{type}</span>}
      </Link>

      {images && images.length > 0 && (
        <div className={styles.carousel}>
          <div
            className={styles.imageWrapper}
            style={{ "--carousel-ratio": aspectRatio }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className={`${styles.spread} ${spreadDivider ? styles.spreadDivider : ""}`}
            >
              <div
                className={styles.page}
                style={singleImage ? { flex: "1 1 100%" } : {}}
              >
                {leftImage && (
                  <Image
                    src={leftImage}
                    alt={`${title} página ${current + 1}`}
                    fill
                    sizes={
                      singleImage
                        ? "(max-width: 768px) 100vw, 560px"
                        : "(max-width: 768px) 50vw, 280px"
                    }
                    className={styles.image}
                    priority={current === 0}
                  />
                )}
              </div>

              {!singleImage && rightImage && (
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
