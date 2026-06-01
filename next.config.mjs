import createMDX from '@next/mdx'
import createBundleAnalyzer from '@next/bundle-analyzer'

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
})

const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

export default withBundleAnalyzer(
  withMDX({
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
    devIndicators: false,
  })
)
