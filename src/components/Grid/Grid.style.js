import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  //max-width: 80%;
  padding: 0 20px;
  h2 {
    color: var(--medGrey);
    @media (min-width: 720px) {
      font-size: var(--fontBig);
    }
  }
`;
export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  @media (min-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
  grid-gap: 2rem;
  justify-items: center;
  margin-bottom: 20px;
`;
