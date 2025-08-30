import React from 'react';
import styled from 'styled-components';
import { colors } from '../data/colors';
import content from '../data/content.json';

const FooterWrapper = styled.footer`
  padding: 40px 20px;
  text-align: center;
  background-color: ${colors.darkBackground};
  border-top: 2px solid ${colors.primary};
`;

const FooterText = styled.p`
  color: ${colors.greyText};
  font-size: 0.9rem;
  margin-bottom: 10px;
`;

function Footer() {
  return (
    <FooterWrapper>
      <FooterText>{content.footer.copyright}</FooterText>
      <FooterText>{content.footer.disclaimer}</FooterText>
    </FooterWrapper>
  );
}

export default Footer;