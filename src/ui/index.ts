/**
 * UI framework entry point.
 * All docs layout and shared UI imports from here.
 * To switch to another UI framework (e.g. for docs): replace this module
 * and the components that depend on it (layouts/docs, then rest of app).
 */
export {
  Box,
  Stack,
  Group,
  Text,
  Title,
  Paper,
  Button,
  Anchor,
  Breadcrumbs,
  Drawer,
  UnstyledButton,
  ActionIcon,
  Burger,
  NavLink,
  Progress,
  Affix,
  Transition,
  Tooltip,
  Tabs,
  Accordion,
  ScrollArea,
  Menu,
  Badge,
} from '@mantine/core';
export { MantineProvider, useMantineColorScheme } from '@mantine/core';
export { Spotlight, openSpotlight } from '@mantine/spotlight';
export { useMediaQuery, useWindowScroll } from '@mantine/hooks';
