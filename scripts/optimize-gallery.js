const images = [
  { src: "01", w: 719, h: 1280 },
  { src: "02", w: 741, h: 1317 },
  { src: "03", w: 960, h: 1280 },
  { src: "04", w: 960, h: 1280 },
  { src: "05", w: 719, h: 1280 },
  { src: "06", w: 720, h: 1280 },
  { src: "07", w: 1266, h: 2250 },
  { src: "08", w: 1024, h: 1280 },
  { src: "09", w: 1172, h: 659 },
  { src: "10", w: 719, h: 1280 },
  { src: "11", w: 960, h: 1280 },
  { src: "12", w: 1280, h: 544 },
  { src: "13", w: 276, h: 490 },
  { src: "14", w: 1280, h: 720 },
  { src: "15", w: 2816, h: 3754 },
  { src: "16", w: 1280, h: 544 },
  { src: "17", w: 1280, h: 1280 },
  { src: "18", w: 741, h: 1280 },
  { src: "19", w: 1849, h: 3287 },
  { src: "20", w: 1280, h: 544 },
  { src: "21", w: 1280, h: 719 },
  { src: "22", w: 1023, h: 1280 },
  { src: "23", w: 1280, h: 719 },
  { src: "24", w: 960, h: 1280 },
];

const ratio = (img) => img.h / img.w;

function balanceScore(order, cols) {
  const heights = new Array(cols).fill(0);

  for (const img of order) {
    let shortest = 0;

    for (let i = 1; i < cols; i++) {
      if (heights[i] < heights[shortest]) shortest = i;
    }

    heights[shortest] += ratio(img);
  }

  return Math.max(...heights) - Math.min(...heights);
}

function visualScore(order) {
  let score = 0;

  for (let i = 0; i < order.length - 1; i++) {
    const a = order[i];
    const b = order[i + 1];

    const ra = ratio(a);
    const rb = ratio(b);

    // dos panorámicas
    if (ra < 0.75 && rb < 0.75) score += 1.2;

    // dos retratos muy altos
    if (ra > 1.65 && rb > 1.65) score += 1.2;

    // dos cuadrados
    if (Math.abs(ra - 1) < 0.12 && Math.abs(rb - 1) < 0.12) score += 0.5;

    // ratios casi iguales
    if (Math.abs(ra - rb) < 0.04) score += 0.35;

    // gigantes demasiado juntas
    if (
      ["07", "15", "19"].includes(a.src) &&
      ["07", "15", "19"].includes(b.src)
    )
      score += 2;

    // panorámicas demasiado juntas
    if (
      ["09", "12", "14", "16", "20", "21", "23"].includes(a.src) &&
      ["09", "12", "14", "16", "20", "21", "23"].includes(b.src)
    )
      score += 1;
  }

  return score;
}

function totalScore(order) {
  return (
    balanceScore(order, 2) * 6 + balanceScore(order, 3) * 6 + visualScore(order)
  );
}

function swap(arr, i, j) {
  const copy = [...arr];
  [copy[i], copy[j]] = [copy[j], copy[i]];
  return copy;
}

let best = [...images];
let bestScore = totalScore(best);

console.log("Initial:", bestScore.toFixed(4));

for (let iteration = 0; iteration < 250000; iteration++) {
  const i = Math.floor(Math.random() * images.length);
  const j = Math.floor(Math.random() * images.length);

  const candidate = swap(best, i, j);

  const score = totalScore(candidate);

  if (score < bestScore) {
    best = candidate;
    bestScore = score;
  }
}

console.log("\nBest score:", bestScore.toFixed(4));
console.log("\nOrder:\n", best.map((i) => i.src).join(", "));
