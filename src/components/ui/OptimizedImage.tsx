import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  height?: string;
  width?: string; // Added width prop
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  shadowColor?: string;
  overlayColor?: string;
  overlayOpacity?: number;
  borderRadius?: string;
  shadowIntensity?: 'light' | 'medium' | 'strong' | 'none';
  lazyLoad?: boolean; // Added lazyLoad prop
}

const ImageContainer = styled.div<{
  height?: string;
  width?: string;
  borderRadius?: string;
  shadowIntensity?: string;
}>`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'}; // Changed default height to auto
  overflow: hidden;
  position: relative;
  border-radius: ${({ borderRadius, theme }) => borderRadius || theme.borderRadius.md};
  box-shadow: ${({ shadowIntensity, theme }) => {
    switch(shadowIntensity) {
      case 'light': return theme.shadows.sm;
      case 'strong': return theme.shadows.lg;
      case 'none': return 'none';
      default: return theme.shadows.md;
    }
  }};
`;

const StyledImage = styled(motion.img)<{ objectFit?: string }>`
  width: 100%;
  height: 100%;
  object-fit: ${({ objectFit }) => objectFit || 'cover'};
  display: block; // Ensure image takes up space
`;

const ColorOverlay = styled(motion.div)<{
  overlayColor?: string;
  overlayOpacity?: number;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ overlayColor, theme }) => overlayColor || theme.colors.primary};
  opacity: ${({ overlayOpacity }) => overlayOpacity || 0.3};
  z-index: 2;
  mix-blend-mode: multiply;
`;

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className,
  style,
  height,
  width,
  objectFit = 'cover',
  shadowColor,
  overlayColor,
  overlayOpacity = 0.3,
  borderRadius,
  shadowIntensity = 'medium',
  lazyLoad = true, // Default to true for lazy loading
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!lazyLoad) {
      setLoaded(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [lazyLoad]);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <ImageContainer
      className={className}
      style={{
        ...style,
        ...(shadowColor ? { boxShadow: `0 10px 30px ${shadowColor}` } : {})
      }}
      height={height}
      width={width}
      borderRadius={borderRadius}
      shadowIntensity={shadowIntensity}
    >
      <StyledImage
        ref={imgRef}
        src={inView || !lazyLoad ? src : undefined} // Load src only when in view or lazyLoad is false
        alt={alt}
        objectFit={objectFit}
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        onLoad={handleImageLoad}
      />
      <ColorOverlay
        overlayColor={overlayColor}
        overlayOpacity={overlayOpacity}
        initial={{ opacity: 0 }}
        animate={{ opacity: overlayOpacity }}
        transition={{ duration: 0.7 }}
      />
    </ImageContainer>
  );
};

export default OptimizedImage;