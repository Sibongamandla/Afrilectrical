import React, { useEffect, useRef, useState } from 'react';
import { motion, Variants, useAnimation } from 'framer-motion';
import styled from 'styled-components';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  distance?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
  staggerChildren?: boolean;
  staggerDelay?: number;
  cascade?: boolean;
  damping?: number;
  style?: React.CSSProperties;
}

const RevealContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const StaggerItem = styled(motion.div)`
  display: inline-block;
  white-space: pre-wrap;
`;

const CascadeContainer = styled(motion.div)`
  overflow: hidden;
`;

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  distance = 50,
  threshold = 0.1,
  once = true,
  className,
  staggerChildren = false,
  staggerDelay = 0.05,
  cascade = false,
  damping = 0.5,
  style,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(currentRef);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px',
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [once, threshold]);

  // Define animation variants based on direction
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: distance };
      case 'down':
        return { y: -distance };
      case 'left':
        return { x: distance };
      case 'right':
        return { x: -distance };
      default:
        return { y: distance };
    }
  };

  const controls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [isVisible, controls, once]);

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...getInitialPosition(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: staggerChildren ? staggerDelay : 0,
        delayChildren: delay,
      },
    },
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: duration * 0.8,
        ease: "easeOut"
      } 
    }
  };

  const cascadeVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.015,
        delayChildren: delay,
      } 
    }
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      } 
    }
  };

  // Function to wrap text in stagger items for cascade effect
  const createCascadeText = (text: string) => {
    return Array.from(text).map((char, index) => (
      <StaggerItem key={index} variants={letterVariants}>
        {char}
      </StaggerItem>
    ));
  };

  // Process children for cascade effect if enabled
  const renderChildren = () => {
    if (!cascade) return children;

    // Handle React elements and strings differently
    const processNode = (node: React.ReactNode): React.ReactNode => {
      if (typeof node === 'string') {
        return createCascadeText(node);
      } else if (React.isValidElement(node)) {
        // Process children of React elements
        const element = node as React.ReactElement<{children?: React.ReactNode}>;
        const childrenArray = React.Children.toArray(element.props.children || []);
        const processedChildren = childrenArray.map((child, childIndex) => processNode(child));
        
        return React.cloneElement(element, { key: `element-${childrenArray.length}` }, processedChildren);
      } else if (Array.isArray(node)) {
        return node.map((item, index) => <React.Fragment key={index}>{processNode(item)}</React.Fragment>);
      }
      return node;
    };

    return processNode(children);
  };

  if (cascade) {
    return (
      <CascadeContainer
        ref={ref}
        className={className}
        style={style}
        initial="hidden"
        animate={controls}
        variants={cascadeVariants}
      >
        {renderChildren()}
      </CascadeContainer>
    );
  }

  if (staggerChildren) {
    return (
      <RevealContainer
        ref={ref}
        className={className}
        style={style}
        initial="hidden"
        animate={controls}
        variants={variants}
      >
        {React.Children.map(children, (child, index) => (
          <motion.div key={index} variants={childVariants}>
            {child}
          </motion.div>
        ))}
      </RevealContainer>
    );
  }

  return (
    <RevealContainer
      ref={ref}
      className={className}
      style={style}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </RevealContainer>
  );
};

export default ScrollReveal;