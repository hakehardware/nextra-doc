import nextra from 'nextra'

// Set up Nextra with its configuration
const withNextra = nextra({
  defaultShowCopyCode: true // Enable copy buttons on all code blocks
})

// Export the final Next.js config with Nextra included
export default withNextra({
  // Enable Turbopack with proper MDX components resolution
  turbopack: {
    resolveAlias: {
      'next-mdx-import-source-file': './mdx-components.tsx'
    }
  }
})