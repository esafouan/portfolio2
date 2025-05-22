import styled from 'styled-components';

import About from './AboutContent';

const AboutContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  display : flex;
  align-items : center ;
  justify-content : center;
`;



const AboutSection = () => {
  return (
    <AboutContainer>
              
        <About></About>

    </AboutContainer>
  );
};

export default AboutSection;
