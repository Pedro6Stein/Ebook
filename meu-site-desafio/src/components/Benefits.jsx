// src/components/Benefits.jsx

import React from 'react';
import styled from 'styled-components';
import { colors } from '../data/colors';
import content from '../data/content.json';

// Importar as imagens de bônus com a extensão correta
import bonus1 from '../assets/bonus1.png';
import bonus2 from '../assets/bonus2.png';
import bonus3 from '../assets/bonus3.png';

// Mapeamento para as imagens de bônus
const bonusImages = {
  'bonus1.png': bonus1,
  'bonus2.png': bonus2,
  'bonus3.png': bonus3,
};

const BenefitsSection = styled.section`
  padding: 50px 20px;
  text-align: center;
  background-color: ${colors.darkBackground};
`;

const Title = styled.h2`
  font-size: 2rem;
  color: ${colors.secondary};
  margin-bottom: 40px;

  @media(max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const BonusGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
  flex-wrap: wrap;
`;

const BonusCard = styled.div`
  max-width: 300px;
  background-color: ${colors.background};
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BonusImage = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const BonusTitle = styled.h3`
  font-size: 1.4rem;
  color: ${colors.lightText};
  margin-bottom: 10px;
`;

const BonusDescription = styled.p`
  font-size: 0.9rem;
  color: ${colors.greyText};
`;

function Benefits() {
  return (
    <BenefitsSection>
      <Title>{content.benefits.title}</Title>
      <BonusGrid>
        {content.benefits.bonusItems.map((bonus, index) => (
          <BonusCard key={index}>
            <BonusImage src={bonusImages[bonus.image]} alt={bonus.title} />
            <BonusTitle>{bonus.title}</BonusTitle>
            <BonusDescription>{bonus.description}</BonusDescription>
          </BonusCard>
        ))}
      </BonusGrid>
    </BenefitsSection>
  );
}

export default Benefits;