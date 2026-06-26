"use client";
import Image from "next/image";
import { products } from "@/lib/products";
import { notFound } from "next/navigation";
import { use } from "react";
import styles from "./page.module.css";
import { PageWrapper } from "@/components/PageWrapper";

export default function ProductPage({ params }) {
  const { slug } = use(params);
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <PageWrapper>
      <main className={styles.main}>
        <div className={styles.images}>
          {product.images?.map((src, i) => (
            <div key={i} className={styles.imageWrapper}>
              <Image
                src={src}
                alt={`${product.name} ${i + 1}`}
                width={1748}
                height={2480}
                sizes="(max-width: 768px) 50vw, 280px"
                className={styles.image}
                priority={i === 0}
              />
            </div>
          ))}
        </div>
        <div className={styles.info}>
          <h1 className={styles.title}>{product.name}</h1>
          {product.category && (
            <span className={styles.type}>{product.category}</span>
          )}
          {product.description && (
            <p className={styles.description}>{product.description}</p>
          )}

          {(product.formato ||
            product.páginas ||
            product.tiraje ||
            product.fecha) && (
            <ul className={styles.details}>
              {product.formato && (
                <li className={styles.detailItem}>
                  <span className={styles.detailKey}>formato</span>
                  <span className={styles.detailValue}>{product.formato}</span>
                </li>
              )}
              {product.páginas && (
                <li className={styles.detailItem}>
                  <span className={styles.detailKey}>páginas</span>
                  <span className={styles.detailValue}>{product.páginas}</span>
                </li>
              )}
              {product.tiraje && (
                <li className={styles.detailItem}>
                  <span className={styles.detailKey}>tiraje</span>
                  <span className={styles.detailValue}>{product.tiraje}</span>
                </li>
              )}
              {product.fecha && (
                <li className={styles.detailItem}>
                  <span className={styles.detailKey}>fecha</span>
                  <span className={styles.detailValue}>{product.fecha}</span>
                </li>
              )}
              {product.price && (
                <li className={styles.detailItem}>
                  <span className={styles.detailKey}>precio</span>
                  <span className={styles.detailValue}>
                    ${product.price} USD
                  </span>
                </li>
              )}
            </ul>
          )}

          <button className={styles.button} disabled>
            próximamente
          </button>
        </div>
      </main>
    </PageWrapper>
  );
}
