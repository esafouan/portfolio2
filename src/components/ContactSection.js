import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  color: white;
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-family: serif;
  color: white;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 600px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 1.2rem;
  color: white;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: white;
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: white;
  }
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background-color: white;
  color: #854836;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ContactInfo = styled.div`
  margin-top: 2rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 1.1rem;
`;

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission, like sending an email
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <ContactContainer>
      <ContactTitle>Get In Touch</ContactTitle>
      <ContactForm onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Message</Label>
          <TextArea 
            id="message" 
            name="message" 
            value={formData.message}
            onChange={handleChange}
            required 
          />
        </FormGroup>
        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm>
      
      <ContactInfo>
        <InfoItem>
          <span>Email:</span>
          <a href="mailto:contact@example.com" style={{ color: 'white' }}>contact@example.com</a>
        </InfoItem>
        <InfoItem>
          <span>Location:</span>
          <span>New York, NY</span>
        </InfoItem>
      </ContactInfo>
    </ContactContainer>
  );
};

export default ContactSection;
