import {
  Title,
  Text,
  Stack,
  Paper,
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
  IconTarget,
} from "@tabler/icons-react";
import CodeExample from "../../components/CodeExample";
import codeExamples from "../../utils/code-examples/srp.json";

function SRP() {
  return (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Title order={1} mb="md">
          Single Responsibility Principle
        </Title>
        <Text size="lg" c="dimmed">
          Uma classe, uma responsabilidade. Cada módulo deve ter apenas um
          motivo para mudar.
        </Text>
      </div>

      {/* What is it */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconTarget size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>O que é?</Title>
              <Text c="dimmed">
                Princípio que define responsabilidade única para cada módulo
              </Text>
            </div>
          </Group>

          <Text>
            SRP significa <strong>"Single Responsibility Principle"</strong>. É
            sobre cada classe, função ou módulo ter apenas{" "}
            <em>uma responsabilidade</em>.
          </Text>

          <Text>
            Pensa assim: se você precisa alterar uma classe por múltiplas razões
            (validação mudou, email mudou, banco mudou), ela está fazendo
            demais. Cada mudança deve afetar apenas um módulo.
          </Text>

          <Text>
            A regra é clara:{" "}
            <em>uma classe deve ter apenas um motivo para mudar</em>. Se há
            múltiplos motivos, quebre em classes menores.
          </Text>
        </Stack>
      </Paper>

      {/* Examples */}
      <div>
        <Title order={2} mb="lg">
          <IconCode
            size={28}
            style={{ verticalAlign: "middle", marginRight: "8px" }}
          />
          Exemplos Práticos
        </Title>

        <Stack gap="md">
          {codeExamples.map((ex, idx) => (
            <Card
              withBorder
              p="md"
              key={ex.title}
              w="100%"
              style={{ minWidth: 0, width: "100%" }}
            >
              <Group w="100%" style={{ minWidth: 0, width: "100%" }}>
                <Badge
                  size="lg"
                  variant="light"
                  color={["red", "green"][idx] || "gray"}
                >
                  {idx === 0 ? "❌" : "✅"}
                </Badge>
                <div style={{ flex: 1, width: "100%" }}>
                  <Title order={4}>{ex.title}</Title>
                  <Text size="sm" c="dimmed">
                    {ex.description}
                  </Text>
                  <CodeExample title={ex.title} code={ex.code} />
                </div>
              </Group>
            </Card>
          ))}
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
                <IconCheck size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Mudanças Isoladas</Title>
                <Text size="sm">
                  Alterar uma funcionalidade não afeta outras. Menos bugs, menos
                  regressões.
                </Text>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="blue">
                <IconCode size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Testes Focados</Title>
                <Text size="sm">
                  Cada classe tem seus testes específicos. Mais fácil de testar
                  e manter.
                </Text>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="orange">
                <IconBulb size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Reutilização</Title>
                <Text size="sm">
                  Classes pequenas são mais fáceis de reutilizar em diferentes
                  contextos.
                </Text>
              </div>
            </Group>
          </Card>
        </Stack>
      </div>

      {/* When to use */}
      <div>
        <Title order={2} mb="lg">
          <IconBulb
            size={28}
            style={{ verticalAlign: "middle", marginRight: "8px" }}
          />
          Quando aplicar?
        </Title>

        <Stack gap="md">
          <Alert color="green" icon={<IconCheck size={16} />} radius="md">
            <Text size="sm" fw={600} mb={4}>
              ✅ Sempre aplique:
            </Text>
            <List size="sm" c="dimmed">
              <List.Item>Classes com múltiplas responsabilidades</List.Item>
              <List.Item>Funções que fazem muitas coisas</List.Item>
              <List.Item>Módulos que mudam por motivos diferentes</List.Item>
              <List.Item>
                Testes que precisam mockar muitas dependências
              </List.Item>
              <List.Item>Código difícil de entender e manter</List.Item>
            </List>
          </Alert>

          <Alert
            color="orange"
            icon={<IconAlertTriangle size={16} />}
            radius="md"
          >
            <Text size="sm" fw={600} mb={4}>
              ⚠️ Cuidado com:
            </Text>
            <List size="sm" c="dimmed">
              <List.Item>Classes anêmicas (só getters/setters)</List.Item>
              <List.Item>Over-engineering (YAGNI)</List.Item>
              <List.Item>Quebrar demais sem necessidade</List.Item>
            </List>
          </Alert>
        </Stack>
      </div>

      {/* Pitfalls */}
      <div>
        <Title order={2} mb="lg">
          <IconAlertTriangle
            size={28}
            style={{ verticalAlign: "middle", marginRight: "8px" }}
          />
          Armadilhas Comuns
        </Title>

        <Stack gap="md">
          {codeExamples.slice(2).map((ex) => (
            <Card
              withBorder
              p="md"
              key={ex.title}
              w="100%"
              style={{ minWidth: 0, width: "100%" }}
            >
              <Title order={4} mb="sm">
                {ex.title}
              </Title>
              <Text size="sm" mb="md">
                {ex.description}
              </Text>
              <CodeExample title={ex.title} code={ex.code} />
            </Card>
          ))}
        </Stack>
      </div>

      {/* Summary */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Title order={3}>Resumo</Title>
          <Text>
            SRP é sobre foco. Cada classe deve ter uma responsabilidade clara e
            única. Se você precisa mudar uma classe por múltiplas razões, quebre
            em classes menores.
          </Text>
          <Text>
            <strong>Regra de ouro:</strong> Se você pode descrever uma classe
            com múltiplos "e", ela está violando SRP. "Essa classe valida E
            salva E envia email" = violação.
          </Text>
        </Stack>
      </Paper>
    </Stack>
  );
}

SRP.metadata = {
  title: "Single Responsibility Principle",
  description:
    "Uma classe, uma responsabilidade. Cada módulo deve ter apenas um motivo para mudar.",
};

export default SRP;
