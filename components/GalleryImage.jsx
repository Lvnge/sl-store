"use client";
import { useState, useCallback } from "react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import styles from "./GalleryImage.module.css";

export function GalleryImage({ src, alt, width, height }) {
  const [loaded, setLoaded] = useState(false);

  const handleRef = useCallback((img) => {
    if (img?.complete) setLoaded(true);
  }, []);

  return (
    <div className={styles.wrapper}>
      {!loaded && (
        <Skeleton className={styles.skeleton} style={{ borderRadius: 0 }} />
      )}
      <Image
        key={src}
        ref={handleRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className={styles.image}
        style={{ opacity: loaded ? 1 : 0 }}
        onLoad={() => setLoaded(true)}
        loading="lazy"
      />
    </div>
  );
}
