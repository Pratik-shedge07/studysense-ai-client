import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #1e1e2f;
  color: #bbb;
  padding: 1rem 2rem;
  text-align: center;
  margin-top: auto;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>© {new Date().getFullYear()} StudySense AI. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
