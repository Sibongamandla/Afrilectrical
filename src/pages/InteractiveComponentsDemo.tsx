import React, { useEffect } from 'react';
import styled from 'styled-components';
import { 
  Button, 
  Container, 
  Grid, 
  Typography, 
  ServiceCard,
  ProjectGallery,
  TechSpecs,
  SpecsComparison,
  Icon,
  AnimatedButton
} from '../components/ui';

const DemoSection = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  padding-bottom: ${({ theme }) => theme.spacing.xl};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const InteractiveComponentsDemo: React.FC = () => {
  // Auto-scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sample data for ServiceCard
  const services = [
    {
      title: 'Renewable Energy',
      description: 'Sustainable power solutions including solar, wind, and hydroelectric installations.',
      icon: <Icon name="sun" />,
      features: [
        'Solar PV installations',
        'Wind turbine systems',
        'Hydroelectric solutions',
        'Energy storage integration',
        'Microgrid design'
      ]
    },
    {
      title: 'Industrial Automation',
      description: 'Smart factory solutions with advanced control systems and IoT integration.',
      icon: <Icon name="factory" />,
      features: [
        'SCADA systems',
        'PLC programming',
        'IoT sensor networks',
        'Process optimization',
        'Predictive maintenance'
      ]
    },
    {
      title: 'Power Distribution',
      description: 'Reliable electrical infrastructure for commercial and industrial applications.',
      icon: <Icon name="lightning" />,
      features: [
        'Substation design',
        'Transmission systems',
        'Smart grid solutions',
        'Load management',
        'Power quality analysis'
      ]
    }
  ];

  // Sample data for ProjectGallery
  const projects = [
    {
      id: 1,
      title: 'Zambia Solar Farm',
      description: '80MW photovoltaic plant powering 120,000 homes with AI-driven maintenance drones and waterless panel cleaning technology.',
      imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      tags: ['Renewable Energy', 'Solar', 'Zambia'],
      location: 'Lusaka, Zambia',
      year: '2023',
      details: {
        client: 'Zambia Power Authority',
        scope: 'Design, Installation, Maintenance',
        value: '$120 Million',
        duration: '18 months'
      }
    },
    {
      id: 2,
      title: 'Nairobi Grid Modernization',
      description: 'Smart metering rollout for 500,000+ consumers with 25% reduced transmission losses and 24/7 outage monitoring capabilities.',
      imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      tags: ['Smart Grid', 'Transmission', 'Kenya'],
      location: 'Nairobi, Kenya',
      year: '2024',
      details: {
        client: 'Kenya Power & Lighting',
        scope: 'System Design, Implementation',
        value: '$85 Million',
        duration: '24 months'
      }
    },
    {
      id: 3,
      title: 'Ghana Hospital Electrification',
      description: 'Solar-hybrid systems for 12 rural health facilities providing 99.9% uptime and reliable power that saves 200+ lives monthly.',
      imageUrl: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      tags: ['Healthcare', 'Hybrid Systems', 'Ghana'],
      location: 'Accra, Ghana',
      year: '2022',
      details: {
        client: 'Ghana Health Service',
        scope: 'Design, Installation, Training',
        value: '$12 Million',
        duration: '12 months'
      }
    },
    {
      id: 4,
      title: 'Lagos Industrial Automation',
      description: 'Factory automation system with IoT sensors and predictive maintenance for a major manufacturing plant.',
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      tags: ['Industrial', 'Automation', 'Nigeria'],
      location: 'Lagos, Nigeria',
      year: '2023',
      details: {
        client: 'Nigerian Manufacturing Group',
        scope: 'System Design, Implementation, Training',
        value: '$18 Million',
        duration: '14 months'
      }
    }
  ];

  // Sample data for TechSpecs
  const specs = [
    {
      id: 1,
      title: 'Solar Panel Specifications',
      icon: <Icon name="sun" />,
      content: (
        <div>
          <Typography variant="body2" gutterBottom>
            Our high-efficiency monocrystalline solar panels deliver industry-leading performance with 22% efficiency rating and 25-year warranty.
          </Typography>
          <Typography variant="subtitle2" gutterBottom style={{ marginTop: '16px' }}>
            Key Features:
          </Typography>
          <ul>
            <li>Power output: 400-450W per panel</li>
            <li>Temperature coefficient: -0.35% per °C</li>
            <li>Anti-reflective coating for improved light absorption</li>
            <li>Withstands wind loads up to 2400 Pa and snow loads up to 5400 Pa</li>
          </ul>
        </div>
      )
    },
    {
      id: 2,
      title: 'Inverter Technology',
      icon: <Icon name="refresh" />,
      content: (
        <div>
          <Typography variant="body2" gutterBottom>
            Our smart inverters feature 98.2% efficiency with advanced grid integration capabilities and built-in monitoring.
          </Typography>
          <Typography variant="subtitle2" gutterBottom style={{ marginTop: '16px' }}>
            Technical Details:
          </Typography>
          <ul>
            <li>Power range: 3kW to 100kW</li>
            <li>MPPT efficiency: 99.5%</li>
            <li>Integrated DC disconnect</li>
            <li>Remote monitoring and control via mobile app</li>
            <li>Compliant with all grid codes and standards</li>
          </ul>
        </div>
      )
    },
    {
      id: 3,
      title: 'Battery Storage Systems',
      icon: <Icon name="battery" />,
      content: (
        <div>
          <Typography variant="body2" gutterBottom>
            Our lithium-ion battery storage solutions provide reliable backup power with 10-year warranty and smart energy management.
          </Typography>
          <SpecsComparison 
            items={[
              {
                title: 'Basic',
                specs: {
                  'Capacity': '10 kWh',
                  'Cycles': '6,000',
                  'Warranty': '10 years',
                  'Smart Controls': true,
                  'Off-grid Operation': false
                }
              },
              {
                title: 'Advanced',
                specs: {
                  'Capacity': '15 kWh',
                  'Cycles': '8,000',
                  'Warranty': '12 years',
                  'Smart Controls': true,
                  'Off-grid Operation': true
                },
                highlight: true
              },
              {
                title: 'Premium',
                specs: {
                  'Capacity': '20 kWh',
                  'Cycles': '10,000',
                  'Warranty': '15 years',
                  'Smart Controls': true,
                  'Off-grid Operation': true
                }
              }
            ]}
          />
        </div>
      )
    }
  ];

  return (
    <Container>
      <Typography variant="h1" gutterBottom>
        Interactive Components
      </Typography>
      <Typography variant="body1" gutterBottom>
        This page demonstrates the interactive UI components created for the Afrilectrical application.
      </Typography>

      {/* ServiceCard Demo */}
      <DemoSection>
        <Typography variant="h2" gutterBottom>
          Service Cards
        </Typography>
        <Typography variant="body1" gutterBottom>
          Interactive service cards with expandable features list.
        </Typography>
        
        <Grid.Container columns={3} gap="md">
          {services.map((service, index) => (
            <Grid.Item key={index} xs={12} sm={6} md={4}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
              />
            </Grid.Item>
          ))}
        </Grid.Container>
      </DemoSection>

      {/* ProjectGallery Demo */}
      <DemoSection>
        <Typography variant="h2" gutterBottom>
          Project Gallery
        </Typography>
        <Typography variant="body1" gutterBottom>
          Interactive project gallery with filtering and modal details.
        </Typography>
        
        <ProjectGallery projects={projects} />
      </DemoSection>

      {/* TechSpecs Demo */}
      <DemoSection>
        <Typography variant="h2" gutterBottom>
          Technical Specifications
        </Typography>
        <Typography variant="body1" gutterBottom>
          Expandable technical specifications with comparison tables.
        </Typography>
        
        <TechSpecs specs={specs} />
      </DemoSection>

      <div style={{ marginTop: '2rem' }}>
        <AnimatedButton 
          variant="primary" 
          size="large" 
          onClick={() => window.history.back()}
        >
          Back to Components
        </AnimatedButton>
      </div>
    </Container>
  );
};

export default InteractiveComponentsDemo;