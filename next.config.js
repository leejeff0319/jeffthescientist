/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        })
        return config
    },
}

module.exports = {
    theme: {
      extend: {
        fontSize: {
          '2xs': '0.625rem', // This is 10px. Adjust if necessary.
        },
      },
    },
    variants: {},
    plugins: [],
  }