// Exemplo real de hook para Feature Flags
import { useEffect, useState } from 'react';

export function useFeatureFlag(flagKey: string, defaultValue = false) {
  const [isEnabled, setIsEnabled] = useState(defaultValue);

  useEffect(() => {
    fetch(`/api/flags/${flagKey}`)
      .then((res) => res.json())
      .then((data) => setIsEnabled(!!data.enabled))
      .catch(() => setIsEnabled(defaultValue));
  }, [flagKey, defaultValue]);

  return isEnabled;
} 