import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsSection = styled.section`
  min-height: 100vh;
  padding: 100px 50px;
  background-color: ${props => props.theme.background};
`;

const ProjectsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: ${props => props.theme.text};
`;

const ExperienceSection = styled(motion.div)`
  margin-bottom: 80px;
`;

const ExperienceItem = styled(motion.div)`
  background-color: ${props => props.theme.cardBackground};
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const ExperienceTitle = styled.h3`
  font-size: 1.5rem;
  color: ${props => props.theme.text};
  margin-bottom: 10px;
`;

const ExperienceCompany = styled.h4`
  font-size: 1.2rem;
  color: ${props => props.theme.primary};
  margin-bottom: 5px;
`;

const ExperienceDate = styled.span`
  color: ${props => props.theme.secondary};
  font-size: 1rem;
  display: block;
  margin-bottom: 15px;
`;

const ExperienceDescription = styled.div`
  color: ${props => props.theme.text};
  line-height: 1.6;
  
  ul {
    list-style-type: disc;
    margin-left: 20px;
  }
  
  li {
    margin-bottom: 8px;
  }
`;

const Projects: React.FC = () => {
  return (
    <ProjectsSection id="projects">
      <ProjectsContent>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Professional Experience
        </SectionTitle>

        <ExperienceSection
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ExperienceItem
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <ExperienceTitle>Senior Software Engineer</ExperienceTitle>
            <ExperienceCompany>Oracle</ExperienceCompany>
            <ExperienceDate>Mar 2020 - Present</ExperienceDate>
            <ExperienceDescription>
              <ul>
                <li>Designed and implemented telemetry and distributed tracing for Oracle NetSuite ERP using Jaeger, provided internal libraries, APIs and guidelines for internal teams, enhancing observability and performance monitoring across the product</li>
                <li>Configured and deployed distributed OpenSearch clusters across multiple OCI regions, including local, regional, and global setups, to enhance data availability and performance for Oracle NetSuite ERP</li>
                <li>Worked on other Observability features including Control Plane APIs, Scheduled Tasks to manage various ad-hoc and recurring tasks programmatically</li>
                <li>Redesigned and implemented the Anomaly Detection tool in Oracle NetSuite ERP which includes creating RESTful web services and a new database schema, migrating data from the legacy tool to new one using custom code, developing new user interface using ReactJS, ensuring a modern, responsive design integrated with corporate Single Sign-On (SSO) using OpenID Connect for secure and streamlined access</li>
                <li>Worked on Terraform Provider for Oracle Cloud Infrastructure (OCI) – added terraform support for new OCI services and new resources in the existing services</li>
                <li>Worked on building Unified Analytics Data Platform for measuring the Developer adoption and user engagement data for OCI. Specific responsibilities include building pipeline infrastructure using terraform, writing business logic in spark java, building monitoring framework for the pipeline which involves writing code in java using OCI SDKs</li>
              </ul>
            </ExperienceDescription>
          </ExperienceItem>

          <ExperienceItem
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ExperienceTitle>Software Engineer</ExperienceTitle>
            <ExperienceCompany>Cisco Systems</ExperienceCompany>
            <ExperienceDate>Feb 2018 - Feb 2020</ExperienceDate>
            <ExperienceDescription>
              <ul>
                <li>Designed and implemented a messaging framework using ZeroMQ and it is used by Cisco Next Generation Firewall devices to communicate with each other in High Availability mode</li>
                <li>Implemented REST APIs to efficiently manage various firewall operations using Java stack and Neo4J</li>
                <li>Worked on the platform bring-up effort for Cisco Next-Generation Firewall (NGFW) Firepower 1010, 1120, 1140 devices</li>
                <li>Analyzed/improved slow performing components of the firewall</li>
                <li>Wrote scenario based automation for various firewall features using Behave framework in python</li>
              </ul>
            </ExperienceDescription>
          </ExperienceItem>

          <ExperienceItem
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <ExperienceTitle>Software Engineer, Intern</ExperienceTitle>
            <ExperienceCompany>Cisco Systems</ExperienceCompany>
            <ExperienceDate>May 2017 – Dec 2017</ExperienceDate>
            <ExperienceDescription>
              <ul>
                <li>Involved in the development of the reporting feature of Cisco NGFW devices</li>
                <li>Designed and developed algorithms to generate reports that show trends of the traffic that passes through the device</li>
                <li>Coded in Java and used Lucene as the backend</li>
              </ul>
            </ExperienceDescription>
          </ExperienceItem>

          <ExperienceItem
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <ExperienceTitle>Software Engineer</ExperienceTitle>
            <ExperienceCompany>Pegasystems</ExperienceCompany>
            <ExperienceDate>July 2013 - Dec 2015</ExperienceDate>
            <ExperienceDescription>
              <ul>
                <li>Developed a custom framework on top of Apache CXF which exposed the core pega platform services to outside world</li>
                <li>Involved in feature development of Single Sign On with SAML 2.0 into the pega product</li>
                <li>Integrated OpenCMIS client api into the product, so that attachments can be routed to external Content Management Systems</li>
                <li>Worked on the performance aspects of the product which require analyzing the runtime execution for improvements</li>
              </ul>
            </ExperienceDescription>
          </ExperienceItem>
        </ExperienceSection>
      </ProjectsContent>
    </ProjectsSection>
  );
};

export default Projects; 