import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import  './index.css'; // or './App.css' if that’s where the styles are

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  position: relative;
`;

const Section = styled(motion.div)`
  width: 100%;
  height: ${props => props.$isActive ? 'calc(100% - 120px)' : '60px'};
  background-color: ${props => props.$activeColor};
  position: relative;
  transition: height 0.7s cubic-bezier(0.76, 0, 0.24, 1),
              background-color 0.7s cubic-bezier(0.76, 0, 0.24, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &:last-child {
    border-bottom: none;
  }
`;

const SectionTitle = styled.h1`
  font-size: 20px;
  font-family: apercu mono, sans-serif;
  font-weight: normal;
  color: ${props => props.$isActive ? props.$color : '#000'};
  margin: 0;
  white-space: nowrap;
  writing-mode: ${props => props.$isActive ? 'horizontal-tb' : 'horizontal-tb'};
  transform: ${props => props.$isActive ? 'none' : 'none'};
  transition: transform 0.7s cubic-bezier(0.76, 0, 0.24, 1),
              color 0.7s cubic-bezier(0.76, 0, 0.24, 1);
  position: ${props => props.$isActive ? 'absolute' : 'relative'};
  top: ${props => props.$isActive ? '2rem' : 'auto'};
  left: ${props => props.$isActive ? '2rem' : 'auto'};
`;

const ContentContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  // margin-top : ${props => props.$isActive ? '60px' : '120px'};;
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

    //text colors 
    // #264653
    // #2A9D8F
  const sections = [
    { name: 'About', color: '#E9C46A', component: AboutSection },
    { name: 'Projects', color: '#F4A261', component: ProjectsSection },
    { name: 'Contact', color: '#E76F51', component: ContactSection },
  ];

  // Animation variants for sections
  const sectionVariants = {
    hidden: (index) => ({
      x: '-100%',
      opacity: 0,
      transition: {
        type: 'spring',
        stiffness: 40,
        damping: 15,
      }
    }),
    visible: (index) => ({
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 40,
        damping: 15,
        delay: index * 0.4,
        duration: 1.2
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
            $activeIndex={activeSection}
            onClick={() => setActiveSection(index)}
            style={{
              cursor: 'pointer',
            }}
            initial="hidden"
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
