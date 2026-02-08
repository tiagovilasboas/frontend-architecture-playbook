import React, { useState } from 'react';
import { Stack, Tabs } from '@mantine/core';
import type { TabItem } from './MobileTabsHelpers';
import { useBreakpoints } from '../hooks/useBreakpoints.ts';

interface MobileTabsProps {
  items: TabItem[];
  defaultTab?: string;
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const MobileTabs: React.FC<MobileTabsProps> = ({
  items,
  defaultTab,
  gap = 'xl',
}) => {
  const { isMobile } = useBreakpoints();
  const [activeTab, setActiveTab] = useState<string | null>(
    defaultTab || items[0]?.value
  );

  if (!isMobile) {
    return (
      <Stack gap={gap}>
        {items.map(item => (
          <div key={item.value}>{item.content}</div>
        ))}
      </Stack>
    );
  }

  return (
    <Tabs value={activeTab} onChange={setActiveTab}>
      <Tabs.List>
        {items.map(item => (
          <Tabs.Tab key={item.value} value={item.value} leftSection={item.icon}>
            {item.label}
          </Tabs.Tab>
        ))}
      </Tabs.List>

      {items.map(item => (
        <Tabs.Panel
          key={item.value}
          value={item.value}
          pt="md"
          style={{ maxHeight: 'calc(100vh - 120px)', overflowY: 'auto' }}
        >
          {item.content}
        </Tabs.Panel>
      ))}
    </Tabs>
  );
};

export default MobileTabs;
