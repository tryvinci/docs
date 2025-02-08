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
  title: 'Mantine Next.js and Nextra template',
  description: 'I am using Mantine with Next.js and Nextra!',
};

export default async function RootLayout({ children }: { children: any }) {
  const pageMap = await getPageMap();

  return (
    <html lang="en" dir="ltr" {...mantineHtmlProps}>
      <Head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </Head>
      <body>
        <Layout
          banner={<Banner storageKey="mantine-nextjs-nextra">✨ Mantine + NextJS + Nextra</Banner>}
          navbar={<MantineNavBar />}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={<MantineFooter />}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
        >
          <MantineProvider theme={theme}>{children}</MantineProvider>
        </Layout>
      </body>
    </html>
  );
}
