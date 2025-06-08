import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCode, FaGlobe } from 'react-icons/fa';

const ProjectsSection = styled.section`
  padding: 100px 50px;
  background-color: ${props => props.theme.background};

  @media (max-width: 768px) {
    padding: 80px 20px;
  }
`;

const ProjectsContent = styled.div`
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
  margin-bottom: 50px;
  color: ${props => props.theme.text};
  letter-spacing: -0.5px;
`;

const Timeline = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(
      to bottom,
      ${props => props.theme.gradientStart},
      ${props => props.theme.gradientEnd},
      transparent
    );

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const ExperienceItem = styled(motion.div)`
  position: relative;
  padding-left: 40px;
  margin-bottom: 40px;

  &::before {
    content: '';
    position: absolute;
    left: -5px;
    top: 8px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${props => props.theme.primary};
    border: 3px solid ${props => props.theme.background};
    box-shadow: 0 0 0 2px ${props => props.theme.primary};

    @media (max-width: 768px) {
      display: none;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

const ExperienceCard = styled.div`
  background: ${props => props.theme.cardBackground};
  border: 1px solid ${props => props.theme.border};
  border-radius: 12px;
  padding: 28px;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${props => props.theme.primary};
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
    transform: translateY(-2px);
  }
`;

const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
  flex-wrap: wrap;
  gap: 8px;
`;

const ExperienceInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const CompanyLogo = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 10px;
  object-fit: contain;
  flex-shrink: 0;
`;

const ExperienceText = styled.div``;

const ExperienceTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${props => props.theme.text};
  margin-bottom: 4px;
`;

const ExperienceCompany = styled.span`
  font-size: 1rem;
  color: ${props => props.theme.primary};
  font-weight: 600;
`;

const ExperienceDate = styled.span`
  font-size: 0.85rem;
  color: ${props => props.theme.secondary};
  background: ${props => props.theme.sectionAlt};
  padding: 4px 12px;
  border-radius: 6px;
  font-weight: 500;
  white-space: nowrap;
`;

const ExperienceDescription = styled.div`
  color: ${props => props.theme.secondary};
  line-height: 1.7;
  font-size: 0.95rem;

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 10px;
    padding-left: 20px;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 10px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: ${props => props.theme.primary};
      opacity: 0.6;
    }
  }
`;

const AcademicSection = styled.div`
  margin-top: 80px;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const ProjectCard = styled(motion.div)`
  background: ${props => props.theme.cardBackground};
  border: 1px solid ${props => props.theme.border};
  border-radius: 12px;
  padding: 28px;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${props => props.theme.primary};
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
    transform: translateY(-2px);
  }
`;

const ProjectIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: ${props => props.theme.sectionAlt};
  color: ${props => props.theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  color: ${props => props.theme.text};
  margin-bottom: 12px;
`;

const ProjectDescription = styled.div`
  color: ${props => props.theme.secondary};
  line-height: 1.7;
  font-size: 0.95rem;
  margin-bottom: 16px;

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 8px;
    padding-left: 20px;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 10px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: ${props => props.theme.primary};
      opacity: 0.6;
    }
  }
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const ProjectTag = styled.span`
  font-size: 0.8rem;
  color: ${props => props.theme.primary};
  background: ${props => props.theme.sectionAlt};
  padding: 4px 12px;
  border-radius: 6px;
  font-weight: 600;
`;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Projects: React.FC = () => {
  return (
    <ProjectsSection id="experience">
      <ProjectsContent>
        <SectionLabel
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Career
        </SectionLabel>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </SectionTitle>

        <Timeline>
          <ExperienceItem
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ExperienceCard>
              <ExperienceHeader>
                <ExperienceInfo>
                  <CompanyLogo src={"/mulpuri.io/logos/oracle.svg"} alt="Oracle" />
                  <ExperienceText>
                    <ExperienceTitle>Senior Software Engineer</ExperienceTitle>
                    <ExperienceCompany>Oracle</ExperienceCompany>
                  </ExperienceText>
                </ExperienceInfo>
                <ExperienceDate>Mar 2020 - Present</ExperienceDate>
              </ExperienceHeader>
              <ExperienceDescription>
                <ul>
                  <li>Designed and implemented telemetry and distributed tracing for Oracle NetSuite ERP using Jaeger, providing internal libraries, APIs and guidelines that enhanced observability across the product</li>
                  <li>Configured and deployed distributed OpenSearch clusters across multiple OCI regions for data availability and performance</li>
                  <li>Built Control Plane APIs and Scheduled Tasks for managing ad-hoc and recurring tasks programmatically</li>
                  <li>Redesigned the Anomaly Detection tool with RESTful services, new database schema, ReactJS UI, and SSO integration via OpenID Connect</li>
                  <li>Added Terraform support for new OCI services and resources in the Terraform Provider for Oracle Cloud Infrastructure</li>
                  <li>Built Unified Analytics Data Platform for measuring developer adoption using Terraform, Spark Java, and OCI SDKs</li>
                </ul>
              </ExperienceDescription>
            </ExperienceCard>
          </ExperienceItem>

          <ExperienceItem
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ExperienceCard>
              <ExperienceHeader>
                <ExperienceInfo>
                  <CompanyLogo src={"/mulpuri.io/logos/cisco.svg"} alt="Cisco" />
                  <ExperienceText>
                    <ExperienceTitle>Software Engineer</ExperienceTitle>
                    <ExperienceCompany>Cisco Systems</ExperienceCompany>
                  </ExperienceText>
                </ExperienceInfo>
                <ExperienceDate>Feb 2018 - Feb 2020</ExperienceDate>
              </ExperienceHeader>
              <ExperienceDescription>
                <ul>
                  <li>Designed and implemented a messaging framework using ZeroMQ for Cisco NGFW High Availability communication</li>
                  <li>Implemented REST APIs for managing firewall operations using Java and Neo4J</li>
                  <li>Led platform bring-up for Cisco Firepower 1010, 1120, 1140 devices</li>
                  <li>Analyzed and improved slow-performing firewall components</li>
                  <li>Built scenario-based automation using Behave framework in Python</li>
                </ul>
              </ExperienceDescription>
            </ExperienceCard>
          </ExperienceItem>

          <ExperienceItem
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ExperienceCard>
              <ExperienceHeader>
                <ExperienceInfo>
                  <CompanyLogo src={"/mulpuri.io/logos/cisco.svg"} alt="Cisco" />
                  <ExperienceText>
                    <ExperienceTitle>Software Engineer Intern</ExperienceTitle>
                    <ExperienceCompany>Cisco Systems</ExperienceCompany>
                  </ExperienceText>
                </ExperienceInfo>
                <ExperienceDate>May 2017 - Dec 2017</ExperienceDate>
              </ExperienceHeader>
              <ExperienceDescription>
                <ul>
                  <li>Developed the reporting feature for Cisco NGFW devices</li>
                  <li>Designed algorithms for traffic trend analysis and report generation</li>
                  <li>Built with Java and Lucene as the backend</li>
                </ul>
              </ExperienceDescription>
            </ExperienceCard>
          </ExperienceItem>

          <ExperienceItem
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ExperienceCard>
              <ExperienceHeader>
                <ExperienceInfo>
                  <CompanyLogo src={"/mulpuri.io/logos/pega.svg"} alt="Pegasystems" />
                  <ExperienceText>
                    <ExperienceTitle>Software Engineer</ExperienceTitle>
                    <ExperienceCompany>Pegasystems</ExperienceCompany>
                  </ExperienceText>
                </ExperienceInfo>
                <ExperienceDate>Jul 2013 - Dec 2015</ExperienceDate>
              </ExperienceHeader>
              <ExperienceDescription>
                <ul>
                  <li>Built a custom framework on Apache CXF to expose core Pega platform services externally</li>
                  <li>Implemented Single Sign-On with SAML 2.0 for the Pega product</li>
                  <li>Integrated OpenCMIS client API for routing attachments to external CMS</li>
                  <li>Optimized runtime execution and improved product performance</li>
                </ul>
              </ExperienceDescription>
            </ExperienceCard>
          </ExperienceItem>
        </Timeline>

        <AcademicSection>
          <SectionLabel
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Projects
          </SectionLabel>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Academic Experience
          </SectionTitle>

          <ProjectsGrid>
            <ProjectCard
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ProjectIcon><FaCode size={24} /></ProjectIcon>
              <ProjectTitle>C Compiler</ProjectTitle>
              <ProjectDescription>
                <ul>
                  <li>Developed a C compiler supporting variable declarations, pointers, function definitions, and loops</li>
                  <li>Used Flex to parse C programs into tokens and added semantics to the grammar using Bison</li>
                </ul>
              </ProjectDescription>
              <ProjectTags>
                <ProjectTag>C</ProjectTag>
                <ProjectTag>Flex</ProjectTag>
                <ProjectTag>Bison</ProjectTag>
                <ProjectTag>Compilers</ProjectTag>
              </ProjectTags>
            </ProjectCard>

            <ProjectCard
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ProjectIcon><FaGlobe size={24} /></ProjectIcon>
              <ProjectTitle>Placement Office Website</ProjectTitle>
              <ProjectDescription>
                <ul>
                  <li>Developed a website for Placement Office, Osmania University to streamline campus placement processes</li>
                  <li>Built with Java, Struts, Hibernate, HTML, CSS, and JavaScript</li>
                </ul>
              </ProjectDescription>
              <ProjectTags>
                <ProjectTag>Java</ProjectTag>
                <ProjectTag>Struts</ProjectTag>
                <ProjectTag>Hibernate</ProjectTag>
                <ProjectTag>JavaScript</ProjectTag>
              </ProjectTags>
            </ProjectCard>
          </ProjectsGrid>
        </AcademicSection>
      </ProjectsContent>
    </ProjectsSection>
  );
};

export default Projects;
