import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const AppContainer = styled.div`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  min-height: 100vh;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </AppContainer>
  );
};

export default App; 