import { Link } from 'react-router-dom';
import Button from '../../Button/Button';
import { Wrapper, Content } from './NotFound.style';

const NotFound = ({ text = '' }) => {
  return (
    <Wrapper>
      <Content>
        <p>{text}</p>
        <h2>404</h2>
        <Link to='/'>
          <Button text='Back to home'></Button>
        </Link>
        <p>Page Not found</p>
      </Content>
    </Wrapper>
  );
};

export default NotFound;
