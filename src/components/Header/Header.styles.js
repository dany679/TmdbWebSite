import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  background-color: var(--darkGrey);
  padding: 0 20px;
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  max-width: var(--maxWidth);
  margin: 0 auto;
`;
//const pc = ${var(--maxWidth)};
export const LogoImg = styled.img`
  width: 100px;
  @media (min-width: 1280px) {
    width: 200px;
  }
`;
export const TmdbLogoImg = styled.img`
  width: 100px;
  @media (min-width: 1280px) {
    width: 150px;
  }
`;
