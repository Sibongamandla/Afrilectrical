import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

interface NewsItem {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  readTime?: string;
  url?: string;
}

interface NewsCardCarouselProps {
  newsItems: NewsItem[];
  title?: string;
  autoRotate?: boolean;
  rotationInterval?: number;
  showReadTime?: boolean;
  onCardClick?: (item: NewsItem) => void;
  className?: string;
}

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 1rem;
  background: ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  overflow: hidden;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  z-index: 2;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.display};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  text-align: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize.xxxl};
  }
`;

const TitleUnderline = styled.div`
  width: 5rem;
  height: 3px;
  background: ${({ theme }) => theme.colors.primary};
  margin: 0 auto;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
`;

const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  z-index: 2;
`;

const NavigationButton = styled.button<{ $position: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  ${({ $position }) => $position}: ${({ theme }) => theme.spacing.lg};
  transform: translateY(-50%);
  z-index: ${({ theme }) => theme.zIndex.raised};
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.round};
  padding: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.base};
  
  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-50%) scale(1.1);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
  
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
  
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  
  svg {
    width: 24px;
    height: 24px;
  }
`;

const ControlsContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.raised};
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const PlayPauseButton = styled.button<{ $isPlaying: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.base};
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-1px);
  }
  
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
  
  span {
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  }
`;

const CarouselStage = styled.div<{ translateX: number }>`
  display: flex;
  gap: 1.5rem;
  transition: transform 0.7s ease-out;
  transform: translateX(${props => props.translateX}px);
  padding: 1rem 0;
`;

const NewsCard = styled.div<{ isActive?: boolean }>`
  flex: 0 0 320px;
  height: 420px;
  transition: all 0.6s ease;
  cursor: pointer;
  
  box-shadow: 0 10px 25px -8px rgba(0, 0, 0, 0.3);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 25px 50px -10px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.15);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex: 0 0 280px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex: 0 0 260px;
  }
`;

const CardContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.08);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  
  &:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.25);
  }
`;

const CardImage = styled.div<{ image: string }>`
  width: 100%;
  height: 160px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  position: relative;
  transition: all 0.3s ease;
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.2) 40%,
      transparent 70%
    );
  }
`;

const CategoryBadge = styled.div`
  position: absolute;
  top: 1.25rem;
  left: 1.25rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  box-shadow: 0 4px 15px -4px rgba(220, 38, 38, 0.4);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  z-index: 10;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 20px -4px rgba(220, 38, 38, 0.5);
  }
`;

const DateBadge = styled.div`
  position: absolute;
  bottom: 1.25rem;
  right: 1.25rem;
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  background: rgba(0, 0, 0, 0.6);
  padding: 0.5rem 0.75rem;
  border-radius: 0.75rem;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.3s ease;
  z-index: 10;
`;

const CardBody = styled.div`
  padding: 1.5rem 1.5rem 1.25rem;
  height: calc(100% - 10rem);
  display: flex;
  flex-direction: column;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 1.5rem;
    right: 1.5rem;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(220, 38, 38, 0.2), transparent);
  }
`;

const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  
  &::after {
    content: '';
    position: absolute;
    bottom: -0.25rem;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.accent});
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    
    &::after {
      width: 3rem;
    }
  }
`;

const CardDescription = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  line-height: 1.5;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  opacity: 0.9;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const ReadTime = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.grey};
  display: flex;
  align-items: center;
  opacity: 0.8;
  
  svg {
    width: 1rem;
    height: 1rem;
    margin-right: ${({ theme }) => theme.spacing.xs};
  }
`;

const ReadMoreButton = styled.button`
  display: inline-flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  box-shadow: 0 4px 15px -4px rgba(220, 38, 38, 0.4);
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 20px -4px rgba(220, 38, 38, 0.5);
    background: ${({ theme }) => theme.colors.accent};
  }
  
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
  
  svg {
    width: 0.875rem;
    height: 0.875rem;
    margin-left: 0.375rem;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(0.25rem);
  }
`;

// NavButton will use Tailwind classes directly

// PlayPauseButton will use Tailwind classes directly



const ProgressBarContainer = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  height: 0.25rem;
  margin-top: ${({ theme }) => theme.spacing.lg};
  overflow: hidden;
`;

const ProgressBar = styled.div<{ progress: number }>`
  background: ${({ theme }) => theme.colors.primary};
  height: 0.25rem;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  transition: width 0.1s ease;
  width: ${props => props.progress}%;
`;

const Instructions = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.grey};
  opacity: 0.7;
`;

const EmptyState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 384px;
  background: #f9fafb;
  border-radius: 0.5rem;
  
  p {
    color: #6b7280;
    font-size: 1.125rem;
  }
`;

const NewsCardCarousel: React.FC<NewsCardCarouselProps> = ({
  newsItems,
  title = "Latest News",
  autoRotate = true,
  rotationInterval = 5000,
  showReadTime = true,
  onCardClick,
  className
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [maxScroll, setMaxScroll] = useState(0);
  const totalItems = newsItems.length;
  const cardWidth = 320 + 24; // card width + gap

  // Calculate max scroll based on container width
  useEffect(() => {
    const calculateMaxScroll = () => {
      const containerWidth = window.innerWidth - 64; // 64px for padding
      const totalWidth = totalItems * cardWidth;
      setMaxScroll(Math.max(0, totalWidth - containerWidth));
    };

    calculateMaxScroll();
    window.addEventListener('resize', calculateMaxScroll);
    return () => window.removeEventListener('resize', calculateMaxScroll);
  }, [totalItems, cardWidth]);

  const handleNext = useCallback(() => {
    if (isTransitioning || totalItems === 0) return;
    setIsTransitioning(true);
    setScrollPosition((prev) => {
      const newPosition = prev + cardWidth * 2; // scroll by 2 cards
      return Math.min(newPosition, maxScroll);
    });
    setTimeout(() => setIsTransitioning(false), 700);
  }, [totalItems, isTransitioning, cardWidth, maxScroll]);

  const handlePrev = useCallback(() => {
    if (isTransitioning || totalItems === 0) return;
    setIsTransitioning(true);
    setScrollPosition((prev) => {
      const newPosition = prev - cardWidth * 2; // scroll by 2 cards
      return Math.max(newPosition, 0);
    });
    setTimeout(() => setIsTransitioning(false), 700);
  }, [totalItems, isTransitioning, cardWidth]);

  // Auto-rotation effect
  useEffect(() => {
    if (!autoRotate || isPaused || isHovered || totalItems <= 1) return;

    const interval = setInterval(() => {
      handleNext();
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [autoRotate, isPaused, isHovered, totalItems, rotationInterval, handleNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          handlePrev();
          break;
        case 'ArrowRight':
          event.preventDefault();
          handleNext();
          break;
        case ' ':
          event.preventDefault();
          setIsPaused(!isPaused);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPaused, handleNext, handlePrev]);

  const handleCardClick = (item: NewsItem) => {
    if (onCardClick) {
      onCardClick(item);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  if (totalItems === 0) {
    return (
      <EmptyState>
        <p>No news items available</p>
      </EmptyState>
    );
  }

  return (
    <CarouselContainer className={className}>
      {/* Header */}
      <Header>
        <Title>{title}</Title>
        <TitleUnderline />
      </Header>
      
      {/* Carousel Container */}
      <CarouselWrapper
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        role="region"
        aria-label="News carousel"
      >
        {/* Horizontal Scrolling Stage */}
        <CarouselStage
          translateX={-scrollPosition}
        >
          {newsItems.map((item, index) => {
            return (
              <NewsCard
                key={item.id}
                onClick={() => handleCardClick(item)}
                role="article"
                aria-label={`News article: ${item.title}`}
                tabIndex={0}
              >
                <CardContent>
                  {/* Image Section */}
                  <CardImage image={item.image}>
                    {/* Category Badge */}
                    <CategoryBadge>
                      {item.category}
                    </CategoryBadge>
                    
                    {/* Date */}
                    <DateBadge>
                      {formatDate(item.date)}
                    </DateBadge>
                  </CardImage>
                  
                  {/* Content Section */}
                  <CardBody>
                    <CardTitle>
                      {item.title}
                    </CardTitle>
                    
                    <CardDescription>
                      {item.description}
                    </CardDescription>
                    
                    {/* Footer */}
                    <CardFooter>
                      {showReadTime && item.readTime && (
                        <ReadTime>
                          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                          {item.readTime}
                        </ReadTime>
                      )}
                      
                      <ReadMoreButton>
                        Read More
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                        </svg>
                      </ReadMoreButton>
                    </CardFooter>
                  </CardBody>
                </CardContent>
              </NewsCard>
            );
          })}
        </CarouselStage>
        
        {/* Navigation Controls */}
        <ControlsContainer>
          <NavigationButton
            $position="left"
            onClick={handlePrev}
            disabled={isTransitioning || scrollPosition <= 0}
            aria-label="Scroll left"
            style={{ left: '2rem' }}
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
            </svg>
          </NavigationButton>
          
          <NavigationButton
            $position="right"
            onClick={handleNext}
            disabled={isTransitioning || scrollPosition >= maxScroll}
            aria-label="Scroll right"
            style={{ right: '2rem' }}
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
          </NavigationButton>
          
          {/* Play/Pause Button */}
          {autoRotate && (
            <PlayPauseButton
               $isPlaying={!isPaused}
               onClick={() => setIsPaused(!isPaused)}
               aria-label={isPaused ? "Resume autoplay" : "Pause autoplay"}
               style={{ top: '2rem', right: '2rem' }}
             >
              {isPaused ? (
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              ) : (
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                </svg>
              )}
            </PlayPauseButton>
          )}
        </ControlsContainer>
      </CarouselWrapper>
      
      {/* Progress Bar */}
      {autoRotate && !isPaused && !isHovered && maxScroll > 0 && (
        <ProgressBarContainer>
          <ProgressBar
            progress={(scrollPosition / maxScroll) * 100}
          />
        </ProgressBarContainer>
      )}
      
      {/* Keyboard Instructions */}
      <Instructions>
        Use arrow keys to scroll • Press space to pause/resume auto-scroll
      </Instructions>
    </CarouselContainer>
  );
};

export default NewsCardCarousel;