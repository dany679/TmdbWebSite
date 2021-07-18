import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  color: var(--white);
  background-color: var(--medGrey);
  p,
  a {
    font-size: var(--fontSmall);
  }
  h5 {
    font-size: var(--fontMedium);
    text-transform: uppercase;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    h5 {
      font-size: var(--fontBig);
    }
    p,
    a {
      font-size: var(--fontMedium);
    }
  }
  padding: 20px 0;
  text-align: left;
  .contact {
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
      margin-left: 5px;
      cursor: pointer;
    }
  }
`;
export const Content = styled.div`
  display: grid;
  width: 100%;
  align-content: space-around;
  justify-items: center;
  .icons {
    color: white;
    a:hover img {
      padding-bottom: 10px;
    }
  }
  // underline effects
  .underline {
    margin: 0 auto;
    padding: 0;
    text-align: center;
  }
  .underline a {
    position: relative;
    display: block;
    color: #ecf0f1;
    text-transform: uppercase;
    transition: 0.5s;
    text-decoration: none;
    color: var(--white);
    padding: 10px 0;
  }
  .underline a::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 5px;
    top: 100%;
    left: 0;
    background: var(--darkGrey);
    transition: transform 0.5s;
    transform: scaleX(0);
    transform-origin: bottom;
  }
  .underline a:hover {
    opacity: 0.8;
  }
  .underline a:hover::after {
    transform: scaleX(1);
    transform-origin: center;
  }
`;
