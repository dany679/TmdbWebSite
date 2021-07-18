import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: var(--darkGrey);
  color: var(--white);
`;
export const Content = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  div:nth-child(2) {
    border-bottom: 1px solid whitesmoke;
    border-top: 1px solid whitesmoke;
  }
  @media (min-width: 720px) {
    grid-template-columns: repeat(3, 1fr);
    div:nth-child(2) {
      border: none;
      border-style: none;
    }
  }
`;
