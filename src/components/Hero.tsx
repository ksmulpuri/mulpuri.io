import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 50px;
  background-color: ${props => props.theme.background};
`;

const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 20px;
  color: ${props => props.theme.text};
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: ${props => props.theme.secondary};
  margin-bottom: 20px;
  max-width: 800px;
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  flex-wrap: wrap;
  justify-content: center;
`;

const ContactItem = styled.a`
  color: ${props => props.theme.text};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    color: ${props => props.theme.primary};
  }
`;

const LinkedInButton = styled(ContactItem)`
  background-color: #0077b5;
  color: white;
  padding: 10px 24px;
  border-radius: 25px;
  font-weight: 600;
  font-size: 1.1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: background 0.2s, transform 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 10px;

  &:hover {
    background-color: #005983;
    color: #fff;
    transform: translateY(-2px) scale(1.04);
    text-decoration: none;
  }
`;

const CTAButton = styled(motion.a)`
  padding: 15px 30px;
  font-size: 1.1rem;
  background-color: ${props => props.theme.primary};
  color: white;
  border-radius: 30px;
  transition: all 0.3s ease;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const Hero: React.FC = () => {
  return (
    <HeroSection id="home">
      <HeroContent>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Krishna Sai Mulpuri
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Senior Software Engineer at Oracle | Full Stack Developer | Cloud Infrastructure Specialist
        </Subtitle>
        <ContactInfo
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <LinkedInButton href="https://www.linkedin.com/in/mulpk/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={22} />
            Connect on LinkedIn
          </LinkedInButton>
        </ContactInfo>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero; 