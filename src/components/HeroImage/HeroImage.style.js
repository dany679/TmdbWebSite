//import { Content, Text, Wrapper } from './HeroImage.style';

import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 41%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(${({ image }) => image}), var(--darkGrey);
  background-position: center top 5%;
  background-size: 100%, cover;
  position: relative;
  height: 400px;
  @media (min-width: 900px) {
    height: 60vh;
    max-height: 720px;
  }
  animation: animateHeroImage 0.2s;
  @keyframes animateHeroImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
export const Content = styled.div`
  padding: 20px;
  margin: 0 auto;
`;
export const Text = styled.div`
  position: absolute;
  bottom: 40px;
  color: var(--white);
  z-index: 100;
  margin-right: 40px;
  min-height: 100px;
  max-width: 100%;

  @media (min-width: 900px) {
    max-width: 50%;

    h1 {
      font-size: var(--fontBig);
      @media (min-width: 900px) {
        font-size: var(--fontLargeBig);
      }
      p {
        font-size: var(--fontSmall);
        @media (min-width: 900px) {
          font-size: var(--fontMedium);
        }
      }
    }
  }
`;
