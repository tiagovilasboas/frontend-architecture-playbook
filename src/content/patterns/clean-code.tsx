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
  IconFileText,
} from "@tabler/icons-react";
import CodeExample from "../../components/CodeExample";
import codeExamples from "../../utils/code-examples/clean-code.json";

function CleanCode() {
  return (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Title order={1} mb="md">
          Clean Code
        </Title>
        <Text size="lg" c="dimmed">
          Código legível e manutenível. Se você precisa explicar seu código para
          funcionar, você já perdeu.
        </Text>
      </div>

      {/* What is it */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconFileText size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>O que é?</Title>
              <Text c="dimmed">
                Código que outros devs conseguem entender e manter
              </Text>
            </div>
          </Group>

          <Text>
            Clean Code não é sobre escrever código perfeito. É sobre escrever
            código que
            <strong> outros devs conseguem entender e manter</strong> sem
            enlouquecer.
          </Text>

          <Text>
            Pensa assim: se você precisa explicar seu código para funcionar,
            você já perdeu. Se um dev júnior não entende seu código na primeira
            leitura, você está violando Clean Code.
          </Text>

          <Text>
            A regra é clara: <em>código deve se explicar sozinho</em>. Nomes
            descritivos, funções pequenas, lógica clara.
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
                <Title order={4}>Legibilidade</Title>
                <Text size="sm">
                  Código que qualquer dev entende na primeira leitura. Menos
                  tempo debugando.
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
                  Mudanças mais fáceis, menos bugs, menos tempo refatorando.
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
                <Title order={4}>Onboarding</Title>
                <Text size="sm">
                  Novos devs no time entendem o código rapidamente. Menos tempo
                  treinando.
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
              <List.Item>Nomes de variáveis e funções</List.Item>
              <List.Item>Estrutura de funções</List.Item>
              <List.Item>Comentários e documentação</List.Item>
              <List.Item>Tratamento de erros</List.Item>
              <List.Item>Organização de código</List.Item>
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
              <List.Item>Over-engineering (YAGNI)</List.Item>
              <List.Item>Nomes muito longos</List.Item>
              <List.Item>Ignorar performance</List.Item>
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
            Clean Code é sobre simplicidade e clareza. Se você precisa explicar
            seu código para funcionar, você já perdeu. Escreva código que se
            explica sozinho.
          </Text>
          <Text>
            <strong>Regra de ouro:</strong> Se um dev júnior não entende seu
            código na primeira leitura, você está violando Clean Code.
          </Text>
        </Stack>
      </Paper>
    </Stack>
  );
}

CleanCode.metadata = {
  title: "Clean Code",
  description:
    "Código legível e manutenível - princípios fundamentais para escrever código que outros devs conseguem entender e manter.",
};

export default CleanCode;
