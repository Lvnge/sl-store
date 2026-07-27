"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./ProjectCard.module.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";

function Slide({ src, alt, priority = false }) {
  const [loaded, setLoaded] = useState(false);
  const handleRef = useCallback((img) => {
    if (img?.complete) setLoaded(true);
  }, []);

  return (
    <div className={styles.slide}>
      {!loaded && <Skeleton className={styles.slideSkeleton} />}
      <Image
        key={src}
        ref={handleRef}
        src={src}
        alt={alt}
        width={800}
        height={800}
        sizes="(max-width: 768px) 100vw, 560px"
        className={styles.slideImage}
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 400ms ease" }}
        onLoad={() => setLoaded(true)}
        priority={priority}
        loading="eager"
      />
    </div>
  );
}

export function ProjectCard({
  title,
  type,
  description,
  images,
  href,
  details,
  titleFont,
}) {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(1);
  const total = images?.length || 0;

  const handleSetApi = useCallback((emblaApi) => {
    if (!emblaApi) return;
    setApi(emblaApi);
    setCurrent(emblaApi.selectedScrollSnap() + 1);
    emblaApi.on("select", () => {
      setCurrent(emblaApi.selectedScrollSnap() + 1);
    });
  }, []);

  return (
    <div
      className={styles.card}
      style={titleFont ? { "--card-title-font": titleFont } : undefined}
    >
      <Link href={href} className={styles.header}>
        <span className={styles.title}>{title}</span>
        {type && <span className={styles.type}>{type}</span>}
      </Link>

      {images && images.length > 0 && (
        <div className={styles.carousel}>
          <div className={styles.carouselTrack}>
            <Carousel opts={{ loop: true }} setApi={handleSetApi}>
              <CarouselContent>
                {images.map((src, i) => (
                  <CarouselItem key={src}>
                    <Slide
                      src={src}
                      alt={`${title} ${i + 1}`}
                      priority={i === 0}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className={styles.controls}>
            <span className={styles.preview}>preview</span>
            <span className={styles.counter}>
              {current} / {total}
            </span>
          </div>
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
