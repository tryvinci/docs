import { Container } from '@mantine/core';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { Content } from '@/components/Content';
import { Welcome } from '@/components/Welcome/Welcome';

export default function HomePage() {
  return (
    <Container h="85vh">
      <Welcome />
      <ColorSchemeToggle />
      <Content />
    </Container>
  );
}
