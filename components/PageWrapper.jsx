import styles from "./PageWrapper.module.css";

export function PageWrapper({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}
