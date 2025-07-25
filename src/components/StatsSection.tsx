import React from 'react';
import styled from 'styled-components';
import { ScrollReveal, AnimatedCounter, Grid, Typography, Container } from './ui';

// Define the interface for stat items
interface StatItem {
  value: number;
  suffix: string;
  prefix?: string;
  decimals?: number;
  label: string;
  description: string;
}

// Reduced padding and more compact design
const StatsContainer = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.accent} 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
    opacity: 0.3;
  }
`;

const StatsContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1400px;
  margin: 0 auto;
`;

// More compact header with reduced margins
import SectionHeader from './shared/SectionHeader';

// Improved stat card design
const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: 1.75rem 1.25rem;
  text-align: center;
  height: 100%;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const StatValue = styled.div`
  font-size: 2.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.highlight};
  margin-bottom: 0.5rem;
  line-height: 1;
`;

const StatLabel = styled(Typography)`
  color: white;
  font-weight: 500;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`;

const StatDescription = styled(Typography)`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.85rem;
`;

const StatsSection: React.FC = () => {
  // Reduced number of stats to show
  const stats: StatItem[] = [
    {
      value: 500,
      suffix: '+',
      label: 'Projects Completed',
      description: 'Successful electrical engineering projects across Africa'
    },
    {
      value: 1500,
      suffix: 'MW',
      label: 'Renewable Capacity',
      description: 'Clean energy installations powering communities'
    },
    {
      value: 25,
      prefix: '$',
      suffix: 'M',
      label: 'Annual Savings',
      description: 'Cost savings delivered to our clients'
    },
    {
      value: 1,
      suffix: '',
      label: 'Level 1 B-BBEE',
      description: 'Proudly black-owned consulting engineering firm'
    }
  ];

  return (
    <StatsContainer>
      <StatsContent>
        <ScrollReveal>
          <SectionHeader
            title="Delivering Excellence Across Africa"
            description="Our track record of world-class engineering solutions speaks for itself."
            align="center"
          />
        </ScrollReveal>

        <Grid.Container columns={4} gap="md">
          {stats.map((stat, index) => (
            <Grid.Item key={index} xs={6} sm={6} md={3}>
              <ScrollReveal direction="up" delay={index * 0.1}>
                <StatCard>
                  <StatValue>
                    <AnimatedCounter
                      end={stat.value}
                      decimals={stat.decimals || 0}
                      prefix={stat.prefix || ''}
                      suffix={stat.suffix || ''}
                      duration={2000}
                    />
                  </StatValue>
                  <StatLabel variant="h6">
                    {stat.label}
                  </StatLabel>
                  <StatDescription variant="body2">
                    {stat.description}
                  </StatDescription>
                </StatCard>
              </ScrollReveal>
            </Grid.Item>
          ))}
        </Grid.Container>
      </StatsContent>
    </StatsContainer>
  );
};

export default StatsSection;