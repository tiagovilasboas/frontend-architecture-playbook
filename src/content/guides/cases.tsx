import { Title, Text, Stack, Paper, Card, Group, ThemeIcon, Badge, Anchor, Alert, List } from '@mantine/core';
import { IconTarget, IconTrendingUp, IconExternalLink, IconRocket, IconBulb, IconCheckbox } from '@tabler/icons-react';

export default function Cases() {
  const cases = [
    {
      company: "Airbnb",
      icon: "🏠",
      title: "Imagens otimizadas com LQIP",
      challenge: "páginas lentas por conta de imagens grandes",
      solution: "uso de placeholders LQIP + carregamento progressivo",
      practices: ["lazy loading", "progressive enhancement", "build otimizado"],
      results: [
        "Redução de 3.5s no tempo de carregamento",
        "Aumento de 10% na permanência dos usuários"
      ],
      link: "https://airbnb.io/lottie/",
      color: "pink"
    },
    {
      company: "Netflix",
      icon: "📺",
      title: "Performance em Smart TVs",
      challenge: "App React lento em TVs antigas",
      solution: "render assíncrona e pré-rendering adaptado",
      practices: ["renderização por lote", "SSR parcial", "foco no device"],
      results: [
        "Redução de 50% no tempo até primeira interação"
      ],
      link: "https://netflixtechblog.com/",
      color: "red"
    },
    {
      company: "Google",
      icon: "🎨",
      title: "Teste A/B com 41 tons de azul",
      challenge: "cliques baixos em botões de CTA",
      solution: "testes A/B com variações de cor",
      practices: ["cultura de experimentação", "foco em conversão"],
      results: [
        "Milhões de dólares em receita extra apenas ajustando o tom de azul"
      ],
      link: "https://www.fastcompany.com/1139343/how-google-works",
      color: "blue"
    },
    {
      company: "Booking.com",
      icon: "🛎️",
      title: "Testes A/B constantes",
      challenge: "conversão inconsistente em fluxos críticos",
      solution: "cultura de testes A/B em todo o front",
      practices: ["feature toggles", "entrega contínua", "UX com métricas"],
      results: [
        "Melhorias marginais de 1~2% renderam milhões ao ano"
      ],
      link: "https://blog.booking.com/",
      color: "orange"
    },
    {
      company: "Twitter",
      icon: "🐦",
      title: "Twitter Lite com PWA",
      challenge: "app pesado em redes 2G/3G",
      solution: "reconstrução usando PWA (React + Service Workers)",
      practices: ["app shell", "lazy loading", "cache otimizado"],
      results: [
        "Redução de 70% no consumo de dados",
        "Aumento de 65% nas sessões por visitante"
      ],
      link: "https://blog.twitter.com/engineering/en_us/topics/insights/2017/twitter-lite-a-progressive-web-app-for-everyone.html",
      color: "cyan"
    },
    {
      company: "Walmart",
      icon: "🛒",
      title: "Black Friday com PWA",
      challenge: "site mobile travando sob carga",
      solution: "reconstrução com React + PWA",
      practices: ["preload inteligente", "design responsivo", "otimização de bundle"],
      results: [
        "+98% de conversões no mobile",
        "-50% no tempo de carregamento"
      ],
      link: "https://medium.com/walmartglobaltech",
      color: "yellow"
    },
    {
      company: "Spotify",
      icon: "🎧",
      title: "Web Player com micro frontends",
      challenge: "manutenção difícil e app pesado",
      solution: "adoção de micro frontends",
      practices: ["modularização", "boundaries bem definidos", "lazy load"],
      results: [
        "Redução de 50% no bundle size",
        "Tempo até o primeiro play caiu em 30%"
      ],
      link: "https://engineering.atspotify.com/",
      color: "green"
    },
    {
      company: "GOV.UK",
      icon: "🇬🇧",
      title: "Design simples e acessível",
      challenge: "sites governamentais confusos e lentos",
      solution: "foco extremo em clareza, acessibilidade e UX real",
      practices: ["mobile-first", "conteúdo direto", "WCAG compliance"],
      results: [
        "Aumento na taxa de conclusão de serviços públicos online",
        "Notas altíssimas de acessibilidade"
      ],
      link: "https://design-system.service.gov.uk/",
      color: "grape"
    }
  ];

  return (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Group gap="sm" mb="md">
          <ThemeIcon size="xl" radius="md" variant="light" color="green">
            <IconTarget size={28} />
          </ThemeIcon>
          <div>
            <Title order={1} size="h1">💥 Casos Reais de Impacto no Front-End</Title>
            <Text size="xl" c="dimmed" mt="xs">
              Como boas práticas e arquitetura geram resultado de verdade
            </Text>
          </div>
        </Group>

        <Text size="lg" mb="xl">
          Este documento reúne exemplos reais de aplicações front-end onde decisões técnicas geraram{' '}
          <Text span fw={700} c="green">impacto direto em performance, conversão e experiência do usuário</Text>.{' '}
          Cada caso mostra como boas práticas aliadas à arquitetura certa mudam o jogo.
        </Text>
      </div>

      {/* Cases Grid */}
      <Stack gap="lg">
        {cases.map((case_, index) => (
          <Card key={case_.company} withBorder shadow="sm" padding="lg" radius="md">
            <Stack gap="md">
              {/* Header */}
              <Group justify="space-between" align="flex-start">
                <Group gap="sm">
                  <Text size="xl">{case_.icon}</Text>
                  <div>
                    <Group gap="xs" align="center">
                      <Title order={3} size="h3">{case_.company}</Title>
                      <Badge variant="light" color={case_.color}>
                        Case #{index + 1}
                      </Badge>
                    </Group>
                    <Text fw={600} size="lg" c={`${case_.color}.6`}>
                      {case_.title}
                    </Text>
                  </div>
                </Group>
                <Anchor 
                  href={case_.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  c={case_.color}
                >
                  <Group gap={4}>
                    <IconExternalLink size={16} />
                    <Text size="sm">Ver fonte</Text>
                  </Group>
                </Anchor>
              </Group>

              {/* Challenge & Solution */}
              <Paper withBorder p="md" radius="sm">
                <Stack gap="sm">
                  <div>
                    <Text fw={600} size="sm" c="orange" mb={4}>🔥 Desafio:</Text>
                    <Text size="sm">{case_.challenge}</Text>
                  </div>
                  <div>
                    <Text fw={600} size="sm" c="blue" mb={4}>💡 Solução:</Text>
                    <Text size="sm">{case_.solution}</Text>
                  </div>
                </Stack>
              </Paper>

              {/* Practices */}
              <div>
                <Text fw={600} size="sm" c="dimmed" mb="xs">🛠️ Boas práticas aplicadas:</Text>
                <Group gap="xs">
                  {case_.practices.map((practice) => (
                    <Badge key={practice} variant="light" size="sm" color="gray">
                      {practice}
                    </Badge>
                  ))}
                </Group>
              </div>

              {/* Results */}
              <Alert color={case_.color} icon={<IconTrendingUp size={16} />} radius="md">
                <Text fw={600} size="sm" mb="xs">📈 Impacto:</Text>
                <List spacing={4} size="sm">
                  {case_.results.map((result, idx) => (
                    <List.Item key={idx} icon={<IconCheckbox size={14} color="var(--mantine-color-green-6)" />}>
                      <Text fw={500}>{result}</Text>
                    </List.Item>
                  ))}
                </List>
              </Alert>
            </Stack>
          </Card>
        ))}
      </Stack>

      {/* Conclusion */}
      <Paper withBorder p="xl" radius="md" mt="xl">
        <Group gap="sm" mb="md">
          <ThemeIcon size="lg" radius="md" variant="light" color="green">
            <IconBulb size={20} />
          </ThemeIcon>
          <Title order={2} size="h2">📌 Conclusão</Title>
        </Group>

        <Text size="lg" mb="md">
          Esses casos mostram que{' '}
          <Text span fw={700} c="green">impacto de verdade vem de decisões técnicas bem pensadas</Text>{' '}
          — não é sobre "usar React ou não", mas sobre:
        </Text>

        <List spacing="sm" mb="lg">
          <List.Item icon={<IconCheckbox size={16} color="var(--mantine-color-green-6)" />}>
            <Text>Conhecer o contexto do produto</Text>
          </List.Item>
          <List.Item icon={<IconCheckbox size={16} color="var(--mantine-color-green-6)" />}>
            <Text>Aplicar boas práticas com inteligência</Text>
          </List.Item>
          <List.Item icon={<IconCheckbox size={16} color="var(--mantine-color-green-6)" />}>
            <Text>Medir e aprender com dados reais</Text>
          </List.Item>
        </List>

        <Alert color="yellow" icon={<IconRocket size={16} />} radius="md">
          <Text fw={600} size="lg" style={{ fontStyle: 'italic' }}>
            Stack bonita não paga boleto. Performance, UX e resultado de negócio sim.
          </Text>
        </Alert>
      </Paper>
    </Stack>
  );
}

Cases.metadata = {
  title: 'Casos Reais de Impacto',
  description: 'Exemplos reais de como boas práticas e arquitetura front-end geram resultados concretos em performance, conversão e experiência do usuário.'
};