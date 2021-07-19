import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  width: 100%;
  height: 400px;
  max-height: 100%;
  border-top: 1px solid whitesmoke;
  background-color: var(--darkGrey);
  color: var(--white);
`;
export const Content = styled.div`
  display: grid;
  margin: auto auto;
  text-align: center;
  align-content: center;
  background-color: var(--medGrey);
  width: 80%;
  height: 80%;
  border-radius: 20px;
  h2 {
    font-size: var(--fontBig);
  }
  p {
    font-size: var(--fontMedium);
  }
  @media (min-width: 768px) {
    font-size: var(--fontBig);
    h2 {
      font-size: var(--fontLargeBig);
    }
  }
  a {
    text-decoration: none;
  }

  /* button {
    background-color: var(--darkGrey);
    width: 100px;
    height: 30px;
    a {
      color: var(--white);
      text-decoration: none;
    }
  } */
`;
