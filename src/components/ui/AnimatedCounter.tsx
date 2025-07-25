import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView, useAnimation } from 'framer-motion';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  delay?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  separator?: string;
  className?: string;
  style?: React.CSSProperties;
  once?: boolean;
  threshold?: number;
}

const CounterContainer = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  font-variant-numeric: tabular-nums;
`;

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2,
  delay = 0,
  prefix = '',
  suffix = '',
  decimals = 0,
  separator = ',',
  className,
  style,
  once = true,
  threshold = 0.1,
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  // Format the number with separators and decimals
  const formatNumber = (num: number): string => {
    return num.toLocaleString('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).replace(/,/g, separator);
  };

  useEffect(() => {
    if (isInView && (!once || !hasAnimated)) {
      let startTime: number;
      let animationFrame: number;

      const startAnimation = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // Use easeOutExpo for a nice deceleration effect
        const easeOutExpo = 1 - Math.pow(2, -10 * progress);
        
        setCount(Math.floor(easeOutExpo * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(startAnimation);
        } else {
          setCount(end);
          setHasAnimated(true);
        }
      };

      // Delay the start of the animation if needed
      const timer = setTimeout(() => {
        animationFrame = requestAnimationFrame(startAnimation);
      }, delay * 1000);

      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay }
      });

      return () => {
        clearTimeout(timer);
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [isInView, end, duration, delay, controls, once, hasAnimated]);

  return (
    <CounterContainer
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
    >
      {prefix}{formatNumber(count)}{suffix}
    </CounterContainer>
  );
};

export default AnimatedCounter;