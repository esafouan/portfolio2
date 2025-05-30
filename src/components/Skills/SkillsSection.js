import React, { useState, useEffect } from 'react';
import './Skills.css';
import { motion, AnimatePresence } from 'framer-motion';

// Animation variants for text and numbers
const textVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
};

const numberVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 10,
      duration: 0.5
    }
  },
  exit: { 
    opacity: 0, 
    scale: 1.2,
    transition: {
      duration: 0.3
    }
  }
};

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [isHovering, setIsHovering] = useState(false);

  // Web Development Skills
  const webSkills = [
    { name: "HTML", experience: "2 YRS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", experience: "2 YRS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Javascript", experience: "2 YRS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React js", experience: "2 YRS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "SQL", experience: "2 YRS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Angular", experience: "2 YRS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
    { name: "Node Js", experience: "2 YRS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" }, 
    { name: "Express Js", experience: "2 YRS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" }
  ];

  // DevOps Skills
  const devOpsSkills = [
    { name: "Docker", experience: "2 YRS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Kubernetes", experience: "1 YR", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
    { name: "Argo CD", experience: "1 YR", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg" },
    { name: "Github Actions", experience: "1 YR", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
  ];

  // Tools & Version Control
  const toolsSkills = [
    { name: "Figma", experience: "1 YRS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Git", experience: "3 YRS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }
  ];

  // Skill categories with percentages
  const skillCategories = [
    { skills: webSkills, title: "Web", percentage: 85 },
    { skills: devOpsSkills, title: "DevOps", percentage: 70 },
    { skills: toolsSkills, title: "Tools", percentage: 90 }
  ];

  // Function to render a skill item
  const renderSkill = (skill, index) => (
    <div className="skill" key={index}>
      <i className="iconContainer">
        <img src={skill.icon} alt={`${skill.name} icon`} />
      </i>
      <div className="skillContent">
        <p>{skill.name}</p>
        <p>XP: {skill.experience}</p>
      </div>
    </div>
  );

  // Function to render a skills container
  const renderSkillsContainer = (category, categoryIndex) => (
    <div 
      className="skillsContainer" 
      key={categoryIndex}
      onMouseEnter={() => {
        setActiveCategory(categoryIndex);
        setIsHovering(true);
      }}
      onMouseLeave={() => {
        setIsHovering(false);
      }}
    >
      {category.skills.map(renderSkill)}
    </div>
  );

  return (
    <section className="skills">
      <div 
        className="leftSide"
        onMouseLeave={() => {
          setIsHovering(false);
        }}
      >
        {skillCategories.map(renderSkillsContainer)}
      </div>
      

    </section>
  );
};


export default SkillsSection;
