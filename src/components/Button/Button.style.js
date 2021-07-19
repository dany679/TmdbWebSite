import styled from 'styled-components';

export const Wrapper = styled.button`
  display: grid;
  cursor: pointer;
  margin: 0 auto;
  padding: 5px;
  color: var(--white);
  border-radius: 13px;
  padding: 0 18%;
  margin-bottom: 20px;

  p {
    font-size: var(--fontMedium);
  }
  background-color: var(--darkGrey);
  :hover {
    transition: all ease-in-out 0.2s;
    background-color: var(--medGrey);
  }
  @media (min-width: 720px) {
    font-size: var(--fontLargeBig);
  }
`;
