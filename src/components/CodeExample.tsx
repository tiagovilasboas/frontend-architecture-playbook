import { useState } from "react";
import {
  Paper,
  Text,
  Button,
  Stack,
  Group,
  Badge,
  Tooltip,
} from "@mantine/core";
import {
  IconChevronDown,
  IconChevronUp,
  IconCode,
  IconCopy,
  IconCheck,
} from "@tabler/icons-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useMediaQuery } from "@mantine/hooks";

interface CodeExampleCodeObject {
  content: string;
  language?: string;
  description?: string;
}

interface CodeExampleProps {
  title: string;
  description?: string;
  code: string | CodeExampleCodeObject;
  defaultExpanded?: boolean;
}

export default function CodeExample({
  title,
  description,
  code,
  defaultExpanded = false,
}: CodeExampleProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const [copied, setCopied] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Suporte a string ou objeto
  const codeContent = typeof code === "string" ? code : code.content;
  const codeDescription =
    typeof code === "string" ? description : code.description || description;

  // Detectar linguagem baseado no conteúdo
  const detectLanguage = (content: string): string => {
    if (content.includes("<?php")) return "php";
    if (content.includes("<!DOCTYPE html") || content.includes("<html"))
      return "html";
    if (
      content.includes("interface") ||
      content.includes("type") ||
      content.includes("export class")
    )
      return "typescript";
    if (content.includes("import") && content.includes("from"))
      return "typescript";
    if (
      content.includes("const") ||
      content.includes("let") ||
      content.includes("var")
    )
      return "javascript";
    return "typescript"; // default
  };

  const detectedLanguage = detectLanguage(codeContent);

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    await navigator.clipboard.writeText(codeContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleToggle = () => setExpanded((v) => !v);

  return (
    <Paper
      withBorder
      p={isMobile ? "sm" : "md"}
      radius="md"
      style={{
        cursor: "pointer",
        width: "100%",
        maxWidth: "100%",
        overflow: "hidden",
        // Ensure proper containment on mobile
        ...(isMobile && {
          minWidth: 0,
          flex: "1 1 auto",
        }),
      }}
      onClick={handleToggle}
    >
      <Stack gap="sm">
        <Group justify="space-between" align="center" wrap="nowrap">
          <Group gap="xs" align="center" style={{ minWidth: 0, flex: 1 }}>
            <IconCode size={16} />
            <Text
              fw={600}
              size={isMobile ? "xs" : "sm"}
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {title}
            </Text>
          </Group>
          <Group gap={4} align="center" style={{ flexShrink: 0 }}>
            <div
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                padding: "4px",
              }}
              onClick={(e) => {
                e.stopPropagation();
                handleToggle();
              }}
            >
              {expanded ? (
                <IconChevronUp size={isMobile ? 20 : 24} />
              ) : (
                <IconChevronDown size={isMobile ? 20 : 24} />
              )}
            </div>
          </Group>
        </Group>

        <Group justify="space-between" align="center" mb={4}>
          <Badge
            size="xs"
            variant="light"
            color="blue"
            style={{ textTransform: "uppercase" }}
          >
            {detectedLanguage}
          </Badge>
        </Group>

        {codeDescription && (
          <Text size={isMobile ? "xs" : "sm"} c="dimmed">
            {codeDescription}
          </Text>
        )}

        {expanded && (
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "100%",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 8,
                right: 8,
                zIndex: 2,
              }}
            >
              <Tooltip label={copied ? "Copiado!" : "Copiar código"} withArrow>
                <Button
                  variant="subtle"
                  size="xs"
                  onClick={handleCopy}
                  color={copied ? "green" : "blue"}
                  tabIndex={0}
                  style={{
                    padding: 4,
                    minWidth: 0,
                    width: isMobile ? 24 : 28,
                    height: isMobile ? 24 : 28,
                  }}
                >
                  {copied ? (
                    <IconCheck size={isMobile ? 16 : 18} />
                  ) : (
                    <IconCopy size={isMobile ? 16 : 18} />
                  )}
                </Button>
              </Tooltip>
            </div>

            <div
              style={{
                width: "100%",
                maxWidth: "100%",
                overflow: "auto",
                // Prevent horizontal scroll on mobile
                ...(isMobile && {
                  overflowX: "auto",
                  overflowY: "hidden",
                  WebkitOverflowScrolling: "touch", // Smooth scrolling on iOS
                }),
              }}
            >
              <SyntaxHighlighter
                language={detectedLanguage}
                style={tomorrow}
                customStyle={{
                  borderRadius: 6,
                  fontSize: isMobile ? 12 : 14,
                  margin: 0,
                  padding: isMobile ? 8 : 12,
                  overflowX: "auto",
                  overflowY: "hidden",
                  minWidth: isMobile ? "100%" : "auto",
                  maxWidth: "100%",
                  // Fundo escuro fixo, independente do tema
                  background: "#2d2d2d",
                  color: "#f8f8f2",
                  border: "1px solid #444",
                  // Ensure proper word wrapping on mobile
                  ...(isMobile && {
                    wordBreak: "break-all",
                    whiteSpace: "pre-wrap",
                    lineHeight: 1.3,
                  }),
                }}
                showLineNumbers={!isMobile} // Hide line numbers on mobile for better space usage
                lineNumberStyle={{
                  minWidth: "1.8em",
                  paddingRight: "0.5em",
                  textAlign: "left",
                  color: "#888",
                  fontVariantNumeric: "tabular-nums",
                }}
                wrapLines={isMobile}
                wrapLongLines={isMobile}
              >
                {codeContent}
              </SyntaxHighlighter>
            </div>
          </div>
        )}
      </Stack>
    </Paper>
  );
}
