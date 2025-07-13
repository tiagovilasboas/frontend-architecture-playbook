import { NavLink } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconChevronRight } from '@tabler/icons-react';

interface NavItemProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  active: boolean;
  onNavigate?: () => void;
}

export default function NavItem({ href, label, icon, active, onNavigate }: NavItemProps) {
  return (
    <NavLink
      component={Link}
      to={href}
      label={label}
      active={active}
      onClick={onNavigate}
      leftSection={icon}
      rightSection={active ? <IconChevronRight size={12} /> : null}
      variant={active ? "filled" : "subtle"}
      className="navmenu-link"
    />
  );
} 