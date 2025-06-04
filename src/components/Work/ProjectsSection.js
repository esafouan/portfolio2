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


import tran5 from '../../assets/pong/tran5.webp'
import tran1 from '../../assets/pong/tran1.webp'
import tran2 from '../../assets/pong/tran2.webp'
import tran3 from '../../assets/pong/tran3.webp'
import tran4 from '../../assets/pong/tran4.webp'

import cub from '../../assets/cub3d/cub.jpg'
import cub1 from '../../assets/cub3d/cub2.jpg'
import shell from '../../assets/cub3d/shell.png'
import shell1 from '../../assets/cub3d/shell1.png'

import cloud1 from '../../assets/cloud11.png'
import k3s from '../../assets/k3s.webp'
import docker from '../../assets/docker.png'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import React, { useState, useRef, useEffect } from 'react';
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
  
    @media (max-width: 768px) {
    gap: 0.75rem;
    padding: 0.75rem;
  }

  @media (max-width: 580px) {
    gap: 0.5rem;
    padding: 0.5rem;
    flex-direction: column;
    width: fit-content;
  }
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
    name: "PHONE STORE ERP SYSTEM",
    subtitle: "Complete solution for phone retail inventory and sales management",
    description: "Built the complete front-end for an ERP web application used by over five phone stores to manage daily operations",
    techStack: ["Angular", "Ngrx", "Nestjs", "Postgresql", "Tailwind"],
    images: [lila, lila2, lila3, lila4, lila5],
    visitUrl: "https://your-k8s-project.com",
    githubUrl: "https://github.com/your-repo",
    featured: true,
    category: "web"
  },
  {
    id: 2,
    name: "ECOMMERCE DASHBOARD",
    subtitle: "End-to-end e-commerce platform with inventory and order management",
    description: "Developed a role-based web application to manage products across multiple buyers, with comprehensive tracking of orders and inventory.",
    techStack: ["Angular", "Ngrx", "Nestjs", "Postgresql", "Tailwind"],
    images: [choc, choc1, choc2, choc3, choc4, choc5],
    visitUrl: "https://your-k8s-project.com",
    githubUrl: "https://github.com/your-repo",
    featured: true,
    category: "web"
  },
  {
    id: 3,
    name: "3D MULTIPLAYER PING PONG",
    subtitle: "Real-time 3D multiplayer game with physics simulation",
    description: "A real-time 3D multiplayer game with physics simulation implemented using React, Three.js, and Nest.js.",
    techStack: ["React", "ThreeJs", "Css", "Nestjs", "Postgresql"],
    images: [tran1, tran2, tran3, tran4, tran5],
    visitUrl: "https://your-k8s-project.com",
    githubUrl: "https://github.com/your-repo",
    featured: true,
    category: "web"
  },
  {
    id: 4, // Fixed ID sequence
    name: "Cloud 1",
    subtitle: "Deployment Automation with Ansible and Terraform",
    description: "Provisioned DigitalOcean infrastructure with Terraform and configured services with Ansible to automate the deployment of a WordPress website.", // Fixed typo in "deployment"
    techStack: ["Ansible", "Terraform", "Docker", "DigitalOcean"],
    images: [cloud1],
    visitUrl: "https://your-k8s-project.com",
    githubUrl: "https://github.com/your-repo",
    featured: true,
    category: "devops"
  },
  {
    id: 5,
    name: "inception of things",
    subtitle: "Kubernetes-based container orchestration",
    description: "Automated infrastructure with Vagrant and deployed microservices using lightweight K3s Kubernetes. Leveraged Argo CD for GitOps-driven deployments and integrated GitLab CI/CD for streamlined workflows.", // Removed extra period
    techStack: ["Kubernetes", "Docker", "ArgoCD", "k3d", "k3s", "GitLab", "vagrant"],
    images: [k3s],
    visitUrl: "https://your-k8s-project.com",
    githubUrl: "https://github.com/your-repo",
    featured: true,
    category: "devops"
  },
  {
    id: 6,
    name: "inception",
    subtitle: "Containerized application stack with Docker Compose",
    description: "Built a containerized WordPress platform using Docker, Nginx, and MariaDB for a complete production-ready deployment.",
    techStack: ["Docker", "Docker compose", "WORDPRESS", "mongodb"],
    images: [docker],
    visitUrl: "https://your-k8s-project.com",
    githubUrl: "https://github.com/your-repo",
    featured: true,
    category: "devops"
  },
  {
    id: 7, // Fixed duplicate ID
    name: "CUBE 3D",
    subtitle: "Basic raycasting game in C",
    description: "A basic raycasting engine inspired by Wolfenstein 3D implemented in C.", // Removed repetition
    techStack: ["C"],
    images: [cub, cub1],
    visitUrl: "https://your-project.com",
    githubUrl: "https://github.com/your-repo",
    featured: true,
    category: "lowlevel"
  },
  {
    id: 8, // Fixed duplicate ID
    name: "MINI SHELL",
    subtitle: "A basic shell program in C.",
    description: "A basic shell program in C. It implements redirections and pipes, as well as environment variable expansions and the cd, echo, env, exit, export, pwd and unset builtin commands.", // Removed extra period
    techStack: ["C"],
    images: [shell, shell1],
    visitUrl: "https://your-project.com",
    githubUrl: "https://github.com/your-repo",
    featured: true,
    category: "lowlevel"
  }
];

// Tech stack icons mapping
const techIcons = {
  // Fix Nestjs and Tailwind icons
  "Nestjs": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
  "Tailwind": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  
  // Keep other icons the same
  "Angular": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  "Ngrx": "https://ngrx.io/assets/images/badge.svg",
  "Postgresql": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "ThreeJs": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
  "Css": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  
  // Rest of the icons remain unchanged
  "Ansible": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg",
  "Terraform": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "DigitalOcean": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg",
  "Kubernetes": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  "ArgoCD": "https://argo-cd.readthedocs.io/en/stable/assets/logo.png",
  "GitLab": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
  "vagrant": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vagrant/vagrant-original.svg",
  "WORDPRESS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  "mongodb": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "k3s": "https://k3s.io/img/k3s-logo-light.svg",
  "k3d": "https://k3d.io/v5.5.1/static/img/k3d_logo_black_blue.svg",
  "C": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  "Assembly": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  "Embedded Systems": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/embeddedc/embeddedc-original.svg",
  "RTOS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
};

const ProjectsContainer = styled.div`
  width: 100%;
  height: 100vh;
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

  @media (max-width: 1150px) {
      min-height: calc(100vh - 350px);
  height: calc(100vh - 354px);
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
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: all 0.3s ease;
  border-radius: 12px;

  @media (max-width: 1524px) {
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

  @media (max-width: 1524px) {
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
   justify-content: center;
    align-items: center;

  @media (max-width: 1524px) {
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
  const contentWrapperRef = useRef(null);
  const [key, setKey] = useState(0); // Add a key to force AnimatePresence remount
  
  const filteredProjects = projectsData.filter(project => project.category === activeCategory);

  // Reset scroll position when category changes
  const handleCategoryChange = (category) => {
    if (category === activeCategory) return;
    
    // Update category
    setActiveCategory(category);
    
    // Force AnimatePresence to remount by changing key
    setKey(prevKey => prevKey + 1);
    
    // Reset scroll position immediately
    if (contentWrapperRef.current) {
      contentWrapperRef.current.scrollTop = 0;
    }
  };
  
  // Effect to ensure scroll is reset when category changes
  useEffect(() => {
    if (contentWrapperRef.current) {
      contentWrapperRef.current.scrollTop = 0;
    }
  }, [activeCategory]);

  return (
    <ProjectsContainer $activeCategory={activeCategory}>
      <Holder>
        <CategoryFilters>
          <CategoryButton 
            $active={activeCategory === 'web'} 
            onClick={() => handleCategoryChange('web')}
          >
            Web Development
          </CategoryButton>
          <CategoryButton 
            $active={activeCategory === 'devops'} 
            onClick={() => handleCategoryChange('devops')}
          >
            DevOps & Cloud
          </CategoryButton>
          <CategoryButton 
            $active={activeCategory === 'lowlevel'} 
            onClick={() => handleCategoryChange('lowlevel')}
          >
            Systems Programming
          </CategoryButton>
        </CategoryFilters>
      </Holder>
      <ContentWrapper ref={contentWrapperRef}>
        <CardsContainer>
          <Cards>
            <AnimatePresence mode="wait" key={key}>
              {filteredProjects.map((project) => (
                <Card 
                  key={project.id}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout
                  $category={activeCategory}
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
                        <TechStack>
                          {project.techStack.map((tech, index) => (
                            <TechTag key={index}>
                              {techIcons[tech] ? (
                                <img src={techIcons[tech]} alt={tech} />
                              ) : (
                                <span style={{ width: '22px', height: '22px', display: 'inline-block' }}></span>
                              )}
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
