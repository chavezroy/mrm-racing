/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false,
  },
  async rewrites() {
    return [
      {
        source: '/mrm',
        destination: '/mrm/index.html',
      },
    ];
  },
}

module.exports = nextConfig

