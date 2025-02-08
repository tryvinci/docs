'use client';

import { Footer } from 'nextra-theme-docs';
import { Box, MantineProvider } from '@mantine/core';

/**
 * You can customize the Nextra Footer component.
 * Don't forget to use the MantineProvider component.
 *
 * @since 1.0.0
 *
 */
export const MantineFooter = () => (
  <MantineProvider>
    <Box style={{ position: 'relative' }}>
      <Footer>MIT {new Date().getFullYear()} © Nextra.</Footer>
    </Box>
  </MantineProvider>
);
