const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
})
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer(
  withMDX({
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'md', 'mdx' ],
    target: 'serverless'
  })
)