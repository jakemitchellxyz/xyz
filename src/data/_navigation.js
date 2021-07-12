export const routes = {
  "routes": [
    {
      "title": "Projects",
      "heading": true,
      "routes": [
        { "title": "Getting Started", "path": "/docs/getting-started.md" },
        {
          "title": "Basic Features",
          "open": true,
          "routes": [
            {
              "title": "Pages",
              "path": "/docs/basic-features/pages.md"
            },
            {
              "title": "Data Fetching",
              "path": "/docs/basic-features/data-fetching.md"
            },
            {
              "title": "Built-in CSS Support",
              "path": "/docs/basic-features/built-in-css-support.md"
            },
            {
              "title": "Image Optimization",
              "path": "/docs/basic-features/image-optimization.md"
            },
            {
              "title": "Font Optimization",
              "path": "/docs/basic-features/font-optimization.md"
            },
            {
              "title": "Script Optimization",
              "path": "/docs/basic-features/script.md"
            },
            {
              "title": "Static File Serving",
              "path": "/docs/basic-features/static-file-serving.md"
            },
            {
              "title": "Fast Refresh",
              "path": "/docs/basic-features/fast-refresh.md"
            },
            {
              "title": "ESLint",
              "path": "/docs/basic-features/eslint.md"
            },
            {
              "title": "TypeScript",
              "path": "/docs/basic-features/typescript.md"
            },
            {
              "title": "Environment Variables",
              "path": "/docs/basic-features/environment-variables.md"
            },
            {
              "title": "Supported Browsers and Features",
              "path": "/docs/basic-features/supported-browsers-features.md"
            }
          ]
        },
        {
          "title": "Deployment",
          "path": "/docs/deployment.md"
        },
        {
          "title": "Authentication",
          "path": "/docs/authentication.md"
        },
        {
          "title": "Advanced Features",
          "routes": [
            {
              "title": "Preview Mode",
              "path": "/docs/advanced-features/preview-mode.md"
            },
            {
              "title": "AMP Support",
              "routes": [
                {
                  "title": "Introduction",
                  "path": "/docs/advanced-features/amp-support/introduction.md"
                },
              ]
            },
            {
              "title": "Customizing Babel Config",
              "path": "/docs/advanced-features/customizing-babel-config.md"
            }
          ]
        },
        {
          "title": "Upgrade Guide",
          "path": "/docs/upgrading.md"
        },
        { "title": "FAQ", "path": "/docs/faq.md" }
      ]
    },
    {
      "title": "Resumes",
      "heading": true,
      "routes": [
        { "title": "CLI", "path": "/docs/api-reference/cli.md" },
        {
          "title": "Data Fetching",
          "routes": [
            {
              "title": "getInitialProps",
              "path": "/docs/api-reference/data-fetching/getInitialProps.md"
            }
          ]
        },
        {
          "title": "next.config.js",
          "routes": [
            {
              "title": "Introduction",
              "path": "/docs/api-reference/next.config.js/introduction.md"
            },
            {
              "title": "Environment Variables",
              "path": "/docs/api-reference/next.config.js/environment-variables.md"
            },
            {
              "title": "Base Path",
              "path": "/docs/api-reference/next.config.js/basepath.md"
            }
          ]
        }
      ]
    }
  ]
}