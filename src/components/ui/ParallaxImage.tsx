import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxImageProps {
  src: string;
  alt: string;
  height?: string;
  speed?: number;
  direction?: 'up' | 'down';
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  overlayColor?: string;
  overlayOpacity?: number;
  shadowIntensity?: 'light' | 'medium' | 'strong' | 'none';
  shadowColor?: string;
  borderRadius?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Container = styled(motion.div)<{
  height: string;
  borderRadius: string;
  shadowIntensity: string;
  shadowColor?: string;
}>`
  position: relative;
  overflow: hidden;
  height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius};
  box-shadow: ${({ shadowIntensity, shadowColor, theme }) => {
    const color = shadowColor || 'rgba(0, 0, 0, 0.1)';
    switch (shadowIntensity) {
      case 'light':
        return `0 2px 8px ${color}`;
      case 'medium':
        return `0 4px 16px ${color}`;
      case 'strong':
        return `0 8px 32px ${color}`;
      case 'none':
      default:
        return 'none';
    }
  }};
`;

const ImageWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 120%; // Extra height for parallax effect
  overflow: hidden;
`;

const Image = styled.img<{ objectFit: string }>`
  width: 100%;
  height: 100%;
  object-fit: ${({ objectFit }) => objectFit};
  display: block;
`;

const Overlay = styled.div<{ overlayColor: string; overlayOpacity: number }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ overlayColor }) => overlayColor};
  opacity: ${({ overlayOpacity }) => overlayOpacity};
  pointer-events: none;
`;

const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  height = '400px',
  speed = 0.5,
  direction = 'up',
  objectFit = 'cover',
  overlayColor = 'transparent',
  overlayOpacity = 0,
  shadowIntensity = 'medium',
  shadowColor,
  borderRadius = '8px',
  className,
  style
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [elementTop, setElementTop] = useState(0);
  const [elementHeight, setElementHeight] = useState(0);
  
  const { scrollY } = useScroll();
  
  // Calculate parallax transform based on scroll position
  const y = useTransform(
    scrollY,
    [elementTop - window.innerHeight, elementTop + elementHeight],
    direction === 'up' 
      ? [height.includes('px') ? parseInt(height) * speed * 0.5 : 100 * speed, -height.includes('px') ? parseInt(height) * speed * 0.5 : -100 * speed]
      : [-height.includes('px') ? parseInt(height) * speed * 0.5 : -100 * speed, height.includes('px') ? parseInt(height) * speed * 0.5 : 100 * speed]
  );

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const updateElementPosition = () => {
      const rect = element.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setElementTop(rect.top + scrollTop);
      setElementHeight(rect.height);
    };

    updateElementPosition();
    window.addEventListener('resize', updateElementPosition);
    window.addEventListener('scroll', updateElementPosition);

    return () => {
      window.removeEventListener('resize', updateElementPosition);
      window.removeEventListener('scroll', updateElementPosition);
    };
  }, []);

  return (
    <Container
      ref={containerRef}
      height={height}
      borderRadius={borderRadius}
      shadowIntensity={shadowIntensity}
      shadowColor={shadowColor}
      className={className}
      style={style}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <ImageWrapper style={{ y }}>
        <Image
          src={src}
          alt={alt}
          objectFit={objectFit}
          loading="lazy"
        />
        {overlayColor !== 'transparent' && overlayOpacity > 0 && (
          <Overlay
            overlayColor={overlayColor}
            overlayOpacity={overlayOpacity}
          />
        )}
      </ImageWrapper>
    </Container>
  );
};

export default ParallaxImage;
export type { ParallaxImageProps };