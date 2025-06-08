import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 100px 50px;
  background-color: ${props => props.theme.sectionAlt};

  @media (max-width: 768px) {
    padding: 80px 20px;
  }
`;

const AboutContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const SectionLabel = styled(motion.span)`
  font-size: 0.85rem;
  font-weight: 700;
  color: ${props => props.theme.primary};
  text-transform: uppercase;
  letter-spacing: 2px;
  display: block;
  margin-bottom: 12px;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 40px;
  color: ${props => props.theme.text};
  letter-spacing: -0.5px;
`;

const AboutText = styled(motion.div)`
  font-size: 1.05rem;
  line-height: 1.8;
  color: ${props => props.theme.secondary};
  margin-bottom: 60px;

  p {
    margin-bottom: 16px;
  }
`;

const SubSection = styled(motion.div)`
  margin-bottom: 60px;
`;

const SubTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${props => props.theme.text};
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 10px;

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${props => props.theme.border};
  }
`;

const EducationCard = styled(motion.div)`
  background: ${props => props.theme.cardBackground};
  border: 1px solid ${props => props.theme.border};
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 16px;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${props => props.theme.primary};
  }
`;

const School = styled.h4`
  font-size: 1.1rem;
  color: ${props => props.theme.text};
  font-weight: 600;
  margin-bottom: 4px;
`;

const Degree = styled.p`
  font-size: 0.95rem;
  color: ${props => props.theme.secondary};
  margin-bottom: 2px;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
`;

const SkillCategory = styled(motion.div)`
  background: ${props => props.theme.cardBackground};
  border: 1px solid ${props => props.theme.border};
  padding: 24px;
  border-radius: 12px;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${props => props.theme.primary};
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
  }
`;

const SkillTitle = styled.h4`
  font-size: 0.85rem;
  font-weight: 700;
  color: ${props => props.theme.primary};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 16px;
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const SkillTag = styled.span`
  font-size: 0.9rem;
  color: ${props => props.theme.text};
  background: ${props => props.theme.sectionAlt};
  padding: 6px 14px;
  border-radius: 8px;
  font-weight: 500;
`;

const CertCard = styled(motion.div)`
  background: ${props => props.theme.cardBackground};
  border: 1px solid ${props => props.theme.border};
  border-radius: 12px;
  padding: 20px 24px;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: border-color 0.2s ease;
  flex-wrap: wrap;
  gap: 8px;

  &:hover {
    border-color: ${props => props.theme.primary};
  }
`;

const CertName = styled.span`
  font-size: 1rem;
  color: ${props => props.theme.text};
  font-weight: 600;
`;

const CertDate = styled.span`
  font-size: 0.85rem;
  color: ${props => props.theme.secondary};
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const About: React.FC = () => {
  return (
    <AboutSection id="about">
      <AboutContent>
        <SectionLabel
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About
        </SectionLabel>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Background & Skills
        </SectionTitle>

        <AboutText
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>
            Senior Software Engineer with over 10 years of experience building enterprise-level applications.
            I specialize in Java development, cloud technologies, and scalable distributed systems,
            having contributed at Oracle, Cisco Systems, and Pegasystems.
          </p>
          <p>
            I'm passionate about solving complex technical challenges and building robust,
            high-performance systems that make a real impact.
          </p>
        </AboutText>

        <SubSection
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <SubTitle>Education</SubTitle>
          <EducationCard whileHover={{ scale: 1.01 }}>
            <School>University of South Carolina</School>
            <Degree>M.S. Computer Science and Engineering &middot; GPA 3.79/4.0 &middot; Dec 2017</Degree>
          </EducationCard>
          <EducationCard whileHover={{ scale: 1.01 }}>
            <School>University College of Engineering, Osmania University</School>
            <Degree>B.E. Computer Science and Engineering &middot; GPA 8.03/10.0 &middot; May 2013</Degree>
          </EducationCard>
        </SubSection>

        <SubSection
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SubTitle>Technical Skills</SubTitle>
          <SkillsGrid>
            <SkillCategory variants={itemVariants}>
              <SkillTitle>Languages</SkillTitle>
              <SkillTags>
                <SkillTag>Java</SkillTag>
                <SkillTag>Python</SkillTag>
                <SkillTag>JavaScript</SkillTag>
                <SkillTag>C</SkillTag>
                <SkillTag>C++</SkillTag>
              </SkillTags>
            </SkillCategory>
            <SkillCategory variants={itemVariants}>
              <SkillTitle>Cloud & DevOps</SkillTitle>
              <SkillTags>
                <SkillTag>OCI</SkillTag>
                <SkillTag>Docker</SkillTag>
                <SkillTag>Kubernetes</SkillTag>
                <SkillTag>Terraform</SkillTag>
                <SkillTag>SaltStack</SkillTag>
              </SkillTags>
            </SkillCategory>
            <SkillCategory variants={itemVariants}>
              <SkillTitle>Frameworks & Tools</SkillTitle>
              <SkillTags>
                <SkillTag>Spring Boot</SkillTag>
                <SkillTag>React</SkillTag>
                <SkillTag>Node.js</SkillTag>
                <SkillTag>Oracle</SkillTag>
                <SkillTag>Apache Spark</SkillTag>
                <SkillTag>TeamCity</SkillTag>
              </SkillTags>
            </SkillCategory>
          </SkillsGrid>
        </SubSection>

        <SubSection
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <SubTitle>Certifications</SubTitle>
          <CertCard whileHover={{ scale: 1.01 }}>
            <CertName>Pega Certified System Architect v6.2 SP2</CertName>
            <CertDate>Aug 2013</CertDate>
          </CertCard>
          <CertCard whileHover={{ scale: 1.01 }}>
            <CertName>Oracle Certified Professional Java SE 6 Programmer</CertName>
            <CertDate>Jun 2013</CertDate>
          </CertCard>
        </SubSection>
      </AboutContent>
    </AboutSection>
  );
};

export default About;
