import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import AboutSection from './components/about/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import  './index.css'; // or './App.css' if that’s where the styles are
import BigScreenLayout from './components/fixedpart/BigScreen';
import { useWindowWidth } from './hooks/resizeWindow';
import SmallScreenLayout from './components/fixedpart/SmallScreen';


const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-columns: minmax(300px, 400px)  1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;


  @media (max-width: 1150px) {
    /* Stack vertically */
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }
`;

const DynamicPart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content : center;
`

const Section = styled(motion.div)`
  grid-area: 1 / 2 / 2 / 3; 
  height: 100%;
  width: ${props => props.$isActive ? 'calc(100% - 120px)' : '60px'};
  background-color: ${props => props.$activeColor};
  position: relative;
  transition: width 0.7s cubic-bezier(0.76, 0, 0.24, 1),
              background-color 0.7s cubic-bezier(0.76, 0, 0.24, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 750px) {
    width: ${props => props.$isActive ? 'calc(100% - 70px)' : '35px'};
  }

`;

const SectionTitle = styled.h1`
  font-size: 16px;
  color: black;
  margin: 0;
  white-space: nowrap;
  writing-mode: ${props => props.$isActive ? 'vertical-rl' : 'vertical-rl'};
  text-orientation: upright;
  transform: ${props => props.$isActive ? 'none' : 'none'};
  transition: transform 0.7s cubic-bezier(0.76, 0, 0.24, 1),
              color 0.7s cubic-bezier(0.76, 0, 0.24, 1);
  position: ${props => props.$isActive ? 'absolute' : 'relative'};
  top: ${props => props.$isActive ? '2rem' : 'auto'};
  left: ${props => props.$isActive ? '2rem' : 'auto'};
  @media (max-width: 750px) {
   font-size: 12px;
  }
`;

const ContentContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;
`;

const FixedPart = styled.div`
  width: 100%;
  height: 100%;
  grid-area: 1 / 1 / 2 / 2;

  display: flex;
  flex-direction: column; /* Row by default */
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding: 2rem;

  @media (max-width: 1150px) {
    flex-direction: row;
    gap: 2rem;
  }
`;

function App() {
  const [activeSection, setActiveSection] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const width = useWindowWidth()

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
    { name: 'ABOUT', color: '#F2F2F2', component: AboutSection },
    { name: 'PROJECTS', color: '#EAE4D5', component: ProjectsSection },
    { name: 'TECH-STACK', color: '#B6B09F', component: ContactSection },
  ];

  // Animation variants for sections
  const sectionVariants = {
    hidden: (index) => ({
      y: '-100%',
      opacity: 0,
      transition: {
        type: 'spring',
        stiffness: 40,
        damping: 15,
      }
    }),
    visible: (index) => ({
      y: 0,
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

      <FixedPart>

        { width >= 1150 ? <BigScreenLayout/> : <SmallScreenLayout/>}

      </FixedPart>

      <DynamicPart>

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
                # {section.name}
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

      </DynamicPart>


    </AppContainer>
  );
}

export default App;
