import styled from 'styled-components';

const AboutContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  display : flex;
  justify-content : center ;
  // align-items : center ;
`;

const ContentHeader = styled.h3`
  margin-top : 4rem;
`;


const AboutSection = () => {
  return (
    <AboutContainer>
      <ContentWrapper>
        <ContentHeader>
          el-mahdi
        </ContentHeader>
      </ContentWrapper>
    </AboutContainer>
  );
};

export default AboutSection;
