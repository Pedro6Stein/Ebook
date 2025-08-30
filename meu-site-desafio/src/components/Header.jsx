import React from 'react';
import styled from 'styled-components';
import { colors } from '../data/colors';
import content from '../data/content.json'

const HeaderWrapper = styled.header`
  background-color: ${colors.darkBackground};
  padding: 15px 0;
  text-align: center;
  width: 100%;
  border-bottom: 2px solid ${colors.primary};
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: ${colors.lightText};
`;

function Header() {
  return (
    <HeaderWrapper>
      <Title>{content.header.title}</Title>
    </HeaderWrapper>
  );
}

export default Header;