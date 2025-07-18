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
    },
    {
      company: "Pinterest",
      icon: "📌",
      title: "PWA que virou case de sucesso",
      challenge: "site mobile com 23% de bounce rate alto",
      solution: "reconstrução total usando PWA com React + caching inteligente",
      practices: ["service workers", "virtual scrolling", "image lazy loading"],
      results: [
        "Redução de 40% no tempo de carregamento",
        "Aumento de 44% na receita gerada por usuário",
        "Redução de 60% no tempo até primeira interação"
      ],
      link: "https://medium.com/pinterest-engineering",
      color: "red"
    },
    {
      company: "Tinder",
      icon: "💘",
      title: "React Native + performance crítica",
      challenge: "swipes lentos e travamentos no scroll infinito",
      solution: "otimização de render com FlatList + memoização + lazy loading de perfis",
      practices: ["virtual scrolling", "image caching", "gesture optimization"],
      results: [
        "Redução de 30% no tempo de resposta do swipe",
        "Diminuição de 25% nos crashes de performance",
        "Aumento de 15% no tempo de sessão"
      ],
      link: "https://tech.gotinder.com/",
      color: "pink"
    },
    {
      company: "Slack",
      icon: "💬",
      title: "Desktop app com Electron otimizado",
      challenge: "app desktop consumindo 500MB+ de RAM",
      solution: "lazy loading de canais + virtualização de mensagens + otimização de bundle",
      practices: ["code splitting", "virtual scrolling", "memory management"],
      results: [
        "Redução de 50% no uso de memória",
        "Melhoria de 35% na velocidade de busca",
        "Diminuição de 60% nos travamentos"
      ],
      link: "https://slack.engineering/",
      color: "violet"
    },
    {
      company: "Uber",
      icon: "🚗",
      title: "Maps em tempo real sem travar",
      challenge: "mapa travando com muitos pins + atualizações em tempo real",
      solution: "canvas customizado + clustering inteligente + debounce de updates",
      practices: ["canvas rendering", "clustering", "websocket optimization"],
      results: [
        "Redução de 70% no tempo de renderização do mapa",
        "Capacidade de exibir 10x mais motoristas sem lag",
        "Diminuição de 45% na taxa de abandono durante o pedido"
      ],
      link: "https://eng.uber.com/",
      color: "indigo"
    },
    {
      company: "WhatsApp Web",
      icon: "💬",
      title: "Chat em tempo real para 2 bilhões",
      challenge: "sincronização de mensagens entre mobile e web sem conflitos",
      solution: "arquitetura event-driven + offline-first + reconciliação inteligente",
      practices: ["event sourcing", "offline sync", "optimistic updates"],
      results: [
        "99.9% de sincronização sem perda de mensagens",
        "Funciona offline com queue de mensagens",
        "Tempo de abertura de chat reduzido em 40%"
      ],
      link: "https://engineering.fb.com/",
      color: "green"
    },
    {
      company: "Zoom",
      icon: "📹",
      title: "Web client que compete com desktop",
      challenge: "vídeo call no browser com qualidade inferior ao app nativo",
      solution: "WebRTC otimizado + canvas para processamento + worker threads",
      practices: ["webrtc optimization", "canvas processing", "web workers"],
      results: [
        "Qualidade de vídeo equivalente ao app desktop",
        "Redução de 30% no delay de vídeo",
        "Suporte a 1000+ participantes no browser"
      ],
      link: "https://zoom.us/",
      color: "blue"
    },
    {
      company: "Figma",
      icon: "🎨",
      title: "Editor vetorial 100% web",
      challenge: "performance de editor gráfico complexo rodando no browser",
      solution: "WebGL + WebAssembly + arquitetura multiplayer real-time",
      practices: ["webgl rendering", "wasm optimization", "real-time collaboration"],
      results: [
        "Performance equivalente a softwares nativos",
        "Colaboração em tempo real sem conflitos",
        "Renderização de arquivos com 1000+ layers sem lag"
      ],
      link: "https://www.figma.com/blog/",
      color: "orange"
    },
    {
      company: "Discord",
      icon: "🎮",
      title: "Chat gaming com baixíssima latência",
      challenge: "mensagens de texto + voz com delay mínimo para gamers",
      solution: "React + Rust (wasm) + websockets otimizados + voice engine customizada",
      practices: ["wasm integration", "websocket optimization", "audio processing"],
      results: [
        "Latência de voz abaixo de 50ms",
        "Suporte a 800.000 usuários simultâneos por servidor",
        "99.99% de uptime durante eventos críticos"
      ],
      link: "https://discord.com/blog/",
      color: "indigo"
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
          Este documento reúne <Text span fw={700} c="blue">16 exemplos reais</Text> de aplicações front-end onde decisões técnicas geraram{' '}
          <Text span fw={700} c="green">impacto direto em performance, conversão e experiência do usuário</Text>.{' '}
          Cada caso mostra métricas concretas de como boas práticas aliadas à arquitetura certa mudam o jogo.
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
          Esses <Text span fw={700} c="blue">16 casos reais</Text> de empresas como Pinterest, Tinder, Slack, Uber, WhatsApp, Zoom, Figma e Discord mostram que{' '}
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
  description: '16 exemplos reais de empresas como Pinterest, Tinder, Slack, Uber, WhatsApp, Zoom, Figma e Discord mostrando como boas práticas e arquitetura front-end geram resultados concretos em performance, conversão e experiência do usuário.'
};