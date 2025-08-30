import React from 'react';
import styled from 'styled-components';
import { colors } from '../data/colors'; // Importa as cores
import content from '../data/content.json'; // Importa o conteúdo

// Importar a imagem do selo de garantia
import guaranteeBadge from '../assets/guarantee-badge.jpg';

const GuaranteeWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 20px;
  background-color: ${colors.darkBackground};
  flex-wrap: wrap;
  gap: 30px;
`;

const BadgeImage = styled.img`
  width: 150px;
  height: auto;
`;

const TextContainer = styled.div`
  text-align: left;
  h2 {
    color: ${colors.secondary};
    font-size: 1.8rem;
    margin-bottom: 10px;
  }
  p {
    font-size: 1.2rem;
    color: ${colors.lightText};
  }

  @media(max-width: 768px) {
    text-align: center;
  }
`;

function Guarantee() {
  return (
    <GuaranteeWrapper>
      <BadgeImage src={guaranteeBadge} alt="Garantia de 7 dias" />
      <TextContainer>
        <h2>{content.guarantee.title}</h2>
        <p>{content.guarantee.text}</p>
      </TextContainer>
    </GuaranteeWrapper>
  );
}

export default Guarantee;