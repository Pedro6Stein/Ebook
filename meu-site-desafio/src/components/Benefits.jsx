import React from 'react';
import styled from 'styled-components';
import { colors } from '../data/colors'; // Importa as cores
import content from '../data/content.json'; // Importa o conteúdo

// Importar todas as imagens de depoimento
import testimonial1 from '../assets/testimonial1.jpg';
import testimonial2 from '../assets/testimonial2.jpg';
// Adicione mais imports se tiver mais imagens de depoimento com nomes diferentes

// Mapeamento de nomes de arquivo para os imports de imagem
const testimonialImages = {
  'testimonial1.jpg': testimonial1,
  'testimonial2.jpg': testimonial2,
  // Adicione mais conforme necessário
};


const TestimonialsSection = styled.section`
  padding: 50px 20px;
  text-align: center;
  background-color: ${colors.background};
`;

const Title = styled.h2`
  font-size: 2rem;
  color: ${colors.lightText};
  margin-bottom: 40px;

  @media(max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 30px;
`;

const TestimonialImage = styled.img`
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
`;

function Testimonials() {
  return (
    <TestimonialsSection>
      <Title>{content.testimonials.title}</Title>
      <TestimonialsGrid>
        {content.testimonials.images.map((imageName, index) => (
          <TestimonialImage
            key={index}
            src={testimonialImages[imageName]} // Usa o mapeamento para obter a imagem importada
            alt={`Depoimento ${index + 1}`}
          />
        ))}
      </TestimonialsGrid>
    </TestimonialsSection>
  );
}

export default Testimonials;