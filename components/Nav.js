"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import styles from "./Nav.module.css";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const handleNav = (href) => {
    setMenuOpen(false);
    setTimeout(() => {
      window.location.href = href;
    }, 100); // mismo tiempo que la transición del menú
  };

  return (
    <>
      <nav className={styles.navbar}>
        <Link
          href="/"
          className={styles.logo}
          onClick={() => setMenuOpen(false)}
        >
          silent lung
        </Link>

        <div className={styles.desktopLinks}>
          <Link href="/portfolio">portafolio</Link>
          <Link href="/shop">tienda</Link>
          <Link href="/about">sobre mí</Link>
        </div>

        <div className={styles.controls}>
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className={styles.themeToggle}
          >
            <span key={isDark ? "dark" : "light"} className={styles.icon}>
              {isDark ? <SunIcon /> : <MoonIcon />}
            </span>
          </button>
          <div className={styles.spacer}></div>
          <button
            className={styles.menuButton}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span key={menuOpen ? "cerrar" : "menu"}>
              {menuOpen ? "cerrar" : "menu"}
            </span>
          </button>
        </div>
      </nav>
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
      >
        <div className={styles.mobileLinks}>
          <button
            onClick={() => handleNav("/portfolio")}
            className={styles.mobileLink}
          >
            portafolio
          </button>
          <button
            onClick={() => handleNav("/shop")}
            className={styles.mobileLink}
          >
            tienda
          </button>
          <button
            onClick={() => handleNav("/about")}
            className={styles.mobileLink}
          >
            sobre mí
          </button>
        </div>
        <div className={styles.mobileInfo}>
          <p>román montes</p>
          <p>
            ig:{" "}
            <a
              href="https://www.instagram.com/rmg.wav/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @rmg.wav
            </a>
          </p>
          <p>loc: nay, mx</p>
        </div>
      </div>
    </>
  );
}

function SunIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M17 12a5 5 0 1 1-10 0a5 5 0 0 1 10 0M12 2c-.377.333-.905 1.2 0 2m0 16c.377.333.906 1.2 0 2m7.5-17.497c-.532-.033-1.575.22-1.496 1.495M5.496 17.5c.033.532-.22 1.575-1.496 1.496M5.003 4.5c-.033.532.22 1.576 1.497 1.497M18 17.503c.532-.032 1.575.208 1.496 1.414M22 12c-.333-.377-1.2-.905-2 0m-16-.5c-.333.377-1.2.906-2 0"
        color="currentColor"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.97 3a8.02 8.02 0 0 0-4.054 7c0 4.418 3.522 8 7.866 8c1.146 0 2.236-.25 3.218-.698C18.39 19.544 15.787 21 12.849 21C7.962 21 4 16.97 4 12s3.962-9 8.849-9z"
      />
    </svg>
  );
}
