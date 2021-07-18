//utilities
import { calcTime, convertMoney } from '../../helpers';
//styles
import { Content, Wrapper } from './MovieInfoBar.style';
//verify props
import PropTypes from 'prop-types';

const MovieInfoBar = ({ budget, runtime, revenue }) => {
  return (
    <Wrapper>
      <Content>
        <div>
          <p>
            Budget: {budget === 0 ? 'Not know' : convertMoney(budget) + '.00'}
          </p>
        </div>
        <div>
          <p>
            Revenue:{' '}
            {revenue === 0 ? 'Not know' : convertMoney(revenue) + '.00'}
          </p>
        </div>
        <div>
          <p>Time: {runtime === 0 ? 'Not know' : calcTime(runtime)}</p>
        </div>
      </Content>
    </Wrapper>
  );
};
MovieInfoBar.prototype = {
  budget: PropTypes.number,
  runtime: PropTypes.number,
  revenue: PropTypes.number,
};

export default MovieInfoBar;
