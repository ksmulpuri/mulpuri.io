import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  min-height: 100vh;
  padding: 100px 50px;
  background-color: ${props => props.theme.background};
`;

const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: ${props => props.theme.text};
`;

const AboutText = styled(motion.div)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${props => props.theme.text};
  margin-bottom: 40px;
`;

const Section = styled(motion.div)`
  margin-bottom: 60px;
`;

const EducationItem = styled.div`
  margin-bottom: 30px;
`;

const School = styled.h3`
  font-size: 1.3rem;
  color: ${props => props.theme.primary};
  margin-bottom: 5px;
`;

const Degree = styled.p`
  font-size: 1.1rem;
  color: ${props => props.theme.text};
  margin-bottom: 5px;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const SkillCategory = styled.div`
  background-color: ${props => props.theme.cardBackground};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const SkillTitle = styled.h3`
  font-size: 1.2rem;
  color: ${props => props.theme.primary};
  margin-bottom: 15px;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  color: ${props => props.theme.text};
  margin-bottom: 8px;
  font-size: 1rem;
`;

const CertificationsSection = styled(motion.div)`
  margin-bottom: 60px;
`;

const CertItem = styled.div`
  margin-bottom: 30px;
`;

const CertName = styled.h3`
  font-size: 1.3rem;
  color: ${props => props.theme.primary};
  margin-bottom: 5px;
`;

const CertDate = styled.p`
  font-size: 1.1rem;
  color: ${props => props.theme.text};
  margin-bottom: 5px;
`;

const About: React.FC = () => {
  return (
    <AboutSection id="about">
      <AboutContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>About Me</SectionTitle>
        </motion.div>

        <AboutText
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p>
            I am a Senior Software Engineer with over 10 years of experience in developing enterprise-level applications. 
            My expertise lies in Java development, cloud technologies, and building scalable distributed systems. 
            I have worked with major tech companies including Oracle, Cisco Systems, and Pegasystems, where I've contributed 
            to various projects involving cloud infrastructure, security, and business process automation.
          </p>
          <p>
            Throughout my career, I've focused on creating robust, maintainable, and high-performance applications. 
            I'm passionate about solving complex technical challenges and continuously learning new technologies to 
            deliver better solutions.
          </p>
        </AboutText>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <SectionTitle>Education</SectionTitle>
        </motion.div>

        <Section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <EducationItem>
            <School>University of South Carolina</School>
            <Degree>Master of Science in Computer Science and Engineering</Degree>
            <Degree>GPA: 3.79/4.0 | Graduation: Dec 2017</Degree>
          </EducationItem>
          <EducationItem>
            <School>University College of Engineering, Osmania University</School>
            <Degree>Bachelor of Engineering in Computer Science and Engineering</Degree>
            <Degree>GPA: 8.03/10.0 | Graduation: May 2013</Degree>
          </EducationItem>
        </Section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <SectionTitle>Technical Skills</SectionTitle>
        </motion.div>

        <Section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <SkillsGrid>
            <SkillCategory>
              <SkillTitle>Programming Languages</SkillTitle>
              <SkillList>
                <SkillItem>Java</SkillItem>
                <SkillItem>Python</SkillItem>
                <SkillItem>JavaScript/TypeScript</SkillItem>
                <SkillItem>C++</SkillItem>
              </SkillList>
            </SkillCategory>
            <SkillCategory>
              <SkillTitle>Cloud & DevOps</SkillTitle>
              <SkillList>
                <SkillItem>AWS</SkillItem>
                <SkillItem>Oracle Cloud Infrastructure</SkillItem>
                <SkillItem>Docker</SkillItem>
                <SkillItem>Kubernetes</SkillItem>
                <SkillItem>Terraform</SkillItem>
              </SkillList>
            </SkillCategory>
            <SkillCategory>
              <SkillTitle>Frameworks & Tools</SkillTitle>
              <SkillList>
                <SkillItem>Spring Boot</SkillItem>
                <SkillItem>React</SkillItem>
                <SkillItem>Node.js</SkillItem>
                <SkillItem>MongoDB</SkillItem>
                <SkillItem>PostgreSQL</SkillItem>
              </SkillList>
            </SkillCategory>
          </SkillsGrid>
        </Section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <SectionTitle>Certifications</SectionTitle>
        </motion.div>

        <CertificationsSection
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <CertItem>
            <CertName>Pega Certified System Architect v6.2 SP2</CertName>
            <CertDate>August 31, 2013</CertDate>
          </CertItem>
          <CertItem>
            <CertName>Oracle Certified Professional Java SE 6 Programmer</CertName>
            <CertDate>June 27, 2013</CertDate>
          </CertItem>
        </CertificationsSection>
      </AboutContent>
    </AboutSection>
  );
};

export default About; 