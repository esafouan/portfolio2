import styled from 'styled-components';

const ProjectsContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const ProjectsSection = () => {
  return (
    <ProjectsContainer>
      <ContentWrapper>
        {/* Your projects content will go here */}
      </ContentWrapper>
    </ProjectsContainer>
  );
};

export default ProjectsSection;
