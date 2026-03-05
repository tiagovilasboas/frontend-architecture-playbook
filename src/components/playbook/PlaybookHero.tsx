import { Box, Stack, Title, Text, Group, Badge } from '@mantine/core';
import { motion } from 'framer-motion';

export interface PlaybookHeroProps {
  label?: string;
  titleLine1: string;
  titleHighlight: string;
  titleLine2?: string;
  subtitle?: string;
  tags?: string[];
}

export function PlaybookHero({
  label = 'Staff Engineer Level',
  titleLine1,
  titleHighlight,
  titleLine2 = '',
  subtitle,
  tags = [],
}: PlaybookHeroProps): JSX.Element {
  return (
    <Box
      component="section"
      className="playbook-hero"
      style={{
        position: 'relative',
        minHeight: 420,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
        backgroundSize: '48px 48px',
      }}
    >
      <Stack align="center" ta="center" style={{ position: 'relative', zIndex: 1 }} gap="xl" maw={900} mx="auto" py={48}>
        <Stack gap="md" align="center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Box
              style={{
                width: 24,
                height: 2,
                background: 'var(--mantine-color-primary-5)',
                margin: '0 auto 12px',
              }}
            />
            <Text size="sm" c="dimmed" tt="uppercase" fw={600} lts={2}>
              {label}
            </Text>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Title order={1} style={{ lineHeight: 1.15, fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              {titleLine1}
              <br />
              <span className="text-gradient">{titleHighlight}</span>
              {titleLine2 ? (
                <>
                  <br />
                  {titleLine2}
                </>
              ) : null}
            </Title>
          </motion.div>
          {subtitle ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Text size="lg" c="dimmed" maw={560} style={{ lineHeight: 1.6 }}>
                {subtitle}
              </Text>
            </motion.div>
          ) : null}
          {tags.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Group gap="xs" justify="center" wrap="wrap">
                {tags.map((tag) => (
                  <Badge key={tag} variant="light" color="primary" size="sm" radius="xl">
                    {tag}
                  </Badge>
                ))}
              </Group>
            </motion.div>
          ) : null}
        </Stack>
      </Stack>
    </Box>
  );
}
