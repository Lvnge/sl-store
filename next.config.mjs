import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow .mdx files as pages or imports
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  images: {
    // Add domains here if you later use Cloudinary or external hosts
    remotePatterns: [],
  },
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig)
