import React, { useEffect } from 'react';
import styled from 'styled-components';
import {
  Container,
  Typography,
  Button,
  Grid,
  ScrollReveal,
  ParallaxImage,
  AnimatedCounter,
  TabsContainer,
  Carousel
} from '../components/ui';

const DemoSection = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  padding-bottom: ${({ theme }) => theme.spacing.xl};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const CounterCard = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  text-align: center;
  height: 100%;
`;

const CounterValue = styled(Typography)`
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const CarouselSlide = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

const InteractiveFeatures: React.FC = () => {
  // Auto-scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sample data for tabs
  const tabs = [
    {
      id: 'renewable',
      label: 'Renewable Energy',
      icon: "sun",
      content: (
        <div>
          <Typography variant="h3" gutterBottom>Renewable Energy Solutions</Typography>
          <Typography variant="body1" gutterBottom>
            Our renewable energy solutions include solar, wind, and hydroelectric installations
            designed for maximum efficiency and sustainability.
          </Typography>
          <ParallaxImage
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276"
            alt="Solar farm"
            height="300px"
            style={{ marginTop: '20px', marginBottom: '20px' }}
            overlayColor="#e31e24"
            overlayOpacity={0.2}
            shadowIntensity="strong"
            borderRadius="12px"
          />
          <Typography variant="body2">
            We've installed over 500MW of renewable capacity across Africa, helping communities
            achieve energy independence while reducing carbon emissions.
          </Typography>
        </div>
      )
    },
    {
      id: 'industrial',
      label: 'Industrial Automation',
      icon: "factory",
      content: (
        <div>
          <Typography variant="h3" gutterBottom>Industrial Automation</Typography>
          <Typography variant="body1" gutterBottom>
            Our industrial automation solutions help factories optimize production, reduce waste,
            and improve safety through advanced control systems.
          </Typography>
          <ParallaxImage
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
            alt="Factory automation"
            height="300px"
            style={{ marginTop: '20px', marginBottom: '20px' }}
            overlayColor="#1e88e5"
            overlayOpacity={0.3}
            shadowIntensity="strong"
            borderRadius="12px"
          />
          <Typography variant="body2">
            With IoT sensors and predictive maintenance, we've helped industrial clients
            achieve up to 35% improvement in operational efficiency.
          </Typography>
        </div>
      )
    },
    {
      id: 'smart-grid',
      label: 'Smart Grid',
      icon: "zap",
      content: (
        <div>
          <Typography variant="h3" gutterBottom>Smart Grid Technology</Typography>
          <Typography variant="body1" gutterBottom>
            Our smart grid solutions modernize electrical infrastructure with advanced monitoring,
            control, and self-healing capabilities.
          </Typography>
          <ParallaxImage
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e"
            alt="Smart grid"
            height="300px"
            style={{ marginTop: '20px', marginBottom: '20px' }}
            overlayColor="#388e3c"
            overlayOpacity={0.25}
            shadowIntensity="strong"
            borderRadius="12px"
          />
          <Typography variant="body2">
            Smart grid implementations have reduced transmission losses by 25% and improved
            reliability with 99.9% uptime for critical infrastructure.
          </Typography>
        </div>
      )
    }
  ];

  // Sample data for carousel
  const carouselItems = [
    <CarouselSlide key="slide1">
      <Typography variant="h3" gutterBottom>Zambia Solar Farm</Typography>
      <Typography variant="body1">
        80MW photovoltaic plant powering 120,000 homes with AI-driven maintenance
        drones and waterless panel cleaning technology.
      </Typography>
      <div style={{ marginTop: '20px' }}>
        <Button variant="primary">
          View Project
        </Button>
      </div>
    </CarouselSlide>,
    <CarouselSlide key="slide2">
      <Typography variant="h3" gutterBottom>Nairobi Grid Modernization</Typography>
      <Typography variant="body1">
        Smart metering rollout for 500,000+ consumers with 25% reduced transmission
        losses and 24/7 outage monitoring capabilities.
      </Typography>
      <div style={{ marginTop: '20px' }}>
        <Button variant="primary">
          View Project
        </Button>
      </div>
    </CarouselSlide>,
    <CarouselSlide key="slide3">
      <Typography variant="h3" gutterBottom>Ghana Hospital Electrification</Typography>
      <Typography variant="body1">
        Solar-hybrid systems for 12 rural health facilities providing 99.9% uptime
        and reliable power that saves 200+ lives monthly.
      </Typography>
      <div style={{ marginTop: '20px' }}>
        <Button variant="primary">
          View Project
        </Button>
      </div>
    </CarouselSlide>
  ];

  return (
    <Container>
      <ScrollReveal cascade>
        <Typography variant="h1" gutterBottom>
          Interactive Features
        </Typography>
        <Typography variant="body1" gutterBottom>
          This page demonstrates the new interactive UI components created for the Afrilectrical application.
        </Typography>
      </ScrollReveal>

      {/* ScrollReveal Demo */}
      <DemoSection>
        <ScrollReveal staggerChildren delay={0.1}>
          <Typography variant="h2" gutterBottom>
            Scroll Reveal Animations
          </Typography>
          <Typography variant="body1" gutterBottom>
            Elements that animate into view as you scroll down the page.
          </Typography>
        </ScrollReveal>

        <Grid.Container columns={3} gap="md">
          <Grid.Item xs={12} sm={6} md={4}>
            <ScrollReveal direction="left" delay={0.1}>
              <CounterCard>
                <Typography variant="h3" gutterBottom>From Left</Typography>
                <Typography variant="body2">
                  This element animates from the left side of the screen.
                </Typography>
              </CounterCard>
            </ScrollReveal>
          </Grid.Item>
          <Grid.Item xs={12} sm={6} md={4}>
            <ScrollReveal direction="up" delay={0.2}>
              <CounterCard>
                <Typography variant="h3" gutterBottom>From Bottom</Typography>
                <Typography variant="body2">
                  This element animates from the bottom of the screen.
                </Typography>
              </CounterCard>
            </ScrollReveal>
          </Grid.Item>
          <Grid.Item xs={12} sm={6} md={4}>
            <ScrollReveal direction="right" delay={0.3}>
              <CounterCard>
                <Typography variant="h3" gutterBottom>From Right</Typography>
                <Typography variant="body2">
                  This element animates from the right side of the screen.
                </Typography>
              </CounterCard>
            </ScrollReveal>
          </Grid.Item>
        </Grid.Container>
      </DemoSection>

      {/* ParallaxImage Demo */}
      <DemoSection>
        <ScrollReveal staggerChildren staggerDelay={0.08}>
          <Typography variant="h2" gutterBottom>
            Parallax Images
          </Typography>
          <Typography variant="body1" gutterBottom>
            Images that move at different speeds as you scroll, creating a depth effect.
          </Typography>
        </ScrollReveal>

        <ParallaxImage
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276"
          alt="Solar farm"
          height="500px"
          speed={0.5}
          overlayColor="#1e88e5"
          overlayOpacity={0.25}
          shadowIntensity="strong"
          borderRadius="16px"
          shadowColor="rgba(30, 136, 229, 0.4)"
        />
      </DemoSection>

      {/* AnimatedCounter Demo */}
      <DemoSection>
        <ScrollReveal staggerChildren>
          <Typography variant="h2" gutterBottom>
            Animated Counters
          </Typography>
          <Typography variant="body1" gutterBottom>
            Numbers that count up when they come into view.
          </Typography>
        </ScrollReveal>

        <Grid.Container columns={4} gap="md">
          <Grid.Item xs={12} sm={6} md={3}>
            <CounterCard>
              <CounterValue as="div">
                <AnimatedCounter end={500} suffix="+" />
              </CounterValue>
              <Typography variant="subtitle1">Projects Completed</Typography>
            </CounterCard>
          </Grid.Item>
          <Grid.Item xs={12} sm={6} md={3}>
            <CounterCard>
              <CounterValue as="div">
                <AnimatedCounter end={1500} suffix="MW" />
              </CounterValue>
              <Typography variant="subtitle1">Renewable Capacity</Typography>
            </CounterCard>
          </Grid.Item>
          <Grid.Item xs={12} sm={6} md={3}>
            <CounterCard>
              <CounterValue as="div">
                <AnimatedCounter end={25} prefix="$" suffix="M" />
              </CounterValue>
              <Typography variant="subtitle1">Annual Savings</Typography>
            </CounterCard>
          </Grid.Item>
          <Grid.Item xs={12} sm={6} md={3}>
            <CounterCard>
              <CounterValue as="div">
                <AnimatedCounter end={99.9} decimals={1} suffix="%" />
              </CounterValue>
              <Typography variant="subtitle1">Uptime Reliability</Typography>
            </CounterCard>
          </Grid.Item>
        </Grid.Container>
      </DemoSection>

      {/* TabsContainer Demo */}
      <DemoSection>
        <ScrollReveal cascade>
          <Typography variant="h2" gutterBottom>
            Interactive Tabs
          </Typography>
          <Typography variant="body1" gutterBottom>
            Tabbed content with smooth transitions between sections.
          </Typography>
        </ScrollReveal>

        <TabsContainer tabs={tabs} />

        <div style={{ marginTop: '40px' }}>
          <Typography variant="h3" gutterBottom>Vertical Tabs</Typography>
          <TabsContainer tabs={tabs} orientation="vertical" />
        </div>
      </DemoSection>

      {/* Carousel Demo */}
      <DemoSection>
        <ScrollReveal staggerChildren staggerDelay={0.1}>
          <Typography variant="h2" gutterBottom>
            Interactive Carousel
          </Typography>
          <Typography variant="body1" gutterBottom>
            Slideshow with touch/swipe support and animated transitions.
          </Typography>
        </ScrollReveal>

        <Carousel items={carouselItems} />
      </DemoSection>

      <ScrollReveal direction="up" delay={0.2}>
        <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
          <Button 
            variant="primary" 
            size="large" 
            onClick={() => window.history.back()}
          >
            Back to Home
          </Button>
        </div>
      </ScrollReveal>
    </Container>
  );
};

export default InteractiveFeatures;