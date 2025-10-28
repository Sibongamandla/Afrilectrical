import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Icon } from '../components/ui';

const PageContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  padding-top: 80px;
`;

const Header = styled.section`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.secondary} 100%);
  color: white;
  padding: 80px 0 60px;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 ${({ theme }) => theme.spacing.lg};
  }
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  letter-spacing: -0.02em;
`;

const Subtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  opacity: 0.95;
  max-width: 700px;
  margin: 0 auto ${({ theme }) => theme.spacing.xl};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`;

const ContentSection = styled.section`
  padding: 60px 0;
`;

const DownloadButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  text-decoration: none;
  transition: all ${({ theme }) => theme.transitions.base};
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(227, 30, 36, 0.2);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const PDFViewerContainer = styled.div`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const PDFViewer = styled.iframe`
  width: 100%;
  height: 800px;
  border: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 600px;
  }
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: ${({ theme }) => theme.colors.error};

  p {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
`;

const InfoBox = styled(motion.div)`
  background: ${({ theme }) => theme.colors.backgroundSoft};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  h3 {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    color: ${({ theme }) => theme.colors.heading};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  p {
    color: ${({ theme }) => theme.colors.text};
    line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      padding: ${({ theme }) => theme.spacing.sm} 0;
      color: ${({ theme }) => theme.colors.text};
      display: flex;
      align-items: start;
      gap: ${({ theme }) => theme.spacing.sm};

      &::before {
        content: '✓';
        color: ${({ theme }) => theme.colors.primary};
        font-weight: bold;
        flex-shrink: 0;
      }
    }
  }
`;

const Portfolio: React.FC = () => {
  const [pdfError, setPdfError] = useState(false);

  // Encode the URL to handle spaces in filename
  const pdfUrl = encodeURI('/Afri profile word.pdf');

  return (
    <PageContainer>
      <Header>
        <Container>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Company Portfolio
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Download or view our comprehensive business profile showcasing AFRILECTRICAL's expertise,
            services, and commitment to engineering excellence
          </Subtitle>
        </Container>
      </Header>

      <ContentSection>
        <Container>
          <InfoBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3>About Our Business Profile</h3>
            <p>
              Our comprehensive business profile provides detailed information about AFRILECTRICAL's
              capabilities, experience, and commitment to delivering professional engineering solutions.
            </p>
            <ul>
              <li>Company overview and history</li>
              <li>Service offerings across Electrical, Civil, Mechanical, and Town Planning</li>
              <li>Project portfolio and case studies</li>
              <li>BBBEE Level 1 certification details</li>
              <li>Quality assurance and safety standards</li>
              <li>Contact information and capabilities</li>
            </ul>
          </InfoBox>

          <div style={{ textAlign: 'center' }}>
            <DownloadButton
              href={pdfUrl}
              download="AFRILECTRICAL-Business-Profile.pdf"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Business Profile (PDF)
            </DownloadButton>
          </div>

          <PDFViewerContainer>
            {!pdfError ? (
              <>
                <PDFViewer
                  src={pdfUrl}
                  title="AFRILECTRICAL Business Profile"
                  onError={() => setPdfError(true)}
                />
                <LoadingMessage>
                  If the PDF doesn't display, please use the download button above.
                </LoadingMessage>
              </>
            ) : (
              <ErrorMessage>
                <p>Unable to display PDF in browser.</p>
                <DownloadButton href={pdfUrl} download="AFRILECTRICAL-Business-Profile.pdf">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download PDF Instead
                </DownloadButton>
              </ErrorMessage>
            )}
          </PDFViewerContainer>
        </Container>
      </ContentSection>
    </PageContainer>
  );
};

export default Portfolio;
