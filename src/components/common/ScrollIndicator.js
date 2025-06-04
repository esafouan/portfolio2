import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { ChevronDown } from 'lucide-react';

const ScrollContainer = styled(motion.div)`
  position: absolute;
  left: 50%;
  bottom: 1rem;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  z-index: 1000;
  cursor: pointer;
`;

const ScrollButton = styled(motion.div)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border: 2px solid rgba(139, 126, 89, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8b7e59;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(139, 126, 89, 0.5);
  }
`;

const ScrollIndicator = ({ containerRef }) => {
  const [showIndicator, setShowIndicator] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (!containerRef?.current) return;
      
      const { scrollHeight, clientHeight, scrollTop } = containerRef.current;
      const hasScroll = scrollHeight > clientHeight;
      const nearBottom = scrollHeight - scrollTop - clientHeight < 50;
      
      setShowIndicator(hasScroll && !nearBottom);
    };

    const container = containerRef?.current;
    if (container) {
      checkScroll();
      container.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
    }
    
    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      }
    };
  }, [containerRef]);

  const handleClick = () => {
    if (!containerRef?.current) return;
    
    const container = containerRef.current;
    const scrollAmount = Math.min(
      container.scrollHeight - container.clientHeight - container.scrollTop,
      container.clientHeight
    );

    container.scrollBy({
      top: scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {showIndicator && (
        <ScrollContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={handleClick}
        >
          <ScrollButton
            animate={{ 
              y: [0, 5, 0],
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ChevronDown size={24} />
          </ScrollButton>
        </ScrollContainer>
      )}
    </AnimatePresence>
  );
};

export default ScrollIndicator; 