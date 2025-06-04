import React, { useRef } from 'react';
import './Skills.css';
import { motion } from 'framer-motion';
import ScrollIndicator from '../common/ScrollIndicator';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const skillVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const SkillsSection = () => {
  const containerRef = useRef(null);

  // Web Development Skills
  const webSkills = [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: 90 },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", level: 85 },
    { name: "Javascript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 85 },
    { name: "React js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 80 },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", level: 75 },
    { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", level: 70 },
    { name: "Node Js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", level: 75 },
    { name: "Express Js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", level: 75 }
  ];

  // DevOps Skills
  const devOpsSkills = [
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", level: 80 },
    { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", level: 65 },
    { name: "Argo CD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg", level: 60 },
    { name: "Github Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", level: 75 },
    { name: "Digital Ocean", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg", level: 75 },
    { name: "Vagrant", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vagrant/vagrant-original.svg", level: 75 },
    { name: "Ansible", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg", level: 75 }
  ];

  // Tools
  const toolsSkills = [
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", level: 85 },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", level: 90 }
  ];

  const skillCategories = [
    { skills: webSkills, title: "Web Development", color: "#F2F2F2" },
    { skills: devOpsSkills, title: "DevOps", color: "#EAE4D5" },
    { skills: toolsSkills, title: "Tools", color: "#B6B09F" }
  ];

  const renderSkill = (skill) => (
    <motion.div
      className="skill-card"
      variants={skillVariants}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="skill-icon">
        <img src={skill.icon} alt={skill.name} />
      </div>
      <div className="skill-info">
        <span className="skill-name">{skill.name}</span>
        <div className="skill-bar">
          <motion.div 
            className="skill-progress"
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="skills-section">
        <motion.div 
          className="skills-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skills-category"
              style={{ backgroundColor: category.color }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h2 className="category-title"># {category.title}</h2>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={skillVariants}
                  >
                    {renderSkill(skill)}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
    </section>
  );
};

export default SkillsSection;
