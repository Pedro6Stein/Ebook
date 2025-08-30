// Benefits.jsx
import React from 'react';
import styled from 'styled-components';
import { colors } from '../data/colors';
import content from '../data/content.json';

// Importar imagens dos bônus
import bonus1 from '../assets/bonus1.jpg';
import bonus2 from '../assets/bonus2.jpg';
import bonus3 from '../assets/bonus3.jpg';

const bonusImages = {
  'bonus1.jpg': bonus1,
  'bonus2.jpg': bonus2,
  'bonus3.jpg': bonus3
};

const BenefitsSection = styled.section`
  padding: 50px 20px;
  text-align: center;
  background-color: ${colors.darkBackground};
`;

const Title = styled.h2`
  font-size: 2rem;
  color: ${colors.lightText};
  margin-bottom: 40px;

  @media(max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 30px;
`;

const BenefitCard = styled.div`
  background: ${colors.background};
  padding: 20px;
  border-radius: 10px;
  border: 2px solid ${colors.primary};
`;

const BenefitImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const BenefitTitle = styled.h3`
  color: ${colors.secondary};
  font-size: 1.4rem;
  margin-bottom: 10px;
`;

const BenefitDescription = styled.p`
  color: ${colors.lightText};
  font-size: 1rem;
`;

function Benefits() {
  return (
    <BenefitsSection>
      <Title>{content.benefits.title}</Title>
      <BenefitsGrid>
        {content.benefits.bonusItems.map((bonus, index) => (
          <BenefitCard key={index}>
            <BenefitImage
              src={bonusImages[bonus.image]}
              alt={bonus.title}
            />
            <BenefitTitle>{bonus.title}</BenefitTitle>
            <BenefitDescription>{bonus.description}</BenefitDescription>
          </BenefitCard>
        ))}
      </BenefitsGrid>
    </BenefitsSection>
  );
}

export default Benefits;