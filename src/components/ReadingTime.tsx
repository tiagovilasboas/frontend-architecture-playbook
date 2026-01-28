import { useEffect, useState } from 'react';
import { Badge } from '@mantine/core';
import { IconClock } from '@tabler/icons-react';

export function ReadingTime() {
  const [readingTime, setReadingTime] = useState<number | null>(null);

  useEffect(() => {
    const calculateReadingTime = () => {
      const article = document.querySelector('article') || document.body;
      const text = article.textContent || '';
      const words = text.trim().split(/\s+/).length;
      const wordsPerMinute = 200;
      const minutes = Math.ceil(words / wordsPerMinute);
      setReadingTime(minutes);
    };

    // Wait for content to load
    const timer = setTimeout(calculateReadingTime, 500);
    calculateReadingTime();

    return () => clearTimeout(timer);
  }, []);

  if (!readingTime || readingTime < 1) return null;

  return (
    <Badge
      variant="light"
      color="blue"
      leftSection={<IconClock size={12} />}
      size="sm"
    >
      {readingTime} min de leitura
    </Badge>
  );
}
