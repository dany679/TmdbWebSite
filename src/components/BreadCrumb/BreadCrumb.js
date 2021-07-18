import { Link } from 'react-router-dom';
import { Wrapper } from './BreadCrumb.style';
// verify props
import PropTypes from 'prop-types';

const BreadCrumb = ({ movieTitleOriginal }) => {
  return (
    <Wrapper>
      <Link to='/'>
        <span>Home &nbsp;</span>
      </Link>
      <span>| {movieTitleOriginal}</span>
    </Wrapper>
  );
};
BreadCrumb.prototype = {
  movieTitleOriginal: PropTypes.string,
};
export default BreadCrumb;
