// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };

    return config;
  },
  reactStrictMode: true,
  swcMinify: true,
};
