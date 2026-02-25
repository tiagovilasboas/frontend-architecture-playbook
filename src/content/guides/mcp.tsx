import React from 'react';
import {
  Title,
  Text,
  Stack,
  Paper,
  List,
  ThemeIcon,
  Alert,
  Code,
  Table,
  Group,
  Badge,
} from '@mantine/core';
import { IconPlug, IconTool, IconBook, IconCheck } from '@tabler/icons-react';
import GuideNavigation from '../../components/GuideNavigation';

export default function MCPGuide() {
  return (
    <Stack gap="xl">
      <div>
        <Title order={1} mb="md">
          MCP: use o playbook no Cursor
        </Title>
        <Text size="lg" c="dimmed">
          O conteúdo do playbook fica disponível via{' '}
          <strong>Model Context Protocol (MCP)</strong>. No Cursor (ou em outro
          cliente MCP) você consulta guias, casos e navegação direto no chat.
        </Text>
      </div>

      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconPlug size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>O que é o MCP?</Title>
              <Text c="dimmed">
                Um servidor que o Cursor sobe e usa pra ler o índice do
                playbook, os guias e os 19 casos. O assistente usa essas tools
                pra responder com base no conteúdo real.
              </Text>
            </div>
          </Group>
        </Stack>
      </Paper>

      <Paper withBorder p="xl" radius="md">
        <Title order={3} mb="md">
          <IconBook
            size={22}
            style={{ verticalAlign: 'middle', marginRight: 8 }}
          />
          Recursos (read-only)
        </Title>
        <Table withTableBorder withColumnBorders>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>URI</Table.Th>
              <Table.Th>Descrição</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            <Table.Tr>
              <Table.Td>
                <Code>playbook://index</Code>
              </Table.Td>
              <Table.Td>
                Navegação completa e todos os guias (título, descrição, URL).
              </Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>
                <Code>playbook://cases</Code>
              </Table.Td>
              <Table.Td>
                19 casos reais (Netflix, Spotify, eBay, Shopify, etc.) com
                challenge, solution, practices, results e link.
              </Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>
                <Code>playbook://guide/{'{slug}'}</Code>
              </Table.Td>
              <Table.Td>
                Um guia por slug (ex.: dependency-rule, how-to-choose,
                migration-strategies).
              </Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </Paper>

      <Paper withBorder p="xl" radius="md">
        <Title order={3} mb="md">
          <IconTool
            size={22}
            style={{ verticalAlign: 'middle', marginRight: 8 }}
          />
          Ferramentas (tools)
        </Title>
        <Table withTableBorder withColumnBorders>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Tool</Table.Th>
              <Table.Th>Descrição</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            <Table.Tr>
              <Table.Td>
                <Code>playbook_search</Code>
              </Table.Td>
              <Table.Td>
                Busca por palavra-chave em títulos/descrições. Argumento:{' '}
                <Code>query</Code> (string).
              </Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>
                <Code>playbook_get_guide</Code>
              </Table.Td>
              <Table.Td>
                Retorna um guia por slug. Argumento: <Code>slug</Code> (string).
              </Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>
                <Code>playbook_list_guides</Code>
              </Table.Td>
              <Table.Td>
                Lista todos os guias por seção. Sem argumentos.
              </Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>
                <Code>playbook_get_cases</Code>
              </Table.Td>
              <Table.Td>
                Retorna os casos; opcionalmente filtra por empresa. Argumento:{' '}
                <Code>company</Code> (opcional).
              </Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </Paper>

      <Paper withBorder p="xl" radius="md">
        <Title order={3} mb="md">
          Como configurar no Cursor
        </Title>
        <List spacing="sm" listStyleType="ordered">
          <List.Item>
            <strong>Antes de tudo:</strong> no terminal, na pasta do repo, roda{' '}
            <Code>cd mcp-server && npm install && npm run build</Code>. O Cursor
            executa o <Code>dist/index.js</Code>; sem build esse arquivo não
            existe.
          </List.Item>
          <List.Item>
            <strong>Configurar o servidor:</strong> em{' '}
            <Code>Cursor → Settings → MCP</Code>, adicione um novo servidor.
          </List.Item>
          <List.Item>
            <strong>Nome:</strong> <Code>frontend-playbook</Code> (ou outro que
            preferir).
          </List.Item>
          <List.Item>
            <strong>Command:</strong> <Code>node</Code>
          </List.Item>
          <List.Item>
            <strong>Arguments:</strong> use <strong>um único argumento</strong>,
            o caminho <strong>absoluto</strong> do seu computador até o arquivo{' '}
            <Code>mcp-server/dist/index.js</Code> (dentro do clone do
            repositório). Exemplo no Mac/Linux:
            <Code block mt="xs">
              {`["/Users/fulano/projetos/frontend-architecture-playbook/mcp-server/dist/index.js"]`}
            </Code>
            No Windows, o caminho pode ser algo como{' '}
            <Code>
              C:\\Users\\fulano\\projetos\\frontend-architecture-playbook\\mcp-server\\dist\\index.js
            </Code>{' '}
            (com barras invertidas ou normais).
          </List.Item>
          <List.Item>
            <strong>Como achar o caminho:</strong> no terminal, entra na pasta{' '}
            <Code>mcp-server</Code> e roda <Code>pwd</Code> (Mac/Linux) ou{' '}
            <Code>cd</Code> (Windows). O resultado + <Code>/dist/index.js</Code>{' '}
            é o que você coloca no argumento.
          </List.Item>
          <List.Item>
            Reinicie o Cursor (ou recarregue o MCP) e use o chat para perguntar
            sobre o playbook.
          </List.Item>
        </List>
        <Alert color="blue" mt="md" radius="md">
          <Text size="sm">
            Dá pra editar direto o config do Cursor (em{' '}
            <Code>Settings → MCP</Code> ele mostra o caminho do arquivo, tipo{' '}
            <Code>~/.cursor/mcp.json</Code>). Exemplo:
          </Text>
          <Code block mt="xs">
            {`{
  "mcpServers": {
    "frontend-playbook": {
      "command": "node",
      "args": ["/Users/fulano/projetos/frontend-architecture-playbook/mcp-server/dist/index.js"]
    }
  }
}`}
          </Code>
          <Text size="sm" mt="xs">
            Só troca o caminho pelo caminho absoluto real do seu clone (onde tá
            o <Code>mcp-server/dist/index.js</Code>).
          </Text>
        </Alert>
      </Paper>

      <Paper withBorder p="xl" radius="md">
        <Title order={3} mb="md">
          Exemplos de perguntas no chat
        </Title>
        <Stack gap="xs">
          <Text size="sm">
            Depois de configurar, pode perguntar por exemplo:
          </Text>
          <Group gap="xs" wrap="wrap">
            <Badge variant="light" size="lg">
              O que o playbook diz sobre dependency rule?
            </Badge>
            <Badge variant="light" size="lg">
              Procura no playbook por security
            </Badge>
            <Badge variant="light" size="lg">
              Lista os 19 casos do playbook
            </Badge>
            <Badge variant="light" size="lg">
              Qual guia devo ler para migração?
            </Badge>
            <Badge variant="light" size="lg">
              Casos da Netflix e Shopify
            </Badge>
          </Group>
          <Text size="sm" c="dimmed" mt="xs">
            O modelo usa as tools e resources do MCP pra responder com base no
            conteúdo real do playbook.
          </Text>
        </Stack>
      </Paper>

      <Paper withBorder p="xl" radius="md">
        <Title order={3} mb="sm">
          Instalação local (dev ou testar)
        </Title>
        <List
          spacing="xs"
          icon={
            <ThemeIcon size={20} radius="xl">
              <IconCheck size={12} />
            </ThemeIcon>
          }
        >
          <List.Item>Node.js 18+</List.Item>
          <List.Item>
            No repo: <Code>cd mcp-server && npm install && npm run build</Code>.
            Gera a pasta <Code>dist/</Code> com <Code>index.js</Code>.
          </List.Item>
          <List.Item>
            O servidor lê tudo de <Code>mcp-server/data/</Code> (playbook.json,
            cases.json). O path é relativo ao script, então funciona mesmo se o
            Cursor rodar de outra pasta.
          </List.Item>
        </List>
      </Paper>

      <GuideNavigation currentGuide="mcp" />
    </Stack>
  );
}

MCPGuide.metadata = {
  title: 'MCP: use o playbook no Cursor',
  description:
    'Configure o servidor MCP para usar o conteúdo do playbook no Cursor: guias, casos e navegação via chat.',
};
