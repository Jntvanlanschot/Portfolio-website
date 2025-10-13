/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.json$/,
      include: /animations/,
      type: 'asset/resource',
    })
    return config
  },
}

module.exports = nextConfig
