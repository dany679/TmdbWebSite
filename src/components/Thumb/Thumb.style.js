import styled from 'styled-components';

export const Image = styled.img`
  object-fit: contain;
  border-radius: 13px;
  width: 100%;
  max-width: 720px; //add global style
  transform: scale(1);
  :hover {
    transform: scale(1.1);
    cursor: pointer;
    transition: all 0.2s ease;
  }

  // margin: 10 0;
`;
