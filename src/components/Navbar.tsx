import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  background-color: ${props => props.theme.background};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.primary};
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;
`;

const NavLink = styled(motion.a)`
  color: ${props => props.theme.text};
  font-weight: 500;
  
  &:hover {
    color: ${props => props.theme.primary};
  }
`;

const Navbar: React.FC = () => {
  return (
    <Nav>
      <Logo
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Portfolio
      </Logo>
      <NavLinks>
        <NavLink
          href="#home"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Home
        </NavLink>
        <NavLink
          href="#about"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          About
        </NavLink>
        <NavLink
          href="#projects"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Projects
        </NavLink>
        <NavLink
          href="#contact"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact
        </NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar; 