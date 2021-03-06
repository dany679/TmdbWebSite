//styles
import { Wrapper } from './Button.style';
// verify props
import PropTypes from 'prop-types';

const Button = ({ text, callback }) => {
  return (
    <Wrapper type='button' onClick={callback && callback}>
      <p> {text}</p>
    </Wrapper>
  );
};
Button.propTypes = {
  text: PropTypes.string,
};
export default Button;
