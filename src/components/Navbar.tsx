import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  background-color: ${props => props.theme.navBackground};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid ${props => props.theme.border};
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Logo = styled(motion.a)`
  font-size: 1.4rem;
  font-weight: 800;
  background: linear-gradient(135deg, ${props => props.theme.gradientStart}, ${props => props.theme.gradientEnd});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.5px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 768px) {
    gap: 4px;
  }
`;

const NavLink = styled(motion.a)`
  color: ${props => props.theme.secondary};
  font-weight: 500;
  font-size: 0.9rem;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    color: ${props => props.theme.text};
    background: ${props => props.theme.border};
  }

  @media (max-width: 768px) {
    padding: 8px 10px;
    font-size: 0.85rem;
  }
`;

const Navbar: React.FC = () => {
  return (
    <Nav
      initial={{ y: -70 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Logo href="#home">KM</Logo>
      <NavLinks>
        <NavLink href="#about" whileTap={{ scale: 0.95 }}>About</NavLink>
        <NavLink href="#experience" whileTap={{ scale: 0.95 }}>Experience</NavLink>
        <NavLink href="#contact" whileTap={{ scale: 0.95 }}>Contact</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
