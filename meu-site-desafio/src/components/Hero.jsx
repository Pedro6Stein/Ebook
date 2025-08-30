import React from 'react';
import styled from 'styled-components';
import { colors } from '../data/colors'; // Importa as cores
import content from '../data/content.json'; // Importa o conteúdo

// Importar a imagem do hero
import heroImage from '../assets/hero-image.jpg';

const HeroSection = styled.section`
  text-align: center;
  padding: 40px 20px;
  background: radial-gradient(circle, ${colors.gradientStart} 0%, ${colors.gradientEnd} 70%);
`;

const Subtitle = styled.p`
  color: ${colors.secondary};
  font-weight: bold;
  margin-bottom: 20px;
`;

const MainImage = styled.img`
  max-width: 100%;
  width: 450px;
  height: auto;
  border-radius: 10px;
  margin-bottom: 30px;
  box-shadow: 0 0 25px rgba(255, 102, 0, 0.5);
`;

const MainTitle = styled.h2`
  font-size: 2.2rem;
  color: ${colors.lightText};
  margin-bottom: 20px;
  span {
    color: ${colors.secondary};
  }

  @media(max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const PriceInfo = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const OldPrice = styled.span`
  text-decoration: line-through;
  color: ${colors.greyText};
`;

const CurrentPrice = styled.strong`
  color: ${colors.accent};
`;

const CTAButton = styled.a`
  display: inline-block;
  background-color: ${colors.primary};
  color: ${colors.darkText};
  font-size: 1.4rem;
  font-weight: 900;
  padding: 20px 40px;
  border-radius: 8px;
  text-decoration: none;
  text-transform: uppercase;
  box-shadow: 0 5px 15px rgba(255, 102, 0, 0.4);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

function Hero() {
  return (
    <HeroSection>
      <Subtitle>{content.hero.subtitle}</Subtitle>
      <MainImage src={heroImage} alt="E-book" />
      <MainTitle dangerouslySetInnerHTML={{ __html: content.hero.mainTitle.replace('ATÉ 10KG', `<span>ATÉ 10KG</span>`) }} />
      <PriceInfo>
        DE <OldPrice>{content.hero.oldPrice}</OldPrice> POR APENAS <CurrentPrice>{content.hero.currentPrice}</CurrentPrice>
      </PriceInfo>
      <CTAButton href="#">{content.hero.ctaButtonText}</CTAButton>
    </HeroSection>
  );
}

export default Hero;