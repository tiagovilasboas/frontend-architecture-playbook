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
  IconCopy,
} from "@tabler/icons-react";
import CodeExample from "../../components/CodeExample";
import codeExamples from "../../utils/code-examples/dry.json";

function Dry() {
  return (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Title order={1} mb="md">
          DRY - Don't Repeat Yourself
        </Title>
        <Text size="lg" c="dimmed">
          Elimine duplicação de código. Se você está escrevendo a mesma coisa
          duas vezes, você está fazendo algo errado.
        </Text>
      </div>

      {/* What is it */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconCopy size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>O que é?</Title>
              <Text c="dimmed">Princípio que elimina duplicação de código</Text>
            </div>
          </Group>

          <Text>
            DRY significa <strong>"Don't Repeat Yourself"</strong>. É sobre não
            repetir <em>lógica de negócio</em>, não apenas código.
          </Text>

          <Text>
            Pensa assim: se você precisa mudar uma regra de negócio (desconto,
            validação, cálculo) e ela está duplicada em 5 lugares, você vai
            esquecer de mudar em algum lugar. E aí vem o bug.
          </Text>

          <Text>
            A regra é clara:{" "}
            <em>
              cada regra de negócio deve ter uma representação única, não
              ambígua e autoritativa
            </em>
            .
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
                <Title order={4}>Menos Bugs</Title>
                <Text size="sm">
                  Uma mudança em um lugar só. Sem risco de esquecer de atualizar
                  código duplicado.
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
                <Title order={4}>Manutenibilidade</Title>
                <Text size="sm">
                  Código mais limpo, mais fácil de entender e manter.
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
                  Funções e componentes reutilizáveis. Menos código, mais
                  funcionalidade.
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
              <List.Item>
                Regras de negócio repetidas (cálculos, validações)
              </List.Item>
              <List.Item>Lógica de validação de formulários</List.Item>
              <List.Item>Transformação de dados similar</List.Item>
              <List.Item>Configurações de API</List.Item>
              <List.Item>Utilitários e helpers</List.Item>
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
              <List.Item>Abstrações muito genéricas</List.Item>
              <List.Item>Dependências desnecessárias</List.Item>
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
            DRY é sobre eliminar duplicação de <em>lógica de negócio</em>, não
            sobre criar abstrações complexas. Se você está copiando regras de
            negócio, pare e pense em uma forma melhor.
          </Text>
          <Text>
            <strong>Regra de ouro:</strong> Se você precisa mudar a mesma regra
            de negócio em mais de um lugar, você está violando DRY.
          </Text>
        </Stack>
      </Paper>
    </Stack>
  );
}

Dry.metadata = {
  title: "DRY - Don't Repeat Yourself",
  description:
    "Elimine duplicação de código. Se você está escrevendo a mesma coisa duas vezes, você está fazendo algo errado.",
};

export default Dry;
