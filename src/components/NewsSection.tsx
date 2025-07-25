import React from 'react';
import styled from 'styled-components';
import NewsCardCarousel from './ui/NewsCardCarousel';

const newsData = [
  {
    id: 'news-1',
    category: 'Award',
    image: 'https://www.efla-engineers.com/_next/image?url=https%3A%2F%2Fprismic-io.s3.amazonaws.com%2Fefla-main-storage%2Fc6b51cfed8d5696755635d7312260593651d150f_efla-designs-mooring-infrastructure-for-post-smolt-delivery-vestmanneyjar-iceland.jpg&w=1920&q=75',
    title: 'African Energy Innovator of the Year',
    description: 'Afrilectrical has been recognized as the 2024 African Energy Innovator of the Year by the African Union Commission for our groundbreaking work in renewable energy integration.',
    date: '15.03.2024',
    readTime: '3 min read'
  },
  {
    id: 'news-2',
    category: 'Recognition',
    image: 'https://www.efla-engineers.com/_next/image?url=https%3A%2F%2Fprismic-io.s3.amazonaws.com%2Fefla-main-storage%2Fbd3a94c772092892a19e003611d398931b81a8d9_efla-achieves-iso-27001-certification.jpg&w=1920&q=75',
    title: 'Top Green Employer Award',
    description: 'Engineering News South Africa has named Afrilectrical as a 2023 Top Green Employer for our carbon-neutral operations and commitment to sustainable engineering practices.',
    date: '22.11.2023',
    readTime: '4 min read'
  },
  {
    id: 'news-3',
    category: 'Milestone',
    image: 'https://www.efla-engineers.com/_next/image?url=https%3A%2F%2Fprismic-io.s3.amazonaws.com%2Fefla-main-storage%2F94abe0cbcc9e775a1bd981ad52fa882879954254_fossvogur-bridge-open-for-tender.jpg&w=1920&q=75',
    title: 'Afrilectrical Academy Graduates 50th Cohort',
    description: 'Our skills development initiative has reached a significant milestone with 250+ engineers trained through the Afrilectrical Academy, with 40% being women engineers.',
    date: '05.02.2024',
    readTime: '2 min read'
  },
];

const NewsContainer = styled.section`
  width: 100vw; /* Full viewport width */
  margin-left: calc(-50vw + 50%); /* Break out of parent container */
  padding: 4rem 0;
  background: #f8f9fa;
  overflow: hidden;
`;

const NewsSection: React.FC = () => {
  return (
    <NewsContainer>
      <NewsCardCarousel 
        newsItems={newsData}
        autoRotate={true}
        rotationInterval={5000}
        showReadTime={true}
      />
    </NewsContainer>
  );
};

export default NewsSection;