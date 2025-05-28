import React, { useState, useEffect } from 'react';

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
    <div className="typing-text-wrapper">
      <div className="invisible-text">{text}</div>
      <div className="visible-text-container">
        <span className="visible-text">{displayText}</span>
        <span className="cursor">|</span>
      </div>
    </div>
  );
};

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
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        .portfolio-container {
          max-height: 650px;
          overflow: scroll;
          scrollbar-width: none;
          -ms-overflow-style: none;
          &::-webkit-scrollbar {
            display: none;
          }
          color: #111827;
        }

        .responsive-wrapper {
          width: calc(100vw - 520px);
          max-width: calc(100vw - 520px);
          padding: 0 1rem;
        }

        .content-wrapper {
          max-width: 768px;
          margin: auto;
        }

        .main-title {
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          font-weight: 300;
          margin-bottom: 1rem;
          animation: slideDown 0.8s ease-out 0.3s forwards;
          opacity: 0;
        }

        .decorative-line {
          width: 80px;
          height: 3px;
          margin-bottom: 1rem;

          background: linear-gradient(to right, #000, #666);
          border-radius: 2px;
        }

        .description-paragraph {
          font-size: clamp(0.95rem, 1.2vw, 1.4rem);
          color: #374151;
          line-height: 1.6;
          margin-bottom: 1.25rem;
          position: relative;
          text-align: left;
        }

        .typing-text-wrapper {
          position: relative;
          display: block;
          width: 100%;
          min-height: 1.6em;
        }

        .invisible-text {
          visibility: hidden;
          position: absolute;
          top: 0;
          left: 0;
          white-space: pre-wrap;
          width: 100%;
          font-size: inherit;
          line-height: inherit;
          text-align: left;
        }

        .visible-text-container {
          position: relative;
          display: block;
          width: 100%;
          text-align: left;
        }

        .visible-text {
          white-space: pre-wrap;
          display: inline;
          text-align: left;
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
          display: inline-block;
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
        @media (max-width: 1150px) {
          .portfolio-container {
            padding: .5rem;
          }

          .main-title {
            font-size: clamp(1.2rem, 5vw, 2.25rem);
            text-align: center;
          }

          .description-paragraph {
            text-align: justify;
            font-size: clamp(1.5rem, 1.7vw, 1.6rem);
          }

          .decorative-line {
            margin: 1rem auto;
          }
          .responsive-wrapper {
            width: 100%;
            max-width: 100%;
          }
            .content-wrapper {
            padding: 0 .7rem;
          }
      }

        @media (max-width: 768px) {
          .portfolio-container {
            padding: 0rem;
          }

          .main-title {
            font-size: clamp(1.2rem, 5vw, 2.25rem);
            text-align: center;
          }

          .description-paragraph {
            text-align: justify;
            font-size: clamp(1.1rem, 1.1vw, 1.05rem);
          }

          .decorative-line {
            margin: 1rem auto;
          }

          .responsive-wrapper {
            width: 100%;
            max-width: 100%;
          }

          .content-wrapper {
            padding: 0 .3rem;
          }
        }

        @media (max-width: 330px) {
          .main-title {
              font-size: clamp(.7rem, 5vw, 2.25rem);
              text-align: center;
          }
          .description-paragraph {
            text-align: justify;
            font-size: clamp(.8rem, 1.1vw, 1.05rem);
          }
       }
      `}
    </style>
    <div className="responsive-wrapper">
      <div className="content-wrapper">
        <h1 className="main-title">Software Engineer</h1>
        <div className="decorative-line"></div>

        <p className="description-paragraph">
          <TypingText
            text="I'm a Software Engineer based in Benguerir, Morocco, with a focus on frontend development. I build scalable, high-performance web applications that prioritize both efficiency and user experience."
            speed={30}
            delay={1000}
          />
        </p>

        <p className="description-paragraph">
          <TypingText
            text="Combining technical precision with a keen eye for usability, I ensure seamless integration between frontend and backend systems."
            speed={25}
            delay={4000}
          />
        </p>

        <p className="description-paragraph">
          <TypingText
            text="Driven by creative problem-solving, I pay attention to every detail to deliver impactful and polished digital experiences."
            speed={30}
            delay={7000}
          />
        </p>
  
      </div>
    </div>

  </div>
);

export default About;
