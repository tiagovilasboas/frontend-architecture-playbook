import { useEffect, useState } from 'react';
import { Affix, Transition, ActionIcon, Tooltip } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { IconArrowUp } from '@tabler/icons-react';
import { useBreakpoints } from '../hooks/useBreakpoints.ts';

/** Mostra botão "voltar ao topo" após ~1 tela de scroll. Reduz fadiga de scroll (Nielsen, UX patterns). */
export function BackToTop() {
  const [scroll] = useWindowScroll();
  const [visible, setVisible] = useState(false);
  const { isMobile } = useBreakpoints();

  const showAfter = isMobile ? 400 : 600;

  useEffect(() => {
    setVisible(scroll.y > showAfter);
  }, [scroll.y, showAfter]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <Transition mounted={visible} transition="fade-up" duration={200}>
      {styles => (
        <Affix
          position={{ bottom: isMobile ? 88 : 24, right: 24 }}
          zIndex={1500}
          style={styles}
        >
          <Tooltip label="Voltar ao topo" position="left">
            <ActionIcon
              size={isMobile ? 'lg' : 'xl'}
              radius="xl"
              variant="filled"
              color="brand"
              onClick={scrollToTop}
              aria-label="Voltar ao topo"
            >
              <IconArrowUp size={20} />
            </ActionIcon>
          </Tooltip>
        </Affix>
      )}
    </Transition>
  );
}
