//import 'nextra-theme-docs/style.css';
import '@gfazioli/mantine-marquee/styles.layer.css';
import '@mantine/core/styles.layer.css';
import './global.css';

import { Footer, Layout } from 'nextra-theme-docs';
import { Banner } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { NavigationBar } from '@/components/NavBar';
import { theme } from '../theme';

export const metadata = {
  title: 'Mantine Next.js and Nextra template',
  description: 'I am using Mantine with Next.js!',
};

const footer = <Footer>MIT {new Date().getFullYear()} © Nextra.</Footer>;

export default async function RootLayout({ children }: { children: any }) {
  const pageMap = await getPageMap();

  return (
    <html lang="en" dir="ltr" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <Layout
          darkMode
          banner={<Banner storageKey="Nextra 2">Nextra 2 Alpha</Banner>}
          navbar={NavigationBar}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
        >
          <MantineProvider theme={theme}>{children}</MantineProvider>
        </Layout>
      </body>
    </html>
  );
}
