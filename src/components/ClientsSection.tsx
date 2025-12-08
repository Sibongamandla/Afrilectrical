import React from 'react';
import styled from 'styled-components';
import AutoScrollCarousel from './ui/AutoScrollCarousel';

const ClientsContainer = styled.section`
  width: 100vw; /* Full viewport width */
  margin-left: calc(-50vw + 50%); /* Break out of parent container */
  padding: 0 0 4rem 0;
  background: ${({ theme }) => theme.colors.background || '#f8f9fa'};
  text-align: center;
  overflow: hidden;
`;

// Define interface for client data
interface Client {
  name: string;
  logo: string;
}

// Actual certifications and professional bodies AFRILECTRICAL is registered with
const clients: Client[] = [
  {
    name: 'Engineering Council of South Africa (ECSA)',
    logo: 'https://ecsa.co.za/wp-content/uploads/2020/02/Web-ECSA-Logo-sml-1.png'
  },
  {
    name: 'South African Institute of Electrical Engineers (SAIEE)',
    logo: 'https://saiee-cdn-cdhwb0c5edc2bveb.a02.azurefd.net/wm-418498-cmsimages/SAIEE-with-Description.JPG'
  },
  {
    name: 'Consulting Engineers South Africa (CESA)',
    logo: 'https://www.cesa.co.za/wp-content/uploads/2024/02/CESA-Logo-png-300x115.png'
  },
  {
    name: 'BBBEE Level 1 Contributor',
    logo: 'https://lukhozi.co.za/wp-content/uploads/2019/01/BBBEE-LOGO.png'
  },
];

const ClientsSection: React.FC = () => {
  return (
    <ClientsContainer>
      <AutoScrollCarousel
        clients={clients}
        title="Professional Registrations & Certifications"
        subtitle="AFRILECTRICAL is registered with South Africa's leading engineering professional bodies and maintains the highest industry standards."
      />
    </ClientsContainer>
  );
};

export default ClientsSection;