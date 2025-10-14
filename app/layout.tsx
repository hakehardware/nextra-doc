import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
 
export const metadata = {
  title: {
    default: 'LocalHake Docs',
    template: '%s | LocalHake Docs'
  },
  description: 'Documentation for LocalHake projects and tutorials',
  metadataBase: new URL('https://docs.localhake.com')
}
 
const banner = (
  <Banner storageKey="youtube-banner-dismissed">
    Subscribe to my YouTube Channel:{' '}
    <a
      href="https://www.youtube.com/@hakehardware"
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'underline' }}
    >
      @hakehardware
    </a>
  </Banner>
)
const navbar = (
  <Navbar
    logo={<b>LocalHake</b>}
    // ... Your additional navbar options
  />
)
const footer = <Footer>© {new Date().getFullYear()} LocalHake</Footer>
 
export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/hakehardware/nextra-doc/tree/main"
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
