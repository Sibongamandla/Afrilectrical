import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styled, { keyframes, css } from 'styled-components';

// Enhanced interface with more customization options
interface CarouselProps {
  items: React.ReactNode[];
  autoPlay?: boolean;
  interval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  infiniteLoop?: boolean;
  className?: string;
  slideClassName?: string;
  showProgress?: boolean;
  showControls?: boolean;
  showPlayPause?: boolean;
  pauseOnHover?: boolean;
  enableDrag?: boolean;
  transitionDuration?: number;
  easing?: string;
  preloadImages?: boolean;
  lazy?: boolean;
  accessibility?: {
    role?: string;
    label?: string;
    ariaLabel?: string;
    announceSlideChanges?: boolean;
    keyboardNavigation?: boolean;
  };
  onChange?: (index: number) => void;
  onSlideChange?: (currentIndex: number, previousIndex: number) => void;
  onLoad?: () => void;
}

// Animations
const slideInFromRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInFromLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

// Styled components
const CarouselContainer = styled.div<{ $transitionDuration: number }>`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.black};
  border-radius: 0;
  box-shadow: none;
  
  &:focus-within {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
  
  * {
    transition-duration: ${({ $transitionDuration }) => $transitionDuration}ms;
  }
`;

const SlideContainer = styled.div<{ 
  $isDragging: boolean;
  $dragOffset: number;
  $transitionDuration: number;
  $easing: string;
}>`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: ${({ $isDragging }) => $isDragging ? 'grabbing' : 'grab'};
  transform: translateX(${({ $dragOffset }) => $dragOffset}px);
  transition: ${({ $isDragging, $transitionDuration, $easing }) => 
    $isDragging ? 'none' : `transform ${$transitionDuration}ms ${$easing}`};
  
  &:active {
    cursor: grabbing;
  }
`;

const Slide = styled.div<{ 
  $direction: number;
  $isActive: boolean;
  $transitionDuration: number;
  $easing: string;
}>`
  width: 100%;
  height: 100%;
  position: relative;
  animation: ${({ $direction, $isActive, $transitionDuration, $easing }) => {
    if (!$isActive) return 'none';
    const animation = $direction > 0 ? slideInFromRight : $direction < 0 ? slideInFromLeft : fadeIn;
    return css`${animation} ${$transitionDuration}ms ${$easing}`;
  }};
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
  
  &:active:not(:disabled) {
    transform: translateY(-50%) scale(0.95);
  }
  
  svg {
    width: 24px;
    height: 24px;
    transition: transform ${({ theme }) => theme.transitions.fast};
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
`;

const ProgressBar = styled.div<{ $progress: number }>`
  width: 100%;
  height: 3px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  overflow: hidden;
  
  &::after {
    content: '';
    display: block;
    height: 100%;
    width: ${({ $progress }) => $progress}%;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.accent});
    border-radius: inherit;
    transition: width 100ms linear;
    box-shadow: 0 0 10px rgba(227, 30, 36, 0.5);
  }
`;

const DotsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  align-items: center;
  flex-wrap: wrap;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const DotButton = styled.button<{ $isActive: boolean; $index: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all ${({ theme }) => theme.transitions.base};
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

const DotNumber = styled.span`
  color: rgba(255, 255, 255, 0.6);
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
`;

const DotIndicator = styled.div<{ $isActive: boolean }>`
  width: 60px;
  height: 2px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${({ $isActive }) => $isActive ? '100%' : '0%'};
    background: ${({ theme }) => theme.colors.white};
    border-radius: inherit;
    transition: width ${({ theme }) => theme.transitions.base};
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
  }
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
  
  &:active {
    transform: translateY(0);
  }
  
  svg {
    width: 16px;
    height: 16px;
    transition: transform ${({ theme }) => theme.transitions.fast};
  }
  
  span {
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
  }
`;

const LoadingSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.darkGrey};
  
  &::after {
    content: '';
    width: 40px;
    height: 40px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-top: 3px solid ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    animation: ${pulse} 1s linear infinite;
  }
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.grey};
  background: ${({ theme }) => theme.colors.lightGrey};
  
  svg {
    width: 48px;
    height: 48px;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    opacity: 0.5;
  }
  
  p {
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
  }
`;

const Carousel: React.FC<CarouselProps> = ({
  items,
  autoPlay = true,
  interval = 5000,
  showArrows = true,
  showDots = true,
  infiniteLoop = true,
  className = '',
  slideClassName = '',
  showProgress = true,
  showControls = true,
  showPlayPause = true,
  pauseOnHover = true,
  enableDrag = true,
  transitionDuration = 500,
  easing = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  preloadImages = true,
  lazy = false,
  accessibility = {
    ariaLabel: 'Image carousel',
    announceSlideChanges: true
  },
  onChange,
  onSlideChange,
  onLoad,
}) => {
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [dragStart, setDragStart] = useState<{ x: number; y: number } | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(lazy);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [touchStartTime, setTouchStartTime] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const progressTimerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);
  const slideRef = useRef<HTMLDivElement>(null);
  const announcementRef = useRef<HTMLDivElement>(null);
  const intersectionObserverRef = useRef<IntersectionObserver | null>(null);
  
  // Memoized values for performance
  const totalSlides = useMemo(() => items.length, [items.length]);
  const canGoNext = useMemo(() => infiniteLoop || currentIndex < totalSlides - 1, [infiniteLoop, currentIndex, totalSlides]);
  const canGoPrev = useMemo(() => infiniteLoop || currentIndex > 0, [infiniteLoop, currentIndex]);

  // Clear timers and observers on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
      if (intersectionObserverRef.current) {
        intersectionObserverRef.current.disconnect();
      }
    };
  }, []);

  // Image preloading effect
  useEffect(() => {
    if (preloadImages && !lazy) {
      setIsLoading(true);
      const imagePromises: Promise<void>[] = [];
      
      items.forEach((_, index) => {
        const promise = new Promise<void>((resolve) => {
          // Simulate image loading - in real implementation, extract image URLs from items
          setTimeout(() => {
            setLoadedImages(prev => new Set(Array.from(prev).concat(index)));
            resolve();
          }, 100 * (index + 1));
        });
        imagePromises.push(promise);
      });
      
      Promise.all(imagePromises).then(() => {
        setIsLoading(false);
        onLoad?.();
      });
    }
  }, [items, preloadImages, lazy, onLoad]);

  // Accessibility announcements
  const announceSlideChange = useCallback((slideIndex: number) => {
    if (accessibility.announceSlideChanges && announcementRef.current) {
      announcementRef.current.textContent = `Slide ${slideIndex + 1} of ${totalSlides}`;
    }
  }, [accessibility.announceSlideChanges, totalSlides]);

  // Enhanced navigation functions
  const handleNext = useCallback(() => {
    if (!canGoNext) return;
    
    const nextIndex = infiniteLoop && currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;
    const previousIndex = currentIndex;
    
    setCurrentIndex([nextIndex, 1]);
    onChange?.(nextIndex);
    onSlideChange?.(nextIndex, previousIndex);
    announceSlideChange(nextIndex);
  }, [currentIndex, totalSlides, infiniteLoop, canGoNext, onChange, onSlideChange, announceSlideChange]);

  const handlePrev = useCallback(() => {
    if (!canGoPrev) return;
    
    const prevIndex = infiniteLoop && currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
    const previousIndex = currentIndex;
    
    setCurrentIndex([prevIndex, -1]);
    onChange?.(prevIndex);
    onSlideChange?.(prevIndex, previousIndex);
    announceSlideChange(prevIndex);
  }, [currentIndex, totalSlides, infiniteLoop, canGoPrev, onChange, onSlideChange, announceSlideChange]);

  const handleDotClick = useCallback((index: number) => {
    if (index !== currentIndex && index >= 0 && index < totalSlides) {
      const newDirection = index > currentIndex ? 1 : -1;
      const previousIndex = currentIndex;
      
      setCurrentIndex([index, newDirection]);
      onChange?.(index);
      onSlideChange?.(index, previousIndex);
      announceSlideChange(index);
    }
  }, [currentIndex, totalSlides, onChange, onSlideChange, announceSlideChange]);

  // Keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        handlePrev();
        break;
      case 'ArrowRight':
        e.preventDefault();
        handleNext();
        break;
      case ' ':
        e.preventDefault();
        setIsPlaying(!isPlaying);
        break;
      case 'Home':
        e.preventDefault();
        handleDotClick(0);
        break;
      case 'End':
        e.preventDefault();
        handleDotClick(totalSlides - 1);
        break;
    }
  }, [handlePrev, handleNext, handleDotClick, isPlaying, totalSlides]);

  // Auto play and progress logic
  useEffect(() => {
    if (isPlaying && !isPaused && !isDragging && items.length > 1) {
      setProgress(0);
      startTimeRef.current = Date.now();
      
      const progressInterval = 16;
      progressTimerRef.current = setInterval(() => {
        const elapsed = Date.now() - startTimeRef.current;
        const newProgress = (elapsed / interval) * 100;
        setProgress(newProgress > 100 ? 100 : newProgress);
      }, progressInterval);
      
      timerRef.current = setTimeout(() => {
        handleNext();
      }, interval);
    } else {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    }
    
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    };
  }, [isPlaying, isPaused, isDragging, currentIndex, interval, items.length, handleNext]);

  // Handle pause/resume
  const handlePauseResume = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  // Handle drag events
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!enableDrag) return;
    e.preventDefault();
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
    setTouchStartTime(Date.now());
  }, [enableDrag]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !dragStart) return;
    const deltaX = e.clientX - dragStart.x;
    setDragOffset(deltaX);
  }, [isDragging, dragStart]);

  const handleMouseUp = useCallback(() => {
    if (!isDragging || !dragStart) return;
    
    const threshold = 50;
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
    
    setIsDragging(false);
    setDragStart(null);
    setDragOffset(0);
    setTouchStartTime(0);
  }, [isDragging, dragStart, dragOffset, handlePrev, handleNext]);

  // Global mouse up handler for better UX
  useEffect(() => {
    if (isDragging) {
      const handleGlobalMouseUp = () => {
        setIsDragging(false);
        setDragStart(null);
        setDragOffset(0);
        setTouchStartTime(0);
      };
      
      document.addEventListener('mouseup', handleGlobalMouseUp);
      document.addEventListener('mouseleave', handleGlobalMouseUp);
      
      return () => {
        document.removeEventListener('mouseup', handleGlobalMouseUp);
        document.removeEventListener('mouseleave', handleGlobalMouseUp);
      };
    }
  }, [isDragging]);

  // Enhanced touch/drag handlers with improved gesture recognition
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (!enableDrag) return;
    
    const touch = e.touches[0];
    setIsDragging(true);
    setDragStart({ x: touch.clientX, y: touch.clientY });
    setDragOffset(0);
    setTouchStartTime(Date.now());
    
    // Prevent default to avoid scrolling issues
    e.preventDefault();
  }, [enableDrag]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging || !dragStart) return;
    
    const touch = e.touches[0];
    const offset = touch.clientX - dragStart.x;
    
    // Apply resistance at boundaries
    const resistance = 0.3;
    let adjustedOffset = offset;
    
    if (!infiniteLoop) {
      if ((currentIndex === 0 && offset > 0) || 
          (currentIndex === totalSlides - 1 && offset < 0)) {
        adjustedOffset = offset * resistance;
      }
    }
    
    setDragOffset(adjustedOffset);
    e.preventDefault();
  }, [isDragging, dragStart, enableDrag, currentIndex, totalSlides, infiniteLoop]);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (!isDragging || !dragStart) return;
    
    setIsDragging(false);
    const touchDuration = Date.now() - touchStartTime;
    const velocity = Math.abs(dragOffset) / touchDuration;
    
    // Dynamic threshold based on velocity and distance
    const baseThreshold = 50;
    const velocityThreshold = 0.3;
    const threshold = velocity > velocityThreshold ? baseThreshold * 0.6 : baseThreshold;
    
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0 && canGoPrev) {
        handlePrev();
      } else if (dragOffset < 0 && canGoNext) {
        handleNext();
      }
    }
    
    setDragStart(null);
    setDragOffset(0);
    setTouchStartTime(0);
  }, [isDragging, dragStart, dragOffset, touchStartTime, handleNext, handlePrev, enableDrag, canGoNext, canGoPrev]);

  // Handle hover pause
  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover) {
      setIsPaused(true);
    }
  }, [pauseOnHover]);

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover) {
      setIsPaused(false);
    }
  }, [pauseOnHover]);

  // Render loading state
  if (isLoading && preloadImages) {
    return (
      <CarouselContainer $transitionDuration={transitionDuration}>
        <LoadingSpinner />
      </CarouselContainer>
    );
  }

  // Render empty state
  if (items.length === 0) {
    return (
      <CarouselContainer $transitionDuration={transitionDuration}>
        <EmptyState>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21,15 16,10 5,21"/>
          </svg>
          <p>No items to display</p>
        </EmptyState>
      </CarouselContainer>
    );
  }

  return (
    <CarouselContainer 
      className={className}
      $transitionDuration={transitionDuration}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      role="region"
      aria-label={accessibility.ariaLabel}
      aria-live={accessibility.announceSlideChanges ? 'polite' : 'off'}
      tabIndex={0}
    >
      {/* Screen reader announcements */}
      {accessibility.announceSlideChanges && (
        <div
          ref={announcementRef}
          aria-live="polite"
          aria-atomic="true"
          style={{
            position: 'absolute',
            left: '-10000px',
            width: '1px',
            height: '1px',
            overflow: 'hidden',
          }}
        />
      )}

      {/* Main slide container */}
      <SlideContainer
        ref={slideRef}
        $isDragging={isDragging}
        $dragOffset={dragOffset}
        $transitionDuration={transitionDuration}
        $easing={easing}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Slide
          className={slideClassName}
          $direction={direction}
          $isActive={true}
          $transitionDuration={transitionDuration}
          $easing={easing}
          aria-label={`Slide ${currentIndex + 1} of ${items.length}`}
          role="img"
        >
          {items[currentIndex]}
        </Slide>
      </SlideContainer>

      {/* Navigation arrows */}
      {showArrows && (
        <>
          <NavigationButton
            $position="left"
            onClick={handlePrev}
            disabled={!canGoPrev}
            aria-label="Previous slide"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </NavigationButton>
          <NavigationButton
            $position="right"
            onClick={handleNext}
            disabled={!canGoNext}
            aria-label="Next slide"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </NavigationButton>
        </>
      )}

      {/* Bottom controls container */}
      {(showProgress || showDots || showPlayPause) && (
        <ControlsContainer>
          {/* Progress bar */}
          {showProgress && isPlaying && (
            <ProgressBar $progress={progress} />
          )}

          {/* Controls */}
          <DotsContainer>
            {/* Slide indicators */}
            {showDots && (
              <>
                {items.map((_, index) => (
                  <DotButton
                    key={index}
                    $isActive={index === currentIndex}
                    $index={index}
                    onClick={() => handleDotClick(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    role="tab"
                    aria-selected={index === currentIndex}
                  >
                    <DotNumber>
                      {String(index + 1).padStart(2, '0')}
                    </DotNumber>
                    <DotIndicator $isActive={index === currentIndex} />
                  </DotButton>
                ))}
              </>
            )}

            {/* Pause/Play button */}
            {showPlayPause && (
              <PlayPauseButton
                $isPlaying={isPlaying}
                onClick={handlePauseResume}
                aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
              >
                {isPlaying ? (
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M6 4H10V20H6V4Z" fill="currentColor" />
                    <path d="M14 4H18V20H14V4Z" fill="currentColor" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M8 5L19 12L8 19V5Z" fill="currentColor" />
                  </svg>
                )}
                <span>{isPlaying ? 'Pause' : 'Play'}</span>
              </PlayPauseButton>
            )}
          </DotsContainer>
        </ControlsContainer>
      )}
    </CarouselContainer>
  );
};

// Hero slide component with improved layout and consistent sizing
const HeroSlide: React.FC<{
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  buttonText?: string;
  onButtonClick?: () => void;
}> = ({ title, subtitle, description, backgroundImage, buttonText = "Explore Solutions", onButtonClick }) => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform transition-transform duration-1000 hover:scale-105"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Brand gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-primary-900/70" />
      
      {/* Content container */}
      <div className="relative z-10 flex items-center h-full w-full">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          {/* Subtitle with consistent sizing */}
          <div className="text-primary-300 text-sm sm:text-base md:text-lg font-medium mb-3 md:mb-4 opacity-90">
            {subtitle}
          </div>
          
          {/* Main title with consistent sizing */}
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
            {title}
          </h1>
          
          {/* Description with consistent sizing */}
          <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed mb-6 md:mb-8 max-w-3xl">
            {description}
          </p>
          
          {/* Enhanced CTA Button */}
          <button
            onClick={onButtonClick}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:from-primary-600 hover:to-secondary-600 px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full font-medium text-sm sm:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-800 shadow-md"
          >
            <span>{buttonText}</span>
            <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

// Demo component
const CarouselDemo: React.FC = () => {
  const slides = [
    <HeroSlide
      key="slide1"
      subtitle="Technology Innovation"
      title="Next-Gen Solutions"
      description="Discover cutting-edge technology solutions that transform businesses and drive innovation forward. Our comprehensive approach ensures scalable, sustainable growth."
      backgroundImage="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1926&q=80"
      buttonText="Learn More"
      onButtonClick={() => alert('Slide 1 clicked!')}
    />,
    <HeroSlide
      key="slide2"
      subtitle="Global Partnership"
      title="Your Trusted Partner"
      description="We're more than a service provider - we're your strategic partner. With global expertise and local insights, we deliver solutions that matter."
      backgroundImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      buttonText="Get Started"
      onButtonClick={() => alert('Slide 2 clicked!')}
    />,
    <HeroSlide
      key="slide3"
      subtitle="Digital Infrastructure"
      title="Connected Future"
      description="Building the digital infrastructure of tomorrow. Our solutions connect people, processes, and technologies to create seamless experiences."
      backgroundImage="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      buttonText="Explore"
      onButtonClick={() => alert('Slide 3 clicked!')}
    />
  ];

  return (
    <div className="w-full h-screen">
      <Carousel
        items={slides}
        autoPlay={true}
        interval={6000}
        showArrows={true}
        showDots={true}
        showProgress={true}
        showControls={true}
        infiniteLoop={true}
        pauseOnHover={true}
        enableDrag={true}
        className="w-full h-full"
        onChange={(index) => console.log('Slide changed to:', index)}
      />
    </div>
  );
};

export default Carousel;
export { CarouselDemo, HeroSlide };