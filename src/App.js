import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import AboutSection from './components/about/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import  './index.css'; // or './App.css' if that’s where the styles are
import myImage from './assets/image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-columns: 500px 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

const DynamicPart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
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
`;

const SectionTitle = styled.h1`
  font-size: 20px;
  font-family: apercu mono, sans-serif;
  font-weight: normal;
  color: ${props => props.$isActive ? props.$color : '#000'};
  margin: 0;
  white-space: nowrap;
  writing-mode: ${props => props.$isActive ? 'vertical-rl' : 'vertical-rl'};
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


const FixedPart = styled.div`
  width: 100%;
  height: 100%;
  grid-area: 1 / 1 / 2 / 2;
  /* background-color: red; */
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
  gap: 4rem;
`



const Title = styled.p`
  font-size : 2.25rem;
`;

const Sign = styled.svg`
  width: 300px;
  stroke: black;
  stroke-width: 3;
  stroke-linecap: round;
  transform: translate(30px, 0);
  `;

const Image = styled.img`
  width: 40%;
  min-width : 240px;
  max-width : 350px;
  height : auto;
  object-fit: cover;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

  transition: transform 0.3s ease;

  &:hover {
  transform: scale(1.03);
  }
  `;
const Links = styled.div`
  display : flex ;
  gap : 2rem;
  `


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
    // #222831
  const sections = [
    { name: 'About', color: '#F2F2F2', component: AboutSection },
    { name: 'Projects', color: '#EAE4D5', component: ProjectsSection },
    { name: 'Contact', color: '#B6B09F', component: ContactSection },
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

          <Title>Software Enginner</Title>

          <Sign viewBox="-50 0 300 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2 7.00395C29.9227 6.67154 57.7403 2.48616 85.7581 2.13811C93.9379 2.0365 102.164 1.51045 110.142 3.50492C114.251 4.53213 113.245 6.88364 110.798 10.175C105.504 17.2946 95.2859 19.5732 86.9609 20.344C71.1719 21.806 54.9715 20.7814 39.1226 20.7814C33.5224 20.7814 27.9891 20.8789 22.4475 21.7655C21.0803 21.9842 20.7088 22.4625 22.4475 23.187C31.6696 27.0295 42.9773 27.4595 52.736 28.2169C64.6486 29.1413 76.6034 29.4334 88.5464 29.5837C91.4876 29.6207 97.6574 28.8991 100.957 29.857C106.129 31.3584 90.64 32.9479 85.4848 34.5042C75.0199 37.6634 64.4202 37.044 53.8295 39.2607C51.1721 39.8169 68.5986 44.5454 70.6686 45.876C72.4767 47.0384 66.528 50.7975 65.748 51.726C63.5311 54.3652 66.8976 55.6372 67.9349 57.1932"
              pathLength="1"
              strokeDasharray="1px 1px"
              strokeDashoffset="0px"
            />
          </Sign>

          <Image src={myImage} alt="myImage">

          </Image>



          <Sign className='rev-shape' viewBox="-50 0 300 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2 7.00395C29.9227 6.67154 57.7403 2.48616 85.7581 2.13811C93.9379 2.0365 102.164 1.51045 110.142 3.50492C114.251 4.53213 113.245 6.88364 110.798 10.175C105.504 17.2946 95.2859 19.5732 86.9609 20.344C71.1719 21.806 54.9715 20.7814 39.1226 20.7814C33.5224 20.7814 27.9891 20.8789 22.4475 21.7655C21.0803 21.9842 20.7088 22.4625 22.4475 23.187C31.6696 27.0295 42.9773 27.4595 52.736 28.2169C64.6486 29.1413 76.6034 29.4334 88.5464 29.5837C91.4876 29.6207 97.6574 28.8991 100.957 29.857C106.129 31.3584 90.64 32.9479 85.4848 34.5042C75.0199 37.6634 64.4202 37.044 53.8295 39.2607C51.1721 39.8169 68.5986 44.5454 70.6686 45.876C72.4767 47.0384 66.528 50.7975 65.748 51.726C63.5311 54.3652 66.8976 55.6372 67.9349 57.1932"
              pathLength="1"
              strokeDasharray="1px 1px"
              strokeDashoffset="0px"
            />
          </Sign>

          <Links>
            <a href="https://github.com/esafouan" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} color="black" size="2x" />
            </a>

            <a href="https://linkedin.com/in/el-mahdi-safouane-88b554273/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} color="black" size="2x" />
            </a>

            <a href="mailto:elmahdisafouane@.com">
              <FontAwesomeIcon icon={faEnvelope} color="black" size="2x" />
            </a>

            {/* <a href="tel:+2126475384">
              <FontAwesomeIcon icon={faPhone} color="black" size="2x" />
            </a> */}
          </Links>


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
      </DynamicPart>


    </AppContainer>
  );
}

export default App;
