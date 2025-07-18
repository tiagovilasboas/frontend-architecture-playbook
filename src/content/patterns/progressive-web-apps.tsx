import {
  Title,
  Text,
  Stack,
  Paper,
  Code,
  Alert,
  List,
  ThemeIcon,
  Group,
  Card,
  Badge,
} from "@mantine/core";
import {
  IconBulb,
  IconAlertTriangle,
  IconCheck,
  IconCode,
  IconDeviceMobile,
  IconWifi,
} from "@tabler/icons-react";
import CodeExample from "../../components/CodeExample";
import progressiveWebAppsExamples from "../../utils/code-examples/progressive-web-apps.json";

function ProgressiveWebApps() {
  return (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Title order={1} mb="md">
          Progressive Web Apps (PWA)
        </Title>
        <Text size="lg" c="dimmed">
          Web apps que parecem nativas. Offline, push notifications, instalação.
          Performance e experiência de app.
        </Text>
      </div>

      {/* What is it */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconDeviceMobile size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>O que é?</Title>
              <Text c="dimmed">Web apps com recursos de apps nativos</Text>
            </div>
          </Group>

          <Text>
            PWA é sobre uma coisa só: <strong>web que parece app nativo</strong>
            .
          </Text>

          <Text>
            Pensa assim: ao invés de site normal, você tem um app que funciona
            offline, envia notificações, instala na tela inicial. Tudo isso com
            web technologies.
          </Text>

          <Text>
            A regra é simples: <em>performance, offline, nativo</em>. Usuário
            não sabe se é web ou app. E não deveria importar.
          </Text>
        </Stack>
      </Paper>

      {/* Concepts */}
      <div>
        <Title order={2} mb="lg">
          <IconWifi
            size={28}
            style={{ verticalAlign: "middle", marginRight: "8px" }}
          />
          Os 3 Pilares
        </Title>

        <Stack gap="md">
          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="green">
                1
              </Badge>
              <div>
                <Title order={4}>Service Workers</Title>
                <Text size="sm" c="dimmed">
                  JavaScript que roda em background. Cache, offline, intercepta
                  requests.
                </Text>
                <CodeExample
                  title={
                    progressiveWebAppsExamples.find(
                      (e) => e.id === "pwa-service-worker",
                    )?.title || ""
                  }
                  code={
                    progressiveWebAppsExamples.find(
                      (e) => e.id === "pwa-service-worker",
                    )?.content || ""
                  }
                />
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="blue">
                2
              </Badge>
              <div>
                <Title order={4}>Web App Manifest</Title>
                <Text size="sm" c="dimmed">
                  Configuração do app. Ícone, nome, cores, comportamento de
                  instalação.
                </Text>
                <CodeExample
                  title={
                    progressiveWebAppsExamples.find(
                      (e) => e.id === "pwa-manifest",
                    )?.title || ""
                  }
                  code={
                    progressiveWebAppsExamples.find(
                      (e) => e.id === "pwa-manifest",
                    )?.content || ""
                  }
                />
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="orange">
                3
              </Badge>
              <div>
                <Title order={4}>HTTPS</Title>
                <Text size="sm" c="dimmed">
                  Segurança obrigatória. Service workers só funcionam em HTTPS.
                </Text>
                <Code mt="xs" block>
                  {`// Service workers só funcionam em HTTPS
// https://meuapp.com ✅
// http://meuapp.com ❌

// Certificado SSL obrigatório
// Segurança garantida
// Funcionalidades PWA disponíveis

// Localhost funciona para desenvolvimento
// http://localhost:3000 ✅ (desenvolvimento)
// https://meuapp.com ✅ (produção)`}
                </Code>
              </div>
            </Group>
          </Card>
        </Stack>
      </div>

      {/* Benefits */}
      <div>
        <Title order={2} mb="lg">
          <IconCheck
            size={28}
            style={{ verticalAlign: "middle", marginRight: "8px" }}
          />
          Por que vale a pena?
        </Title>

        <Stack gap="md">
          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="green">
                <IconWifi size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Funciona Offline</Title>
                <Text size="sm">
                  Service workers cacheam recursos. App funciona mesmo sem
                  internet.
                </Text>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="blue">
                <IconDeviceMobile size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Parece App Nativo</Title>
                <Text size="sm">
                  Instala na tela inicial, ícones, splash screen. Experiência de
                  app real.
                </Text>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="purple">
                <IconBulb size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Performance Otimizada</Title>
                <Text size="sm">
                  Cache inteligente, carregamento rápido, menos requests à rede.
                </Text>
              </div>
            </Group>
          </Card>
        </Stack>
      </div>

      {/* When to use */}
      <div>
        <Title order={2} mb="lg">
          <IconAlertTriangle
            size={28}
            style={{ verticalAlign: "middle", marginRight: "8px" }}
          />
          Quando usar?
        </Title>

        <Stack gap="md">
          <Alert variant="light" color="green" title="✅ Use quando:">
            <List>
              <List.Item>App que precisa funcionar offline</List.Item>
              <List.Item>Experiência de app nativo é importante</List.Item>
              <List.Item>Performance é crítica</List.Item>
              <List.Item>Engagement é importante (notificações)</List.Item>
              <List.Item>Usuários mobile são maioria</List.Item>
            </List>
          </Alert>

          <Alert variant="light" color="red" title="❌ Evite quando:">
            <List>
              <List.Item>Sites informativos simples</List.Item>
              <List.Item>Funcionalidades offline não importam</List.Item>
              <List.Item>Usuários desktop são maioria</List.Item>
              <List.Item>Orçamento limitado (complexidade extra)</List.Item>
            </List>
          </Alert>
        </Stack>
      </div>

      {/* Real Examples */}
      <div>
        <Title order={2} mb="lg">
          <IconCode
            size={28}
            style={{ verticalAlign: "middle", marginRight: "8px" }}
          />
          Exemplos Práticos no Front-End
        </Title>

        <Stack gap="xl">
          {/* Example 1: E-commerce */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">
              🛒 E-commerce - Offline Shopping
            </Title>

            <Stack gap="md">
              <Text>
                <strong>Cenário:</strong> E-commerce que funciona offline.
                Usuário pode navegar produtos, adicionar ao carrinho, finalizar
                quando voltar online.
                <br />
                <strong>Problema:</strong> Site não funciona sem internet, perda
                de vendas, experiência ruim.
              </Text>

              <CodeExample
                title={
                  progressiveWebAppsExamples.find(
                    (e) => e.id === "pwa-ecommerce-offline",
                  )?.title || ""
                }
                code={
                  progressiveWebAppsExamples.find(
                    (e) => e.id === "pwa-ecommerce-offline",
                  )?.content || ""
                }
              />
            </Stack>
          </Paper>

          {/* Example 2: Social Media */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">
              📱 Social Media - Notificações
            </Title>

            <Stack gap="md">
              <Text>
                <strong>Cenário:</strong> App social com notificações push.
                Usuário recebe notificações de likes, comentários, novos
                seguidores.
                <br />
                <strong>Problema:</strong> Sem notificações, engagement baixo,
                usuário não volta.
              </Text>

              <CodeExample
                title={
                  progressiveWebAppsExamples.find(
                    (e) => e.id === "pwa-social-notifications",
                  )?.title || ""
                }
                code={
                  progressiveWebAppsExamples.find(
                    (e) => e.id === "pwa-social-notifications",
                  )?.content || ""
                }
              />
            </Stack>
          </Paper>

          {/* Example 3: Productivity App */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">
              📋 Productivity - Sincronização
            </Title>

            <Stack gap="md">
              <Text>
                <strong>Cenário:</strong> App de produtividade (todo, notes).
                Funciona offline, sincroniza quando online.
                <br />
                <strong>Problema:</strong> Dados perdidos offline, sincronização
                complexa.
              </Text>

              <CodeExample
                title={
                  progressiveWebAppsExamples.find(
                    (e) => e.id === "pwa-productivity-offline",
                  )?.title || ""
                }
                code={
                  progressiveWebAppsExamples.find(
                    (e) => e.id === "pwa-productivity-offline",
                  )?.content || ""
                }
              />
            </Stack>
          </Paper>
        </Stack>
      </div>

      {/* Pitfalls & How to Avoid */}
      <div>
        <Title order={2} mb="lg">
          <IconAlertTriangle
            size={28}
            style={{ verticalAlign: "middle", marginRight: "8px" }}
          />
          Armadilhas & Como Evitar
        </Title>

        <Stack gap="xl">
          {/* Cache Strategy */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">
              🗂️ Estratégia de Cache
            </Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Cache desatualizado, usuário vê
                conteúdo antigo, confusão.
              </Text>

              <Text>
                <strong>Como evitar:</strong> Use estratégias de cache
                inteligentes. Cache-first para recursos estáticos, network-first
                para dados.
              </Text>

              <CodeExample
                title={
                  progressiveWebAppsExamples.find(
                    (e) => e.id === "pwa-pitfall-cache-strategy",
                  )?.title || ""
                }
                code={
                  progressiveWebAppsExamples.find(
                    (e) => e.id === "pwa-pitfall-cache-strategy",
                  )?.content || ""
                }
              />
            </Stack>
          </Paper>

          {/* Storage Limits */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">
              💾 Limites de Storage
            </Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Cache muito grande, storage cheio,
                app para de funcionar.
              </Text>

              <Text>
                <strong>Como evitar:</strong> Implemente limpeza de cache,
                monitore uso de storage.
              </Text>

              <CodeExample
                title={
                  progressiveWebAppsExamples.find(
                    (e) => e.id === "pwa-pitfall-storage-limits",
                  )?.title || ""
                }
                code={
                  progressiveWebAppsExamples.find(
                    (e) => e.id === "pwa-pitfall-storage-limits",
                  )?.content || ""
                }
              />
            </Stack>
          </Paper>

          {/* Offline UX */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">
              📱 UX Offline
            </Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Usuário não sabe que está offline,
                funcionalidades quebram, experiência confusa.
              </Text>

              <Text>
                <strong>Como evitar:</strong> Indique status offline, mostre
                funcionalidades disponíveis.
              </Text>

              <CodeExample
                title={
                  progressiveWebAppsExamples.find(
                    (e) => e.id === "pwa-pitfall-offline-ux",
                  )?.title || ""
                }
                code={
                  progressiveWebAppsExamples.find(
                    (e) => e.id === "pwa-pitfall-offline-ux",
                  )?.content || ""
                }
              />
            </Stack>
          </Paper>

          {/* Push Notifications */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">
              🔔 Notificações Push
            </Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Notificações irritantes, usuário
                desinstala, permissão negada.
              </Text>

              <Text>
                <strong>Como evitar:</strong> Peça permissão no momento certo,
                permita customização, seja relevante.
              </Text>

              <CodeExample
                title={
                  progressiveWebAppsExamples.find(
                    (e) => e.id === "pwa-pitfall-push-notifications",
                  )?.title || ""
                }
                code={
                  progressiveWebAppsExamples.find(
                    (e) => e.id === "pwa-pitfall-push-notifications",
                  )?.content || ""
                }
              />
            </Stack>
          </Paper>

          {/* Performance */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">
              ⚡ Performance
            </Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> PWA lenta, service worker pesado,
                cache muito grande.
              </Text>

              <Text>
                <strong>Como evitar:</strong> Otimize service worker, use cache
                eficiente, monitore performance.
              </Text>

              <CodeExample
                title={
                  progressiveWebAppsExamples.find(
                    (e) => e.id === "pwa-pitfall-performance",
                  )?.title || ""
                }
                code={
                  progressiveWebAppsExamples.find(
                    (e) => e.id === "pwa-pitfall-performance",
                  )?.content || ""
                }
              />
            </Stack>
          </Paper>
        </Stack>
      </div>

      {/* References & Real Cases */}
      <div>
        <Title order={2} mb="lg">
          <IconBulb
            size={28}
            style={{ verticalAlign: "middle", marginRight: "8px" }}
          />
          Referências & Casos Reais
        </Title>

        <Stack gap="xl">
          {/* References */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">
              📚 Referências
            </Title>
            <Stack gap="md">
              <Text>
                <strong>Livros:</strong>
              </Text>
              <List>
                <List.Item>
                  <strong>"Progressive Web Apps"</strong> - Dean Hume
                </List.Item>
                <List.Item>
                  <strong>"Building Progressive Web Apps"</strong> - Tal Ater
                </List.Item>
                <List.Item>
                  <strong>"Service Workers"</strong> - Various Authors
                </List.Item>
              </List>

              <Text>
                <strong>Artigos & Blogs:</strong>
              </Text>
              <List>
                <List.Item>
                  <a
                    href="https://web.dev/progressive-web-apps/"
                    target="_blank"
                  >
                    Google Web Dev - PWA Guide
                  </a>
                </List.Item>
                <List.Item>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps"
                    target="_blank"
                  >
                    MDN - Progressive Web Apps
                  </a>
                </List.Item>
                <List.Item>
                  <a href="https://www.pwabuilder.com/" target="_blank">
                    PWA Builder - Ferramenta oficial
                  </a>
                </List.Item>
              </List>
            </Stack>
          </Paper>

          {/* Real Cases */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">
              🏢 Casos Reais de Sucesso
            </Title>
            <Stack gap="md">
              <Card withBorder p="md">
                <Title order={4} mb="sm">
                  Twitter
                </Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> App lento, não funcionava offline,
                  engagement baixo.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> PWA com cache inteligente,
                  notificações push, funcionamento offline.
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> 65% menos uso de dados, 75% mais
                  engagement, 20% mais tweets.
                </Text>
              </Card>

              <Card withBorder p="md">
                <Title order={4} mb="sm">
                  Uber
                </Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> App pesado, lento em conexões
                  ruins, não funcionava offline.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> PWA com cache de mapas,
                  funcionamento offline básico.
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> 50% mais rápido, funciona em
                  conexões lentas.
                </Text>
              </Card>

              <Card withBorder p="md">
                <Title order={4} mb="sm">
                  Pinterest
                </Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Site lento, não funcionava offline,
                  experiência mobile ruim.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> PWA com cache de imagens,
                  funcionamento offline, notificações.
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> 40% mais engagement, 60% mais
                  tempo no site.
                </Text>
              </Card>

              <Card withBorder p="md">
                <Title order={4} mb="sm">
                  Spotify
                </Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> App pesado, não funcionava offline,
                  experiência inconsistente.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> PWA com cache de músicas,
                  funcionamento offline, notificações.
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> 30% mais rápido, funciona offline,
                  mais engagement.
                </Text>
              </Card>
            </Stack>
          </Paper>

          {/* Tools & Libraries */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">
              🛠️ Ferramentas & Bibliotecas
            </Title>
            <Stack gap="md">
              <Text>
                <strong>Ferramentas que facilitam PWA:</strong>
              </Text>
              <List>
                <List.Item>
                  <strong>Workbox</strong> - Service worker library
                </List.Item>
                <List.Item>
                  <strong>PWA Builder</strong> - Ferramenta oficial
                </List.Item>
                <List.Item>
                  <strong>Lighthouse</strong> - Auditoria PWA
                </List.Item>
                <List.Item>
                  <strong>Next.js PWA</strong> - Plugin para Next.js
                </List.Item>
                <List.Item>
                  <strong>Vite PWA</strong> - Plugin para Vite
                </List.Item>
                <List.Item>
                  <strong>Web Push</strong> - Notificações push
                </List.Item>
              </List>
            </Stack>
          </Paper>
        </Stack>
      </div>

      {/* Summary */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconBulb size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>Resumo</Title>
              <Text c="dimmed">PWA na prática</Text>
            </div>
          </Group>

          <Text>
            PWA é sobre uma coisa só: <strong>web que parece app nativo</strong>
            . Offline, notificações, instalação. Performance e experiência de
            app. Use quando experiência mobile e engagement importam.
          </Text>

          <Text size="sm" c="dimmed">
            <strong>Lembre-se:</strong> Não é sobre fazer PWA pra tudo. É sobre
            usar quando faz sentido. E você não enlouquece.
            <br />
            <strong>Dica:</strong> Comece com funcionalidades offline básicas,
            evolua conforme necessário. Foque em performance e UX.
          </Text>
        </Stack>
      </Paper>
    </Stack>
  );
}

ProgressiveWebApps.metadata = {
  title: "Progressive Web Apps (PWA)",
  description:
    "Web apps que parecem nativas. Offline, push notifications, instalação.",
};

export default ProgressiveWebApps;
