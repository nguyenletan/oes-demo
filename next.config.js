/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcTraceProfiling: true,
  swcMinify: true,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true
  }
}

module.exports = nextConfig
