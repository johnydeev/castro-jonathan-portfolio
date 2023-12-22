/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
    output: 'export',
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  }, 
}

module.exports = nextConfig
