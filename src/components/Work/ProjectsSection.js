import styled from 'styled-components';
import k8s from '../../assets/Kubernetes-Logo.png'
import argo from '../../assets/argo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
const ProjectsContainer = styled.div`
  width: 100%;
  height: calc(100% - 140px);
   margin-top : 140px;
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
  align-items: center;
  padding: 2rem;
`;


const CardsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction : column;
`

const CardsContainerTitle = styled.h1`
    font-size: clamp(1.75rem, 3vw, 2rem);
    font-weight: 600;
    margin-bottom: 1rem;
    animation: slideDown 0.8s ease-out 0.3s forwards;
`
const Line = styled.div`
  width: 80px;
  height: 3px;
  margin-bottom: 1rem;

  background: linear-gradient(to right, #000, #666);
  border-radius: 2px;
`

const Cards = styled.div`
  display : flex;
  flex-direction : row;
  gap : 1rem;
`
const Card = styled.div`
  width : 25rem;
  height : 20rem;
  border-radius: .3rem;  
  `
  const ProjectImg = styled.div`
    background-color : #D2D0A0;
    width : 100%;
    height : 70%; 
    border-radius: .3rem;
    padding : .4rem;
    display : flex;
    justify-content : center;
    align-items : center ;
  `

const ProjectIcons = styled.img`
  width : 120px;
  height : 120px;
  object-fit : cover;
`
const ProjectLinks = styled.div`
  display: flex;
  justify-content : space-between;
  align-items: center;

`
const CardTitle = styled.h1`
  font-weight: 700;
  padding : 1rem;
  font-size : 1.3rem;
   
`
const ProjectsSection = () => {


  return (
    <ProjectsContainer>
      <ContentWrapper>
        <CardsContainer>
          <CardsContainerTitle>DevOps </CardsContainerTitle>
          <Line></Line>
          <Cards>
            <Card>
              <ProjectImg>
                  <ProjectIcons src={k8s}></ProjectIcons>
                  <ProjectIcons src={argo}></ProjectIcons>
              </ProjectImg>
              <ProjectLinks>
                <CardTitle>INCEPTION OF THINGS</CardTitle>
                <a href="https://github.com/esafouan" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} color="black" size="xl" />
                </a>
              </ProjectLinks>
            </Card>

            <Card>
              <ProjectImg>
                  <ProjectIcons src={k8s}></ProjectIcons>
                  <ProjectIcons src={argo}></ProjectIcons>
              </ProjectImg>
              <ProjectLinks>
                <CardTitle>INCEPTION OF THINGS</CardTitle>
                <a href="https://github.com/esafouan" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} color="black" size="xl" />
                </a>
              </ProjectLinks>
            </Card>

            <Card>
              <ProjectImg>
                  <ProjectIcons src={k8s}></ProjectIcons>
                  <ProjectIcons src={argo}></ProjectIcons>
              </ProjectImg>
              <ProjectLinks>
                <CardTitle>INCEPTION OF THINGS</CardTitle>
                <a href="https://github.com/esafouan" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} color="black" size="xl" />
                </a>
              </ProjectLinks>
            </Card>
          </Cards>
          
        </CardsContainer>
      </ContentWrapper>
    </ProjectsContainer>
  );
};

export default ProjectsSection;
