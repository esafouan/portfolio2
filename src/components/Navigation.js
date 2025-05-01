import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const NavContainer = styled.nav`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 90;
  width: calc(100% - 120px);
  overflow: hidden;
`;

const NavList = styled.div`
  display: flex;
  justify-content: center;
  gap: 8rem;
`;

const NavItem = styled(motion.button)`
  font-size: 5rem;
  font-family: serif;
  font-weight: normal;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: ${props => props.isActive ? props.sectionColor : '#000'};
  white-space: nowrap;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${props => props.sectionColor};
    transform: scaleX(0);
    transition: transform 0.3s ease;
    transform-origin: right;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

const Navigation = ({ items, activeSection }) => {
  return (
    <NavContainer>
      <NavList>
        {items.map((item, index) => (
          <NavItem
            key={index}
            sectionColor={item.color}
            isActive={activeSection === index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5,
              delay: index * 0.1,
              ease: [0.6, 0.01, -0.05, 0.95]
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.name}
          </NavItem>
        ))}
      </NavList>
    </NavContainer>
  );
};

export default Navigation;
