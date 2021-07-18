import copy from '../../images/copy.svg';
import folder from '../../images/copy.svg';

const Copy = ({ clickable }) => {
  return (
    <a href='!#' target='_blank' rel='noopener noreferrer'>
      <img src={clickable ? copy : folder} alt='' width='70' height='65'></img>
    </a>
  );
};

export default Copy;
