export default function PortfolioPage() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        gap: "0.5rem",
        color: "var(--color-text-muted)",
      }}
    >
      <span
        style={{
          fontSize: "0.75rem",
          letterSpacing: "0.1em",
          opacity: 0.4,
        }}
      >
        próximamente
      </span>
      <p
        style={{
          fontSize: "0.9rem",
          opacity: 0.4,
          margin: 0,
        }}
      >
        más proyectos en camino
      </p>
    </main>
  );
}
