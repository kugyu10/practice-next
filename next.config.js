/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [process.env.S3DOMAIN,],
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
