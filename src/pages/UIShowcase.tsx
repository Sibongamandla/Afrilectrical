import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  Input,
  Dropdown,
  Slider,
  Switch,
  Tabs,
  Modal,
  Tooltip,
  ProgressIndicator,
  SkeletonGroup,
  SkeletonCard,
  Pagination,
  Accordion,
  Badge,
  GradientCard,
  AnimatedButton,
  FloatingActionButton,
  Container,
  Typography
} from '../components/ui';
import type {
  DropdownOption,
  TabItem,
  AccordionItem
} from '../components/ui';

const ShowcaseContainer = styled(Container)`
  padding: 40px 20px;
  max-width: 1200px;
`;

const Section = styled(motion.section)`
  margin-bottom: 60px;
  padding: 40px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
`;

const SectionTitle = styled(Typography)`
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.heading};
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  padding-bottom: 10px;
`;

const ComponentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 30px;
`;

const ComponentDemo = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.colors.lightGrey};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const DemoTitle = styled.h4`
  margin: 0 0 15px 0;
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

const DemoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FlexRow = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  flex-wrap: wrap;
`;

const UIShowcase: React.FC = () => {
  // Auto-scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [inputValue, setInputValue] = useState('');
  const [dropdownValue, setDropdownValue] = useState<string>('');
  const [sliderValue, setSliderValue] = useState(50);
  const [switchValue, setSwitchValue] = useState(false);
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [activeTab, setActiveTab] = useState('tab1');
  const [modalOpen, setModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const dropdownOptions: DropdownOption[] = [
    { value: 'option1', label: 'Option 1', icon: 'energy' },
    { value: 'option2', label: 'Option 2', icon: 'building' },
    { value: 'option3', label: 'Option 3', icon: 'transport' },
    { value: 'option4', label: 'Option 4', icon: 'tools' }
  ];

  const tabItems: TabItem[] = [
    { id: 'tab1', label: 'Overview', icon: 'energy', content: <Typography>Overview content with company information and key highlights.</Typography> },
    { id: 'tab2', label: 'Features', icon: 'tools', content: <Typography>Features content showcasing our capabilities and services.</Typography> },
    { id: 'tab3', label: 'Settings', icon: 'settings', content: <Typography>Settings content for customizing your experience.</Typography> }
  ];

  const accordionItems: AccordionItem[] = [
    {
      id: 'item1',
      title: 'What is Afrilectrical?',
      content: 'Afrilectrical is a leading electrical engineering company specializing in renewable energy solutions across Africa.',
      icon: 'energy',
      badge: 'New'
    },
    {
      id: 'item2',
      title: 'Our Services',
      content: 'We provide comprehensive electrical engineering services including solar installations, grid connections, and energy audits.',
      icon: 'tools'
    },
    {
      id: 'item3',
      title: 'Contact Information',
      content: 'Get in touch with our team for consultations and project inquiries. We are available 24/7 for emergency services.',
      icon: 'contact'
    }
  ];

  const handleLoadingDemo = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <ShowcaseContainer>
      <Typography variant="h1" align="center" style={{ marginBottom: '60px' }}>
        UI Components Showcase
      </Typography>

      {/* Form Components */}
      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle variant="h2">Form Components</SectionTitle>
        
        <ComponentGrid>
          <ComponentDemo>
            <DemoTitle>Input Fields</DemoTitle>
            <DemoContent>
              <Input
                label="Standard Input"
                placeholder="Enter text..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Input
                label="Email Input"
                type="email"
                placeholder="Enter email..."
                leftIcon="contact"
                variant="outline"
              />
              <Input
                label="Search Input"
                placeholder="Search..."
                leftIcon="search"
                rightIcon="close"
                variant="filled"
              />
            </DemoContent>
          </ComponentDemo>

          <ComponentDemo>
            <DemoTitle>Dropdown</DemoTitle>
            <DemoContent>
              <Dropdown
              label="Select Option"
              options={dropdownOptions}
              value={dropdownValue}
              onSelect={(value) => setDropdownValue(String(value))}
              placeholder="Choose an option..."
            />
              <Dropdown
                label="Multi-Select"
                options={dropdownOptions}
                multiple
                placeholder="Choose multiple..."
                variant="outline"
              />
            </DemoContent>
          </ComponentDemo>

          <ComponentDemo>
            <DemoTitle>Slider</DemoTitle>
            <DemoContent>
              <Slider
                min={0}
                max={100}
                value={sliderValue}
                onChange={setSliderValue}
                showValue
                variant="primary"
              />
              <Slider
                min={0}
                max={100}
                defaultValue={50}
                variant="gradient"
                showValue
              />
            </DemoContent>
          </ComponentDemo>

          <ComponentDemo>
            <DemoTitle>Switch & Checkbox</DemoTitle>
            <DemoContent>
              <FlexRow>
                <Switch
                  label="Enable notifications"
                  checked={switchValue}
                  onChange={setSwitchValue}
                  variant="primary"
                />
                <Switch
                  label="Dark mode"
                  checked={checkboxValue}
                  onChange={setCheckboxValue}
                  variant="accent"
                  size="large"
                />
              </FlexRow>
            </DemoContent>
          </ComponentDemo>
        </ComponentGrid>

        <ComponentDemo>
          <DemoTitle>Tabs</DemoTitle>
          <Tabs
            items={tabItems}
            activeTab={activeTab}
            onChange={setActiveTab}
            variant="underline"
            size="medium"
          />
        </ComponentDemo>
      </Section>

      {/* Feedback Components */}
      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <SectionTitle variant="h2">Feedback Components</SectionTitle>
        
        <ComponentGrid>
          <ComponentDemo>
            <DemoTitle>Progress Indicators</DemoTitle>
            <DemoContent>
              <ProgressIndicator
                variant="linear"
                value={75}
                label="Project Progress"
                showLabel
                color="primary"
              />
              <ProgressIndicator
                variant="circular"
                value={60}
                size="large"
                color="accent"
                showLabel
              />
              <ProgressIndicator
                variant="dots"
                color="secondary"
                size="medium"
                indeterminate
              />
            </DemoContent>
          </ComponentDemo>

          <ComponentDemo>
            <DemoTitle>Skeleton Loading</DemoTitle>
            <DemoContent>
              <FlexRow>
                <AnimatedButton
                  variant="outline"
                  onClick={handleLoadingDemo}
                >
                  Toggle Loading
                </AnimatedButton>
              </FlexRow>
              <SkeletonGroup loading={loading}>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <div style={{ width: '50px', height: '50px', background: '#f0f0f0', borderRadius: '50%' }} />
                  <div>
                    <div style={{ width: '200px', height: '20px', background: '#f0f0f0', marginBottom: '8px' }} />
                    <div style={{ width: '150px', height: '16px', background: '#f0f0f0' }} />
                  </div>
                </div>
              </SkeletonGroup>
              {loading && (
                <div>
                  <SkeletonCard
                    avatar
                    title
                    subtitle
                    content={3}
                    actions
                    animation="wave"
                  />
                </div>
              )}
            </DemoContent>
          </ComponentDemo>

          <ComponentDemo>
            <DemoTitle>Modal & Tooltip</DemoTitle>
            <DemoContent>
              <FlexRow>
                <AnimatedButton
                  variant="primary"
                  onClick={() => setModalOpen(true)}
                >
                  Open Modal
                </AnimatedButton>
                
                <Tooltip content="This is a helpful tooltip!" placement="top">
                  <AnimatedButton variant="outline">
                    Hover for Tooltip
                  </AnimatedButton>
                </Tooltip>
              </FlexRow>
              
              <Modal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                title="Demo Modal"
                size="medium"
              >
                <Typography style={{ marginBottom: '20px' }}>
                  This is a demo modal showcasing the modal component with various features.
                </Typography>
                <FlexRow>
                  <AnimatedButton
                    variant="primary"
                    onClick={() => setModalOpen(false)}
                  >
                    Confirm
                  </AnimatedButton>
                  <AnimatedButton
                    variant="outline"
                    onClick={() => setModalOpen(false)}
                  >
                    Cancel
                  </AnimatedButton>
                </FlexRow>
              </Modal>
            </DemoContent>
          </ComponentDemo>
        </ComponentGrid>
      </Section>

      {/* Navigation Components */}
      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <SectionTitle variant="h2">Navigation Components</SectionTitle>
        
        <ComponentGrid>
          <ComponentDemo>
            <DemoTitle>Pagination</DemoTitle>
            <DemoContent>
              <Pagination
                currentPage={currentPage}
                totalPages={10}
                onPageChange={setCurrentPage}
                variant="default"
                size="medium"
                showPageInfo
              />
              <Pagination
                currentPage={currentPage}
                totalPages={15}
                onPageChange={setCurrentPage}
                variant="pills"
                size="small"
                color="accent"
              />
            </DemoContent>
          </ComponentDemo>
        </ComponentGrid>

        <ComponentDemo>
          <DemoTitle>Accordion</DemoTitle>
          <Accordion
            items={accordionItems}
            variant="bordered"
            size="medium"
            allowMultiple
          />
        </ComponentDemo>
      </Section>

      {/* Display Components */}
      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <SectionTitle variant="h2">Display Components</SectionTitle>
        
        <ComponentGrid>
          <ComponentDemo>
            <DemoTitle>Badges</DemoTitle>
            <DemoContent>
              <FlexRow>
                <Badge variant="primary">Primary</Badge>
                <Badge variant="success" pulse>Success</Badge>
                <Badge variant="warning" size="large">Warning</Badge>
                <Badge variant="error" shape="rounded">Error</Badge>
                <Badge variant="gradient" glow>Gradient</Badge>
              </FlexRow>
              <FlexRow>
                <Badge variant="info" icon="energy">With Icon</Badge>
                <Badge variant="neutral" dot>Dot Badge</Badge>
                <Badge variant="accent" removable onRemove={() => {}}>Removable</Badge>
              </FlexRow>
            </DemoContent>
          </ComponentDemo>

          <ComponentDemo>
            <DemoTitle>Gradient Cards</DemoTitle>
            <DemoContent>
              <div style={{ display: 'grid', gap: '15px' }}>
                <GradientCard
                  variant="primary"
                  size="medium"
                  hover
                  padding="medium"
                >
                  <Typography variant="h4" style={{ marginBottom: '10px' }}>Primary Card</Typography>
                  <Typography>This is a gradient card with primary styling.</Typography>
                </GradientCard>
                
                <GradientCard
              variant="glass"
              size="medium"
              hover
              glow
              padding="medium"
            >
                  <Typography variant="h4" style={{ marginBottom: '10px' }}>Glass Card</Typography>
                  <Typography>This is a glass morphism card with glow effect.</Typography>
                </GradientCard>
              </div>
            </DemoContent>
          </ComponentDemo>
        </ComponentGrid>
      </Section>

      {/* Action Components */}
      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <SectionTitle variant="h2">Action Components</SectionTitle>
        
        <ComponentGrid>
          <ComponentDemo>
            <DemoTitle>Animated Buttons</DemoTitle>
            <DemoContent>
              <FlexRow>
                <AnimatedButton variant="primary" size="medium">
                  Primary Button
                </AnimatedButton>
                <AnimatedButton variant="secondary" size="medium">
                  Secondary
                </AnimatedButton>
                <AnimatedButton variant="accent" size="medium">
                  Accent
                </AnimatedButton>
              </FlexRow>
              <FlexRow>
                <AnimatedButton variant="outline" size="large" icon="energy">
                  With Icon
                </AnimatedButton>
                <AnimatedButton variant="ghost" size="small" loading>
                  Loading
                </AnimatedButton>
                <AnimatedButton variant="gradient" size="medium" glow>
                  Gradient
                </AnimatedButton>
              </FlexRow>
            </DemoContent>
          </ComponentDemo>

          <ComponentDemo>
            <DemoTitle>Floating Action Button</DemoTitle>
            <DemoContent>
              <FlexRow>
                <FloatingActionButton
                  icon="energy"
                  onClick={() => alert('FAB clicked!')}
                  variant="primary"
                  size="medium"
                  tooltip="Energy Settings"
                />
                <FloatingActionButton
                  icon="contact"
                  onClick={() => alert('Contact clicked!')}
                  variant="secondary"
                  size="large"
                  tooltip="Contact Us"
                  animate
                />
              </FlexRow>
            </DemoContent>
          </ComponentDemo>
        </ComponentGrid>
      </Section>
    </ShowcaseContainer>
  );
};

export default UIShowcase;