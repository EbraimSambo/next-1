/** @type {import('next').NextConfig} */

const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  swcMinify:true,
  images:{
    domains: ["images.unsplash.com","wembleypark.com"]
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles/')],
  }
}

module.exports = nextConfig
