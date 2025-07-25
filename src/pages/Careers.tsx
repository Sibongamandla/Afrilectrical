import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Icon } from '../components/ui';
import SectionHeader from '../components/shared/SectionHeader';

const PageContainer = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const PageHeader = styled.header`
  text-align: center;
  padding: 8rem 0 4rem;
`;

const PageTitle = styled.h1`
  font-size: ${props => props.theme.typography.fontSize.display};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.theme.colors.heading};
  margin-bottom: 1rem;
`;

const PageDescription = styled.p`
  font-size: ${props => props.theme.typography.fontSize.lg};
  color: ${props => props.theme.colors.textSecondary};
  max-width: 600px;
  margin: 0 auto;
  line-height: ${props => props.theme.typography.lineHeight.relaxed};
`;

const Section = styled.section`
  padding: 4rem 0;
`;

const JobsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 3rem;
`;

const JobCard = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }
`;

const JobHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const JobInfo = styled.div`
  flex: 1;
`;

const JobTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1a1a1a;
`;

const JobMeta = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const JobMetaItem = styled.div`
  font-size: 0.9rem;
  color: #666;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const JobDescription = styled.p`
  font-size: 1rem;
  color: #444;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ApplyButton = styled.button`
  background-color: #e31e24;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #c41a1f;
  }
`;

const BenefitsSection = styled.div`
  background-color: white;
  padding: 4rem 0;
  margin: 4rem 0;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const BenefitCard = styled.div`
  text-align: center;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }
`;

const BenefitIcon = styled.div`
  font-size: 2.5rem;
  color: #e31e24;
  margin-bottom: 1rem;
`;

const BenefitTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
  color: #1a1a1a;
`;

const BenefitDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
`;

const CTASection = styled.div`
  background-color: #1a1a1a;
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  margin-top: 4rem;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const CTADescription = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto 2rem;
  line-height: 1.6;
  color: #ccc;
`;

const CTAButton = styled.button`
  background-color: #e31e24;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #c41a1f;
  }
`;

// Sample job data
const jobs = [
  {
    id: 1,
    title: 'Senior Electrical Engineer',
    location: 'Johannesburg, South Africa',
    type: 'Full-time',
    salary: 'R60,000 - R80,000 per month',
    description: 'We are looking for a Senior Electrical Engineer to join our team in Johannesburg. The ideal candidate will have extensive experience in designing electrical systems for commercial and industrial buildings, with a focus on energy efficiency and sustainability.',
  },
  {
    id: 2,
    title: 'Project Manager',
    location: 'Cape Town, South Africa',
    type: 'Full-time',
    salary: 'R50,000 - R70,000 per month',
    description: 'We are seeking an experienced Project Manager to oversee our electrical engineering projects in the Western Cape region. The successful candidate will be responsible for project planning, resource allocation, client communication, and ensuring timely delivery of projects.',
  },
  {
    id: 3,
    title: 'Renewable Energy Specialist',
    location: 'Durban, South Africa',
    type: 'Full-time',
    salary: 'R45,000 - R65,000 per month',
    description: 'Join our growing renewable energy team in Durban. We are looking for a specialist with experience in solar PV system design, wind energy, and energy storage solutions. The ideal candidate will have a passion for sustainable energy and a track record of successful renewable energy projects.',
  },
  {
    id: 4,
    title: 'Junior Electrical Engineer',
    location: 'Pretoria, South Africa',
    type: 'Full-time',
    salary: 'R25,000 - R35,000 per month',
    description: 'We have an exciting opportunity for a Junior Electrical Engineer to join our team in Pretoria. This role is perfect for recent graduates with a degree in Electrical Engineering who are looking to gain hands-on experience in a dynamic and supportive environment.',
  },
];

// Sample benefits data
const benefits = [
  {
    id: 1,
    icon: <Icon name="leaf" size={24} />,
    title: 'Professional Growth',
    description: 'Continuous learning opportunities, mentorship programs, and career advancement paths.',
  },
  {
    id: 2,
    icon: '🏥',
    title: 'Comprehensive Healthcare',
    description: 'Full medical aid coverage for you and your family, including dental and vision care.',
  },
  {
    id: 3,
    icon: <Icon name="dollar" size={24} />,
    title: 'Competitive Compensation',
    description: 'Above-market salaries, performance bonuses, and profit-sharing opportunities.',
  },
  {
    id: 4,
    icon: '⏰',
    title: 'Work-Life Balance',
    description: 'Flexible working hours, remote work options, and generous paid time off.',
  },
  {
    id: 5,
    icon: <Icon name="graduation-cap" size={24} />,
    title: 'Education Support',
    description: 'Tuition reimbursement for relevant courses and certifications.',
  },
  {
    id: 6,
    icon: 'globe',
    title: 'Global Opportunities',
    description: 'Chances to work on international projects and potential relocation opportunities.',
  },
];

const Careers: React.FC = () => {
  // Auto-scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageContainer>
      <ContentContainer>
        <PageHeader>
          <PageTitle>Join Our Team</PageTitle>
          <PageDescription>
            Build your career with us and be part of transforming Africa's electrical infrastructure
          </PageDescription>
        </PageHeader>

        <Section>
          <SectionHeader title="Current Openings" />
          <JobsGrid>
            {jobs.map((job) => (
              <JobCard key={job.id}>
                <JobHeader>
                  <JobInfo>
                    <JobTitle>{job.title}</JobTitle>
                    <JobMeta>
                      <JobMetaItem><Icon name="map-pin" size={16} /> {job.location}</JobMetaItem>
                      <JobMetaItem><Icon name="clock" size={16} /> {job.type}</JobMetaItem>
                <JobMetaItem><Icon name="dollar" size={16} /> {job.salary}</JobMetaItem>
                    </JobMeta>
                  </JobInfo>
                  <ApplyButton>Apply Now</ApplyButton>
                </JobHeader>
                <JobDescription>{job.description}</JobDescription>
              </JobCard>
            ))}
          </JobsGrid>
        </Section>

        <BenefitsSection>
          <SectionHeader title="Why Work With Us" />
          <BenefitsGrid>
            {benefits.map((benefit) => (
              <BenefitCard key={benefit.id}>
                <BenefitIcon>{benefit.icon}</BenefitIcon>
                <BenefitTitle>{benefit.title}</BenefitTitle>
                <BenefitDescription>{benefit.description}</BenefitDescription>
              </BenefitCard>
            ))}
          </BenefitsGrid>
        </BenefitsSection>

        <CTASection>
          <CTATitle>Don't See the Right Fit?</CTATitle>
          <CTADescription>
            We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
          </CTADescription>
          <CTAButton>Submit Your Resume</CTAButton>
        </CTASection>
      </ContentContainer>
    </PageContainer>
  );
};

export default Careers;