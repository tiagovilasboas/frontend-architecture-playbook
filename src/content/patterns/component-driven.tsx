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
  IconPuzzle,
  IconLego,
} from "@tabler/icons-react";
import CodeExample from "../../components/CodeExample";
import codeExamples from "../../utils/code-examples/component-driven.json";

function ComponentDriven() {
  return (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Title order={1} mb="md">
          Component-Driven Development
        </Title>
        <Text size="lg" c="dimmed">
          Construa interfaces como Lego. Componentes reutilizáveis, composição
          poderosa, design systems que realmente funcionam. Menos código, mais
          resultado.
        </Text>
      </div>

      {/* What is it */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconPuzzle size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>O que é?</Title>
              <Text c="dimmed">
                Desenvolvimento baseado em componentes reutilizáveis
              </Text>
            </div>
          </Group>

          <Text>
            Component-Driven é sobre uma coisa só:{" "}
            <strong>construir interfaces como Lego</strong>.
          </Text>

          <Text>
            Pensa assim: você tem peças pequenas (botões, inputs), combina elas
            em peças médias (formulários, cards), e depois monta telas inteiras.
            Cada peça funciona sozinha e pode ser reutilizada.
          </Text>

          <Text>
            A regra é simples:{" "}
            <em>componentes são independentes e reutilizáveis</em>. Você pode
            testar cada um isoladamente, trocar um sem afetar os outros.
          </Text>
        </Stack>
      </Paper>

      {/* Concepts */}
      <div>
        <Title order={2} mb="lg">
          <IconLego
            size={28}
            style={{ verticalAlign: "middle", marginRight: "8px" }}
          />
          Os 3 Conceitos Principais
        </Title>

        <Stack gap="md">
          {codeExamples.slice(0, 3).map((ex, idx) => (
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
                  color={["green", "blue", "orange"][idx] || "gray"}
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
            <strong>Como funciona:</strong> Componentes atômicos (Button, Input)
            se juntam em componentes maiores (Form, Card). Cada componente é
            testado isoladamente e pode ser reutilizado em qualquer lugar. A
            mudança em um componente se reflete em todos os lugares onde ele é
            usado.
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
                <IconCode size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Menos Código</Title>
                <Text size="sm">
                  Reutiliza componentes, não reescreve. Uma mudança, todo lugar
                  atualiza.
                </Text>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="blue">
                <IconPuzzle size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Desenvolvimento Rápido</Title>
                <Text size="sm">
                  Monta telas como Lego. Componentes prontos, só juntar.
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
                <Title order={4}>Consistência Visual</Title>
                <Text size="sm">
                  Mesmos componentes = mesma aparência. Design system
                  automático.
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
              <List.Item>Interface complexa com muitas telas</List.Item>
              <List.Item>Time grande trabalhando junto</List.Item>
              <List.Item>Precisa de consistência visual</List.Item>
              <List.Item>Vai reutilizar componentes</List.Item>
              <List.Item>Design system é importante</List.Item>
            </List>
          </Alert>

          <Alert variant="light" color="red" title="❌ Evite quando:">
            <List>
              <List.Item>Projeto pequeno (over-engineering)</List.Item>
              <List.Item>Só uma tela simples</List.Item>
              <List.Item>Protótipo rápido</List.Item>
              <List.Item>Time muito pequeno</List.Item>
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
          {codeExamples.slice(3, 6).map((ex, idx) => (
            <Paper withBorder p="xl" radius="md" key={ex.title}>
              <Title order={3} mb="md">
                {["🛒", "📊", "📝"][idx]} {ex.title.split(" - ")[1]}
              </Title>

              <Stack gap="md">
                <Text>
                  <strong>Cenário:</strong> {ex.description}
                  <br />
                  <strong>Problema:</strong> Código duplicado, inconsistência
                  visual, impossível de manter.
                </Text>

                <CodeExample title={ex.title} code={ex.code} />
              </Stack>
            </Paper>
          ))}
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
          {codeExamples.slice(6).map((ex, idx) => (
            <Paper withBorder p="xl" radius="md" key={ex.title}>
              <Title order={3} mb="md">
                {["🚫", "🔄", "🐋", "🎭", "🧪"][idx]} {ex.title}
              </Title>
              <Stack gap="md">
                <Text>
                  <strong>Problema:</strong> {ex.description}
                </Text>

                <Text>
                  <strong>Como evitar:</strong>{" "}
                  {ex.description.includes("desnecessários")
                    ? "Só crie componente quando vai reutilizar. Se só aparece uma vez, deixa inline mesmo."
                    : ex.description.includes("Props Drilling")
                      ? "Use Context, Redux, ou reorganize componentes. Não passe props desnecessárias."
                      : ex.description.includes("Gigantes")
                        ? "Quebre em componentes menores. Cada um com uma responsabilidade só."
                        : ex.description.includes("Inconsistentes")
                          ? "Padronize props. Use interfaces TypeScript. Documente o que cada prop faz."
                          : "Teste cada componente isoladamente. Use Storybook pra documentar e testar visualmente."}
                </Text>

                <CodeExample title={`Armadilha: ${ex.title}`} code={ex.code} />
              </Stack>
            </Paper>
          ))}
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
                  <strong>"Atomic Design"</strong> - Brad Frost
                </List.Item>
                <List.Item>
                  <strong>"Design Systems"</strong> - Alla Kholmatova
                </List.Item>
                <List.Item>
                  <strong>"Component Design"</strong> - Nathan Curtis
                </List.Item>
              </List>
              <Text>
                <strong>Artigos & Blogs:</strong>
              </Text>
              <List>
                <List.Item>
                  <a
                    href="https://bradfrost.com/blog/post/atomic-web-design/"
                    target="_blank"
                  >
                    Atomic Design - Brad Frost
                  </a>
                </List.Item>
                <List.Item>
                  <a href="https://storybook.js.org/" target="_blank">
                    Storybook - Documentação de Componentes
                  </a>
                </List.Item>
                <List.Item>
                  <a
                    href="https://www.uxpin.com/studio/blog/design-systems-vs-component-libraries/"
                    target="_blank"
                  >
                    Design Systems vs Component Libraries
                  </a>
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
              <Text c="dimmed">Component-Driven na prática</Text>
            </div>
          </Group>

          <Text>
            Component-Driven é sobre uma coisa só:{" "}
            <strong>construir interfaces como Lego</strong>. Reutilize
            componentes, mantenha consistência, desenvolva mais rápido. Use
            quando tem interface complexa e quer menos código.
          </Text>

          <Text size="sm" c="dimmed">
            <strong>Lembre-se:</strong> Não é sobre criar componentes pra tudo.
            É sobre reutilizar o que realmente se repete. E você não enlouquece.
            <br />
            <strong>Dica:</strong> Comece com componentes pequenos, evolua
            conforme necessário. Teste cada componente isoladamente.
          </Text>
        </Stack>
      </Paper>
    </Stack>
  );
}

ComponentDriven.metadata = {
  title: "Component-Driven Development",
  description:
    "Construa interfaces como Lego com componentes reutilizáveis e composição poderosa.",
};

export default ComponentDriven;
