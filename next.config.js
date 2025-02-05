/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false, // Disable SWC minification
  reactStrictMode: true,
  output: 'standalone', // Change to standalone output
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript build errors
  },
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      tls: false,
    };
    return config;
  }
}

module.exports = nextConfig