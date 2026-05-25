"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import styles from "./BookViewer.module.css";

export function BookViewer({ images }) {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);

  function goNext() {
    if (current < images.length - 1) setCurrent((i) => i + 1);
  }

  function goPrev() {
    if (current > 0) setCurrent((i) => i - 1);
  }

  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e) {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? goNext() : goPrev();
    touchStartX.current = null;
  }

  function getLabel() {
    if (current === 0) return "portada";
    if (current === images.length - 1) return "contraportada";
    return `${current} / ${images.length - 2}`;
  }

  return (
    <div
      className={styles.scene}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.imageWrapper}>
        <Image
          key={current}
          src={images[current]}
          alt={getLabel()}
          fill
          sizes="(min-width: 768px) 40vw, 90vw"
          className={styles.image}
        />
      </div>

      <div className={styles.controls}>
        <button
          onClick={goPrev}
          disabled={current === 0}
          className={styles.btn}
          aria-label="anterior"
        >
          ←
        </button>
        <span className={styles.indicator}>{getLabel()}</span>
        <button
          onClick={goNext}
          disabled={current === images.length - 1}
          className={styles.btn}
          aria-label="siguiente"
        >
          →
        </button>
      </div>
    </div>
  );
}
