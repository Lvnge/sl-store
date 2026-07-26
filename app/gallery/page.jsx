"use client";
import { useMemo } from "react";
import { galleryImages } from "@/lib/gallery";
import { GalleryImage } from "@/components/GalleryImage";
import { PageWrapper } from "@/components/PageWrapper";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import styles from "./page.module.css";

function splitIntoColumns(images, numColumns) {
  const columns = Array.from({ length: numColumns }, () => []);
  const heights = new Array(numColumns).fill(0);

  for (const image of images) {
    const ratio = image.height / image.width;
    const GAP = 24;
    let shortest = 0;

    for (let i = 1; i < numColumns; i++) {
      if (heights[i] < heights[shortest]) {
        shortest = i;
      }
    }

    columns[shortest].push(image);

    heights[shortest] += ratio + GAP / 300;
  }

  return columns;
}

export default function GalleryPage() {
  const width = useWindowWidth();
  const numColumns = width >= 1024 ? 3 : width >= 640 ? 2 : 1;
  const columns = useMemo(
    () => splitIntoColumns(galleryImages, numColumns),
    [numColumns],
  );

  return (
    <PageWrapper>
      <main className={styles.main}>
        <div
          className={styles.grid}
          style={{ gridTemplateColumns: `repeat(${numColumns}, 1fr)` }}
        >
          {columns.map((col, colIndex) => (
            <div key={colIndex} className={styles.column}>
              {col.map((image) => (
                <GalleryImage
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                />
              ))}
            </div>
          ))}
        </div>
      </main>
    </PageWrapper>
  );
}
