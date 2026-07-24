"use client";
import { useState, useRef, useCallback } from "react";
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

  // --- Skeleton / carga de imágenes ---
  const [loadedSrcs, setLoadedSrcs] = useState(() => new Set());
  const markLoaded = useCallback((src) => {
    setLoadedSrcs((prev) => {
      if (prev.has(src)) return prev;
      const next = new Set(prev);
      next.add(src);
      return next;
    });
  }, []);

  // --- Drag / swipe con feedback en tiempo real ---
  const [dragDelta, setDragDelta] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(null);
  const wrapperWidth = useRef(0);
  const imageWrapperRef = useRef(null);

  const handlePointerDown = (e) => {
    if (totalSpreads <= 1) return;
    startX.current = e.clientX;
    wrapperWidth.current = imageWrapperRef.current?.offsetWidth || 300;
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (startX.current === null) return;
    const delta = e.clientX - startX.current;
    // Un poco de resistencia para que se sienta elástico, no que el dedo "vuele"
    setDragDelta(delta * 0.6);
  };

  const endDrag = () => {
    if (startX.current === null) return;
    const threshold = wrapperWidth.current * 0.18; // ~18% del ancho para disparar el cambio
    if (dragDelta <= -threshold) {
      next();
    } else if (dragDelta >= threshold) {
      prev();
    }
    startX.current = null;
    setIsDragging(false);
    setDragDelta(0);
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
            ref={imageWrapperRef}
            className={styles.imageWrapper}
            style={{ "--carousel-ratio": aspectRatio, touchAction: "pan-y" }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
          >
            <div
              className={`${styles.spread} ${spreadDivider ? styles.spreadDivider : ""}`}
              style={{
                transform: `translateX(${dragDelta}px)`,
                transition: isDragging ? "none" : "transform 300ms ease",
              }}
            >
              <div
                className={styles.page}
                style={singleImage ? { flex: "1 1 100%" } : {}}
              >
                {leftImage && (
                  <>
                    <div
                      className={styles.skeleton}
                      style={{ opacity: loadedSrcs.has(leftImage) ? 0 : 1 }}
                      aria-hidden="true"
                    />
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
                      style={{
                        opacity: loadedSrcs.has(leftImage) ? 1 : 0,
                        transition: "opacity 400ms ease",
                      }}
                      onLoad={() => markLoaded(leftImage)}
                      priority={current === 0}
                    />
                  </>
                )}
              </div>

              {!singleImage && rightImage && (
                <div className={styles.page}>
                  <div
                    className={styles.skeleton}
                    style={{ opacity: loadedSrcs.has(rightImage) ? 0 : 1 }}
                    aria-hidden="true"
                  />
                  <Image
                    src={rightImage}
                    alt={`${title} página ${current * 2 + 2}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 280px"
                    className={styles.image}
                    style={{
                      opacity: loadedSrcs.has(rightImage) ? 1 : 0,
                      transition: "opacity 400ms ease",
                    }}
                    onLoad={() => markLoaded(rightImage)}
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
