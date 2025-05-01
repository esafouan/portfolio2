import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Navigation from './components/Navigation';

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  overflow: hidden;
`;

const Section = styled(motion.div)`
  height: 100vh;
  background-color: ${props => props.activeColor};
  width: ${props => props.isActive ? 'calc(100% - 120px)' : '60px'};
  position: relative;
  transition: width 0.7s cubic-bezier(0.76, 0, 0.24, 1),
              background-color 0.7s cubic-bezier(0.76, 0, 0.24, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid rgba(0,0,0,0.1);

  &:last-child {
    border-right: none;
  }
`;

const SectionTitle = styled.h1`
  font-size: 4rem;
  font-family: serif;
  font-weight: normal;
  color: ${props => props.isActive ? props.color : '#000'};
  margin: 0;
  white-space: nowrap;
  writing-mode: ${props => props.isActive ? 'horizontal-tb' : 'vertical-rl'};
  transform: ${props => props.isActive ? 'none' : 'rotate(180deg)'};
  transition: transform 0.7s cubic-bezier(0.76, 0, 0.24, 1),
              color 0.7s cubic-bezier(0.76, 0, 0.24, 1),
              writing-mode 0s linear ${props => props.isActive ? '0s' : '0.35s'};
`;

function App() {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    { name: 'About', color: '#F7F7F7' },
    { name: 'Projects', color: '#FFB22C' },
    { name: 'Contact', color: '#854836' },
  ];

  return (
    <AppContainer>
      <Navigation items={sections} activeSection={activeSection} />
      {sections.map((section, index) => (
        <Section
          key={index}
          isActive={activeSection === index}
          activeColor={section.color}
          onClick={() => setActiveSection(index)}
          style={{
            cursor: 'pointer',
          }}
        >
          <SectionTitle 
            isActive={activeSection === index}
            color={section.color}
          >
            {section.name}
          </SectionTitle>
        </Section>
      ))}
    </AppContainer>
  );
}

export default App;
