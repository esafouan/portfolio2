import styled from 'styled-components';
import lila from '../../assets/lilaphone/lilaphone.png'
import lila5 from '../../assets/lilaphone/lilaphone5.png'
import lila2 from '../../assets/lilaphone/lilaphone2.png'
import lila3 from '../../assets/lilaphone/lilaphone3.png'
import lila4 from '../../assets/lilaphone/lilaphone4.png'
import choc from '../../assets/chocolate/choc.png'
import choc1 from '../../assets/chocolate/choc1.png'
import choc2 from '../../assets/chocolate/choc2.png'
import choc3 from '../../assets/chocolate/choc3.png'
import choc4 from '../../assets/chocolate/choc4.png'
import choc5 from '../../assets/chocolate/choc5.png'
import cloud1 from '../../assets/cloud11.png'
import k3s from '../../assets/k3s.webp'
import docker from '../../assets/docker.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import Carousel, {
  Slider,
  SliderContainer,
  SliderNextButton,
  SliderPrevButton,
} from '../carousel.tsx';
import { ChevronLeft, ChevronRight } from 'lucide-react';


const projectsData = [
  {
    id: 1,
    name: "Kubernetes DevOps Platform",
    description: "A comprehensive DevOps platform built with Kubernetes orchestration, featuring automated CI/CD pipelines, container management, and real-time monitoring. Implements GitOps practices with ArgoCD for seamless deployments.",
    techStack: ["Kubernetes", "Docker", "ArgoCD", "Helm"],
    images: [lila ,lila2, lila3, lila4 ,lila5],
    visitUrl: "https://your-k8s-project.com",
    githubUrl: "https://github.com/your-repo",
    featured: true
  },
  {
    id: 1,
    name: "Kubernetes DevOps Platform",
    description: "A comprehensive DevOps platform built with Kubernetes orchestration, featuring automated CI/CD pipelines, container management, and real-time monitoring. Implements GitOps practices with ArgoCD for seamless deployments.",
    techStack: ["Kubernetes", "Docker", "ArgoCD", "Prometheus", "Grafana", "Helm"],
    images: [choc, choc1, choc2,  choc3,choc4,  choc5],
    visitUrl: "https://your-k8s-project.com",
    githubUrl: "https://github.com/your-repo",
    featured: true
  },
  {
    id: 1,
    name: "Cloud 1",
    description: "A comprehensive DevOps platform built with Kubernetes orchestration, featuring automated CI/CD pipelines, container management, and real-time monitoring. Implements GitOps practices with ArgoCD for seamless deployments.",
    techStack: ["Kubernetes", "Docker", "ArgoCD", "Prometheus", "Grafana", "Helm"],
    images: [cloud1],
    visitUrl: "https://your-k8s-project.com",
    githubUrl: "https://github.com/your-repo",
    featured: true
  },
  {
    id: 1,
    name: "inception of things",
    description: "A comprehensive DevOps platform built with Kubernetes orchestration, featuring automated CI/CD pipelines, container management, and real-time monitoring. Implements GitOps practices with ArgoCD for seamless deployments.",
    techStack: ["Kubernetes", "Docker", "ArgoCD", "Prometheus", "Grafana", "Helm"],
    images: [k3s],
    visitUrl: "https://your-k8s-project.com",
    githubUrl: "https://github.com/your-repo",
    featured: true
  },
  {
    id: 1,
    name: "inception ",
    description: "A comprehensive DevOps platform built with Kubernetes orchestration, featuring automated CI/CD pipelines, container management, and real-time monitoring. Implements GitOps practices with ArgoCD for seamless deployments.",
    techStack: ["Kubernetes", "Docker", "ArgoCD", "Prometheus", "Grafana", "Helm"],
    images: [docker],
    visitUrl: "https://your-k8s-project.com",
    githubUrl: "https://github.com/your-repo",
    featured: true
  }
];

const ProjectsContainer = styled.div`
  width: 100%;
  height: calc(100vh - 140px);
  margin-top: 140px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(10px);
    z-index: 1;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 140px);
  overflow : scroll;


  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

`;

const CardsContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  height: 100vh ;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Card = styled.div`
  width: 100%;
 

  backdrop-filter: blur(20px);

  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;
  overflow: hidden;
  gap : 2rem;
  transition: all 0.3s ease;


  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const CarouselSection = styled.div`
  width: 45%;
  position: relative;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
 

  @media (max-width: 1024px) {
    width: 100%;
    padding: 1.5rem;
  }
`;

const CarouselWrapper = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  
  .carousel-container {
    transform: scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg);
    height: 100%;
    border-radius: 15px;
    overflow: hidden;
    transition: all 0.3s ease;

  }

  .carousel-image {
    border-radius: 15px;    
  }

  @media (max-width: 768px) {
    height: 300px;
    
    .carousel-container{
      transform: scale(1) perspective(800px) rotateY(-8deg) rotateX(1deg) rotate(1deg);
    }
  }
`;

const ProjectInfo = styled.div`
  width: 40%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 2rem;
  }
`;

const ProjectTitle = styled.h2`
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1rem;
  line-height: 1.2;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const TechStackContainer = styled.div`
  margin-bottom: 2rem;
`;

const TechStackTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechTag = styled.span`
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const CustomSliderPrevButton = styled(SliderPrevButton)`
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  z-index: 10;
  padding: 0.75rem;
  border: 2px solid rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  color: #2d3748;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.4);
    transform: translateY(-50%) scale(1.1);
  }

  &:disabled {
    opacity: 0.3;
  }
`;

const CustomSliderNextButton = styled(SliderNextButton)`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  z-index: 10;
  padding: 0.75rem;
  border: 2px solid rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  color: #2d3748;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.4);
    transform: translateY(-50%) scale(1.1);
  }

  &:disabled {
    opacity: 0.3;
  }
`;

const ProjectsSection = () => {
  const OPTIONS = { loop: true };
  return (
    <ProjectsContainer>
      <ContentWrapper>
        <CardsContainer>
          <Cards>
            {projectsData.map((project) => (
              <Card key={project.id}>
                <CarouselSection>
                  <CarouselWrapper>
                    <Carousel options={OPTIONS} className="carousel-container">
                      <SliderContainer className="w-full h-full"> 
                        {project.images.map((image, index) => (
                          <Slider key={index} className="w-full h-full ">
                            <div className="carousel-image h-full w-full flex justify-center items-center">
                              <img
                                src={image}
                                alt={`${project.name} screenshot ${index + 1}`}
                                className="w-fit h-auto object-cover p-4"
                              />
                            </div>
                          </Slider>
                        ))}
                      </SliderContainer>
                      
                      {project.images.length > 1 && (
                        <>
                          <CustomSliderPrevButton>
                            <ChevronLeft className="w-6 h-6" />
                          </CustomSliderPrevButton>
                          <CustomSliderNextButton>
                            <ChevronRight className="w-6 h-6" />
                          </CustomSliderNextButton>
                     
                        </>
                      )}
                    </Carousel>
                  </CarouselWrapper>
                </CarouselSection>

                <ProjectInfo>
                  <div>
                    <ProjectTitle>{project.name}</ProjectTitle>
                    <ProjectDescription>{project.description}</ProjectDescription>
                    
                    <TechStackContainer>
                      <TechStackTitle>Tech Stack:</TechStackTitle>
                      <TechStack>
                        {project.techStack.map((tech, index) => (
                          <TechTag key={index}>{tech}</TechTag>
                        ))}
                      </TechStack>
                    </TechStackContainer>
                  </div>
                  
                  <ButtonContainer>
                      <FontAwesomeIcon icon={faGithub} size="2x"/>
                  </ButtonContainer>
                </ProjectInfo>
              </Card>
            ))}
          </Cards>
        </CardsContainer>
      </ContentWrapper>
    </ProjectsContainer>
  );
};
export default ProjectsSection;