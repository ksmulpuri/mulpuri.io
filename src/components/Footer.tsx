import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 30px 50px;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  text-align: center;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer; 