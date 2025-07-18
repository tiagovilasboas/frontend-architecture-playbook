import React from 'react';
import { NavLink } from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';
import { IconChevronRight } from '@tabler/icons-react';

interface NavItemProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  active: boolean;
  onNavigate?: () => void;
}

export default function NavItem({
  href,
  label,
  icon,
  active,
  onNavigate,
}: NavItemProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    // Fecha o menu mobile automaticamente quando um link é clicado
    // onNavigate é passado apenas no mobile (Drawer), não no desktop (sidebar)
    onNavigate?.();

    // Se estamos no mobile (onNavigate existe), sempre navega e volta ao topo
    if (onNavigate) {
      // Pequeno delay para garantir que o menu feche antes de navegar
      setTimeout(() => {
        navigate(href);
        // Volta ao topo da página
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <NavLink
      component={Link}
      to={href}
      label={label}
      active={active}
      onClick={handleClick}
      leftSection={icon}
      rightSection={active ? <IconChevronRight size={12} /> : null}
      variant={active ? 'filled' : 'subtle'}
      className="navmenu-link"
    />
  );
}
