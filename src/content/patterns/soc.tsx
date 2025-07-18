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
  IconStack,
} from "@tabler/icons-react";
import CodeExample from "../../components/CodeExample";
import codeExamples from "../../utils/code-examples/soc.json";

function SOC() {
  return (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Title order={1} mb="md">
          Separation of Concerns
        </Title>
        <Text size="lg" c="dimmed">
          Separe responsabilidades claramente. Cada parte do sistema deve ter
          uma preocupação específica.
        </Text>
      </div>

      {/* What is it */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconStack size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>O que é?</Title>
              <Text c="dimmed">
                Princípio que separa diferentes responsabilidades em módulos
                distintos
              </Text>
            </div>
          </Group>

          <Text>
            SOC significa <strong>"Separation of Concerns"</strong>. É sobre{" "}
            <em>organização mental</em>. Cada parte do seu código deve ter uma
            preocupação específica.
          </Text>

          <Text>
            Pensa assim: se você mistura lógica de negócio com UI, está violando
            SOC. Se um modelo sabe como é exibido, está violando SOC. Se
            configuração está hardcoded, está violando SOC.
          </Text>

          <Text>
            A regra é clara:{" "}
            <em>
              cada módulo deve se preocupar com apenas um aspecto do sistema
            </em>
            . UI só com apresentação, lógica só com regras, dados só com
            persistência.
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
                <Title order={4}>Testes Mais Fáceis</Title>
                <Text size="sm">
                  Teste só da lógica de negócio, sem se preocupar com UI ou
                  banco de dados.
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
                <Title order={4}>Reutilização</Title>
                <Text size="sm">
                  Lógica de negócio pode ser usada em diferentes UIs (web,
                  mobile, API).
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
                <Title order={4}>Mudanças Isoladas</Title>
                <Text size="sm">
                  Mudar UI não afeta lógica, mudar lógica não afeta dados, mudar
                  API não afeta nada.
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
              <List.Item>UI separada da lógica de negócio</List.Item>
              <List.Item>Dados separados da apresentação</List.Item>
              <List.Item>Configuração separada do código</List.Item>
              <List.Item>Testes separados da implementação</List.Item>
              <List.Item>Infraestrutura separada do domínio</List.Item>
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
              <List.Item>Over-abstração (YAGNI)</List.Item>
              <List.Item>Camadas desnecessárias</List.Item>
              <List.Item>Dependências circulares</List.Item>
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
            SOC é sobre organização mental. Cada parte do sistema deve ter uma
            preocupação específica. Se você mistura responsabilidades, está
            violando SOC.
          </Text>
          <Text>
            <strong>Regra de ouro:</strong> Se você pode dizer "essa classe faz
            X E Y E Z", você está violando SOC. Cada classe deve fazer apenas
            uma coisa.
          </Text>
        </Stack>
      </Paper>
    </Stack>
  );
}

SOC.metadata = {
  title: "Separation of Concerns",
  description:
    "Separe responsabilidades claramente. Cada parte do sistema deve ter uma preocupação específica.",
};

export default SOC;
