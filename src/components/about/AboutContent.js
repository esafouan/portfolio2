import React, { useState, useEffect } from 'react';

const skillLogos = {
  'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'CSS/SCSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
  'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
};

const TypingText = ({ text, speed = 50, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started || index >= text.length) return;
    const interval = setTimeout(() => {
      setDisplayText((prev) => prev + text[index]);
      setIndex((prev) => prev + 1);
    }, speed);
    return () => clearTimeout(interval);
  }, [index, text, speed, started]);

  return (
    <span>
      {displayText}
      <span className="cursor">|</span>
    </span>
  );
};

const SkillTag = ({ skill, delay = 0 }) => (
  <span
    className="skill-tag"
    style={{
      animation: `fadeInUp 0.6s ease-out ${delay}ms forwards`,
      opacity: 0,
    }}
  >
    <img
      src={skillLogos[skill]}
      alt={skill}
      title={skill}
      style={{ width: '24px', height: '24px' }}
    />
  </span>
);

const CVButton = () => {
  const handleDownload = () => {
    const content = `
El-Mahdi Safouane - Software Developer

A Software Developer who creates seamless, scalable, and visually stunning web and mobile applications.
Expertise: React.js, Next.js, Node.js, JavaScript, TypeScript, CSS/SCSS, MongoDB, PostgreSQL

Contact: example@email.com
Location: Benguerir, Morocco
    `;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'ElMahdi_Safouane_CV.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <button className="cv-button" onClick={handleDownload}>
      <span className="download-icon">↓</span>
      Download CV
    </button>
  );
};

const About = () => (
  <div className="portfolio-container">
    <style>
      {`
        .portfolio-container {
          max-height: 770px;
          overflow-y: auto;
          color: #111827;
        }

        .content-wrapper {
          max-width: 768px;
          margin: auto;
        }

        .main-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 300;
          margin-bottom: 1rem;
          animation: slideDown 0.8s ease-out 0.3s forwards;
          opacity: 0;
        }

        .decorative-line {
          width: 80px;
          height: 3px;
          margin: 30px 0;
          background: linear-gradient(to right, #000, #666);
          border-radius: 2px;
        }

        .description-paragraph {
          font-size: 1.125rem;
          color: #374151;
          line-height: 1.6;
        }

        .skills-title {
          font-size: 1.25rem;
          font-weight: 500;
          color: #1F2937;
          margin: 3rem 0 1.5rem;
        }

        .skills-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: start;
        }

        .skill-tag {
          width: 48px;
          height: 48px;
          border-radius: 9999px;
          background: #f3f4f6;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }

        .skill-tag:hover {
          transform: scale(1.1);
          background: #e5e7eb;
        }

        .cv-button {
          display: inline-flex;
          align-items: center;
          padding: 1rem 2rem;
          background: black;
          color: white;
          font-weight: 500;
          border-radius: 9999px;
          margin-top: 2rem;
          cursor: pointer;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .cv-button:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }

        .download-icon {
          font-size: 1.25rem;
          margin-right: 0.5rem;
        }

        .cursor {
          animation: pulse 1s infinite;
          color: #9ca3af;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .portfolio-container { padding: 1rem; }
          .skills-container { justify-content: center; }
        }
      `}
    </style>
    <div className="content-wrapper">
      <h1 className="main-title">El-Mahdi Safouane</h1>
      <div className="decorative-line"></div>

      <p className="description-paragraph">
        <TypingText
          text="A Software Engineer based in Benguerir, Morocco. Who creates seamless, scalable, and visually stunning web applications. With expertise in : "
          speed={30}
          delay={1000}
        />
      </p>

      <div className="skills-title">Skills :</div>
      <div className="skills-container">
        {Object.keys(skillLogos).map((skill, idx) => (
          <SkillTag key={skill} skill={skill} delay={idx * 100} />
        ))}
      </div>

      <p className="description-paragraph">
        <TypingText
          text="I blend functionality with aesthetics to deliver impactful solutions. Known for my creative problem-solving, I bridge the gap between frontend and backend with precision."
          speed={25}
          delay={4000}
        />
      </p>
      
      <p className="location-text">
        <TypingText
          text="Ensuring every detail contributes to an exceptional user experience."
          speed={30}
          delay={7000}
        />
      </p>
 
      <CVButton />
    </div>
  </div>
);

export default About;
