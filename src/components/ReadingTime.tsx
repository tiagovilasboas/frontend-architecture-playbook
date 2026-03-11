import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Badge } from '@mantine/core';
import { IconClock } from '@tabler/icons-react';

const WORDS_PER_MINUTE = 200;

export function ReadingTime() {
  const [readingTime, setReadingTime] = useState<number | null>(null);
  const pathname = useLocation().pathname;

  useEffect(() => {
    const calculateReadingTime = () => {
      // Só conta o conteúdo do doc (não sidebar, nav, footer)
      const container =
        document.querySelector('[data-doc-content]') ||
        document.querySelector('article') ||
        document.querySelector('main');
      const text = (container?.textContent || '').trim();
      const words = text ? text.split(/\s+/).length : 0;
      const minutes = Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
      setReadingTime(minutes);
    };

    setReadingTime(null);
    const timer = setTimeout(calculateReadingTime, 300);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!readingTime || readingTime < 1) return null;

  return (
    <Badge
      variant="light"
      leftSection={<IconClock size={12} />}
      size="sm"
    >
      {readingTime} min de leitura
    </Badge>
  );
}
