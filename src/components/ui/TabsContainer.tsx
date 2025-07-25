import React from 'react';
import styled from 'styled-components';
import Tabs, { TabItem } from './Tabs';

interface TabsContainerProps {
  tabs: TabItem[];
  defaultActiveTab?: string;
  activeTab?: string;
  onChange?: (tabId: string) => void;
  variant?: 'default' | 'pills' | 'underline' | 'cards' | 'minimal';
  size?: 'small' | 'medium' | 'large';
  orientation?: 'horizontal' | 'vertical';
  fullWidth?: boolean;
  centered?: boolean;
  scrollable?: boolean;
  animated?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const Container = styled.div`
  width: 100%;
`;

const TabsContainer: React.FC<TabsContainerProps> = ({
  tabs,
  defaultActiveTab,
  activeTab,
  onChange,
  variant = 'default',
  size = 'medium',
  orientation = 'horizontal',
  fullWidth = false,
  centered = false,
  scrollable = false,
  animated = true,
  className,
  style
}) => {
  return (
    <Container className={className} style={style}>
      <Tabs
        items={tabs}
        defaultActiveTab={defaultActiveTab}
        activeTab={activeTab}
        onChange={onChange}
        variant={variant}
        size={size}
        orientation={orientation}
        fullWidth={fullWidth}
        centered={centered}
        scrollable={scrollable}
        animated={animated}
      />
    </Container>
  );
};

export default TabsContainer;
export type { TabsContainerProps };