import React from 'react';
import {
  Title,
  Text,
  Stack,
  Paper,
  Alert,
  List,
  ThemeIcon,
  Card,
  SimpleGrid,
  Group,
  Anchor,
} from '@mantine/core';
import {
  IconShield,
  IconCurrencyDollar,
  IconChartBar,
  IconMessageCircle,
  IconCheck,
  IconAlertTriangle,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import GuideNavigation from '../../components/GuideNavigation';

export default function SecurityBusinessGuide() {
  return (
    <Stack gap="xl">
      <div>
        <Title order={1} mb="md">
          Segurança & Negócio
        </Title>
        <Text size="lg" c="dimmed">
          Segurança não é só técnica: impacta receita, compliance e reputação.
          Este guia ajuda a priorizar e comunicar investimento em segurança em
          nível de decisão (staff).
        </Text>
      </div>

      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconShield size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>Por que segurança é tema de staff?</Title>
              <Text c="dimmed">
                Porque falhas de segurança geram custo direto (multas, perda de
                dados, downtime) e indireto (confiança, marca, fuga de
                clientes). Decidir quanto e onde investir é decisão de negócio,
                não só de engenharia.
              </Text>
            </div>
          </Group>
          <Alert color="blue" icon={<IconShield size={16} />} radius="md">
            <Text size="sm">
              <strong>Ligação com o playbook:</strong> Os{' '}
              <Anchor component={Link} to="/patterns/security">
                Security Patterns
              </Anchor>{' '}
              cobrem o <em>como</em> implementar (XSS, validação, CSP, etc.).
              Este guia foca no <em>por quê</em> e no <em>quanto</em> priorizar,
              e em como falar disso com stakeholders.
            </Text>
          </Alert>
        </Stack>
      </Paper>

      <Paper withBorder p="xl" radius="md">
        <Title order={3} mb="md">
          <IconCurrencyDollar
            size={22}
            style={{ verticalAlign: 'middle', marginRight: 8 }}
          />
          Impacto financeiro
        </Title>
        <Text mb="md">
          Incidentes de segurança têm custo mensurável. Prevenção também tem
          custo, mas costuma ser ordens de grandeza menor que a resposta a um
          breach.
        </Text>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
          <Card withBorder p="md">
            <Group gap="xs" mb="xs">
              <ThemeIcon size="md" variant="light" color="red">
                <IconAlertTriangle size={14} />
              </ThemeIcon>
              <Text fw={600} size="sm">
                Custo de um incidente
              </Text>
            </Group>
            <List size="sm" spacing="xs">
              <List.Item>Multas (LGPD, GDPR, setor regulado)</List.Item>
              <List.Item>Perda de dados e recuperação</List.Item>
              <List.Item>Downtime e perda de receita</List.Item>
              <List.Item>
                Custo de resposta (forense, comunicação, jurídico)
              </List.Item>
              <List.Item>Perda de confiança e churn de clientes</List.Item>
            </List>
          </Card>
          <Card withBorder p="md">
            <Group gap="xs" mb="xs">
              <ThemeIcon size="md" variant="light" color="green">
                <IconCheck size={14} />
              </ThemeIcon>
              <Text fw={600} size="sm">
                Custo da prevenção
              </Text>
            </Group>
            <List size="sm" spacing="xs">
              <List.Item>Treinamento e padrões (Security Patterns)</List.Item>
              <List.Item>Revisão em code review e pipeline</List.Item>
              <List.Item>Ferramentas (SAST, dependências, headers)</List.Item>
              <List.Item>Design seguro desde o início (arquitetura)</List.Item>
            </List>
          </Card>
        </SimpleGrid>
        <Alert color="yellow" mt="md" radius="md">
          <Text size="sm">
            <strong>ROI de segurança:</strong> Estudos e relatórios setoriais
            (ex.: IBM Cost of a Data Breach) mostram que o custo médio por
            registro vazado e por tempo de contenção cresce ano a ano. Investir
            em prevenção e detecção reduz tempo de contenção e magnitude, e isso
            se traduz em menos prejuízo e melhor resultado financeiro.
          </Text>
        </Alert>
      </Paper>

      <Paper withBorder p="xl" radius="md">
        <Title order={3} mb="md">
          <IconChartBar
            size={22}
            style={{ verticalAlign: 'middle', marginRight: 8 }}
          />
          Onde priorizar (front-end)
        </Title>
        <Text mb="md">
          No front-end, as decisões que mais impactam negócio costumam ser:
        </Text>
        <List
          spacing="sm"
          icon={
            <ThemeIcon size={20} radius="xl" color="blue">
              <IconCheck size={12} />
            </ThemeIcon>
          }
        >
          <List.Item>
            <strong>Dados sensíveis na UI:</strong> não expor tokens, PII ou
            segredos no client; definir o que nunca vai para o browser.
          </List.Item>
          <List.Item>
            <strong>Autenticação e sessão:</strong> onde guardar token, refresh,
            logout em todos os dispositivos, impacto em confiança do usuário.
          </List.Item>
          <List.Item>
            <strong>Proteção contra XSS e injeção:</strong> sanitização, CSP,
            evitar <code>dangerouslySetInnerHTML</code> com conteúdo dinâmico.
          </List.Item>
          <List.Item>
            <strong>Compliance (LGPD, PCI, etc.):</strong> consentimento,
            minimização de dados, auditoria do que é enviado/armazenado no
            front-end.
          </List.Item>
        </List>
        <Text size="sm" c="dimmed" mt="md">
          Detalhes de implementação estão em{' '}
          <Anchor component={Link} to="/patterns/security">
            Security Patterns
          </Anchor>
          .
        </Text>
      </Paper>

      <Paper withBorder p="xl" radius="md">
        <Title order={3} mb="md">
          <IconMessageCircle
            size={22}
            style={{ verticalAlign: 'middle', marginRight: 8 }}
          />
          Como comunicar com stakeholders
        </Title>
        <Text mb="md">
          Em nível staff, você precisa traduzir risco técnico em linguagem de
          negócio e priorização.
        </Text>
        <List spacing="xs">
          <List.Item>
            <strong>Risco em termos de impacto:</strong> “Se X acontecer,
            podemos ter vazamento de Y dados, multa estimada Z, e perda de
            confiança em [segmento].”
          </List.Item>
          <List.Item>
            <strong>Opções e custo:</strong> “Para reduzir esse risco, podemos
            [A] com custo X e prazo Y, ou [B] com custo menor mas cobrindo só
            [cenário].”
          </List.Item>
          <List.Item>
            <strong>Compliance:</strong> “Para [LGPD/PCI/contrato], precisamos
            de [controle]; sem isso, estamos expostos a [consequência].”
          </List.Item>
          <List.Item>
            <strong>Métricas que importam para negócio:</strong> tempo de
            detecção, tempo de contenção, número de dados afetados, custo por
            incidente. Use dados de relatórios do setor quando não tiver dados
            internos.
          </List.Item>
        </List>
      </Paper>

      <Paper withBorder p="xl" radius="md">
        <Title order={3} mb="sm">
          Resumo
        </Title>
        <Text size="sm">
          Segurança a nível staff é sobre <strong>decisão e priorização</strong>
          : onde investir, quanto e como explicar isso em termos de negócio e
          resultado financeiro. O front-end contribui com proteção de dados no
          client, autenticação/sessão e compliance de dados na UI. Use os{' '}
          <Anchor component={Link} to="/patterns/security">
            Security Patterns
          </Anchor>{' '}
          para o como implementar e este guia para o por quê e para o diálogo
          com o negócio.
        </Text>
      </Paper>

      <GuideNavigation currentGuide="security-business" />
    </Stack>
  );
}

SecurityBusinessGuide.metadata = {
  title: 'Segurança & Negócio',
  description:
    'Segurança como decisão de negócio: impacto financeiro, priorização e como comunicar com stakeholders. Nível staff.',
};
