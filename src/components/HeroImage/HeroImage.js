import React from 'react';
import { Content, Text, Wrapper } from './HeroImage.style';

const HeroImage = ({ title, about, image }) => {
  return (
    <Wrapper image={image}>
      <Content>
        <Text>
          <h1>{title}</h1>
          <h3>{about}</h3>
        </Text>
      </Content>
    </Wrapper>
  );
};

export default HeroImage;
