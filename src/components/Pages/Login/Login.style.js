import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  align-content: space-evenly;
  justify-content: center;
  text-align: center;
  min-height: 40vh;
  label {
    font-size: var(--fontBig);
  }
  input {
    color: var(--white);
    min-height: 50px;
    height: 100%;
    width: 100%;
    border-radius: 13px;
    font-size: var(--fontSmall);
    @media (min-width: 720px) {
      font-size: var(--fontMedium);
    }
    background-color: var(--medGrey);
    :focus {
      outline: none;
    }
  }
`;
