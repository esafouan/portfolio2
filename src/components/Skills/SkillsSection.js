import React, { useState, useEffect } from 'react';
import  './Skills.css'; // or './App.css' if that’s where the styles are





const SkillsSection = () => {
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
    { skills: webSkills, title: "Web Development", percentage: 85 },
    { skills: devOpsSkills, title: "DevOps", percentage: 70 },
    { skills: toolsSkills, title: "Tools & Version Control", percentage: 90 }
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
    <div className="skillsContainer" key={categoryIndex}>
      {category.skills.map(renderSkill)}
    </div>
  );
  const [animatedPercent, setAnimatedPercent] = useState(0);

  const targetPercent = 85; // Set this dynamically per category if needed

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current > targetPercent) {
        clearInterval(interval);
      } else {
        setAnimatedPercent(current);
      }
    }, 20); // Speed of animation
    return () => clearInterval(interval);
  }, []);

  // Split digits and calculate translateY for each digit
  const digits = String(animatedPercent).padStart(3, '0').split('').map(Number);
  const getTranslateY = digit => `translateY(-${digit * 34}px)`; // Adjust 34px to digit height

  return (
    <section className="skills" data-projection-id="7" style={{opacity: 1}}>
      <div className="leftSide" data-projection-id="8" style={{opacity: 1, transform: 'rotateY(15deg) translateZ(0px)'}}>
        {skillCategories.map(renderSkillsContainer)}
      </div>
      
      <div className="rightSide">
        <h1 className="catName">Patient</h1>
        <div className="percentage">
          <div className="counterView">
            %
            {digits.map((digit, idx) => (
              <div className="counterContainer" key={idx}>
                <div
                  className="counterColumn"
                  style={{ transform: getTranslateY(digit), transition: 'transform 0.3s ease-in-out' }}
                >
                  {[9,8,7,6,5,4,3,2,1,0].map((d, i) => (
                    <div className="digit" key={i}><span>{d}</span></div>
                  ))}
                </div>
                <span className="digitPlaceholder">0</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default SkillsSection;