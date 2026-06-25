import Image from "next/image";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <span className={styles.text}>silent lung</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className={styles.icon}
        >
          <defs>
            <clipPath id="crescent-footer">
              <path
                fillRule="evenodd"
                d="
        M 100 14 A 86 86 0 1 0 100 186 A 86 86 0 1 0 100 14 Z
        M 118 18 A 82 82 0 1 1 118 182 A 82 82 0 1 1 118 18 Z
      "
              />
            </clipPath>
          </defs>
          <g clipPath="url(#crescent-footer)">
            <rect x="0" y="0" width="200" height="200" fill="currentColor" />
          </g>
        </svg>
        <span className={styles.link}>
          <a
            href="https://www.instagram.com/rmg.wav/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @rmg.wav
          </a>
        </span>
      </div>
      <span className={styles.meta}>
        © {new Date().getFullYear()} · Nayarit, México
      </span>
    </footer>
  );
}
