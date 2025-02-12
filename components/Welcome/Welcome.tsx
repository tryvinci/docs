import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import { Anchor, Button, Center, Text, Title } from '@mantine/core';
import pack from '../../package.json';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title maw={'80vw'} mx="auto" className={classes.title} ta="center" mt={100}>
        Welcome to Mantine Next.js and{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Nextra template
        </Text>
      </Title>
      <Center>
        <Button
          href="https://github.com/gfazioli/next-app-nextra-template"
          component="a"
          rightSection={<IconExternalLink />}
          leftSection={<IconBrandGithub />}
          variant="gradient"
          px={32}
          gradient={{ from: 'rgba(0, 0, 0, 1)', to: 'rgb(35, 45, 94)', deg: 160 }}
          radius={256}
          size="lg"
          mx="auto"
          mt="xl"
        >
          v{pack.version}
        </Button>
      </Center>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        This starter Next.js project includes a minimal setup for server side rendering, if you want
        to learn more on Mantine + Next.js integration follow{' '}
        <Anchor href="https://mantine.dev/guides/next/" size="lg">
          this guide
        </Anchor>
        . To get started edit page.tsx file.
      </Text>
    </>
  );
}
