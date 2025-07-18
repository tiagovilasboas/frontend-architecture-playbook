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
  IconTestPipe,
  IconStack,
} from "@tabler/icons-react";
import CodeExample from "../../components/CodeExample";
import codeExamples from "../../utils/code-examples/clean-architecture.json";

function CleanArchitecture() {
  return (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Title order={1} mb="md">
          Clean Architecture no Front-End
        </Title>
        <Text size="lg" c="dimmed">
          Separação clara de responsabilidades, testes fáceis e independência de
          frameworks. Seu código de negócio sobrevive a qualquer mudança de
          tecnologia.
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
                Arquitetura em camadas que protege sua lógica de negócio
              </Text>
            </div>
          </Group>

          <Text>
            Clean Architecture é sobre uma coisa só:{" "}
            <strong>
              seu código de negócio não pode depender de framework
            </strong>
            .
          </Text>

          <Text>
            Pensa assim: se amanhã o React virar pó, sua lógica de negócio tem
            que sobreviver. Se o Vue quebrar tudo na próxima versão, suas regras
            de negócio continuam funcionando.
          </Text>

          <Text>
            A regra é simples: <em>dependências apontam para dentro</em>. UI
            depende do negócio, API depende do negócio, mas negócio não depende
            de nada externo.
          </Text>
        </Stack>
      </Paper>

      {/* Layers */}
      <div>
        <Title order={2} mb="lg">
          <IconStack
            size={28}
            style={{ verticalAlign: "middle", marginRight: "8px" }}
          />
          As 4 Camadas
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
                  color={["green", "blue", "orange", "red"][idx] || "gray"}
                >
                  {idx + 1}
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

        <Paper withBorder p="md" radius="md" mt="lg">
          <Text size="sm" c="dimmed">
            <strong>Como funciona:</strong> As camadas se comunicam de fora para
            dentro. O React component (Framework) chama o caso de uso (Use
            Case), que usa a entidade (Entity). O adaptador (Repository) conecta
            com o mundo externo. A regra é clara:{" "}
            <em>dependências apontam para dentro</em>.
          </Text>
        </Paper>
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
                <IconTestPipe size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Testes Fáceis</Title>
                <Text size="sm">
                  Sua lógica de negócio roda sem DOM. Testes unitários puros,
                  sem mocks complexos.
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
                <Title order={4}>Independência de Framework</Title>
                <Text size="sm">
                  Troque React por Vue sem afetar regras de negócio. Migrações
                  mais seguras.
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
                <Title order={4}>Manutenibilidade</Title>
                <Text size="sm">
                  Código organizado, responsabilidades claras. Menos bugs, mais
                  paz.
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
          Quando usar?
        </Title>

        <Stack gap="md">
          <Alert color="green" icon={<IconCheck size={16} />} radius="md">
            <Text size="sm" fw={600} mb={4}>
              ✅ Use quando:
            </Text>
            <List size="sm" c="dimmed">
              <List.Item>Projeto complexo com regras de negócio</List.Item>
              <List.Item>Time médio/grande</List.Item>
              <List.Item>Precisa de testes robustos</List.Item>
              <List.Item>Vai migrar de framework no futuro</List.Item>
              <List.Item>SaaS ou produto que vai crescer</List.Item>
            </List>
          </Alert>

          <Alert color="red" icon={<IconAlertTriangle size={16} />} radius="md">
            <Text size="sm" fw={600} mb={4}>
              ❌ Evite quando:
            </Text>
            <List size="sm" c="dimmed">
              <List.Item>Projeto pequeno/MVP (over-engineering)</List.Item>
              <List.Item>Time pequeno (complexidade desnecessária)</List.Item>
              <List.Item>Protótipo rápido</List.Item>
              <List.Item>Só CRUD simples</List.Item>
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
          {codeExamples.slice(4).map((ex) => (
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
            Clean Architecture é sobre proteger sua lógica de negócio. Separe
            responsabilidades, teste facilmente, migre sem medo.
          </Text>
          <Text>
            <strong>Regra de ouro:</strong> Dependências apontam para dentro.
            Negócio no centro, frameworks na periferia.
          </Text>
        </Stack>
      </Paper>
    </Stack>
  );
}

CleanArchitecture.metadata = {
  title: "Clean Architecture no Front-End",
  description:
    "Separação clara de responsabilidades, testes fáceis e independência de frameworks.",
};

export default CleanArchitecture;
