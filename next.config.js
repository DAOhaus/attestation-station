/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,

  }


  // webpack: (config) => {
  //   config.resolve.alias["./main.css"] = false;
  //   return config;
  // }
};

module.exports = nextConfig;
