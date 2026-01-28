import { useEffect, useState } from 'react';
import { Progress } from '@mantine/core';

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      if (documentHeight <= windowHeight) {
        setProgress(0);
        return;
      }

      const scrollableHeight = documentHeight - windowHeight;
      const scrolled = scrollTop;
      const percentage = (scrolled / scrollableHeight) * 100;

      setProgress(Math.min(100, Math.max(0, percentage)));
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress, { passive: true });

    // Initial calculation
    updateProgress();

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <Progress
      value={progress}
      size={3}
      color="brand"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 2000,
        borderRadius: 0,
        transition: 'width 0.1s ease-out',
      }}
    />
  );
}
