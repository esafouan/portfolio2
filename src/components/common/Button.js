import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import useHoverAnimation from '../../hooks/useHoverAnimation';

const StyledButton = styled(motion.button)`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  background-color: ${props => props.$variant === 'primary' ? '#000' : 'transparent'};
  color: ${props => props.$variant === 'primary' ? '#fff' : '#000'};
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 2px solid ${props => props.$variant === 'primary' ? '#000' : '#000'};

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0,0,0,0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    top: 0;
    left: -100%;
    transform: skew(-20deg);
    transition: all 0.3s ease;
  }

  &:hover::after {
    left: 100%;
  }
`;

const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  disabled = false,
  ...props 
}) => {
  const { scale, handleMouseEnter, handleMouseLeave } = useHoverAnimation();

  return (
    <StyledButton
      $variant={variant}
      onClick={onClick}
      disabled={disabled}
      animate={{ scale }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button; 