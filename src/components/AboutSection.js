import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  color: #333;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-family: serif;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const AboutSection = () => {
  return (
    <AboutContainer>
      <AboutTitle>About Me</AboutTitle>
      <AboutText>
        Hello! I'm a passionate developer with expertise in creating beautiful and functional web applications.
        My journey in web development started several years ago, and I've been constantly learning and improving my skills.
      </AboutText>
      <AboutText>
        I specialize in modern frontend technologies including React, JavaScript, and CSS. I'm also experienced in
        backend development and enjoy creating full-stack applications.
      </AboutText>
      <AboutText>
        When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
        or enjoying outdoor activities.
      </AboutText>
    </AboutContainer>
  );
};

export default AboutSection;
