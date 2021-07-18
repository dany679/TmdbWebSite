import styled from 'styled-components';

export const Wrapper = styled.button`
  display: block;
  cursor: pointer;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 5px;
  width: 50%;
  color: var(--white);
  border-radius: 13px;
  font-size: var(--fontMedium);
  background-color: var(--darkGrey);
  :hover {
    transition: all ease-in-out 0.2s;
    background-color: var(--medGrey);
  }
  @media (min-width: 720px) {
    width: 40%;
    font-size: var(--fontBig);
  }
`;
