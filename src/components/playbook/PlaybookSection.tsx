import { Box, Stack, Title, Text } from '@mantine/core';
import { motion } from 'framer-motion';

export interface PlaybookSectionProps {
  id: string;
  number: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function PlaybookSection({
  id,
  number,
  title,
  description,
  children,
}: PlaybookSectionProps): JSX.Element {
  return (
    <Box
      component={motion.section}
      id={id}
      className="playbook-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <Box style={{ maxWidth: 1024, margin: '0 auto' }}>
        <Box
          className="playbook-section-header"
          style={{
            display: 'grid',
            gridTemplateColumns: '120px 1fr',
            gap: '0 24px',
            alignItems: 'start',
          }}
        >
          <Text component="span" className="playbook-section-number" fw={700} style={{ fontSize: '1.5rem' }}>
            {number}
          </Text>
          <Stack gap="xs">
            <Title order={2} style={{ fontWeight: 800, marginTop: 0, letterSpacing: '-0.03em', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
              {title}
            </Title>
            {description ? (
              <Text size="md" c="dimmed" style={{ lineHeight: 1.6 }}>
                {description}
              </Text>
            ) : null}
          </Stack>
        </Box>
        <Box className="playbook-section-content" mt="lg">
          {children}
        </Box>
      </Box>
    </Box>
  );
}
