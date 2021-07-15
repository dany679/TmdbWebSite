import { Content, Wrapper } from './Grid.style';

const Grid = ({ header, children }) => {
  return (
    <Wrapper>
      <h2>{header}</h2>
      <Content> {children}</Content>
    </Wrapper>
  );
};

export default Grid;
