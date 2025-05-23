import styled from 'styled-components';

import About from './AboutContent';

const AboutContainer = styled.div`
  height: calc(100% - 116px);
  margin-top : 116px;
  width: 100%;
  position: relative;
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
