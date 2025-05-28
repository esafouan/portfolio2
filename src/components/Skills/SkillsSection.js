import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { grainOverlay } from '../../styles/SharedStyles';

// Tech stack icons mapping
const techIcons = {
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  nextjs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  nestjs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg",
  mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  postgresql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  kubernetes: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  html5: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  css3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  sass: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  tailwindcss: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  c: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  figma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  photoshop: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
  illustrator: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
  sql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  bootstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  dotnet: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
};

// Skill categories with proficiency levels
const skillsData = [
  {
    category: "Web Dev",
    percentage: 50,
    skills: [
      { name: "html5", level: 95, label: "HTML" },
      { name: "css3", level: 90, label: "CSS" },
      { name: "javascript", level: 95, label: "JavaScript" },
      { name: "bootstrap", level: 85, label: "Bootstrap" },
      { name: "tailwindcss", level: 85, label: "TailwindCSS" },
      { name: "react", level: 90, label: "React JS" },
      { name: "sql", level: 85, label: "SQL" },
      { name: "nodejs", level: 80, label: "NodeJS" },
    ]
  },
  {
    category: "DevOps & Cloud",
    percentage: 40,
    skills: [
      { name: "docker", level: 75, label: "Docker" },
      { name: "kubernetes", level: 70, label: "K8S" },
      { name: "git", level: 90, label: "Git" },
    ]
  },
  {
    category: "Tools",
    percentage: 10,
    skills: [
      { name: "figma", level: 75, label: "Figma" },
      { name: "git", level: 90, label: "Git" },
    ]
  }
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  
  return (
    <SkillsContainer>
      <BluredCards>
        <WebDevCard 
          initial={{ opacity: 0.6 }}
          whileHover={{ opacity: 1 }}
          onHoverStart={() => setActiveCategory(0)}
          onHoverEnd={() => setActiveCategory(null)}
        >
          <CardTitle>Web Dev</CardTitle>
          <SkillsGrid>
            {skillsData[0].skills.map((skill, index) => (
              <SkillBadge key={index}>
                <SkillIcon src={techIcons[skill.name.toLowerCase()]} alt={skill.label} />
                <SkillName>{skill.label}</SkillName>
              </SkillBadge>
            ))}
          </SkillsGrid>
        </WebDevCard>

        <DevopsAndTools>
          <DevopsCard 
            initial={{ opacity: 0.6 }}
            whileHover={{ opacity: 1 }}
            onHoverStart={() => setActiveCategory(1)}
            onHoverEnd={() => setActiveCategory(null)}
          >
            <CardTitle>DevOps & Cloud</CardTitle>
            <SkillsGrid>
              {skillsData[1].skills.map((skill, index) => (
                <SkillBadge key={index}>
                  <SkillIcon src={techIcons[skill.name.toLowerCase()]} alt={skill.label} />
                  <SkillName>{skill.label}</SkillName>
                </SkillBadge>
              ))}
            </SkillsGrid>
          </DevopsCard>
          
          <ToolsCard 
            initial={{ opacity: 0.6 }}
            whileHover={{ opacity: 1 }}
            onHoverStart={() => setActiveCategory(2)}
            onHoverEnd={() => setActiveCategory(null)}
          >
            <CardTitle>Tools</CardTitle>
            <SkillsGrid>
              {skillsData[2].skills.map((skill, index) => (
                <SkillBadge key={index}>
                  <SkillIcon src={techIcons[skill.name.toLowerCase()]} alt={skill.label} />
                  <SkillName>{skill.label}</SkillName>
                </SkillBadge>
              ))}
            </SkillsGrid>
          </ToolsCard>
        </DevopsAndTools>
      </BluredCards>

      <PercentageSection>
        <AnimatePresence>
          {activeCategory !== null ? (
            <PercentageDisplay
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <PercentageValue>{skillsData[activeCategory].percentage}%</PercentageValue>
              <CategoryName>{skillsData[activeCategory].category}</CategoryName>
            </PercentageDisplay>
          ) : (
            <PercentageDisplay
              key="total"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <PercentageValue>100%</PercentageValue>
              <CategoryName>Total Skills</CategoryName>
            </PercentageDisplay>
          )}
        </AnimatePresence>
      </PercentageSection>
    </SkillsContainer>
  );
};

// Styled components
const SkillsContainer = styled.div`
  height: calc(100% - 180px);
  margin-top: 180px;
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  overflow: hidden;
`;

const BluredCards = styled.div`
  grid-area: 1 / 1 / 2 / 2; 
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  padding: 1rem;
`;

const WebDevCard = styled(motion.div)`
  grid-area: 1 / 1 / 2 / 2; 
  height: 100%;
  width: 100%;
  background: rgba(10, 10, 10, 0.9);
  border-radius: 8px;
  padding: 1.5rem;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
`;

const DevopsAndTools = styled.div`
  grid-area: 2 / 1 / 3 / 2; 
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 0px;
`;

const DevopsCard = styled(motion.div)`
  grid-area: 1 / 1 / 2 / 2; 
  height: 100%;
  width: 100%;
  background: rgba(10, 10, 10, 0.9);
  border-radius: 8px;
  padding: 1.5rem;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
`;

const ToolsCard = styled(motion.div)`
  grid-area: 1 / 2 / 2 / 3; 
  height: 100%;
  width: 100%;
  background: rgba(10, 10, 10, 0.9);
  border-radius: 8px;
  padding: 1.5rem;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
`;

const PercentageSection = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #90ee90;
  font-weight: 300;
  margin: 0 0 1.5rem 0;
  letter-spacing: 1px;
  opacity: 0.7;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 1rem;
`;

const SkillBadge = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
  padding: 0.5rem;
  transition: all 0.2s ease;
`;

const SkillIcon = styled.img`
  width: 28px;
  height: 28px;
  margin-bottom: 0.5rem;
  filter: brightness(0) saturate(100%) invert(88%) sepia(14%) saturate(1200%) hue-rotate(67deg) brightness(95%) contrast(87%);
  opacity: 0.7;
`;

const SkillName = styled.span`
  font-size: 0.7rem;
  color: #90ee90;
  text-align: center;
  opacity: 0.7;
  font-weight: 300;
`;

const PercentageDisplay = styled(motion.div)`
  text-align: center;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PercentageValue = styled.div`
  font-size: 8rem;
  font-weight: 200;
  color: #90ee90;
  line-height: 1;
  opacity: 0.3;
`;

const CategoryName = styled.div`
  font-size: 2.5rem;
  font-weight: 300;
  font-style: italic;
  color: #90ee90;
  margin-top: -0.5rem;
  opacity: 0.4;
`;

export default SkillsSection;
