import '@gfazioli/mantine-marquee/styles.layer.css';
import '@mantine/core/styles.layer.css';
import './global.css';

import { Layout } from 'nextra-theme-docs';
import { Banner, Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { MantineFooter, MantineNavBar } from '@/components';
import { theme } from '../theme';

export const metadata = {
  title: {
    default: 'Mantine Next.js and Nextra template',
    template: '%s | Mantine Next.js and Nextra template',
  },
  description: 'I am using Mantine with Next.js and Nextra!',
  metadataBase: new URL('https://next-app-nextra-template.vercel.app/'),
  keywords: [
    'Mantine',
    'Nextra',
    'Next.js',
    'React',
    'JavaScript',
    'MDX',
    'Markdown',
    'Static Site Generator',
  ],
  generator: 'Next.js',
  applicationName: 'Mantine',
  appleWebApp: {
    title: 'Mantine',
  },
  openGraph: {
    // https://github.com/vercel/next.js/discussions/50189#discussioncomment-10826632
    url: './',
    siteName: 'Mantine',
    locale: 'en_US',
    type: 'website',
  },
  other: {
    'msapplication-TileColor': '#fff',
  },
  twitter: {
    site: 'https://next-app-nextra-template.vercel.app/',
  },
  alternates: {
    // https://github.com/vercel/next.js/discussions/50189#discussioncomment-10826632
    canonical: './',
  },
};

export default async function RootLayout({ children }: { children: any }) {
  const pageMap = await getPageMap();

  return (
    <html lang="en" dir="ltr" {...mantineHtmlProps}>
      <Head>
        <ColorSchemeScript nonce="8IBTHwOdqNKAWeKl7plt8g==" defaultColorScheme="dark" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </Head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="auto">
          <Layout
            banner={
              <Banner storageKey="mantine-nextjs-nextra">✨ Mantine + NextJS + Nextra</Banner>
            }
            navbar={<MantineNavBar />}
            pageMap={pageMap}
            docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
            footer={<MantineFooter />}
            sidebar={{ defaultMenuCollapseLevel: 1 }}
          >
            {children}
          </Layout>
        </MantineProvider>
      </body>
    </html>
  );
}
