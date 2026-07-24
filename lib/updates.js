function formatSpanishDate(isoDate) {
  const date = new Date(isoDate + "T00:00:00");
  const formatted = new Intl.DateTimeFormat("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
  // "10 de julio de 2026"
  return formatted;
}

export const nowUpdates = [
  {
    date: formatSpanishDate("2026-07-24"),
    location: "Zapopan, Jalisco · México",
    text: "28 años hoy.\nDate la oportunidad de quedarte.",
    reading: {
      title: "Stoner",
      author: "John Williams",
    },
    listening: {
      track: "Amethyst",
      artist: "Deafheaven",
    },
  },
  {
    date: formatSpanishDate("2026-07-10"),
    location: "Zapopan, Jalisco · México",
    text: "Preparándome para las primeras pruebas de impresión de Taker, tratando de disfrutar el proceso sin estresarme demasiado.",
    reading: {
      title: "Stoner",
      author: "John Williams",
    },
    listening: {
      track: "Desdemona",
      artist: "American Football",
    },
  },
  // Agrega nuevas entradas arriba de esta línea, la más reciente primero
];
