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
import { faGlobe, faServer, faCode } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Carousel, {
  Slider,
  SliderContainer,
  SliderNextButton,
  SliderPrevButton,
} from '../carousel.tsx';
import { ChevronLeft, ChevronRight, Container, Menu } from 'lucide-react';

// Smoother animation variants
const cardVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.15
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

const imageVariants = {
  hidden: { x: -30, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { 
      type: "spring",
      stiffness: 50,  // Lower stiffness for smoother motion
      damping: 20,    // Higher damping to reduce bounce
      duration: 0.8   // Longer duration for smoother feel
    }
  }
};

const contentVariants = {
  hidden: { x: 30, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { 
      type: "spring",
      stiffness: 50,  // Lower stiffness for smoother motion
      damping: 20,    // Higher damping to reduce bounce
      duration: 0.8,  // Longer duration for smoother feel
      delay: 0.1
    }
  }
};

// Replace the bottom navigation with a top category filter
const CategoryFilters = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  padding: 1rem 0;
  position: sticky;
`;

const CategoryButton = styled.button`
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  font-size: 0.9rem;
  background: ${props => props.$active ? 'rgba(0, 0, 0, 0.8)' : 'transparent'};
  color: ${props => props.$active ? 'white' : '#2d3748'};
  border: 1px solid ${props => props.$active ? 'transparent' : 'rgba(0, 0, 0, 0.2)'};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    background: ${props => props.$active ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.1)'};
  }
`;

const projectsData = [
  {
    id: 1,
    name: "ERP PHONES STORES MANAGEMENT",
    subtitle: "Complete solution for phone retail inventory and sales management",
    description: "A comprehensive DevOps platform built with Kubernetes orchestration, featuring automated CI/CD pipelines, container management, and real-time monitoring. Implements GitOps practices with ArgoCD for seamless deployments.",
    techStack: ["angular", "ngrx", "nestjs", "postgresql"],
    images: [lila, lila2, lila3, lila4, lila5],
    visitUrl: "https://your-k8s-project.com",
    githubUrl: "https://github.com/your-repo",
    featured: true,
    category: "web"
  },
  {
    id: 2,
    name: "ERP ECOMMERCE",
    subtitle: "End-to-end e-commerce platform with inventory and order management",
    description: "A comprehensive DevOps platform built with Kubernetes orchestration, featuring automated CI/CD pipelines, container management, and real-time monitoring. Implements GitOps practices with ArgoCD for seamless deployments.",
    techStack: ["angular", "ngrx", "nestjs", "postgresql"],
    images: [choc, choc1, choc2, choc3, choc4, choc5],
    visitUrl: "https://your-k8s-project.com",
    githubUrl: "https://github.com/your-repo",
    featured: true,
    category: "web"
  },
  {
    id: 3,
    name: "Cloud 1",
    subtitle: "Infrastructure as code deployment for cloud-native applications",
    description: "A comprehensive DevOps platform built with Kubernetes orchestration, featuring automated CI/CD pipelines, container management, and real-time monitoring. Implements GitOps practices with ArgoCD for seamless deployments.",
    techStack: ["Ansible", "Terraform", "Docker", "DigitalOcean"],
    images: [cloud1],
    visitUrl: "https://your-k8s-project.com",
    githubUrl: "https://github.com/your-repo",
    featured: true,
    category: "devops"
  },
  {
    id: 4,
    name: "inception of things",
    subtitle: "Kubernetes-based container orchestration and deployment platform",
    description: "A comprehensive DevOps platform built with Kubernetes orchestration, featuring automated CI/CD pipelines, container management, and real-time monitoring. Implements GitOps practices with ArgoCD for seamless deployments.",
    techStack: ["Kubernetes", "Docker", "ArgoCD", "k3d", "k3s", "GitLab", "vagrant"],
    images: [k3s],
    visitUrl: "https://your-k8s-project.com",
    githubUrl: "https://github.com/your-repo",
    featured: true,
    category: "devops"
  },
  {
    id: 5,
    name: "inception",
    subtitle: "Containerized application stack with Docker Compose",
    description: "A comprehensive DevOps platform built with Kubernetes orchestration, featuring automated CI/CD pipelines, container management, and real-time monitoring. Implements GitOps practices with ArgoCD for seamless deployments.",
    techStack: ["Docker", "Docker compose", "WORDPRESS", "mongodb"],
    images: [docker],
    visitUrl: "https://your-k8s-project.com",
    githubUrl: "https://github.com/your-repo",
    featured: true,
    category: "devops"
  },
  {
    id: 6,
    name: "Embedded Systems Controller",
    subtitle: "Low-level firmware for real-time embedded applications",
    description: "A low-level system controller implemented in C for embedded devices, featuring real-time processing capabilities, memory optimization, and hardware interfacing.",
    techStack: ["C", "Assembly", "Embedded Systems", "RTOS"],
    images: [/* your images */],
    visitUrl: "https://your-project.com",
    githubUrl: "https://github.com/your-repo",
    featured: true,
    category: "lowlevel"
  }
];

// Tech stack icons mapping
const techIcons = {
  angular: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  ngrx: "https://ngrx.io/assets/images/badge.svg",
  nestjs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg",
  postgresql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  Ansible: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg",
  Terraform: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
  Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  DigitalOcean: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg",
  Kubernetes: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  ArgoCD: "https://argo-cd.readthedocs.io/en/stable/assets/logo.png",
  GitLab: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
  vagrant: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vagrant/vagrant-original.svg",
  WORDPRESS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  k3s: "https://k3s.io/img/k3s-logo-light.svg",
  k3d: "https://k3d.io/v5.5.1/static/img/k3d_logo_black_blue.svg",
  "C": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  "Assembly": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", // Replace with actual Assembly icon
  "Embedded Systems": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/embeddedc/embeddedc-original.svg", // Replace with actual icon
  "RTOS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", // Replace with actual RTOS icon
};

const ProjectsContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content : center;

`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: calc(100vh - 140px);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 140px);
  overflow: scroll;
  padding-top: 0; /* Remove top padding to account for fixed header */

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CardsContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem; /* Add padding at bottom for better scrolling */
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Card = styled(motion.div)`
  width: 100%;
  margin-bottom: 3rem;
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  gap: 2rem;
  transition: all 0.3s ease;
  border-radius: 12px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const CarouselSection = styled(motion.div)`
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
    height: 100%;
    border-radius: 15px;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }

  .carousel-image {
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background: rgba(255, 255, 255, 0.05);
  }

  .image-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }

  .project-image {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const ProjectInfo = styled(motion.div)`
  width: 40%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 2rem;
  }
`;

const ProjectTitle = styled.h2`
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 0.5rem;
  line-height: 1.2;
`;

const ProjectSubtitle = styled.p`
  font-size: 1rem;
  color: #718096;
  font-weight: 500;
  margin-bottom: 1.5rem;
  font-style: italic;
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
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #2d3748;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    background: rgba(255, 255, 255, 0.3);
  }

  img {
    width: 22px;
    height: 22px;
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
const Holder =  styled.div`
  height: 140px;
  width: 100%;
display : flex;
justify-content : center;
align-items : center;

`;

const ProjectsSection = () => {
  const OPTIONS = { loop: true };
  const [activeCategory, setActiveCategory] = useState('web');
  
  const filteredProjects = projectsData.filter(project => project.category === activeCategory);

  return (
    <ProjectsContainer>
      <Holder>
        <CategoryFilters>
          <CategoryButton 
            $active={activeCategory === 'web'} 
            onClick={() => setActiveCategory('web')}
          >
            Web Development
          </CategoryButton>
          <CategoryButton 
            $active={activeCategory === 'devops'} 
            onClick={() => setActiveCategory('devops')}
          >
            DevOps & Cloud
          </CategoryButton>
          <CategoryButton 
            $active={activeCategory === 'lowlevel'} 
            onClick={() => setActiveCategory('lowlevel')}
          >
            Systems Programming
          </CategoryButton>
        </CategoryFilters>
      </Holder>
      <ContentWrapper>
        <CardsContainer>
          <Cards>
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <Card 
                  key={project.id}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout
                >
                  <CarouselSection
                    variants={imageVariants}
                  >
                    <CarouselWrapper>
                      <Carousel options={OPTIONS} className="carousel-container">
                        <SliderContainer className="w-full h-full"> 
                          {project.images.map((image, index) => (
                            <Slider key={index} className="w-full h-full">
                              <div className="carousel-image">
                                <div className="image-wrapper">
                                  <img
                                    src={image}
                                    alt={`${project.name} screenshot ${index + 1}`}
                                    className="project-image"
                                  />
                                </div>
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

                  <ProjectInfo
                    variants={contentVariants}
                  >
                    <div>
                      <ProjectTitle>{project.name}</ProjectTitle>
                      <ProjectSubtitle>{project.subtitle}</ProjectSubtitle>
                      <ProjectDescription>{project.description}</ProjectDescription>
                      
                      <TechStackContainer>
                        <TechStackTitle>Tech Stack:</TechStackTitle>
                        <TechStack>
                          {project.techStack.map((tech, index) => (
                            <TechTag key={index}>
                              {techIcons[tech] && <img src={techIcons[tech]} alt={tech} />}
                              {tech}
                            </TechTag>
                          ))}
                        </TechStack>
                      </TechStackContainer>
                    </div>
                    
                    <ButtonContainer>
                      {/* Your buttons here */}
                    </ButtonContainer>
                  </ProjectInfo>
                </Card>
              ))}
            </AnimatePresence>
          </Cards>
        </CardsContainer>
      </ContentWrapper>
    </ProjectsContainer>
  );
};
export default ProjectsSection;
