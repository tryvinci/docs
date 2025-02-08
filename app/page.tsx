import { Container } from '@mantine/core';
import { Content } from '@/components/Content';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';

export default function HomePage() {
  return (
    <Container h="85vh">
      <Welcome />
      <ColorSchemeToggle />
      <Content />
    </Container>
  );
}
