const fs = require("fs");
const path = require("path");
const sizeOf = require("image-size").imageSize;

const dir = path.join(__dirname, "../public/images/gallery");

const images = fs
  .readdirSync(dir)
  .filter((file) => file.endsWith(".webp"))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

const result = images.map((file) => {
  const buffer = fs.readFileSync(path.join(dir, file));
  const { width, height } = sizeOf(buffer);
  return {
    src: `/images/gallery/${file}`,
    alt: "",
    width,
    height,
  };
});

console.log(JSON.stringify(result, null, 2));
