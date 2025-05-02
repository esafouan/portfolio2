import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  overflow: hidden;
`;

const Section = styled(motion.div)`
  height: 100vh;
  background-color: ${props => props.$activeColor};
  width: ${props => props.$isActive ? 'calc(100% - 120px)' : '60px'};
  position: relative;
  transition: width 0.7s cubic-bezier(0.76, 0, 0.24, 1),
              background-color 0.7s cubic-bezier(0.76, 0, 0.24, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &:last-child {
    border-right: none;
  }
`;

const SectionTitle = styled.h1`
  font-size: 4rem;
  font-family: serif;
  font-weight: normal;
  color: ${props => props.$isActive ? props.$color : '#000'};
  margin: 0;
  white-space: nowrap;
  writing-mode: ${props => props.$isActive ? 'horizontal-tb' : 'vertical-rl'};
  transform: ${props => props.$isActive ? 'none' : 'rotate(180deg)'};
  transition: transform 0.7s cubic-bezier(0.76, 0, 0.24, 1),
              color 0.7s cubic-bezier(0.76, 0, 0.24, 1),
              writing-mode 0s linear ${props => props.$isActive ? '0s' : '0.35s'};
  position: ${props => props.$isActive ? 'absolute' : 'relative'};
  top: ${props => props.$isActive ? '2rem' : 'auto'};
  left: ${props => props.$isActive ? '2rem' : 'auto'};
`;

const ContentContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  padding-top: 5rem; /* Space for the title */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
`;

function App() {
  const [activeSection, setActiveSection] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    // Hide content during transition
    setShowContent(false);
    
    // Show content after transition completes
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 700); // Match the transition duration
    
    return () => clearTimeout(timer);
  }, [activeSection]);

  const sections = [
    { name: 'About', color: '#F7F7F7', component: AboutSection },
    { name: 'Projects', color: '#FFB22C', component: ProjectsSection },
    { name: 'Contact', color: '#854836', component: ContactSection },
  ];

  // Animation variants for sections
  const sectionVariants = {
    hidden: (index) => ({
      y: activeSection === index ? 0 : '100vh',
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 20,
        delay: index * 0.2,
      }
    }),
    visible: (index) => ({
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 20,
        delay: activeSection === index ? 0 : index * 0.2,
      }
    })
  };

  // Animation variants for content
  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        delay: 0.2 // Small delay after section expansion
      }
    }
  };

  return (
    <AppContainer>
      <AnimatePresence>
        {sections.map((section, index) => (
          <Section
            key={index}
            $index={index}
            $isActive={activeSection === index}
            $activeColor={section.color}
            onClick={() => setActiveSection(index)}
            style={{
              cursor: 'pointer',
            }}
            initial={isLoaded || activeSection === index ? false : "hidden"}
            animate="visible"
            variants={sectionVariants}
            custom={index}
          >
            <SectionTitle 
              $isActive={activeSection === index}
              $color={section.color}
              $index={index}          
            >
              {section.name}
            </SectionTitle>
            
            {activeSection === index && showContent && (
              <ContentContainer
                initial="hidden"
                animate="visible"
                variants={contentVariants}
              >
                <section.component />
              </ContentContainer>
            )}
          </Section>
        ))}
      </AnimatePresence>
    </AppContainer>
  );
}

export default App;
