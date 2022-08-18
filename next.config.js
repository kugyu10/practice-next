/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['kugyu10-post.s3.ap-northeast-1.amazonaws.com'],
  }
}

module.exports = nextConfig
