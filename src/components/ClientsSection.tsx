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

const clients: Client[] = [
  { name: 'Siemens AG', logo: 'https://www.efla-engineers.com/_next/image?url=https%3A%2F%2Fprismic-io.s3.amazonaws.com%2Fefla-main-storage%2F3a0c18b1-b056-4066-b789-a19e003611d3_landsnet.svg&w=384&q=75' },
  { name: 'Schneider Electric', logo: 'https://www.efla-engineers.com/_next/image?url=https%3A%2F%2Fprismic-io.s3.amazonaws.com%2Fefla-main-storage%2F94abe0cb-cc9e-4753-9e05-a1bd981ad52f_energinet.svg&w=384&q=75' },
  { name: 'African Development Bank', logo: 'https://www.efla-engineers.com/_next/image?url=https%3A%2F%2Fprismic-io.s3.amazonaws.com%2Fefla-main-storage%2F75d7da30-0cab-4bf7-b6d9-8c9824cb8f3e_omexom.svg&w=384&q=75' },
  { name: 'Engineering Council of South Africa', logo: 'https://www.efla-engineers.com/_next/image?url=https%3A%2F%2Fprismic-io.s3.amazonaws.com%2Fefla-main-storage%2Fimage-aed405be97a3.svg&w=384&q=75' },
  { name: 'Kenya Power', logo: 'https://www.efla-engineers.com/_next/image?url=https%3A%2F%2Fprismic-io.s3.amazonaws.com%2Fefla-main-storage%2Fde900be8-8e31-4a7c-a91c-c6b51cfed8d5_emera.svg&w=384&q=75' },
  { name: 'Ghana Health Service', logo: 'https://www.efla-engineers.com/_next/image?url=https%3A%2F%2Fprismic-io.s3.amazonaws.com%2Fefla-main-storage%2Fimage-387cb94cdb2d38.svg&w=384&q=75' },
  { name: 'Nigeria Electricity Regulatory Commission', logo: 'https://www.efla-engineers.com/_next/image?url=https%3A%2F%2Fprismic-io.s3.amazonaws.com%2Fefla-main-storage%2Fimage-c9316e157565a8.svg&w=384&q=75' },
];

const ClientsSection: React.FC = () => {
  return (
    <ClientsContainer>
      <AutoScrollCarousel clients={clients} />
    </ClientsContainer>
  );
};

export default ClientsSection;