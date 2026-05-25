import Link from "next/link";
import Image from "next/image";
import { BookViewer } from "./BookViewer";
import styles from "./ProjectCard.module.css";

export function ProjectCard({
  title,
  type,
  description,
  image,
  images,
  href,
  details,
}) {
  const hasBook = images && images.length > 0;
  const hasSingleImage = !hasBook && image;

  return (
    <div className={styles.card}>
      <Link href={href} className={styles.header}>
        <span className={styles.title}>{title}</span>
        {type && <span className={styles.type}>{type}</span>}
      </Link>

      {hasBook && (
        <div className={styles.imageWrapper}>
          <BookViewer images={images} />
        </div>
      )}

      {hasSingleImage && (
        <Link href={href}>
          <div className={styles.singleImage}>
            <Image
              src={image}
              alt={title}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className={styles.pageImage}
            />
          </div>
        </Link>
      )}

      {description && <p className={styles.description}>{description}</p>}

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
