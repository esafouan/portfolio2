import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  color: #333;
  overflow-y: hidden;
`;

const ProjectsTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-family: serif;
  color: #FFB22C;
`;

const ProjectCard = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: #FFB22C;
`;

const ProjectDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Tag = styled.span`
  background-color: #FFB22C;
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
`;

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with product management, user authentication, and payment processing.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      title: "Portfolio Website",
      description: "An interactive portfolio website with smooth animations and responsive design.",
      tags: ["React", "Styled Components", "Framer Motion"]
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team features.",
      tags: ["React", "Firebase", "Material UI"]
    }
  ];

  return (
    <ProjectsContainer>
      <ProjectsTitle>My Projects</ProjectsTitle>
      {projects.map((project, index) => (
        <ProjectCard key={index}>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>
          <ProjectTags>
            {project.tags.map((tag, i) => (
              <Tag key={i}>{tag}</Tag>
            ))}
          </ProjectTags>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  );
};

export default ProjectsSection;
