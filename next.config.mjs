import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow .mdx files as pages or imports
  pageExtensions: ["js", "jsx", "md", "mdx"],
  images: {
    remotePatterns: [],
    formats: ["image/webp"],
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
