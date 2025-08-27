/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',   // enables static HTML export
  images: {
    unoptimized: true // needed if you use <Image />
  }
}

module.exports = nextConfig
