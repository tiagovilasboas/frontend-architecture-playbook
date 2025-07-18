import { useState, useEffect } from 'react';

export function useMobileDetector() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    // Check on mount
    checkDevice();

    // Add event listener
    window.addEventListener('resize', checkDevice);

    // Cleanup
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return {
    isMobile,
    isTablet,
    isDesktop: !isMobile && !isTablet,
  };
}

// Hook para detectar conexão lenta
export function useSlowConnection() {
  const [isSlowConnection, setIsSlowConnection] = useState(false);

  useEffect(() => {
    if ('connection' in navigator) {
      const connection = (
        navigator as Navigator & {
          connection?: {
            effectiveType?: string;
            addEventListener?: (event: string, callback: () => void) => void;
            removeEventListener?: (event: string, callback: () => void) => void;
          };
        }
      ).connection;

      const checkConnection = () => {
        if (
          connection?.effectiveType === 'slow-2g' ||
          connection?.effectiveType === '2g' ||
          connection?.effectiveType === '3g'
        ) {
          setIsSlowConnection(true);
        }
      };

      if (connection) {
        checkConnection();
        connection.addEventListener?.('change', checkConnection);

        return () =>
          connection.removeEventListener?.('change', checkConnection);
      }
    }
  }, []);

  return isSlowConnection;
}
