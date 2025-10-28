import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  Card,
  Container,
  Form,
  Grid,
  Typography,
  AnimatedButton
} from '../components/ui';

const DemoSection = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  padding-bottom: ${({ theme }) => theme.spacing.xl};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const ColorSwatch = styled.div<{ color: string }>`
  width: 100%;
  height: 80px;
  background-color: ${({ color }) => color};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ComponentsDemo: React.FC = () => {
  // Auto-scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
    country: '',
    subscribe: false,
    preference: 'email'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    setFormValues(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <Container>
      <Typography variant="h1" gutterBottom>
        UI Components Demo
      </Typography>
      <Typography variant="body1" gutterBottom>
        This page demonstrates the UI components created for the Afrilectrical application.
      </Typography>
      
      <div style={{ marginBottom: '2rem' }}>
        <AnimatedButton 
          variant="primary" 
          onClick={() => window.location.href = '/interactive-components'}
        >
          View Interactive Components Demo
        </AnimatedButton>
      </div>

      {/* Typography Demo */}
      <DemoSection>
        <Typography variant="h2" gutterBottom>
          Typography
        </Typography>
        
        <Typography variant="h1" gutterBottom>Heading 1</Typography>
        <Typography variant="h2" gutterBottom>Heading 2</Typography>
        <Typography variant="h3" gutterBottom>Heading 3</Typography>
        <Typography variant="h4" gutterBottom>Heading 4</Typography>
        <Typography variant="h5" gutterBottom>Heading 5</Typography>
        <Typography variant="h6" gutterBottom>Heading 6</Typography>
        <Typography variant="subtitle1" gutterBottom>Subtitle 1</Typography>
        <Typography variant="subtitle2" gutterBottom>Subtitle 2</Typography>
        <Typography variant="body1" gutterBottom>
          Body 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.
          Vivamus hendrerit arcu sed erat molestie vehicula.
        </Typography>
        <Typography variant="body2" gutterBottom>
          Body 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.
          Vivamus hendrerit arcu sed erat molestie vehicula.
        </Typography>
        <Typography variant="button" gutterBottom>Button Text</Typography>
        <Typography variant="caption" gutterBottom>Caption Text</Typography>
        <Typography variant="overline" gutterBottom>Overline Text</Typography>
      </DemoSection>

      {/* Colors Demo */}
      <DemoSection>
        <Typography variant="h2" gutterBottom>
          Colors
        </Typography>
        
        <Grid.Container columns={4} gap="md">
          <Grid.Item xs={12} sm={6} md={3}>
            <Card padding>
              <ColorSwatch color="#0056b3" />
              <Typography variant="subtitle1">Primary</Typography>
              <Typography variant="body2">#0056b3</Typography>
            </Card>
          </Grid.Item>
          <Grid.Item xs={12} sm={6} md={3}>
            <Card padding>
              <ColorSwatch color="#28a745" />
              <Typography variant="subtitle1">Success</Typography>
              <Typography variant="body2">#28a745</Typography>
            </Card>
          </Grid.Item>
          <Grid.Item xs={12} sm={6} md={3}>
            <Card padding>
              <ColorSwatch color="#dc3545" />
              <Typography variant="subtitle1">Error</Typography>
              <Typography variant="body2">#dc3545</Typography>
            </Card>
          </Grid.Item>
          <Grid.Item xs={12} sm={6} md={3}>
            <Card padding>
              <ColorSwatch color="#ffc107" />
              <Typography variant="subtitle1">Warning</Typography>
              <Typography variant="body2">#ffc107</Typography>
            </Card>
          </Grid.Item>
        </Grid.Container>
      </DemoSection>

      {/* Buttons Demo */}
      <DemoSection>
        <Typography variant="h2" gutterBottom>
          Buttons
        </Typography>
        
        <Grid.Container gap="md">
          <Grid.Item xs={12} sm={6} md={3}>
            <AnimatedButton variant="primary">Primary</AnimatedButton>
          </Grid.Item>
          <Grid.Item xs={12} sm={6} md={3}>
            <AnimatedButton variant="secondary">Secondary</AnimatedButton>
          </Grid.Item>
          <Grid.Item xs={12} sm={6} md={3}>
            <AnimatedButton variant="outline">Outline</AnimatedButton>
          </Grid.Item>
          <Grid.Item xs={12} sm={6} md={3}>
            <AnimatedButton variant="ghost">Ghost</AnimatedButton>
          </Grid.Item>
        </Grid.Container>
        
        <Typography variant="h4" gutterBottom style={{ marginTop: '20px' }}>
          Button Sizes
        </Typography>
        
        <Grid.Container gap="md" alignItems="center">
          <Grid.Item xs={12} sm={4}>
            <AnimatedButton variant="primary" size="small">Small</AnimatedButton>
          </Grid.Item>
          <Grid.Item xs={12} sm={4}>
            <AnimatedButton variant="primary" size="medium">Medium</AnimatedButton>
          </Grid.Item>
          <Grid.Item xs={12} sm={4}>
            <AnimatedButton variant="primary" size="large">Large</AnimatedButton>
          </Grid.Item>
        </Grid.Container>
        
        <Typography variant="h4" gutterBottom style={{ marginTop: '20px' }}>
          Full Width Button
        </Typography>
        
        <AnimatedButton variant="primary" fullWidth>Full Width Button</AnimatedButton>
      </DemoSection>

      {/* Cards Demo */}
      <DemoSection>
        <Typography variant="h2" gutterBottom>
          Cards
        </Typography>
        
        <Grid.Container columns={3} gap="md">
          <Grid.Item xs={12} sm={6} md={4}>
            <Card elevation="none" bordered padding>
              <Typography variant="h4" gutterBottom>No Elevation</Typography>
              <Typography variant="body1">
                This card has no elevation but has a border.
              </Typography>
            </Card>
          </Grid.Item>
          <Grid.Item xs={12} sm={6} md={4}>
            <Card elevation="low" padding>
              <Typography variant="h4" gutterBottom>Low Elevation</Typography>
              <Typography variant="body1">
                This card has low elevation shadow.
              </Typography>
            </Card>
          </Grid.Item>
          <Grid.Item xs={12} sm={6} md={4}>
            <Card elevation="medium" padding>
              <Typography variant="h4" gutterBottom>Medium Elevation</Typography>
              <Typography variant="body1">
                This card has medium elevation shadow.
              </Typography>
            </Card>
          </Grid.Item>
          <Grid.Item xs={12}>
            <Card elevation="high" padding>
              <Typography variant="h4" gutterBottom>High Elevation</Typography>
              <Typography variant="body1">
                This card spans the full width and has high elevation shadow.
              </Typography>
              <div style={{ marginTop: '16px' }}>
                <AnimatedButton variant="primary">
                  Call to Action
                </AnimatedButton>
              </div>
            </Card>
          </Grid.Item>
        </Grid.Container>
      </DemoSection>

      {/* Grid Demo */}
      <DemoSection>
        <Typography variant="h2" gutterBottom>
          Grid System
        </Typography>
        
        <Typography variant="h4" gutterBottom>
          Basic Grid
        </Typography>
        
        <Grid.Container columns={12} gap="md">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(num => (
            <Grid.Item key={num} xs={12} sm={6} md={4} lg={3} xl={2}>
              <Card elevation="low" padding style={{ textAlign: 'center' }}>
                <Typography variant="body1">{num}</Typography>
              </Card>
            </Grid.Item>
          ))}
        </Grid.Container>
        
        <Typography variant="h4" gutterBottom style={{ marginTop: '20px' }}>
          Responsive Grid
        </Typography>
        
        <Grid.Container columns={12} gap="md">
          <Grid.Item xs={12} md={6}>
            <Card elevation="low" padding>
              <Typography variant="h5" gutterBottom>xs=12 md=6</Typography>
              <Typography variant="body2">
                This item takes full width on mobile and half width on medium screens and up.
              </Typography>
            </Card>
          </Grid.Item>
          <Grid.Item xs={12} md={6}>
            <Card elevation="low" padding>
              <Typography variant="h5" gutterBottom>xs=12 md=6</Typography>
              <Typography variant="body2">
                This item takes full width on mobile and half width on medium screens and up.
              </Typography>
            </Card>
          </Grid.Item>
          <Grid.Item xs={12} sm={6} md={4}>
            <Card elevation="low" padding>
              <Typography variant="h5" gutterBottom>xs=12 sm=6 md=4</Typography>
              <Typography variant="body2">
                This item has different widths across breakpoints.
              </Typography>
            </Card>
          </Grid.Item>
          <Grid.Item xs={12} sm={6} md={4}>
            <Card elevation="low" padding>
              <Typography variant="h5" gutterBottom>xs=12 sm=6 md=4</Typography>
              <Typography variant="body2">
                This item has different widths across breakpoints.
              </Typography>
            </Card>
          </Grid.Item>
          <Grid.Item xs={12} md={4}>
            <Card elevation="low" padding>
              <Typography variant="h5" gutterBottom>xs=12 md=4</Typography>
              <Typography variant="body2">
                This item has different widths across breakpoints.
              </Typography>
            </Card>
          </Grid.Item>
        </Grid.Container>
      </DemoSection>

      {/* Form Demo */}
      <DemoSection>
        <Typography variant="h2" gutterBottom>
          Form Components
        </Typography>
        
        <Card padding>
          <Form.Group>
            <Typography variant="h4" gutterBottom>Contact Form</Typography>
            
            <Grid.Container columns={12} gap="md">
              <Grid.Item xs={12} md={6}>
                <Form.Input
                  label="Name"
                  name="name"
                  placeholder="Enter your name"
                  value={formValues.name}
                  onChange={handleInputChange}
                  fullWidth
                />
              </Grid.Item>
              <Grid.Item xs={12} md={6}>
                <Form.Input
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  fullWidth
                />
              </Grid.Item>
              <Grid.Item xs={12}>
                <Form.Textarea
                  label="Message"
                  name="message"
                  placeholder="Enter your message"
                  value={formValues.message}
                  onChange={handleInputChange}
                  fullWidth
                />
              </Grid.Item>
              <Grid.Item xs={12} md={6}>
                <Form.Select
                  label="Country"
                  name="country"
                  value={formValues.country}
                  onChange={handleInputChange}
                  options={[
                    { value: '', label: 'Select a country' },
                    { value: 'za', label: 'South Africa' },
                    { value: 'ng', label: 'Nigeria' },
                    { value: 'ke', label: 'Kenya' },
                    { value: 'gh', label: 'Ghana' },
                  ]}
                  fullWidth
                />
              </Grid.Item>
              <Grid.Item xs={12}>
                <Form.Checkbox
                  label="Subscribe to newsletter"
                  name="subscribe"
                  checked={formValues.subscribe}
                  onChange={handleInputChange}
                />
              </Grid.Item>
              <Grid.Item xs={12}>
                <Typography variant="subtitle2" gutterBottom>Contact Preference</Typography>
                <Form.Radio
                  label="Email"
                  name="preference"
                  value="email"
                  checked={formValues.preference === 'email'}
                  onChange={handleInputChange}
                />
                <Form.Radio
                  label="Phone"
                  name="preference"
                  value="phone"
                  checked={formValues.preference === 'phone'}
                  onChange={handleInputChange}
                />
              </Grid.Item>
              <Grid.Item xs={12}>
                <span style={{ marginRight: '8px' }}>
                  <AnimatedButton variant="primary">
                    Submit
                  </AnimatedButton>
                </span>
                <AnimatedButton variant="outline">
                  Cancel
                </AnimatedButton>
              </Grid.Item>
            </Grid.Container>
          </Form.Group>
        </Card>
      </DemoSection>
    </Container>
  );
};

export default ComponentsDemo;