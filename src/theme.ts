import { createTheme } from "@mantine/core";
import type { MantineColorsTuple } from "@mantine/core";

// Neutral brand color that works well in both light and dark modes
const brand: MantineColorsTuple = [
  "#f8fafc", // 0 - Very light gray
  "#f1f5f9", // 1 - Light gray
  "#e2e8f0", // 2 - Gray
  "#cbd5e1", // 3 - Medium gray
  "#94a3b8", // 4 - Dark gray
  "#64748b", // 5 - Very dark gray
  "#475569", // 6 - Darker gray
  "#334155", // 7 - Even darker gray
  "#1e293b", // 8 - Very dark gray
  "#0f172a", // 9 - Almost black
];

// Accent color for highlights and CTAs
const accent: MantineColorsTuple = [
  "#fef3c7",
  "#fde68a",
  "#fcd34d",
  "#fbbf24",
  "#f59e0b",
  "#d97706",
  "#b45309",
  "#92400e",
  "#78350f",
  "#451a03",
];

export const theme = createTheme({
  primaryColor: "brand",
  colors: {
    brand,
    accent,
  },
  fontFamily: "Inter, sans-serif",
  headings: {
    fontFamily: "Inter, sans-serif",
    sizes: {
      h1: { fontSize: "2.25rem", fontWeight: "700" },
    },
  },
  // Custom components with consistent styling
  components: {
    Anchor: {
      defaultProps: {
        c: "brand.6",
        underline: "hover",
      },
      styles: {
        root: {
          fontWeight: 500,
          transition: "color 0.2s ease",
          "&:hover": {
            color: "var(--mantine-color-brand-5)",
          },
        },
      },
    },
    Paper: {
      defaultProps: {
        withBorder: true,
        p: "xl",
        radius: "lg",
      },
    },
    Card: {
      defaultProps: {
        withBorder: true,
        p: "md",
        radius: "md",
      },
    },
    ThemeIcon: {
      defaultProps: {
        variant: "light",
        size: "md",
        radius: "md",
      },
    },
    Badge: {
      defaultProps: {
        variant: "light",
      },
    },
    Alert: {
      defaultProps: {
        radius: "md",
      },
    },
    Title: {
      styles: {
        root: {
          '&[data-order="1"]': {
            background:
              "linear-gradient(135deg, var(--mantine-color-brand-6) 0%, var(--mantine-color-accent-6) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          },
        },
      },
    },
  },
});
